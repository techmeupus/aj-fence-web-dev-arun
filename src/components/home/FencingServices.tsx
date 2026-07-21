import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Building2, Shield, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const FencingServices = () => {
    return (
        <section className="w-full pt-24 pb-0 bg-white text-[#4c0c0c] overflow-hidden">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">

                {/* Header */}
                <ScrollReveal type="fade-up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Quality Fencing Solutions</h2>
                        <p className="text-gray-600">Serving Polk & Hillsborough Counties with excellence since 2004</p>
                    </div>
                </ScrollReveal>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Left Large Card - Residential */}
                    <ScrollReveal type="slide-left" duration={1} height="100%" className="h-full">
                        <div className="relative h-[500px] lg:h-full rounded-3xl overflow-hidden group">
                            <Image
                                src="/herosection/1.avif"
                                alt="Residential Fencing"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="inline-flex items-center gap-2 bg-[#e4c58a] px-4 py-1.5 rounded-full text-[#4c0c0c] font-bold text-sm mb-4">
                                    <Home size={16} />
                                    <span>RESIDENTIAL</span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-4 font-poppins">Home Fencing</h3>
                                <p className="text-gray-200 mb-8 max-w-md">
                                    Transform your backyard with elegant privacy fences that enhance your property&apos;s beauty and security.
                                </p>
                                <Link
                                    href="/residential-fencing"
                                    className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#4c0c0c] transition-all duration-300"
                                >
                                    Learn More <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8">

                        {/* Top Card - Info */}
                        <ScrollReveal type="fade-in" delay={0.3} className="flex-1" height="100%">
                            <div className="bg-[#4c0c0c] rounded-3xl p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center">
                                {/* Decorative circle */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e4c58a] opacity-10 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3"></div>

                                <Shield className="text-[#e4c58a] w-10 h-10 mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-4 font-poppins">Residential & Commercial Specialists</h3>
                                <p className="text-gray-300 mb-8">
                                    With over 20 years of experience, we deliver premium fencing solutions tailored to your needs.
                                </p>
                                <div>
                                    <Link
                                        href="/about-us"
                                        className="inline-flex items-center gap-2 border border-[#e4c58a]/30 text-[#e4c58a] px-6 py-2.5 rounded-lg hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300"
                                    >
                                        About Us <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Bottom Card - Commercial */}
                        <ScrollReveal type="slide-right" delay={0.4} className="flex-1" height="100%">
                            <div className="relative h-full min-h-[250px] rounded-3xl overflow-hidden group">
                                <Image
                                    src="/herosection/2.avif"
                                    alt="Commercial Fencing"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="inline-flex items-center gap-2 bg-[#e4c58a] px-3 py-1 rounded-full text-[#4c0c0c] font-bold text-xs mb-3">
                                        <Building2 size={14} />
                                        <span>COMMERCIAL</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-poppins">Business Solutions</h3>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>

                {/* Bottom Banner - Consultation */}
                <ScrollReveal type="fade-up" duration={1} delay={0.2}>
                    <div className="bg-[#4c0c0c] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#e4c58a]/10 to-transparent"></div>
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#e4c58a] opacity-5 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <div className="flex items-center gap-2 text-[#e4c58a] font-bold text-sm uppercase tracking-wider mb-3">
                                    <Calendar size={16} />
                                    <span>Free Consultation</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-poppins">
                                    Schedule Your No-Obligation In-Home Consultation
                                </h3>
                                <p className="text-gray-400">
                                    Let our experts help you find the perfect fencing solution
                                </p>
                            </div>

                            <Link
                                href="/contact-us"
                                className="flex-shrink-0 bg-[#e4c58a] text-[#4c0c0c] px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors duration-300 flex items-center gap-2"
                            >
                                Schedule Now <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default FencingServices;
