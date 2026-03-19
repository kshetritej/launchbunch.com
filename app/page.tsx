import ContactSection from "@/components/sections/contact-section"
import Cta from "@/components/sections/cta"
import FAQSection from "@/components/sections/faq-section"
import FeatureSection from "@/components/sections/feature-section"
import ServiceSection from "@/components/sections/services-section"
import Stats from "@/components/sections/stats"
import SmoothScrolling from "@/components/smooth-scrolling"
import { Footer } from "@/components/sections/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { ClientsMarquee } from "@/components/sections/clients-marquee"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"

export default function Page() {
  return (
    // <SmoothScrolling>
    // <>
    <>
      <Navbar />
      <Hero />
      <ClientsMarquee />
      <Services />
      {/*<Stats />*/}
      <FeatureSection />
      {/*<ServiceSection />*/}
      <Testimonials />
      <Cta />
      {/*<ContactSection />
      <FAQSection />*/}
      <Footer />
    </>
    // </SmoothScrolling>
  )
}
