'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Contact from "@/components/home/Contact";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/home/ContactForm";

const galleryData: Record<string, string[]> = {
    "Adobe Vinyl": [
        "/services/vinyl/adobe-vinyl.avif",
        "/services/vinyl/adobe-gate-6-height.avif",
        "/services/vinyl/summit.avif"
    ],
    "White Vinyl": [
        "/services/vinyl/white-vinyl.avif",
        "/services/vinyl/6'whitevinyl.avif",
        "/services/vinyl/4'white-vinyl-picket.avif",
        "/services/vinyl/white-vinyl-with-lattice.avif",
        "/services/vinyl/white-vinyl-with-gothic-caps.avif",
        "/services/vinyl/vinyl1.avif"
    ],
    "Tan Vinyl": [
        "/services/vinyl/tan-vinyl.avif",
        "/services/vinyl/6'tan-vinyl.avif",
        "/services/vinyl/tan2.avif",
        "/services/vinyl/tongue-and-groove.avif"
    ],
    "Premium Vinyl": [
        "/services/vinyl/summit.avif",
        "/services/vinyl/estate.avif",
        "/services/vinyl/hanover.avif"
    ],
    "Hanover Style": [
        "/services/vinyl/hanover.avif",
        "/services/vinyl/estate.avif"
    ],
    "Vinyl 6' to 4' Transition": [
        "/services/vinyl/vinyl6'to4'.avif"
    ],
    "Tan & White Mix": [
        "/services/vinyl/tan&white.avif"
    ]
};

