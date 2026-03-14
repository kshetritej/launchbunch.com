import Link from "next/link"
import Logo from "./logo"
import { Button } from "./ui/button"

export default function Navbar() {
  const navigationData = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Services",
      href: "#services",
    },
  ]

  return (
    <div className="fixed top-0 z-99 w-[100vw] bg-secondary/60">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <div className="hidden gap-4 md:flex">
          {navigationData.map((item, index) => (
            <a key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <Link href="#contact">
          <Button className="rounded-3xl bg-indigo-600 p-6 hover:bg-indigo-500">
            Contact Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
