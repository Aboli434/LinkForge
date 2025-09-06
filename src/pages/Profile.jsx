import { useState, useEffect } from 'react'
import { getAuth, setAuth, getUsers } from '../data/mock'

export default function Profile() {
  const stored = getAuth()
  const [user, setUser] = useState(stored || { name:'', email:'', role:'freelancer' })

  useEffect(()=> {
    setUser({...user})
  }, [])

  function save(e) {
    e.preventDefault()
    setAuth(user)
    alert('Profile saved (mock)')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>
      <form onSubmit={save} className="card p-4 grid gap-3">
        <input className="input" placeholder="Name" value={user.name||''} onChange={e=>setUser({...user, name: e.target.value})} />
        <input className="input" placeholder="Email" value={user.email||''} onChange={e=>setUser({...user, email: e.target.value})} />
        <select className="input" value={user.role||'freelancer'} onChange={e=>setUser({...user, role: e.target.value})}>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
        </select>
        {user.role === 'freelancer' && (
          <>
            <input className="input" placeholder="Title (e.g. Frontend Dev)" value={user.title||''} onChange={e=>setUser({...user, title: e.target.value})} />
            <textarea className="input" placeholder="Bio" value={user.bio||''} onChange={e=>setUser({...user, bio: e.target.value})} />
            <input className="input" placeholder="Portfolio URL" value={user.portfolio||''} onChange={e=>setUser({...user, portfolio: e.target.value})} />
          </>
        )}
        <button className="btn-primary">Save</button>
      </form>
    </div>
  )
}
