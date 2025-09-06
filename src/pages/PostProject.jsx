import { useState } from 'react'
import { getAuth } from '../data/mock'

export default function PostProject() {
  const auth = getAuth()
  const [form, setForm] = useState({ title:'', description:'', budget:'', skills:'' })

  function submit(e) {
    e.preventDefault()
    alert('Project posted (mock)\n' + JSON.stringify({ ...form, postedBy: auth?.email || 'guest' }, null, 2))
    setForm({ title:'', description:'', budget:'', skills:'' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Post a Project</h1>
      <form onSubmit={submit} className="card p-4 grid gap-3">
        <input className="input" placeholder="Project title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required />
        <input className="input" placeholder="Budget" value={form.budget} onChange={e=>setForm({...form, budget:e.target.value})} />
        <input className="input" placeholder="Skills needed (comma separated)" value={form.skills} onChange={e=>setForm({...form, skills:e.target.value})} />
        <textarea className="input" placeholder="Describe the project" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
        <button className="btn-primary">Publish Project</button>
      </form>
    </div>
  )
}
