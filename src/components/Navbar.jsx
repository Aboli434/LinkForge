import { Link, NavLink, useNavigate } from "react-router-dom"
import { getAuth, logout } from "../data/test"
import logo from "../assets/logo.png"

/**
 * Navbar Component
 *
 * A responsive navigation bar that:
 * - Displays the site logo and name (left).
 * - Shows navigation links (middle, hidden on small screens).
 * - Displays authentication controls or user menu (right).
 *
 * Features:
 * - Sticky at the top with blur and border.
 * - Active nav links are styled differently.
 * - Conditional rendering based on authentication state:
 *   - If no user is authenticated → show Login and Sign up buttons.
 *   - If authenticated → show Dashboard, Messages, (Admin if role=admin), and Logout.
 *
 * Dependencies:
 * - `getAuth()` → retrieves current user session.
 * - `logout()` → clears session/auth state.
 * - `useNavigate()` → redirects after logout.
 */

const active = ({ isActive }) =>
  isActive
    ? "text-brand-accent font-semibold"
    : "text-gray-700 hover:text-black"

export default function Navbar() {
  // Get current authentication info
  const auth = getAuth()
  const navigate = useNavigate()

  /**
   * Handle user logout:
   * - Calls `logout()` to clear auth.
   * - Navigates back to homepage.
   * - Reloads window to reset state.
   */
  function handleLogout() {
    logout()
    navigate("/")
    window.location.reload()
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Site Name */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="LinkForge Logo" className="h-14 w-auto" />
          <span className="font-heading font-semibold text-xl text-brand-primary">
            LinkForge
          </span>
        </Link>

        {/* Middle: Navigation Links (hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/services" className={active}>
            Services
          </NavLink>
          <NavLink to="/about" className={active}>
            About
          </NavLink>
          <NavLink to="/contact" className={active}>
            Contact
          </NavLink>
          <NavLink to="/faq" className={active}>
            FAQ
          </NavLink>
        </nav>

        {/* Right: Auth Buttons / User Menu */}
        <div className="flex items-center gap-3">
          {!auth ? (
            // If not logged in → show login/signup
            <>
              <Link to="/login" className="btn-ghost px-4 py-1">
                Log in
              </Link>
              <Link to="/register" className="btn-primary px-4 py-1">
                Sign up
              </Link>
            </>
          ) : (
            // If logged in → show user menu
            <div className="flex items-center gap-3">
              {/* Dashboard link (depends on role) */}
              <NavLink
                to={
                  auth.role === "client"
                    ? "/dashboard/client"
                    : "/dashboard/freelancer"
                }
                className="hidden md:inline-block btn-ghost"
              >
                Dashboard
              </NavLink>

              {/* Messages link */}
              <NavLink to="/messages" className="hidden md:inline-block btn-ghost">
                Messages
              </NavLink>

              {/* Admin link (only visible if role=admin) */}
              {auth.role === "admin" && (
                <NavLink to="/admin" className="btn-ghost">
                  Admin
                </NavLink>
              )}

              {/* User identity + logout */}
              <div className="flex items-center gap-2">
                <div className="text-sm">{auth.name || auth.email}</div>
                <button onClick={handleLogout} className="btn-primary">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
