"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
    {
        id: 1,
        name: "Ovidio Perez",
        service: "Vinyl Fence Installation",
        image: "/reviews/ovidio perez.png",
        rating: 5,
        text: "Thank you AJ Fence you did amazing work. Great customer service and workers are fast. I was very impresse with the job well done. I recommend 100%. and you won’t find a better prize in this area."
    },
    {
        id: 2,
        name: "Serena Carr",
        service: "Vinyl Fence Installation",
        image: "/reviews/Serena_Carr.png",
        rating: 5,
        text: "AJ Fence has provided exceptional service to our commercial property, consistently exceeding our expectations. I highly recommend their services."
    },
    {
        id: 3,
        name: "Sonia Perez",
        service: "Vinyl Fence Installation",
        image: "/reviews/Sonia Perez.png",
        rating: 5,
        text: "AJ Fence did an amazing job at my house! They were extremely professional from the start to finish and completed the work much faster then I expected. The quality of the workmanship was excellent, and the entire process was smooth and stress-free. I highly recommend AJ Fence to anyone looking for reliable, efficient, and top-quality service."
    },
    {
        id: 4,
        name: "tschneider456",
        service: "Fencing Services",
        image: "/reviews/tschneider456.png",
        rating: 5,
        text: "Our experience was excellent. They did an amazing job with our new fence in our backyard and at a very reasonable price. Their response for a quote was super fast and then they were even faster to get the work done. The fence looks great and we appreciated how cleaned up the yard looked once they were done. We will definitely recommend AJ to all our friends"
    },
    {
        id: 5,
        name: "Riley Melendez",
        service: "Fencing Services",
        image: "/reviews/Riley Melendez.png",
        rating: 5,
        text: "Amazing, really great experience. Best price ever and great workers. I will definitely look forward to calling here again.( Highly recommended)"
    },
    {
        id: 6,
        name: "Adam Abad",
        service: "Aluminum Fence Installation",
        image: "/reviews/adam abad.png",
        rating: 5,
        text: "AMAZING! AJ fence really changed the way my house looks, they came in very early in the morning and knocked down my old fence and within a couple hours I had a brand new one installed. Cant tell you enough how good the service is and how polite and helpful they were. Thank you AJ"
    },
    {
        id: 7,
        name: "Alexis Melendez",
        service: "Vinyl Fence Installation",
        image: "/reviews/Alexis Melendez.png",
        rating: 5,
        text: "The fence came out absolutely perfect! The crew did such an incredible job from start to finish. It completely transformed my yard, and I couldn’t be more pleased with the result. Highly recommend their work!"
    },
    {
        id: 8,
        name: "Eva Rodriguez",
        service: "Aluminum Fence Installation",
        image: "/reviews/Eva Rodriguez.png",
        rating: 5,
        text: "Very pleased my fence. Very professional and hard working. Affordable price and good quality fencing."
    },
    {
        id: 9,
        name: "Trey",
        service: "Vinyl Fence Installation",
        image: "/reviews/Trey.png",
        rating: 5,
        text: "I could not be happier with my new fence! The AJ fence crew was very professional, and installation was quick. The quality of the materials is excellent and it really improves the look of my yard. Everything was completed on schedule, and the price was fair for workmanship. I would highly recommend this company to anyone looking for a reliable fencing company."
    },
    {
        id: 10,
        name: "Celeste Cruz",
        service: "Fencing Services",
        image: "/reviews/Celeste cruz.png",
        rating: 5,
        text: "We contracted them to finish the fencing around our house as our two neighbors already had fences. They were efficient and the fence matches and extends from the fencing that was already there. It did get knocked down a bit after Hurricane Milton but it was easy to repair ourselves. They were communicative and easy to work with."
    }
];

