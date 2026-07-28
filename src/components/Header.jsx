import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SearchModal from './SearchModal'
import BrandMark from './BrandMark'
import './Header.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Services', to: '/services' },
]

const pagesLinks = [
  { label: 'Pricing', to: '/pricing', text: 'Plans that scale with your volume' },
  { label: 'FAQ', to: '/faq', text: 'Answers on security, billing & setup' },
  { label: 'Log in', to: '/login', text: 'Access your Jumbopay dashboard' },
  { label: 'Sign up', to: '/signup', text: 'Create a Jumbopay account free' },
  { label: '404 error page', to: '/this-page-does-not-exist', text: 'See how we handle a dead link' },
]

const trailLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const closeTimer = useRef(null)

  useEffect(() => {
    const trustedEl = document.querySelector('.trusted')
    const getThreshold = () => (trustedEl ? trustedEl.offsetTop - 60 : 480)
    const onScroll = () => setScrolled(window.scrollY > getThreshold())

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [location.pathname])

  useEffect(() => {
    setMobileOpen(false)
    setPagesOpen(false)
  }, [location.pathname])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const openPages = () => {
    clearTimeout(closeTimer.current)
    setPagesOpen(true)
  }

  const scheduleClosePages = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setPagesOpen(false), 250)
  }

  const isScrolled = scrolled || location.pathname !== '/'

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <Link className="logo" to="/">
          <span className="logo-mark">
            <BrandMark />
          </span>
          Jumbopay
        </Link>

        <nav className="main-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li
              className={`nav-dropdown ${pagesOpen ? 'open' : ''}`}
              onMouseEnter={openPages}
              onMouseLeave={scheduleClosePages}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setPagesOpen((o) => !o)}
                aria-expanded={pagesOpen}
              >
                Pages
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="nav-dropdown-panel">
                {pagesLinks.map((p) => (
                  <Link key={p.label} to={p.to} className="nav-dropdown-item">
                    <span>{p.label}</span>
                    <small>{p.text}</small>
                  </Link>
                ))}
              </div>
            </li>

            {trailLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-search-btn"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.8 11.8 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <Link to="/login" className="header-login">
            Log in
          </Link>
          <Link to="/signup" className="btn btn-primary btn-sm">
            Get started
          </Link>
        </div>

        <div className="mobile-actions">
          <button
            type="button"
            className="header-search-btn"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.8 11.8 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mobile-nav-group-label">Pages</li>
          {pagesLinks.map((p) => (
            <li key={p.label}>
              <NavLink to={p.to} className="mobile-sub">
                {p.label}
              </NavLink>
            </li>
          ))}
          {trailLinks.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          <Link to="/login" className="btn btn-ghost btn-sm">
            Log in
          </Link>
          <Link to="/signup" className="btn btn-primary btn-sm">
            Get started
          </Link>
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
