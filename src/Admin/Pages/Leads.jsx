import React, { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function LeadsPage() {
  const { user } = useAuth()

  const leads = useMemo(() => [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'new', createdAt: '2026-02-20' },
    { id: 2, name: 'Bob Lee', email: 'bob@example.com', status: 'contacted', createdAt: '2026-02-22' },
  ], [])

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>Leads</h1>
        <div className='text-sm text-slate-600'>{user?.email}</div>
      </div>

      {leads.length === 0 ? (
        <div className='p-6 text-center text-gray-500'>No leads available</div>
      ) : (
        <ul className='space-y-3'>
          {leads.map(l => (
            <li key={l.id} className='flex items-center justify-between border p-3 rounded'>
              <div>
                <div className='font-medium'>{l.name}</div>
                <div className='text-xs text-gray-500'>{l.email} • {l.createdAt}</div>
              </div>
              <div className='text-sm text-gray-600'>{l.status}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
