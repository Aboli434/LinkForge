import { Navigate } from 'react-router-dom'
import { getAuth } from '../data/mock'

export default function ProtectedRoute({ children, role }) {
  const auth = getAuth()
  if (!auth) return <Navigate to="/login" replace />
  if (role && auth.role !== role && auth.role !== 'admin') return <Navigate to="/" replace />
  return children
}