const Testimonials = () => {
    const [selectedReview, setSelectedReview] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, [reviews.length]);

    const prevSlide = useCallback(() => {
        // Correct modulo arithmetic for negative numbers
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, [reviews.length]);

    // Autoplay logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    const openReview = (id: number) => {
        setSelectedReview(id);
    };

    const closeReview = () => {
        setSelectedReview(null);
    };

    const activeReview = reviews.find(r => r.id === selectedReview);

    return (
        <section className="w-full pt-24 pb-0 bg-[#fdfbf7] relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <ScrollReveal type="fade-up" className="text-center md:text-left">
                        <div className="w-16 h-1 bg-[#4c0c0c] mb-4 mx-auto md:mx-0"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#4c0c0c] mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-600 max-w-2xl">
                            See what our satisfied customers have to say about our fencing services
                        </p>
                    </ScrollReveal>

                    <ScrollReveal type="fade-in" delay={0.4} className="flex gap-4 justify-center">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-[#4c0c0c]/10 text-[#4c0c0c] hover:bg-[#4c0c0c] hover:text-white transition-all duration-300"
                            aria-label="Previous review"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-[#4c0c0c]/10 text-[#4c0c0c] hover:bg-[#4c0c0c] hover:text-white transition-all duration-300"
                            aria-label="Next review"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </ScrollReveal>
                </div>

                {/* Testimonial Slider */}
                <div
                    className="relative overflow-visible pb-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden p-4 -m-4">
                        <motion.div
                            className="flex gap-6"
                            animate={{
                                x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (24 / itemsToShow)}px)`
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.32, 0.72, 0, 1] // Smooth custom cubic bezier
                            }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    onClick={() => openReview(review.id)}
                                    className="bg-[#4c0c0c] rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-[#5a1111] h-full flex-shrink-0"
                                    style={{
                                        width: itemsToShow === 1 ? '100%' : `calc((100% - ${(itemsToShow - 1) * 24}px) / ${itemsToShow})`
                                    }}
                                >
                                    {/* Avatar and Info */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-[#e4c58a] flex-shrink-0">
                                            <Image
                                                src={review.image}
                                                alt={review.name}
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-white text-lg truncate">
                                                {review.name}
                                            </h4>
                                            <p className="text-[#e4c58a] text-sm truncate">
                                                {review.service}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#e4c58a] text-[#e4c58a]" />
                                        ))}
                                    </div>

                                    {/* Review Preview */}
                                    <p className="text-white/80 text-base leading-relaxed line-clamp-4 mb-6 italic">
                                        &quot;{review.text}&quot;
                                    </p>

                                    {/* Read More Button */}
                                    <div className="text-[#e4c58a] text-sm font-bold flex items-center gap-2 group">
                                        Read Full Review
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center gap-3 mt-12">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-12 bg-[#4c0c0c]' : 'w-2 bg-[#4c0c0c]/20 hover:bg-[#4c0c0c]/40'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Google Reviews Button */}
                    <div className="flex justify-center mt-12 pb-8">
                        <a
                            href="https://share.google/MCGFcPmx1kHthTpbj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#4c0c0c] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a1111] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Read More Reviews on Google
                        </a>
                    </div>
                </div>

            </div>

            {/* Modal for Full Review */}
            {selectedReview && activeReview && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeReview}
                >
                    <div
                        className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full relative animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeReview}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-[#4c0c0c] hover:text-white transition-colors duration-300 flex items-center justify-center"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Avatar and Info */}
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#e4c58a]">
                                <Image
                                    src={activeReview.image}
                                    alt={activeReview.name}
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#4c0c0c]">
                                    {activeReview.name}
                                </h3>
                                <p className="text-[#e4c58a] font-semibold">
                                    {activeReview.service}
                                </p>
                            </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(activeReview.rating)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-[#e4c58a] text-[#e4c58a]" />
                            ))}
                        </div>

                        {/* Full Review Text */}
                        <div className="mb-6">
                            <span className="text-6xl font-poppins text-[#4c0c0c] opacity-20">&quot;</span>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed font-poppins italic">
                            {activeReview.text}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;
