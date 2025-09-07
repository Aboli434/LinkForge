import { useState } from 'react'

/**
 * PaymentForm Component
 *
 * A simple credit card payment form that:
 * - Collects cardholder name, card number, expiry date, and CVV.
 * - Validates that required fields are entered before submission.
 * - Calls `onPay()` callback when the form is successfully submitted.
 *
 * Props:
 * @param {Function} onPay - A callback function triggered after successful validation.
 *
 * State:
 * - `card`: Object storing input values for:
 *    { name: string, number: string, exp: string, cvv: string }
 *
 * Behavior:
 * - Displays an alert if required fields (name, number) are empty.
 * - Calls `onPay` function if provided after successful validation.
 */

export default function PaymentForm({ onPay }) {
  // Local state: stores form input values
  const [card, setCard] = useState({ name: '', number: '', exp: '', cvv: '' })

  /**
   * Handles form submission:
   * - Prevents default refresh.
   * - Validates required fields.
   * - Calls `onPay()` callback if valid.
   */
  function submit(e) {
    e.preventDefault()
    
    // Basic validation
    if (!card.number || !card.name) return alert('Enter Values')

    // Trigger parent handler if provided
    onPay && onPay()
  }

  return (
    <form onSubmit={submit} className="card p-4">
      <h3 className="font-semibold mb-2">Payment</h3>

      {/* Cardholder name */}
      <input
        className="input"
        placeholder="Name on card"
        value={card.name}
        onChange={e => setCard({ ...card, name: e.target.value })}
      />

      {/* Card number */}
      <input
        className="input"
        placeholder="Card number"
        value={card.number}
        onChange={e => setCard({ ...card, number: e.target.value })}
      />

      {/* Expiry + CVV fields side by side */}
      <div className="grid md:grid-cols-2 gap-2">
        <input
          className="input"
          placeholder="MM/YY"
          value={card.exp}
          onChange={e => setCard({ ...card, exp: e.target.value })}
        />
        <input
          className="input"
          placeholder="CVV"
          value={card.cvv}
          onChange={e => setCard({ ...card, cvv: e.target.value })}
        />
      </div>

      {/* Submit button */}
      <button className="btn-primary mt-3 w-full" type="submit">
        Pay
      </button>
    </form>
  )
}
