/**
 * AdminPanel Component
 *
 * A simple administrative dashboard page that displays:
 * 1. **Users List** → Shows registered users with their name, role, and email.
 * 2. **Services List** → Shows services created by freelancers with title and seller.
 * 3. **Platform Analytics** → Placeholder chart area for future analytics/visualizations.
 *
 * Data:
 * - Uses mock/test data fetched from `../data/test` via:
 *   - `getUsers()` → returns an array of users.
 *   - `getServices()` → returns an array of services.
 *
 * Features:
 * - Responsive layout with two-column grid for users and services (on medium+ screens).
 * - Tailwind-based styling for cards, spacing, and typography.
 * - Placeholder section included for future analytics integration (charts, graphs, etc.).
 *
 * No props are required; this is a static admin page consuming test data.
 */

import { getUsers, getServices } from '../data/test'

export default function AdminPanel() {
  // Fetch users and services data (from test/mock dataset)
  const users = getUsers()
  const services = getServices()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Heading */}
      <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>

      {/* Grid layout: Users and Services */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Users List Card */}
        <div className="card p-4">
          <h3 className="font-semibold mb-3">Users</h3>
          <div className="space-y-2 text-sm">
            {users.map(u => (
              <div key={u.id} className="flex items-center justify-between">
                <div>
                  {u.name} <span className="text-gray-500">({u.role})</span>
                </div>
                <div className="text-sm text-gray-500">{u.email}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services List Card */}
        <div className="card p-4">
          <h3 className="font-semibold mb-3">Services</h3>
          <div className="space-y-2 text-sm">
            {services.map(s => (
              <div key={s.id} className="flex items-center justify-between">
                <div>{s.title}</div>
                <div className="text-sm text-gray-500">{s.seller}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics / Chart Placeholder */}
      <div className="mt-6 card p-4">
        <h3 className="font-semibold mb-3">Platform Analytics</h3>
        <p className="text-sm text-gray-600">
          Below is a simple placeholder chart to represent activity.
        </p>
        <div className="mt-4 h-36 grid place-items-center text-sm text-gray-500 border-dashed border-2 border-gray-200">
          Chart placeholder
        </div>
      </div>
    </div>
  )
}
