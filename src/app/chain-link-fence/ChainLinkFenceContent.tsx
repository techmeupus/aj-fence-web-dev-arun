'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/home/Contact";
import ContactForm from "@/components/home/ContactForm";
import { CheckCircle2, Shield, Eye, Palmtree, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const FreeEstimateModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const router = useRouter();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            router.push('/thank-you');
        }, 800);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl border border-[#e4c58a]/30"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-[#e4c58a]/20">
                            <h3 className="text-2xl font-bold text-white">
                                Get <span className="text-[#e4c58a]">Free Estimate</span>
                            </h3>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-8">
                            <iframe name="modal_hidden_iframe" id="modal_hidden_iframe" style={{ display: 'none' }}></iframe>
                            {!submitted ? (
                                <form
                                    className="flex flex-col gap-4"
                                    action="https://docs.google.com/forms/d/e/1FAIpQLSc5Vufhh3ofcumOSFlGqBDwdruefh99FZUKf5gPedCYYf6WsQ/formResponse"
                                    method="POST"
                                    target="modal_hidden_iframe"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="text"
                                        name="entry.701112100"
                                        placeholder="Name"
                                        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#e4c58a] transition-colors"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="entry.817961527"
                                        placeholder="Phone"
                                        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#e4c58a] transition-colors"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="entry.2065185939"
                                        placeholder="Email"
                                        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#e4c58a] transition-colors"
                                        required
                                    />
                                    <textarea
                                        name="entry.862359953"
                                        placeholder="Your Message"
                                        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#e4c58a] transition-colors h-32 resize-none"
                                        required
                                    ></textarea>

                                    <div className="flex items-start gap-3 my-2">
                                        <input
                                            type="checkbox"
                                            id="modal-consent"
                                            className="peer appearance-none w-4 h-4 border border-white/20 rounded bg-white/5 checked:bg-[#e4c58a] checked:border-[#e4c58a] transition-all cursor-pointer mt-1 shrink-0"
                                            required
                                            defaultChecked
                                        />
                                        <label htmlFor="modal-consent" className="text-white/40 text-[10px] md:text-sm leading-tight cursor-pointer select-none">
                                            By checking, you agree to receive automated SMS from AJ Fencing. Msg/data rates apply. Reply STOP to opt out.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-[#e4c58a] text-[#1a1a1a] py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-[#e4c58a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-[#e4c58a]" size={40} />
                                    </div>
                                    <h3 className="text-[#e4c58a] text-2xl font-bold mb-3">Thank You!</h3>
                                    <p className="text-white/80">We've received your request and will contact you shortly.</p>
                                    <button
                                        onClick={onClose}
                                        className="mt-8 bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default function ChainLinkFenceLearnMoreContent() {
    const router = useRouter();
    const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
    const [isHeroFormSubmitted, setIsHeroFormSubmitted] = useState(false);

    const handleHeroSubmit = () => {
        setTimeout(() => {
            router.push('/thank-you');
        }, 800);
    };
    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] md:h-[90vh] w-full flex items-center overflow-hidden py-20 md:py-0">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/chain-link.webp"
                        alt="Chain Link Fencing Solutions"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal delay={0.3} type="fade-up">
                            <div className="max-w-4xl">
                                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider leading-tight">
                                    Chain Link Solutions
                                </h1>
                                <p className="text-xl md:text-2xl text-[#e4c58a] font-poppins italic leading-relaxed mb-10 lg:mb-0">
                                    Helping you pick the right fence for your home and property.
                                </p>

                                {/* Mobile Button */}
                                <div className="lg:hidden mt-8">
                                    <button
                                        onClick={() => setIsEstimateModalOpen(true)}
                                        className="bg-[#e4c58a] text-[#1a1a1a] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-xl"
                                    >
                                        Get Free Estimate
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Desktop Form */}
                        <ScrollReveal delay={0.5} type="fade-up" className="hidden lg:block">
                            <div className="bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-3xl border border-[#e4c58a]/30 shadow-2xl max-w-sm ml-auto">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Get <span className="text-[#e4c58a]">Free Estimate</span>
                                </h2>

                                <iframe name="hero_hidden_iframe" id="hero_hidden_iframe" style={{ display: 'none' }}></iframe>

                                {!isHeroFormSubmitted ? (
                                    <form
                                        className="flex flex-col gap-3"
                                        action="https://docs.google.com/forms/d/e/1FAIpQLSc5Vufhh3ofcumOSFlGqBDwdruefh99FZUKf5gPedCYYf6WsQ/formResponse"
                                        method="POST"
                                        target="hero_hidden_iframe"
                                        onSubmit={handleHeroSubmit}
                                    >
                                        <input
                                            type="text"
                                            name="entry.701112100"
                                            placeholder="Name"
                                            className="bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors"
                                            required
                                        />
                                        <input
                                            type="tel"
                                            name="entry.817961527"
                                            placeholder="Phone"
                                            className="bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="entry.2065185939"
                                            placeholder="Email"
                                            className="bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors"
                                            required
                                        />
                                        <textarea
                                            name="entry.862359953"
                                            placeholder="Your Message"
                                            className="bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#e4c58a] transition-colors h-20 resize-none"
                                            required
                                        ></textarea>

                                        <div className="flex items-start gap-3 my-1">
                                            <input
                                                type="checkbox"
                                                id="hero-consent"
                                                className="peer appearance-none w-3.5 h-3.5 border border-white/30 rounded bg-white/5 checked:bg-[#e4c58a] checked:border-[#e4c58a] transition-all cursor-pointer mt-1 shrink-0"
                                                required
                                                defaultChecked
                                            />
                                            <label htmlFor="hero-consent" className="text-white/50 text-[9px] leading-tight cursor-pointer select-none">
                                                By checking, you agree to receive automated SMS from AJ Fencing. Msg/data rates apply. Reply STOP to opt out.
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-[#e4c58a] text-[#1a1a1a] py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 shadow-lg mt-1"
                                        >
                                            Submit Form
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-10 scale-in-center">
                                        <div className="w-16 h-16 bg-[#e4c58a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="text-[#e4c58a]" size={32} />
                                        </div>
                                        <h3 className="text-[#e4c58a] text-xl font-bold mb-2">Thank You!</h3>
                                        <p className="text-white/80 text-sm">Your request has been successfully submitted.</p>
                                        <button
                                            onClick={() => setIsHeroFormSubmitted(false)}
                                            className="mt-6 text-xs text-white/50 hover:text-white underline cursor-pointer"
                                        >
                                            Send another inquiry
                                        </button>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-[#fdfbf7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal delay={0.2} type="fade-up">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#4c0c0c] mb-8 italic">
                                Is a Chain Link Fence Right for You?
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-10">
                                One of the hardest parts of getting a new fence installed is picking the right one for you and your property. The good news is there are a range of options available for you to choose from including the popular chain link fence. Our team at AJ FENCE can provide you with one-on-one support as you compare your options.
                            </p>
                            <div className="h-1 w-24 bg-[#e4c58a] mx-auto rounded-full" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Chain Link Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/chain-link.webp"
                                    alt="Benefits of Chain Link Fencing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#4c0c0c] mb-8 italic">
                                    When Should You Choose a Chain Link Fence?
                                </h2>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    A chain link fence is one that you can see through, but still provides protection for keeping children and pets within the space. It helps to minimize the risk of blocking out your view, making it ideal for enclosing smaller areas without losing the feeling of openness.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Eye className="text-[#4c0c0c] mt-1 shrink-0" size={24} />
                                        <p className="text-gray-800 font-medium">Unobstructed views of your property</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="text-[#4c0c0c] mt-1 shrink-0" size={24} />
                                        <p className="text-gray-800 font-medium">Safe containment for children and pets</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[#4c0c0c] mt-1 shrink-0" size={24} />
                                        <p className="text-gray-800 font-medium">Durable, long-lasting, and very affordable</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Aluminum Fence Benefits Section */}
            {/* <section className="py-24 bg-[#4c0c0c] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="fade-up">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-[#e4c58a]">
                                    Aluminum Fence Benefits
                                </h2>
                                <p className="text-white/90 text-lg leading-relaxed mb-8">
                                    Another option is a bit more expensive than chain link, but still remains affordable. Aluminum fencing provides similar security benefits but with much more presence and character. Many people prefer its elegant and sophisticated appearance.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-[#e4c58a] font-bold mb-2">Elegance</h4>
                                        <p className="text-sm text-white/70">Adds sophisticated character and curb appeal to any home.</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-[#e4c58a] font-bold mb-2">Durability</h4>
                                        <p className="text-sm text-white/70">Enhanced structural presence and long-term resistance.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="fade-up" delay={0.2}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-[#e4c58a]/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                <Image
                                    src="/services/Aluminum Black.avif"
                                    alt="Elegant Aluminum Fencing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section> */}

            {/* Stockade Fence Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/services/wooden fencing.avif"
                                    alt="Natural Stockade Fence"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#4c0c0c] mb-8 italic">
                                    When Should You Choose a Stockade Fence?
                                </h2>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    If privacy is your primary goal, a wood stockade fence is an excellent choice. It creates a wall-like level of protection that you cannot see through, while its natural look blends seamlessly with the outdoors.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Palmtree className="text-[#e4c58a]" size={20} />
                                        <span className="text-gray-700 font-medium">Natural and aesthetic blending</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Shield className="text-[#e4c58a]" size={20} />
                                        <span className="text-gray-700 font-medium">Absolute privacy and security</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#e4c58a]" size={20} />
                                        <span className="text-gray-700 font-medium">Customizable styles and heights</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Footer Consultation Section */}
            <section className="py-24 bg-[#fdfbf7] border-t border-[#e4c58a]/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal type="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#4c0c0c] mb-8">
                            Finding the Right Option Starts with Us
                        </h2>
                        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                            With so many options including various styles of aluminum, chain link, and wood fences, AJ FENCE is your go-to provider. Our team can answer all of your questions when you call us for a consultation and a free quote.
                        </p>
                        <Link href="/contact-us" className="inline-block px-12 py-5 bg-[#4c0c0c] text-white rounded-full text-xl font-bold font-poppins hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300 shadow-xl scale-100 hover:scale-105 active:scale-95">
                            Get Your Free Quote Now
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Section */}
            <Contact showBgImage={false} />
            <ContactForm />
            {/* Free Estimate Modal */}
            <FreeEstimateModal
                isOpen={isEstimateModalOpen}
                onClose={() => setIsEstimateModalOpen(false)}
            />
        </main>
    );
}
