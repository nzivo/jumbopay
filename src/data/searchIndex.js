import { services } from './services'
import { blogPosts } from './blogPosts'

const pages = [
  { type: 'Page', title: 'Home', text: 'Overview of the Jumbopay global payments platform.', to: '/' },
  { type: 'Page', title: 'About us', text: 'Our story, mission, timeline, and leadership team.', to: '/about' },
  { type: 'Page', title: 'Services', text: 'Fraud prevention, settlement, billing, and every service we offer.', to: '/services' },
  { type: 'Page', title: 'Pricing', text: 'Plans, feature comparison, and add-ons.', to: '/pricing' },
  { type: 'Page', title: 'FAQ', text: 'Answers on billing, security, and integrations.', to: '/faq' },
  { type: 'Page', title: 'Blog', text: 'News, guides, and ideas from the Jumbopay team.', to: '/blog' },
  { type: 'Page', title: 'Contact', text: 'Get in touch with our team.', to: '/contact' },
  { type: 'Page', title: 'Log in', text: 'Access your Jumbopay dashboard.', to: '/login' },
  { type: 'Page', title: 'Sign up', text: 'Create a free Jumbopay account.', to: '/signup' },
  { type: 'Page', title: 'Forgot password', text: 'Reset your Jumbopay account password.', to: '/forgot-password' },
]

const serviceEntries = services.map((s) => ({
  type: 'Service',
  title: s.title,
  text: s.summary,
  to: `/services/${s.slug}`,
}))

const blogEntries = blogPosts.map((p) => ({
  type: 'Blog',
  title: p.title,
  text: p.excerpt,
  to: `/blog/${p.slug}`,
}))

export const searchIndex = [...pages, ...serviceEntries, ...blogEntries]

export function searchSite(query, limit = 8) {
  const q = query.trim().toLowerCase()
  if (!q) return []

  return searchIndex
    .filter((item) => item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q))
    .slice(0, limit)
}
