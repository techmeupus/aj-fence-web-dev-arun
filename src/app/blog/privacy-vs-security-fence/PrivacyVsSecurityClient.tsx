"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Plus, Minus, ShieldCheck, EyeOff, CheckCircle2 } from 'lucide-react';
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
        title: "Privacy vs. Security Fences: Which Does Your Property Need?",
        date: "Jun 29, 2026",
        author: "AJ Fence Team",
        image: "/blog-post/fencing installation.webp",
        category: "Guide",
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Which fence provides the most privacy?",
            answer: "Solid wood, vinyl, and composite privacy fences provide the highest level of visual privacy because they eliminate gaps between panels."
        },
        {
            question: "Is a privacy fence more secure than chain link?",
            answer: "A privacy fence offers more visual concealment, while chain link often provides stronger perimeter security. The best choice depends on your property's needs."
        },
        {
            question: "What is the most durable fencing material?",
            answer: "Steel and aluminum are among the most durable fencing materials, while vinyl offers excellent longevity with minimal maintenance."
        },
        {
            question: "How long does fence installation take?",
            answer: "Most residential fence installation projects are completed within a few days, although larger or more complex installations may require additional time."
        },
        {
            question: "Should I hire professionals for fence installation?",
            answer: "Yes. Professional installers ensure your fence is properly aligned, securely anchored, and built to meet local building codes, maximizing its lifespan and performance."
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
                                Whether you're protecting your family, increasing your home's value, or securing a commercial property, choosing the right fence is an important investment. One of the biggest decisions homeowners and business owners face is whether to install a <strong className="text-[#4c0c0c]">privacy fence</strong> or a <strong className="text-[#4c0c0c]">security fence</strong>.
                            </p>
                            <p className="mb-8">
                                While both provide protection and improve your property's appearance, they serve different purposes. Understanding the differences can help you make the best decision based on your needs, budget, and property type. At AJ Fence Manufacturing, we've helped property owners throughout Polk and Hillsborough Counties find the perfect fencing solution. In this guide, we'll compare privacy and security fences, explain their benefits, and help you determine which option is right for your property.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic flex items-center gap-3">
                                <EyeOff className="text-[#e4c58a]" size={32} /> Understanding Privacy Fences
                            </h2>
                            <p className="mb-6">
                                A privacy fence is designed to block visibility into your yard or property. These fences are typically six to eight feet tall and feature tightly spaced panels or boards that eliminate gaps. Privacy fencing creates a secluded outdoor space where families can relax without worrying about neighbors or passersby looking in.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Benefits of Privacy Fencing</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    { title: "Increased Privacy", desc: "Gain a private outdoor living area where you can enjoy your backyard comfortably." },
                                    { title: "Reduced Noise", desc: "Solid fencing helps reduce noise from nearby roads and neighborhoods." },
                                    { title: "Better Curb Appeal", desc: "Available in styles and colors that complement your home's architecture." },
                                    { title: "Enhanced Safety", desc: "Keep children and pets safely contained while discouraging unwanted visitors." },
                                    { title: "Wind Protection", desc: "Reduce strong winds, making outdoor entertainment areas more comfortable." }
                                ].map((benefit, i) => (
                                    <div key={i} className="bg-[#fdfbf7] p-4 rounded-xl border border-[#e4c58a]/20 flex gap-3 items-start">
                                        <CheckCircle2 className="text-[#e4c58a] shrink-0 mt-1" size={20} />
                                        <div>
                                            <h4 className="font-bold text-[#4c0c0c]">{benefit.title}</h4>
                                            <p className="text-sm text-gray-600 m-0">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Common Privacy Fence Materials</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-4">
                                <li><strong>Wood Privacy Fences:</strong> Classic appearance, customizable with stains and paints, affordable upfront, but requires regular maintenance.</li>
                                <li><strong>Vinyl Privacy Fences:</strong> Low-maintenance, no painting required, moisture resistant, long lifespan, but typically has a higher initial investment.</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-16 mb-6 italic flex items-center gap-3">
                                <ShieldCheck className="text-[#e4c58a]" size={32} /> Understanding Security Fences
                            </h2>
                            <p className="mb-6">
                                Security fences are built primarily to prevent unauthorized access and protect people, property, equipment, and valuables. Unlike privacy fencing, security fencing focuses on strength, durability, and deterrence rather than visual screening. They are commonly installed around commercial properties, industrial facilities, schools, and residential properties needing enhanced protection.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Benefits of Security Fencing</h3>
                            <ul className="list-disc pl-6 mb-8 space-y-2">
                                <li><strong>Strong Physical Barrier:</strong> Creates a difficult obstacle for intruders to climb or breach.</li>
                                <li><strong>Crime Deterrence:</strong> Visible fencing discourages trespassing, vandalism, and theft.</li>
                                <li><strong>Controlled Access:</strong> Often includes access gates, electronic entry systems, and controlled vehicle entrances.</li>
                                <li><strong>Long-Term Durability:</strong> Constructed from galvanized steel, aluminum, or heavy-duty chain link.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Common Security Fence Types</h3>
                            <ul className="list-disc pl-6 mb-12 space-y-4">
                                <li><strong>Chain Link Fencing:</strong> Affordable, durable, fast installation. Privacy slats can be added.</li>
                                <li><strong>Aluminum Security Fences:</strong> Rust-resistant, elegant appearance, minimal maintenance, excellent durability.</li>
                                <li><strong>Steel Security Fences:</strong> Provides maximum strength, commonly used for high-security applications.</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-8 italic">Privacy Fence vs. Security Fence</h2>
                            <div className="overflow-x-auto mb-12 shadow-xl rounded-2xl border border-gray-100">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#4c0c0c] text-white">
                                            <th className="p-4 font-bold rounded-tl-2xl">Feature</th>
                                            <th className="p-4 font-bold">Privacy Fence</th>
                                            <th className="p-4 font-bold rounded-tr-2xl">Security Fence</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100 bg-[#fdfbf7]">
                                            <td className="p-4 font-bold text-[#4c0c0c]">Primary Purpose</td>
                                            <td className="p-4">Block visibility</td>
                                            <td className="p-4">Prevent unauthorized access</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-bold text-[#4c0c0c]">Visibility</td>
                                            <td className="p-4">Completely blocks views</td>
                                            <td className="p-4">Usually open design</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 bg-[#fdfbf7]">
                                            <td className="p-4 font-bold text-[#4c0c0c]">Typical Height</td>
                                            <td className="p-4">6–8 feet</td>
                                            <td className="p-4">4–10+ feet</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-bold text-[#4c0c0c]">Materials</td>
                                            <td className="p-4">Wood, Vinyl</td>
                                            <td className="p-4">Chain Link, Steel, Aluminum</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 bg-[#fdfbf7]">
                                            <td className="p-4 font-bold text-[#4c0c0c]">Appearance</td>
                                            <td className="p-4">Decorative</td>
                                            <td className="p-4">Functional</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-[#4c0c0c]">Maintenance</td>
                                            <td className="p-4">Varies by material</td>
                                            <td className="p-4">Generally low</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Which Fence Is Best for You?</h2>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-[#fdfbf7] p-8 rounded-3xl border border-[#e4c58a]/30 shadow-lg hover:-translate-y-1 transition-transform">
                                    <h4 className="text-2xl font-bold text-[#4c0c0c] mb-4">For Residential Properties</h4>
                                    <p className="mb-4">Privacy is often the top priority. A privacy fence is ideal if you want to:</p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                                        <li>Enjoy your backyard without being seen</li>
                                        <li>Create a safer play area for children & pets</li>
                                        <li>Improve your home's appearance and value</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-[#e4c58a]/30 shadow-lg hover:-translate-y-1 transition-transform">
                                    <h4 className="text-2xl font-bold text-[#4c0c0c] mb-4">For Commercial Properties</h4>
                                    <p className="mb-4">Businesses typically prioritize security. They often benefit from:</p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                                        <li>Chain link or steel perimeter fencing</li>
                                        <li>Access-controlled gates</li>
                                        <li>Integrated security cameras</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-[#fdfbf7] border-l-4 border-[#e4c58a] p-8 rounded-r-2xl my-12 shadow-sm">
                                <h3 className="text-2xl font-bold font-poppins text-[#4c0c0c] mb-2">Can You Combine Privacy and Security?</h3>
                                <p className="mb-0 text-gray-700">
                                    Absolutely. Many modern solutions offer both. Examples include reinforced vinyl privacy fencing, tall wood privacy fencing with locking gates, chain link fencing with privacy slats, or installing a tall privacy fence in the backyard while using ornamental aluminum in the front.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Factors to Consider Before Choosing</h2>
                            <p className="mb-6">Before installing, evaluate your <strong>property purpose</strong> (privacy vs protection vs pets). Check <strong>local regulations</strong> like fence heights and HOA rules. Consider <strong>maintenance requirements</strong> (wood vs vinyl) and your <strong>budget</strong>.</p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Why Professional Installation Matters</h2>
                            <p className="mb-6">
                                Even the highest-quality fencing won't perform well if installed incorrectly. Professional installation ensures proper post depth, straight fence lines, secure gates, and compliance with local codes.
                            </p>
                            <p className="mb-12">
                                At AJ Fence Manufacturing, we understand that every property has unique needs. From selecting the right design to completing professional installation, our team helps you select the ideal solution based on your goals and budget.
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
                                    {["Privacy Fence", "Security Fence", "Fencing Guide", "Florida"].map(tag => (
                                        <span key={tag} className="text-sm text-[#4c0c0c] font-medium px-3 py-1 bg-[#fdfbf7] rounded-lg">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[#4c0c0c] font-bold uppercase tracking-widest text-xs border-2 border-[#e4c58a] px-6 py-3 rounded-full hover:bg-[#e4c58a] transition-all hover:shadow-lg">
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
                        <Link href="/blog/vinyl-vs-wood-privacy-fence" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Comparison</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Vinyl vs. Wood: Which Privacy Fence Suits You?</h4>
                        </Link>
                        <Link href="/blog/fence-installation-cost-polk-hillsborough" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Guide</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Fence Installation Cost in Polk & Hillsborough: What to Expect</h4>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
