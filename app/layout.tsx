import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappLive from "@/components/WhatsappLive";
import "./globals.css"

import { ReactLenis } from "@/utils/lenis";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Amoudi Business Group",
    template: "%s - Amoudi Business Group",
  },
  description: "Your trusted partner for travel and business solutions",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
           
            <main className=" relative overflow-hidden mx-auto">
              {children}
              <WhatsappLive />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      </ReactLenis>
    </html>
  )
}





