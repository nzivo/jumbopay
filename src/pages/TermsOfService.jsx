import LegalLayout from '../components/LegalLayout'
import { termsOfService } from '../data/legalContent'

export default function TermsOfService() {
  return (
    <LegalLayout
      crumb="Terms of Service"
      title="Terms of Service"
      updated={termsOfService.updated}
      intro={termsOfService.intro}
      sections={termsOfService.sections}
    />
  )
}
