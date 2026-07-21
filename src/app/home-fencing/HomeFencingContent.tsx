'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Contact from "@/components/home/Contact";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/home/ContactForm";

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

export default function HomeFencingContent() {
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
                        src="/herosection/3.avif"
                        alt="Home Fencing Solutions"
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
                                    Home Fence
                                </h1>
                                <p className="text-xl md:text-2xl text-[#e4c58a] font-poppins italic leading-relaxed mb-10 lg:mb-0">
                                    Helping you choose the right materials to add value, privacy, and security to your home.
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
                                What Type of Home Fence Is Best for You?
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-10">
                                Investing in a home fence is one of the best ways to add value, privacy, and security to your home. To get to that point, though, you also have to choose the right type of materials for your needs. The good news is there are a wide range of options available, including fences for nearly any budget. At AJ FENCE, we can offer guidance in which type of fencing may be best for your goals.
                            </p>
                            <div className="h-1 w-24 bg-[#e4c58a] mx-auto rounded-full" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Privacy & Security */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/services/wooden fencing.avif"
                                    alt="Privacy and Security Fencing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#4c0c0c] mb-8 italic">
                                    Privacy and Security
                                </h2>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    For those who are looking for the very best in privacy, a wood or vinyl fence may be the best choice. These home fence options are very durable and long lasting, but they help to create a wall-like look to your space. No one can see what you are doing and you can count on the kids and pets staying safe.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#4c0c0c]" size={24} />
                                        <p className="text-gray-800 font-medium whitespace-nowrap">Wall-like Privacy</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#4c0c0c]" size={24} />
                                        <p className="text-gray-800 font-medium whitespace-nowrap">Durable & Long Lasting</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#4c0c0c]" size={24} />
                                        <p className="text-gray-800 font-medium whitespace-nowrap">Safe for Kids & Pets</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Elegance & Security */}
            <section className="py-24 bg-[#4c0c0c] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="fade-up">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-[#e4c58a]">
                                    Elegance and Security
                                </h2>
                                <p className="text-white/90 text-lg leading-relaxed mb-8">
                                    Another option to think about is aluminum. There are various types, but a black aluminum fence can create a stunning appearance outside of a home. It can also transform a space, creating enough security to keep your kids and pets in, but still allow you to see out into the neighborhood around you.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" />
                                        <span>Stunning curb appeal</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" />
                                        <span>Full visibility with secure borders</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" />
                                        <span>Low maintenance durability</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="fade-up" delay={0.2}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-[#e4c58a]/20 shadow-2xl">
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
            </section>

            {/* Affordable Fence */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/chain-link.webp"
                                    alt="Affordable Fencing Options"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#4c0c0c] mb-8 italic">
                                    Affordable Fence
                                </h2>
                                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                    <p>
                                        If you want the most affordable fence, consider a chain link. Vinyl can also be an affordable option. These fences can be privacy fences, too, depending on the type you select. For those who want an inexpensive way to add a bit of security for pets, this can be a good choice overall.
                                    </p>
                                    <p>
                                        With an affordable fence like any of the options we offer, you can have the protection and security you desire. You can also feel good about your space and know you are taking steps to add value to it. At AJ FENCE, we work closely with you to ensure you always have the very best outcome.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
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
