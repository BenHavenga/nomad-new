"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const navigation = {
  services: [
    { name: "AI Training Programs", href: "/services/training" },
    { name: "Custom AI Solutions", href: "/services/custom-solutions" },
    { name: "Enterprise Software", href: "/services/enterprise" },
    { name: "Other Services", href: "/services/other" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Website Portfolio", href: "/portfolio" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-50 border-t border-black/10 bg-white/25 backdrop-blur-2xl mt-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/15 to-white/20 pointer-events-none" />
      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Nomad AI"
                width={80}
                height={30}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-600 max-w-xs text-sm">
              Empowering businesses with cutting-edge AI solutions and expert
              training programs.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">
              Services
            </h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">
              Company
            </h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Nomad AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
