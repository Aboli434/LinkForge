import { Link } from 'react-router-dom'
import { getAuth } from '../data/mock'

export default function ClientDashboard() {
  const auth = getAuth()
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Client Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="card p-4">
          <h3 className="font-semibold">Post a Project</h3>
          <p className="text-sm text-gray-600 mt-2">Describe your project and receive proposals from freelancers.</p>
          <Link to="/post-project" className="btn-primary mt-4">Post Project</Link>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Orders</h3>
          <p className="text-sm text-gray-600 mt-2">View and track orders.</p>
          <Link to="/orders" className="btn-ghost mt-4">View Orders</Link>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Profile</h3>
          <p className="text-sm text-gray-600 mt-2">Manage your company details.</p>
          <Link to="/profile" className="btn-ghost mt-4">Edit Profile</Link>
        </div>
      </div>
    </div>
  )
}
