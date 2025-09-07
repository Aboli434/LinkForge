import { useMemo, useState } from 'react'
import { getServices } from '../data/test'
import ServiceCard from '../components/ServiceCard'
import SearchBar from '../components/SearchBar'

/**
 * Services Component
 *
 * Purpose:
 * - Displays a searchable, filterable, and sortable list of available services.
 *
 * Features:
 * - Search by title, seller, or skills.
 * - Filter by category (auto-generated from available services).
 * - Sort by popularity (rating), price ascending, or price descending.
 *
 * State:
 * - q: search query string.
 * - category: selected category filter.
 * - sort: sorting option.
 *
 * Future Enhancements:
 * - Add pagination or infinite scroll for large datasets.
 * - Allow multi-category filtering (tags).
 * - Replace mock data with live API calls.
 */
export default function Services() {
  // Fetch all available services (mock data for now)
  const all = getServices()

  // Local state for search, category filter, and sorting
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('popular')

  /**
   * Memoized filtered & sorted services
   * - Runs whenever `all`, `q`, `category`, or `sort` changes.
   */
  const services = useMemo(() => {
    return all
      // Filtering logic
      .filter(s =>
        (category === 'all' || s.category === category) &&
        (q.trim() === '' ||
          [s.title, s.seller, ...(s.skills || [])]
            .join(' ')
            .toLowerCase()
            .includes(q.toLowerCase()))
      )
      // Sorting logic
      .sort((a, b) => {
        if (sort === 'price-asc') return a.price - b.price
        if (sort === 'price-desc') return b.price - a.price
        return (b.rating || 0) - (a.rating || 0) // default: popularity
      })
  }, [all, q, category, sort])

  // Extract unique categories from service list (plus "all")
  const categories = ['all', ...Array.from(new Set(all.map(s => s.category)))]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Heading */}
      <h1 className="text-2xl font-semibold mb-4">Services</h1>

      {/* Filter/Search Controls */}
      <div className="card p-4 mb-6">
        <div className="grid md:grid-cols-3 gap-3">
          {/* Search by title, seller, or skills */}
          <SearchBar
            value={q}
            onChange={setQ}
            placeholder="Search by title, skill, seller..."
          />

          {/* Category Filter */}
          <select
            className="input"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Sort Dropdown */}
          <select
            className="input"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="popular">Most popular</option>
            <option value="price-asc">Price: Low to high</option>
            <option value="price-desc">Price: High to low</option>
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {services.map(s => (
          <ServiceCard key={s.id} s={s} />
        ))}
      </div>

      {/* Empty State */}
      {services.length === 0 && (
        <div className="text-gray-600 mt-6">No services found.</div>
      )}
    </div>
  )
}
