"use client" // Required in Next.js App Router

import ReactLenis from "lenis/react"
// import "@studio-freight/lenis/dist/lenis.css"

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  // Configure options like lerp, duration, and touch support
  const lenisOptions = { lerp: 0.1, duration: 1.5, smoothTouch: true }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrolling
