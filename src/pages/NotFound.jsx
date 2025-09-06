import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="text-gray-600 mt-2">Page not found.</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Go Home</Link>
    </div>
  )
}
