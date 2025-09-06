import { useState } from 'react'
import { setAuth, saveUser } from '../data/mock'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ name:'', email:'', role:'freelancer' })
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    setAuth(form)
    saveUser(form)
    navigate(form.role === 'client' ? '/dashboard/client' : '/dashboard/freelancer')
    window.location.reload()
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Create account</h1>
      <form onSubmit={submit} className="card p-6 grid gap-4">
        <input className="input" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
        <input className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />
        <select className="input" value={form.role} onChange={e=>setForm({...form, role: e.target.value})}>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
        </select>
        <button className="btn-primary" type="submit">Sign up</button>
        <p className="text-sm text-gray-600">Already have account? <Link to="/login" className="text-indigo-600">Log in</Link></p>
      </form>
    </div>
  )
}
