import { Link } from 'react-router-dom'
import { getServices } from '../data/mock'
import ServiceCard from '../components/ServiceCard'

export default function Landing() {
  const services = getServices()
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Buy services from top freelancers</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Discover, hire, and collaborate — simple and secure. For businesses and independent clients.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/services" className="btn-ghost bg-white text-gray-800">Browse Services</Link>
            <Link to="/post-project" className="btn-primary">Post a Project</Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Popular Services</h2>
          <Link to="/services" className="text-indigo-600">See all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0,6).map(s => <ServiceCard key={s.id} s={s} />)}
        </div>
      </div>
    </div>
  )
}
