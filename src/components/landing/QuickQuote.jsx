"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_QUICK_QUOTE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbysqUCVboXC9cp6FrsP-nJ7EKzSkR9MQDbhi4u6iJTypF5qv7x5EC8_5lEl1V1-0VXl/exec";

export default function QuickQuote({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const formId = "landing_quick_quote_popup_form";

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.formId = formId;

    // GTM tracking
    if (typeof window !== "undefined") {
      const eventId = `${formId}_${Date.now()}`;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        form_id: formId,
        form_name: "Quick Quote Popup",
        form_location: "landing_page_popup",
        event_id: eventId,
      });
    }

    fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setIsLoading(false);
        router.push("/thank-you");
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsLoading(false);
        // Fallback redirect on error just in case
        router.push("/thank-you");
      });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#4c0c0c]/40 hover:text-[#4c0c0c] text-xl transition-colors"
        >
          ✕
        </button>

        {/* Form UI remains unchanged; after successful submission the user will be redirected to the thank‑you page. */}
        <>
          <h2 className="text-2xl font-bold mb-2 text-[#4c0c0c]">Get a Fast Quote in 60 Seconds</h2>
          <p className="text-[#4c0c0c]/80 mb-6">Tell us your project and we'll respond same day.</p>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-[#4c0c0c]/10 p-3 rounded bg-white text-[#4c0c0c] placeholder:text-[#4c0c0c]/40 outline-none focus:border-[#4c0c0c]/30"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-[#4c0c0c]/10 p-3 rounded bg-white text-[#4c0c0c] placeholder:text-[#4c0c0c]/40 outline-none focus:border-[#4c0c0c]/30"
              required
            />

            <select
              name="fenceType"
              className="w-full border border-[#4c0c0c]/10 p-3 rounded bg-white text-[#4c0c0c] outline-none focus:border-[#4c0c0c]/30"
              required
            >
              <option value="">Select Fence Type</option>
              <option value="Wood">Wood</option>
              <option value="Vinyl">Vinyl</option>
              <option value="Aluminum">Aluminum</option>
              <option value="Chain Link">Chain Link</option>
            </select>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#4c0c0c] hover:bg-[#2a0606] disabled:opacity-60 text-white py-3 rounded font-semibold transition-colors"
            >
              {isLoading ? "Sending..." : "GET QUOTE"}
            </button>
          </form>

          <p className="text-xs text-[#4c0c0c]/60 mt-4">No spam, no pressure — just an honest estimate.</p>
        </>

        <div
          className="absolute bottom-0 right-0 w-32 h-32
                        bg-amber-50 rounded-tl-full opacity-50 -z-10"
        />
      </div>
    </div>
  );
}