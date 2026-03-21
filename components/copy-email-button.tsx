"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false)

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <code
      id="email"
      onClick={() => copyToClipboard("info@launchbunch.com")}
      className={cn(
        "cursor-pointer hover:underline",
        copied ? "text-green-600" : "dark:text-white"
      )}
    >
      {copied ? "📋 Copied to clipboard!" : "info@launchbunch.com"}
    </code>
    // <p id="email"
    //   className={copied ? "text-green-500" : ""}
    // >
    //   {copied ? "Copied to clipboard!" : "your@email.com"}
    // </p>
  )
}
