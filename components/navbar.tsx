"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import { Phone, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Booking", href: "/booking" },
    { name: "Tours", href: "/tours" },
  ]

  return (
    <header className=" top-0 z-50 w-full bg-white pb-4 shadow-sm max-sm:hidden">

      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-6">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:ayatainternational@gmail.com" className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2" />
              <span>ayatainternational@gmail.com</span>
            </a>
      
              
              <a href="tel:+251911043323" className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+251 91 104 3323</span>
              </a>
  


          </div>

          <div className="flex gap-3">
              <a href="https://wa.me/message/QTIDP6LCATODO1" aria-label="Facebook" className="text-white">
                <FaWhatsapp className="h-5 w-5" />
              </a>
        

    
              <a href="https://facebook.com" aria-label="Facebook" className="text-white">
                <CiFacebook  className="h-5 w-5" />
              </a>


            <a href="https://t.me/ayatatravel" aria-label="Facebook" className="text-white">
              <FaTelegram  className="h-5 w-5" />
              </a>
            </div>

        </div>
      </div>

{/* End of banner*/}

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

