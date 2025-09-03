"use client";

import Link from "next/link";
import {
  CheckCircle,
  Brain,
  FolderOpen,
  Search,
  Briefcase,
  Shield,
  FileText,
  Database,
  Zap,
  Users,
  Lock,
  ArrowRight,
  ChevronDown,
  BarChart3,
  FileSpreadsheet,
  Calculator,
  ClipboardList,
  Settings,
  Globe,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import { ScrollingLogos } from "@/components/scrolling-logos";

export default function EnterprisePage() {
  return (
    <main className="flex flex-col min-h-screen text-black pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-16">
          <div className="container relative z-10 max-w-6xl mx-auto text-center py-24">
            <AnimatedSection animation="fade-up">
              <h1 className="mb-10 font-extrabold tracking-tight leading-tight">
                <span className="block text-black text-3xl md:text-4xl lg:text-5xl mb-8">
                  Enterprise Solutions
                </span>
                <span className="block text-5xl md:text-8xl lg:text-8xl bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  Professional Services Automation
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-3xl mx-auto mb-10 text-[22px] text-black">
                Next-generation secure, GDPR-compliant software that streamlines complex workflows for accounting, law, insurance, and financial services.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="animate-bounce mt-16">
                <ChevronDown className="w-8 h-8 mx-auto text-black opacity-50" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Automation Features */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="mb-20">
              <AnimatedSection animation="slide-in-right" className="text-center mb-12" delay={100}>
                <h3 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                    Key Automation
                  </span>
                  <span className="text-black"> Features</span>
                </h3>
                <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                  Powerful tools designed specifically for professional services firms
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-2xl font-bold text-black">Get Clear, Actionable Answers</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Instantly resolve complex queries with real-time search against trusted, domain-specific sources.
                    </p>
                    <p className="text-gray-600">
                      Identify tax-saving opportunities, legal risks, or compliance gaps quickly.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Feature 2 */}
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Brain className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-2xl font-bold text-black">AI You Can Rely On</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Hallucination-free responses using agentic Retrieval-Augmented Generation (RAG).
                    </p>
                    <p className="text-gray-600">
                      Expert-level accuracy sourced from Revenue Materials, Statute Books, Regulatory Guidelines, and Case Law. Citations for every answer to ensure trust.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Feature 3 */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <FolderOpen className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold text-black">Unified Case and Client Management</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Centrally track client queries, matters, and answers.
                    </p>
                    <p className="text-gray-600">
                      Automatically record history to enrich client profiles. Generate rich, context-aware responses tailored to individual client needs. Easy copy-paste into reports, emails, and case files.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Feature 4 */}
                <AnimatedSection animation="fade-up" delay={500}>
                  <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Search className="w-8 h-8 text-indigo-500 mr-3" />
                      <h3 className="text-2xl font-bold text-black">Full Transparency for Trust and Compliance</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Breaks down complex issues into clear, step-by-step logic.
                    </p>
                    <p className="text-gray-600">
                      Uses structured reasoning (ReAct) for accuracy. References included for all answers.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Feature 5 */}
                <AnimatedSection animation="fade-up" delay={600}>
                  <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-8 h-8 text-orange-500 mr-3" />
                      <h3 className="text-2xl font-bold text-black">Designed for Professional Services</h3>
                    </div>
                    <div className="text-gray-600 space-y-2 flex-grow">
                      <p><strong>Accounting:</strong> Tax queries, VAT returns, bank reconciliation automation.</p>
                      <p><strong>Law:</strong> Case management, document analysis, statute referencing.</p>
                      <p><strong>Insurance:</strong> Claims processing, regulatory checks, policy generation.</p>
                      <p><strong>Finance:</strong> KYC/AML workflows, reporting, client onboarding.</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Feature 6 */}
                <AnimatedSection animation="fade-up" delay={700}>
                  <div className="p-8 bg-gray-100/50 border border-black/10 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-black">Secure, Private, GDPR-Compliant</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                      AWS global cloud infrastructure.
                    </p>
                    <p className="text-gray-600">
                      Data encryption for all client communications. Secure sign-up, sign-in, and access control via Amazon Cognito.
                    </p>
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

        {/* Automation Modules */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-7xl px-4 mx-auto">
            <AnimatedSection animation="slide-in-right" className="text-center mb-16" delay={100}>
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  INPUT / OUTPUT
                </span>
                <span className="text-black"> AT A GLANCE</span>
              </h3>
              <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
                Powerful automation modules that transform your workflow
              </p>
            </AnimatedSection>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-100/50 border border-black/10 rounded-xl overflow-hidden">
                <thead className="bg-gray-200/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold text-black border-b border-black/10">Module</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-black border-b border-black/10">Input</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-black border-b border-black/10">Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="px-6 py-4 font-semibold text-black">Client Data Organiser</td>
                    <td className="px-6 py-4 text-gray-600">KYC docs (PDF, scans)</td>
                    <td className="px-6 py-4 text-gray-600">Tagged archive + extracted fields + Compliance Pack</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="px-6 py-4 font-semibold text-black">Invoice Import Tool</td>
                    <td className="px-6 py-4 text-gray-600">Invoice folders + nominal codes</td>
                    <td className="px-6 py-4 text-gray-600">Structured CSV/Excel for import</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="px-6 py-4 font-semibold text-black">VAT Return Generator</td>
                    <td className="px-6 py-4 text-gray-600">Structured sales/purchase CSV + template</td>
                    <td className="px-6 py-4 text-gray-600">Filled VAT Return Excel</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="px-6 py-4 font-semibold text-black">Bank Parser & Reconciliation</td>
                    <td className="px-6 py-4 text-gray-600">Bank statements + credit-debit lists</td>
                    <td className="px-6 py-4 text-gray-600">Parsed bank CSV + reconciliation report</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="px-6 py-4 font-semibold text-black">Case Document Analyzer</td>
                    <td className="px-6 py-4 text-gray-600">Contracts, pleadings, policy docs</td>
                    <td className="px-6 py-4 text-gray-600">Structured analysis + extracted key terms</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="px-6 py-4 font-semibold text-black">Claims Intake Parser</td>
                    <td className="px-6 py-4 text-gray-600">Claims forms, attachments</td>
                    <td className="px-6 py-4 text-gray-600">Structured claim data for CRM or processing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-black">Client Onboarding Checklist</td>
                    <td className="px-6 py-4 text-gray-600">KYC/AML requirements</td>
                    <td className="px-6 py-4 text-gray-600">Auto-generated compliance checklist</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 italic">
                ... and more time-saving tools to automate routine professional services workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Integration and Compatibility */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto">
            <AnimatedSection animation="slide-in-right" className="text-center mb-12" delay={100}>
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-pink-400/90 bg-clip-text text-transparent">
                  Integration
                </span>
                <span className="text-black"> and Compatibility</span>
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                    <Settings className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Easy Integration</h3>
                  <p className="text-gray-600">
                    Easily integrates with your existing accounting, legal, insurance, and financial systems.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                    <Cpu className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">API-Ready</h3>
                  <p className="text-gray-600">
                    API-ready for seamless workflow automation.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-pink-400/20">
                    <Globe className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Customisable</h3>
                  <p className="text-gray-600">
                    Customisable to your firm's unique needs.
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
                Ready to transform your professional services workflow?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how our enterprise solutions can streamline your operations and improve accuracy.
              </p>
              <Link href="/book-consultation">
                <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
                  Book Your Demo Today
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