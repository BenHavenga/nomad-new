"use client";

import Link from "next/link";
import {
  Code,
  Shield,
  Bot,
  Zap,
  BarChart,
  Settings,
  Server,
  Database,
  ChevronDown,
  Brain,
  Lock,
  Cpu,
  Network,
  LineChart,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Search,
  Building2,
  FileKey,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import Image from "next/image";
import { ScrollingLogos } from "@/components/scrolling-logos";

export default function CustomSolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen text-black pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-16">
          <div className="container relative z-10 max-w-6xl mx-auto text-center py-24">
            <AnimatedSection animation="fade-up">
              <h1 className="mb-10 font-extrabold tracking-tight leading-tight">
                <span className="block text-black text-3xl md:text-4xl lg:text-5xl mb-8">
                  Custom AI Solutions
                </span>
                <span className="block text-5xl md:text-8xl lg:text-8xl bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  Built For You
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-10 text-[22px] text-black">
                Enterprise-grade AI solutions customized for your specific business needs,
                ensuring security, scalability, and seamless integration.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="animate-bounce mt-16">
                <ChevronDown className="w-8 h-8 mx-auto text-black opacity-50" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="mb-20">
              <AnimatedSection animation="slide-in-right" className="text-center mb-12" delay={100}>
                <h3 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                    Enterprise-Grade
                  </span>
                  <span className="text-black"> AI Solutions</span>
                </h3>
                <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                  Secure, scalable, and customized AI solutions
                  <br />
                  built for your specific business needs
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Lock className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Private Deployment</h4>
                    <p className="text-sm text-gray-600">Secure on-premise or cloud deployment</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Brain className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Custom Models</h4>
                    <p className="text-sm text-gray-600">Tailored AI models for your needs</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Database className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Data Control</h4>
                    <p className="text-sm text-gray-600">Full control over your data</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={500}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Shield className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Enterprise Security</h4>
                    <p className="text-sm text-gray-600">Industry-standard security</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* New Business Analysis Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <AnimatedSection animation="slide-in-right" className="text-center mb-12" delay={100}>
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  From Analysis
                </span>
                <span className="text-black"> to Implementation</span>
              </h3>
              <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                We analyze your business processes to identify opportunities for AI integration,
                from simple workflow enhancements to complete department transformations
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Analysis Process */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center">
                        <Search className="w-6 h-6 text-black" />
                      </div>
                      <h2 className="text-2xl font-bold ml-4">
                        <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">Business Analysis</span>
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-black"></div>
                        </div>
                        <p className="ml-3 text-gray-600">Comprehensive workflow analysis</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-black"></div>
                        </div>
                        <p className="ml-3 text-gray-600">Identify automation opportunities</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-black"></div>
                        </div>
                        <p className="ml-3 text-gray-600">ROI and impact assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Implementation Scale */}
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-black" />
                      </div>
                      <h2 className="text-2xl font-bold ml-4">
                        <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">Flexible Implementation</span>
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-black"></div>
                        </div>
                        <p className="ml-3 text-gray-600">Scalable from small to enterprise</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-black"></div>
                        </div>
                        <p className="ml-3 text-gray-600">Phased rollout approach</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-black"></div>
                        </div>
                        <p className="ml-3 text-gray-600">Continuous optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Software Logos */}
        <section className="relative py-12 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="mb-20">
              <AnimatedSection animation="slide-in-left" className="text-center mb-12" delay={100}>
                <h3 className="text-4xl font-bold mb-6">
                  Seamless Integration with
                  <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent"> Your Stack</span>
                </h3>
                <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                  Our solutions integrate with your existing tools and workflows
                  <br />
                  for maximum efficiency and minimal disruption
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <ScrollingLogos />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-4xl px-4 mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Ready to Build Your Custom AI Solution?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can create the perfect AI solution for your business needs.
              </p>
              <Link href="/book-consultation">
                <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
                  Start Your Project
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
