"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Footer from "@/components/footer";
import Image from "next/image";

const portfolioProjects = [
  {
    id: 1,
    title: "Automotive Site",
    description:
      "Modern automotive dealership website with vehicle inventory, financing calculator, and customer portal.",
    video: "/S.1.mov",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "/book-consultation",
    githubUrl: "/book-consultation",
    featured: true,
  },
  {
    id: 2,
    title: "Car Dealership Platform",
    description:
      "Comprehensive car dealership website with vehicle listings, financing options, and customer management system.",
    video: "/S.2.mov",
    technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
    liveUrl: "/book-consultation",
    githubUrl: "/book-consultation",
    featured: false,
  },
  {
    id: 3,
    title: "IT Services Website",
    description:
      "Professional IT services website showcasing technology solutions, consulting services, and digital transformation.",
    video: "/S.3.mov",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    liveUrl: "/book-consultation",
    githubUrl: "/book-consultation",
    featured: false,
  },
  {
    id: 4,
    title: "Design Agency Portfolio",
    description:
      "Creative design agency website featuring portfolio showcase, design services, and client testimonials.",
    video: "/S.4.mov",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    liveUrl: "/book-consultation",
    githubUrl: "/book-consultation",
    featured: false,
  },
  {
    id: 5,
    title: "AI Automation",
    description:
      "AI automation platform showcasing intelligent workflow automation, process optimization, and business intelligence solutions.",
    video: "/S.5.mov",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "/book-consultation",
    githubUrl: "/book-consultation",
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <main className="flex flex-col min-h-screen pt-16 text-black">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-7xl px-4 mx-auto relative z-10">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-black">
                Showcasing our expertise in modern web development, from
                AI-powered applications to comprehensive business solutions.
              </p>
            </AnimatedSection>

            {/* Featured Project */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Featured Project
                </h3>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/10 via-purple-500/10 to-blue-400/10 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">
                          {portfolioProjects[0].title}
                        </h4>
                        <p className="text-gray-600 mb-6 text-lg">
                          {portfolioProjects[0].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {portfolioProjects[0].technologies.map(
                            (tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100/50 text-black text-sm rounded-full border border-black/10"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4">
                          <Link href={portfolioProjects[0].liveUrl}>
                            <Button className="bg-white text-black hover:bg-gray-200 rounded-md">
                              <Globe className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </Link>
                          <Link href={portfolioProjects[0].githubUrl}>
                            <Button
                              variant="outline"
                              className="border-black/30 text-black hover:bg-white/10 rounded-md"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-video rounded-lg overflow-hidden border border-black/10">
                          <video
                            src={portfolioProjects[0].video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* All Projects Grid */}
            <AnimatedSection animation="fade-up" delay={400}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                All Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioProjects.slice(0, 5).map((project, index) => (
                  <AnimatedSection
                    key={project.id}
                    animation="fade-up"
                    delay={100 * (index + 1)}
                  >
                    <div className="group relative transition-all duration-300 hover:scale-105 hover:z-10">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/10 via-purple-500/10 to-blue-400/10 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <div className="relative p-6 bg-gray-100/50 border border-black/10 rounded-xl h-[500px] flex flex-col">
                        <div className="aspect-video rounded-lg overflow-hidden border border-black/10 mb-4 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                          <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 mb-4 text-sm flex-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-gray-100/50 text-black text-xs rounded-full border border-black/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100/50 text-black text-xs rounded-full border border-black/10">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2 mt-auto">
                            <Link href={project.liveUrl}>
                              <Button
                                size="sm"
                                className="bg-white text-black hover:bg-gray-200 rounded-md"
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Demo
                              </Button>
                            </Link>
                            <Link href={project.githubUrl}>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-black/30 text-black hover:bg-white/10 rounded-md"
                              >
                                <Github className="w-3 h-3 mr-1" />
                                Code
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection
              animation="fade-up"
              delay={600}
              className="mt-16 text-center"
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/10 via-purple-500/10 to-blue-400/10 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Let's work together to bring your vision to life with
                    cutting-edge web development and AI solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-white text-black hover:bg-gray-200 rounded-md">
                        Get in Touch
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        className="border-black/30 text-black hover:bg-white/10 rounded-md"
                      >
                        View Services
                      </Button>
                    </Link>
                  </div>
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
