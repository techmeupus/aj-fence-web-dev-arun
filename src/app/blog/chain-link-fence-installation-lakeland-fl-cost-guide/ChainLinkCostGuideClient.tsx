"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Calendar, 
    User, 
    ChevronLeft, 
    Share2, 
    Plus, 
    Minus, 
    CheckCircle2, 
    Calculator, 
    ShieldCheck,
    DollarSign,
    Ruler,
    MapPin,
    Phone,
    ArrowRight,
    FileText,
    Wrench,
    Clock,
    AlertCircle,
    Building2,
    Layers,
    Compass,
    Sparkles
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-[#e4c58a]/20 last:border-0">
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full py-6 text-left group focus:outline-none"
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
                        <p className="text-gray-600 pb-6 leading-relaxed text-base md:text-lg">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ChainLinkCostGuideClient() {
    const post = {
        title: "Chain Link Fence Installation in Lakeland, FL: A Homeowner's Guide to Cost & Process",
        date: "August 14, 2026",
        author: "AJ Fence Team, Lakeland, FL",
        image: "/blog-post/chain link cost.webp",
        category: "Cost & Process Guide",
        readTime: "6 min read"
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Interactive Cost Estimator State
    const [linearFeet, setLinearFeet] = useState<number>(150);
    const [fenceHeight, setFenceHeight] = useState<string>("6");
    const [coatingType, setCoatingType] = useState<string>("vinyl-black");
    const [walkGateCount, setWalkGateCount] = useState<number>(1);
    const [driveGateCount, setDriveGateCount] = useState<number>(0);
    const [removeOldFence, setRemoveOldFence] = useState<boolean>(false);

    // Calculate dynamic cost estimates
    const calculateEstimatedCost = () => {
        let basePerFt = 15; // default 4ft galvanized
        if (fenceHeight === "4") basePerFt = 15;
        if (fenceHeight === "6") basePerFt = 22;
        if (fenceHeight === "8") basePerFt = 30;

        // Coating multiplier / add-on
        if (coatingType === "vinyl-black" || coatingType === "vinyl-green") {
            basePerFt += 4;
        }

        let totalMaterialsAndLabor = linearFeet * basePerFt;

        // Demolition
        if (removeOldFence) {
            totalMaterialsAndLabor += linearFeet * 4;
        }

        // Gates
        const walkGatesTotal = walkGateCount * 250;
        const driveGatesTotal = driveGateCount * 650;

        const grandTotal = totalMaterialsAndLabor + walkGatesTotal + driveGatesTotal;

        const lowEst = Math.round(grandTotal * 0.90);
        const highEst = Math.round(grandTotal * 1.10);

        return {
            low: lowEst,
            high: highEst,
            avgPerFt: (grandTotal / linearFeet).toFixed(2)
        };
    };

    const costEst = calculateEstimatedCost();

    const faqs = [
        {
            question: "How much does a chain link fence cost for an average Lakeland backyard?",
            answer: "A typical 150-linear-foot backyard at 6 feet high costs roughly $2,200-$4,000 installed, depending on coating and gate count. Larger commercial runs or 8-foot security fencing cost more per foot."
        },
        {
            question: "How long does chain link fence installation take?",
            answer: "Most residential chain link installations are completed in one day once posts are set. Larger properties, multiple gates, or commercial-grade fencing can take two to three days."
        },
        {
            question: "Is chain link or vinyl-coated chain link better for Florida weather?",
            answer: "Vinyl-coated mesh resists Central Florida's humidity and UV exposure slightly better than bare galvanized steel and holds its color longer, though both options are built to handle the local climate."
        },
        {
            question: "Do I need a survey before installing a chain link fence?",
            answer: "A property line survey helps avoid boundary disputes with neighbors and is often required for permitting. If you don't have one on file, your local property appraiser's site can sometimes help locate boundary records."
        },
        {
            question: "Does AJ Fence serve both Polk and Hillsborough County?",
            answer: "Yes. AJ Fence installs residential and commercial chain link fencing throughout Polk County (863-816-3117) and Hillsborough County (813-239-4122) from our Lakeland location."
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Free On-Site Estimate",
            desc: "We walk your property in Lakeland, measure exact linear footage, and evaluate height, gate placement, and mesh coating preferences."
        },
        {
            number: "02",
            title: "Utility Locate (Call 811)",
            desc: "We schedule Florida utility locating services before digging to ensure post holes safely avoid all underground water, gas, and power lines."
        },
        {
            number: "03",
            title: "Permit & HOA Verification",
            desc: "We confirm all local municipal permit requirements and review any HOA covenant restrictions before scheduling installation day."
        },
        {
            number: "04",
            title: "Layout & Post Hole Digging",
            desc: "Our installation crew precisely stakes post locations along your property boundaries and digs post holes to proper Florida depth standards."
        },
        {
            number: "05",
            title: "Setting Posts in Concrete",
            desc: "Terminal, corner, and line posts are set perfectly plumb in heavy-duty concrete footings and left to fully cure for maximum structural strength."
        },
        {
            number: "06",
            title: "Installing Top Rail & Mesh",
            desc: "Once concrete cures, top rails are mounted and chain link fabric is stretched tight using commercial tension bars and tied down firmly."
        },
        {
            number: "07",
            title: "Hanging & Aligning Gates",
            desc: "Walk gates and double-drive gates are hung, leveled, and fitted with smooth latches and drop rods for seamless daily access."
        },
        {
            number: "08",
            title: "Final Walkthrough & Site Cleanup",
            desc: "We thoroughly clean up the job site, remove construction debris, and inspect every foot of the finished fence line with you."
        }
    ];

    return (
        <main className="bg-white min-h-screen font-sans">
            {/* Hero Header */}
            <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#4c0c0c] overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#4c0c0c] via-[#4c0c0c]/80 to-transparent" />
                
                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal type="fade-up">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#e4c58a] font-bold uppercase tracking-widest text-xs mb-8 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={16} /> Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="bg-[#e4c58a] text-[#4c0c0c] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                {post.category}
                            </span>
                            <span className="bg-white/10 text-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5">
                                <Clock size={14} className="text-[#e4c58a]" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/80 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#e4c58a] flex items-center justify-center text-[#4c0c0c] font-bold">
                                    <User size={18} />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">{post.author}</p>
                                    <p className="text-xs text-white/60">Local Fence Specialist</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white/70 ml-auto sm:ml-0">
                                <Calendar size={16} className="text-[#e4c58a]" />
                                <span>Last Updated: {post.date}</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </header>

            {/* Main Content Article */}
            <article className="py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal type="fade-up">
                        {/* Executive Summary Callout */}
                        <div className="bg-[#fdfbf7] border-l-4 border-[#e4c58a] p-6 md:p-8 rounded-r-3xl mb-12 shadow-md">
                            <h3 className="text-xl font-bold font-poppins text-[#4c0c0c] mb-3 flex items-center gap-2">
                                <Sparkles className="text-[#e4c58a]" size={22} /> Key Summary & Quick Takeaways
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                                <strong>Chain link fence installation in Lakeland, FL</strong> typically costs <strong>$10–$40 per linear foot installed</strong>, with most residential backyards running <strong>$2,000–$4,500</strong> depending on height, coating, and gate options.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-[#4c0c0c]">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                                    <span>Average Backyard Cost: $2,200 – $4,000</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                                    <span>Standard Install Time: 1 Day</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                                    <span>Black/Green Vinyl Option: +$3–$5/ft</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                                    <span>Service Coverage: Polk & Hillsborough County</span>
                                </li>
                            </ul>
                        </div>

                        {/* Intro Prose */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p className="text-lg md:text-xl font-medium text-[#4c0c0c]">
                                Chain link fence installation in Lakeland, FL typically costs $10-$40 per linear foot installed, with most residential backyards running $2,000-$4,500 depending on height, coating, and gate options. A standard 4-6 foot residential install takes AJ Fence&apos;s crew about one day, start to finish, once posts are set and mesh is stretched. Below, we break down real Lakeland-area pricing, what drives your final quote, and exactly what to expect from the first site visit to the final walkthrough.
                            </p>
                            <p>
                                If you&apos;re comparing quotes from chain link fence installers near you in Polk or Hillsborough County, this guide gives you the numbers and process details to know what a fair estimate looks like.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Interactive Estimator Widget Section */}
                    <ScrollReveal type="fade-up" delay={0.1}>
                        <div className="my-16 bg-gradient-to-br from-[#4c0c0c] to-[#2d0707] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-[#e4c58a]/30">
                            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-64 h-64 bg-[#e4c58a]/10 rounded-full blur-3xl pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#e4c58a] text-[#4c0c0c] flex items-center justify-center font-bold">
                                        <Calculator size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white italic">
                                            Lakeland Chain Link Cost Calculator
                                        </h3>
                                        <p className="text-xs md:text-sm text-[#e4c58a]">Estimate your chain link fence installation cost in seconds</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                                    {/* Left Controls */}
                                    <div className="space-y-6">
                                        {/* Linear Feet Slider */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                                    <Ruler size={16} className="text-[#e4c58a]" /> Fence Length (Linear Feet)
                                                </label>
                                                <span className="text-lg font-bold text-[#e4c58a] font-poppins">{linearFeet} FT</span>
                                            </div>
                                            <input 
                                                type="range" 
                                                min="50" 
                                                max="500" 
                                                step="10"
                                                value={linearFeet} 
                                                onChange={(e) => setLinearFeet(Number(e.target.value))}
                                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#e4c58a]"
                                            />
                                            <div className="flex justify-between text-xs text-white/50 mt-1">
                                                <span>50 ft</span>
                                                <span>250 ft</span>
                                                <span>500 ft</span>
                                            </div>
                                        </div>

                                        {/* Height Choice */}
                                        <div>
                                            <label className="block text-sm font-bold text-white mb-2">Fence Height</label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {[
                                                    { id: "4", label: "4 Feet", desc: "Front / Low" },
                                                    { id: "6", label: "6 Feet", desc: "Standard Rear" },
                                                    { id: "8", label: "8 Feet", desc: "Commercial" }
                                                ].map((h) => (
                                                    <button
                                                        key={h.id}
                                                        type="button"
                                                        onClick={() => setFenceHeight(h.id)}
                                                        className={`p-3 rounded-xl border text-center transition-all ${
                                                            fenceHeight === h.id 
                                                                ? 'bg-[#e4c58a] text-[#4c0c0c] font-bold border-[#e4c58a]' 
                                                                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                                                        }`}
                                                    >
                                                        <div className="text-sm">{h.label}</div>
                                                        <div className="text-[10px] opacity-80">{h.desc}</div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Coating Choice */}
                                        <div>
                                            <label className="block text-sm font-bold text-white mb-2">Mesh Coating</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[
                                                    { id: "galvanized", label: "Galvanized", desc: "Silver Steel" },
                                                    { id: "vinyl-black", label: "Black Vinyl", desc: "Popular" },
                                                    { id: "vinyl-green", label: "Green Vinyl", desc: "Landscape" }
                                                ].map((c) => (
                                                    <button
                                                        key={c.id}
                                                        type="button"
                                                        onClick={() => setCoatingType(c.id)}
                                                        className={`p-2.5 rounded-xl border text-center transition-all ${
                                                            coatingType === c.id 
                                                                ? 'bg-[#e4c58a] text-[#4c0c0c] font-bold border-[#e4c58a]' 
                                                                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                                                        }`}
                                                    >
                                                        <div className="text-xs">{c.label}</div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Gates & Demolition */}
                                        <div className="grid grid-cols-2 gap-4 pt-2">
                                            <div>
                                                <label className="text-xs font-bold text-white block mb-1">Walk Gates ($250/ea)</label>
                                                <select 
                                                    value={walkGateCount}
                                                    onChange={(e) => setWalkGateCount(Number(e.target.value))}
                                                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl p-2 text-sm focus:outline-none focus:border-[#e4c58a]"
                                                >
                                                    <option value={0} className="text-black">0 Gates</option>
                                                    <option value={1} className="text-black">1 Gate</option>
                                                    <option value={2} className="text-black">2 Gates</option>
                                                    <option value={3} className="text-black">3 Gates</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-white block mb-1">Drive Gates ($650/ea)</label>
                                                <select 
                                                    value={driveGateCount}
                                                    onChange={(e) => setDriveGateCount(Number(e.target.value))}
                                                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl p-2 text-sm focus:outline-none focus:border-[#e4c58a]"
                                                >
                                                    <option value={0} className="text-black">0 Gates</option>
                                                    <option value={1} className="text-black">1 Double Drive</option>
                                                    <option value={2} className="text-black">2 Double Drive</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="pt-1">
                                            <label className="flex items-center gap-3 cursor-pointer text-sm text-white/90">
                                                <input 
                                                    type="checkbox"
                                                    checked={removeOldFence}
                                                    onChange={(e) => setRemoveOldFence(e.target.checked)}
                                                    className="w-4 h-4 accent-[#e4c58a] rounded"
                                                />
                                                <span>Include old fence removal & haul-away (+$4/ft)</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Right Estimated Output Card */}
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-center lg:text-left">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-[#e4c58a]">Estimated Project Budget</span>
                                            <div className="text-4xl md:text-5xl font-bold font-poppins text-white my-4">
                                                ${costEst.low.toLocaleString()} – ${costEst.high.toLocaleString()}
                                            </div>
                                            <p className="text-xs text-white/70 mb-6">
                                                Approx. <strong>${costEst.avgPerFt}</strong> per linear foot installed including posts, mesh, terminal hardware, and gates.
                                            </p>

                                            <div className="space-y-2 text-xs text-white/80 text-left bg-black/20 p-4 rounded-xl mb-6">
                                                <div className="flex justify-between">
                                                    <span>Footage & Height:</span>
                                                    <span className="font-bold text-white">{linearFeet} FT @ {fenceHeight} FT</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Mesh Finish:</span>
                                                    <span className="font-bold text-[#e4c58a] capitalize">{coatingType.replace("-", " ")}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total Gates:</span>
                                                    <span className="font-bold text-white">{walkGateCount + driveGateCount} Gate(s)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <a 
                                                href="tel:8638163117"
                                                className="w-full bg-[#e4c58a] text-[#4c0c0c] hover:bg-white py-4 px-6 rounded-2xl font-bold font-poppins uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                                            >
                                                <Phone size={18} /> Lock In Your Free Estimate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Section 1: How Much Does Chain Link Fence Installation Cost in Lakeland, FL? */}
                    <ScrollReveal type="fade-up">
                        <section className="my-12">
                            <h2 className="text-2xl md:text-4xl font-bold font-poppins text-[#4c0c0c] mb-6 italic">
                                How Much Does Chain Link Fence Installation Cost in Lakeland, FL?
                            </h2>
                            
                            <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
                                Pricing depends mainly on fence height, wire gauge, and whether you choose galvanized (silver) or vinyl-coated mesh. Here&apos;s what homeowners in the Lakeland area typically budget for:
                            </p>

                            {/* Pricing Table */}
                            <div className="overflow-x-auto my-8 shadow-xl rounded-2xl border border-gray-100">
                                <table className="w-full text-left border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <th className="p-4 md:p-5 font-bold font-poppins text-base">Fence Height</th>
                                            <th className="p-4 md:p-5 font-bold font-poppins text-base">Typical Cost Per Linear Foot</th>
                                            <th className="p-4 md:p-5 font-bold font-poppins text-base">Common Use</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                        <tr className="hover:bg-[#fdfbf7] transition-colors">
                                            <td className="p-4 md:p-5 font-bold text-[#4c0c0c]">4 ft</td>
                                            <td className="p-4 md:p-5 font-bold text-green-700">$10 - $20</td>
                                            <td className="p-4 md:p-5 text-gray-600">Front yards, low-visibility boundaries</td>
                                        </tr>
                                        <tr className="hover:bg-[#fdfbf7] transition-colors">
                                            <td className="p-4 md:p-5 font-bold text-[#4c0c0c]">6 ft</td>
                                            <td className="p-4 md:p-5 font-bold text-green-700">$15 - $30</td>
                                            <td className="p-4 md:p-5 text-gray-600">Backyards, pet containment, privacy slats optional</td>
                                        </tr>
                                        <tr className="hover:bg-[#fdfbf7] transition-colors">
                                            <td className="p-4 md:p-5 font-bold text-[#4c0c0c]">8 ft</td>
                                            <td className="p-4 md:p-5 font-bold text-green-700">$20 - $40+</td>
                                            <td className="p-4 md:p-5 text-gray-600">Commercial, industrial, and high-security sites</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Neighborhood Example Callout */}
                            <div className="my-8 p-6 rounded-2xl bg-[#fdfbf7] border border-[#e4c58a]/40 shadow-sm flex items-start gap-4">
                                <div className="p-3 bg-[#e4c58a] text-[#4c0c0c] rounded-xl flex-shrink-0 mt-1">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#4c0c0c] text-lg mb-1">Real Lakeland Neighborhood Example</h4>
                                    <p className="text-gray-700 text-sm md:text-base">
                                        A typical <strong>150-linear-foot backyard</strong> in a neighborhood like Grasslands or South Lakeland runs roughly <strong>$2,200-$4,000 installed</strong> at 6 feet, depending on gate count and coating selection.
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                Black or green vinyl-coated chain link generally adds <strong>$3-$5 per linear foot</strong> over standard galvanized steel, but it holds up exceptionally well against Central Florida&apos;s humidity and sun while blending into landscaping far better than bare silver mesh.
                            </p>
                        </section>
                    </ScrollReveal>

                    {/* Section 2: What Affects Your Final Quote */}
                    <ScrollReveal type="fade-up">
                        <section className="my-16">
                            <h2 className="text-2xl md:text-4xl font-bold font-poppins text-[#4c0c0c] mb-6 italic">
                                What Affects Your Final Quote
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
                                When a local estimator evaluates your property in Lakeland or Hillsborough County, several key factors determine the overall price:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a]/20 text-[#4c0c0c] flex items-center justify-center font-bold">
                                            <Ruler size={20} />
                                        </div>
                                        <h3 className="font-bold text-[#4c0c0c] text-lg">Total Linear Footage</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Longer continuous runs lower your per-foot cost slightly through efficiency of post-setting and bulk material transportation.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a]/20 text-[#4c0c0c] flex items-center justify-center font-bold">
                                            <Layers size={20} />
                                        </div>
                                        <h3 className="font-bold text-[#4c0c0c] text-lg">Height & Wire Gauge</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Taller, heavier-gauge (e.g. 9-gauge vs 11.5-gauge) steel wire mesh costs more in raw materials but offers superior strength and deterrence.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a]/20 text-[#4c0c0c] flex items-center justify-center font-bold">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <h3 className="font-bold text-[#4c0c0c] text-lg">Coating Selection</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Galvanized zinc steel is the primary budget option; black or green vinyl coating costs slightly more but resists corrosion and improves curb appeal.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a]/20 text-[#4c0c0c] flex items-center justify-center font-bold">
                                            <Wrench size={20} />
                                        </div>
                                        <h3 className="font-bold text-[#4c0c0c] text-lg">Gates & Entry Access</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Standard walk gates start lower; double-drive gates or automated vehicle access systems add $300 to $1,800+ depending on hardware.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a]/20 text-[#4c0c0c] flex items-center justify-center font-bold">
                                            <Compass size={20} />
                                        </div>
                                        <h3 className="font-bold text-[#4c0c0c] text-lg">Soil & Terrain</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Sloped yards, dense roots, or sandy/rocky Central Florida soil conditions require additional post-setting labor and concrete volume.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#e4c58a]/20 text-[#4c0c0c] flex items-center justify-center font-bold">
                                            <FileText size={20} />
                                        </div>
                                        <h3 className="font-bold text-[#4c0c0c] text-lg">Old Fence Demolition</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Removing and hauling away an existing decaying wood or broken wire fence typically adds $3–$5 per linear foot to the quote.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Section 3: Do You Need a Permit for a Chain Link Fence in Lakeland, FL? */}
                    <ScrollReveal type="fade-up">
                        <section className="my-16 bg-[#fdfbf7] p-8 md:p-12 rounded-[2.5rem] border border-[#e4c58a]/30 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#4c0c0c] text-[#e4c58a] flex items-center justify-center">
                                    <Building2 size={24} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#4c0c0c] italic">
                                    Do You Need a Permit for a Chain Link Fence in Lakeland, FL?
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                                <p>
                                    Permit rules for fences in Florida change from time to time, and requirements can differ between the <strong>City of Lakeland</strong> and <strong>unincorporated Polk County</strong>. Regardless of permit status, local zoning still generally limits front-yard fences to around 4 feet and side/rear fences to around 6 feet, and swimming pools require a compliant safety barrier.
                                </p>
                                <p>
                                    Because these rules can shift, we always confirm current permit and zoning requirements with the local building department before we schedule your install - and if you&apos;re on an HOA-governed property, we check for material or color restrictions too. This is one advantage of hiring a local installer over a national chain: <strong>we already know who to call in Polk and Hillsborough County.</strong>
                                </p>
                            </div>

                            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200 flex items-start gap-4">
                                <AlertCircle className="text-[#4c0c0c] flex-shrink-0 mt-1" size={24} />
                                <div className="text-sm text-gray-600">
                                    <strong className="text-[#4c0c0c]">Pro Tip on Property Lines:</strong> Having a current boundary survey prevents costly disputes with neighbors. While AJ Fence sets posts accurately, property lines are the owner&apos;s ultimate legal boundary reference.
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Section 4: The Chain Link Fence Installation Process, Step by Step */}
                    <ScrollReveal type="fade-up">
                        <section className="my-16">
                            <h2 className="text-2xl md:text-4xl font-bold font-poppins text-[#4c0c0c] mb-6 italic">
                                The Chain Link Fence Installation Process, Step by Step
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-base md:text-lg">
                                Here&apos;s what to expect once you book a chain link installation with AJ Fence:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {steps.map((s, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:border-[#e4c58a] transition-all flex items-start gap-4 group">
                                        <span className="text-2xl font-bold font-poppins text-[#e4c58a] group-hover:scale-110 transition-transform">
                                            {s.number}
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-[#4c0c0c] text-lg mb-1">{s.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                                <span>Most standard residential chain link installations are completed in a single day once posts are set; larger commercial runs or multi-gate projects may take longer.</span>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Section 5: Chain Link vs. Other Fence Types in Lakeland */}
                    <ScrollReveal type="fade-up">
                        <section className="my-16">
                            <h2 className="text-2xl md:text-4xl font-bold font-poppins text-[#4c0c0c] mb-6 italic">
                                Chain Link vs. Other Fence Types in Lakeland
                            </h2>

                            <div className="overflow-x-auto my-8 shadow-xl rounded-2xl border border-gray-100">
                                <table className="w-full text-left border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-[#e4c58a]">
                                            <th className="p-4 font-bold font-poppins">Feature</th>
                                            <th className="p-4 font-bold font-poppins bg-[#3b0909] text-white">Chain Link</th>
                                            <th className="p-4 font-bold font-poppins">Wood</th>
                                            <th className="p-4 font-bold font-poppins">Vinyl</th>
                                            <th className="p-4 font-bold font-poppins">Aluminum</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                        <tr>
                                            <td className="p-4 font-bold text-[#4c0c0c]">Cost per linear ft</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50/50">$10 - $40</td>
                                            <td className="p-4">$25 - $35</td>
                                            <td className="p-4">$30 - $45</td>
                                            <td className="p-4">$25 - $40</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-[#4c0c0c]">Privacy</td>
                                            <td className="p-4 text-gray-600 bg-green-50/50">Low (unless slatted)</td>
                                            <td className="p-4 text-green-700 font-bold">High</td>
                                            <td className="p-4 text-green-700 font-bold">High</td>
                                            <td className="p-4 text-gray-600">Low</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-[#4c0c0c]">Maintenance</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50/50">Very low</td>
                                            <td className="p-4 text-amber-700">Moderate (staining/sealing)</td>
                                            <td className="p-4 text-green-700 font-bold">Very low</td>
                                            <td className="p-4 text-green-700 font-bold">Very low</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-[#4c0c0c]">Best for</td>
                                            <td className="p-4 font-medium text-[#4c0c0c] bg-green-50/50">Pet/child containment, security, budget</td>
                                            <td className="p-4 text-gray-600">Backyard privacy</td>
                                            <td className="p-4 text-gray-600">Full privacy + curb appeal</td>
                                            <td className="p-4 text-gray-600">Pools, ornamental boundaries</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                Chain link remains the most budget-friendly option for homeowners who need a durable, low-maintenance boundary without paying for privacy they don&apos;t need - which is exactly why it&apos;s still one of the most requested fence types across Polk and Hillsborough County.
                            </p>
                        </section>
                    </ScrollReveal>

                    {/* Section 6: Why Lakeland Homeowners Search "Chain Link Installation Near Me" and Choose AJ Fence */}
                    <ScrollReveal type="fade-up">
                        <section className="my-16 p-8 md:p-12 rounded-[2.5rem] bg-[#4c0c0c] text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold font-poppins text-[#e4c58a] mb-6 italic">
                                    Why Lakeland Homeowners Search &ldquo;Chain Link Installation Near Me&rdquo; and Choose AJ Fence
                                </h2>
                                <p className="text-white/90 leading-relaxed text-base md:text-lg mb-6">
                                    AJ Fence Inc. has installed residential and commercial fencing throughout Hillsborough and Polk County since 2004. As a local manufacturer and installer based at <strong>3929 Old Tampa Hwy., Lakeland, FL</strong>, we carry our own material inventory, which keeps chain link quotes competitive and lead times short. We offer free in-home estimates and dedicated phone lines for each county we serve.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-center">
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                                        <div className="text-3xl font-bold text-[#e4c58a] font-poppins mb-1">2004</div>
                                        <div className="text-xs text-white/80 uppercase tracking-wider">Serving FL Since</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                                        <div className="text-3xl font-bold text-[#e4c58a] font-poppins mb-1">Direct</div>
                                        <div className="text-xs text-white/80 uppercase tracking-wider">Local Manufacturer</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                                        <div className="text-3xl font-bold text-[#e4c58a] font-poppins mb-1">1 Day</div>
                                        <div className="text-xs text-white/80 uppercase tracking-wider">Typical Install</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Section 7: FAQ Accordion */}
                    <ScrollReveal type="fade-up">
                        <section className="my-16 pt-12 border-t border-gray-200">
                            <h2 className="text-2xl md:text-4xl font-bold font-poppins text-[#4c0c0c] mb-8 italic">
                                Frequently Asked Questions
                            </h2>
                            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-[#e4c58a]/30">
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
                        </section>
                    </ScrollReveal>

                    {/* Section 8: CTA Banner - Get a Free Chain Link Fence Quote */}
                    <ScrollReveal type="fade-up">
                        <section className="my-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#4c0c0c] via-[#5c0f0f] to-[#3b0909] text-white shadow-2xl border-2 border-[#e4c58a]/40 text-center md:text-left relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="max-w-xl space-y-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#e4c58a] bg-[#e4c58a]/10 px-4 py-1.5 rounded-full border border-[#e4c58a]/20 inline-block">
                                        Free Estimates in Polk & Hillsborough
                                    </span>
                                    <h2 className="text-2xl md:text-4xl font-bold font-poppins italic leading-tight">
                                        Get a Free Chain Link Fence Quote in Lakeland, FL
                                    </h2>
                                    <p className="text-white/80 text-sm md:text-base">
                                        Ready to see what chain link installation costs for your property? AJ Fence offers free, no-obligation estimates for homeowners and businesses across Polk and Hillsborough County.
                                    </p>
                                    <div className="pt-2 text-xs md:text-sm text-white/70 space-y-1">
                                        <p><strong>Polk County:</strong> (863) 816-3117</p>
                                        <p><strong>Hillsborough County:</strong> (813) 239-4122</p>
                                        <p><strong>Address:</strong> 3929 Old Tampa Hwy., Lakeland, FL 33811</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 w-full md:w-auto">
                                    <a
                                        href="tel:8638163117"
                                        className="bg-[#e4c58a] text-[#4c0c0c] hover:bg-white hover:scale-105 transition-all duration-300 font-bold font-poppins uppercase tracking-wider py-4 px-8 rounded-2xl text-center shadow-xl text-sm flex items-center justify-center gap-2"
                                    >
                                        Request Your Free Estimate <ArrowRight size={16} />
                                    </a>
                                    <Link
                                        href="/fencing-services/chain-link"
                                        className="border-2 border-[#e4c58a] text-[#e4c58a] hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300 font-bold font-poppins uppercase tracking-wider py-3.5 px-8 rounded-2xl text-center text-xs flex items-center justify-center gap-2"
                                    >
                                        See Our Chain Link Fencing Options
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Social Share & Tags */}
                    <div className="mt-16 pt-12 border-t border-gray-200">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Tags:</span>
                                <div className="flex flex-wrap gap-2">
                                    {["Lakeland FL", "Chain Link Fence", "Cost Guide", "Polk County", "Fence Installers"].map(tag => (
                                        <span key={tag} className="text-xs text-[#4c0c0c] font-semibold px-3 py-1 bg-[#fdfbf7] border border-gray-200 rounded-lg">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <button 
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: post.title,
                                            url: window.location.href
                                        }).catch(() => {});
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Link copied to clipboard!");
                                    }
                                }}
                                className="flex items-center gap-2 text-[#4c0c0c] font-bold uppercase tracking-widest text-xs border-2 border-[#e4c58a] px-6 py-3 rounded-full hover:bg-[#e4c58a] transition-all"
                            >
                                <Share2 size={16} /> Share This Article
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts Section */}
            <section className="py-20 bg-[#fdfbf7] border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold font-poppins text-[#4c0c0c] mb-12 italic">You Might Also Like</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="/blog/fence-installation-cost-polk-hillsborough" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Cost Guide</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Fence Installation Cost in Polk & Hillsborough</h4>
                        </Link>
                        <Link href="/blog/aluminum-fence-installation-lakeland-fl" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Installation Guide</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Aluminum Fence Installation in Lakeland, FL</h4>
                        </Link>
                        <Link href="/blog/repairing-vs-replacing-fence" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Maintenance</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Repairing vs. Replacing a Fence: How to Decide</h4>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
