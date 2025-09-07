import { useParams } from 'react-router-dom'
import { getOrders } from '../data/test'

/**
 * Invoice Component
 *
 * Purpose:
 * - Displays a detailed invoice for a specific order.
 * - Fetches order details using the `orderId` from the URL params.
 * - Shows buyer, order ID, amount, status, and purchased items.
 *
 * Features:
 * - Handles missing or invalid order IDs gracefully (shows "Invoice not found").
 * - Responsive grid layout for invoice header (buyer info vs. amount/status).
 * - Uses localized date formatting for order creation date.
 *
 * Future Enhancements:
 * - Add seller details (name, contact info).
 * - Support multiple items per invoice.
 * - Option to download/print the invoice as PDF.
 * - Display tax, discounts, and total breakdown.
 */

export default function Invoice() {
  const { orderId } = useParams() // Get orderId from URL (e.g., /invoice/:orderId)
  const order = getOrders().find(o => o.id === orderId) // Find the order by ID

  // If order is not found, show a friendly message
  if (!order) return <div className="max-w-4xl mx-auto px-4 py-10">Invoice not found.</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card p-6">
        
        {/* Invoice Header */}
        <h1 className="text-xl font-semibold">Invoice</h1>

        {/* Order Summary Section */}
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {/* Buyer + Order Info */}
          <div>
            <div className="text-sm">Order ID: <span className="font-medium">{order.id}</span></div>
            <div className="text-sm">Buyer: {order.buyer}</div>
            <div className="text-sm">Date: {new Date(order.createdAt).toLocaleString()}</div>
          </div>

          {/* Amount + Status */}
          <div className="text-right">
            <div className="font-semibold">{order.currency} {order.amount}</div>
            <div className="text-sm text-gray-500">Status: {order.status}</div>
          </div>
        </div>

        {/* Items Section */}
        <div className="mt-6">
          <h3 className="font-semibold">Items</h3>
          <div className="mt-2">
            {/* Currently only supports one service per order */}
            <div className="flex justify-between">
              <div>{order.serviceTitle}</div>
              <div>{order.currency} {order.amount}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
