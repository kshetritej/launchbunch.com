import Navbar from "@/components/navbar"
import ContactSection from "@/components/sections/contact-section"
import Cta from "@/components/sections/cta"
import FAQSection from "@/components/sections/faq-section"
import FeatureSection from "@/components/sections/feature-section"
import Hero from "@/components/sections/hero-section"
import ServiceSection from "@/components/sections/services-section"
import Stats from "@/components/sections/stats"
import SmoothScrolling from "@/components/smooth-scrolling"

export default function Page() {
  return (
    <SmoothScrolling>
      <Navbar />
      <Hero />
      <Stats />
      <FeatureSection />
      <ServiceSection />
      <ContactSection />
      <FAQSection />
      <Cta />
    </SmoothScrolling>
  )
}
