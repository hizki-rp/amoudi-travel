import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero Section with Airplane Image */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://sjc.microlink.io/POwgbci4q_vjCvZAIzUPJPs93ydQkG0BEYZs2bCSsdbsTmjn4GcRGoksOVFzlMKh8bScsdgVMBeVJ40a1PCetg.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-5xl font-bold">Travel with Confidence</h1>
          <p className="mb-8 max-w-2xl text-xl">Experience premium travel services with Amoudi Business Group</p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Book Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover the range of premium services offered by Amoudi Business Group
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Flight Bookings",
                description: "Book flights to destinations worldwide with premium airlines",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Hotel Reservations",
                description: "Find the perfect accommodation for your stay",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Tour Packages",
                description: "Explore exciting destinations with our curated tour packages",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((service, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <Link href="/booking">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Popular Destinations</h2>
            <p className="mx-auto max-w-2xl text-gray-600">Explore our most sought-after travel destinations</p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { name: "Dubai", image: "/placeholder.svg?height=300&width=300" },
              { name: "London", image: "/placeholder.svg?height=300&width=300" },
              { name: "New York", image: "/placeholder.svg?height=300&width=300" },
              { name: "Tokyo", image: "/placeholder.svg?height=300&width=300" },
            ].map((destination) => (
              <div key={destination.name} className="group relative overflow-hidden rounded-lg">
                <div
                  className="aspect-square bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/booking">
              <Button size="lg">Book Your Trip Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">Read testimonials from our satisfied customers</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                location: "London, UK",
                quote:
                  "The service was exceptional. My family and I had a wonderful vacation thanks to Amoudi Business Group.",
              },
              {
                name: "Mohammed Al-Farsi",
                location: "Dubai, UAE",
                quote:
                  "Professional, reliable, and attentive to every detail. I highly recommend their services for business travel.",
              },
              {
                name: "Jessica Chen",
                location: "New York, USA",
                quote:
                  "From booking to return, everything was perfectly arranged. Will definitely use their services again.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-4 text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Start Your Journey?</h2>
            <p className="mb-8 text-lg">Contact us today to plan your next trip or business travel arrangement.</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/booking">
                <Button size="lg" variant="secondary">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

