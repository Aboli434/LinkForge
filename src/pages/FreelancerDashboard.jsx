import { Link } from 'react-router-dom'
import { getAuth } from '../data/test'

/**
 * FreelancerDashboard Component
 *
 * Purpose:
 * - Provides freelancers with a central dashboard to manage their work.
 * - Shows quick navigation cards for:
 *   1. Managing services and editing their profile.
 *   2. Viewing and tracking orders.
 *   3. Communicating with clients via messages.
 *
 * Features:
 * - Responsive grid layout (3 columns on medium+ screens, stacked on mobile).
 * - Uses `react-router-dom`'s <Link> for navigation.
 * - Pulls user authentication data (via getAuth) for potential role-based customization.
 *
 * Future Enhancements:
 * - Display freelancer-specific stats (earnings, ratings, active gigs).
 * - Fetch real-time data for services, orders, and messages.
 * - Role-based dashboard cards (e.g., admin vs. freelancer).
 */

export default function FreelancerDashboard() {
  const auth = getAuth() // Get current authenticated user info (currently unused here)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Dashboard Title */}
      <h1 className="text-2xl font-semibold">Freelancer Dashboard</h1>

      {/* Dashboard Grid */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        
        {/* Card 1: Services/Profile */}
        <div className="card p-4">
          <h3 className="font-semibold">My Services</h3>
          <p className="text-sm text-gray-600 mt-2">Manage your offerings.</p>
          <Link to="/profile" className="btn-ghost mt-4">Edit Profile</Link>
        </div>

        {/* Card 2: Orders */}
        <div className="card p-4">
          <h3 className="font-semibold">Orders</h3>
          <p className="text-sm text-gray-600 mt-2">See received orders and track delivery.</p>
          <Link to="/orders" className="btn-ghost mt-4">View Orders</Link>
        </div>

        {/* Card 3: Messages */}
        <div className="card p-4">
          <h3 className="font-semibold">Messages</h3>
          <p className="text-sm text-gray-600 mt-2">Communicate with clients.</p>
          <Link to="/messages" className="btn-ghost mt-4">Messages</Link>
        </div>
      </div>
    </div>
  )
}
