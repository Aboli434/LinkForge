import { useMemo, useState } from 'react'
import { getServices } from '../data/mock'
import ServiceCard from '../components/ServiceCard'
import SearchBar from '../components/SearchBar'

export default function Services() {
  const all = getServices()
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('popular')

  const services = useMemo(()=> {
    return all.filter(s=> (
      (category==='all' || s.category===category) &&
      (q.trim() === '' || [s.title, s.seller, ...(s.skills||[])].join(' ').toLowerCase().includes(q.toLowerCase()))
    )).sort((a,b)=> {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return (b.rating||0) - (a.rating||0)
    })
  }, [all, q, category, sort])

  const categories = ['all', ...Array.from(new Set(all.map(s=>s.category)))]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Services</h1>
      <div className="card p-4 mb-6">
        <div className="grid md:grid-cols-3 gap-3">
          <SearchBar value={q} onChange={setQ} placeholder="Search by title, skill, seller..." />
          <select className="input" value={category} onChange={e=>setCategory(e.target.value)}>
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="input" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="popular">Most popular</option>
            <option value="price-asc">Price: Low to high</option>
            <option value="price-desc">Price: High to low</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map(s => <ServiceCard key={s.id} s={s} />)}
      </div>
      {services.length === 0 && <div className="text-gray-600 mt-6">No services found.</div>}
    </div>
  )
}
