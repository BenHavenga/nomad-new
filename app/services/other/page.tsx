"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  Code,
  Pencil,
  Server,
  LayoutGrid,
  MessageSquare,
  Image as ImageIcon,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function OtherServicesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col min-h-screen text-black pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden min-h-screen bg-white">
          <div className="container relative z-10 max-w-6xl mx-auto text-center -mt-32">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center mb-8 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <AnimatedSection animation="fade-up">
              <h1 className="mb-8 font-extrabold tracking-tight leading-tight">
                <span className="block text-black text-2xl md:text-3xl lg:text-4xl mb-8">
                  AI-Powered Services
                </span>
                <span className="block text-black text-5xl md:text-7xl lg:text-8xl">
                  <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">We'll Do It</span> For You
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-8 text-[22px] text-gray-700">
                Let us handle your projects with our AI-powered expertise. Get professional results at competitive rates, powered by cutting-edge AI technology.
              </p>
            </AnimatedSection>
          </div>

          {/* Animated Scroll Arrow */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-12 h-12 text-black opacity-70 animate-bounce" />
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-24 overflow-hidden bg-white">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Web Development */}
              <AnimatedSection animation="slide-in-left">
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-white border border-gray-200 rounded-xl h-full shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-pink-400/20 to-purple-500/20 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-pink-600" />
                      </div>
                      <h2 className="text-2xl font-bold ml-4">
                        <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">Website Development</span>
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Professional websites built with AI-assisted development for faster delivery and lower costs.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start text-gray-600">
                        <Code className="w-5 h-5 mr-2 mt-1 text-pink-600" />
                        Modern, responsive designs
                      </li>
                      <li className="flex items-start text-gray-600">
                        <LayoutGrid className="w-5 h-5 mr-2 mt-1 text-pink-600" />
                        Custom functionality and features
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Server className="w-5 h-5 mr-2 mt-1 text-pink-600" />
                        Optimized performance and SEO
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Starting from €800</span>
                      <Link href="/book-consultation">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 rounded-lg">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content Creation */}
              <AnimatedSection animation="slide-in-right">
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-white border border-gray-200 rounded-xl h-full shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400/20 to-pink-500/20 flex items-center justify-center">
                        <Pencil className="w-6 h-6 text-purple-600" />
                      </div>
                      <h2 className="text-2xl font-bold ml-4">
                        <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">Content Creation</span>
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      High-quality content creation powered by AI, reviewed and refined by our expert team.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start text-gray-600">
                        <MessageSquare className="w-5 h-5 mr-2 mt-1 text-purple-600" />
                        Social media content
                      </li>
                      <li className="flex items-start text-gray-600">
                        <ImageIcon className="w-5 h-5 mr-2 mt-1 text-purple-600" />
                        Blog posts and articles
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Globe className="w-5 h-5 mr-2 mt-1 text-purple-600" />
                        Video generation (Veo3)
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Starting from €300</span>
                      <Link href="/book-consultation">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 rounded-lg">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* IT Infrastructure */}
              <AnimatedSection animation="slide-in-left" delay={200}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-white border border-gray-200 rounded-xl h-full shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-500/20 flex items-center justify-center">
                        <Server className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold ml-4">
                        <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">IT Infrastructure</span>
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Modern IT solutions built and managed with AI-powered tools for efficiency and reliability.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start text-gray-600">
                        <Server className="w-5 h-5 mr-2 mt-1 text-blue-600" />
                        Cloud infrastructure setup
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Code className="w-5 h-5 mr-2 mt-1 text-blue-600" />
                        Automation solutions
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Globe className="w-5 h-5 mr-2 mt-1 text-blue-600" />
                        System integration
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Custom pricing</span>
                      <Link href="/book-consultation">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 rounded-lg">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Why Choose Us */}
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-white border border-gray-200 rounded-xl h-full shadow-sm hover:shadow-md transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-6 text-black">Why Choose Our Services?</h2>
                    <ul className="space-y-6">
                      <li>
                        <h3 className="text-xl font-semibold mb-2 text-black">Cost-Effective</h3>
                        <p className="text-gray-600">
                          AI-powered efficiency means lower costs without compromising quality.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold mb-2 text-black">Faster Delivery</h3>
                        <p className="text-gray-600">
                          AI acceleration helps us complete projects in record time.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold mb-2 text-black">Expert Review</h3>
                        <p className="text-gray-600">
                          Every deliverable is reviewed by our experienced team.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-white">
          <div className="container max-w-6xl px-4 mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold mb-6 text-black">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a consultation to discuss your project needs and learn how our AI-powered services can help you achieve your goals faster and more efficiently.
              </p>
              <Link href="/book-consultation">
                <Button className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 rounded-xl">
                  Book Free Consultation
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 