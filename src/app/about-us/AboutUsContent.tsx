'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

const AboutUsContent = () => {
    const serviceAreas = [
        "Lakeland", "Auburndale", "Lake Alfred", "Bartow", "Mulberry",
        "Highland Park", "Davenport", "Lakeland Highlands", "Medulla",
        "Willow Oak", "Crystal Lake", "Polk City", "Plant City", "Dover",
        "Seffner", "Thonotosassa", "Ruskin", "Riverview", "Brandon",
        "Bloomingdale", "Valrico", "Tampa", "West Tampa", "Town ‘n’ Country",
        "Wesley Chapel", "Odessa", "Fish Hawk", "Gibsonton", "Lutz"
    ];

    return (
        <main className="bg-[#fdfbf7]">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="/aboutusimage.avif"
                    alt="About AJ Fence"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4">
                    <ScrollReveal type="fade-up" delay={0.2}>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-wider">
                            About AJ Fence Inc.
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal type="fade-up" delay={0.4}>
                        <p className="text-xl md:text-3xl text-[#e4c58a] font-poppins italic">
                            Your trusted local fencing Experts
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Story */}
                    <div className="lg:col-span-8 space-y-8">
                        <ScrollReveal type="slide-left">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#4c0c0c] mb-8 italic">
                                    Our Story & Commitment
                                </h2>
                                <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-poppins">
                                    <p>
                                        Founded in 2004, AJ Fence Inc. is a family-owned and operated fencing company based in Lakeland, Florida. With more than twenty years of experience in custom-built fencing, we are committed to delivering exceptional workmanship and complete customer satisfaction.
                                    </p>
                                    <p>
                                        Our primary goal is to provide high-quality, durable, and low-maintenance fencing solutions at an affordable price to our surrounding communities. AJ Fence Inc. is fully licensed and insured, offering competitive pricing and products built to last.
                                    </p>
                                    <p className="font-bold text-[#4c0c0c]">
                                        Every fence we install is custom-crafted using premium materials.
                                    </p>
                                    <p>
                                        With more than 20 years of industry experience, we have earned a strong reputation for reliability, craftsmanship, and personalized service. Whether you are a homeowner seeking to enhance the security and appearance of your property or a business owner in need of a dependable perimeter solution, we provide customized fencing services designed to meet your specific needs.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Service Areas Sidebar */}
                    <div className="lg:col-span-4">
                        <ScrollReveal type="slide-right">
                            <div className="bg-[#4c0c0c] p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                                {/* Decorative element */}
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#e4c58a] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />

                                <h3 className="text-2xl font-bold text-[#e4c58a] mb-6">
                                    Serving Central Florida
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {serviceAreas.map((area, index) => (
                                        <ScrollReveal key={index} delay={0.1 + (index % 10) * 0.05} type="fade-in" width="fit-content">
                                            <span
                                                className="text-white/80 text-sm border border-white/10 px-3 py-1 rounded-full hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-colors duration-300 block"
                                            >
                                                {area}
                                            </span>
                                        </ScrollReveal>
                                    ))}
                                    <span className="text-[#e4c58a] text-sm italic font-poppins mt-2">...and many more</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Accent Section */}
            <section className="py-20 bg-[#4c0c0c] text-white overflow-hidden relative">
                <ScrollReveal type="scale-up" duration={1.2}>
                    <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                        <div className="w-24 h-1 bg-[#e4c58a] mx-auto mb-10" />
                        <h3 className="text-3xl md:text-5xl italic mb-6">
                            "Your Vision, Our Craftsmanship"
                        </h3>
                        <p className="text-[#e4c58a] font-poppins text-xl">
                            Providing the community with secure and beautiful boundaries since 2004.
                        </p>
                    </div>
                </ScrollReveal>
                {/* Background texture or pattern could go here */}
            </section>
        </main>
    );
};

export default AboutUsContent;
