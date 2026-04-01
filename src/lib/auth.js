let inMemoryToken = null;
let persistent = false; // set to true to persist token in localStorage

// Base backend URL.
export let BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_BACKEND_URL) || 'http://localhost:8080';

export function setBaseUrl(url) {
  BASE_URL = url;
}

function buildUrl(input) {
  if (!input || typeof input !== 'string') return input;
  if (input.startsWith('http') || input.startsWith('https')) return input;
  return BASE_URL.replace(/\/$/, '') + (input.startsWith('/') ? '' : '/') + input;
}

export function enablePersistentStorage(flag = true) {
  persistent = !!flag;
  if (!persistent) {
    localStorage.removeItem('auth_token');
  }
}

export function getToken() {
  if (inMemoryToken) return inMemoryToken;
  if (persistent) return localStorage.getItem('auth_token');
  return null;
}

export function setToken(token, { persist = false } = {}) {
  inMemoryToken = token || null;
  if (persist || persistent) {
    if (token) localStorage.setItem('auth_token', token);
    else localStorage.removeItem('auth_token');
  }
}

export function clearToken() {
  inMemoryToken = null;
  if (persistent) localStorage.removeItem('auth_token');
}

/**
 * login: tries network login.
 * FIX: Changed body keys to match Spring Boot expectation (userName)
 */
export async function login(email, password, { useCookies = true } = {}) {
  const res = await fetch(buildUrl('/authentication/login'), {
    method: 'POST',
    credentials: useCookies ? 'include' : 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      userName: email, // Matches backend 'userName' field
      password: password 
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Login failed with status ${res.status}`);
  }

  // Backend may return { token, user } or just { user } with httpOnly cookie
  return await res.json().catch(() => ({}));
}

// fetchCurrentUser: ask backend for current user info
export async function fetchCurrentUser(token) {
  const headers = {};
  if (token) headers['Authorization'] = `Bearer ${token}`;

  try {
    const res = await fetch(buildUrl('/authentication/me'), {
      method: 'GET',
      credentials: 'include',
      headers,
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // network error or endpoint absent
  }

  // Fallback: If backend doesn't provide /me, derive user from JWT token
  if (token) {
    const p = parseJwt(token);
    if (p) {
      return {
        user: {
          email: p.email || p.sub,
          name: p.name || p.username || null,
          role: p.role || (p.roles && (Array.isArray(p.roles) ? p.roles[0] : p.roles)) || null,
        }
      };
    }
  }

  throw new Error('Not authenticated');
}

// authFetch: attaches Authorization header if token present
export async function authFetch(input, init = {}) {
  const token = getToken();
  const headers = init.headers ? { ...init.headers } : {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  
  const url = typeof input === 'string' ? buildUrl(input) : input;
  const res = await fetch(url, { ...init, headers, credentials: 'include' });
  
  if (res.status === 401) {
    const body = await res.json().catch(() => ({}));
    const err = new Error(body.message || 'Unauthorized');
    err.status = 401;
    throw err;
  }
  return res;
}

// --- JWT helpers ---
export function parseJwt(token) {
  if (!token || typeof token !== 'string') return null;
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = parts[1];
    const b64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
    const decoded = atob(padded);
    return JSON.parse(decoded);
  } catch (e) {
    return null;
  }
}

export function tokenExpiry(token) {
  const p = parseJwt(token);
  if (!p || !p.exp) return null;
  return p.exp * 1000;
}

export function tokenExpiresIn(token) {
  const exp = tokenExpiry(token);
  if (!exp) return null;
  return exp - Date.now();
}

export function isTokenExpired(token) {
  const ms = tokenExpiresIn(token);
  return ms !== null ? ms <= 0 : false;
}
