import { getOrders, getAuth } from '../data/test'
import { Link } from 'react-router-dom'

/**
 * Orders Page Component
 *
 * Purpose:
 * - Displays a list of orders for the logged-in user.
 * - Buyers see the orders they placed.
 * - Freelancers see the orders they received.
 * - Admins can see all orders.
 *
 * Features:
 * - Fetches orders from mock/test data.
 * - Filters orders based on current authenticated user.
 * - Links each order to its detailed invoice page.
 * - Graceful fallback when there are no orders.
 *
 * Future Enhancements:
 * - Add order status filters (e.g., Paid, Pending, Delivered).
 * - Integrate real backend API for fetching user-specific orders.
 * - Support pagination for large datasets.
 */
export default function Orders() {
  const auth = getAuth() // Get current logged-in user
  const all = getOrders() // Fetch all orders from mock data

  // Filter orders based on user role:
  // - Buyer: orders where buyer email matches auth email
  // - Freelancer: orders where sellerId matches auth id
  // - Admin: sees all orders
  const orders = auth
    ? all.filter(o => o.buyer === auth.email || o.sellerId === auth.id || auth.role === 'admin')
    : all

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      <div className="grid gap-4">
        {/* Render orders list */}
        {orders.map(o => (
          <div key={o.id} className="card p-4 flex items-center justify-between">
            {/* Order details */}
            <div>
              <div className="font-semibold">{o.serviceTitle}</div>
              <div className="text-sm text-gray-500">
                Order: {o.id} • {o.buyer}
              </div>
            </div>

            {/* Order amount + Invoice link */}
            <div className="text-right">
              <div className="font-semibold">{o.currency} {o.amount}</div>
              <Link to={`/invoice/${o.id}`} className="btn-ghost mt-2">
                View Invoice
              </Link>
            </div>
          </div>
        ))}

        {/* Empty state */}
        {orders.length === 0 && (
          <div className="text-gray-600">No orders yet.</div>
        )}
      </div>
    </div>
  )
}
