import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'

export default function AuthLogo() {
  return (
    <Link className="auth-logo" to="/">
      <span className="logo-mark">
        <BrandMark />
      </span>
      Jumbopay
    </Link>
  )
}
