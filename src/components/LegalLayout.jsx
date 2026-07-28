import PageHero from './PageHero'
import FinalCta from './FinalCta'
import './LegalLayout.css'

export default function LegalLayout({ crumb, title, updated, intro, sections }) {
  return (
    <>
      <PageHero crumb={crumb} eyebrow="✦ LEGAL" title={title} subtitle={`Last updated: ${updated}`} />

      <section className="legal-section">
        <div className="container legal-grid">
          <nav className="legal-toc" aria-label="Table of contents">
            <span className="legal-toc-label">On this page</span>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.heading}
              </a>
            ))}
          </nav>

          <div className="legal-body">
            {intro && <p className="legal-intro">{intro}</p>}

            {sections.map((s) => (
              <div key={s.id} id={s.id} className="legal-doc-section">
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
