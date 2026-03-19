"use client"

import { HouseLineIcon } from "@phosphor-icons/react"
import { Button } from "../ui/button"
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const Cta = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <h2 className="max-w-xl text-center text-4xl leading-tight font-bold">
        Make Documentation <br /> your winning advantage
      </h2>
      <p className="text-md max-w-2xl text-center text-base">
        Join the leaders of tomorrow to future proof your documentation today.
      </p>
      <div className="flex items-center justify-center gap-4 p-8">
        <Button className={"rounded-full text-base"} size={"lg"}>
          Get started for free{" "}
        </Button>
        <Button
          variant={"outline"}
          size={"lg"}
          className={"rounded-full text-base"}
        >
          Get a demo
        </Button>
      </div>
      <div className="grid grid-cols-2 py-8">
        <div className="space-y-2 border-r p-12">
          <dt className="text-base/7 font-semibold">
            <div className="mb-4 w-fit rounded-md bg-green-900 p-2 text-foreground">
              <CurrencyDollarIcon className="size-6" />
            </div>
            Pricing on your terms
          </dt>
          <dd className="mt-2 text-base/7 text-muted-foreground">
            Pick the plan that works best for you.
          </dd>
          <Button
            variant={"link"}
            size={"lg"}
            className={"rounded-full px-0 text-base hover:text-green-600"}
          >
            Pricing details <ChevronRightIcon />
          </Button>
        </div>
        <div className="space-y-2 p-12">
          <dt className="text-base/7 font-semibold">
            <div className="mb-4 w-fit rounded-md bg-green-900 p-2 text-foreground">
              <HouseLineIcon className="size-6" />
            </div>
            Start building
          </dt>
          <dd className="mt-2 text-base/7 text-muted-foreground">
            Deploy your docs in minutes.
          </dd>
          <Button
            variant={"link"}
            size={"lg"}
            className={"rounded-full px-0 text-base hover:text-green-600"}
          >
            Get started <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cta
