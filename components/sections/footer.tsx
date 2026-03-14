"use client"

import Logo from "../logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Solutions",
      items: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
    },
    {
      title: "Company",
      items: ["About", "Blog", "Jobs", "Press"],
    },
    {
      title: "Legal",
      items: ["Terms of service", "Privacy policy", "License"],
    },
  ]

  const socialIcons = [
    { label: "Facebook" },
    { label: "Instagram" },
    { label: "GitHub" },
    { label: "YouTube" },
  ]

  return (
    <footer className="-800 border-t border-slate-200 bg-background dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-4 md:gap-12 lg:gap-16">
          {/* Left Section - Branding */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            {/* Social Icons */}
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-slate-50">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <span className="cursor-default text-sm text-slate-400 transition-colors hover:text-slate-50">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p className="text-center text-sm text-slate-400 md:text-left">
            © {currentYear} Launchbunch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
