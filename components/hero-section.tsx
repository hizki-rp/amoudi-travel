import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  imageUrl: string
  buttonText?: string
  buttonLink?: string
}

export default function HeroSection({ title, subtitle, imageUrl, buttonText, buttonLink }: HeroSectionProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mb-8 max-w-2xl text-lg sm:text-xl">{subtitle}</p>
        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

