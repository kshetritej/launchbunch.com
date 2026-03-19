import { Card, CardContent, CardDescription } from "./ui/card"
import { Badge } from "./ui/badge"

export default function Testimonials() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-5xl items-center">
      <div>
        <Card
          className="relative min-h-[50vh] w-5xl rounded-2xl p-4"
          style={{
            // background: "url(/devops-and-infrastructure.png)",
            backgroundAttachment: "cover",
          }}
        >
          <Badge className="bg-transparent p-0 text-green-500 uppercase">
            CUSTOMER STORY
          </Badge>
          <h3 className="max-w-2xl text-2xl font-bold">
            See how Anthropic accelerates AI development with Mintlify
          </h3>
          <CardDescription className="max-w-2xl text-base">
            When the team was launching their Claude Sonnet 3.5 model in 2024,
            they needed documentation that would scale with their rapidly
            expanding product. In particular, they needed a platform that would
            perform at scale for their growing user base, support customization
            for their unique brand, and help developers easily find what they
            need - all without adding more engineering overhead.
          </CardDescription>
          <CardContent className="flex gap-8 px-0 py-8">
            <div className="text-base">
              <dt className="text-3xl">2M+</dt>
              <dd className="max-w-46 text-sm text-muted-foreground">
                Monthly active developers
              </dd>
            </div>
            <div className="max-w-sm text-base">
              <dt className="text-3xl">3+</dt>
              <dd className="max-w-46 text-sm text-muted-foreground">
                Products served: Claude API, MCP, and Claude Code
              </dd>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center gap-12 py-12">
          <div className="text-3xl font-bold">LogoIpsum</div>
          <div className="text-3xl font-bold">Claude</div>
          <div className="text-3xl font-bold">LogoIpsum</div>
          <div className="text-3xl font-bold">LogoIpsum</div>
          <div className="text-3xl font-bold">LogoIpsum</div>
        </div>
      </div>
    </div>
  )
}
