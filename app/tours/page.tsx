"use client"
import { useForm, ValidationError } from "@formspree/react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ToursPage() {
  const [state, handleSubmit] = useForm("xkgjvqge") // Using the same form ID as contact

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
          <h1 className="mb-4 text-4xl font-bold">Explore Our Tours</h1>
          <p className="max-w-2xl text-lg">Discover amazing destinations with our curated tour packages</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Featured Tours</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Explore our most popular tour packages designed to provide unforgettable experiences
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                  title: "Entoto",
                  image: "/entoto.jpg", // Place in public folder
                  description: "A historic mountain overlooking Addis Ababa, known for its panoramic views, eucalyptus forests, and ancient churches.",
              },
              {
                  title: "Al Nejashi",
                  image: "/al-nejashi.jpg", // Place in public folder
                  description: "An ancient Islamic site in Ethiopia, home to the Nejashi Mosque, one of the oldest mosques in Africa.",
              },
              {
                  title: "Chebera Churchura",
                  image: "/churchura.jpg", // Place in public folder
                  description: "A tranquil spot known for its scenic landscapes and rich biodiversity, perfect for nature enthusiasts.",
      
      
              },
              {
                  title: "Halala Kella",
                  image: "/halala.jpeg", // Place in public folder
                  description: "A serene location with cultural significance, featuring natural beauty and historical landmarks unique to the region.",
              },
              {
                  title: "Wenchi",
                  image: "/wenchi.jpg", // Place in public folder
                  description: "A serene location with cultural significance, featuring natural beauty and historical landmarks unique to the region.",
              },
              {
                  title: "Lalibela",
                  image: "/lalibela.jpg", // Place in public folder
                  description: "Known for its rock-hewn churches, a UNESCO World Heritage Site.",
              },
              {
                  title: "Simien Mountains",
                  image: "/semien.jpg", // Place in public folder
                  description:
                      "Dramatic peaks, unique wildlife like the Gelada baboon, and breathtaking views.",
              },
              {
                  title: "Lake Tana",
                  image: "/tana.jpg", // Place in public folder
                  description:
                      "Ethiopia's largest lake, home to ancient monasteries and stunning scenery.",
              },
              {
                  title: "Axum",
                  image: "/axum.jpg", // Place in public folder
                  description:
                      "An ancient city with obelisks, historical relics, and a rich cultural heritage.",
              },
              {
                  title: "Nech Sar National Park",
                  image: "/nechsar.jpg", // Place in public folder
                  description:
                      "A diverse ecosystem with wildlife and stunning views of lakes Abaya and Chamo.",
              },
              {
                  title: "Mago National Park",
                  image: "/mago.jpg", // Place in public folder
                  description:
                      "Home to the Mursi tribe and abundant wildlife, offering a unique cultural experience.",
              },
              {
                  title: "Danakil Depression",
                  image: "/danakil.jpg", // Place in public folder
                  description:
                      "One of the hottest places on Earth, featuring salt flats, sulfur springs, and volcanoes.",
              },
              {
                   title: "Omo Valley",
                  image: "/omo.jpg", // Place in public folder
                  description:
                      "A region rich in cultural diversity, home to many indigenous tribes.",
              },
              {
           
                    title : "Bale Sof Umer",
                  image: "/sofumer.jpeg", // Place in public folder
                  description:
                      "A magnificent limestone cave system with intricate formations, located in the Bale Mountains region.",
              },
              {
                  title: "Aba Jifar",
                  image: "/aba-jifar.jpg", // Place in public folder
                  description: "A historically significant site associated with King Aba Jifar, featuring remnants of ancient Gibe culture and heritage.",
              },
            ].map((tour, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">{tour.duration}</span>
                    <span className="text-lg font-bold text-primary">{tour.price}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{tour.title}</h3>
                  <p className="mb-4 text-gray-600">{tour.description}</p>
                  <Button className="w-full">Book This Tour</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Custom Tour Packages</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Looking for something specific? We can create a custom tour package tailored to your preferences.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
            <h3 className="mb-4 text-2xl font-semibold">Request a Custom Tour</h3>
            <p className="mb-6 text-gray-600">
              Fill out the form below with your requirements, and our team will get back to you with a personalized tour
              proposal.
            </p>

            {state.succeeded ? (
              <div className="rounded-md bg-green-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-medium text-green-800">Tour Request Received!</h3>
                <p className="mt-2 text-green-700">
                  Thank you for your custom tour request. Our team will review your requirements and get back to you
                  with a personalized proposal.
                </p>
                <div className="mt-6">
                  <Button onClick={() => window.location.reload()} variant="outline">
                    Submit another request
                  </Button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="form-type" value="custom-tour-request" />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="destination" className="mb-2 block text-sm font-medium">
                      Preferred Destination
                    </label>
                    <Input id="destination" name="destination" placeholder="e.g., Dubai, Abu Dhabi" required />
                  </div>
                  <div>
                    <label htmlFor="duration" className="mb-2 block text-sm font-medium">
                      Duration
                    </label>
                    <Input id="duration" name="duration" placeholder="e.g., 3 days, 1 week" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirements" className="mb-2 block text-sm font-medium">
                    Special Requirements
                  </label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="Please provide details about your tour preferences, interests, and any special requirements..."
                    rows={5}
                    required
                  />
                  <ValidationError prefix="Requirements" field="requirements" errors={state.errors} />
                </div>

                <Button type="submit" className="w-full" disabled={state.submitting}>
                  {state.submitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Why Choose Our Tours</h2>
              <p className="mb-6 text-gray-600">
                At Amoudi Business Group, we pride ourselves on delivering exceptional tour experiences that create
                lasting memories.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Expert local guides with in-depth knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Small group sizes for personalized attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Carefully curated experiences off the beaten path</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Luxury transportation with complimentary Wi-Fi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Flexible booking and cancellation policies</span>
                </li>
              </ul>
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
    </div>
  )
}

