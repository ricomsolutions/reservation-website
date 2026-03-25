import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservation", label: "Reservation" },
];

const otherLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/signup", label: "Sign Up" },
  { href: "/login", label: "Login" },
];

const galleryImages = [
  "/images/cocktail-topped-with-orange-slice.jpg",
  "/images/grilled-chicken-steak-vegetables-marble-background.jpg",
  "/images/pexels-thuyenvu-297756.jpg",
  "/images/pizza-and-coke.jpg",
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Rational</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Curabitur posuere felis in massa pulvinar, nec mollis nibh
              eleifend. Maecenas turpis mi. Vivamus pulvinar lobortis vehicula
              pellentesque.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a2e] text-white transition-colors hover:bg-primary"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a2e] text-white transition-colors hover:bg-primary"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a2e] text-white transition-colors hover:bg-primary"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Other Links</h3>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Instagram Gallery
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {galleryImages.map((src, i) => (
                <Link key={i} href="/gallery">
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    width={100}
                    height={100}
                    className="h-20 w-full rounded-md object-cover transition-opacity hover:opacity-80"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>203, Mother is Good, Behind Kojo Str, Maria, Dansoman.</p>
              <p>888-7010-7010</p>
              <p>+233 934-759-8561</p>
              <p>info@ricom.com</p>
              <p>services@ricom.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 py-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ricom Ghana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
