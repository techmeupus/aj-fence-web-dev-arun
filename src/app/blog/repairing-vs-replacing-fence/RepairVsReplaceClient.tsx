"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Plus, Minus, Wrench, RefreshCw, CheckCircle2, AlertTriangle, Calculator, ShieldCheck } from 'lucide-react';
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

export default function RepairVsReplaceClient() {
    const post = {
        title: "Repairing vs. Replacing a Fence: How to Decide (Homeowner's Guide)",
        date: "Jul 30, 2026",
        author: "AJ Fence Team",
        image: "/blog-post/Repairing vs. Replacing a Fence.webp",
        category: "Fence Maintenance & Tips",
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Interactive Decision Tool state
    const [damagePercentage, setDamagePercentage] = useState<number>(20);
    const [fenceAgeYears, setFenceAgeYears] = useState<number>(8);
    const [failingPostsCount, setFailingPostsCount] = useState<number>(1);
    const [fenceMaterial, setFenceMaterial] = useState<string>('wood');

    const evaluateDecision = () => {
        let score = 0; // Higher score points toward replacement
        if (damagePercentage >= 25) score += 3;
        if (fenceAgeYears >= 15) score += 2;
        if (failingPostsCount >= 3) score += 3;

        if (score >= 4) {
            return {
                recommendation: "Replace the Fence",
                badge: "Replacement Highly Recommended",
                explanation: "Given the extent of structural damage, post instability, or age, repairing will likely cost more over time. Installing a modern vinyl or aluminum fence is the best long-term investment.",
                btnText: "Explore Replacement Options",
                link: "/fencing-services"
            };
        } else {
            return {
                recommendation: "Repair the Fence",
                badge: "Localized Repair Recommended",
                explanation: "Your fence remains mostly sound. Replacing isolated panels, tightening hardware, or setting single posts will extend your fence's life cost-effectively.",
                btnText: "Get Fence Repair Advice",
                link: "/contact-us"
            };
        }
    };

    const result = evaluateDecision();

    const faqs = [
        {
            question: "Is it cheaper to repair or replace a fence?",
            answer: "Repairing is usually less expensive for minor, localized damage. However, replacing the fence provides better long-term value when damage is extensive or recurring."
        },
        {
            question: "How do I know if my fence is beyond repair?",
            answer: "If multiple post foundations are unstable, more than 25% of the panels are broken/rotted, or repair costs approach the price of a new installation, replacement is the smarter choice."
        },
        {
            question: "Can one damaged fence post be replaced?",
            answer: "Yes! In many cases, excavating and replacing a single damaged or leaning post can restore the structural integrity of the fence line without replacing entire sections."
        },
        {
            question: "How long does a typical fence last?",
            answer: "Lifespan depends heavily on material and Florida climate exposure: Wood lasts 15-20 years, Vinyl lasts 20-30 years, and Aluminum fencing lasts 30-50+ years."
        },
        {
            question: "Should I repair storm damage immediately?",
            answer: "Yes. Prompt repairs prevent sagging panels from pulling down adjacent post lines and keep pets and property secure."
        },
        {
            question: "Does replacing a fence increase property value?",
            answer: "Yes. A newly installed, high-grade vinyl or ornamental aluminum fence substantially boosts home curb appeal and buyer confidence."
        },
        {
            question: "Is it worth repairing an old wood fence?",
            answer: "If an old wood fence has widespread rot, termite damage, or multiple failing posts, spending money on temporary fixes is rarely a good investment."
        },
        {
            question: "Which fence material requires the fewest repairs?",
            answer: "Aluminum and vinyl fencing require far fewer repairs than traditional wood because they resist rot, rust, insect damage, and moisture degradation."
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
                                A fence is more than just a property boundary—it provides security, privacy, safety, and curb appeal. Over time, however, even the highest-quality fences can develop problems due to weather exposure, age, accidents, pests, or general wear and tear.
                            </p>

                            <p className="mb-8">
                                When damage occurs, many homeowners ask the same fundamental question: <strong>Should I repair my fence or replace it entirely?</strong>
                            </p>

                            <p className="mb-12">
                                The answer depends on several factors, including the age of the fence, the extent of the damage, repair costs vs replacement investment, material condition, and your long-term plans for the property. This guide explains when repairing a fence makes sense, when replacement is the better investment, how costs compare, and the key warning signs every property owner should know before making a decision.
                            </p>

                            {/* Quick Comparison Table */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Repair or Replace? Quick Comparison</h2>
                            <div className="overflow-x-auto my-8">
                                <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <th className="p-4 font-bold">Factor</th>
                                            <th className="p-4 font-bold">Repair the Fence</th>
                                            <th className="p-4 font-bold">Replace the Fence</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm bg-white">
                                        <tr>
                                            <td className="p-4 font-bold">Damage Severity</td>
                                            <td className="p-4 text-green-600 font-bold">Minor or isolated (&lt; 20%)</td>
                                            <td className="p-4 text-red-500 font-bold">Extensive or widespread (&gt; 25%)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Fence Age</td>
                                            <td className="p-4">Under 10–15 years</td>
                                            <td className="p-4 font-bold text-[#4c0c0c]">Near end of expected lifespan</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Structural Condition</td>
                                            <td className="p-4 text-green-600 font-bold">Mostly sound foundation</td>
                                            <td className="p-4 text-red-500 font-bold">Multiple failing/leaning posts</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Cost Investment</td>
                                            <td className="p-4">Lower upfront cost</td>
                                            <td className="p-4">Higher initial, lower long-term upkeep</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Visual Appearance</td>
                                            <td className="p-4">Existing style remains</td>
                                            <td className="p-4 text-green-600 font-bold">Completely refreshed modern look</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Lifespan Impact</td>
                                            <td className="p-4">Extends current fence temporarily</td>
                                            <td className="p-4 text-green-600 font-bold">Starts new 20–50 year warranty</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* INTERACTIVE DECISION EVALUATOR */}
                            <div className="my-16 bg-[#4c0c0c] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-72 h-72 bg-[#e4c58a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a] flex items-center justify-center text-[#4c0c0c]">
                                            <Calculator size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-poppins text-[#e4c58a] italic">Interactive Repair vs. Replace Evaluator</h3>
                                            <p className="text-xs text-white/70">Assess your fence condition to get an instant recommendation</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 my-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">
                                                Estimated Overall Damage: <span className="text-white text-base ml-2">{damagePercentage}%</span>
                                            </label>
                                            <input
                                                type="range"
                                                min="5"
                                                max="60"
                                                step="5"
                                                value={damagePercentage}
                                                onChange={(e) => setDamagePercentage(Number(e.target.value))}
                                                className="w-full accent-[#e4c58a] cursor-pointer"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">
                                                Current Age of Fence: <span className="text-white text-base ml-2">{fenceAgeYears} Years</span>
                                            </label>
                                            <input
                                                type="range"
                                                min="1"
                                                max="30"
                                                value={fenceAgeYears}
                                                onChange={(e) => setFenceAgeYears(Number(e.target.value))}
                                                className="w-full accent-[#e4c58a] cursor-pointer"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">Number of Failing / Leaning Posts</label>
                                            <div className="flex gap-3">
                                                {[0, 1, 2, 3].map((num) => (
                                                    <button
                                                        key={num}
                                                        type="button"
                                                        onClick={() => setFailingPostsCount(num)}
                                                        className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all ${failingPostsCount === num ? 'bg-[#e4c58a] text-[#4c0c0c] border-[#e4c58a]' : 'bg-white/10 text-white border-white/20'}`}
                                                    >
                                                        {num === 3 ? '3+' : num}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#e4c58a] mb-2">Fence Material</label>
                                            <select
                                                value={fenceMaterial}
                                                onChange={(e) => setFenceMaterial(e.target.value)}
                                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e4c58a]"
                                            >
                                                <option value="wood" className="text-gray-900">Wood Fencing</option>
                                                <option value="vinyl" className="text-gray-900">Vinyl Fencing</option>
                                                <option value="aluminum" className="text-gray-900">Aluminum Fencing</option>
                                                <option value="chainlink" className="text-gray-900">Chain Link Fencing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-6 rounded-2xl">
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-[#e4c58a] font-bold block">{result.badge}</span>
                                            <h4 className="text-2xl font-extrabold text-white font-poppins mt-1">
                                                {result.recommendation}
                                            </h4>
                                            <p className="text-xs text-white/80 mt-1 max-w-xl">{result.explanation}</p>
                                        </div>
                                        <Link
                                            href={result.link}
                                            className="bg-[#e4c58a] text-[#4c0c0c] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors duration-300 shadow-lg flex-shrink-0"
                                        >
                                            {result.btnText}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Section 1: When Repair makes sense */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic flex items-center gap-3">
                                <Wrench className="text-[#e4c58a]" /> When Is Fence Repair the Better Choice?
                            </h2>
                            <p className="mb-6">
                                Repairing a fence is often the most cost-effective solution when the damage is limited and the overall structure remains in good condition.
                            </p>
                            <p className="mb-6">
                                Common situations where localized repairs are ideal include:
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>One or two isolated damaged panels from fallen branches</li>
                                <li>Loose pickets or surface nails needing replacement</li>
                                <li>Minor localized storm damage</li>
                                <li>Broken gate hinges, latches, or unaligned gate drop rods</li>
                                <li>Single leaning post needing fresh concrete</li>
                                <li>Small surface rust spots on metal or aluminum pickets</li>
                                <li>Isolated cracked vinyl fence slats that can be swapped</li>
                            </ul>

                            {/* Section 2: When Replacement makes sense */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic flex items-center gap-3">
                                <RefreshCw className="text-[#e4c58a]" /> When Fence Replacement Is the Better Investment
                            </h2>
                            <p className="mb-6">
                                While repairs temporarily fix minor problems, full fence replacement becomes much more economical when structural damage is widespread or recurring:
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 my-8">
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <AlertTriangle className="text-red-500" size={20} /> Multiple Rotting Posts
                                    </h3>
                                    <p className="text-sm text-gray-600">Posts are the structural foundation. When several posts rot or collapse, patching individual panels won't stop systemic collapse.</p>
                                </div>
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <AlertTriangle className="text-red-500" size={20} /> Severe Termite & Pest Damage
                                    </h3>
                                    <p className="text-sm text-gray-600">Wood fences infested by termites or wood rot fungus compromise overall safety and require total replacement.</p>
                                </div>
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <AlertTriangle className="text-red-500" size={20} /> Widespread Storm Destruction
                                    </h3>
                                    <p className="text-sm text-gray-600">After major Florida hurricanes or high winds, widespread structural bending makes full replacement far more practical.</p>
                                </div>
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-2 flex items-center gap-2">
                                        <AlertTriangle className="text-red-500" size={20} /> High Cumulative Repair Costs
                                    </h3>
                                    <p className="text-sm text-gray-600">If annual repair bills approach 50% of a brand-new installation, upgrading to low-maintenance vinyl or aluminum saves money long-term.</p>
                                </div>
                            </div>

                            {/* Cost Breakdown Tables */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Average Cost Comparisons</h2>
                            <div className="grid md:grid-cols-2 gap-8 my-8">
                                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-4">Average Fence Repair Costs</h3>
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <tr>
                                                <th className="p-3">Repair Type</th>
                                                <th className="p-3">Typical Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr><td className="p-3">Replace Board / Picket</td><td className="p-3 font-bold">$150 – $400</td></tr>
                                            <tr><td className="p-3">Replace Single Post</td><td className="p-3 font-bold">$250 – $700</td></tr>
                                            <tr><td className="p-3">Gate Repair / Adjustment</td><td className="p-3 font-bold">$150 – $600</td></tr>
                                            <tr><td className="p-3">Vinyl Panel Repair</td><td className="p-3 font-bold">$250 – $700</td></tr>
                                            <tr><td className="p-3">Aluminum Section Repair</td><td className="p-3 font-bold">$300 – $800</td></tr>
                                            <tr><td className="p-3">Hardware Replacement</td><td className="p-3 font-bold">$75 – $250</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
                                    <h3 className="text-xl font-bold text-[#4c0c0c] mb-4">Average Fence Replacement Costs</h3>
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <tr>
                                                <th className="p-3">Fence Material</th>
                                                <th className="p-3">Installed Cost / Linear Ft</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr><td className="p-3">Wood Fencing</td><td className="p-3 font-bold">$30 – $55 / ft</td></tr>
                                            <tr><td className="p-3">Vinyl Fencing</td><td className="p-3 font-bold">$35 – $65 / ft</td></tr>
                                            <tr><td className="p-3">Aluminum Fencing</td><td className="p-3 font-bold">$40 – $75 / ft</td></tr>
                                            <tr><td className="p-3">Chain-Link Fencing</td><td className="p-3 font-bold">$20 – $45 / ft</td></tr>
                                            <tr><td className="p-3">Composite Fencing</td><td className="p-3 font-bold">$50 – $90 / ft</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Lifespan Table & Links */}
                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Expected Lifespan by Material</h2>
                            <p className="mb-6">
                                If your existing fence is approaching the end of its expected operational lifespan, upgrading to a durable material like <Link href="/fencing-services/vinyl" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a]">low-maintenance vinyl fencing</Link> or <Link href="/fencing-services/aluminum" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a]">powder-coated aluminum fencing</Link> is often the smartest financial choice. Read our guide on <Link href="/blog/fence-installation-cost-polk-hillsborough" className="text-[#4c0c0c] font-bold underline decoration-[#e4c58a] hover:text-[#e4c58a]">fence installation costs in Polk & Hillsborough</Link> for detailed budgeting info.
                            </p>

                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <th className="p-4 font-bold">Material</th>
                                            <th className="p-4 font-bold">Typical Lifespan</th>
                                            <th className="p-4 font-bold">Florida Weather Vulnerability</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm bg-white">
                                        <tr>
                                            <td className="p-4 font-bold">Wood</td>
                                            <td className="p-4 text-amber-700 font-bold">15–20 Years</td>
                                            <td className="p-4 text-red-500 font-bold">High (Rot, humidity & termite risk)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Vinyl</td>
                                            <td className="p-4 text-green-600 font-bold">20–30 Years</td>
                                            <td className="p-4 text-green-600 font-bold">Low (Moisture & rot proof)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Aluminum</td>
                                            <td className="p-4 font-bold text-[#4c0c0c]">30–50 Years</td>
                                            <td className="p-4 text-green-600 font-bold">Very Low (Rust & corrosion proof)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Chain Link</td>
                                            <td className="p-4">20–30 Years</td>
                                            <td className="p-4">Moderate (Galvanized metal coating)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">Composite</td>
                                            <td className="p-4">25–35 Years</td>
                                            <td className="p-4 text-green-600 font-bold">Low (Rot resistant)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Final Callout */}
                            <div className="bg-[#fdfbf7] border-l-4 border-[#e4c58a] p-8 rounded-r-3xl my-16 shadow-lg">
                                <h3 className="text-2xl font-bold font-poppins text-[#4c0c0c] mb-4">Need an Expert On-Site Fence Evaluation?</h3>
                                <p className="mb-4 text-gray-700">
                                    Still unsure whether your fence needs a quick repair or a full replacement? The team at AJ Fence Manufacturing provides honest, professional evaluations throughout Polk and Hillsborough counties.
                                </p>
                                <p className="font-bold text-[#4c0c0c]">
                                    Contact AJ Fence Manufacturing today for a free on-site consultation and written estimate!
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
                                    {["Fence Repair", "Fence Replacement", "Home Improvement", "Vinyl Fence", "Aluminum Fence"].map(tag => (
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
                        <Link href="/blog/privacy-vs-security-fence" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Comparison</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Privacy vs. Security Fences: Which Is Right for Your Property?</h4>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
