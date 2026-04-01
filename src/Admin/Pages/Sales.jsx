import React, { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'
import SalesChart from './components/SalesChart'
import { formatCurrency } from './utils'

export default function SalesPage() {
  const { user } = useAuth()

  const salesData = useMemo(() => [
    { label: 'Jan', amount: 1200 },
    { label: 'Feb', amount: 850 },
    { label: 'Mar', amount: 1600 },
    { label: 'Apr', amount: 900 },
    { label: 'May', amount: 2000 },
    { label: 'Jun', amount: 1400 },
  ], [])

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold'>Sales</h1>
        <div className='text-sm text-slate-600'>{user?.email}</div>
      </div>

      <div className='bg-white rounded shadow p-4'>
        <SalesChart data={salesData} />
        <div className='mt-2 text-sm text-gray-500'>Total: {formatCurrency(salesData.reduce((a,b)=>a+b.amount,0))}</div>
      </div>
    </div>
  )
}
