import './TrustedBy.css'

const brands = [
  { name: 'Paywire' },
  { name: 'onlineQ' },
  { name: 'Settl', icon: '○' },
  { name: 'FlowPay' },
  { name: 'Vaultic', icon: '■' },
  { name: 'Remit+' },
]

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container trusted-inner">
        <p className="trusted-label">Jumbopay is trusted by 18+ million people</p>
        <div className="brand-row">
          {brands.map((b) => (
            <span key={b.name} className="brand-item">
              {b.icon && <span className="brand-icon">{b.icon}</span>}
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
