import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://sjc.microlink.io/POwgbci4q_vjCvZAIzUPJPs93ydQkG0BEYZs2bCSsdbsTmjn4GcRGoksOVFzlMKh8bScsdgVMBeVJ40a1PCetg.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-4xl font-bold">About Amoudi Business Group</h1>
          <p className="max-w-2xl text-lg">Your trusted partner for premium travel and business solutions</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2005, Amoudi Business Group has grown from a small travel agency to a leading provider of
                comprehensive travel and business solutions in the Middle East.
              </p>
              <p className="mb-4 text-gray-600">
                Our journey began with a simple mission: to provide exceptional travel services with a personal touch.
                Over the years, we have expanded our offerings to include corporate travel management, luxury vacation
                packages, and specialized business services.
              </p>
              <p className="mb-4 text-gray-600">
                Today, we serve thousands of clients across the globe, from individual travelers to multinational
                corporations, all while maintaining our commitment to excellence and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Our headquarters in Dubai serves as the hub for our operations, with satellite offices in key locations
                around the world to ensure seamless service delivery wherever our clients may be.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/placeholder.svg?height=400&width=600')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Our Values</h2>
            <p className="mx-auto max-w-2xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from the first interaction to the completion
                  of your journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Customer Focus</h3>
                <p className="text-gray-600">
                  Our clients are at the heart of everything we do. We listen, understand, and deliver solutions
                  tailored to your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Global Perspective</h3>
                <p className="text-gray-600">
                  With a global network and multicultural team, we bring a world of experience and insights to our
                  services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600">
                  We continuously evolve and innovate to stay ahead of industry trends and provide cutting-edge
                  solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Our Team</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Meet the dedicated professionals behind Amoudi Business Group
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Ahmed Amoudi",
                position: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "With over 20 years of experience in the travel industry, Ahmed founded Amoudi Business Group with a vision to transform the travel experience.",
              },
              {
                name: "Sarah Johnson",
                position: "Chief Operations Officer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Sarah oversees all operational aspects of the company, ensuring seamless service delivery and operational excellence.",
              },
              {
                name: "Mohammed Al-Farsi",
                position: "Head of Corporate Relations",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Mohammed manages our relationships with corporate clients, developing tailored solutions for their travel and business needs.",
              },
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="p-0">
                  <div className="aspect-square w-full overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                    <p className="mb-4 text-sm text-primary">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Experience Our Services?</h2>
            <p className="mb-8 text-lg">
              Whether you're planning a business trip, a family vacation, or need specialized business solutions, we're
              here to help.
            </p>
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

