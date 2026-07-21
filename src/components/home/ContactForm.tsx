"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ContactForm = () => {
    const router = useRouter();
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = () => {
        if (typeof window !== "undefined") {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
                event: "form_submission",
                form_id: "contact_form",
            });
        }

        setTimeout(() => {
            router.push('/thank-you');
        }, 800);
    };

    return (
        <section className="w-full bg-white pb-10 font-poppins">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <ScrollReveal type="fade-up">
                    <div className="bg-[#1a1a1a] rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden relative">
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4c0c0c]/10 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                                Get <span className="text-[#e4c58a]">Free Estimate</span>
                            </h2>

                            {/* Hidden iframe must be always preserved in DOM */}
                            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>

                            {!submitted ? (
                                <form
                                    className="flex flex-col gap-4"
                                    action="https://docs.google.com/forms/d/e/1FAIpQLSc5Vufhh3ofcumOSFlGqBDwdruefh99FZUKf5gPedCYYf6WsQ/formResponse"
                                    method="POST"
                                    target="hidden_iframe"
                                    onSubmit={handleSubmit}
                                >
                                    {/* Horizontal Fields Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                        <input
                                            type="text"
                                            name="entry.701112100"
                                            placeholder="Name"
                                            className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors h-10"
                                            required
                                        />
                                        <input
                                            type="tel"
                                            name="entry.817961527"
                                            placeholder="Phone"
                                            className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors h-10"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="entry.2065185939"
                                            placeholder="Email"
                                            className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors h-10"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="entry.862359953"
                                            placeholder="Your Message"
                                            className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors h-10 md:col-span-1 lg:col-span-1"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="bg-[#e4c58a] text-[#1a1a1a] px-6 py-2 rounded font-bold uppercase tracking-wider text-xs hover:bg-white transition-all duration-300 h-10 md:col-span-4 lg:col-span-1"
                                        >
                                            Submit
                                        </button>
                                    </div>

                                    {/* Consent Row */}
                                    <div className="flex items-start gap-3 mt-2">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            className="peer appearance-none w-4 h-4 border border-white/20 rounded bg-white/5 checked:bg-[#e4c58a] checked:border-[#e4c58a] transition-all cursor-pointer mt-0.5 shrink-0"
                                            required
                                            defaultChecked
                                        />
                                        <label htmlFor="consent" className="text-white/40 text-[10px] md:text-xs leading-tight cursor-pointer select-none">
                                            By checking, you agree to receive automated SMS from AJ Fencing. Msg/data rates apply. Reply STOP to opt out.
                                        </label>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <h3 className="text-[#e4c58a] text-xl font-bold mb-2">Thank You!</h3>
                                    <p className="text-white/80 text-sm">We received your request and will get back to you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 text-xs text-white/40 hover:text-white underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ContactForm;
