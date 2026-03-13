import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline"

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
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            IT Services
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl lg:text-balance">
            Technology solutions that grow your business
          </p>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            From web applications and cloud infrastructure to automation and
            security, we build reliable digital solutions that help companies
            operate faster and smarter.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-foreground">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
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
