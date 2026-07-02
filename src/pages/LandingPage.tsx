import { HeroSection } from '../sections/HeroSection'
import { FeaturesSection } from '../sections/FeaturesSection'
import { SpecificationsSection } from '../sections/SpecificationsSection'
import { GallerySection } from '../sections/GallerySection'
import { TestimonialsSection } from '../sections/TestimonialsSection'
import { FaqSection } from '../sections/FaqSection'
import { NewsletterSection } from '../sections/NewsletterSection'
import { FooterSection } from '../sections/FooterSection'

type LandingPageProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export default function LandingPage({ isDark, onToggleTheme }: LandingPageProps) {
  return (
    <>
      <HeroSection isDark={isDark} onToggleTheme={onToggleTheme} />
      <main>
        <FeaturesSection />
        <SpecificationsSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </>
  )
}
