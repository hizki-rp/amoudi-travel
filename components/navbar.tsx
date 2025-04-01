"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Booking", href: "/booking" },
    { name: "Tours", href: "/tours" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">Logo</span>
        </Link>
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-gray-600",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

