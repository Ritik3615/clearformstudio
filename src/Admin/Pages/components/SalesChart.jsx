import React from 'react'

export default function SalesChart({ data = [] }) {
  if (!data || data.length === 0) return <div className="p-6">No sales data</div>

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
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
        <polyline fill="none" stroke="#2563eb" strokeWidth="3" points={points} strokeLinejoin="round" strokeLinecap="round" />
        {data.map((d, i) => {
          const x = padding + (i / (data.length - 1)) * (width - padding * 2)
          const y = height - padding - ((d.amount - min) / (max - min || 1)) * (height - padding * 2)
          return <circle key={i} cx={x} cy={y} r={3} fill="#2563eb" />
        })}
      </svg>
    </div>
  )
}
