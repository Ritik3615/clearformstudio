import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function User() {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading) return null
  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />

  if (location.pathname === '/user' || location.pathname === '/user/') {
    return <Navigate to="/user/dashboard" replace />
  }

  return <Outlet />
}
