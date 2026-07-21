"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us/' },
        { name: 'Blog', href: '/blog/' },
        { name: 'Contact', href: '/contact-us/' }
    ];

    const services = [
        'Vinyl Fencing',
        'Aluminum Fencing',
        'Wood Fencing',
        'Chain Link Fencing',
        'Custom Fencing',
        'Fence Repair'
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, href: '#' },
        { icon: <Instagram size={20} />, href: '#' },
        { icon: <Twitter size={20} />, href: '#' },
        { icon: <Linkedin size={20} />, href: '#' }
    ];

    if (pathname?.toLowerCase().startsWith('/landing')) return null;

    return (
        <footer className="bg-[#4c0c0c] text-white pt-16 pb-8 border-t border-white/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/logoajfencing.webp"
                                alt="AJ Fence Logo"
                                width={150}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed mb-6">
                            At AJ Fence Inc., we specialize in providing high-quality commercial fencing and custom commercial fence installation throughout Hillsborough, Polk, and Lakeland, FL. Our dedicated team offers expert fencing services designed to meet the unique needs of both businesses and homeowners.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-[#e4c58a] mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-[#e4c58a] transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-xl font-bold text-[#e4c58a] mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            {services.map((service) => {
                                let href = '#services';
                                if (service === 'Aluminum Fencing') href = '/fencing-services/aluminum/';
                                if (service === 'Vinyl Fencing') href = '/fencing-services/vinyl/';
                                if (service === 'Wood Fencing') href = '/fencing-services/wood/';
                                if (service === 'Chain Link Fencing') href = '/fencing-services/chain-link/';

                                return (
                                    <li key={service}>
                                        <Link
                                            href={href}
                                            className="text-white/80 hover:text-[#e4c58a] transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#e4c58a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {service}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold text-[#e4c58a] mb-6">Get In Touch</h4>
                        <div className="space-y-4 text-white/80">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#e4c58a] shrink-0 mt-1" />
                                <p className="text-sm">3929 Old Tampa Hwy.<br />Lakeland, Fl 33811</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#e4c58a] shrink-0" />
                                <p className="text-sm">+1 (863) 816-3117</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#e4c58a] shrink-0" />
                                <p className="text-sm">ajfencemfg@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-white/60 text-sm">
                        © {currentYear} AJ Fence Mfg Inc. Lakeland, Florida
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
