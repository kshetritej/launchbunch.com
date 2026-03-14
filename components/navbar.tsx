import { Button } from "@base-ui/react"
import Logo from "./logo"

export default function Navbar() {
  const navigationData = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Products",
      href: "#",
    },
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Contacts",
      href: "#",
    },
  ]

  return (
    <div className="container mx-auto flex justify-between p-4">
      <Logo />
      <div className="flex gap-4">
        {navigationData.map((item, index) => (
          <a key={index} href={item.href}>
            {item.title}
          </a>
        ))}
      </div>
      <Button>Contact Now</Button>
    </div>
  )
}
