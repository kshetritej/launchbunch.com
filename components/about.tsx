import { splineSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function About() {
  return (
    <div className="mx-auto max-w-5xl border-t p-4">
      <h2
        className={cn(
          splineSans.className,
          "my-10 max-w-sm text-3xl font-bold"
        )}
      >
        About us
      </h2>
      <div className="flex max-w-2xl gap-4 md:text-xl">
        <div className="mt-1 size-4 min-w-4 rounded-full bg-blue-500" />
        We’re a small team based in Pokhara.
        <br /> <br /> Most of the businesses we work with come to us for the
        same reason something isn’t working the way it should. <br />
        <br /> Sometimes it’s a website that feels outdated.
        <br /> Sometimes it’s marketing that isn’t bringing results.
        <br /> Sometimes it’s just not clear how to move forward online.
        <br />
        <br /> That’s where we help. We work on the marketing, the design, and
        the website together, so everything feels clear and consistent. <br />
        <br />
        Simple work. Done properly. ✌🏼
      </div>
    </div>
  )
}
