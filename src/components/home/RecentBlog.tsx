"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const recentPosts = [
    {
        title: "Choosing the Right Fence for Your Florida Home",
        image: "/herosection/1.avif",
        slug: "choosing-right-fence-florida",
        category: "Guides"
    },
    {
        title: "Vinyl vs. Wood: Which Privacy Fence is Best?",
        image: "/services/vinyl_fencing.avif",
        slug: "vinyl-vs-wood-privacy-fence",
        category: "Comparison"
    },
    {
        title: "5 Maintenance Tips for Aluminum Fencing",
        image: "/services/Aluminum Black.avif",
        slug: "aluminum-fence-maintenance-tips",
        category: "Maintenance"
    }
];

export default function RecentBlog() {
    return (
        <section className="pt-24 pb-0 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
                <ScrollReveal type="fade-up">
                    <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-sm mb-4 block">Inside Our Blog</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#4c0c0c] mb-6 italic">
                        Recent Blogs
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-poppins text-lg">
                        Expert advice and inspiration to help you choose, install, and maintain the perfect fence.
                    </p>
                </ScrollReveal>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} type="fade-up">
                            <Link href={`/blog/${post.slug}/`} className="group block h-full">
                                <article className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#e4c58a] text-[#4c0c0c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-[#4c0c0c] mb-6 group-hover:text-[#e4c58a] transition-colors leading-tight min-h-[3.5rem] flex items-center">
                                            {post.title}
                                        </h3>

                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <span className="text-[#4c0c0c] font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                                Read More <ArrowRight size={14} className="text-[#e4c58a]" />
                                            </span>
                                            <BookOpen size={16} className="text-[#e4c58a]/30" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <ScrollReveal delay={0.4} type="fade-up">
                        <Link
                            href="/blog/"
                            className="inline-flex items-center gap-2 bg-[#4c0c0c] text-[#e4c58a] px-10 py-4 rounded-full font-bold hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300 shadow-xl"
                        >
                            View All Posts <ArrowRight size={18} />
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
