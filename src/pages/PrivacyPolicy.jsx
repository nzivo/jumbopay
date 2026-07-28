import LegalLayout from '../components/LegalLayout'
import { privacyPolicy } from '../data/legalContent'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      crumb="Privacy Policy"
      title="Privacy Policy"
      updated={privacyPolicy.updated}
      intro={privacyPolicy.intro}
      sections={privacyPolicy.sections}
    />
  )
}
