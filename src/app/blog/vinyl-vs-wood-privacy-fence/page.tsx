"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Plus, Minus } from 'lucide-react';
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

export default function VinylVsWoodPage() {
    const post = {
        title: "Vinyl vs. Wood: Which Privacy Fence Suits You?",
        date: "Dec 28, 2025",
        author: "AJ Fence Team",
        image: "/blog-post/Vinyl vs. Wood Which Privacy Fence Is Best.webp",
        category: "Comparison",
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Which lasts longer: vinyl or wood privacy fencing?",
            answer: "Vinyl fences typically last 20-30 years or more. Wood fences generally last 10-15 years in Florida due to moisture, sun, and pest exposure."
        },
        {
            question: "Is vinyl better than wood in Florida weather?",
            answer: "Yes. Vinyl resists rain, humidity, UV rays, rot, and termites much better than wood."
        },
        {
            question: "Does vinyl fade in the sun?",
            answer: "Today’s vinyl fencing includes UV inhibitors to reduce fading. Any discoloration is minimal compared to wood."
        },
        {
            question: "Is vinyl more expensive than wood?",
            answer: "Vinyl costs more upfront, but is cheaper in the long run because it requires less maintenance and fewer repairs."
        },
        {
            question: "Which fence requires less maintenance?",
            answer: "Vinyl needs far less maintenance than wood, which must be sealed, stained, and frequently repaired."
        },
        {
            question: "Is wood fencing a good option for coastal homes?",
            answer: "Wood is not ideal for coastal areas due to salt air and high moisture. Vinyl or aluminum performs better in those environments."
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

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic leading-tight">
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
                            <p className="mb-8 text-xl font-medium text-gray-800">
                                Selecting the best privacy fence is a significant concern for any homeowner in Florida, and because this state has a particularly unique climate, you’ll want to consider your fencing options carefully. With intense sun, high humidity, heavy rain, and seasonal storms, not every type of fencing material is built to endure Florida’s environment over time.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Vinyl or Wood: Which is Best for Your Property?</h2>
                            <p className="mb-8">
                                Both materials have their benefits, but which is the better choice for your home? In this guide, we’ll compare vinyl vs. wood privacy fencing and break down their pros, cons, costs, and upkeep specifically for Florida’s hot, humid conditions.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">The Importance of Privacy Fencing for Your Home</h3>
                            <p className="mb-6">
                                Privacy fences do more than block the view. They provide security, define property boundaries, and create a safe space for pets and children. They also help reduce outside noise and can improve your home’s curb appeal.
                            </p>
                            <p className="mb-6">
                                Choosing the right material not only ensures long-lasting performance but also saves you time and stress on maintenance in the long run.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Vinyl vs. Wood Privacy Fences: A Quick Comparison</h3>
                            <p className="mb-12">
                                At first glance, a wood fence might seem like a more affordable option than vinyl. But vinyl fences are among the most durable, low-maintenance, and weather-resistant choices available. Wood fences offer a natural look and more design flexibility but demand more care especially in Florida’s climate. Understanding these differences now can save you time, money, and frustration later.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Vinyl Privacy Fences: Pros and Cons</h2>
                            <p className="mb-6">
                                Vinyl fencing is a top choice for Florida homeowners.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>The biggest benefit? It’s low-maintenance. Unlike wood, vinyl doesn’t need painting, staining, or sealing. Just rinse it occasionally and it stays looking new.</li>
                                <li>Vinyl also performs extremely well in Florida’s weather. It resists moisture, humidity, rot, termites, and UV damage making it ideal for homes that get a lot of sun and rain.</li>
                                <li>Another major advantage: longevity. Quality vinyl fences can last 20–30 years or more without warping or cracking.</li>
                            </ul>
                            <p className="mb-6">
                                However, vinyl isn’t perfect. The upfront cost is usually higher than wood. Color choices are more limited, and installation must be done correctly to ensure stability during high winds and storms.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Wood Privacy Fences: Traditional Style with Extra Upkeep</h2>
                            <p className="mb-6">
                                Wood fencing remains a favorite for those who love a traditional, natural look. It blends well with landscaping and offers a warm, timeless aesthetic.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>It’s also highly customizable paint it, stain it, or cut it into nearly any style you like to match your home’s design.</li>
                                <li>Wood’s lower initial cost is another plus, making it attractive for homeowners on a tighter budget.</li>
                            </ul>
                            <p className="mb-6">
                                But in Florida’s climate, wood fences are more vulnerable to issues. Humidity, rain, and pests can cause rot, mold, termites, warping, and fading. You’ll need to stain, seal, and repair wood regularly. Its average lifespan is about 10-15 years in Florida much shorter than vinyl.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Florida’s Weather Impact: Vinyl vs. Wood</h2>
                            <p className="mb-6">
                                Florida’s weather is a big factor in fence durability.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li>In rainy, humid conditions, vinyl wins it’s waterproof and rot-resistant. Wood, on the other hand, absorbs moisture and breaks down over time.</li>
                                <li>Under constant sun, UV-protected vinyl resists fading. Wood is more likely to crack, dry out, and lose its color.</li>
                                <li>When hurricanes or strong storms hit, properly installed vinyl panels maintain their structure better. Wood fences can become loose or break if not well-maintained.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Maintenance Expectations Over Time</h3>
                            <p className="mb-6">
                                Vinyl fencing is easy to care for. Occasional rinsing is all it needs is painting, sealing, or pest treatments required.
                            </p>
                            <p className="mb-8">
                                Wood fencing needs more attention. Annual sealing or staining, termite protection, and frequent repairs for damage like rot or warping are all part of the routine. If convenience matters, vinyl is the better long-term choice.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Cost Breakdown: Short-Term vs. Long-Term Value</h3>
                            <p className="mb-12">
                                Initially, wood fences cost less to install. But when you factor in regular maintenance, repairs, and potential replacements, vinyl often ends up being more economical over time. Vinyl fencing rarely needs replacement and holds its appearance for decades. Wood fencing, while cheaper upfront, can become a long-term expense if not properly maintained.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Which Privacy Fence Is Right for Your Home?</h2>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h4 className="text-xl font-bold text-[#4c0c0c] mb-3">Choose Vinyl If:</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                                        <li>You want a long-lasting, low-maintenance fence</li>
                                        <li>You live in a coastal or humid area</li>
                                        <li>You prefer a clean and modern design</li>
                                        <li>You want to avoid ongoing maintenance costs</li>
                                    </ul>
                                </div>
                                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#e4c58a]/30">
                                    <h4 className="text-xl font-bold text-[#4c0c0c] mb-3">Choose Wood If:</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                                        <li>You love the look of natural materials</li>
                                        <li>You want the ability to customize color/style</li>
                                        <li>You are willing to keep up with regular maintenance</li>
                                        <li>You have a lower upfront budget</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-[#fdfbf7] border-l-4 border-[#e4c58a] p-8 rounded-r-xl my-16">
                                <h3 className="text-2xl font-bold font-poppins text-[#4c0c0c] mb-4">Expert Insight from AJ Fence Manufacturing</h3>
                                <p className="mb-4 text-gray-700">
                                    With years of experience helping Florida homeowners, AJ Fence Manufacturing typically recommends vinyl privacy fencing for residential properties. It’s weather-resistant, low-maintenance, and built to last in Florida’s demanding environment.
                                </p>
                                <p className="font-bold text-[#4c0c0c]">
                                    Across the state, more Florida homeowners are opting for vinyl fencing because it stands up better to humidity, requires less maintenance, holds up well during storms, and looks great all year round.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Final Verdict</h2>
                            <p className="mb-12">
                                For most homes in Florida, vinyl privacy fencing is the better overall choice. It offers greater durability, less upkeep, and better long-term value. Wood still has its place for homeowners who prioritize a rustic or natural appearance, but it comes with added responsibilities. Ultimately, your decision depends on your personal preferences, budget, and how much maintenance you’re willing to take on but in Florida, vinyl offers peace of mind that lasts.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* FAQ Section */}
                    <ScrollReveal type="fade-up" delay={0.2}>
                        <div className="mt-16 pt-16 border-t md:border-t-0 border-gray-100">
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
                                <div className="flex gap-2">
                                    {["Florida", "Fencing Comparison", "Vinyl", "Wood", "Privacy Fence"].map(tag => (
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

            {/* Related Posts Simple */}
            <section className="pb-24 bg-[#fdfbf7]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 text-center">
                    <h3 className="text-3xl font-bold font-poppins text-[#4c0c0c] mb-12 italic">You Might Also Like</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link href="/blog/choosing-right-fence-florida" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Guide</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Choosing the Right Fence for Your Florida Home</h4>
                        </Link>
                        <Link href="/blog/aluminum-fence-maintenance-tips" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Maintenance</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">5 Maintenance Tips for Aluminum Fencing</h4>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
