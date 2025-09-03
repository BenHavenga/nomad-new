"use client";

import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import { Quote, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  return (
    <main className="flex flex-col min-h-screen text-black pt-16">
      <div className="flex-grow">
        {/* Header Section */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-8">
          <div className="container relative z-10 max-w-6xl mx-auto text-center py-12">
            <div>
              <Link
                href="/"
                className="inline-flex items-center mb-8 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <AnimatedSection animation="fade-up">
              <h1 className="mb-8 font-extrabold tracking-tight leading-tight">
                <span className="block text-black text-2xl md:text-3xl lg:text-4xl mb-6">
                  What Our Clients Say
                </span>
                <span className="block text-black text-[2.5rem] md:text-[4rem] lg:text-[5.5rem]">
                  Proof <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">We Can Help</span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-12 text-xl text-black">
                Discover how businesses are transforming their operations and achieving remarkable results with our AI solutions and training programs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Setup.ie Testimonial */}
        <section className="relative py-8 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <AnimatedSection animation="slide-in-right">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="relative w-24 h-24">
                          <Image
                            src="/logo.png"
                            alt="Company Setup Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h2 className="text-5xl font-bold text-black">
                            Company Setup
                          </h2>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        Working with Nomad AI has been transformative for our business. They developed a custom AI solution that not only enhanced our security protocols but also streamlined our company registration process. The system they built helps us manage sensitive client data with absolute confidence, while automating complex documentation workflows. What impressed me most was their deep understanding of both AI technology and regulatory compliance - a rare combination that made them the perfect partner for our digital transformation.
                      </p>
                      <div>
                        <h3 className="text-xl font-bold text-black">Sandra Galvin</h3>
                        <p className="text-gray-600">CEO, Company Setup</p>
                      </div>
                    </div>
                    <div className="relative md:w-1/2">
                      <div className="h-full p-2 border border-black/10 rounded-lg">
                        <Image
                          src="/Screenshot 2025-06-09 at 17.34.16.png"
                          alt="Company Setup Project Screenshot"
                          width={800}
                          height={1200}
                          className="rounded-lg h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Crisp Chilli Testimonial */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <AnimatedSection animation="slide-in-left">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="relative w-24 h-24">
                          <Image
                            src="/Dark_Grey_Front_Logo_Large_ba375955-667d-407e-817d-b8da05b24742.avif"
                            alt="Crisp Chilli Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h2 className="text-5xl font-bold text-black">
                            Crisp Chilli
                          </h2>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        The AI training from Nomad AI has revolutionized how we approach product design and marketing. Their hands-on workshops helped our team understand how to effectively use AI tools for market research and creative development. We're now able to analyze trends more accurately and respond to market changes faster than ever before. The practical nature of their training meant we could implement what we learned immediately, leading to more innovative product designs and more targeted marketing campaigns.
                      </p>
                      <div>
                        <h3 className="text-xl font-bold text-black">Ben Havenga</h3>
                        <p className="text-gray-600">Operations Director, Crisp Chilli</p>
                      </div>
                    </div>
                    <div className="relative md:w-1/2">
                      <div className="h-full p-2 border border-black/10 rounded-lg">
                        <Image
                          src="/Screenshot 2025-06-09 at 17.19.00.png"
                          alt="Crisp Chilli Project Screenshot"
                          width={800}
                          height={1200}
                          className="rounded-lg h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 