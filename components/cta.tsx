import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { configs } from "@/lib/constants"

export default function Cta() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto flex max-w-2xl gap-4 rounded-2xl bg-gray-200/20 p-8 dark:bg-white/5">
        <div className="hidden rounded-sm bg-white p-2 md:block">
          <Image
            src={"/aashish-khadka-seo-expert.jpg"}
            alt="profiel"
            height={400}
            width={200}
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" /> Online
          </div>
          <div className="text-2xl">
            Ready to <span className="font-bold">grow your business</span>{" "}
            online?
            <p className="mt-2 text-lg">
              Let’s talk about your next digital project.
            </p>
          </div>
          <Link href={configs.whatsappLink} target="_blank">
            <Button className="w-fit rounded-full px-6 py-6">
              Start Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
