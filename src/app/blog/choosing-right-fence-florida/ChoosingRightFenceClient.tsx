"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Plus, Minus } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-[#e4c58a]/20 last:border-0">
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full py-6 text-left group"
            >
                <h4 className={`text-lg md:text-xl font-bold font-poppins transition-colors duration-300 ${isOpen ? 'text-[#e4c58a]' : 'text-[#4c0c0c] group-hover:text-[#e4c58a]'}`}>
                    {question}
                </h4>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-[#e4c58a]/30 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#e4c58a] text-[#4c0c0c]' : 'bg-transparent text-[#e4c58a]'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ChoosingRightFenceClient() {
    const post = {
        title: "Choosing the Right Fence for Your Florida Home",
        date: "Jan 08, 2026",
        author: "AJ Fence Team",
        image: "/blog-post/Choosing the Right Fence for Your Florida Home.webp",
        category: "Guides",
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the longest lasting fence in FL?",
            answer: "Most of the time, it is aluminum fences that are truly long lasting in Florida. It’s less susceptible to rust, moisture, salt air and sun than its wood and steel counterparts but trust us it holds up equally well for the long haul in both beach and inland abodes."
        },
        {
            question: "Is aluminum fence better than vinyl in Florida homes?",
            answer: "They both do a good job here in Florida, but many people opt for aluminum because it is stronger and more resistant to heavy winds or coastal conditions. Vinyl is optimal for privacy, while aluminum is a good fit for security, pools and front yards."
        },
        {
            question: "What type of fencing do Florida HOAs permit?",
            answer: "Not always. Most HOAs have rules about the height, material and design of fences. Before adding a fence, you may want to find out the homeowners association guidelines or work with a manufacturer who is well-versed in Florida regulations."
        },
        {
            question: "What is the strongest fence for pool safety in Florida?",
            answer: "Aluminum and vinyl are the most popular materials for pool safety barriers in Florida. They are compliant yet durable for ease of mind and visibility."
        },
        {
            question: "Is wood fencing not recommended in Florida?",
            answer: "Wood fencing isn’t a terrible option, but it does need more upkeep in Florida’s humid climate. Left unsealed and uncared for, the wood can rot, warp or attract termites more quickly than most other materials."
        },
        {
            question: "What effect does living by the coast have on a fence?",
            answer: "The salt air, in homes closer to the coast, can hasten corrosion. It will also hold up better in harsh weather than steel or iron (especially if it is coated)."
        },
        {
            question: "How much upkeep does a Florida fence require?",
            answer: "Maintenance depends on the material. Fences made of aluminum and vinyl, which require little maintenance beyond cleaning and an occasional inspection, will last much longer than wooden ones need only stays in good condition over time with regular sealing, staining and repairs."
        },
        {
            question: "Will putting up a fence add value to my home?",
            answer: "Yes, the right fence can enhance curb appeal, privacy and security — and you may sell your home more quickly or at a higher price if it has one. Low-maintenance fencing such as aluminum or vinyl is particularly appealing to future homeowners."
        },
        {
            question: "How do I choose the right fence for my home?",
            answer: "The right fence is one that offers everything you want and need for your property—privacy, security, blocking the wind or sounds, safety for pets and children (if applicable), attracting wildlife or birds of certain species, a backdrop to garden plantings and decorative landscaping — all picked up from the surrounding environment as a whole. The guidance of an experienced Florida fence manufacturer can help you determine the best option."
        }
    ];

    return (
        <main className="bg-white min-h-screen font-sans">
            {/* Post Hero */}
            <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#4c0c0c] overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal type="fade-up">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#e4c58a] font-bold uppercase tracking-widest text-xs mb-8 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={16} /> Back to Blog
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-[#e4c58a] text-[#4c0c0c] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 text-white/80 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#e4c58a] flex items-center justify-center text-[#4c0c0c]">
                                    <User size={18} />
                                </div>
                                <span className="font-bold">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#e4c58a]" />
                                <span>{post.date}</span>
                            </div>
                            <div className="ml-auto flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Share:</span>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all"><Facebook size={14} /></button>
                                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all"><Twitter size={14} /></button>
                                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e4c58a] hover:text-[#4c0c0c] transition-all"><Linkedin size={14} /></button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </header>

            {/* Post Content */}
            <article className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal type="fade-up" delay={0.2}>
                        <div className="prose prose-lg prose-headings:text-[#4c0c0c] prose-a:text-[#e4c58a] max-w-none text-gray-600 leading-relaxed font-sans">
                            <p className="mb-8 text-xl font-medium text-gray-800">
                                When selecting a fence for your Florida home, you want to consider more than just style. Underneath Florida’s sun, high humidity levels, extreme storms and frequent rains can make its demands on fencing materials here unique. Combine that with any HOA restrictions and local laws which may apply, and it’s easy to see why fence installation in Florida is something that takes consideration.
                            </p>
                            <p className="mb-12">
                                In this guide, we’ll help you decide on the ideal fence for your Florida home including materials and climate factors, as well as regulations, maintenance and advice from a professional fencing Insider at AJ Fence Manufacturing (a leading fence manufacturer in Florida that serves homeowners around the state).
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Why Fence Choices Are Important In Florida</h2>
                            <p className="mb-8">
                                The environment in Florida can be relentless on fences. Use the wrong material and you might have problems much earlier than anticipated. Heat may also warp and crack the tray, particularly if using cheaper material. Fences installed near the coast are susceptible to salt air and rust. Moisture and humidity contribute to mold, rot and termite damage, while hurricane-season winds can stress a fence’s structural integrity.
                            </p>
                            <p className="mb-12">
                                That’s why Florida home and property owners need fence that is durable, weather resistant, long-lasting and low-maintenance; without all the fire-hazard issues of traditional untreated or uncared-for wood.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Things to Think About Before Selecting a Fence</h2>
                            <p className="mb-8">
                                There are key factors that will go into the decision of which fence is right for you and your specific requirements.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Start With the Function of Your Fence</h3>
                            <p className="mb-6">
                                Begin with determining why you want a fence. For some homeowners, it is all about privacy, and for others, security, pool safety and the wellbeing of their pets or children comes first. Fences can also be used to delineate property lines or spruce up a curb appeal. The function you want your fence to serve will have a big impact on the type of fence material, height and style that is best for your home.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Florida Climate</h3>
                            <p className="mb-6">
                                Florida fences are subject to continuous exposure of moisture, UV rays, rain, wind and salt air (in coastal areas). Aluminum, vinyl and pressure-treated wood in particular does a whole lot better than naked wood or plain steel, which will rot away in no time at all.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">HOA Rules and Local Ordinances</h3>
                            <p className="mb-12">
                                Several Florida communities have homeowners’ associations with rules about fence height, style and placement. There may be pool safety laws and city zoning regulations to consider as well. These requirements are important to verify before installing or contacting someone like AJ Fence Manufacturing that knows every detail about Florida compliance.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Top Fence Choices for Florida Homes</h2>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Aluminum Fencing – Top Choice Florida</h3>
                            <p className="mb-6">
                                There are a number of great reasons that aluminum fencing is so well-liked in the state of Florida! Rustproof and corrosion resistance lightweight, but strong enough to hold up in bad weather. Aluminum is low maintenance and has years of life even in coastal settings. This kind of fencing is ideal for the front yard and also a pool area, gated communities as well as modern or traditional looking homes. AJ Fence MFG Offers aluminum fence systems made specifically for Florida’s climate!
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Vinyl Fencing: The Privacy Ideal</h3>
                            <p className="mb-6">
                                Vinyl fencing is perfect for the homeowner who desires privacy but doesn’t want constant upkeep. It rejects moisture and decay, is paint-free and presents a neat, modern look. A number of vinyl options are also UV-resistant, which means they’re better at retaining color through time.
                            </p>
                            <p className="mb-6">
                                Correct installation is crucial since vinyl will need to be braced for heavy winds. Don’t forget to select a high grade vinyl, as cheaper ones can crack under extreme heat.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Wood Fencing: Timeless and High Maintenance</h3>
                            <p className="mb-6">
                                Wood fencing is attractive for its natural, timeless appearance and can be easily customized. It can be painted or stained to complement the look of a home and offers great privacy.
                            </p>
                            <p className="mb-6">
                                But Florida’s climate can be tough on wood fences. Rot, warping and fading can be caused by moisture, termites and sun exposure. Wood fences need to be sealed regularly and maintained, and they have a shorter life span than aluminum or vinyl. If wood is the material, pressure treated is a must.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Chain Link Fencing – The Most Practical Budget Choice</h3>
                            <p className="mb-12">
                                Much of the time, chain link fencing is selected for budgetary concerns. It is great for large properties pet containment and even utility areas. That being said, chain link fences don’t offer as much privacy as other options and are not always pleasing to the eye they can also become rusty if you did not coat them properly. And they are not always welcomed by HOAs.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Best Fence Options for Pool Safety in Florida</h2>
                            <p className="mb-12">
                                Florida has some of the strictest pool safety laws when it comes to having your pool fenced. Not only do aluminum and vinyl fencing satisfy safety codes, your fence can still be transparent and ensure years of usability. AJ mFG Fence Factory offers Pool code compliant fencing that meets Florida state codes with beauty added to your yard.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Coastal Vs Inland Florida Fence Pros And Cons</h2>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Coastal Areas</h3>
                            <p className="mb-6">
                                With homes near the ocean, additional obstacles are present with salt air. Steel and iron fences will incline to rust in these conditions. Aluminum and vinyl are preferable, particularly when they have powder-coated coatings. Aluminum fences are a great option and provide huge long-term value even for coastal regions.
                            </p>

                            <h3 className="text-2xl font-bold text-[#4c0c0c] mt-8 mb-4">Inland Areas</h3>
                            <p className="mb-12">
                                Inland Florida residences enjoy more leeway for fencing options, but materials need to be UV resistant, capable of handling moisture and be wind-rated installation because we do have high winds.
                            </p>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Your Florida Fence: The Importance of Maintenance</h2>
                            <p className="mb-12">
                                Proper maintenance goes a long way when it comes to the life expectancy of your fence. It is good way to get dirt and salt build up off of aluminum and vinyl fences. Regular storm checks on your fence for damage means you can repair early. Trimming down plants will keep them off your fence and allowing it to dry, and wood fences should be refinished every year when weather wears the surface. Opting for a low-maintenance fence from the outset can save you time and money down the road.
                            </p>

                            <div className="bg-[#fdfbf7] border-l-4 border-[#e4c58a] p-8 rounded-r-xl my-16">
                                <h3 className="text-2xl font-bold font-poppins text-[#4c0c0c] mb-4">Why Choose AJ Fence Manufacturing?</h3>
                                <p className="mb-4 text-gray-700">
                                    AJ Fence Manufacturing is a Florida fencing solution company known for manufacturing distinct fence systems designed to withstand the toughest environments in the state of Florida. Their offerings are premium aluminum fence production, custom fencing, and compliant products for local and HOA regulations.
                                </p>
                                <p className="font-bold text-[#4c0c0c]">
                                    Regardless if you’re seeking privacy, beauty or security, AJ Fence Company in Auburndale is your first call when considering purchasing a fence.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold font-poppins text-[#4c0c0c] mt-12 mb-6 italic">Conclusion</h2>
                            <p className="mb-12">
                                In the end, determining which fencing is right for your Florida home is all a matter of balancing durability with design, safety and climatic resistance. For the average homeowner, aluminum is the way to go with fencing and vinyl or wood can serve you well if chosen and maintained appropriately. If you are looking for a high-quality fence that is reliable in harsh Florida weather, using an experienced manufacturer like AJ Fence Manufacturing will provide the highest quality materials and construction.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* FAQ Section */}
                    <ScrollReveal type="fade-up" delay={0.2}>
                        <div className="mt-16 pt-16 border-t md:border-t-0 border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#4c0c0c] mb-8 italic">Frequently Asked Questions</h2>
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-[#e4c58a]/20">
                                {faqs.map((faq, index) => (
                                    <FaqItem
                                        key={index}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Tags & Bottom Share */}
                    <div className="mt-16 pt-16 border-t border-gray-100 italic">
                        <div className="flex flex-wrap items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Tags:</span>
                                <div className="flex gap-2">
                                    {["Florida", "Fencing Guide", "Aluminum", "Vinyl", "Pool Safety"].map(tag => (
                                        <span key={tag} className="text-sm text-[#4c0c0c] font-medium px-3 py-1 bg-[#fdfbf7] rounded-lg">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[#4c0c0c] font-bold uppercase tracking-widest text-xs border-2 border-[#e4c58a] px-6 py-3 rounded-full hover:bg-[#e4c58a] transition-all">
                                <Share2 size={16} /> Share This Article
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts Simple */}
            <section className="pb-24 bg-[#fdfbf7]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 text-center">
                    <h3 className="text-3xl font-bold font-poppins text-[#4c0c0c] mb-12 italic">You Might Also Like</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link href="/blog" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Comparison</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">Vinyl vs. Wood: Which is Best?</h4>
                        </Link>
                        <Link href="/blog/aluminum-fence-maintenance-tips" className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col items-center group transition-transform hover:-translate-y-2">
                            <span className="text-[#e4c58a] font-bold uppercase tracking-widest text-[10px] mb-4">Maintenance</span>
                            <h4 className="text-xl font-bold font-poppins text-[#4c0c0c] group-hover:text-[#e4c58a] transition-colors">5 Maintenance Tips for Aluminum Fencing</h4>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
