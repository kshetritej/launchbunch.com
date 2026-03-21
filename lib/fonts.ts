import {
  Inter,
  Zen_Maru_Gothic,
  Geist,
  Geist_Mono,
  DM_Sans,
  Spline_Sans,
} from "next/font/google"

const splineSans = Spline_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-spline",
})
const maru = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-maru",
})

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
})
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export { maru, inter, dmSans, fontMono, splineSans }
