import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import './CookiesSettings.css'

const STORAGE_KEY = 'jumbopay-cookie-prefs'

const categories = [
  {
    id: 'essential',
    name: 'Strictly necessary',
    text: 'Required for the site and dashboard to function, such as staying signed in and remembering your theme. These cannot be turned off.',
    locked: true,
  },
  {
    id: 'analytics',
    name: 'Analytics',
    text: 'Help us understand how visitors use Jumbopay so we can improve performance and fix issues faster.',
  },
  {
    id: 'functional',
    name: 'Functional',
    text: 'Remember preferences like currency display and dashboard layout so you don’t have to reset them every visit.',
  },
  {
    id: 'advertising',
    name: 'Advertising',
    text: 'Used to measure the effectiveness of our campaigns and show relevant messages on other sites.',
  },
]

const cookieTable = [
  { name: 'jumbopay-theme', provider: 'Jumbopay', purpose: 'Remembers your selected color theme', expiry: '1 year' },
  { name: 'jumbopay-cookie-prefs', provider: 'Jumbopay', purpose: 'Stores your cookie preference choices', expiry: '1 year' },
  { name: 'session_id', provider: 'Jumbopay', purpose: 'Keeps you signed in to your dashboard', expiry: 'Session' },
  { name: '_ga', provider: 'Google Analytics', purpose: 'Distinguishes unique visitors for analytics', expiry: '2 years' },
]

function defaultPrefs() {
  return { analytics: true, functional: true, advertising: false }
}

export default function CookiesSettings() {
  const [prefs, setPrefs] = useState(defaultPrefs)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setPrefs({ ...defaultPrefs(), ...JSON.parse(stored) })
    } catch {
      // ignore malformed storage
    }
  }, [])

  const toggle = (id) => {
    setSaved(false)
    setPrefs((p) => ({ ...p, [id]: !p[id] }))
  }

  const save = (next = prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setPrefs(next)
    setSaved(true)
  }

  const acceptAll = () => save({ analytics: true, functional: true, advertising: true })
  const rejectNonEssential = () => save({ analytics: false, functional: false, advertising: false })

  return (
    <>
      <PageHero
        crumb="Cookies Settings"
        eyebrow="✦ LEGAL"
        title="Manage your cookie preferences"
        subtitle="Control which optional cookies Jumbopay is allowed to use on this device. Strictly necessary cookies are always on."
      />

      <section className="cookies-section">
        <div className="container cookies-body">
          <p className="cookies-intro">
            We use cookies to run our website, understand how it's used, and improve your experience. You can
            switch optional categories on or off below, and change your mind at any time by returning to this
            page.
          </p>

          <div className="cookies-quick-actions">
            <button type="button" className="btn btn-primary" onClick={acceptAll}>
              Accept all
            </button>
            <button type="button" className="btn btn-muted" onClick={rejectNonEssential}>
              Reject non-essential
            </button>
          </div>

          <div className="cookies-categories">
            {categories.map((cat) => (
              <div key={cat.id} className="cookie-category">
                <div>
                  <div className="cookie-category-title">
                    <strong>{cat.name}</strong>
                    {cat.locked && <span className="cookie-category-badge">Always active</span>}
                  </div>
                  <p>{cat.text}</p>
                </div>

                <label className="cookie-toggle">
                  <input
                    type="checkbox"
                    checked={cat.locked ? true : !!prefs[cat.id]}
                    disabled={cat.locked}
                    onChange={() => toggle(cat.id)}
                    aria-label={`Toggle ${cat.name} cookies`}
                  />
                  <span className="cookie-toggle-track" />
                </label>
              </div>
            ))}
          </div>

          <div className="cookies-save-row">
            <button type="button" className="btn btn-dark" onClick={() => save()}>
              Save preferences
            </button>
            {saved && <span className="cookies-saved-note">✓ Preferences saved to this device</span>}
          </div>

          <h2 className="cookies-table-heading">Cookies we use</h2>
          <div className="pp-table-wrap">
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Expiry</th>
                </tr>
              </thead>
              <tbody>
                {cookieTable.map((c) => (
                  <tr key={c.name}>
                    <td>{c.name}</td>
                    <td>{c.provider}</td>
                    <td>{c.purpose}</td>
                    <td>{c.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cookies-more-info">
            For more detail on how we handle personal data, see our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
