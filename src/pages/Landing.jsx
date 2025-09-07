import { Link } from 'react-router-dom'
import { getServices } from '../data/test'
import ServiceCard from '../components/ServiceCard'

/**
 * Landing Page Component
 *
 * Purpose:
 * - Acts as the homepage of the platform.
 * - Highlights the platform's purpose (buying services from freelancers).
 * - Provides quick access to browse services or post a project.
 *
 * Features:
 * - Hero section with call-to-action (Browse Services / Post Project).
 * - Displays a preview of popular services (first 6 services).
 * - Links to the full services page.
 *
 * Future Enhancements:
 * - Add categories or featured freelancers section.
 * - Add testimonials or trust signals (ratings, logos, security badges).
 * - Replace static "popular services" with trending or most-sold logic.
 */

export default function Landing() {
  const services = getServices() // Retrieve all services from mock/test data

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Buy services from top freelancers
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Discover, hire, and collaborate — simple and secure. For businesses and independent clients.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/services" className="btn-ghost bg-white text-gray-800">
              Browse Services
            </Link>
            <Link to="/post-project" className="btn-primary">
              Post a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Popular Services</h2>
          {/* Link to view all services */}
          <Link to="/services" className="text-indigo-600">See all</Link>
        </div>

        {/* Display first 6 services */}
        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0, 6).map(s => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </div>
  )
}