const GalleryModal = ({ isOpen, onClose, title }: { isOpen: boolean, onClose: () => void, title: string }) => {
    const images = galleryData[title] || [
        "/services/vinyl_fencing.avif",
        "/services/vinyl/white-vinyl.avif"
    ];

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
                        className="relative w-full max-w-5xl bg-[#4c0c0c] rounded-3xl overflow-hidden shadow-2xl border border-[#e4c58a]/30"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-[#e4c58a]/20">
                            <h3 className="text-2xl font-bold text-[#e4c58a]">{title} Samples</h3>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X size={24} className="text-white" />
                            </button>
                        </div>
                        <div className="p-8 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {images.map((img, i) => (
                                    <div key={i} className="relative h-64 rounded-xl overflow-hidden group">
                                        <Image src={img} alt={`${title} Sample ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

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

export default function VinylFencingContent() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
    const [isHeroFormSubmitted, setIsHeroFormSubmitted] = useState(false);

    const handleHeroSubmit = () => {
        setTimeout(() => {
            router.push('/thank-you');
        }, 800);
    };

    const features = [
        "Superior Privacy: solid panels provide a complete visual barrier for your home.",
        "Zero Maintenance: Never needs painting, staining, or sanding. Just a quick rinse.",
        "Versatile Styles: Available in multiple colors and textures, from classic white to textured tan.",
        "Won't rot, rust, or corrode, ensuring performance.",
        "Modern Appeal: Clean lines and consistent finish that boost property value."
    ];

    const options = [
        {
            title: "Adobe Vinyl",
            img: "/services/vinyl/adobe-gate-6-height.avif",
            description: "A rich, earthy tone that blends naturally with lush landscapes while providing full privacy."
        },
        {
            title: "White Vinyl",
            img: "/services/vinyl/white-vinyl-with-gothic-caps.avif",
            description: "The classic American look. Bright, clean, and professional for any residential property."
        },
        {
            title: "Tan Vinyl",
            img: "/services/vinyl/tan-vinyl.avif",
            description: "A softer alternative to white, offering a warm aesthetic that hides dust and debris well."
        },
        {
            title: "Semi Premium Vinyl",
            img: "/services/vinyl_fencing.avif",
            description: "Higher-grade material with reinforced structure for maximum stability and longevity."
        },
        {
            title: "Vinyl 6' to 4' Transition",
            img: "/services/vinyl/4'shadow-box-white-vinyl.avif",
            description: "Custom stepped or sloped panels to accommodate terrain changes or varying privacy needs."
        },
        {
            title: "Tan & White Mix",
            img: "/services/vinyl/tan&white.avif",
            description: "A two-tone design that adds depth and custom styling to your perimeter."
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] md:h-[90vh] w-full flex items-center overflow-hidden py-20 md:py-0">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services/vinyl_fencing.avif"
                        alt="Vinyl Fencing"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal delay={0.3} type="fade-up">
                            <div className="max-w-3xl">
                                <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 uppercase tracking-wider leading-tight">
                                    Vinyl Fencing
                                </h1>
                                <p className="text-xl md:text-2xl text-[#e4c58a] italic leading-relaxed mb-10 lg:mb-0">
                                    Maintenance-free, private, and durable. The ultimate fencing solution for modern homes and lasting curb appeal.
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

            {/* Details Section */}
            <section className="py-20 bg-[#fdfbf7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="slide-left" duration={1}>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#4c0c0c] mb-8">
                                    Why Choose Vinyl?
                                </h2>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    Vinyl fencing is the preferred choice for Florida homeowners seeking privacy without the maintenance of wood. It is five times stronger and four times more flexible than wood, meaning it won&apos;t crack or break under pressure. With a wide range of colors and styles, it provides a clean, unified look that lasts decades.
                                </p>
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[#4c0c0c] shrink-0 mt-1" size={24} />
                                            <p className="text-gray-800 font-medium">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="slide-right" duration={1}>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/services/vinyl_fencing.avif"
                                    alt="Vinyl Fence Detail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Vinyl Options Section */}
            <section
                className="w-full py-24 bg-[#fdfbf7]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        rgba(23, 23, 23, 0.03) 0,
                        rgba(23, 23, 23, 0.03) 1px,
                        transparent 0,
                        transparent 50%
                    )`,
                    backgroundSize: '20px 20px'
                }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <ScrollReveal type="fade-up">
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#4c0c0c] italic">
                                Premium Vinyl Fencing Options
                            </h2>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="h-[1px] w-20 bg-[#4c0c0c]/30"></div>
                                <div className="w-3 h-3 rounded-full bg-[#4c0c0c]"></div>
                                <div className="h-[1px] w-20 bg-[#4c0c0c]/30"></div>
                            </div>
                            <p className="text-[#4c0c0c] font-poppins italic text-xl">
                                Explore our versatile collection of vinyl styles and colors.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {options.map((option, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} type="fade-up">
                                <div
                                    className="group cursor-pointer appearance-none outline-none"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => {
                                        setSelectedOption(option.title);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            setSelectedOption(option.title);
                                        }
                                    }}
                                >
                                    {/* Image Card */}
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                        <Image
                                            src={option.img}
                                            alt={option.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#4c0c0c]/90 via-[#4c0c0c]/20 to-transparent"></div>

                                        {/* Title Overlay */}
                                        <h3 className="absolute bottom-10 left-10 text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-2xl">
                                            {option.title}
                                        </h3>

                                        {/* Hover Indicator */}
                                        <div className="absolute top-8 right-8 bg-[#e4c58a] text-[#4c0c0c] px-5 py-2 rounded-full font-bold text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                            VIEW GALLERY
                                        </div>
                                    </div>

                                    {/* Content Below */}
                                    <div className="px-4">
                                        {/* Tags */}
                                        <p className="text-xs font-black text-[#4c0c0c] uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                                            <span>PRIVACY</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]"></span>
                                            <span>DURABLE</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]"></span>
                                            <span>EASY CARE</span>
                                        </p>

                                        {/* Arrow + Title Row */}
                                        <div className="flex items-center gap-4 text-[#4c0c0c] font-bold uppercase tracking-widest text-lg transition-colors duration-300 group-hover:text-[#e4c58a]">
                                            <div className="w-10 h-[2px] bg-current transition-all duration-300 group-hover:w-16"></div>
                                            <span>{option.title}</span>
                                        </div>

                                        {/* Description (Expand on Hover) */}
                                        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 ease-in-out">
                                            <p className="mt-5 text-[#4c0c0c]/80 text-lg leading-relaxed max-w-xl pl-14 border-l-2 border-[#e4c58a]/30">
                                                {option.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* White Liner Separator */}
            <div className="h-0.5 bg-white/20 w-full" />

            {/* Contact Section */}
            <Contact showBgImage={false} />
            <ContactForm />

            {/* Gallery Modal */}
            <GalleryModal
                isOpen={!!selectedOption}
                onClose={() => setSelectedOption(null)}
                title={selectedOption || ""}
            />

            {/* Free Estimate Modal */}
            <FreeEstimateModal
                isOpen={isEstimateModalOpen}
                onClose={() => setIsEstimateModalOpen(false)}
            />
        </main>
    );
}
