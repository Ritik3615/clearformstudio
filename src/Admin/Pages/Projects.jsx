import React, { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'
import StatusPill from './StatusPill'
import { formatCurrency } from './utils'

export default function ProjectsPage() {
  const { user } = useAuth()

  const projects = useMemo(() => [
    { id: 'P-2001', name: 'Website Redesign', status: 'ongoing', assignedTo: 'Dev Team', sales: 5000 },
    { id: 'P-2002', name: 'Landing Page', status: 'completed', assignedTo: 'Freelancer', sales: 1200 },
  ], [])

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>Projects</h1>
        <div className='text-sm text-slate-600'>{user?.email}</div>
      </div>

      {projects.length === 0 ? (
        <div className='p-6 text-center text-gray-500'>No projects</div>
      ) : (
        <ul className='space-y-3'>
          {projects.map(p => (
            <li key={p.id} className='border p-3 rounded flex items-center justify-between'>
              <div>
                <div className='font-medium'>{p.name}</div>
                <div className='text-xs text-gray-500'>Assigned: {p.assignedTo} • Sales: {formatCurrency(p.sales)}</div>
              </div>
              <StatusPill status={p.status} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
