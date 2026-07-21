"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<'services' | 'learn-more' | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["Home", "Fencing Services", "Learn More", "About us", "Blog", "Contact US"];

    if (pathname?.toLowerCase().startsWith('/landing')) return null;

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 border-b border-[#e4c58a]/20 shadow-md transition-colors duration-300 ${isScrolled ? "bg-[#4c0c0c]" : "bg-transparent"
                    }`}
            >
                <div className="flex w-full items-center justify-between px-5 py-2">
                    {/* Left Side: Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/Aj fence logoAsset 3-8.png"
                                alt="AJ Fence Logo"
                                width={200}
                                height={80}
                                className="w-[190px] h-auto md:w-[205px] object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Center: Navigation Links (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((item) => {
                            if (item === "Fencing Services") {
                                return (
                                    <div key={item} className="relative group">
                                        <div
                                            className="relative text-lg font-medium transition-colors flex items-center gap-1 cursor-pointer"
                                            style={{ color: "#e4c58a" }}
                                        >
                                            {item}
                                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#e4c58a] transition-all duration-300 group-hover:w-full"></span>
                                        </div>
                                        {/* Dropdown Menu */}
                                        <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="rounded-lg shadow-lg border border-[#e4c58a]/20 overflow-hidden" style={{ backgroundColor: "#4c0c0c" }}>
                                                {["Aluminum", "Vinyl", "Wood", "Chain Link"].map((material) => (
                                                    <Link
                                                        key={material}
                                                        href={`/fencing-services/${material.toLowerCase().replace(/\s+/g, "-")}/`}
                                                        className="block px-4 py-3 text-[#e4c58a] hover:bg-[#e4c58a]/10 transition-colors"
                                                    >
                                                        {material}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            if (item === "Learn More") {
                                return (
                                    <div key={item} className="relative group">
                                        <div
                                            className="relative text-lg font-medium transition-colors flex items-center gap-1 cursor-pointer"
                                            style={{ color: "#e4c58a" }}
                                        >
                                            {item}
                                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#e4c58a] transition-all duration-300 group-hover:w-full"></span>
                                        </div>
                                        {/* Dropdown Menu */}
                                        <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="rounded-lg shadow-lg border border-[#e4c58a]/20 overflow-hidden" style={{ backgroundColor: "#4c0c0c" }}>
                                                {[
                                                    { name: "Fence Company", href: "/fence-company/" },
                                                    { name: "Fence Installation", href: "/fence-installation/" },
                                                    { name: "Home Fencing", href: "/home-fencing/" },
                                                    { name: "Vinyl Fence", href: "/vinyl-fence/" },
                                                    { name: "Fence Contractor", href: "/fence-contractor/" },
                                                    { name: "Chain Link Fence", href: "/chain-link-fence/" },
                                                    { name: "Residential Fence", href: "/residential-fence/" }
                                                ].map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        className="block px-4 py-3 text-[#e4c58a] hover:bg-[#e4c58a]/10 transition-colors"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}/`}
                                    className="group relative text-lg font-medium transition-colors"
                                    style={{ color: "#e4c58a" }}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#e4c58a] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side: Contact & Socials (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4" style={{ color: "#e4c58a" }}>
                        {/* Contact Info */}
                        <div className="flex flex-col items-end gap-2">
                            {/* Polk Location */}
                            <a
                                href="tel:+18638163117"
                                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold transition-transform hover:scale-105 active:scale-95 bg-[#e4c58a] text-[#4c0c0c]"
                            >
                                <Phone size={14} fill="#4c0c0c" />
                                Polk: +1 (863) 816-3117
                            </a>

                            {/* Hillsborough Location */}
                            <a
                                href="tel:+18132394122"
                                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold transition-transform hover:scale-105 active:scale-95 bg-[#e4c58a] text-[#4c0c0c]"
                            >
                                <Phone size={14} fill="#4c0c0c" />
                                Hillsborough: +1 (813) 239-4122
                            </a>
                        </div>

                        {/* Social Icons (Vertical) */}
                        <div className="flex flex-col items-center gap-2 border-l border-[#e4c58a]/30 pl-4">
                            <a
                                href="https://www.instagram.com/ajfenceinc?igsh=MXB1czcwZmdzaXFkbA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                                aria-label="Instagram"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#E4405F" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/aj-fence-mfg-inc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                                aria-label="LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                                aria-label="Facebook"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#1877F2" />
                                    <path d="M15 12h-2v7h-3v-7H8v-3h2V7.5C10 5.57 11.57 4 13.5 4H16v3h-2c-0.55 0-1 0.45-1 1v1h3l-1 3z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-md transition-colors hover:bg-[#e4c58a]/10"
                        aria-label="Toggle menu"
                        style={{ color: "#e4c58a" }}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Slide-in */}
            <div
                className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ backgroundColor: "#4c0c0c" }}
            >
                <div className="flex flex-col h-full p-6" style={{ color: "#e4c58a" }}>
                    {/* Close Button */}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="self-end p-2 mb-6 rounded-md hover:bg-[#e4c58a]/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-4 mb-8">
                        {navLinks.map((item) => {
                            if (item === "Fencing Services" || item === "Learn More") {
                                const isServices = item === "Fencing Services";
                                const isOpen = isServices ? (mobileSubmenuOpen === 'services') : (mobileSubmenuOpen === 'learn-more');
                                const toggleSubmenu = () => setMobileSubmenuOpen(isOpen ? null : (isServices ? 'services' : 'learn-more'));

                                return (
                                    <div key={item} className="flex flex-col">
                                        <button
                                            onClick={toggleSubmenu}
                                            className="flex items-center justify-between text-xl font-medium hover:text-[#e4c58a]/80 transition-colors text-left"
                                        >
                                            {item}
                                            <svg
                                                className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {/* Mobile Submenu */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}
                                        >
                                            <div className="flex flex-col space-y-2 pl-4 border-l-2 border-[#e4c58a]/30">
                                                {isServices ? (
                                                    ["Aluminum", "Vinyl", "Wood", "Chain Link"].map((material) => (
                                                        <Link
                                                            key={material}
                                                            href={`/fencing-services/${material.toLowerCase().replace(/\s+/g, "-")}/`}
                                                            className="text-lg py-2 hover:text-[#e4c58a]/80 transition-colors"
                                                            onClick={() => {
                                                                setMobileMenuOpen(false);
                                                                setMobileSubmenuOpen(null);
                                                            }}
                                                        >
                                                            {material}
                                                        </Link>
                                                    ))
                                                ) : (
                                                    [
                                                        { name: "Fence Company", href: "/fence-company/" },
                                                        { name: "Fence Installation", href: "/fence-installation/" },
                                                        { name: "Home Fencing", href: "/home-fencing/" },
                                                        { name: "Vinyl Fence", href: "/vinyl-fence/" },
                                                        { name: "Fence Contractor", href: "/fence-contractor/" },
                                                        { name: "Chain Link Fence", href: "/chain-link-fence/" },
                                                        { name: "Residential Fence", href: "/residential-fence/" }
                                                    ].map((link) => (
                                                        <Link
                                                            key={link.name}
                                                            href={link.href}
                                                            className="text-lg py-2 hover:text-[#e4c58a]/80 transition-colors"
                                                            onClick={() => {
                                                                setMobileMenuOpen(false);
                                                                setMobileSubmenuOpen(null);
                                                            }}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}/`}
                                    className="text-xl font-medium hover:text-[#e4c58a]/80 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-4 border-t border-[#e4c58a]/20 pt-6">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-wider opacity-90 block mb-2">Polk</span>
                            <a
                                href="tel:+18638163117"
                                className="flex items-center gap-2 text-lg hover:text-[#e4c58a]/80 transition-colors"
                            >
                                <Phone size={18} />
                                +1 (863) 816-3117
                            </a>
                        </div>
                        <div>
                            <span className="text-sm font-bold uppercase tracking-wider opacity-90 block mb-2">Hillsborough</span>
                            <a
                                href="tel:+18132394122"
                                className="flex items-center gap-2 text-lg hover:text-[#e4c58a]/80 transition-colors"
                            >
                                <Phone size={18} />
                                +1 (813) 239-4122
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-auto pt-6 border-t border-[#e4c58a]/20">
                        <a
                            href="https://www.instagram.com/ajfenceinc?igsh=MXB1czcwZmdzaXFkbA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="Instagram"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#E4405F" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/aj-fence-mfg-inc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="LinkedIn"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="Facebook"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#1877F2" />
                                <path d="M15 12h-2v7h-3v-7H8v-3h2V7.5C10 5.57 11.57 4 13.5 4H16v3h-2c-0.55 0-1 0.45-1 1v1h3l-1 3z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
