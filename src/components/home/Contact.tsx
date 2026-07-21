"use client";

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ContactProps {
    showBgImage?: boolean;
}

const Contact: React.FC<ContactProps> = ({ showBgImage = true }) => {
    return (
        <section className="w-full bg-white pt-12 md:pt-20 pb-[10px] font-poppins">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Main Container */}
                <div className="relative bg-[#1a1a1a] text-white rounded-[2rem] overflow-hidden p-8 md:p-16 lg:p-20 shadow-2xl">

                    {/* Background Overlay (Subtle) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4c0c0c]/20 to-transparent pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Text & CTA */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left">
                            <ScrollReveal type="fade-up">
                                <span className="text-[#e4c58a] text-base md:text-lg font-bold uppercase tracking-[0.3em] mb-4 block">
                                    Talk to a Specialist
                                </span>
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                    Let&apos;s Talk <br className="hidden md:block" /> Business
                                </h2>
                                <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Have questions about your next fencing project? Our experts are here to provide professional advice and the right fencing solutions fast!
                                </p>
                                <Link
                                    href="/about-us"
                                    className="bg-white text-black px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300 shadow-xl"
                                >
                                    About Us
                                </Link>
                            </ScrollReveal>
                        </div>

                        {/* Middle: Vertical Divider (Hidden on Mobile) */}
                        <div className="hidden lg:block lg:col-span-1 h-64 w-px bg-white/20 mx-auto" />

                        {/* Right Side: Contact Info */}
                        <div className="lg:col-span-4 lg:pl-10 space-y-6 md:space-y-8">
                            <ScrollReveal type="fade-up" delay={0.2}>
                                <div className="space-y-6 md:space-y-8">

                                    <div className="flex items-center gap-5 group">
                                        <div className="p-2.5 bg-[#4c0c0c] rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <a href="tel:+18638163117" className="text-lg md:text-xl font-bold hover:text-[#e4c58a] transition-colors leading-none">
                                            Polk: (863) 816-3117
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="p-2.5 bg-[#4c0c0c] rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <a href="tel:+18132394122" className="text-lg md:text-xl font-bold hover:text-[#e4c58a] transition-colors leading-none">
                                            Hillsborough: (813) 239-4122
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="p-2.5 bg-[#4c0c0c] rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <a href="mailto:ajfencemfg@gmail.com" className="text-lg md:text-xl font-bold hover:text-[#e4c58a] transition-colors break-all">
                                                ajfencemfg@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="p-2.5 bg-[#4c0c0c] rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-lg md:text-xl font-bold leading-tight">
                                                3929 Old Tampa Hwy. <br />
                                                Lakeland, FL 33811
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
