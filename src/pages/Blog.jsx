import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { blogPosts, blogCategories } from '../data/blogPosts'
import '../components/Articles.css'
import './Blog.css'

export default function Blog() {
  const [category, setCategory] = useState('All')

  const [featured, ...rest] = blogPosts
  const filtered = useMemo(
    () => rest.filter((p) => category === 'All' || p.tag === category),
    [category]
  )

  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="✦ INSIGHTS & UPDATES"
        title="News, guides, and ideas from the Jumbopay team"
        subtitle="Notes on payments, security, and product from the people building Jumbopay's infrastructure."
      />

      <section className="blog-section">
        <div className="container">
          <Link to={`/blog/${featured.slug}`} className="blog-featured">
            <div className={`blog-featured-media media-${featured.variant}`}>
              <span className="article-pill tag">{featured.tag}</span>
            </div>
            <div className="blog-featured-body">
              <span className="article-meta">{featured.date} · {featured.readTime}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="article-link">Read article →</span>
            </div>
          </Link>

          <div className="blog-filters">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filtered.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="article-card">
                <div className={`article-media media-${post.variant}`}>
                  <span className="article-pill tag">{post.tag}</span>
                  <span className="article-pill date">{post.date}</span>
                </div>
                <div className="article-body">
                  <span className="article-meta">{post.tag} · {post.readTime}</span>
                  <h3>{post.title}</h3>
                  <span className="article-link">View article →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="blog-newsletter">
            <div>
              <h3>Get updates in your inbox</h3>
              <p>Product news and payments insight, roughly twice a month. No spam.</p>
            </div>
            <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@company.com" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
