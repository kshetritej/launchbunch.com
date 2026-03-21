import About from "@/components/about"
import ClientsMarquee from "@/components/clients-marquee"
import Cta from "@/components/cta"
import FeatureSection from "@/components/features"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Launch Bunch | Digital Agency in Pokhara for Marketing, Design & Development",

  description:
    "Launch Bunch is a digital agency based in Pokhara, Nepal. We help businesses grow with marketing, design, and high-performance websites that turn visitors into real customers.",

  metadataBase: new URL("https://launchbunch.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Launch Bunch | Build a Digital Presence People Trust",
    description:
      "Marketing, design, and development that turn visitors into real customers. Based in Pokhara. Working with clients globally.",
    url: "https://launchbunch.com",
    siteName: "Launch Bunch",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Launch Bunch Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Launch Bunch | Digital Agency",
    description:
      "We help businesses grow with marketing, design, and development that convert.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "business",
}

export default function Page() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <Services />
      <FeatureSection />
      <About />
      <Testimonials />
      <Cta />
    </>
  )
}
