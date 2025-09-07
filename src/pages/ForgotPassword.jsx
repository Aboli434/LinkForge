import { useState } from 'react'
import { getUsers } from '../data/test'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  function submit(e) {
    e.preventDefault()
    const u = getUsers().find(x => x.email === email)
    if (!u) return alert('Email not found in mock users.')
    alert('Password reset link (mock) sent to ' + email)
    setEmail('')
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl mb-6">Reset password</h1>
      <form onSubmit={submit} className="card p-6 grid gap-4">
        <input className="input" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <button className="btn-primary" type="submit">Send reset link</button>
      </form>
    </div>
  )
}
