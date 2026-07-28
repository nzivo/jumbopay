import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts'
import '../components/Articles.css'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = getRelatedPosts(post)

  return (
    <>
      <PageHero
        crumb={post.title}
        eyebrow={`✦ ${post.tag.toUpperCase()}`}
        title={post.title}
        subtitle={
          <span className="post-meta-row">
            <span className="avatar">{post.author.initials}</span>
            {post.author.name}
            <span className="dot" />
            {post.date}
            <span className="dot" />
            {post.readTime}
          </span>
        }
      />

      <section className="post-section">
        <div className="container">
          <div className="post-back">
            <Link to="/blog">← Back to blog</Link>
          </div>

          <div className="post-body">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="post-author-card">
            <span className="avatar">{post.author.initials}</span>
            <div>
              <strong>{post.author.name}</strong>
              <span>{post.author.role} at Jumbopay</span>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="post-related">
          <div className="container">
            <div className="eyebrow dark">✦ MORE LIKE THIS</div>
            <div className="post-related-grid" style={{ marginTop: 28 }}>
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="article-card">
                  <div className={`article-media media-${r.variant}`}>
                    <span className="article-pill tag">{r.tag}</span>
                    <span className="article-pill date">{r.date}</span>
                  </div>
                  <div className="article-body">
                    <span className="article-meta">{r.tag} · {r.readTime}</span>
                    <h3>{r.title}</h3>
                    <span className="article-link">View article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  )
}
