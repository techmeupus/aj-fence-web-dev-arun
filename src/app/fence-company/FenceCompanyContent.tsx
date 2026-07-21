'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Contact from "@/components/home/Contact";
import ContactForm from "@/components/home/ContactForm";
import { CheckCircle2, X } from "lucide-react";
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

export default function FenceCompanyContent() {
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
                        alt="Custom Home Fencing"
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
                                    Trusted Fence Company
                                </h1>
                                <p className="text-xl md:text-2xl text-[#e4c58a] font-poppins italic leading-relaxed mb-10 lg:mb-0">
                                    Elevating your home&apos;s appearance with quality craftsmanship and personalized design since 2004.
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
                                Trusted Local Fence Company
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-10">
                                Adding a fence to your home offers a variety of benefits related to privacy and keeping your family safe. Yet, custom home fences can also be a stunning addition to your home&apos;s landscaping and architectural beauty. Having the right professionals on hand to help you to create the type of experience you want is important. As a trusted, local fence company, AJ FENCE is your go-to provider of quality fencing. Let us help you to create the custom fence you desire to elevate your home&apos;s appearance.
                            </p>
                            <div className="h-1 w-24 bg-[#e4c58a] mx-auto rounded-full" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/herosection/2.avif"
                                    alt="Custom Fit Fencing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#4c0c0c] mb-8 italic">
                                    Why Choose Custom Home Fences?
                                </h2>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    Custom fence installation simply means that each fence component is designed to fit your space. Instead of a simple segment that may or may not work, we design a fence that fits your property. This takes into account everything from the uneven areas to the more elaborate spaces. Whether you need a specific height or want a very specific look, our team can work with you to make it happen. Even better, these fences can also provide you with different layout options based on your unique needs.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#4c0c0c]" size={24} />
                                        <p className="text-gray-800 font-medium">Custom Layout Planning</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#4c0c0c]" size={24} />
                                        <p className="text-gray-800 font-medium">Adapts to Uneven Terrain</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#4c0c0c]" size={24} />
                                        <p className="text-gray-800 font-medium">Personalized Height & Style</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Support & Workmanship Section */}
            <section className="py-24 bg-[#4c0c0c] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <ScrollReveal type="fade-up">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic text-[#e4c58a]">
                                Custom Fence Installation Means Hands-on Support
                            </h2>
                            <p className="text-white/80 text-xl max-w-3xl mx-auto italic font-poppins">
                                We provide you with a range of customization options and the support to make the right choice.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="fade-up" delay={0.2}>
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-white/90">
                                    One of the best reasons to work with our team is because we can provide you with a range of customization options. When you turn to our fence company, we can help you choose from various fence material options. That includes beautiful, black aluminum or vinyl fencing. You can choose wood that is crafted to the specifications you have set. There are many unique opportunities for you to find something that fits the layout and architecture of your home.
                                </p>
                                <p className="text-lg leading-relaxed text-white/90">
                                    When you choose our team for custom fence installation, you also are going to get superior workmanship. Our team works closely with you to ensure the work is done properly. That means that, from start to finish, you are going to have a fence that is strong, durable, and long lasting. It will look fantastic and add value to your home.
                                </p>
                                <div className="p-6 bg-white/5 border border-[#e4c58a]/30 rounded-2xl">
                                    <p className="italic text-[#e4c58a]">
                                        &quot;Because of our extensive experience, you can trust us to offer a range of solutions for even the most complex of areas for installation.&quot;
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="fade-up" delay={0.4}>
                            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e4c58a]/20">
                                <Image
                                    src="/herosection/3.avif"
                                    alt="Expert Workmanship"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-[#fdfbf7] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-[#4c0c0c]/10 text-center">
                        <ScrollReveal type="fade-up">
                            <h2 className="text-4xl md:text-6xl font-bold text-[#4c0c0c] mb-8">
                                Getting a Quote Is All It Takes
                            </h2>
                            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                                When it comes to custom home fences, turn to the team at AJ FENCE. Since 2004, we have provided custom home fences in a wide range of styles. We will come to your home and talk to you about your ideas and needs, helping you to choose the right type of fence for just about any goals you have. That includes meeting your budget needs.
                            </p>
                            <p className="text-lg text-gray-600 italic font-poppins mb-12">
                                To get started, schedule a consultation. There is no cost and no obligation. Our team is happy to give you ideas or to tell you why you should trust our fence company.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                                <div className="text-left p-6 bg-[#fdfbf7] rounded-2xl border-l-4 border-[#4c0c0c]">
                                    <p className="text-[#4c0c0c] font-black uppercase tracking-widest text-sm mb-2">Since 2004</p>
                                    <p className="text-gray-700 font-bold">Trusted Experience</p>
                                </div>
                                <div className="text-left p-6 bg-[#fdfbf7] rounded-2xl border-l-4 border-[#4c0c0c]">
                                    <p className="text-[#4c0c0c] font-black uppercase tracking-widest text-sm mb-2">Consultation</p>
                                    <p className="text-gray-700 font-bold">Free & No Obligation</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e4c58a]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4c0c0c]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            </section>

            {/* Contact Form Section */}
            <Contact />
            <ContactForm />
            {/* Free Estimate Modal */}
            <FreeEstimateModal
                isOpen={isEstimateModalOpen}
                onClose={() => setIsEstimateModalOpen(false)}
            />
        </main>
    );
}
