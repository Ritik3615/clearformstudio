import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => authService.getToken());
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Initial Session Load
  useEffect(() => {
    let mounted = true;

    async function init() {
      const existingToken = authService.getToken();

      // Check if token exists and is valid
      if (existingToken && !authService.isTokenExpired(existingToken)) {
        try {
          const data = await authService.fetchCurrentUser(existingToken);
          if (mounted) {
            setToken(existingToken);
            setUser(data.user || null);
          }
        } catch (e) {
          // Token invalid or fetch failed
          authService.clearToken();
          if (mounted) {
            setToken(null);
            setUser(null);
          }
        }
      } else {
        // No token or expired, try cookie-based session
        try {
          const data = await authService.fetchCurrentUser(null);
          if (mounted) {
            setUser(data.user || null);
          }
        } catch (e) {
          // Not authenticated
          if (mounted) authService.clearToken();
        }
      }

      if (mounted) setLoading(false);
    }

    init();
    return () => { mounted = false; };
  }, []);

  // 2. Login Function
  async function login(email, password, options = { useCookies: true, persist: false }) {
    const res = await authService.login(email, password, { useCookies: options.useCookies });
    
    // If backend returns a token, store it
    if (res?.token) {
      authService.setToken(res.token, { persist: options.persist });
      setToken(res.token);
    }
    
    // Set user details (either from backend response or email fallback)
    setUser(res.user || { email });
    return res;
  }

  // 3. Logout Function
  async function logout() {
    try {
      // Best practice: tell backend to invalidate session
      await authService.authFetch('/authentication/logout', { method: 'POST' });
    } catch (e) {
      console.warn("Logout request failed, clearing local state anyway.");
    }
    authService.clearToken();
    setToken(null);
    setUser(null);
    navigate('/login');
  }

  // 4. Auto-logout Timer (Token Expiry)
  useEffect(() => {
    if (!token) return;

    const ms = authService.tokenExpiresIn(token);
    if (ms === null) return;

    // Buffer of 5 seconds
    const timeout = Math.max(ms - 5000, 0);
    const timer = setTimeout(() => {
      logout();
    }, timeout);

    return () => clearTimeout(timer);
  }, [token]);

  // Prevent children from re-rendering unless these values change
  const contextValue = useMemo(() => ({
    token,
    user,
    isAuthenticated: !!user || !!token,
    loading,
    login,
    logout
  }), [token, user, loading]);

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
