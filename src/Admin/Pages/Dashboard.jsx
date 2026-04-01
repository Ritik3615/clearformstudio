import React, { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

function SummaryCard({ title, value, children }) {
  return (
    <div className="bg-white shadow rounded p-4 flex-1 min-w-[160px]">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      {children}
    </div>
  )
}

function formatCurrency(n) {
  return n?.toLocaleString?.('en-US', { style: 'currency', currency: 'USD' }) || '$0'
}

function SalesChart({ data = [] }) {
  if (!data || data.length === 0) return <div className="p-6">No sales data</div>

  // simple SVG line chart
  const width = 600
  const height = 160
  const padding = 20
  const values = data.map(d => d.amount)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2)
    const y = height - padding - ((d.amount - min) / (max - min || 1)) * (height - padding * 2)
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="text-sm text-gray-600 mb-2">Sales (last {data.length} periods)</div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
        <polyline fill="none" stroke="#2563eb" strokeWidth="3" points={points} strokeLinejoin="round" strokeLinecap="round" />
        {data.map((d, i) => {
          const x = padding + (i / (data.length - 1)) * (width - padding * 2)
          const y = height - padding - ((d.amount - min) / (max - min || 1)) * (height - padding * 2)
          return <circle key={i} cx={x} cy={y} r={3} fill="#2563eb" />
        })}
      </svg>
      <div className="mt-2 text-sm text-gray-500">Total: {formatCurrency(values.reduce((a, b) => a + b, 0))}</div>
    </div>
  )
}

function StatusPill({ status }) {
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

function Section({ title, children, action }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  )
}

export default function Dashboard() {
  const { logout, user } = useAuth()

  // summary values are mocked here; replace with API calls
  const totalSales = '$8,150'
  const leadsCount = 2
  const quotationsCount = 2
  const projectsCount = 2
  const paymentsPending = 1

  return (
    <div className='p-8 space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Admin Dashboard</h1>
          <div className='text-sm text-slate-600'>{user?.email}</div>
        </div>
        <div className='flex items-center gap-4'>
          <button onClick={logout} className='bg-red-500 text-white px-3 py-1 rounded'>Logout</button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        <Link to="/admin/sales" className='block'><SummaryCard title='Total Sales' value={totalSales} /></Link>
        <Link to="/admin/leads" className='block'><SummaryCard title='Leads' value={leadsCount} /></Link>
        <Link to="/admin/quotations" className='block'><SummaryCard title='Quotations' value={quotationsCount} /></Link>
        <Link to="/admin/projects" className='block'><SummaryCard title='Projects' value={projectsCount} /></Link>
        <Link to="/admin/payments" className='block'><SummaryCard title='Payments Pending' value={paymentsPending} /></Link>
      </div>

      <div className='grid md:grid-cols-3 gap-4'>
        <div className='md:col-span-2'>
          <Section title='Sales Overview'>
            <div className='p-8 text-center text-gray-500'>Open the Sales page for the full report.</div>
          </Section>
        </div>

        <div className='space-y-4'>
          <Section title='Quick Links'>
            <ul className='space-y-2'>
              <li><a href="/admin/leads" className='text-blue-600'>Leads</a></li>
              <li><a href="/admin/quotations" className='text-blue-600'>Quotations</a></li>
              <li><a href="/admin/projects" className='text-blue-600'>Projects</a></li>
              <li><a href="/admin/payments" className='text-blue-600'>Payments</a></li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  )
}