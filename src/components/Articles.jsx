import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './Articles.css'

const articles = blogPosts.slice(0, 3)

export default function Articles() {
  return (
    <section className="articles">
      <div className="container">
        <div className="eyebrow dark">✦ INSIGHTS &amp; UPDATES</div>

        <div className="articles-grid">
          {articles.map((a) => (
            <article key={a.slug} className="article-card">
              <div className={`article-media media-${a.variant}`}>
                <span className="article-pill tag">{a.tag}</span>
                <span className="article-pill date">{a.date}</span>
              </div>
              <div className="article-body">
                <span className="article-meta">{a.tag} · {a.readTime}</span>
                <h3>{a.title}</h3>
                <Link to={`/blog/${a.slug}`} className="article-link">
                  View article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
