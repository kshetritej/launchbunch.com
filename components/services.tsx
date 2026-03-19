import ServiceCard from "./cards/service-card"

const Services = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 space-y-1.5 py-12">
      <div className="space-y-1.5 text-center">
        {/*<Badge className="bg-transparent p-0 text-green-500 uppercase">
          LLMs.txt & MCP
        </Badge>*/}
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground lg:text-balance">
          Built for the intelligence age
        </p>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground">
          Integrate AI into every part of your docs lifecycle. Woven into how
          your knowledge is written, maintained, and understood by both users
          and LLMs.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-8">
          <ServiceCard />
          <ServiceCard />
        </div>
        <ServiceCard />
      </div>
    </div>
  )
}

export default Services
