"use client";

import Link from "next/link";
import {
  Code,
  Shield,
  Bot,
  BookOpen,
  ChevronRight,
  ChevronDown,
  Brain,
  Zap,
  Users,
  FileText,
  BarChart,
  Mail,
  MessageSquare,
  Settings,
  Search,
  CheckCircle2,
  ArrowRight,
  Clock,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import Image from "next/image";
import { ScrollingLogos } from "@/components/scrolling-logos";

export default function TrainingPage() {
  return (
    <main className="flex flex-col min-h-screen text-black pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-24">
          <div className="container relative z-10 max-w-6xl mx-auto text-center py-24">
            <AnimatedSection animation="fade-up">
              <h1 className="mb-10 font-extrabold tracking-tight leading-tight">
                <span className="block text-black text-3xl md:text-4xl lg:text-5xl mb-8">
                  Hands-On AI Training
                </span>
                <span className="block text-5xl md:text-8xl lg:text-8xl bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  Master AI Tools
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-10 text-[22px] text-black">
                Comprehensive training solutions to help your team master modern
                AI tools and implement them effectively in your business.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="animate-bounce mt-16">
                <ChevronDown className="w-8 h-8 mx-auto text-black opacity-50" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Optimize Your Business Processes */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="mb-20">
              <AnimatedSection animation="slide-in-right" className="text-center mb-12 opacity-0" delay={100}>
                <h3 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                    Optimise Your Business
                  </span>
                  <span className="text-black"> Processes</span>
                </h3>
                <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                  Learn how to leverage AI across all aspects 
                  <br />
                  of your business operations
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <FileText className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Form Processing</h4>
                    <p className="text-sm text-gray-600">Automated form filling and data extraction</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <BarChart className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Data Analysis</h4>
                    <p className="text-sm text-gray-600">Intelligent data processing and insights</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Email Management</h4>
                    <p className="text-sm text-gray-600">Smart email composition and organization</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={500}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <FileText className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Summarization</h4>
                    <p className="text-sm text-gray-600">Quick document and content summarization</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={600}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Shield className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Safety & Ethics</h4>
                    <p className="text-sm text-gray-600">Secure and responsible AI usage</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={700}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Content Creation</h4>
                    <p className="text-sm text-gray-600">AI-powered content generation</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={800}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Settings className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Process Automation</h4>
                    <p className="text-sm text-gray-600">Streamline repetitive tasks</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={900}>
                  <div className="p-6 bg-gray-100/50 border border-black/10 rounded-xl text-center h-[200px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200/70">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                      <Brain className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Decision Support</h4>
                    <p className="text-sm text-gray-600">AI-assisted decision making</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Software Logos */}
        <section className="relative py-12 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="mb-20">
              <AnimatedSection animation="slide-in-left" className="text-center mb-12" delay={100}>
                <h3 className="text-4xl font-bold mb-6">
                  Compatible with Your
                  <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent"> Favourite Tools</span>
                </h3>
                <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                  We'll show you how to optimize your workflow 
                  <br />
                  with AI across all major business software
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <ScrollingLogos />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Standard and Bespoke Training */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <AnimatedSection animation="slide-in-right" delay={100}>
                <div className="relative transform transition-all duration-300 hover:scale-105">
                  <h3 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">Standard Training</span>
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    Our structured curriculum provides comprehensive AI training for teams of up to 12 people. Perfect for organizations looking to build a strong foundation in AI implementation.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Up to 12 participants per session</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Structured curriculum with hands-on exercises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Industry-specific case studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Post-training support and resources</span>
                    </li>
                  </ul>
                  <Link href="/book-consultation">
                    <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      Book Standard Training
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-left" delay={200}>
                <div className="relative transform transition-all duration-300 hover:scale-105">
                  <h3 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">Bespoke Training</span>
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    Customized training programs tailored to your specific business needs, workflows, and existing software stack. Ideal for larger teams or specialized requirements.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Customized curriculum for your business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Integration with your existing tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Scalable for teams of any size</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Ongoing consultation and support</span>
                    </li>
                  </ul>
                  <Link href="/book-consultation">
                    <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      Book Bespoke Training
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Training Process */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <AnimatedSection animation="slide-in-right" className="text-center mb-12" delay={100}>
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">Training Process</span>
              </h3>
              <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                Our proven methodology ensures your team gets the most out of AI training
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                    <Search className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-black">Assessment</h4>
                  <p className="text-gray-600">
                    We evaluate your team's current AI knowledge and identify specific areas for improvement.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                    <BookOpen className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-black">Training</h4>
                  <p className="text-gray-600">
                    Hands-on workshops with real-world examples and practical exercises tailored to your business.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-black">Implementation</h4>
                  <p className="text-gray-600">
                    Support and guidance as your team applies their new AI skills to real business challenges.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-4xl px-4 mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Ready to Transform Your Team with AI?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of businesses that have accelerated their growth through our AI training programs.
              </p>
              <Link href="/book-consultation">
                <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
                  Schedule Your Training
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
