import React from 'react'
import { Outlet, Navigate, useLocation, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Sidebar({ onLogout }) {
  const links = [
    { to: '/admin/dashboard', label: 'Dashboard' },
    { to: '/admin/sales', label: 'Sales' },
    { to: '/admin/leads', label: 'Leads' },
    { to: '/admin/quotations', label: 'Quotations' },
    { to: '/admin/projects', label: 'Projects' },
    { to: '/admin/payments', label: 'Payments' },
  ]

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <div className="mb-6">
        <div className="text-lg font-bold">Admin</div>
        <div className="text-xs text-gray-500">Panel</div>
      </div>
      <nav className="flex flex-col gap-1">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${isActive ? 'bg-sky-100 text-sky-700' : 'text-gray-700 hover:bg-gray-50'}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-6">
        <button onClick={onLogout} className="w-full text-left text-red-600">Logout</button>
      </div>
    </aside>
  )
}

export default function Admin() {
  const { isAuthenticated, loading, user, logout } = useAuth()
  const location = useLocation()

  if (loading) return null
  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />
  if (user?.role !== 'admin') return <Navigate to="/" replace />

  if (location.pathname === '/admin' || location.pathname === '/admin/') {
    return <Navigate to="/admin/dashboard" replace />
  }

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar onLogout={logout} />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
