import { Metadata } from 'next';
import Image from "next/image";
import Contact from "@/components/home/Contact";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
    title: "Contact AJ Fence | Get Help to Install Fence Today",
    description: "Contact AJ Fence to install fence for your home or business. Speak with our fencing experts about vinyl, wood, and chain-link fencing solutions.",
};

export default function ContactUsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/herosection/conact us image.avif"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 uppercase tracking-wider leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl text-[#e4c58a] font-poppins italic leading-relaxed">
                            Have questions about your next fencing project? Our experts are here to provide professional advice and the right fencing solutions fast!
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <Contact showBgImage={false} />

            {/* Contact Form Section */}
            <ContactForm />
        </main>
    );
}
