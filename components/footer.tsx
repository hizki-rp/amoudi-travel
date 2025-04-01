import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Amoudi Business Group</h3>
            <p className="mt-2 text-sm text-gray-600">Your trusted partner for travel and business solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-gray-600 hover:text-primary">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-sm text-gray-600 hover:text-primary">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-600">123 Business Avenue</li>
              <li className="text-sm text-gray-600">Dubai, UAE</li>
              <li className="text-sm text-gray-600">+971 4 123 4567</li>
              <li className="text-sm text-gray-600">ayatainternational@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Amoudi Business Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

