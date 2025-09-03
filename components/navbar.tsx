"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceLinks = [
    { title: "Training", href: "/services/training" },
    { title: "Custom Solutions", href: "/services/custom-solutions" },
    { title: "Enterprise Software", href: "/services/enterprise" },
    { title: "Other Services", href: "/services/other" },
  ];

  const navLinkClass = (href: string) =>
    `text-base font-medium transition-colors duration-300 ${
      pathname === href ? "text-black" : "text-gray-600 hover:text-black"
    }`;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-gray-50 to-gray-50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8 w-full justify-between">
          {/* Left Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Nomad.png"
                alt="Nomad AI Logo"
                width={200}
                height={200}
              />
            </Link>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 ${
                  pathname.startsWith("/services")
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                } font-medium transition-colors duration-300`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded shadow-md border border-gray-200">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setIsServicesOpen(false)}
                      className={`block px-4 py-2 text-base transition-colors duration-200 ${
                        pathname === s.href
                          ? "bg-black/10 text-black"
                          : "text-gray-600 hover:text-black hover:bg-black/5"
                      }`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/testimonials"
              className={navLinkClass("/testimonials")}
            >
              Testimonials
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </div>

          {/* Logo */}

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-2 ml-auto">
            <Link href="/book-consultation">
              <Button className="px-6 py-2 text-lg bg-black text-white hover:bg-gray-800 transition">
                Book Consultation
              </Button>
            </Link>
            <Link
              href="https://app.nomadai.ie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="px-6 py-2 text-lg border-black text-black hover:bg-gray-100 transition"
              >
                Client Portal
              </Button>
            </Link>
          </div>

          {/* Mobile Logo in Top Bar */}
          <div className="md:hidden">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/Nomad.png"
                alt="Nomad AI Logo"
                width={120}
                height={120}
                className="block"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              className="p-2 focus:outline-none"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transform transition-transform duration-300 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-lg" />
        <div className="relative h-full flex flex-col items-center justify-center space-y-6 p-6 w-full">
          {/* Mobile Logo */}
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="mb-8"
          >
            <Image
              src="/Nomad.png"
              alt="Nomad AI Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </Link>
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="text-3xl font-medium text-black w-full text-center"
          >
            Home
          </Link>
          <div className="w-full">
            <button
              onClick={() => setIsServicesOpen((o) => !o)}
              className="flex items-center justify-center w-full text-2xl font-medium text-black mb-2"
            >
              Services <ChevronDown className="w-5 h-5 ml-1" />
            </button>
            {isServicesOpen && (
              <div className="flex flex-col space-y-2 mb-4 w-full">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-xl text-gray-600 hover:text-black transition w-full block text-center"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/testimonials"
            onClick={() => setIsMobileOpen(false)}
            className="text-3xl font-medium text-gray-600 hover:text-black transition w-full text-center"
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileOpen(false)}
            className="text-3xl font-medium text-gray-600 hover:text-black transition w-full text-center"
          >
            About
          </Link>
          <Link
            href="/book-consultation"
            onClick={() => setIsMobileOpen(false)}
            className="w-full"
          >
            <Button className="w-full px-8 py-3 text-2xl bg-black text-white hover:bg-gray-800 transition">
              Book Consultation
            </Button>
          </Link>
          <Link
            href="https://app.nomadai.ie"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileOpen(false)}
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full px-8 py-3 text-2xl text-black border-black hover:bg-gray-100 transition"
            >
              Client Portal
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
