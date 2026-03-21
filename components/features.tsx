import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { MessageSquareMore, MousePointer2, Wheat } from "lucide-react"
import Link from "next/link"
import { configs } from "@/lib/constants"

const features = [
  {
    name: "Communication",
    description:
      "You won’t have to chase us for updates. We communicate clearly and keep things moving.",
    icon: MessageSquareMore,
  },
  {
    name: "Sharp Work",
    description:
      "We don’t ship average work. Every design, campaign, and website is built with care and  attention to detail.",
    icon: MousePointer2,
  },
  {
    name: "Real Results",
    description:
      "At the end of the day, it’s about results. More customers. Better visibility. Real growth.",
    icon: Wheat,
  },
]

export default function FeatureSection() {
  return (
    <div
      className="mx-auto min-h-[60vh] max-w-5xl bg-background py-24 sm:py-32"
      id="about"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-1.5">
            <Badge className="bg-transparent p-0 text-green-500 uppercase">
              Why Choose Launch Bunch
            </Badge>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground lg:text-balance">
              Different kind of digital partner
            </p>
            <p className="mt-6 text-base text-muted-foreground">
              There are a lot of agencies out there. Most sound the same. We try
              to keep things simple — and do the work properly.
            </p>
          </div>
          <div className="flex flex-col items-start justify-end">
            <Link href={configs.whatsappLink} target="_blank">
              <Button size={"lg"} className="rounded-full px-8 py-8">
                Learn more about us
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="text-base/7 font-semibold">
                  <feature.icon
                    aria-hidden="true"
                    className="size-8 text-green-500"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
