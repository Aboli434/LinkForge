import { Navigate } from 'react-router-dom'
import { getAuth } from '../data/test'

/**
 * ProtectedRoute Component
 *
 * A wrapper for route protection in React Router.
 *
 * Features:
 * - Redirects unauthenticated users to `/login`.
 * - Optionally restricts access by user role.
 * - Allows "admin" role to bypass role restrictions.
 *
 * Props:
 * @param {ReactNode} children - The component(s) to render if access is granted.
 * @param {string} [role] - (Optional) The required role to access this route
 *                          (e.g., "client", "freelancer"). If not provided,
 *                          any authenticated user can access.
 *
 * Behavior:
 * - If no user is authenticated → redirect to `/login`.
 * - If `role` is provided and the authenticated user’s role doesn’t match
 *   (and is not `admin`) → redirect to `/`.
 * - Otherwise, render `children`.
 */

export default function ProtectedRoute({ children, role }) {
  // Get current authentication state (user info or null)
  const auth = getAuth()

  // Case 1: User is not logged in → redirect to login page
  if (!auth) return <Navigate to="/login" replace />

  // Case 2: Role-based restriction (admins override restriction)
  if (role && auth.role !== role && auth.role !== 'admin') {
    return <Navigate to="/" replace />
  }

  // Case 3: Access granted → render the protected content
  return children
}
