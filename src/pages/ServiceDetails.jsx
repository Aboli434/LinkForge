import { useParams, Link } from "react-router-dom"
import { getServices } from "../data/mock"

export default function ServiceDetails() {
  const { id } = useParams()
  const s = getServices().find(x => String(x.id) === String(id)) // ensure type match

  if (!s) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold">Service not found.</h2>
      </div>
    )
  }

  // Mock reviews (later can come from API)
  const reviews = [
    {
      id: 1,
      user: "Alice Johnson",
      rating: 5,
      comment: "Amazing work! Delivered before deadline with excellent quality.",
    },
    {
      id: 2,
      user: "Rahul Mehta",
      rating: 4,
      comment: "Very professional, great communication. Will hire again!",
    },
    {
      id: 3,
      user: "Sophia Lee",
      rating: 5,
      comment: "Exceeded expectations. Highly recommend!",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Service Card */}
      <div className="card p-6">
        <img
          src={s.image}
          alt={s.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">{s.title}</h1>
            <p className="text-sm text-gray-500">
              {s.seller} • {s.category}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {s.skills.map(sk => (
                <span key={sk} className="badge">
                  {sk}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right">
            <div className="text-xl font-semibold">
              {s.currency} {s.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              {s.deliveryDays} days delivery
            </div>
          </div>
        </div>

        <p className="mt-6 text-gray-700 whitespace-pre-line">{s.description}</p>

        <div className="mt-6 flex gap-3">
          <Link to={`/checkout/${s.id}`} className="btn-primary">
            Buy Now
          </Link>
          <a href="#contact" className="btn-ghost">
            Contact Seller
          </a>
        </div>
      </div>

      {/* Seller Profile */}
      <div className="card p-6" id="contact">
        <h2 className="text-xl font-semibold mb-4">About the Seller</h2>
        <div className="flex items-center gap-4">
          <img
            src={`https://i.pravatar.cc/80?u=${s.seller}`}
            alt={s.seller}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{s.seller}</h3>
            <p className="text-sm text-gray-500">{s.category} Expert</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 text-sm">
          Hi, I’m {s.seller}! I specialize in {s.skills.join(", ")} and have
          worked with multiple clients to deliver high-quality projects. Feel
          free to reach out for custom requirements.
        </p>

        <div className="mt-4 flex gap-3">
          <a
            href={`mailto:${s.seller.toLowerCase().replace(/\s+/g, "")}@example.com`}
            className="btn-ghost"
          >
            Message {s.seller}
          </a>
        </div>
      </div>

      {/* Reviews & Ratings */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Reviews & Ratings</h2>
        <div className="space-y-4">
          {reviews.map(r => (
            <div key={r.id} className="border-b pb-3 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{r.user}</h3>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < r.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
