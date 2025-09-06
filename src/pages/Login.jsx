import { useState } from 'react'
import { setAuth, getUsers } from '../data/mock'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const users = getUsers()

  function submit(e) {
    e.preventDefault()
    const u = users.find(x => x.email === email)
    if (!u) return alert('User not found. Use register or try one of seeded emails from mock data.')
    setAuth(u)
    navigate(u.role === 'client' ? '/dashboard/client' : (u.role === 'freelancer' ? '/dashboard/freelancer' : '/admin'))
    window.location.reload()
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Log in</h1>
      <form onSubmit={submit} className="card p-6 grid gap-4">
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <div className="flex items-center justify-between">
          <button className="btn-primary" type="submit">Log in</button>
          <Link to="/forgot-password" className="text-sm text-gray-600">Forgot?</Link>
        </div>
        <p className="text-sm text-gray-600">No account? <Link to="/register" className="text-indigo-600">Sign up</Link></p>
      </form>
    </div>
  )
}
