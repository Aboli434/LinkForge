import { getOrders, getAuth } from '../data/mock'
import { Link } from 'react-router-dom'

export default function Orders() {
  const auth = getAuth()
  const all = getOrders()
  const orders = auth ? all.filter(o => o.buyer === auth.email || o.sellerId === auth.id || auth.role === 'admin') : all

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <div className="grid gap-4">
        {orders.map(o => (
          <div key={o.id} className="card p-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">{o.serviceTitle}</div>
              <div className="text-sm text-gray-500">Order: {o.id} • {o.buyer}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{o.currency} {o.amount}</div>
              <Link to={`/invoice/${o.id}`} className="btn-ghost mt-2">View Invoice</Link>
            </div>
          </div>
        ))}
        {orders.length === 0 && <div className="text-gray-600">No orders yet.</div>}
      </div>
    </div>
  )
}
