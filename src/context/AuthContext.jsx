import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as authService from '../lib/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [token, setToken] = useState(() => authService.getToken())
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let mounted = true
    async function init() {
      const existing = authService.getToken()
      if (existing) {
        // If token expired, clear it immediately
        if (authService.isTokenExpired(existing)) {
          authService.clearToken()
          if (mounted) {
            setToken(null)
            setUser(null)
            setLoading(false)
          }
          return
        }

        // token valid or backend uses cookie session: fetch user
        try {
          const data = await authService.fetchCurrentUser(existing)
          if (mounted) {
            setToken(existing)
            setUser(data.user || null)
            setLoading(false)
          }
        } catch (e) {
          // If /me failed, assume not authenticated
          authService.clearToken()
          if (mounted) {
            setToken(null)
            setUser(null)
            setLoading(false)
          }
        }
      } else {
        // no token, attempt cookie-based session
        try {
          const data = await authService.fetchCurrentUser(null)
          if (mounted) {
            setUser(data.user || null)
            setLoading(false)
          }
        } catch (e) {
          if (mounted) setLoading(false)
        }
      }
    }
    init()
    return () => {
      mounted = false
    }
  }, [])

  async function login(email, password, options = { useCookies: true, persist: false }) {
    const res = await authService.login(email, password, { useCookies: options.useCookies })
    // If server returned a token, store it in memory (and optionally persist)
    if (res?.token) {
      authService.setToken(res.token, { persist: options.persist })
      setToken(res.token)
    }
    setUser(res.user || { email })
    return res
  }

  // Auto-logout when token expires (for token-only backends)
  React.useEffect(() => {
    if (!token) return
    const ms = authService.tokenExpiresIn(token)
    if (ms === null) return
    // schedule logout a little before expiry (5s buffer)
    const to = Math.max(ms - 5000, 0)
    const timer = setTimeout(() => {
      authService.clearToken()
      setToken(null)
      setUser(null)
      navigate('/login')
    }, to)
    return () => clearTimeout(timer)
  }, [token, navigate])

  async function logout() {
    try {
      // Tell backend to clear server session/cookies if present.
      await authService.authFetch('/authentication/logout', { method: 'POST' })
    } catch (e) {
      // ignore logout errors
    }
    authService.clearToken()
    setToken(null)
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated: !!token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
