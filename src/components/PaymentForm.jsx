import { useState } from 'react'

export default function PaymentForm({ onPay }) {
  const [card, setCard] = useState({ name: '', number: '', exp: '', cvv: '' })

  function submit(e) {
    e.preventDefault()
    
    if (!card.number || !card.name) return alert('Enter Values')
    onPay && onPay()
  }

  return (
    <form onSubmit={submit} className="card p-4">
      <h3 className="font-semibold mb-2">Payment</h3>
      <input className="input" placeholder="Name on card" value={card.name} onChange={e=>setCard({...card, name:e.target.value})} />
      <input className="input" placeholder="Card number" value={card.number} onChange={e=>setCard({...card, number:e.target.value})} />
      <div className="grid md:grid-cols-2 gap-2">
        <input className="input" placeholder="MM/YY" value={card.exp} onChange={e=>setCard({...card, exp:e.target.value})} />
        <input className="input" placeholder="CVV" value={card.cvv} onChange={e=>setCard({...card, cvv:e.target.value})} />
      </div>
      <button className="btn-primary mt-3 w-full" type="submit">Pay</button>
    </form>
  )
}
