export function formatCurrency(n) {
  if (typeof n === 'string') return n
  return n?.toLocaleString?.('en-US', { style: 'currency', currency: 'USD' }) || '$0'
}
