"use client";

import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronDown, Code, Terminal, Database, Brain } from "lucide-react";
import Link from "next/link";

export default function TechnicalAITrainingPage() {
  return (
    <main className="flex flex-col min-h-screen text-white pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-16">
          <div className="container relative z-10 max-w-6xl mx-auto text-center py-24">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center mb-8 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <AnimatedSection animation="fade-up">
              <h1 className="mb-10 font-extrabold tracking-tight leading-tight">
                <span className="block text-white text-3xl md:text-4xl lg:text-5xl mb-8">
                  Technical AI Training
                </span>
                <span className="block text-5xl md:text-8xl lg:text-8xl bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">
                  Master AI Development
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-10 text-[22px] text-white">
                Deep technical training for developers and data scientists on
                implementing AI models and solutions.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="animate-bounce mt-16">
                <ChevronDown className="w-8 h-8 mx-auto text-white opacity-50" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Topics */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <AnimatedSection animation="slide-in-right" className="text-center mb-12" delay={100}>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">
                  Key Topics
                </span>
              </h2>
              <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
                8-week bootcamp to equip your technical team with advanced AI development skills
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Model Selection</h3>
                    <p className="text-gray-300">
                      AI model selection and implementation strategies
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">System Integration</h3>
                    <p className="text-gray-300">
                      Integration techniques with existing systems
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Performance</h3>
                    <p className="text-gray-300">
                      Optimization and scaling best practices
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={500}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl h-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">MLOps</h3>
                    <p className="text-gray-300">
                      Best practices in MLOps and deployment
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto relative z-10">
            <AnimatedSection animation="fade-up">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">
                        Ready to Level Up Your
                        <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent"> AI Skills?</span>
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Join our 8-week bootcamp and master AI development
                      </p>
                    </div>
                    <Link href="/book-consultation">
                      <Button className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">
                        Book Your Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
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
