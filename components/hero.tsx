import { Button } from "@/components/ui/button"
import { configs } from "@/lib/constants"
import { splineSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { CopyEmailButton } from "./copy-email-button"

export default function Hero() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-8 p-6">
      <div className="flex items-center justify-center rounded-full border p-4">
        <Image
          height={200}
          width={200}
          alt="launchbunch black logo"
          src={"/launchbunch-logo-black.svg"}
          className="size-12 dark:hidden"
        />
        <Image
          height={200}
          width={200}
          alt="launchbunch white logo"
          src={"/launchbunch-logo-white.svg"}
          className="hidden size-12 dark:block"
        />
      </div>
      <h1
        className={cn(
          splineSans.className,
          "max-w-sm text-center text-3xl font-bold"
        )}
      >
        Build a digital presence people trust.
      </h1>
      <p className="max-w-sm text-center">
        Marketing, design, and development that turn visitors into real
        customers. Based in Pokhara. Working with clients globally.
      </p>
      <div className="flex flex-col gap-4">
        <Link href={configs.whatsappLink} target="_blank">
          <Button size={"lg"} className="rounded-full px-8 py-8">
            Book a discovery call
          </Button>
        </Link>
        {/*<svg
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
            color: "white",
          }}
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <use href="#svg-1484606274_801"></use>
        </svg>*/}
      </div>
      <CopyEmailButton />
    </div>
  )
}
