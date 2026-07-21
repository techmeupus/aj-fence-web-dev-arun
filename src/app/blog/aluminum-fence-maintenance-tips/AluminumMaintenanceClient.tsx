"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AluminumMaintenanceClient() {
    const post = {
        title: "5 Maintenance Tips for Aluminum Fencing",
        date: "Dec 15, 2025",
        author: "AJ Fence Team",
        image: "/blog-post/Maintaining Your Aluminum Fencing 5 Tips for Long-Lasting Performance.webp",
        category: "Maintenance",
    };

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
                                Aluminum fencing has quickly become a favorite among Florida homeowners, thanks to its sleek look and lasting strength. It doesn’t rust, handles humidity like a champ, and stays attractive for years. But even with all those advantages, your aluminum fence still needs a little care to stay in top shape.
                            </p>
                            <p className="mb-12">
                                Here are five easy maintenance tips to help keep your fence clean, strong, and reliable for years to come.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Why Even Aluminum Fences Need a Little TLC</h2>
                            <p className="mb-6">
                                It’s easy to think aluminum fencing is completely maintenance-free. While it’s certainly low-maintenance compared to wood or steel, it still faces daily exposure to sun, rain, wind, and debris. Over time, these elements can take a toll unless you stay ahead with a few simple upkeep habits.
                            </p>
                            <p className="mb-12">
                                The good news? Aluminum fence maintenance is quick, low-cost, and super manageable when done regularly.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">1. Clean Your Fence Regularly to Protect the Finish</h3>
                            <p className="mb-4">
                                Over time, dirt, pollen, and grime build up especially in Florida’s warm and humid climate. While this doesn’t immediately harm the fence, it can make the finish look dull and aged.
                            </p>
                            <p className="mb-6">
                                Give your fence a rinse with a garden hose every few months. For tougher spots, use mild soap and water. Skip the harsh chemicals and rough scrubbers they can damage the powder-coated finish. Regular cleaning keeps your fence looking sharp and helps preserve its protective coating.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">2. Tighten Loose Parts Before They Become Bigger Problems</h3>
                            <p className="mb-6">
                                Strong winds, storms, and general wear can loosen screws, panels, and gate hardware over time. That’s why it’s smart to check your fence at least twice a year. Look over all the connection points and hardware. Tighten anything that’s loose and make sure gates still swing and latch properly. Catching these issues early prevents bigger repairs later.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">3. Protect the Powder-Coated Finish</h3>
                            <p className="mb-6">
                                One of aluminum fencing’s top benefits is its powder-coated finish, which protects against rust and fading. But even this durable coating can get scratched by lawn equipment or flying debris during storms. If you spot a chip or scratch, don’t wait. Clean the area and use a touch-up paint made for aluminum fencing. It’s a small step that makes a big difference in preserving both appearance and durability.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">4. Trim Back Plants and Landscaping</h3>
                            <p className="mb-6">
                                A beautifully landscaped yard is a great companion to your fence but not if plants are growing too close. Bushes, vines, and tall grass can trap moisture and debris against the fence, which wears down the finish. Keep vegetation trimmed and allow space around the fence for airflow. After rain, this helps the fence dry quickly and stay in better condition.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">5. Inspect Your Fence After Storms</h3>
                            <p className="mb-12">
                                Florida storms come fast and hard, often with heavy wind and rain. After a major weather event, take a walk along your fence line. Check for shifted panels, loose posts, or gates that don’t close right. Catching these issues early means quicker fixes and a longer-lasting fence.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">How Often Should You Maintain an Aluminum Fence?</h2>
                            <p className="mb-12">
                                Generally, your aluminum fence needs light cleaning every few months and a simple inspection once or twice a year. If you live near the coast, rinsing more often to remove salt buildup can help prevent corrosion. Compared to other fencing materials, aluminum is a breeze to maintain and it lasts longer, too.
                            </p>

                            <div className="bg-[#fdfbf7] border-l-4 border-[#e4c58a] p-8 rounded-r-xl my-16">
                                <h3 className="text-2xl font-bold font-poppins text-[#4c0c0c] mb-4">Why Quality Manufacturing Matters</h3>
                                <p className="mb-4 text-gray-700">
                                    Even the best maintenance won’t do much for a poorly made fence. That’s why AJ Fence Manufacturing focuses on high-quality aluminum fencing designed for Florida’s climate. With strength, durability, and minimal maintenance built in, you’re set up for success from the start.
                                </p>
                                <p className="font-bold text-[#4c0c0c]">
                                    Combine expert manufacturing with simple care, and your fence will serve you well for decades.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Final Thoughts</h2>
                            <p className="mb-12">
                                Aluminum fencing is a smart, long-term investment for homeowners who want durability without the hassle. With a little cleaning, occasional inspections, minor touch-ups, and proper landscaping care, your fence will keep looking great and standing strong. A few small steps today can add years of life to your fence and keep your property looking its best.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Tags & Bottom Share */}
                    <div className="mt-16 pt-16 border-t border-gray-100 italic">
                        <div className="flex flex-wrap items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Tags:</span>
                                <div className="flex gap-2">
                                    {["Maintenance", "Aluminum Fence", "Florida", "Tips"].map(tag => (
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
                        <Link href="/blog/vinyl-vs-wood-privacy-fence" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Comparison</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Vinyl vs. Wood: Which is Best?</h4>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
