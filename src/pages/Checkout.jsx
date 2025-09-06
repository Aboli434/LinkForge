import { useParams, useNavigate } from 'react-router-dom'
import { getServices, createOrder, getAuth } from '../data/mock'
import PaymentForm from '../components/PaymentForm'

export default function Checkout() {
  const { id } = useParams()
  const s = getServices().find(x=>x.id === id)
  const navigate = useNavigate()
  const auth = getAuth()

  if (!s) return <div className="max-w-4xl mx-auto px-4 py-10">Service not found.</div>

  function onPay() {
    // create dummy order
    const order = {
      id: 'o'+Date.now(),
      serviceId: s.id,
      serviceTitle: s.title,
      buyer: auth ? auth.email : 'guest',
      sellerId: s.sellerId,
      amount: s.price,
      currency: s.currency,
      status: 'Paid',
      createdAt: new Date().toISOString()
    }
    createOrder(order)
    navigate(`/invoice/${order.id}`)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-4">
          <h3 className="font-semibold">Order Summary</h3>
          <div className="mt-3">
            <div className="flex justify-between"><div>{s.title}</div><div>{s.currency} {s.price}</div></div>
            <div className="text-sm text-gray-500 mt-2">Seller: {s.seller}</div>
            <div className="text-sm text-gray-500">Delivery: {s.deliveryDays} days</div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between font-semibold"><div>Total</div><div>{s.currency} {s.price}</div></div>
          </div>
        </div>

        <PaymentForm onPay={onPay} />
      </div>
      {!auth && <p className="text-sm text-gray-600 mt-3">Note: You can pay as guest, but it's recommended to <a className="text-indigo-600" href="/login">log in</a> to track orders.</p>}
    </div>
  )
}
