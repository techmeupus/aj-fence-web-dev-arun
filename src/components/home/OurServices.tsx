import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const OurServices = () => {
    const services = [
        {
            title: "Vinyl Fence",
            image: "/services/vinyl_fencing.avif",
            link: "/fencing-services/vinyl/",
            description: "Provide your home Privacy & Security with a Full-Privacy Vinyl Fence."
        },
        {
            title: "Aluminum Fence",
            image: "/services/Aluminum Black.avif",
            link: "/fencing-services/aluminum/",
            description: "Complement your home, property and investment with the different styles and designs of Ornamental Fence AJ provides."
        },
        {
            title: "Wood",
            image: "/services/wooden fencing.avif",
            link: "/fencing-services/wood/",
            description: "Classic, natural beauty that provides privacy and security for your home."
        },
        {
            title: "Chain Link",
            image: "/chain-link.webp",
            link: "/fencing-services/chain-link/",
            description: "Durable, cost-effective fencing solution for residential and commercial properties."
        }
    ];

    return (
        <section
            className="w-full pt-24 pb-0 bg-[#fdfbf7]"
            style={{
                backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(23, 23, 23, 0.03) 0,
          rgba(23, 23, 23, 0.03) 1px,
          transparent 0,
          transparent 50%
        )`,
                backgroundSize: '20px 20px'
            }}
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">

                {/* Header */}
                <ScrollReveal type="fade-up">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4c0c0c] italic">
                            Complement your home with one of our custom-built fences.
                        </h2>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-[1px] w-16 bg-[#4c0c0c]/30"></div>
                            <div className="w-2 h-2 rounded-full bg-[#4c0c0c]"></div>
                            <div className="h-[1px] w-16 bg-[#4c0c0c]/30"></div>
                        </div>
                        <p className="text-[#4c0c0c] font-poppins italic text-lg">
                            Provide your home Privacy & Security with a Full-Privacy Vinyl Fence.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.2} type="fade-up">
                            <div
                                className="group"
                            >
                                <Link href={service.link} className="block">
                                    {/* Image Card */}
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg transition-shadow duration-500 group-hover:shadow-2xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#4c0c0c]/70 via-[#4c0c0c]/20 to-transparent"></div>

                                        {/* Title Overlay */}
                                        <h3 className="absolute bottom-6 left-8 text-4xl md:text-5xl font-bold text-white font-poppins tracking-wide drop-shadow-lg">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Content Below */}
                                    <div className="px-2">
                                        {/* Tags */}
                                        <p className="text-xs font-bold text-[#4c0c0c] uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <span>RESIDENTIAL</span>
                                            <span className="w-1 h-1 rounded-full bg-[#4c0c0c]"></span>
                                            <span>COMMERCIAL</span>
                                            <span className="w-1 h-1 rounded-full bg-[#4c0c0c]"></span>
                                            <span>CUSTOM-BUILT</span>
                                        </p>

                                        {/* Arrow + Title Row */}
                                        <div className="flex items-center gap-3 text-[#4c0c0c] font-bold uppercase tracking-wider transition-colors duration-300">
                                            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                                            <span>{service.title.toUpperCase()}</span>
                                        </div>

                                        {/* Description (Expand on Hover) */}
                                        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 ease-in-out">
                                            <p className="mt-3 text-[#4c0c0c] text-sm leading-relaxed max-w-md pl-8">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurServices;
