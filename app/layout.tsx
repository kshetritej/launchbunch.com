import type { Metadata } from "next"
import {
  Geist,
  Bricolage_Grotesque,
  JetBrains_Mono,
  Inter,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import MyNavigationMenu from "@/components/lbnavigationmenu"

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
})

export const metadata: Metadata = {
  title: "LaunchBunch Website",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        grotesque.variable,
        inter.className,
        "font-mono",
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
