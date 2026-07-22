"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaHome, FaCheck } from "react-icons/fa";

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const formId = "landing_main_quote_form";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const eventId = `${formId}_${Date.now()}`;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        form_id: formId,
        form_name: "Main Quote Form",
        form_location: "landing_page",
        event_id: eventId,
      });
    }

    try {
      const formData = new FormData(e.target);
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScb3koOXUgYUdMLSKrChXQkSaT55POJ_BKERMB2Hzlb9iMw1A/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitted(true);
      router.push('/thank-you');
    }
  };
  const badges = [
    { number: "20+", label: "Years Experience", icon: FaStar },
    { number: "5,000+", label: "Projects Done", icon: FaHome },
    { number: "100%", label: "Satisfaction", icon: FaCheck },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Locals Trust Us
              </h3>

              <ul className="space-y-4">
                {[
                  "Trusted fence company near me providing professional installation with over 20 years of experience.",
                  "Recognized as one of the best fence companies near me for residential and commercial fencing solutions.",
                  "Family-owned local fence company dedicated to serving homeowners and businesses in the community.",
                  "Affordable fence company offering competitive pricing and free on-site estimates.",
                  "Licensed and insured fence company committed to reliable service, quality materials, and long-lasting results.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span
                      className="flex-shrink-0 w-6 h-6 bg-[#732323] rounded-full 
                    flex items-center justify-center mt-0.5 group-hover:bg-[#4c0c0c] transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {badges.map((badge, index) => {
                  const Icon = badge.icon;

                  return (
                    <div key={index} className="text-center">
                      <Icon className="text-2xl text-[#4c0c0c] mx-auto mb-1" />

                      <div className="font-bold text-gray-900">
                        {badge.number}
                      </div>

                      <div className="text-xs text-gray-400">{badge.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex items-center">
              {!isSubmitted ? (
                  <form
                    className="p-8 space-y-2 w-full"
                    onSubmit={handleSubmit}
                  >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="entry.1142339120"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-[#4c0c0c]
                    focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="entry.1878332718"
                    placeholder="(512) 555-0123"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-[#4c0c0c]
                    focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="entry.1659341449"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-[#4c0c0c]
                    focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>

                  <select
                    name="entry.813581305"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-[#4c0c0c]
                    focus:border-transparent transition-all text-gray-900"
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="Residentail Fencing">Residential Fencing</option>
                    <option value="Commercial Fencing">Commercial Fencing</option>
                    <option value="Custom Design">Custom Design</option>
                    <option value="Fence Repair">Fence Repair</option>
                  </select>
                </div>

                {/* Material */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Material
                  </label>

                  <select
                    name="entry.1974478535"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-[#4c0c0c]
                    focus:border-transparent transition-all text-gray-900"
                  >
                    <option value="">Select material</option>
                    <option value="Aluminum">Aluminum</option>
                    <option value="Vinyl">Vinyl</option>
                    <option value="wood">Wood</option>
                    <option value="Chai link">Chain Link</option>
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>

                  <textarea
                    name="entry.1252279274"
                    placeholder="Tell us about your project (size, style, timeline, etc.)"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-[#4c0c0c]
                    focus:border-transparent transition-all text-gray-900
                    placeholder:text-gray-400 resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4c0c0c] to-[#2a0606]
                  text-white font-semibold py-4 rounded-lg
                  hover:from-[#2a0606] hover:to-[#1a0404]
                  transform hover:scale-[1.02] transition-all duration-300
                  focus:outline-none focus:ring-4 focus:ring-[#4c0c0c]/50
                  shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
                <div className="absolute bottom-0 right-0 w-32 h-32
                bg-amber-50 rounded-tl-full opacity-50" />
                  </form>
              ) : (
                <div className="p-8 text-center w-full">
                  <div className="text-5xl mb-6">✅</div>
                  <h3 className="text-2xl font-bold text-[#4c0c0c] mb-4">
                    Request Sent!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. Our team will review your project
                    details and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => router.push('/')}
                     className="bg-[#4c0c0c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2a0606] transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
