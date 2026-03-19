import Image from "next/image"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card"

const ServiceCard = () => {
  return (
    <Card className="h-md min-w-lg rounded-2xl">
      <CardHeader className="space-y-1.5">
        <Badge className="bg-transparent p-0 text-green-500 uppercase">
          LLMs.txt & MCP
        </Badge>
        <h3 className="text-xl font-bold">Built for both people and AI</h3>
        <CardDescription className="text-base">
          Ensure your product shows up in the AI workflows users already rely
          on. We support llms.txt, MCP, and whatever comes next.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-82 overflow-hidden rounded-2xl">
        <Image
          src={"/seo-and-web-vitals.png"}
          width={200}
          height={200}
          alt="Seo and Web Vitals"
          className="w-full rounded-2xl object-cover"
        />
      </CardContent>
    </Card>
  )
}

export default ServiceCard
