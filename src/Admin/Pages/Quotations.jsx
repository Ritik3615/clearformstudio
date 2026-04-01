import React, { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'
import { formatCurrency } from './utils'

export default function QuotationsPage() {
  const { user } = useAuth()

  const quotations = useMemo(() => [
    { id: 'Q-1001', client: 'Acme Corp', amount: 5000, status: 'sent', date: '2026-02-15' },
    { id: 'Q-1002', client: 'Beta LLC', amount: 2400, status: 'accepted', date: '2026-02-18' },
  ], [])

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>Quotations</h1>
        <div className='text-sm text-slate-600'>{user?.email}</div>
      </div>

      {quotations.length === 0 ? (
        <div className='p-6 text-center text-gray-500'>No quotations</div>
      ) : (
        <table className='w-full text-sm'>
          <thead>
            <tr className='text-left text-gray-500'>
              <th>Id</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {quotations.map(q => (
              <tr key={q.id} className='border-t'>
                <td className='py-2'>{q.id}</td>
                <td>{q.client}</td>
                <td>{formatCurrency(q.amount)}</td>
                <td>{q.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
