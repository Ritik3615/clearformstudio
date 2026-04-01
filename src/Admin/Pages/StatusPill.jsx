import React from 'react'

export default function StatusPill({ status }) {
  const map = {
    done: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    ongoing: 'bg-blue-100 text-blue-800',
    sent: 'bg-indigo-100 text-indigo-800',
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  }
  const cls = map[status] || 'bg-gray-100 text-gray-800'
  return <span className={`px-2 py-1 rounded text-xs font-medium ${cls}`}>{status}</span>
}
