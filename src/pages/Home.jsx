import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import PayFast from '../components/PayFast'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Dashboard from '../components/Dashboard'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import TechShowcase from '../components/TechShowcase'
import Faq from '../components/Faq'
import Articles from '../components/Articles'
import FinalCta from '../components/FinalCta'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <PayFast />
      <Services />
      <WhyChoose />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <TechShowcase />
      <Faq />
      <Articles />
      <FinalCta />
    </>
  )
}
