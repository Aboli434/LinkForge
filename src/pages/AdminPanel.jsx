import { getUsers, getServices } from '../data/mock'

export default function AdminPanel() {
  const users = getUsers()
  const services = getServices()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-4">
          <h3 className="font-semibold mb-3">Users</h3>
          <div className="space-y-2 text-sm">
            {users.map(u => (
              <div key={u.id} className="flex items-center justify-between">
                <div>{u.name} <span className="text-gray-500">({u.role})</span></div>
                <div className="text-sm text-gray-500">{u.email}</div>
              </div>
            ))}
          </div>
        </div>

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

      <div className="mt-6 card p-4">
        <h3 className="font-semibold mb-3">Platform Analytics </h3>
        <p className="text-sm text-gray-600">Below is a simple placeholder chart to represent activity.</p>
        <div className="mt-4 h-36 grid place-items-center text-sm text-gray-500 border-dashed border-2 border-gray-200">Chart placeholder </div>
      </div>
    </div>
  )
}
