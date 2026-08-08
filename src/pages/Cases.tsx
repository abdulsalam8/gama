import { Navigate } from 'react-router-dom'

/** Cases use the simple parts picker (model + colour) */
export default function Cases() {
  return <Navigate to="/parts?need=case" replace />
}
