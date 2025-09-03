"use client";

import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Brain, Code, Lock, MessageSquare, Settings, Zap, ChevronDown, Shield, Bot, BarChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <main className="flex flex-col min-h-screen text-white pt-16">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-24 min-h-screen bg-black">
          <div className="container relative z-10 max-w-6xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="mb-10 font-extrabold tracking-tight leading-tight">
                <span className="block text-white text-3xl md:text-4xl lg:text-5xl mb-8">
                  AI-Powered Services
                </span>
                <span className="block text-5xl md:text-8xl lg:text-8xl bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  We'll Do It For You
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-10 text-[22px] text-white">
                Let us handle your projects with our AI-powered expertise. Get professional results at competitive rates, powered by cutting-edge AI technology.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="animate-bounce mt-16">
                <ChevronDown className="w-8 h-8 mx-auto text-white opacity-50" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-24 overflow-hidden bg-black">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Training Card */}
              <AnimatedSection animation="slide-in-left">
                <Link href="/services/training" className="block">
                  <div className="group relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl h-full">
                      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                        AI Training Programs
                      </h2>
                      <p className="text-gray-300 mb-6">
                        Comprehensive training programs to help your team master
                        modern AI tools and techniques.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">Prompt Engineering Mastery</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <Lock className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">Ethics & Safe Use Training</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <Settings className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">AI Workflow Optimization</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Starting from €500</span>
                        <Button className="text-lg px-8 py-6 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300">
                          Explore Training Programs
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Custom Solutions Card */}
              <AnimatedSection animation="slide-in-right">
                <Link href="/services/custom-solutions" className="block">
                  <div className="group relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl h-full">
                      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                        Custom AI Solutions
                      </h2>
                      <p className="text-gray-300 mb-6">
                        Tailored AI solutions designed to address your specific
                        business challenges and requirements.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <Code className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">Custom AI Development</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">Enterprise Security</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">AI Agent Development</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Custom pricing</span>
                        <Button className="text-lg px-8 py-6 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300">
                          Explore Custom Solutions
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Technical Training Card */}
              <AnimatedSection animation="slide-in-left">
                <Link href="/services/technical-ai-training" className="block">
                  <div className="group relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-8 bg-gray-800/50 border border-white/10 rounded-xl h-full">
                      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                        Technical AI Training
                      </h2>
                      <p className="text-gray-300 mb-6">
                        Deep technical training for developers and data scientists
                        on implementing AI models and solutions.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">Model Implementation</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <BarChart className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">Performance Optimization</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                            <Settings className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white">MLOps Best Practices</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Advanced pricing</span>
                        <Button className="text-lg px-8 py-6 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300">
                          Explore Technical Training
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-24 overflow-hidden bg-black">
          <div className="container max-w-6xl px-4 mx-auto text-center">
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="text-3xl font-bold mb-6 text-white">Not Sure Which to Choose?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a free consultation with our experts. We'll analyze your needs and recommend the best path forward.
              </p>
              <Link href="/book-consultation">
                <Button className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 transition-all duration-300">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
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
