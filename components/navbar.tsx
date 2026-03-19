import Link from "next/link"
import Logo from "./logo"
import { Button } from "./ui/button"
import MyNavigationMenu from "./lbnavigationmenu"

export default function Navbar() {
  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <Logo />
      <MyNavigationMenu />
      <Link href="#contact">
        <Button>Contact Now</Button>
      </Link>
    </div>
  )
}
