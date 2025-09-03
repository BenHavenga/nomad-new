"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Globe,
  Code,
  Users,
  Lightbulb,
  Target,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen text-black pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-16">
          <div className="container relative z-10 max-w-6xl mx-auto text-center py-20">
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
                <span className="block text-black text-3xl md:text-4xl lg:text-5xl mb-8">
                  About Nomad AI
                </span>
                <span className="block text-5xl md:text-8xl lg:text-8xl bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">
                  Pioneering AI Solutions
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-8 text-[22px] text-black">
                Born from the intersection of academic excellence and
                entrepreneurial spirit, we're on a mission to democratize AI
                technology and empower businesses to thrive in the digital age.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/10 rounded-lg blur-3xl" />
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/Skyline.jpg"
                      alt="Innovation in AI"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                </div>
              </AnimatedSection>

              <div className="space-y-8">
                <AnimatedSection animation="slide-in-right" delay={100}>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">Our Story</span>
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Founded by a team of young engineering students from Dublin,
                    Nomad AI emerged from a shared vision: to bridge the gap
                    between cutting-edge AI research and practical business
                    applications. Our journey began with a simple yet powerful
                    idea - make AI accessible and beneficial for businesses of
                    all sizes.
                  </p>
                  <p className="text-gray-700">
                    Today, we're proud to be at the forefront of AI innovation,
                    helping organizations navigate the complex landscape of
                    artificial intelligence with confidence and clarity.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto relative z-10">
            <AnimatedSection animation="slide-in-right" className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">Our Values</span>
                <span className="text-black"> & Culture</span>
              </h2>
              <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                The principles that guide our work and shape our innovation
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-700">
                      Constantly pushing boundaries and exploring new
                      possibilities in AI technology.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Value 2 */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-gray-700">
                      Committed to delivering the highest quality solutions and
                      service to our clients.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Value 3 */}
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                    <p className="text-gray-700">
                      Working together with clients to achieve their goals and
                      drive success.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Value 4 */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                      <BarChart className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Impact</h3>
                    <p className="text-gray-700">
                      Focused on creating meaningful, measurable results for our
                      clients.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <AnimatedSection animation="slide-in-left" delay={100}>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">Our Expertise</span>
                  </h2>
                  <p className="text-gray-700 mb-6">
                    With a deep understanding of both AI technology and business
                    needs, we bring a unique perspective to every project. Our
                    team combines academic excellence with practical experience
                    to deliver solutions that drive real business value.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
                      <span className="text-gray-700">AI Training & Education</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
                      <span className="text-gray-700">Custom AI Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
                      <span className="text-gray-700">Business Process Automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
                      <span className="text-gray-700">AI Strategy & Consulting</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/10 rounded-lg blur-3xl" />
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/Planning.jpg"
                      alt="AI Planning and Strategy"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto relative z-10">
            <AnimatedSection animation="fade-up" className="text-center">
              <div className="relative p-8 rounded-xl overflow-hidden border border-black/10 bg-gray-100/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6">
                    Ready to Start Your AI Journey?
                  </h2>
                  <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                    Let's work together to transform your business with the power
                    of artificial intelligence.
                  </p>
                  <Link href="/book-consultation">
                    <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      Get Started Today
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
