import { Link } from 'react-router-dom'
import { getAuth } from '../data/mock'

export default function FreelancerDashboard() {
  const auth = getAuth()
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Freelancer Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="card p-4">
          <h3 className="font-semibold">My Services</h3>
          <p className="text-sm text-gray-600 mt-2">Manage your offerings.</p>
          <Link to="/profile" className="btn-ghost mt-4">Edit Profile</Link>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Orders</h3>
          <p className="text-sm text-gray-600 mt-2">See received orders and track delivery.</p>
          <Link to="/orders" className="btn-ghost mt-4">View Orders</Link>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Messages</h3>
          <p className="text-sm text-gray-600 mt-2">Communicate with clients.</p>
          <Link to="/messages" className="btn-ghost mt-4">Messages</Link>
        </div>
      </div>
    </div>
  )
}
