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
    ShieldCheck, 
    Sun, 
    Droplets, 
    Wind, 
    Sparkles, 
    Wrench, 
    Paintbrush, 
    Sprout, 
    AlertTriangle, 
    Phone, 
    ArrowRight, 
    Clock, 
    Layers, 
    Check, 
    X,
    Calculator,
    Compass
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

export default function ExtendAluminumLifeClient() {
    const post = {
        title: "How to Extend the Life of Your Aluminum Fence in Florida's Climate",
        date: "September 1, 2026",
        author: "AJ Fence Team",
        image: "/blog-post/aluminum fence maintenance tips.jpg",
        category: "Maintenance & Tips",
        readTime: "5 min read"
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Interactive Maintenance Calculator State
    const [distanceFromWater, setDistanceFromWater] = useState<string>("inland"); // inland, coastal, canal
    const [fenceAge, setFenceAge] = useState<number>(3);
    const [sprinklerHit, setSprinklerHit] = useState<boolean>(false);
    const [poolAdjacent, setPoolAdjacent] = useState<boolean>(false);

    // Dynamic Maintenance Recommendations
    const getMaintenanceSchedule = () => {
        let rinseWeeks = 6;
        let hardwareFreq = "Every 6 months (Spring & Fall)";
        let washDetail = "Standard garden hose rinse";
        let longevityForecast = "25–35+ Years";
        let primaryRisk = "Normal UV fading & airborne pollen";

        if (distanceFromWater === "coastal") {
            rinseWeeks = 3;
            washDetail = "Gentle soap-and-water wash every 6–8 weeks to remove marine salt mist";
            primaryRisk = "Salt mist pitting & hardware corrosion at joint connections";
        } else if (distanceFromWater === "canal") {
            rinseWeeks = 4;
            washDetail = "Garden hose rinse every month with focus on lower bottom rails";
            primaryRisk = "High humidity dampness and organic algae buildup";
        }

        if (poolAdjacent) {
            rinseWeeks = Math.min(rinseWeeks, 3);
            primaryRisk += ", plus chlorine/saltwater splash exposure";
        }

        if (sprinklerHit) {
            primaryRisk += ", hard mineral scale from irrigation water";
        }

        return {
            rinseFrequency: `Every ${rinseWeeks} weeks`,
            hardwareFrequency: hardwareFreq,
            washGuidance: washDetail,
            forecast: longevityForecast,
            mainFocus: primaryRisk
        };
    };

    const schedule = getMaintenanceSchedule();

    const faqs = [
        {
            question: "How often should I clean my aluminum fence in Florida?",
            answer: "Every 4–8 weeks with a garden hose rinse is enough for most inland properties; coastal or salt-exposed properties benefit from a soap-and-water wash roughly every 6–8 weeks to prevent salt and pollen buildup."
        },
        {
            question: "Does aluminum fencing rust in Florida's humidity?",
            answer: "Properly powder-coated aluminum does not rust the way steel or iron does. The aluminum itself can oxidize slightly if the coating is deeply scratched, but this is far slower and less damaging than steel rust, especially with prompt touch-ups."
        },
        {
            question: "Is aluminum fencing a good choice near the coast?",
            answer: "Yes — aluminum is one of the better material choices for salt-air exposure specifically because it doesn't rust, though more frequent rinsing is recommended the closer a property is to open water."
        },
        {
            question: "How long does an aluminum fence last in Florida?",
            answer: "With regular rinsing and hardware maintenance, a quality aluminum fence typically lasts 20 to 30+ years in Florida's climate, outperforming wood and most steel options."
        },
        {
            question: "Can aluminum fencing survive a hurricane?",
            answer: "Aluminum fencing's open picket design lets wind pass through rather than catching it like a solid panel, which generally makes it more wind-resistant than solid privacy fencing. No fence is guaranteed to survive extreme winds, so securing gates and removing attachments before a storm still matters."
        }
    ];

    const climateFactors = [
        {
            icon: Sun,
            title: "Heat & UV Exposure",
            color: "text-amber-500",
            bg: "bg-amber-50",
            border: "border-amber-200",
            description: "Florida gets some of the most intense sun exposure in the continental U.S. Constant UV can fade powder-coating and make it brittle over time, especially on the sun-facing side of a property."
        },
        {
            icon: Droplets,
            title: "Humidity & Salt Air",
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "border-blue-200",
            description: "Even homes 20–30 miles inland can pick up salt content in coastal breezes. Combined with year-round humidity, this accelerates corrosion at joints, welds, and any spot where the coating is scratched or chipped."
        },
        {
            icon: Wind,
            title: "Heavy Rain & Storm Season",
            color: "text-teal-600",
            bg: "bg-teal-50",
            border: "border-teal-200",
            description: "Florida's wet season and hurricane season put real mechanical stress on fence posts, gates, and hardware — not just from wind, but from saturated soil that loosens post footings."
        }
    ];

    const maintenanceSteps = [
        {
            step: "01",
            icon: Droplets,
            title: "Rinse It Regularly",
            lead: "Remove salt, pollen, and airborne pollutants before they degrade the powder coat.",
            details: "Salt, pollen, and airborne pollutants build up on the surface and can dull the finish or, worse, sit against the metal in a way that promotes corrosion at weak points. A garden hose rinse every 4–8 weeks (more often if you're near the coast) prevents buildup. For homes closer to the water, a mild soap-and-water wash every couple of months keeps the powder coating looking factory-new.",
            linkText: "5 maintenance tips for aluminum fencing",
            linkHref: "/blog/aluminum-fence-maintenance-tips/",
            actionList: [
                "Rinse with a standard garden hose nozzle every 4–8 weeks",
                "Use warm water and mild non-abrasive dish soap for stubborn residue",
                "Avoid harsh abrasive pads, wire brushes, or high-pressure washers up close"
            ]
        },
        {
            step: "02",
            icon: Wrench,
            title: "Inspect and Tighten Hardware Twice a Year",
            lead: "Prevent gate sagging, uneven stress distribution, and cracked mounting brackets.",
            details: "Screws, hinges, and gate latches loosen naturally from temperature swings and daily use, and a loose gate takes on stress unevenly, which is how brackets bend or crack. Walk the fence line each spring and fall to keep moving mechanisms aligned.",
            actionList: [
                "Tighten any loose screws, hinges, self-closing springs, or mounting bolts",
                "Lubricate hinges and latches with a silicone-based (not petroleum-based) lubricant",
                "Check that gates still swing freely, latch automatically, and close evenly",
                "Look for hairline cracks at welds or joints, which show up more after storm season"
            ]
        },
        {
            step: "03",
            icon: Paintbrush,
            title: "Touch Up Scratches Before They Spread",
            lead: "Seal exposed bare aluminum to prevent galvanic pitting and surface oxidation.",
            details: "A scratch in the powder coating exposes bare aluminum, and while aluminum doesn't rust like steel, exposed aluminum in humid, salty air can still oxidize and pit over time, especially at scratches deep enough to reach the base metal. Keep a matching touch-up paint pen (most manufacturers offer one) and address scratches within a few weeks of noticing them rather than waiting for the annual cleaning.",
            actionList: [
                "Clean the scratched area with rubbing alcohol and let it dry completely",
                "Apply manufacturer-matched paint or acrylic enamel pen in thin, even layers",
                "Inspect high-wear areas around gate latches, weed-eater contact points, and base pickets"
            ]
        },
        {
            step: "04",
            icon: Sprout,
            title: "Keep Water and Vegetation Away From the Base",
            lead: "Protect post concrete footings from ground saturation and mineral deposit staining.",
            details: "Sprinkler heads aimed directly at fence posts, and mulch or soil piled against the base, both trap moisture against the metal and the post footing. Over time this can lead to loosened posts or accelerated wear at the ground line — often the first place a fence actually fails. Redirect sprinklers so they don't spray the fence line directly, and keep landscaping a few inches clear of posts and panels.",
            actionList: [
                "Adjust irrigation sprinkler angles to spray inward toward the lawn, not at fence posts",
                "Maintain a 2–3 inch buffer between ground mulch/soil and the bottom horizontal rail",
                "Trim back aggressive climbing vines, heavy shrub branches, and tall weeds"
            ]
        },
        {
            step: "05",
            icon: Wind,
            title: "Prep for Hurricane Season",
            lead: "Maximize storm resilience and safeguard post footings before tropical winds arrive.",
            details: "Aluminum fencing is generally more wind-resistant than solid privacy fencing because its open design lets wind pass through rather than pushing against a solid panel. Still, before storm season arrives, proactive preparation minimizes damage and prevents emergency repairs.",
            linkText: "Repairing vs. Replacing a Fence: How to Decide",
            linkHref: "/blog/repairing-vs-replacing-fence/",
            actionList: [
                "Secure or remove any attached items (string lights, planters, decorative panels)",
                "Confirm gates are securely latched and, if possible, add a drop-rod or secondary lock for high-wind days",
                "After a storm, walk the fence line to check for loosened posts, bent pickets, or debris damage before small issues become bigger repairs"
            ]
        },
        {
            step: "06",
            icon: ShieldCheck,
            title: "Choose Quality Materials and Installation From the Start",
            lead: "Marine-grade aluminum alloys and deep concrete footings guarantee decades of stability.",
            details: "Longevity starts before the fence ever goes in the ground. Marine-grade aluminum alloys and a properly cured powder-coat finish resist Florida's climate far longer than budget-grade material, and correct post depth and concrete footings matter more here than in drier states because of how saturated Florida soil gets during the wet season.",
            links: [
                { label: "Choosing the Right Fence for Your Florida Home", href: "/blog/choosing-right-fence-florida/" },
                { label: "installation typically costs", href: "/blog/aluminum-fence-installation-lakeland-fl/" },
                { label: "aluminum fence options", href: "/fencing-services/aluminum/" }
            ],
            actionList: [
                "Insist on multi-stage pre-treated and electrostatic powder-coated aluminum",
                "Ensure posts are sunk deep into solid concrete footings suited for sandy Florida soil",
                "Choose stainless steel or corrosion-resistant coated fasteners and gate hardware"
            ]
        }
    ];

    const comparisonData = [
        {
            factor: "Rust / Corrosion Resistance",
            aluminum: "Excellent (Will not rust)",
            wood: "N/A (Rots & decays instead)",
            vinyl: "Excellent (Synthetic polymer)",
            steel: "Poor to Fair (Rust-prone if scratched)"
        },
        {
            factor: "UV & Heat Tolerance",
            aluminum: "Very Good (May fade slightly over 15+ yrs)",
            wood: "Fades, warps, checks & splits",
            vinyl: "Can become brittle in extreme heat",
            steel: "Good structurally; topcoat chalks"
        },
        {
            factor: "Salt Air Performance",
            aluminum: "Very Good (Ideal for Gulf & coast)",
            wood: "Poor (Accelerates wood breakdown)",
            vinyl: "Good (Resistant to salt mist)",
            steel: "Poor (Rapid rust near coastal air)"
        },
        {
            factor: "Maintenance Needs",
            aluminum: "Low (Periodic hose rinse & hardware lube)",
            wood: "High (Frequent staining, sealing & repair)",
            vinyl: "Low (Periodic power washing)",
            steel: "Moderate (Rust spot sanding & painting)"
        },
        {
            factor: "Typical Lifespan in FL",
            aluminum: "20–30+ Years",
            wood: "7–15 Years",
            vinyl: "15–25 Years",
            steel: "10–20 Years"
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#4c0c0c] overflow-hidden text-white">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <Image
                        src="/herosection/2.avif"
                        alt="AJ Fence Background"
                        fill
                        className="object-cover"
                    />
                </div>
                
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal type="fade-up">
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center gap-2 text-[#e4c58a] hover:text-white transition-colors mb-6 font-medium text-sm md:text-base"
                        >
                            <ChevronLeft size={18} /> Back to All Articles
                        </Link>

                        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                            <span className="bg-[#e4c58a] text-[#4c0c0c] px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="bg-white/10 text-white/90 px-3.5 py-1 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5">
                                <Clock size={14} className="text-[#e4c58a]" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight max-w-4xl mx-auto">
                            How to Extend the Life of Your <span className="text-[#e4c58a]">Aluminum Fence</span> in Florida&apos;s Climate
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-white/80 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-[#e4c58a]" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-[#e4c58a]" />
                                <span>{post.author}</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Featured Image */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <ScrollReveal type="fade-up">
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                        <Image
                            src={post.image}
                            alt="Aluminum Fence in Florida Yard"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </ScrollReveal>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left Article Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        
                        {/* Quick Answer / Featured Snippet Box */}
                        <ScrollReveal type="fade-up">
                            <div className="bg-gradient-to-br from-[#4c0c0c]/5 to-[#e4c58a]/15 border-2 border-[#e4c58a] rounded-3xl p-6 sm:p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2.5 bg-[#4c0c0c] text-[#e4c58a] rounded-xl">
                                        <Sparkles size={22} />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-[#4c0c0c] font-poppins">
                                        Quick Answer: Aluminum Fence Care in Florida
                                    </h2>
                                </div>
                                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium mb-4">
                                    An aluminum fence in Florida can last <strong>20+ years</strong> if you rinse it every <strong>1–2 months</strong> to remove salt and pollen, inspect and tighten hardware twice a year, touch up scratches before corrosion takes hold, keep sprinklers and landscaping from soaking the base, and secure gates before storm season.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Aluminum already resists rust better than steel or iron, but Florida&apos;s heat, humidity, salt air, and hurricanes still wear down coatings and hardware faster than in drier climates.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Introduction Narrative */}
                        <section className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-poppins">
                            <p>
                                Florida homeowners choose aluminum fencing for a reason: it doesn&apos;t rot like wood, doesn&apos;t crack like vinyl in extreme heat, and won&apos;t rust through like uncoated steel. But &ldquo;low maintenance&rdquo; doesn&apos;t mean &ldquo;no maintenance.&rdquo;
                            </p>
                            <p>
                                Between afternoon thunderstorms, salt-heavy air near the Gulf, intense UV exposure, and hurricane season, Central Florida puts a fence through more punishment in a year than most materials see in five. Here&apos;s how to keep your <Link href="/fencing-services/aluminum/" className="text-[#4c0c0c] font-semibold underline decoration-[#e4c58a] decoration-2 hover:text-[#e4c58a] transition-colors">aluminum fence</Link> looking and performing like new for decades.
                            </p>
                        </section>

                        {/* Why Florida Climate Is Tough */}
                        <section className="space-y-6">
                            <div className="border-l-4 border-[#4c0c0c] pl-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#4c0c0c] font-poppins">
                                    Why Florida&apos;s Climate Is Tough on Fences
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    Three environmental factors do most of the long-term damage to outdoor metal fixtures:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                                {climateFactors.map((factor, idx) => {
                                    const Icon = factor.icon;
                                    return (
                                        <div 
                                            key={idx} 
                                            className={`${factor.bg} border ${factor.border} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md`}
                                        >
                                            <div>
                                                <div className={`p-3 w-fit rounded-xl bg-white shadow-sm mb-4 ${factor.color}`}>
                                                    <Icon size={24} />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">
                                                    {factor.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {factor.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 text-gray-700 text-sm sm:text-base leading-relaxed flex items-start gap-3">
                                <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={20} />
                                <p>
                                    <strong>Good to Know:</strong> Because aluminum doesn&apos;t rust the way iron or untreated steel does, it holds up far better against all three. But the powder-coated finish and the hardware are still vulnerable, which is where most of the maintenance below is focused.
                                </p>
                            </div>
                        </section>

                        {/* Interactive Maintenance Planner Widget */}
                        <section className="bg-[#4c0c0c] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#e4c58a]/10 rounded-full blur-2xl pointer-events-none" />
                            
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-[#e4c58a] text-[#4c0c0c] rounded-xl">
                                    <Calculator size={22} />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#e4c58a] font-poppins">
                                        Florida Aluminum Fence Maintenance Planner
                                    </h3>
                                    <p className="text-white/80 text-xs sm:text-sm">
                                        Select your property details to get a customized care schedule
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Location Selector */}
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">
                                        Property Location
                                    </label>
                                    <select
                                        value={distanceFromWater}
                                        onChange={(e) => setDistanceFromWater(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#e4c58a]"
                                    >
                                        <option value="inland" className="text-gray-900">Inland / Lakeland / Polk County (Low Salt)</option>
                                        <option value="canal" className="text-gray-900">Near Freshwater Lake / Retention Pond</option>
                                        <option value="coastal" className="text-gray-900">Coastal / Tampa Bay / Hillsborough (High Salt Mist)</option>
                                    </select>
                                </div>

                                {/* Fence Age */}
                                <div>
                                    <div className="flex justify-between text-sm font-medium text-white/90 mb-2">
                                        <span>Fence Age: {fenceAge} {fenceAge === 1 ? 'Year' : 'Years'}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="25"
                                        value={fenceAge}
                                        onChange={(e) => setFenceAge(parseInt(e.target.value))}
                                        className="w-full accent-[#e4c58a] cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-white/50 mt-1">
                                        <span>Brand New (1 yr)</span>
                                        <span>Mature (15 yrs)</span>
                                        <span>Vintage (25+ yrs)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Toggles */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <label className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={sprinklerHit}
                                        onChange={(e) => setSprinklerHit(e.target.checked)}
                                        className="w-4 h-4 accent-[#e4c58a] rounded"
                                    />
                                    <span className="text-sm text-white/90">Lawn sprinklers spray fence directly</span>
                                </label>

                                <label className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={poolAdjacent}
                                        onChange={(e) => setPoolAdjacent(e.target.checked)}
                                        className="w-4 h-4 accent-[#e4c58a] rounded"
                                    />
                                    <span className="text-sm text-white/90">Installed around swimming pool</span>
                                </label>
                            </div>

                            {/* Dynamic Results Card */}
                            <div className="bg-white/10 border border-[#e4c58a]/40 rounded-2xl p-5">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                                    <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-3">
                                        <div className="text-xs uppercase tracking-wider text-[#e4c58a] font-bold">Rinse Interval</div>
                                        <div className="text-xl font-bold text-white mt-1">{schedule.rinseFrequency}</div>
                                    </div>
                                    <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-3">
                                        <div className="text-xs uppercase tracking-wider text-[#e4c58a] font-bold">Hardware Check</div>
                                        <div className="text-xl font-bold text-white mt-1">Twice Yearly</div>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-[#e4c58a] font-bold">Projected Lifespan</div>
                                        <div className="text-xl font-bold text-[#e4c58a] mt-1">{schedule.forecast}</div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/80">
                                    <strong>Care Focus:</strong> {schedule.mainFocus}. {schedule.washGuidance}.
                                </div>
                            </div>
                        </section>

                        {/* 6 Maintenance Steps */}
                        <section className="space-y-10">
                            <div className="border-l-4 border-[#4c0c0c] pl-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#4c0c0c] font-poppins">
                                    6 Practical Steps to Maximize Your Aluminum Fence&apos;s Lifespan
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    Follow these maintenance routines to keep your powder coat intact and hardware operating smoothly.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {maintenanceSteps.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div 
                                            key={idx}
                                            className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-2xl bg-[#4c0c0c] text-[#e4c58a] flex items-center justify-center font-bold text-lg font-poppins shadow-md">
                                                        {item.step}
                                                    </div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-[#4c0c0c] font-poppins">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <div className="p-2 bg-[#e4c58a]/20 text-[#4c0c0c] rounded-xl">
                                                    <Icon size={22} />
                                                </div>
                                            </div>

                                            <p className="text-gray-800 font-medium text-base mb-3">
                                                {item.lead}
                                            </p>

                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {item.details}
                                                {item.linkText && item.linkHref && (
                                                    <span>
                                                        {' '}This is covered in more depth in our{' '}
                                                        <Link 
                                                            href={item.linkHref} 
                                                            className="text-[#4c0c0c] font-semibold underline decoration-[#e4c58a] decoration-2 hover:text-[#e4c58a] transition-colors"
                                                        >
                                                            {item.linkText}
                                                        </Link>.
                                                    </span>
                                                )}
                                                {item.links && (
                                                    <span>
                                                        {' '}If you&apos;re still deciding on a fence, see how aluminum compares to other options in{' '}
                                                        <Link href="/blog/choosing-right-fence-florida/" className="text-[#4c0c0c] font-semibold underline decoration-[#e4c58a] decoration-2 hover:text-[#e4c58a] transition-colors">
                                                            Choosing the Right Fence for Your Florida Home
                                                        </Link>
                                                        , or get a sense of what{' '}
                                                        <Link href="/blog/aluminum-fence-installation-lakeland-fl/" className="text-[#4c0c0c] font-semibold underline decoration-[#e4c58a] decoration-2 hover:text-[#e4c58a] transition-colors">
                                                            installation typically costs
                                                        </Link>{' '}
                                                        in the Lakeland area.
                                                    </span>
                                                )}
                                            </p>

                                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                                                <div className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-3 flex items-center gap-1.5">
                                                    <CheckCircle2 size={15} className="text-emerald-600" /> Best Practice Checklist:
                                                </div>
                                                <ul className="space-y-2.5">
                                                    {item.actionList.map((action, aIdx) => (
                                                        <li key={aIdx} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                                                                ✓
                                                            </div>
                                                            <span>{action}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Comparison Table Section */}
                        <section className="space-y-6">
                            <div className="border-l-4 border-[#4c0c0c] pl-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#4c0c0c] font-poppins">
                                    How Aluminum Holds Up vs. Other Fence Materials in Florida
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    See how aluminum compares with wood, vinyl, and chain-link under Central Florida conditions.
                                </p>
                            </div>

                            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-md">
                                <table className="w-full text-left border-collapse text-sm sm:text-base">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-white">
                                            <th className="py-4 px-4 sm:px-6 font-semibold font-poppins">Factor</th>
                                            <th className="py-4 px-4 sm:px-6 font-semibold font-poppins text-[#e4c58a] bg-[#3a0808]">
                                                Aluminum
                                            </th>
                                            <th className="py-4 px-4 sm:px-6 font-semibold font-poppins">Wood</th>
                                            <th className="py-4 px-4 sm:px-6 font-semibold font-poppins">Vinyl</th>
                                            <th className="py-4 px-4 sm:px-6 font-semibold font-poppins">Uncoated Steel / Chain Link</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {comparisonData.map((row, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                                                <td className="py-4 px-4 sm:px-6 font-bold text-gray-900 whitespace-nowrap">
                                                    {row.factor}
                                                </td>
                                                <td className="py-4 px-4 sm:px-6 font-bold text-[#4c0c0c] bg-[#e4c58a]/10 border-x border-[#e4c58a]/30">
                                                    <span className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold">
                                                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                                        {row.aluminum}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 sm:px-6 text-gray-600">{row.wood}</td>
                                                <td className="py-4 px-4 sm:px-6 text-gray-600">{row.vinyl}</td>
                                                <td className="py-4 px-4 sm:px-6 text-gray-600">{row.steel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* FAQs Section */}
                        <section className="space-y-6">
                            <div className="border-l-4 border-[#4c0c0c] pl-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#4c0c0c] font-poppins">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    Common questions Florida homeowners have about maintaining aluminum fencing.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
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

                        {/* AJ Fence CTA & Conclusion Box */}
                        <section className="bg-gradient-to-r from-[#4c0c0c] to-[#300707] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <span className="bg-[#e4c58a] text-[#4c0c0c] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                                    Lakeland & Central Florida Experts
                                </span>
                                
                                <h3 className="text-2xl sm:text-4xl font-bold font-poppins text-white leading-tight">
                                    Get Expert Help Maintaining or Installing Your Aluminum Fence
                                </h3>

                                <p className="text-white/85 text-base sm:text-lg leading-relaxed">
                                    If your aluminum fence is showing its age, or you&apos;re ready to install one built to handle Central Florida&apos;s climate from day one,{' '}
                                    <Link href="/contact-us/" className="text-[#e4c58a] underline font-semibold hover:text-white transition-colors">
                                        AJ Fence
                                    </Link>{' '}
                                    has served Polk and Hillsborough County homeowners since 2004.{' '}
                                    <Link href="/contact-us/" className="text-[#e4c58a] underline font-semibold hover:text-white transition-colors">
                                        Contact us for a free estimate
                                    </Link>{' '}
                                    on installation, repair, or a maintenance check.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link
                                        href="/contact-us/"
                                        className="inline-flex items-center justify-center gap-2 bg-[#e4c58a] text-[#4c0c0c] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg text-base"
                                    >
                                        Request a Free Estimate <ArrowRight size={18} />
                                    </Link>
                                    
                                    <a
                                        href="tel:8638163117"
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold transition-all duration-300 text-base"
                                    >
                                        <Phone size={18} className="text-[#e4c58a]" /> Polk: (863) 816-3117
                                    </a>

                                    <a
                                        href="tel:8132394122"
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold transition-all duration-300 text-base"
                                    >
                                        <Phone size={18} className="text-[#e4c58a]" /> Hillsborough: (813) 239-4122
                                    </a>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Right Sidebar (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        
                        {/* Table of Contents Box */}
                        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 sticky top-28 space-y-6 shadow-sm">
                            <h4 className="text-xl font-bold text-[#4c0c0c] font-poppins pb-4 border-b border-gray-200 flex items-center gap-2">
                                <Compass size={20} className="text-[#e4c58a]" /> In This Guide
                            </h4>
                            
                            <ul className="space-y-3 text-sm font-medium text-gray-700">
                                <li>
                                    <a href="#quick-answer" className="hover:text-[#4c0c0c] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" /> Quick Answer Summary
                                    </a>
                                </li>
                                <li>
                                    <a href="#climate-factors" className="hover:text-[#4c0c0c] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" /> Why Florida Climate Is Tough
                                    </a>
                                </li>
                                <li>
                                    <a href="#planner" className="hover:text-[#4c0c0c] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" /> Maintenance Schedule Planner
                                    </a>
                                </li>
                                <li>
                                    <a href="#maintenance-steps" className="hover:text-[#4c0c0c] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" /> 6 Life-Extending Steps
                                    </a>
                                </li>
                                <li>
                                    <a href="#material-comparison" className="hover:text-[#4c0c0c] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" /> Aluminum vs. Other Materials
                                    </a>
                                </li>
                                <li>
                                    <a href="#faqs" className="hover:text-[#4c0c0c] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a]" /> Frequently Asked Questions
                                    </a>
                                </li>
                            </ul>

                            {/* Sidebar Free Estimate Card */}
                            <div className="bg-[#4c0c0c] text-white p-6 rounded-2xl text-center space-y-4">
                                <ShieldCheck size={36} className="text-[#e4c58a] mx-auto" />
                                <h5 className="font-bold text-lg font-poppins">Serving Central Florida Since 2004</h5>
                                <p className="text-xs text-white/80 leading-relaxed">
                                    Quality aluminum fence manufacturing, professional installation, and honest warranties in Lakeland, Winter Haven, Plant City, and Tampa.
                                </p>
                                <Link
                                    href="/contact-us/"
                                    className="block bg-[#e4c58a] text-[#4c0c0c] py-2.5 px-4 rounded-xl font-bold text-sm hover:bg-white transition-colors"
                                >
                                    Get Free Estimate
                                </Link>
                            </div>

                            {/* Related Guides */}
                            <div className="pt-4 border-t border-gray-200">
                                <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
                                    Related Reading
                                </h5>
                                <div className="space-y-4">
                                    <Link 
                                        href="/blog/aluminum-fence-maintenance-tips/" 
                                        className="group block text-sm"
                                    >
                                        <span className="text-gray-500 text-xs block mb-1">Maintenance</span>
                                        <span className="font-semibold text-gray-800 group-hover:text-[#4c0c0c] transition-colors line-clamp-2">
                                            5 Maintenance Tips for Aluminum Fencing
                                        </span>
                                    </Link>
                                    <Link 
                                        href="/blog/aluminum-fence-installation-lakeland-fl/" 
                                        className="group block text-sm"
                                    >
                                        <span className="text-gray-500 text-xs block mb-1">Cost & Timeline</span>
                                        <span className="font-semibold text-gray-800 group-hover:text-[#4c0c0c] transition-colors line-clamp-2">
                                            Aluminum Fence Installation in Lakeland, FL
                                        </span>
                                    </Link>
                                    <Link 
                                        href="/blog/repairing-vs-replacing-fence/" 
                                        className="group block text-sm"
                                    >
                                        <span className="text-gray-500 text-xs block mb-1">Comparison</span>
                                        <span className="font-semibold text-gray-800 group-hover:text-[#4c0c0c] transition-colors line-clamp-2">
                                            Repairing vs. Replacing a Fence: How to Decide
                                        </span>
                                    </Link>
                                    <Link 
                                        href="/blog/choosing-right-fence-florida/" 
                                        className="group block text-sm"
                                    >
                                        <span className="text-gray-500 text-xs block mb-1">Buyers Guide</span>
                                        <span className="font-semibold text-gray-800 group-hover:text-[#4c0c0c] transition-colors line-clamp-2">
                                            Choosing the Right Fence for Your Florida Home
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
