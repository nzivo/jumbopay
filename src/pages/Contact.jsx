import { useState } from 'react'
import PageHero from '../components/PageHero'
import './Contact.css'

const offices = [
  { city: 'San Francisco, US', detail: 'HQ · 45 Market Street' },
  { city: 'London, UK', detail: '12 Finsbury Square' },
  { city: 'Singapore', detail: '1 Marina Boulevard' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="✦ GET IN TOUCH"
        title="Let's talk about your payments"
        subtitle="Whether you're evaluating Jumbopay or already a customer, our team typically replies within a couple of hours."
      />

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-form-card">
            {sent ? (
              <div className="contact-success">
                <span className="contact-success-icon">✓</span>
                <h3>Message sent</h3>
                <p>Thanks for reaching out. A member of our team will get back to you shortly.</p>
                <button type="button" className="btn btn-dark" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2>Send us a message</h2>
                <p>Fill out the form and we'll route it to the right team.</p>
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="name">Full name</label>
                      <input id="name" type="text" placeholder="Jamie Chen" required />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="email">Work email</label>
                      <input id="email" type="email" placeholder="jamie@company.com" required />
                    </div>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" placeholder="Acme Inc." />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="message">How can we help?</label>
                    <textarea id="message" placeholder="Tell us about your business and what you're looking for..." required />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send message →
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="contact-side">
            <div className="contact-info-card">
              <h3>Contact information</h3>
              <div className="contact-info-row">
                <span className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4.5 8 9l6-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                <div>
                  <strong>Email us</strong>
                  <span>support@jumbopay.com</span>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 2.5c1 2 1 4 0 6-.6 1 1.2 3.4 3 4.5.9.6 2.3.5 3-.5.6-1 1.6-1.2 2.5-.7l1 .6c.6.4.8 1.1.4 1.7-1 1.5-2.9 2.5-4.6 1.9C4.7 14.2 1.8 11.3.8 7.8 0 5-.2 2.6 1.3 1.4c.6-.5 1.4-.3 1.8.3l.5.8Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <strong>Call us</strong>
                  <span>+1 (415) 555-0148</span>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8 4.5v4l2.6 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <strong>Live chat</strong>
                  <span>Mon–Fri, 6am–8pm PT</span>
                </div>
              </div>
            </div>

            <div className="contact-offices">
              <h3>Our offices</h3>
              {offices.map((o) => (
                <div key={o.city} className="contact-office">
                  <strong>{o.city}</strong>
                  <span>{o.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
