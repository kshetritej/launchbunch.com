import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

const features = [
  {
    name: "Cloud Infrastructure",
    description:
      "Deploy and scale your applications on reliable cloud platforms. We handle setup, optimization, and monitoring so your systems stay fast and stable.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secure Systems",
    description:
      "Protect your applications and user data with industry-standard encryption, secure authentication, and modern security practices.",
    icon: LockClosedIcon,
  },
  {
    name: "Automation & Integrations",
    description:
      "Streamline your workflows with automated processes and seamless integrations between your apps, APIs, and business tools.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced Cybersecurity",
    description:
      "Identify vulnerabilities, strengthen system defenses, and ensure your infrastructure follows best security practices.",
    icon: FingerPrintIcon,
  },
]

export default function FeatureSection() {
  return (
    <div
      className="mx-auto min-h-[60vh] max-w-5xl bg-background py-24 sm:py-32"
      id="about"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1.5">
            <Badge className="bg-transparent p-0 text-green-500 uppercase">
              LLMs.txt & MCP
            </Badge>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground lg:text-balance">
              Bring intelligence to enterprise knowledge
            </p>
            <p className="mt-6 text-base text-muted-foreground">
              Modernize without the rebuild with enterprise-grade professional
              service & security.
            </p>
          </div>
          <div className="flex flex-col items-start justify-end">
            <Button size={"lg"}>Explore for enterprise</Button>
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
