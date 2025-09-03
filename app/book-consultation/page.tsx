"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Send,
  Briefcase,
  MessageSquare,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/footer";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import {
  submitConsultationForm,
  type ConsultationFormData,
} from "@/lib/firestore";
import { toast } from "sonner";

export default function BookConsultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("access_key", "0860f260-8246-4a3b-a8b0-9ac1d337e2af");
      data.append("subject", "New Consultation Request");
      data.append("from_name", `${formData.firstName} ${formData.lastName}`);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("company", formData.company);
      data.append("preferred_date", formData.preferredDate);
      data.append("preferred_time", formData.preferredTime);
      data.append("message", formData.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Consultation request sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          preferredDate: "",
          preferredTime: "",
        });
      } else {
        toast.error("Failed to send consultation request.");
      }
    } catch (error) {
      console.error("Web3Forms send error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex flex-col min-h-screen text-black">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden py-16 mt-0">
          <div className="container relative z-10 max-w-6xl mx-auto text-center py-16 mt-16">
            <div>
              <Link
                href="/"
                className="inline-flex items-center mb-6 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <h1 className="mb-6 font-extrabold tracking-tight leading-tight">
              <span className="block text-black text-2xl md:text-3xl lg:text-4xl mb-4">
                Let's Start Your Journey
              </span>
              <span className="block text-black text-4xl md:text-6xl lg:text-7xl">
                Book a{" "}
                <span className="bg-gradient-to-r from-pink-400/90 via-purple-500/90 to-blue-400/90 bg-clip-text text-transparent">
                  Consultation
                </span>
              </span>
            </h1>
            <p className="max-w-4xl mx-auto mb-10 text-[21px] leading-relaxed text-black">
              Schedule a free consultation with our AI experts to discuss how we
              <br className="hidden md:block" />
              can help transform your business with cutting-edge solutions.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container max-w-6xl px-4 mx-auto relative z-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Contact Information */}
              <div>
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-black">
                    Contact Information
                  </h2>
                  <p className="mb-8 text-gray-700">
                    Reach out to us through any of these channels or fill out
                    the form to schedule your consultation.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Contact Cards */}
                  <div>
                    <Card className="group relative border-black/10 bg-gray-100/50 rounded-xl transition-all duration-300">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <CardContent className="relative p-6">
                        <div className="flex items-start">
                          <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-black/10">
                            <Mail className="w-5 h-5 text-black" />
                          </div>
                          <div>
                            <h3 className="mb-1 font-medium text-black">
                              Email
                            </h3>
                            <a
                              href="mailto:info@nomadai.co"
                              className="text-gray-700 hover:text-black transition-colors duration-300"
                            >
                              info@nomadai.ie
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="group relative border-black/10 bg-gray-100/50 rounded-xl transition-all duration-300">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <CardContent className="relative p-6">
                        <div className="flex items-start">
                          <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-black/10">
                            <Phone className="w-5 h-5 text-black" />
                          </div>
                          <div>
                            <h3 className="mb-1 font-medium text-black">
                              Phone
                            </h3>
                            <a
                              href="tel:+353871605830"
                              className="text-gray-700 hover:text-black transition-colors duration-300"
                            >
                              +353 87 160 5830
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="group relative border-black/10 bg-gray-100/50 rounded-xl transition-all duration-300">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <CardContent className="relative p-6">
                        <div className="flex items-start">
                          <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-black/10">
                            <MapPin className="w-5 h-5 text-black" />
                          </div>
                          <div>
                            <h3 className="mb-1 font-medium text-black">
                              Office
                            </h3>
                            <p className="text-gray-700">
                              31 Clyde Road,
                              <br />
                              Ballsbridge, Dublin, Ireland
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Business Hours */}
                  <div className="mt-12">
                    <h3 className="mb-4 text-xl font-bold text-black">
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monday - Friday</span>
                        <span className="text-black">
                          9:00 AM - 6:00 PM PST
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Saturday</span>
                        <span className="text-black">
                          10:00 AM - 2:00 PM PST
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Sunday</span>
                        <span className="text-black">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <div className="relative p-8 bg-gray-100/50 border border-black/10 rounded-xl">
                    <h2 className="mb-6 text-2xl font-bold text-black">
                      Schedule Your Consultation
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-white border-black/20 text-black placeholder-gray-500 focus:border-black focus:ring-black"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-white border-black/20 text-black placeholder-gray-500 focus:border-black focus:ring-black"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white border-black/20 text-black placeholder-gray-500 focus:border-black focus:ring-black"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-white border-black/20 text-black placeholder-gray-500 focus:border-black focus:ring-black"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-white border-black/20 text-black placeholder-gray-500 focus:border-black focus:ring-black"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="preferredDate"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            Preferred Date
                          </label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="bg-white border-black/20 text-black focus:border-black focus:ring-black"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="preferredTime"
                            className="block mb-2 text-sm font-medium text-black"
                          >
                            Preferred Time
                          </label>
                          <Input
                            id="preferredTime"
                            name="preferredTime"
                            type="time"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="bg-white border-black/20 text-black focus:border-black focus:ring-black"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-black"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-white border-black/20 text-black placeholder-gray-500 focus:border-black focus:ring-black"
                          placeholder="Tell us about your project or what you'd like to discuss..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Schedule Consultation
                          </div>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-12">
          <div className="container max-w-4xl px-4 mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">
                Quick answers to common questions about our consultation process
              </p>
            </div>

            <div className="space-y-4">
              <div className="group relative transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <details className="relative bg-gray-800/50 border border-white/10 rounded-xl group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium">
                      How long does a typical consultation last?
                    </h3>
                    <div className="w-5 h-5 transition-transform duration-300 border rounded-full border-white/30 group-open:rotate-180">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-300">
                      Initial consultations typically last 45-60 minutes. This
                      gives us enough time to understand your needs and provide
                      initial recommendations.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-blue-400/20 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <details className="relative bg-gray-800/50 border border-white/10 rounded-xl group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium">
                      What should I prepare for the consultation?
                    </h3>
                    <div className="w-5 h-5 transition-transform duration-300 border rounded-full border-white/30 group-open:rotate-180">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-300">
                      It's helpful to prepare a brief overview of your business,
                      current challenges, and specific goals you'd like to
                      achieve with AI. Any existing AI initiatives or tools
                      you're using would also be valuable to discuss.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
