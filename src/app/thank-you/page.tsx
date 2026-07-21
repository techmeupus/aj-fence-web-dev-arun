"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ThankYouPage = () => {
    return (
        <main className="min-h-screen bg-[#fdfbf7] flex items-center justify-center p-4 font-poppins">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-[#4c0c0c]/5 text-center relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#e4c58a]/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4c0c0c]/5 rounded-full -ml-16 -mb-16 blur-3xl" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                            className="w-24 h-24 bg-[#e4c58a] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#e4c58a]/20"
                        >
                            <CheckCircle2 className="text-[#4c0c0c]" size={48} />
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl font-bold text-[#4c0c0c] mb-6 leading-tight">
                            Thank You!
                        </h1>

                        <p className="text-xl text-[#4c0c0c]/70 mb-10 leading-relaxed max-w-lg mx-auto">
                            Our fencing expert will contact you <span className="text-[#4c0c0c] font-bold">shortly</span>.
                            We appreciate your interest in <span className="text-[#4c0c0c] font-bold">AJ Fencing</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-[#4c0c0c] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all duration-300 shadow-xl"
                            >
                                <ArrowLeft size={18} />
                                Back to Home
                            </Link>
                            <Link
                                href="/fencing-services/aluminum"
                                className="text-[#4c0c0c]/60 hover:text-[#4c0c0c] font-bold uppercase tracking-widest text-sm transition-colors"
                            >
                                View Other Services
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <p className="text-center mt-8 text-[#4c0c0c]/40 text-sm italic">
                    Quality craftsmanship since 1995.
                </p>
            </div>
        </main>
    );
};

export default ThankYouPage;
