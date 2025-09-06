import { Link } from 'react-router-dom'

export default function ServiceCard({ s }) {
  return (
    <div className="card p-4">
      <img src={s.image} alt={s.title} className="w-full h-40 object-cover rounded-lg mb-3" />
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{s.title}</h3>
          <p className="text-sm text-gray-500">{s.seller} • {s.category}</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {s.skills.map(sk => <span key={sk} className="badge">{sk}</span>)}
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold">{s.currency} {s.price.toLocaleString()}</div>
          <div className="text-xs text-gray-500">{s.deliveryDays} days</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700 line-clamp-3">{s.description}</p>
      <div className="mt-4 flex items-center gap-2">
        <Link to={`/services/${s.id}`} className="btn-ghost">View</Link>
        <Link to={`/checkout/${s.id}`} className="btn-primary">Buy Now</Link>
      </div>
    </div>
  )
}
