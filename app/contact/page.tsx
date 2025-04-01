"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xkgjvqge")

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
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="max-w-2xl text-lg">Get in touch with our team for any inquiries or assistance</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-gray-600">
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {state.succeeded ? (
                <div className="rounded-md bg-green-50 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-xl font-medium text-green-800">Thank you for contacting us!</h3>
                  <p className="mt-2 text-green-700">
                    We've received your message and will get back to you shortly. Your inquiry is important to us.
                  </p>
                  <div className="mt-6">
                    <Button onClick={() => window.location.reload()} variant="outline">
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="How can we help you?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button type="submit" className="w-full" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
              <p className="mb-8 text-gray-600">
                You can also reach out to us using the contact information below or visit our office.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Our Address</h3>
                      <p className="text-gray-600">
                        123 Business Avenue, Downtown
                        <br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">
                        +971 4 123 4567
                        <br />
                        +971 50 987 6543
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">
                        ayatainternational@gmail.com
                        <br />
                        support@amoudibusiness.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 h-64 w-full overflow-hidden rounded-lg bg-gray-200">
                {/* Map would go here */}
                <div className="flex h-full items-center justify-center">
                  <p className="text-gray-600">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

