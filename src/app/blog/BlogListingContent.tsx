"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const blogPosts = [
    {
        title: "Repairing vs. Replacing a Fence: How to Decide (2026 Guide)",
        excerpt: "Should you repair or replace your fence? Compare costs, damage, lifespan, and expert tips to determine the best solution for your home or business.",
        image: "/blog-post/Repairing vs. Replacing a Fence.webp",
        date: "Jul 30, 2026",
        author: "AJ Fence Team",
        slug: "repairing-vs-replacing-fence",
        category: "Maintenance & Tips"
    },
    {
        title: "Aluminum Fence Installation in Lakeland, FL: Costs, Timeline & Expert Tips",
        excerpt: "Planning an aluminum fence installation in Lakeland, FL? Learn average costs, installation timelines, permit requirements, maintenance tips, and what to expect before starting your project.",
        image: "/blog-post/fence installion lakeland fl.webp",
        date: "Jul 30, 2026",
        author: "AJ Fence Team",
        slug: "aluminum-fence-installation-lakeland-fl",
        category: "Installation Guide"
    },
    {
        title: "Privacy vs. Security Fences: Which Is Right for Your Property?",
        excerpt: "Compare privacy and security fences to find the best option for your home or business. Learn the key differences, benefits, costs, and expert tips before you build.",
        image: "/blog-post/Privacy vs. Security Fences Which Does Your Property Need.jpg",
        date: "Jul 30, 2026",
        author: "AJ Fence Team",
        slug: "privacy-vs-security-fence",
        category: "Comparison Guide"
    },
    {
        title: "Fence Installation Cost in Polk & Hillsborough: What to Expect",
        excerpt: "Learn what to expect for fence installation costs in Polk and Hillsborough counties. We break down the factors that affect fencing costs.",
        image: "/blog-post/wood fence.webp",
        date: "Jun 25, 2026",
        author: "AJ Fence Team",
        slug: "fence-installation-cost-polk-hillsborough",
        category: "Guides"
    },
    {
        title: "Choosing the Right Fence for Your Florida Home",
        excerpt: "Discover the best fencing materials that can withstand Florida's unique climate while enhancing your property's curb appeal.",
        image: "/blog-post/Choosing the Right Fence for Your Florida Home.webp",
        date: "Jan 3, 2026",
        author: "AJ Fence Team",
        slug: "choosing-right-fence-florida",
        category: "Guides"
    },
    {
        title: "Vinyl vs. Wood: Which Privacy Fence is Best?",
        excerpt: "A comprehensive comparison of vinyl and wood fencing to help you decide which material fits your budget and lifestyle.",
        image: "/blog-post/Vinyl vs. Wood Which Privacy Fence Is Best.webp",
        date: "Dec 28, 2025",
        author: "AJ Fence Team",
        slug: "vinyl-vs-wood-privacy-fence",
        category: "Comparison"
    },
    {
        title: "5 Maintenance Tips for Aluminum Fencing",
        excerpt: "Keep your aluminum fence looking brand new for decades with these simple and effective maintenance tips.",
        image: "/blog-post/Maintaining Your Aluminum Fencing 5 Tips for Long-Lasting Performance.webp",
        date: "Dec 15, 2025",
        author: "AJ Fence Team",
        slug: "aluminum-fence-maintenance-tips",
        category: "Maintenance"
    }
];

export default function BlogListingContent() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#4c0c0c] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/herosection/2.avif"
                        alt="Blog Hero"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal type="fade-up">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#e4c58a] mb-6 italic">
                            Latest Articles
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-poppins">
                            Stay up to date with the latest fencing trends, maintenance advice, and home improvement inspiration.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} type="fade-up">
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <article className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                        {/* Image Container */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-[#e4c58a] text-[#4c0c0c] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 md:p-10 flex flex-col flex-1">
                                            <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} className="text-[#e4c58a]" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <User size={16} className="text-[#e4c58a]" />
                                                    <span>{post.author}</span>
                                                </div>
                                            </div>

                                            <h2 className="text-2xl font-bold text-[#4c0c0c] mb-4 group-hover:text-[#e4c58a] transition-colors leading-tight">
                                                {post.title}
                                            </h2>

                                            <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-[#4c0c0c] font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                                    Read Article <ArrowRight size={16} className="text-[#e4c58a]" />
                                                </span>
                                                <BookOpen size={20} className="text-[#e4c58a]/30" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="pb-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal type="fade-up">
                        <div className="bg-[#4c0c0c] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e4c58a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold font-poppins
 text-[#e4c58a] mb-6 italic">
                                    Get Fencing Tips in Your Inbox
                                </h3 >
                                <p className="text-white/70 mb-10 max-w-xl mx-auto">
                                    Join our community and receive expert advice on fence selection, maintenance, and backyard design.
                                </p>
                                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e4c58a]/50"
                                    />
                                    <button className="bg-[#e4c58a] text-[#4c0c0c] px-8 py-4 rounded-2xl font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
