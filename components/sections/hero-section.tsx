import { GridPattern } from "../ui/grid-pattern"
import LogoCloud from "./logo-cloud"

export default function Hero() {
  return (
    <div
      className="relative"
      style={{
        // background: "url('/hero-image-launchbunch.png')",
        height: "100vh",
        width: "100vw",
      }}
    >
      <GridPattern />
      <div className="absolute h-screen w-screen bg-black opacity-60" />
      <div className="relative isolate px-6 pt-34 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-24">
          <div className="text-center">
            <h1 className="text-5xl leading-snug font-semibold tracking-tight text-balance text-foreground">
              Elevate Digital Presence Excellence
            </h1>
            <p className="mt-8 text-lg text-pretty text-muted-foreground sm:text-xl/8">
              Launchbunch is a high-octane IT agency engineering cutting-edge
              software, striking design, and algorithmic marketing solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <a href="#contact" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <LogoCloud />
      </div>
    </div>
  )
}
