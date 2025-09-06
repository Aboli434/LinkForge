import { useParams } from 'react-router-dom'
import { getOrders } from '../data/mock'

export default function Invoice() {
  const { orderId } = useParams()
  const order = getOrders().find(o => o.id === orderId)
  if (!order) return <div className="max-w-4xl mx-auto px-4 py-10">Invoice not found.</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card p-6">
        <h1 className="text-xl font-semibold">Invoice</h1>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm">Order ID: <span className="font-medium">{order.id}</span></div>
            <div className="text-sm">Buyer: {order.buyer}</div>
            <div className="text-sm">Date: {new Date(order.createdAt).toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="font-semibold">{order.currency} {order.amount}</div>
            <div className="text-sm text-gray-500">Status: {order.status}</div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Items</h3>
          <div className="mt-2">
            <div className="flex justify-between"><div>{order.serviceTitle}</div><div>{order.currency} {order.amount}</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
