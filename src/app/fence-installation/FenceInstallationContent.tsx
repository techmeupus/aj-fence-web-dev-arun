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

export default function FenceInstallationContent() {
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
                        src="/herosection/2.avif"
                        alt="Fence Installation Services"
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
                                    Professional Installation
                                </h1>
                                <p className="text-xl md:text-2xl text-[#e4c58a] font-poppins italic leading-relaxed mb-10 lg:mb-0">
                                    Professional service and workmanship for your home since 2004.
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

            {/* Benefits Section */}
            <section className="py-24 bg-[#fdfbf7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <ScrollReveal delay={0.2} type="fade-up">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#4c0c0c] mb-8 italic text-balance">
                                Investing in Fence Installation Offers Numerous Benefits
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Investing in a new fence may be one of the best decisions you make for yourself and your home. Fences offer numerous benefits, from decorative to functional. At AJ FENCE, we specialize in high-quality fence installation. We have served the community since 2004, providing outstanding service and workmanship for each of our clients. If you need a fence, let our professionals handle it.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.4} type="fade-up">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#e4c58a]/20 h-full">
                                <div className="w-12 h-12 bg-[#4c0c0c] rounded-2xl flex items-center justify-center mb-6 text-[#e4c58a]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#4c0c0c] mb-4">Privacy & Security</h3>
                                <p className="text-gray-600">Ensure your family can enjoy outdoor space with the privacy you desire while keeping wildlife out.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.5} type="fade-up">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#e4c58a]/20 h-full">
                                <div className="w-12 h-12 bg-[#4c0c0c] rounded-2xl flex items-center justify-center mb-6 text-[#e4c58a]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#4c0c0c] mb-4">Safety First</h3>
                                <p className="text-gray-600">Minimize risks for children and pets, especially around pools or busy streets.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.6} type="fade-up">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#e4c58a]/20 h-full">
                                <div className="w-12 h-12 bg-[#4c0c0c] rounded-2xl flex items-center justify-center mb-6 text-[#e4c58a]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#4c0c0c] mb-4">Decorative Elegance</h3>
                                <p className="text-gray-600">Add sophisticated, custom-built elements that fit the unique character of your home.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Services Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#4c0c0c] mb-8 italic">
                                    Why Should I Choose Fence Installation Services Near Me?
                                </h2>
                                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                    <p>
                                        There are many reasons to invest in fence installation. The primary reason for many people is to install a fence for privacy. You want to ensure your family and friends can enjoy your outdoor space with the privacy you desire. For others, fences work well as a tool for minimizing children or pets leaving the yard. They can keep wildlife out, too. This can give you a bit of peace of mind. We also encourage people to invest in fencing when they have a pool, to minimize the risk of children wandering into their yard.
                                    </p>
                                    <p>
                                        Fences can do much more as well. Our fence installation services include benefits such as adding a decorative element to your yard. We can offer a custom built fence that fits the character of your home, creating a sophisticated or elegant look. With so many options, you can feel empowered to meet all of your needs with ease.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/herosection/3.avif"
                                    alt="Expert Installation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* How to Get Services Section */}
            <section className="py-24 bg-[#4c0c0c] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="fade-up">
                            <div className="relative h-[400px] rounded-3xl overflow-hidden border-4 border-[#e4c58a]/20 shadow-2xl">
                                <Image
                                    src="/herosection/1.avif"
                                    alt="Quality Materials"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="fade-up" delay={0.2}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-[#e4c58a]">
                                    How Can I Get Fence Installation Services Near Me?
                                </h2>
                                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                                    <p>
                                        Hiring a fence services company is a big decision. These are large components of your landscaping. You want a company you can rely on to provide you with exceptional service along the way. Our team at AJ FENCE can do that for you. As a comprehensive fence services company, we can work closely with you to ensure you get the very best results.
                                    </p>
                                    <p>
                                        That starts with giving you options in fence materials. You can choose from a range of options including beautiful wood for a natural look, stunning aluminum or iron, or an easy to manage vinyl fence. With so many options, it can seem overwhelming to know which one is best for your needs. Our fence services company will provide examples and give you a free quote for any type of fence that you are interested in. We take pride in making this process easy for you.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Start Section */}
            <section className="py-24 bg-[#fdfbf7]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-[#4c0c0c]/10 text-center relative overflow-hidden">
                        <ScrollReveal type="fade-up">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#4c0c0c] mb-8">
                                Where Do I Start with Fence Installation Services Near Me?
                            </h2>
                            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                                To get started, reach out to our team today. Let us come to you to provide a custom quote for all of the work you need completed. We are here to answer all of your questions and to provide you with one-on-one support as you choose the right type of fencing for your home.
                            </p>
                            <a href="tel:8638163117" className="inline-block px-10 py-6 bg-[#4c0c0c] text-[#e4c58a] rounded-full text-2xl font-bold font-poppins shadow-xl hover:scale-105 transition-transform duration-300">
                                Call AJ FENCE for help
                            </a>
                        </ScrollReveal>

                        {/* Decorative Circles */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-[#e4c58a]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#4c0c0c]/5 rounded-full translate-x-1/4 translate-y-1/4" />
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
