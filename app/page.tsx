import FeatureSection from "@/components/sections/feature-section"
import Hero from "@/components/sections/hero-section"
import LogoCloud from "@/components/sections/logo-cloud"
import SmoothScrolling from "@/components/smooth-scrolling"

export default function Page() {
  return (
    <SmoothScrolling>
      <Hero />
      <LogoCloud />
      <FeatureSection />
    </SmoothScrolling>
  )
}
