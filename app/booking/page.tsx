"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Plane, Hotel, Car } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

// Sample data for destinations
const popularDestinations = [
  "Dubai",
  "London",
  "New York",
  "Paris",
  "Tokyo",
  "Singapore",
  "Istanbul",
  "Bangkok",
  "Cairo",
  "Sydney",
]

export default function page() {
  const [state, handleSubmit] = useForm("mrbpyzgp") // Updated Formspree form ID
  const [bookingType, setBookingType] = useState("flight")
  const [tripType, setTripType] = useState("roundTrip")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [passengers, setPassengers] = useState("1")
  const [cabinClass, setCabinClass] = useState("economy")
  const [hotelCheckInDate, setHotelCheckInDate] = useState<Date>()
  const [hotelCheckOutDate, setHotelCheckOutDate] = useState<Date>()
  const [carPickupDate, setCarPickupDate] = useState<Date>()
  const [carDropoffDate, setCarDropoffDate] = useState<Date>()

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Add form type to form data
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    formData.append("bookingType", bookingType)
    
    // Submit to Formspree
    handleSubmit(e);
  }

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
          <h1 className="mb-4 text-4xl font-bold">Book Your Journey</h1>
          <p className="max-w-2xl text-lg">Find and book the perfect travel arrangements for your next trip</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="mx-auto max-w-4xl">
            <CardContent className="p-6">
              <Tabs defaultValue="flight" onValueChange={(value) => setBookingType(value)}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="flight" className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    <span>Flights</span>
                  </TabsTrigger>
                  <TabsTrigger value="hotel" className="flex items-center gap-2">
                    <Hotel className="h-4 w-4" />
                    <span>Hotels</span>
                  </TabsTrigger>
                  <TabsTrigger value="car" className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    <span>Car Rental</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="flight" className="mt-6">
                  {state.succeeded ? (
                    <div className="rounded-md bg-green-50 p-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-3 text-xl font-medium text-green-800">Booking Request Received!</h3>
                      <p className="mt-2 text-green-700">
                        Thank you for your booking request. We've received your flight details and our team will contact
                        you shortly to confirm your reservation.
                      </p>
                      <div className="mt-6">
                        <Button onClick={() => window.location.reload()} variant="outline">
                          Make another booking
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <input type="hidden" name="form-type" value="flight-booking" />

                      <RadioGroup
                        name="tripType"
                        defaultValue="roundTrip"
                        className="flex space-x-4"
                        onValueChange={(value) => setTripType(value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="roundTrip" id="roundTrip" />
                          <Label htmlFor="roundTrip">Round Trip</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="oneWay" id="oneWay" />
                          <Label htmlFor="oneWay">One Way</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="multiCity" id="multiCity" />
                          <Label htmlFor="multiCity">Multi-City</Label>
                        </div>
                      </RadioGroup>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="origin">From</Label>
                          <Select name="origin" onValueChange={setOrigin} required>
                            <SelectTrigger id="origin" className="w-full">
                              <SelectValue placeholder="Select origin" />
                            </SelectTrigger>
                            <SelectContent>
                              {popularDestinations.map((city) => (
                                <SelectItem key={city} value={city}>
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <ValidationError prefix="Origin" field="origin" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="destination">To</Label>
                          <Select name="destination" onValueChange={setDestination} required>
                            <SelectTrigger id="destination" className="w-full">
                              <SelectValue placeholder="Select destination" />
                            </SelectTrigger>
                            <SelectContent>
                              {popularDestinations.map((city) => (
                                <SelectItem key={city} value={city}>
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <ValidationError prefix="Destination" field="destination" errors={state.errors} />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="departure-date">Departure Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                type="button"
                                variant="outline"
                                className="w-full justify-start text-left font-normal"
                                id="departure-date"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {departureDate ? format(departureDate, "PPP") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={departureDate}
                                onSelect={(date) => {
                                  setDepartureDate(date)
                                  document
                                    .getElementById("departure-date-input")
                                    ?.setAttribute("value", date ? date.toISOString() : "")
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <input
                            type="hidden"
                            id="departure-date-input"
                            name="departureDate"
                            value={departureDate ? departureDate.toISOString() : ""}
                          />
                          <ValidationError prefix="Departure Date" field="departureDate" errors={state.errors} />
                        </div>

                        {tripType === "roundTrip" && (
                          <div>
                            <Label htmlFor="return-date">Return Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal"
                                  id="return-date"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {returnDate ? format(returnDate, "PPP") : "Select date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={returnDate}
                                  onSelect={(date) => {
                                    setReturnDate(date)
                                    document
                                      .getElementById("return-date-input")
                                      ?.setAttribute("value", date ? date.toISOString() : "")
                                  }}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <input
                              type="hidden"
                              id="return-date-input"
                              name="returnDate"
                              value={returnDate ? returnDate.toISOString() : ""}
                            />
                            <ValidationError prefix="Return Date" field="returnDate" errors={state.errors} />
                          </div>
                        )}
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="passengers">Passengers</Label>
                          <Select name="passengers" defaultValue="1" onValueChange={setPassengers}>
                            <SelectTrigger id="passengers" className="w-full">
                              <SelectValue placeholder="Select number of passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} {num === 1 ? "Passenger" : "Passengers"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <ValidationError prefix="Passengers" field="passengers" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="cabin-class">Cabin Class</Label>
                          <Select name="cabinClass" defaultValue="economy" onValueChange={setCabinClass}>
                            <SelectTrigger id="cabin-class" className="w-full">
                              <SelectValue placeholder="Select cabin class" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="economy">Economy</SelectItem>
                              <SelectItem value="premium-economy">Premium Economy</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="first">First Class</SelectItem>
                            </SelectContent>
                          </Select>
                          <ValidationError prefix="Cabin Class" field="cabinClass" errors={state.errors} />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="contact-email">Contact Email</Label>
                          <Input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="contact-phone">Contact Phone</Label>
                          <Input id="contact-phone" name="phone" placeholder="+1 (555) 000-0000" />
                          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>
                        {state.submitting ? "Processing..." : "Book Now"}
                      </Button>
                    </form>
                  )}
                </TabsContent>

                <TabsContent value="hotel" className="mt-6">
                  {state.succeeded ? (
                    <div className="rounded-md bg-green-50 p-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-3 text-xl font-medium text-green-800">Hotel Booking Request Received!</h3>
                      <p className="mt-2 text-green-700">
                        Thank you for your hotel booking request. We'll contact you shortly to confirm your reservation.
                      </p>
                      <div className="mt-6">
                        <Button onClick={() => window.location.reload()} variant="outline">
                          Make another booking
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <input type="hidden" name="form-type" value="hotel-booking" />

                      <div>
                        <Label htmlFor="hotel-destination">Destination</Label>
                        <Select name="destination" required>
                          <SelectTrigger id="hotel-destination" className="w-full">
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            {popularDestinations.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <ValidationError prefix="Destination" field="destination" errors={state.errors} />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="check-in">Check-in Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal"
                                id="check-in"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {hotelCheckInDate ? format(hotelCheckInDate, "PPP") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={hotelCheckInDate}
                                onSelect={(date) => {
                                  setHotelCheckInDate(date)
                                  document
                                    .getElementById("check-in-date-input")
                                    ?.setAttribute("value", date ? date.toISOString() : "")
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <input
                            type="hidden"
                            id="check-in-date-input"
                            name="checkInDate"
                            value={hotelCheckInDate ? hotelCheckInDate.toISOString() : ""}
                          />
                          <ValidationError prefix="Check-in Date" field="checkInDate" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="check-out">Check-out Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal"
                                id="check-out"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {hotelCheckOutDate ? format(hotelCheckOutDate, "PPP") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={hotelCheckOutDate}
                                onSelect={(date) => {
                                  setHotelCheckOutDate(date)
                                  document
                                    .getElementById("check-out-date-input")
                                    ?.setAttribute("value", date ? date.toISOString() : "")
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <input
                            type="hidden"
                            id="check-out-date-input"
                            name="checkOutDate"
                            value={hotelCheckOutDate ? hotelCheckOutDate.toISOString() : ""}
                          />
                          <ValidationError prefix="Check-out Date" field="checkOutDate" errors={state.errors} />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="rooms">Rooms</Label>
                          <Select name="rooms" defaultValue="1">
                            <SelectTrigger id="rooms" className="w-full">
                              <SelectValue placeholder="Select number of rooms" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} {num === 1 ? "Room" : "Rooms"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <ValidationError prefix="Rooms" field="rooms" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="hotel-guests">Guests</Label>
                          <Select name="guests" defaultValue="2">
                            <SelectTrigger id="hotel-guests" className="w-full">
                              <SelectValue placeholder="Select number of guests" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} {num === 1 ? "Guest" : "Guests"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <ValidationError prefix="Guests" field="guests" errors={state.errors} />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="hotel-email">Contact Email</Label>
                          <Input
                            id="hotel-email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="hotel-phone">Contact Phone</Label>
                          <Input id="hotel-phone" name="phone" placeholder="+1 (555) 000-0000" />
                          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>
                        {state.submitting ? "Processing..." : "Book Now"}
                      </Button>
                    </form>
                  )}
                </TabsContent>

                <TabsContent value="car" className="mt-6">
                  {state.succeeded ? (
                    <div className="rounded-md bg-green-50 p-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-3 text-xl font-medium text-green-800">Car Rental Request Received!</h3>
                      <p className="mt-2 text-green-700">
                        Thank you for your car rental request. We'll contact you shortly to confirm your reservation.
                      </p>
                      <div className="mt-6">
                        <Button onClick={() => window.location.reload()} variant="outline">
                          Make another booking
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <input type="hidden" name="form-type" value="car-rental" />

                      <div>
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Select name="pickupLocation" required>
                          <SelectTrigger id="pickup-location" className="w-full">
                            <SelectValue placeholder="Select pickup location" />
                          </SelectTrigger>
                          <SelectContent>
                            {popularDestinations.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <ValidationError prefix="Pickup Location" field="pickupLocation" errors={state.errors} />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="pickup-date">Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal"
                                id="pickup-date"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {carPickupDate ? format(carPickupDate, "PPP") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={carPickupDate}
                                onSelect={(date) => {
                                  setCarPickupDate(date)
                                  document
                                    .getElementById("pickup-date-input")
                                    ?.setAttribute("value", date ? date.toISOString() : "")
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <input
                            type="hidden"
                            id="pickup-date-input"
                            name="pickupDate"
                            value={carPickupDate ? carPickupDate.toISOString() : ""}
                          />
                          <ValidationError prefix="Pickup Date" field="pickupDate" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="dropoff-date">Drop-off Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left font-normal"
                                id="dropoff-date"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {carDropoffDate ? format(carDropoffDate, "PPP") : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={carDropoffDate}
                                onSelect={(date) => {
                                  setCarDropoffDate(date)
                                  document
                                    .getElementById("dropoff-date-input")
                                    ?.setAttribute("value", date ? date.toISOString() : "")
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <input
                            type="hidden"
                            id="dropoff-date-input"
                            name="dropoffDate"
                            value={carDropoffDate ? carDropoffDate.toISOString() : ""}
                          />
                          <ValidationError prefix="Drop-off Date" field="dropoffDate" errors={state.errors} />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="car-type">Car Type</Label>
                        <Select name="carType" defaultValue="economy">
                          <SelectTrigger id="car-type" className="w-full">
                            <SelectValue placeholder="Select car type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">Economy</SelectItem>
                            <SelectItem value="compact">Compact</SelectItem>
                            <SelectItem value="midsize">Midsize</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                          </SelectContent>
                        </Select>
                        <ValidationError prefix="Car Type" field="carType" errors={state.errors} />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="car-email">Contact Email</Label>
                          <Input
                            id="car-email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div>
                          <Label htmlFor="car-phone">Contact Phone</Label>
                          <Input id="car-phone" name="phone" placeholder="+1 (555) 000-0000" />
                          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>
                        {state.submitting ? "Processing..." : "Book Now"}
                      </Button>
                    </form>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-16">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Book With Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Best Price Guarantee</h3>
                  <p className="text-gray-600">
                    We offer competitive rates and price match guarantees to ensure you get the best deal.
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
                  <h3 className="mb-2 text-xl font-semibold">Dedicated Support</h3>
                  <p className="text-gray-600">
                    Our customer service team is available 24/7 to assist you with any questions or issues.
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Secure Booking</h3>
                  <p className="text-gray-600">
                    Your personal and payment information is protected with advanced security measures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}