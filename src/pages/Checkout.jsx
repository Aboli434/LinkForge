/**
 * Checkout Component
 *
 * This page handles the checkout flow for purchasing a service.
 *
 * Features:
 * - Displays an **Order Summary** with service details (title, price, seller, delivery time).
 * - Integrates with the `PaymentForm` component to simulate a payment.
 * - On successful payment:
 *    - Creates a dummy order record via `createOrder`.
 *    - Redirects the user to an **Invoice page** for the new order.
 * - Supports guest checkout (shows a note if the user is not logged in).
 *
 * Data:
 * - `getServices()` → retrieves available services.
 * - `getAuth()` → gets the current authenticated user (if any).
 * - `createOrder(order)` → saves a new order into mock/test storage.
 *
 * Routing:
 * - Uses `useParams` to get the service ID from the URL.
 * - Uses `useNavigate` for programmatic navigation to the invoice page.
 */

import { useParams, useNavigate } from 'react-router-dom'
import { getServices, createOrder, getAuth } from '../data/test'
import PaymentForm from '../components/PaymentForm'

export default function Checkout() {
  // Extract service ID from route params
  const { id } = useParams()
  
  // Find the selected service by ID
  const s = getServices().find(x => x.id === id)
  
  // Navigation hook for redirecting after payment
  const navigate = useNavigate()
  
  // Get current authenticated user (if logged in)
  const auth = getAuth()

  // If service not found, show error message
  if (!s) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        Service not found.
      </div>
    )
  }

  /**
   * Handle payment callback
   * - Creates a dummy order object
   * - Saves it using `createOrder`
   * - Navigates to the invoice page for this order
   */
  function onPay() {
    const order = {
      id: 'o' + Date.now(),        // unique order ID
      serviceId: s.id,             // purchased service ID
      serviceTitle: s.title,       // purchased service title
      buyer: auth ? auth.email : 'guest', // buyer email or guest
      sellerId: s.sellerId,        // seller ID
      amount: s.price,             // order amount
      currency: s.currency,        // currency
      status: 'Paid',              // default status
      createdAt: new Date().toISOString() // timestamp
    }

    createOrder(order) // save new order
    navigate(`/invoice/${order.id}`) // redirect to invoice
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Order Summary Card */}
        <div className="card p-4">
          <h3 className="font-semibold">Order Summary</h3>
          <div className="mt-3">
            <div className="flex justify-between">
              <div>{s.title}</div>
              <div>{s.currency} {s.price}</div>
            </div>
            <div className="text-sm text-gray-500 mt-2">Seller: {s.seller}</div>
            <div className="text-sm text-gray-500">Delivery: {s.deliveryDays} days</div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between font-semibold">
              <div>Total</div>
              <div>{s.currency} {s.price}</div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <PaymentForm onPay={onPay} />
      </div>

      {/* Guest checkout note */}
      {!auth && (
        <p className="text-sm text-gray-600 mt-3">
          Note: You can pay as guest, but it's recommended to{' '}
          <a className="text-indigo-600" href="/login">log in</a> to track orders.
        </p>
      )}
    </div>
  )
}
