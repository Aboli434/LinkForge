import { Link } from 'react-router-dom'
import { getAuth } from '../data/test'

/**
 * ClientDashboard Component
 *
 * This is the main dashboard for **clients** on the freelancing platform.
 *
 * Features:
 * - Provides quick access to core client actions:
 *   1. Post a new project → navigates to `/post-project`.
 *   2. View orders → navigates to `/orders`.
 *   3. Edit profile → navigates to `/profile`.
 * - Uses `getAuth()` to retrieve the logged-in user's details (currently unused in UI,
 *   but available for personalization or permissions if needed).
 *
 * Layout:
 * - Responsive grid (3 columns on medium screens, stacked on mobile).
 * - Each action is displayed inside a styled **card**.
 */

export default function ClientDashboard() {
  // Get authenticated user info (could be used for personalization)
  const auth = getAuth()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Dashboard Heading */}
      <h1 className="text-2xl font-semibold">Client Dashboard</h1>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        
        {/* Card 1: Post a Project */}
        <div className="card p-4">
          <h3 className="font-semibold">Post a Project</h3>
          <p className="text-sm text-gray-600 mt-2">
            Describe your project and receive proposals from freelancers.
          </p>
          <Link to="/post-project" className="btn-primary mt-4">
            Post Project
          </Link>
        </div>

        {/* Card 2: Orders */}
        <div className="card p-4">
          <h3 className="font-semibold">Orders</h3>
          <p className="text-sm text-gray-600 mt-2">
            View and track orders.
          </p>
          <Link to="/orders" className="btn-ghost mt-4">
            View Orders
          </Link>
        </div>

        {/* Card 3: Profile */}
        <div className="card p-4">
          <h3 className="font-semibold">Profile</h3>
          <p className="text-sm text-gray-600 mt-2">
            Manage your company details.
          </p>
          <Link to="/profile" className="btn-ghost mt-4">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
