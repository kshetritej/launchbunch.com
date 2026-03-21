import Image from "next/image"
import { Marquee } from "./ui/marquee"
import { cn } from "@/lib/utils"
import { splineSans } from "@/lib/fonts"

const clientImages = Array.from(
  { length: 13 },
  (_, i) => `/clients/${i + 1}.png`
)

export default function ClientsMarquee() {
  return (
    <div className="hide-scrollbar-container flex min-h-[20vh] flex-col items-center justify-center gap-2 overflow-x-scroll py-12">
      <p className={cn(splineSans.className, "font-bold")}>
        {" "}
        Industries Worked with
      </p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {clientImages.map((src, i) => (
          <Image
            height={100}
            width={200}
            key={i}
            src={src}
            alt={`Client ${i + 1}`}
            className="text-3xl font-bold grayscale hover:filter-none"
          />
        ))}
      </Marquee>
    </div>
  )
}
