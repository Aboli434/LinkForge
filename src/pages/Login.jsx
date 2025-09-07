import { useState } from 'react'
import { setAuth, getUsers } from '../data/test'
import { useNavigate, Link } from 'react-router-dom'

/**
 * Login Page Component
 *
 * Purpose:
 * - Provides a simple email-based login form (for mock/demo purposes).
 * - Authenticates a user from seeded/mock user data.
 * - Sets the authenticated user in global auth state.
 * - Redirects users to their respective dashboards based on role.
 *
 * Features:
 * - Email-only login (no password for now, since using mock data).
 * - Redirects:
 *    - Clients → Client Dashboard
 *    - Freelancers → Freelancer Dashboard
 *    - Admins → Admin Panel
 * - Links to "Forgot Password" and "Register" pages.
 *
 * Future Enhancements:
 * - Add password field and validation.
 * - Integrate with a real backend API for authentication.
 * - Support OAuth (Google, GitHub, etc.).
 */

export default function Login() {
  const [email, setEmail] = useState('') // Controlled input for email
  const navigate = useNavigate()
  const users = getUsers() // Fetch seeded/mock users

  /**
   * Handles login form submission
   * - Prevents default page reload
   * - Validates if the entered email exists in mock users
   * - Sets auth state and navigates to dashboard based on role
   */
  function submit(e) {
    e.preventDefault()
    const u = users.find(x => x.email === email)

    if (!u) {
      return alert('User not found. Use register or try one of seeded emails from mock data.')
    }

    // Save logged-in user into mock auth store
    setAuth(u)

    // Redirect user based on role
    if (u.role === 'client') {
      navigate('/dashboard/client')
    } else if (u.role === 'freelancer') {
      navigate('/dashboard/freelancer')
    } else {
      navigate('/admin')
    }

    // Force reload to refresh protected routes / auth state
    window.location.reload()
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Log in</h1>

      {/* Login Form */}
      <form onSubmit={submit} className="card p-6 grid gap-4">
        {/* Email Input */}
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button className="btn-primary" type="submit">Log in</button>
          <Link to="/forgot-password" className="text-sm text-gray-600">Forgot?</Link>
        </div>

        {/* Sign Up Redirect */}
        <p className="text-sm text-gray-600">
          No account?{' '}
          <Link to="/register" className="text-indigo-600">Sign up</Link>
        </p>
      </form>
    </div>
  )
}
