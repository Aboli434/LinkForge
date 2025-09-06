import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, logout } from "../data/mock";
import logo from "../assets/logo.png";


const active = ({ isActive }) =>
  isActive
    ? "text-brand-accent font-semibold"
    : "text-gray-700 hover:text-black";

export default function Navbar() {
  const auth = getAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
    window.location.reload();
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

        {/* Middle: Nav Links */}
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

        {/* Right: Auth buttons / User menu */}
        <div className="flex items-center gap-3">
          {!auth ? (
            <>
              <Link to="/login" className="btn-ghost px-4 py-1">
                Log in
              </Link>
              <Link to="/register" className="btn-primary px-4 py-1">
                Sign up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
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
              <NavLink to="/messages" className="hidden md:inline-block btn-ghost">
                Messages
              </NavLink>
              {auth.role === "admin" && (
                <NavLink to="/admin" className="btn-ghost">
                  Admin
                </NavLink>
              )}
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
  );
}
