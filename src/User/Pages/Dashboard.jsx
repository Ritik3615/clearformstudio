import React from 'react'
import { useAuth } from '../../context/AuthContext'

export default function UserDashboard() {
  const { user } = useAuth()

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>User Dashboard</h1>
      <div>Welcome, {user?.name || user?.email}.</div>
    </div>
  )
}
