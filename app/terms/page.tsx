"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";

export default function Terms() {
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
                  Terms of
                </span>
                <span className="text-black"> Service</span>
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
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using Nomad AI's services, you agree to be
                    bound by these Terms of Service. If you disagree with any
                    part of the terms, you may not access our services.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Services
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Nomad AI provides AI training and implementation services,
                    including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>AI training programs</li>
                    <li>Implementation consulting</li>
                    <li>Technical support</li>
                    <li>Custom AI solutions</li>
                    <li>Enterprise software automation</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    User Responsibilities
                  </h2>
                  <p className="mb-4 text-gray-600">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Provide accurate information</li>
                    <li>Maintain the security of your account</li>
                    <li>Use our services in compliance with laws</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Intellectual Property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    All content, features, and functionality of our services are
                    owned by Nomad AI and are protected by international
                    copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={500}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Nomad AI shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages resulting from
                    your use of or inability to use our services.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Termination
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may terminate or suspend your access to our services
                    immediately, without prior notice or liability, for any
                    reason whatsoever, including breach of these Terms.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={700}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Changes to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify these terms at any time. We
                    will notify users of any material changes by posting the new
                    Terms on this page.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={800}>
                <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h2 className="mb-4 text-2xl font-bold text-black">
                    Contact Us
                  </h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms, please contact
                    us at:
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
