import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"
import { splineSans } from "@/lib/fonts"

export default function Testimonials() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-5xl items-center py-24">
      <div>
        <Card
          className="relative min-h-[50vh] max-w-5xl rounded-2xl p-4 md:min-w-5xl md:p-12"
          // style={{
          //   background:
          //     "url(https://images.unsplash.com/photo-1568607689150-17e625c1586e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          // }}
          // style={{
          //   // background: "url(/devops-and-infrastructure.png)",
          //   backgroundAttachment: "cover",
          // }}
        >
          {/*<div className="min-h-50vh absolute top-0 left-0 bg-black" />*/}
          <Badge className="bg-transparent p-0 text-green-500 uppercase">
            CUSTOMER STORY
          </Badge>
          <h3
            className={cn("max-w-2xl text-2xl font-bold", splineSans.className)}
          >
            How we helped a leading IVF clinic grow patient trust and increase
            bookings
          </h3>
          <CardDescription className="max-w-2xl text-base font-semibold text-foreground">
            When a rapidly expanding IVF clinic approached us, they were facing
            a common challenge in the healthcare space—building trust online
            while managing a growing number of patient inquiries. Their existing
            website lacked clarity, their services were difficult to navigate,
            and potential patients often dropped off before taking the next
            step. In a field as sensitive as fertility treatment, they needed a
            digital experience that felt both professional and reassuring. We
            stepped in to redesign their entire digital presence—from user
            experience to content structure—focusing on clarity, empathy, and
            accessibility. The goal was simple: make it easier for patients to
            understand treatments, trust the process, and confidently book
            consultations. We also streamlined their inquiry system, making it
            easier for patients to reach out while reducing manual workload for
            their team.
          </CardDescription>
          <CardContent className="flex gap-8 px-0 py-8">
            <div className="text-base">
              <dt className="text-3xl">3x growth</dt>
              <dd className="max-w-46 text-sm text-muted-foreground">
                in monthly patient inquiries
              </dd>
            </div>
            <div className="max-w-sm text-base">
              <dt className="text-3xl">40% reduction</dt>
              <dd className="max-w-46 text-sm text-muted-foreground">
                in drop-off rate across key pages
              </dd>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center gap-12 py-12"></div>
      </div>
    </div>
  )
}
