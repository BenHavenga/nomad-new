"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code,
  Zap,
  Globe,
  BarChart,
  Users,
  BookOpen,
  ChevronRight,
  Shield,
  Bot,
  Building,
  Search,
  Settings,
  Lock,
  CheckCircle,
  DollarSign,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import Image from "next/image";
import Orb from "@/components/Orb";
import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";

// Declare global functions for TypeScript
declare global {
  interface Window {}
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax effects
  const heroParallax = -scrollY * 0.2;
  const heroOpacity = Math.max(1 - scrollY * 0.002, 0.3);

  return (
    <main className="flex flex-col min-h-screen text-black overflow-x-hidden">
      {/* Global Background */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-16 mt-0 min-h-[140vh] bg-white">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/ChatGPT Image Jul 6, 2025, 05_03_43 PM.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            {/* 10% darkness overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
            {/* Brightness fade overlay - from 100% brightness at top to 0% at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/100"></div>
          </div>

          <div className="container relative z-10 max-w-6xl mx-auto text-center py-12 mt-16">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-8 text-white flex flex-col items-center justify-center gap-4">
                <span className="text-3xl sm:text-5xl md:text-7xl">
                  HOME OF THE
                </span>
                <span className="text-5xl sm:text-6xl md:text-9xl bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  AI REVOLUTION
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                Transform your business with cutting edge AI solutions
              </p>
            </AnimatedSection>
          </div>

          {/* Animated Chevron Down */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <svg
              className="w-8 h-8 text-black opacity-70 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-black">
          <div className="container px-4 sm:px-6 lg:px-24 mx-auto relative z-10">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-5xl sm:text-7xl font-extrabold mb-4 text-white">
                  Ground Zero
                </h2>
                <p className="text-sm sm:text-base md:text-xl text-white">
                  These are our services to help business thrive in the digital
                  age.
                  <br />
                  From AI training to custom solutions and enterprise software.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Service 1 */}
              <AnimatedSection animation="slide-in-left" delay={100}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-4 sm:p-6 bg-gray-800/50 border border-white/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold ml-4 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                        AI Training
                      </h3>
                    </div>
                    <p className="mb-6 text-sm sm:text-base text-gray-300">
                      Comprehensive training programs to help your team master
                      modern AI tools and techniques.
                    </p>
                    <ul className="mb-8 space-y-2 flex-grow">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Increase Productivity
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Learn Prompt Engineering
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Ethics & Safe Usage Awareness
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Use AI Agents & Assistants
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Unlock Workflow Automation
                        </span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-gray-400">
                        Starting from €500
                      </span>
                      <Link href="/services/training">
                        <Button
                          variant="outline"
                          className="bg-white text-black border-0 hover:bg-gray-200 rounded-lg"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service 2 */}
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-4 sm:p-6 bg-gray-800/50 border border-white/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold ml-4 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                        Custom AI Solutions
                      </h3>
                    </div>
                    <p className="mb-6 text-sm sm:text-base text-gray-300">
                      Tailored AI solutions designed to address your specific
                      business challenges and requirements.
                    </p>
                    <ul className="mb-8 space-y-2 flex-grow">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Custom Workflow Automation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Highly Secure AI Deployment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Streamline Entire Departments
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          100% Productivity Increase (Minimum)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Quick Development & Rapid Implementation
                        </span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-gray-400">
                        Enterprise-ready solutions
                      </span>
                      <Link href="/services/custom-solutions">
                        <Button
                          variant="outline"
                          className="bg-white text-black border-0 hover:bg-gray-200 rounded-lg"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service 3 - Enterprise Ready Software */}
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-4 sm:p-6 bg-gray-800/50 border border-white/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold ml-4 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                        Enterprise Software
                      </h3>
                    </div>
                    <p className="mb-6 text-sm sm:text-base text-gray-300">
                      Tailor-made automations for time-intensive tasks with
                      intelligent thought, designed for regulated industries
                      requiring the highest security standards.
                    </p>
                    <ul className="mb-8 space-y-2 flex-grow">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Tailor-Made Automations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Intelligent Thought Processing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Seamless Integrations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          GDPR Compliant Security
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-white" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Specialized for Accounting, Insurance, Law & Finance
                        </span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-gray-400">
                        Industry-specific solutions
                      </span>
                      <Link href="/services/enterprise">
                        <Button
                          variant="outline"
                          className="bg-white text-black border-0 hover:bg-gray-200 rounded-lg"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* AI Brand Logos Scroller - now below Our Services and above EU Regulations */}
        <section className="relative py-16 overflow-hidden bg-black">
          <div className="relative w-full overflow-hidden">
            <div className="flex whitespace-nowrap">
              <div className="flex space-x-16 animate-scroll-logos">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={`logo-set-${i}`} className="flex space-x-16">
                    <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48 -mt-2">
                      <Image
                        src="/logos/Gemini.png"
                        alt="Gemini Logo"
                        width={200}
                        height={200}
                        className="object-contain w-full h-auto"
                        priority={false}
                      />
                    </div>
                    <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                      <Image
                        src="/logos/Dalle.png"
                        alt="Dalle Logo"
                        width={200}
                        height={200}
                        className="object-contain w-full h-auto"
                        priority={false}
                      />
                    </div>
                    <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48 -mt-2">
                      <Image
                        src="/logos/Midjourney.png"
                        alt="Midjourney Logo"
                        width={220}
                        height={220}
                        className="object-contain w-full h-auto"
                        priority={false}
                      />
                    </div>
                    <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                      <Image
                        src="/logos/ChatGpt.png"
                        alt="ChatGPT Logo"
                        width={200}
                        height={200}
                        className="object-contain w-full h-auto"
                        priority={false}
                      />
                    </div>
                    <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                      <Image
                        src="/logos/Zapier.png"
                        alt="Zapier Logo"
                        width={200}
                        height={200}
                        className="object-contain w-full h-auto"
                        priority={false}
                      />
                    </div>
                    <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                      <Image
                        src="/logos/Copilot.png"
                        alt="Copilot Logo"
                        width={200}
                        height={200}
                        className="object-contain w-full h-auto"
                        priority={false}
                      />
                    </div>
                  </div>
                ))}
                {/* One extra set to ensure seamless loop */}
                <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48 -mt-2">
                  <Image
                    src="/logos/Gemini.png"
                    alt="Gemini Logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                    priority={false}
                  />
                </div>
                <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                  <Image
                    src="/logos/Dalle.png"
                    alt="Dalle Logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                    priority={false}
                  />
                </div>
                <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48 -mt-2">
                  <Image
                    src="/logos/Midjourney.png"
                    alt="Midjourney Logo"
                    width={220}
                    height={220}
                    className="object-contain w-full h-auto"
                    priority={false}
                  />
                </div>
                <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                  <Image
                    src="/logos/ChatGpt.png"
                    alt="ChatGPT Logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                    priority={false}
                  />
                </div>
                <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                  <Image
                    src="/logos/Zapier.png"
                    alt="Zapier Logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                    priority={false}
                  />
                </div>
                <div className="flex items-center justify-center h-24 sm:h-36 md:h-48 w-24 sm:w-36 md:w-48">
                  <Image
                    src="/logos/Copilot.png"
                    alt="Copilot Logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EU AI Regulations Section */}
        <section className="relative pt-24 overflow-hidden bg-black">
          <div className="container max-w-7xl px-4 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Image */}
              <AnimatedSection animation="fade-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-200/20 rounded-full blur-3xl" />
                  <div className="relative max-w-[250px] sm:max-w-[350px] md:max-w-[500px] mx-auto">
                    <div className="aspect-square w-full rounded-full overflow-hidden border-2 border-black/10">
                      <Image
                        src="/EU.png"
                        alt="EU AI Regulations"
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right side - Content */}
              <div className="space-y-8">
                <AnimatedSection animation="fade-up" delay={100}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-white">Navigating</span>{" "}
                    <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                      EU AI Regulations
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base md:text-2xl mb-8 text-white">
                    From{" "}
                    <span className="text-white font-bold">
                      August 2nd, 2025
                    </span>{" "}
                    Businesses Need to Comply With the EU Artificial
                    Intelligence Act
                  </p>
                </AnimatedSection>

                {/* Feature 1 */}
                <AnimatedSection animation="slide-in-right" delay={200}>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-6 bg-gray-800/50 border border-white/10 rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">
                            Compliance Training
                          </h3>
                          <p className="text-sm sm:text-base text-white">
                            Comprehensive training on the requirements of the EU
                            AI Act and other relevant regulations to ensure your
                            AI systems are compliant.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Feature 2 */}
                <AnimatedSection animation="slide-in-right" delay={300}>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-6 bg-gray-800/50 border border-white/10 rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">
                            Risk Assessment
                          </h3>
                          <p className="text-sm sm:text-base text-white">
                            Identifying and mitigating potential legal and
                            ethical risks associated with your AI applications
                            under EU law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Feature 3 */}
                <AnimatedSection animation="slide-in-right" delay={400}>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-6 bg-gray-800/50 border border-white/10 rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">
                            Documentation & Governance
                          </h3>
                          <p className="text-sm sm:text-base text-white">
                            Assistance in developing the necessary documentation
                            and governance frameworks to demonstrate compliance
                            with EU AI regulations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Section - Gradient Background */}
        <section
          className="relative w-full h-[700px]"
          style={{
            background:
              "linear-gradient(180deg,rgba(0, 0, 0, 1) 9%, rgba(105, 105, 105, 1) 50%, rgba(255, 255, 255, 1) 100%)",
          }}
        />

        {/* Combined Why Choose & CTA Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="container max-w-7xl px-4 mx-auto relative z-10">
            {/* Section Title */}
            <AnimatedSection animation="fade-up" className="mb-20">
              <div className="text-center">
                <h2 className="text-6xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                    Why Choose Us
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join hundreds of businesses that have transformed their
                  operations with our proven AI solutions
                </p>
              </div>
            </AnimatedSection>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Features */}
              <div className="space-y-8">
                <AnimatedSection animation="fade-up">
                  <div className="bg-gradient-to-r from-pink-400/10 via-purple-500/10 to-pink-400/10 p-8 rounded-2xl border border-pink-200/20">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-black">
                      Proven Results Across Industries
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Our AI training programs are designed to help businesses
                      implement AI solutions effectively and efficiently, with
                      measurable results that drive real business value.
                    </p>
                  </div>
                </AnimatedSection>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <AnimatedSection animation="slide-in-left" delay={100}>
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-pink-400/20 to-purple-500/20 flex items-center justify-center">
                            <Zap className="w-7 h-7 text-pink-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-3 text-black">
                              Rapid Implementation
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                              Learn how to implement AI solutions up to 10x
                              faster with our proven methodologies and
                              frameworks.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Feature 2 */}
                  <AnimatedSection animation="slide-in-left" delay={200}>
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-purple-400/20 to-pink-500/20 flex items-center justify-center">
                            <Globe className="w-7 h-7 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-3 text-black">
                              Industry Expertise
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                              Our trainers have experience across multiple
                              industries, ensuring relevant AI applications for
                              your business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Feature 3 */}
                  <AnimatedSection animation="slide-in-left" delay={300}>
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-500/20 flex items-center justify-center">
                            <Code className="w-7 h-7 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-3 text-black">
                              Practical Training
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                              Hands-on workshops and real-world case studies
                              that your team can immediately apply to your
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              {/* Right Side – CTA */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-400/10 via-purple-500/10 to-pink-400/10 rounded-2xl p-1">
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    {/* Content */}
                    <div className="p-8 flex flex-col space-y-6">
                      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center md:text-left">
                        Ready to Transform Your Business with AI?
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center md:text-left">
                        Join the growing community of businesses that have
                        accelerated their growth and efficiency through our AI
                        training programs.
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-pink-50 rounded-xl text-center">
                          <div className="text-2xl font-bold text-pink-600">
                            100%
                          </div>
                          <div className="text-sm text-gray-600">
                            Productivity Increase
                          </div>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-xl text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            24/7
                          </div>
                          <div className="text-sm text-gray-600">
                            Support Available
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <div className="flex justify-center">
                        <Link href="/book-consultation">
                          <Button className="w-full sm:w-auto py-4 sm:py-6 px-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                            Schedule a Consultation
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Full-width Image */}
                    <div className="w-full">
                      <div className="relative">
                        <Image
                          src="/Assessment.jpg"
                          alt="AI Training Workshop"
                          width={1200}
                          height={600}
                          className="w-full h-auto object-cover rounded-b-2xl"
                          priority={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
