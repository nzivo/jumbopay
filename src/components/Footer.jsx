import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'
import './Footer.css'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/services' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Integrations', to: '/services' },
      { label: 'Changelog', to: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', to: '/faq' },
      { label: 'Tutorials', to: '/blog' },
      { label: 'Blog', to: '/blog' },
      { label: 'Support', to: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Partners', to: '/about' },
    ],
  },
]

const socials = [
  {
    label: 'X',
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12.1" cy="3.9" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="5.2" width="2.6" height="9.3" fill="currentColor" />
        <circle cx="2.8" cy="2" r="1.6" fill="currentColor" />
        <path
          d="M6.8 5.2h2.5v1.3c.5-.8 1.4-1.5 2.9-1.5 2.1 0 3.3 1.4 3.3 4v5.5h-2.6V9.5c0-1.2-.4-2-1.6-2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5h-2.7c0-.1 0-9 0-9.3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1a7 7 0 0 0-2.2 13.6c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.8-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.08 1.65.77 2.05.59.06-.46.24-.77.44-.95-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.94.72a6.7 6.7 0 0 1 3.53 0c1.35-.91 1.94-.72 1.94-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.7-1.65 3.29-3.22 3.46.25.22.48.65.48 1.31v1.94c0 .19.13.41.49.34A7 7 0 0 0 8 1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link className="logo" to="/">
            <span className="logo-mark">
              <BrandMark />
            </span>
            Jumbopay
          </Link>
          <p>Jumbopay empowers businesses to accept, route, and settle payments across borders, making money movement faster, safer, and simpler.</p>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href="#top" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Jumbopay. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/cookies-settings">Cookies Settings</Link>
        </div>
      </div>

      <div className="footer-wordmark">Jumbopay</div>
    </footer>
  )
}
