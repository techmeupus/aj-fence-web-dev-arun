import React from 'react';
import { Building2, Home, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ProfessionalSolutions = () => {
    const services = [
        {
            icon: <Building2 className="w-10 h-10 text-[#e4c58a]" />,
            title: "Commercial Fencing Solutions",
            description: "Secure your business with professionally designed and installed commercial fencing. We specialize in custom solutions for industrial sites, retail properties, and commercial facilities—built for strength, safety, and long-term performance."
        },
        {
            icon: <PenTool className="w-10 h-10 text-[#e4c58a]" />,
            title: "Custom Fence Design & Installation",
            description: "No two properties are the same. Our team works closely with you to design fencing that matches your functional needs and aesthetic goals, ensuring a perfect fit every time."
        },
        {
            icon: <Home className="w-10 h-10 text-[#e4c58a]" />,
            title: "Residential Fencing Services",
            description: "Enhance your home’s privacy, security, and value with high-quality residential fencing. We offer stylish and durable options that complement your home while staying within budget."
        }
    ];


    return (
        <section className="w-full pt-24 pb-0 bg-white text-[#4c0c0c]">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">

                {/* Part 1: Strong Headline + Subheadline */}
                <ScrollReveal type="fade-up">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h4 className="text-[#e4c58a] font-bold uppercase tracking-wider mb-2">Serving Hillsborough, Polk </h4>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Fencing Solutions You Can Trust</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At AJ Fence Inc., we deliver premium commercial and residential fencing solutions designed for security, durability, and curb appeal. From custom commercial installations to residential fencing upgrades, our team provides expert craftsmanship tailored to your property’s needs.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.2} type="fade-up" height="100%" className="h-full">
                            <div
                                className="bg-gray-50 h-full p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group"
                            >
                                <div className="mb-6 p-4 bg-[#4c0c0c] rounded-full group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal type="fade-up" duration={1}>
                    <div className="bg-[#4c0c0c] text-white rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e4c58a] opacity-[0.03] rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.02] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                                Ready to Upgrade Your Property?
                            </h3>
                            <p className="text-white/70 mb-8 text-lg md:text-xl leading-relaxed">
                                Looking for reliable fencing near you? Trust AJ Fence Inc. for professional fencing solutions that deliver world-class security, style, and lasting value.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                                <Link
                                    href="/contact-us"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#e4c58a] text-[#4c0c0c] px-6 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#e4c58a]/10 whitespace-nowrap"
                                >
                                    Get a Free Estimate
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                                <a
                                    href="tel:+18638163117"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/5 text-white border border-white/10 px-6 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                                >
                                    Call (863) 816-3117
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default ProfessionalSolutions;
