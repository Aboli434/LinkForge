import { Link } from 'react-router-dom'

/**
 * ServiceCard Component
 *
 * Displays a service listing in a card layout.
 *
 * Props:
 * @param {Object} s - Service object containing:
 *   {
 *     id: string | number,   // Unique service ID
 *     title: string,         // Service title
 *     seller: string,        // Seller name
 *     category: string,      // Service category
 *     image: string,         // Service image URL
 *     skills: string[],      // Array of skills/tags
 *     currency: string,      // Currency symbol (e.g., $, ₹)
 *     price: number,         // Price value
 *     deliveryDays: number,  // Estimated delivery time in days
 *     description: string    // Short description of the service
 *   }
 *
 * Behavior:
 * - Renders service details with image, title, seller, category, skills, price, and delivery time.
 * - Shows description truncated (line-clamped to 3 lines).
 * - Provides "View" (details page) and "Buy Now" (checkout page) actions.
 */

export default function ServiceCard({ s }) {
  return (
    <div className="card p-4">
      {/* Service Image */}
      <img
        src={s.image}
        alt={s.title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      {/* Header: Title, Seller, Category, Skills, and Price */}
      <div className="flex items-start justify-between">
        {/* Left side: Title, Seller, Category, Skills */}
        <div>
          <h3 className="font-semibold">{s.title}</h3>
          <p className="text-sm text-gray-500">
            {s.seller} • {s.category}
          </p>

          {/* Skill Badges */}
          <div className="mt-2 flex gap-2 flex-wrap">
            {s.skills.map((sk) => (
              <span key={sk} className="badge">
                {sk}
              </span>
            ))}
          </div>
        </div>

        {/* Right side: Price and Delivery time */}
        <div className="text-right">
          <div className="font-semibold">
            {s.currency} {s.price.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">{s.deliveryDays} days</div>
        </div>
      </div>

      {/* Description (clamped to 3 lines for consistency) */}
      <p className="mt-3 text-sm text-gray-700 line-clamp-3">
        {s.description}
      </p>

      {/* Action Buttons */}
      <div className="mt-4 flex items-center gap-2">
        <Link to={`/services/${s.id}`} className="btn-ghost">
          View
        </Link>
        <Link to={`/checkout/${s.id}`} className="btn-primary">
          Buy Now
        </Link>
      </div>
    </div>
  )
}
