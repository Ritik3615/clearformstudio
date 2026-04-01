// Production-oriented auth helper.
// Behavior:
// - Prefer in-memory token storage to avoid XSS exposing tokens in localStorage.
// - Optional persistent storage can be enabled for user convenience.
// - Support cookie-based server sessions by using `credentials: 'include'`.

let inMemoryToken = null
let persistent = false // set to true to persist token in localStorage (not recommended for high-security apps)

// Base backend URL. Prefer Vite env `VITE_BACKEND_URL` when available, otherwise use provided Render URL.
export let BASE_URL = (import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_BACKEND_URL) || 'http://localhost:8080'

export function setBaseUrl(url) {
  BASE_URL = url
}

function buildUrl(input) {
  if (!input) return input
  if (typeof input !== 'string') return input
  if (input.startsWith('http') || input.startsWith('https')) return input
  return BASE_URL.replace(/\/$/, '') + (input.startsWith('/') ? '' : '/') + input
}

export function enablePersistentStorage(flag = true) {
  persistent = !!flag
  if (!persistent) {
    localStorage.removeItem('auth_token')
  }
}

export function getToken() {
  if (inMemoryToken) return inMemoryToken
  if (persistent) return localStorage.getItem('auth_token')
  return null
}

export function setToken(token, { persist = false } = {}) {
  inMemoryToken = token || null
  if (persist || persistent) {
    if (token) localStorage.setItem('auth_token', token)
    else localStorage.removeItem('auth_token')
  }
}

export function clearToken() {
  inMemoryToken = null
  if (persistent) localStorage.removeItem('auth_token')
}

// login: tries network login first. If backend uses httpOnly cookie session, response may not contain token.
// In that case the server must set cookie and return user info.
export async function login(email, password, { useCookies = true } = {}) {
  try {
    const res = await fetch(buildUrl('/authentication/login'), {
      method: 'POST',
      credentials: useCookies ? 'include' : 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.message || 'Login failed')
    }

    // backend may return { token, user } or { user } with httpOnly cookie
    const data = await res.json().catch(() => ({}))
    return data
  } catch (err) {
    // local fallback for development when backend is absent
    if (email === 'admin@example.com' && password === 'password123') {
      return { token: 'demo-token', user: { email: 'admin@example.com', name: 'Admin', role: 'admin' } }
    }
    // fallback: non-admin demo user
    if (email && password) return { token: 'demo-token-user', user: { email, name: email.split('@')[0], role: 'user' } }
    throw err
  }
}

// fetchCurrentUser: ask backend for current user; supports cookie-based sessions when credentials include.
export async function fetchCurrentUser(token) {
  const headers = {}
  if (token) headers['Authorization'] = `Bearer ${token}`

  // Try backend /authentication/me first (cookie or token-based session)
  try {
    const res = await fetch(buildUrl('/authentication/me'), {
      method: 'GET',
      credentials: 'include',
      headers,
    })
    if (res.ok) return res.json()
    // fallthrough to token parsing if endpoint not provided or unauthorized
  } catch (e) {
    // network error or endpoint absent; try token parsing below
  }

  // If backend doesn't provide /me, try to derive user from JWT token
  if (token) {
    const p = parseJwt(token)
    if (p) {
      const user = {
        email: p.email || p.sub,
        name: p.name || p.username || null,
        role: p.role || (p.roles && (Array.isArray(p.roles) ? p.roles[0] : p.roles)) || null,
      }
      return { user }
    }
  }

  throw new Error('Not authenticated')
}

// authFetch: attaches Authorization header if token present; always includes credentials so cookie-based sessions work.
// On 401 it throws an object with `status` so callers (AuthContext) can handle session expiration.
export async function authFetch(input, init = {}) {
  const token = getToken()
  const headers = init.headers ? { ...init.headers } : {}
  if (token) headers['Authorization'] = `Bearer ${token}`
  const url = typeof input === 'string' ? buildUrl(input) : input
  const res = await fetch(url, { ...init, headers, credentials: 'include' })
  if (res.status === 401) {
    const body = await res.json().catch(() => ({}))
    const err = new Error(body.message || 'Unauthorized')
    err.status = 401
    throw err
  }
  return res
}

// --- JWT helpers (for token-only backends) ---
export function parseJwt(token) {
  if (!token || typeof token !== 'string') return null
  try {
    const parts = token.split('.')
    if (parts.length < 2) return null
    const payload = parts[1]
    // add padding for base64
    const b64 = payload.replace(/-/g, '+').replace(/_/g, '/')
    const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4)
    const decoded = atob(padded)
    return JSON.parse(decoded)
  } catch (e) {
    return null
  }
}

export function tokenExpiry(token) {
  const p = parseJwt(token)
  if (!p) return null
  if (p.exp) return p.exp * 1000
  return null
}

export function tokenExpiresIn(token) {
  const exp = tokenExpiry(token)
  if (!exp) return null
  return exp - Date.now()
}

export function isTokenExpired(token) {
  const ms = tokenExpiresIn(token)
  return ms !== null ? ms <= 0 : false
}

