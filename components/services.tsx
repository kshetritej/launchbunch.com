import { splineSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { configs } from "@/lib/constants"

const services = [
  {
    title: "Digital Marketing",
    description:
      "Getting attention online is easy. Turning that attention into customers is the real work. We plan and manage digital campaigns that bring real results more leads, more bookings, and more sales. From social media to search engines, every strategy is built around growth.",
    image: "/digital-marketing.svg",
  },
  {
    title: "Design",
    description:
      "People form an opinion about a brand in seconds. Strong design helps your business look credible, professional, and memorable. We create brand identities, social media visuals, and marketing creatives that make businesses stand out.",
    image: "/design.svg",
  },
  {
    title: "Development",
    description:
      "Your website should do more than just exist. We build fast, modern websites that look great on every device, rank on Google, and guide visitors toward taking action.",
    image: "/development.svg",
  },
]
export default function Services() {
  return (
    <div className="container mx-auto rounded-2xl bg-gray-100 dark:bg-[#171717]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-8 py-24 text-center">
        <h2
          className={cn(
            splineSans.className,
            "max-w-sm text-center text-4xl font-bold"
          )}
        >
          Three ways we help business grow
        </h2>
        <p className="max-w-xl">
          Every business needs three things to succeed online visibility, trust,
          and a website that works. That’s where we focus.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <code className="mt-4">Not sure where to start?</code>
        <Link href={configs.whatsappLink} target="_blank">
          <Button size={"lg"} className="rounded-full px-8 py-8">
            Let&apos;s Talk
          </Button>
        </Link>
      </div>
    </div>
  )
}

const ServiceCard = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => {
  return (
    <div className="flex max-w-md flex-col gap-4 rounded-2xl bg-gray-200 p-6 text-left dark:bg-[#1F1F1F]">
      <Image src={image} height={100} width={50} alt={title} />
      <h2 className={cn(splineSans.className, "text-2xl font-bold")}>
        {title}
      </h2>
      <p>{description}</p>
    </div>
  )
}
