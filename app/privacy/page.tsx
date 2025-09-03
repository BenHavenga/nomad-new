"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";

export default function Privacy() {
  return (
    <main className="flex flex-col min-h-screen text-black pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="container relative z-10 px-4 mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center mb-8 text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  Privacy
                </span>
                <span className="text-black"> Policy</span>
              </h1>
              <p className="max-w-2xl mx-auto text-gray-600">
                Last updated: March 14, 2025
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto space-y-12 text-gray-700">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    At Nomad AI, we take your privacy seriously. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard
                    your information when you visit our website or use our
                    services.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Information We Collect
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We collect information that you provide directly to us,
                    including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Name and contact information</li>
                    <li>Company information</li>
                    <li>Communication preferences</li>
                    <li>Information about your business needs</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    How We Use Your Information
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about our services</li>
                    <li>
                      Send you marketing communications (with your consent)
                    </li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Information Sharing
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell or rent your personal information to third
                    parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Service providers who assist in our operations</li>
                    <li>Professional advisors</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={500}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Your Rights
                  </h2>
                  <p className="mb-4 text-gray-600">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={700}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Contact Us
                  </h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us at:
                  </p>
                  <div className="text-gray-600">
                    <p>Email: info@nomadai.ie</p>
                    <p>Address: 31 Clyde Road, Ballsbridge, Dublin, Ireland</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
