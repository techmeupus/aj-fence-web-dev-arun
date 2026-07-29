"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Plus, Minus, ShieldCheck, Lock, Eye, Compass, CheckCircle2, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-[#e4c58a]/20 last:border-0">
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full py-6 text-left group"
            >
                <h4 className={`text-lg md:text-xl font-bold font-poppins transition-colors duration-300 ${isOpen ? 'text-[#e4c58a]' : 'text-[#4c0c0c] group-hover:text-[#e4c58a]'}`}>
                    {question}
                </h4>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-[#e4c58a]/30 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#e4c58a] text-[#4c0c0c]' : 'bg-transparent text-[#e4c58a]'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function PrivacyVsSecurityClient() {
    const post = {
        title: "Privacy vs. Security Fences: Which Does Your Property Need? A Complete Homeowner's Guide",
        date: "Jul 30, 2026",
        author: "AJ Fence Team",
        image: "/blog-post/Privacy vs. Security Fences Which Does Your Property Need.jpg",
        category: "Comparison Guide",
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Interactive Decision Helper Quiz state
    const [privacyPriority, setPrivacyPriority] = useState<number>(3); // 1 to 5
    const [securityPriority, setSecurityPriority] = useState<number>(3); // 1 to 5
    const [propertyType, setPropertyType] = useState<string>('residential');
    const [hasPoolOrPets, setHasPoolOrPets] = useState<boolean>(true);

    const getRecommendation = () => {
        if (privacyPriority >= 4 && securityPriority <= 2) {
            return {
                title: "100% Privacy Fence (Vinyl, Wood or Composite)",
                badge: "Maximum Privacy Recommended",
                desc: "Your primary goal is creating a secluded sanctuary free from neighbor eyes and street noise. Solid vinyl or composite fencing will best suit your home.",
                link: "/fencing-services/vinyl"
            };
        } else if (securityPriority >= 4 && privacyPriority <= 2) {
            return {
                title: "High-Security Ornamental Fence (Aluminum or Steel)",
                badge: "Maximum Security Recommended",
                desc: "You prioritize deterrence, perimeter visibility for cameras, and maximum physical durability. Powder-coated ornamental aluminum or steel fencing is ideal.",
                link: "/fencing-services/aluminum"
            };
        } else {
            return {
                title: "Hybrid Privacy & Security Solution",
                badge: "Balanced Hybrid Recommended",
                desc: "You need both safety and visual privacy! Heavy-duty vinyl fencing with self-latching security gates or aluminum fencing with privacy inserts will give you the best of both worlds.",
                link: "/fencing-services"
            };
        }
    };

    const rec = getRecommendation();

    const faqs = [
        {
            question: "Which fence offers the most privacy?",
            answer: "Solid vinyl, wood, and composite fences provide the highest level of privacy by completely blocking visibility into your property."
        },
        {
            question: "Which fence provides better security?",
            answer: "Aluminum, steel, and reinforced chain-link fences generally offer stronger protection against unauthorized access while maintaining clear camera sightlines."
        },
        {
            question: "Can a privacy fence improve security?",
            answer: "Yes. A privacy fence can discourage opportunistic trespassing by limiting visibility into your property, though it is not a substitute for a purpose-built security fence."
        },
        {
            question: "Which fence lasts longer?",
            answer: "High-quality aluminum, steel, vinyl, and composite fences can last for 30 to 50+ years with proper installation and routine maintenance."
        },
        {
            question: "Which fence requires the least maintenance?",
            answer: "Aluminum and vinyl fences are among the easiest to maintain because they naturally resist rust, rot, decay, and insect damage."
        },
        {
            question: "Can I combine privacy and security features?",
            answer: "Absolutely! Many homeowners choose reinforced vinyl privacy fences with heavy-duty locking gates, while commercial properties combine ornamental aluminum fencing with controlled access systems."
        }
    ];

    return (
        <main className="bg-white min-h-screen font-sans">
            {/* Post Hero */}
            <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#4c0c0c] overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal type="fade-up">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#e4c58a] font-bold uppercase tracking-widest text-xs mb-8 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={16} /> Back to Blog
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-[#e4c58a] text-[#4c0c0c] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 text-white/80 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#e4c58a] flex items-center justify-center text-[#4c0c0c]">
                                    <User size={18} />
                                </div>
                                <span className="font-bold">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#e4c58a]" />
                                <span>{post.date}</span>
                            </div>
                            <div className="ml-auto flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Share:</span>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all"><Facebook size={14} /></button>
                                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all"><Twitter size={14} /></button>
                                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all"><Linkedin size={14} /></button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </header>

            {/* Post Content */}
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal type="fade-up" delay={0.2}>
                        <div className="prose prose-lg prose-headings:text-[#4c0c0c] prose-a:text-[#e4c58a] max-w-none text-gray-600 leading-relaxed font-sans">
                            <p className="mb-8 text-xl font-medium text-gray-800 leading-relaxed">
                                Installing a fence is one of the most effective ways to improve your property’s functionality, appearance, and overall market value. However, choosing the right type of fence isn’t always straightforward. Many property owners find themselves deciding between a <strong>privacy fence</strong> and a <strong>security fence</strong>—two options engineered for distinctly different goals.
                            </p>

                            <p className="mb-8">
                                While privacy fences are intended to block visibility and create secluded outdoor sanctuaries, security fences focus on deterring unauthorized access and protecting people, pets, and assets. In some cases, a fence can provide both privacy and security, but understanding the primary purpose of each style helps you make the best long-term investment.
                            </p>

                            <p className="mb-12">
                                This comprehensive guide compares privacy and security fences, explores their unique advantages and disadvantages, reviews common materials like <Link href="/fencing-services/vinyl" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a] transition-colors">vinyl privacy fencing</Link> and <Link href="/fencing-services/aluminum" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a] transition-colors">aluminum security fencing</Link>, and explains how to choose the right solution for your residential or commercial property.
                            </p>

                            {/* Quick Comparison Table */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Privacy Fence vs. Security Fence: Quick Comparison</h2>
                            <div className="overflow-x-auto my-8">
                                <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <th className="p-4 font-bold">Feature</th>
                                            <th className="p-4 font-bold">Privacy Fence</th>
                                            <th className="p-4 font-bold">Security Fence</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm bg-white">
                                        <tr>
                                            <td className="p-4 font-bold">Primary Purpose</td>
                                            <td className="p-4">Block visibility & street noise</td>
                                            <td className="p-4 font-bold text-[#4c0c0c]">Prevent unauthorized access</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Typical Height</td>
                                            <td className="p-4">6–8 ft</td>
                                            <td className="p-4">6–10+ ft</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Visibility Level</td>
                                            <td className="p-4 text-green-600 font-bold">Low (0% to 5%)</td>
                                            <td className="p-4 text-amber-600">High to Moderate (Open pickets)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Best Materials</td>
                                            <td className="p-4">Vinyl, Wood, Composite</td>
                                            <td className="p-4">Aluminum, Steel, Chain Link</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Ideal Applications</td>
                                            <td className="p-4">Backyards, Pools, Patios</td>
                                            <td className="p-4">Businesses, Warehouses, Gated Lots</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Maintenance Level</td>
                                            <td className="p-4">Moderate to Low</td>
                                            <td className="p-4 text-green-600 font-bold">Very Low</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Security Protection</td>
                                            <td className="p-4">Moderate (Visual barrier)</td>
                                            <td className="p-4 text-green-600 font-bold">High (Physical anti-climb)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* INTERACTIVE QUIZ TOOL */}
                            <div className="my-16 bg-[#4c0c0c] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-72 h-72 bg-[#e4c58a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a] flex items-center justify-center text-[#4c0c0c]">
                                            <Compass size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-poppins text-[#e4c58a] italic">Interactive Property Fence Recommender</h3>
                                            <p className="text-xs text-white/70">Find out whether Privacy or Security fencing matches your needs</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 my-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">
                                                Importance of Visual Privacy (1 to 5): <span className="text-white text-base ml-2">{privacyPriority}</span>
                                            </label>
                                            <input
                                                type="range"
                                                min="1"
                                                max="5"
                                                value={privacyPriority}
                                                onChange={(e) => setPrivacyPriority(Number(e.target.value))}
                                                className="w-full accent-[#e4c58a] cursor-pointer"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">
                                                Importance of Physical Security (1 to 5): <span className="text-white text-base ml-2">{securityPriority}</span>
                                            </label>
                                            <input
                                                type="range"
                                                min="1"
                                                max="5"
                                                value={securityPriority}
                                                onChange={(e) => setSecurityPriority(Number(e.target.value))}
                                                className="w-full accent-[#e4c58a] cursor-pointer"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">Property Type</label>
                                            <select
                                                value={propertyType}
                                                onChange={(e) => setPropertyType(e.target.value)}
                                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e4c58a]"
                                            >
                                                <option value="residential" className="text-gray-900">Residential Home & Backyard</option>
                                                <option value="commercial" className="text-gray-900">Commercial / Business / Office</option>
                                                <option value="industrial" className="text-gray-900">Industrial / Facility / Warehouse</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">Pool or Small Pets On Site?</label>
                                            <div className="flex gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setHasPoolOrPets(true)}
                                                    className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all ${hasPoolOrPets ? 'bg-[#e4c58a] text-[#4c0c0c] border-[#e4c58a]' : 'bg-white/10 text-white border-white/20'}`}
                                                >
                                                    Yes
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setHasPoolOrPets(false)}
                                                    className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all ${!hasPoolOrPets ? 'bg-[#e4c58a] text-[#4c0c0c] border-[#e4c58a]' : 'bg-white/10 text-white border-white/20'}`}
                                                >
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-6 rounded-2xl">
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-[#e4c58a] font-bold block">{rec.badge}</span>
                                            <h4 className="text-2xl font-extrabold text-white font-poppins mt-1">
                                                {rec.title}
                                            </h4>
                                            <p className="text-xs text-white/80 mt-1 max-w-xl">{rec.desc}</p>
                                        </div>
                                        <Link
                                            href={rec.link}
                                            className="bg-[#e4c58a] text-[#4c0c0c] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors duration-300 shadow-lg flex-shrink-0"
                                        >
                                            Explore Material Options
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Section 1: Privacy Fence */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic flex items-center gap-3">
                                <Eye className="text-[#e4c58a]" /> What Is a Privacy Fence?
                            </h2>
                            <p className="mb-6">
                                A privacy fence is designed to create a secluded outdoor space by limiting visibility into your property. These fences use closely spaced vertical boards, tongue-and-groove vinyl slats, or solid composite panels to prevent neighbors, pedestrians, and passersby from seeing into your yard.
                            </p>
                            <p className="mb-6">
                                Privacy fencing is commonly installed around backyards, swimming pools, outdoor dining patios, gardens, and children's play areas.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Benefits of a Privacy Fence</h3>
                            <div className="grid sm:grid-cols-2 gap-6 my-8">
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h4 className="font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="text-[#e4c58a]" size={18} /> Increased Seclusion
                                    </h4>
                                    <p className="text-sm text-gray-600">Shields outdoor living spaces from nearby homes so you can relax without feeling observed.</p>
                                </div>
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h4 className="font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="text-[#e4c58a]" size={18} /> Noise Dampening
                                    </h4>
                                    <p className="text-sm text-gray-600">Solid dense barriers absorb and deflect street traffic noise, barking dogs, and neighborhood commotion.</p>
                                </div>
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h4 className="font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="text-[#e4c58a]" size={18} /> Child & Pet Containment
                                    </h4>
                                    <p className="text-sm text-gray-600">Encloses pets securely while blocking visual triggers (like walking dogs or cars) that cause barking.</p>
                                </div>
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h4 className="font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="text-[#e4c58a]" size={18} /> Wind Protection
                                    </h4>
                                    <p className="text-sm text-gray-600">Blocks strong wind gusts, creating a warmer, more comfortable backyard microclimate.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Common Privacy Fence Materials</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-3">
                                <li><strong>Vinyl:</strong> The most popular choice due to zero painting requirements, UV resistance, and rot-proof performance. Check out our <Link href="/fencing-services/vinyl" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a]">vinyl privacy fence options</Link>.</li>
                                <li><strong>Wood:</strong> Offers a classic, natural aesthetic with high customization, though it demands regular staining or sealing. Learn more in our comparison on <Link href="/blog/vinyl-vs-wood-privacy-fence" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a]">vinyl vs. wood privacy fencing</Link>.</li>
                                <li><strong>Composite:</strong> Premium wood-grained engineered material that offers rich organic visuals without wood rot or splintering.</li>
                            </ul>

                            {/* Section 2: Security Fence */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic flex items-center gap-3">
                                <ShieldCheck className="text-[#e4c58a]" /> What Is a Security Fence?
                            </h2>
                            <p className="mb-6">
                                A security fence is specifically engineered to protect property by discouraging trespassing, forced entry, and theft. These fences prioritize structural strength, tamper resistance, and open perimeter visibility over total visual screening.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Benefits of a Security Fence</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-3">
                                <li><strong>Physical Intrusion Barrier:</strong> Tall panels with anti-climb pickets or spear tops physically stop intruders.</li>
                                <li><strong>Unobstructed Security Camera Line-of-Sight:</strong> Open picket designs allow property owners, guards, and security cameras to monitor activity outside the boundary.</li>
                                <li><strong>Extreme Mechanical Durability:</strong> Metal fencing withstands weather exposure, wind load, and physical impacts without warping. Explore our <Link href="/fencing-services/aluminum" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a]">commercial & residential aluminum fencing</Link>.</li>
                            </ul>

                            {/* Pros and Cons Breakdown */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Pros & Cons Breakdown</h2>
                            <div className="grid md:grid-cols-2 gap-8 my-8">
                                <div className="bg-[#fdfbf7] p-6 rounded-3xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-4 flex items-center gap-2">
                                        <Lock size={20} className="text-[#e4c58a]" /> Privacy Fence Pros & Cons
                                    </h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Advantages</p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
                                        <li>100% visual screening</li>
                                        <li>Substantial noise reduction</li>
                                        <li>High aesthetic curb appeal</li>
                                    </ul>
                                    <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Disadvantages</p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                        <li>Blocks outward views</li>
                                        <li>Acts as a sail under high hurricane winds</li>
                                    </ul>
                                </div>

                                <div className="bg-[#fdfbf7] p-6 rounded-3xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-4 flex items-center gap-2">
                                        <ShieldCheck size={20} className="text-[#e4c58a]" /> Security Fence Pros & Cons
                                    </h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-2">Advantages</p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
                                        <li>Superior anti-climb protection</li>
                                        <li>Low wind resistance (great in Florida storms)</li>
                                        <li>30–50+ year lifespan</li>
                                    </ul>
                                    <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Disadvantages</p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                        <li>No visual blockage from street</li>
                                        <li>Does not absorb noise</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Maintenance Comparison Table */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Maintenance Level Comparison</h2>
                            <div className="overflow-x-auto my-8">
                                <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <th className="p-4 font-bold">Fencing Material</th>
                                            <th className="p-4 font-bold">Maintenance Level</th>
                                            <th className="p-4 font-bold">Recommended Upkeep Routine</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm bg-white">
                                        <tr>
                                            <td className="p-4 font-bold">Vinyl</td>
                                            <td className="p-4 text-green-600 font-bold">Low</td>
                                            <td className="p-4">Occasional soap & water rinse</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Aluminum</td>
                                            <td className="p-4 text-green-600 font-bold">Low</td>
                                            <td className="p-4">Annual hinge check & washing</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Composite</td>
                                            <td className="p-4 text-green-600 font-bold">Low</td>
                                            <td className="p-4">Hose down twice a year</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Chain Link</td>
                                            <td className="p-4 text-green-600 font-bold">Low</td>
                                            <td className="p-4">Inspect tension ties and gate latches</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Wood</td>
                                            <td className="p-4 text-red-500 font-bold">High</td>
                                            <td className="p-4">Annual sealing, staining & rot inspection</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Hybrid Solutions */}
                            <div className="bg-[#fdfbf7] border-l-4 border-[#e4c58a] p-8 rounded-r-3xl my-16 shadow-lg">
                                <h3 className="text-2xl font-bold font-poppins text-[#4c0c0c] mb-4">Can You Have Both Privacy and Security?</h3>
                                <p className="mb-4 text-gray-700">
                                    Yes! Many modern property owners combine privacy and security by installing commercial-grade 6ft vinyl privacy fences with reinforced post inserts, or heavy-duty aluminum ornamental fencing paired with privacy slats or lockable automatic gate operators.
                                </p>
                                <p className="font-bold text-[#4c0c0c]">
                                    Unsure which material fits your layout? Contact AJ Fence Manufacturing to discuss custom hybrid privacy-security fence installations tailored to your property.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* FAQ Section */}
                    <ScrollReveal type="fade-up" delay={0.2}>
                        <div className="mt-16 pt-16 border-t border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#4c0c0c] mb-8 italic">Frequently Asked Questions</h2>
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-[#e4c58a]/20">
                                {faqs.map((faq, index) => (
                                    <FaqItem
                                        key={index}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Tags & Bottom Share */}
                    <div className="mt-16 pt-16 border-t border-gray-100 italic">
                        <div className="flex flex-wrap items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Tags:</span>
                                <div className="flex flex-wrap gap-2">
                                    {["Privacy Fence", "Security Fence", "Home Security", "Vinyl Fencing", "Aluminum Fencing"].map(tag => (
                                        <span key={tag} className="text-sm text-[#4c0c0c] font-medium px-3 py-1 bg-[#fdfbf7] rounded-lg">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[#4c0c0c] font-bold uppercase tracking-widest text-xs border-2 border-[#e4c58a] px-6 py-3 rounded-full hover:bg-[#e4c58a] transition-all">
                                <Share2 size={16} /> Share This Article
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="pb-24 bg-[#fdfbf7]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 text-center">
                    <h3 className="text-3xl font-bold font-poppins text-[#4c0c0c] mb-12 italic">You Might Also Like</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link href="/blog/aluminum-fence-installation-lakeland-fl" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Guide</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Aluminum Fence Installation in Lakeland, FL</h4>
                        </Link>
                        <Link href="/blog/vinyl-vs-wood-privacy-fence" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Comparison</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Vinyl vs. Wood: Which Privacy Fence Suits You?</h4>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
