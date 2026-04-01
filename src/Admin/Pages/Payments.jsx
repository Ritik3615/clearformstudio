import React, { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'
import { formatCurrency } from './utils'

export default function PaymentsPage() {
  const { user } = useAuth()

  const payments = useMemo(() => [
    { id: 'PAY-1', client: 'Acme Corp', amount: 5000, status: 'pending', date: '2026-02-20' },
    { id: 'PAY-2', client: 'Beta LLC', amount: 2400, status: 'done', date: '2026-02-25' },
  ], [])

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>Payments</h1>
        <div className='text-sm text-slate-600'>{user?.email}</div>
      </div>

      {payments.length === 0 ? (
        <div className='p-6 text-center text-gray-500'>No payments</div>
      ) : (
        <table className='w-full text-sm'>
          <thead>
            <tr className='text-left text-gray-500'>
              <th>Id</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(p => (
              <tr key={p.id} className='border-t'>
                <td className='py-2'>{p.id}</td>
                <td>{p.client}</td>
                <td>{formatCurrency(p.amount)}</td>
                <td>{p.date}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
