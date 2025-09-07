import { useState, useEffect } from 'react'
import { getAuth, setAuth } from '../data/test'

/**
 * Profile Component
 *
 * Purpose:
 * - Allows logged-in users to view and update their profile details.
 * - Supports both "freelancer" and "client" roles.
 * - Freelancers can provide additional details (title, bio, portfolio).
 *
 * Features:
 * - Loads the authenticated user from mock storage.
 * - Updates profile information and persists it (demo mode with mock data).
 * - Dynamically shows freelancer-specific fields.
 *
 * Props: None
 *
 * Future Enhancements:
 * - Add form validation (e.g., email format, URL validation for portfolio).
 * - Integrate with backend API for persistent profile storage.
 * - Improve UI/UX with profile picture upload and success/error messages.
 */
export default function Profile() {
  // Load stored authenticated user or use default fallback
  const stored = getAuth()
  const [user, setUser] = useState(
    stored || { name: '', email: '', role: 'freelancer' }
  )

  // Effect to initialize state (currently redundant but reserved for future)
  useEffect(() => {
    setUser({ ...user })
  }, [])

  /**
   * Handles saving profile data
   * - Prevents page reload
   * - Updates stored auth data
   * - Alerts user (mock persistence)
   */
  function save(e) {
    e.preventDefault()
    setAuth(user)
    alert('Profile saved (mock)')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>

      {/* Profile Form */}
      <form onSubmit={save} className="card p-4 grid gap-3">
        {/* Name */}
        <input
          className="input"
          placeholder="Name"
          value={user.name || ''}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />

        {/* Email */}
        <input
          className="input"
          placeholder="Email"
          value={user.email || ''}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />

        {/* Role Selector */}
        <select
          className="input"
          value={user.role || 'freelancer'}
          onChange={e => setUser({ ...user, role: e.target.value })}
        >
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
        </select>

        {/* Extra fields for freelancers */}
        {user.role === 'freelancer' && (
          <>
            {/* Freelancer Title */}
            <input
              className="input"
              placeholder="Title (e.g. Frontend Dev)"
              value={user.title || ''}
              onChange={e => setUser({ ...user, title: e.target.value })}
            />

            {/* Freelancer Bio */}
            <textarea
              className="input"
              placeholder="Bio"
              value={user.bio || ''}
              onChange={e => setUser({ ...user, bio: e.target.value })}
            />

            {/* Freelancer Portfolio */}
            <input
              className="input"
              placeholder="Portfolio URL"
              value={user.portfolio || ''}
              onChange={e => setUser({ ...user, portfolio: e.target.value })}
            />
          </>
        )}

        {/* Save Button */}
        <button className="btn-primary">Save</button>
      </form>
    </div>
  )
}

