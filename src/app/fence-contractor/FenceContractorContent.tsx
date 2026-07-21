'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/home/Contact";
import { CheckCircle2, Building2, HardHat, Recycle, X } from "lucide-react";
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

export default function FenceContractorContent() {
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
                        src="/herosection/1.avif"
                        alt="Commercial Fence Contractor"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal delay={0.3} type="fade-up">
                            <div className="max-w-4xl">
                                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider leading-tight">
                                    Expert Fence Contractor
                                </h1>
                                <p className="text-xl md:text-2xl text-[#e4c58a] font-poppins italic leading-relaxed mb-10 lg:mb-0">
                                    Expert guidance and professional installation for commercial and residential properties.
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

            {/* Commercial Fencing Section */}
            <section className="py-24 bg-[#fdfbf7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#4c0c0c] mb-8 italic">
                                    Investing in Commercial Fencing
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    As a business owner, you know the importance of protecting your assets. Having a fence in place may help to reduce the impact of liability and risks. At AJ FENCE, we provide the support and guidance you need to get the right type of fence in place in no time.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-[#e4c58a]/10">
                                        <div className="bg-[#4c0c0c] p-3 rounded-xl text-[#e4c58a] shrink-0">
                                            <Building2 size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-poppins text-[#4c0c0c] mb-2">The Value of Commercial Fencing</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                Fencing provides an opportunity to add more privacy, reduce the risk of theft, and keep people, animals, and cars out—significantly lowering your liability costs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/services/vinyl_fencing.avif"
                                    alt="Commercial Fencing Solutions"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Working with Contractor Section */}
            <section className="py-24 bg-[#4c0c0c] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="fade-up">
                            <div className="relative h-[450px] rounded-3xl overflow-hidden border-4 border-[#e4c58a]/20">
                                <Image
                                    src="/herosection/2.avif"
                                    alt="Professional Fence Contractor at Work"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    <p className="text-sm font-medium italic">"Quality workmanship since 2004"</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="fade-up" delay={0.2}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-[#e4c58a]">
                                    How to Work with Our Fence Contractor
                                </h2>
                                <p className="text-white/90 text-lg leading-relaxed mb-10">
                                    Our team handles the entire process for you, including professional fence removal if you have an existing structure. We ensure a clean slate before any new installation begins.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#e4c58a] flex items-center justify-center text-[#4c0c0c]">
                                            <Recycle size={24} />
                                        </div>
                                        <h4 className="font-bold text-[#e4c58a]">Removal Services</h4>
                                        <p className="text-sm text-white/70">Includes removing all materials and making any ground repairs or leveling work necessary.</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#e4c58a] flex items-center justify-center text-[#4c0c0c]">
                                            <HardHat size={24} />
                                        </div>
                                        <h4 className="font-bold text-[#e4c58a]">Ground Prep</h4>
                                        <p className="text-sm text-white/70">Expert repairs to ensure your new fence is installed on a stable, level surface.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Getting Installed Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#fdfbf7] rounded-[3rem] p-12 md:p-20 border border-[#e4c58a]/20 shadow-xl overflow-hidden relative">
                        <ScrollReveal type="fade-up">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-[#4c0c0c] mb-8 italic">
                                    Getting a New Fence Installed
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-12">
                                    Our team will address each one of your needs and give you advice on the best materials based on space, layout, and risks. From no-maintenance vinyl to traditional wood, we ensure your specific goals are met while adhering to city ordinances.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e4c58a]/10">
                                        <span className="block text-[#4c0c0c] font-bold mb-2 uppercase text-xs tracking-widest">Consultation</span>
                                        <p className="text-sm text-gray-600">Free, no-obligation site visits to discuss options.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e4c58a]/10">
                                        <span className="block text-[#4c0c0c] font-bold mb-2 uppercase text-xs tracking-widest">Planning</span>
                                        <p className="text-sm text-gray-600">Guidance on materials and local city ordinances.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e4c58a]/10">
                                        <span className="block text-[#4c0c0c] font-bold mb-2 uppercase text-xs tracking-widest">Execution</span>
                                        <p className="text-sm text-gray-600">Professional installation with custom-built precision.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e4c58a]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal type="fade-up">
                        <h2 className="text-3xl font-bold text-[#4c0c0c] mb-12 italic">
                            At AJ FENCE, we are here to help you. Our fence contractor is happy to come to you to provide a free consultation.
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link href="/contact-us" className="px-10 py-4 bg-[#4c0c0c] text-white rounded-full text-xl font-bold font-poppins hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300 shadow-xl">
                                Request Contractor Visit
                            </Link>
                            <a href="tel:+18638163117" className="text-[#4c0c0c] font-bold text-xl hover:text-[#e4c58a] transition-colors">
                                Call Now
                            </a>
                        </div>
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
