"use client";

import Link from "next/link";
import { ArrowLeft, Book, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/footer";

export default function Resources() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-white pt-16">
      <div className="flex-grow">
        {/* Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="container relative z-10 px-4 mx-auto text-center">
            <div>
              <Link
                href="/"
                className="inline-flex items-center mb-8 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Resources</h1>
            <p className="max-w-2xl mx-auto text-gray-400">
              Explore our collection of guides, articles, and videos to help you
              understand and implement AI solutions
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="relative py-16">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Guides */}
              <Card className="border-white/10 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white/10">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Guides</CardTitle>
                  <CardDescription className="text-gray-400">
                    Comprehensive guides to help you get started with AI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      Getting Started with AI
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      AI Implementation Best Practices
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      AI Ethics and Compliance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Articles */}
              <Card className="border-white/10 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white/10">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Articles</CardTitle>
                  <CardDescription className="text-gray-400">
                    In-depth articles about AI trends and applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      AI in Business
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      Future of AI
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      Case Studies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Videos */}
              <Card className="border-white/10 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white/10">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Videos</CardTitle>
                  <CardDescription className="text-gray-400">
                    Tutorial videos and webinars
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      AI Tools Tutorials
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      Expert Webinars
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-white/50"></span>
                      Success Stories
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Need Personalized Guidance?
            </h2>
            <p className="mb-8 text-gray-400">
              Schedule a consultation with our AI experts to discuss your
              specific needs.
            </p>
            <Button
              asChild
              className="text-black bg-white hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/book-consultation">Book a Consultation</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
