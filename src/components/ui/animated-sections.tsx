'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionData {
    text: string;
    img: string;
    ctaText?: string;
    ctaLink?: string;
}

interface AnimatedSectionsProps {
    sections?: SectionData[];
    className?: string;
    headerTitle?: string;
    showLogo?: boolean;
    logoSrc?: string;
    autoplay?: boolean;
    autoplayDuration?: number;
}

const AnimatedSections: React.FC<AnimatedSectionsProps> = ({
    sections = [],
    className = "",
    showLogo = false,
    logoSrc = "/aj_fence_logo.avif",
    autoplay = true,
    autoplayDuration = 5000
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const currentIndexRef = useRef<number>(-1);
    const animatingRef = useRef<boolean>(false);
    const sectionsRefs = useRef<HTMLElement[]>([]);
    const imagesRefs = useRef<HTMLDivElement[]>([]);
    const outerRefs = useRef<HTMLDivElement[]>([]);
    const innerRefs = useRef<HTMLDivElement[]>([]);
    const headingRefs = useRef<HTMLHeadingElement[]>([]);
    const ctaRefs = useRef<HTMLAnchorElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        let loaded = 0;
        sections.forEach((section) => {
            const img = new window.Image();
            img.src = section.img;
            img.onload = () => {
                loaded++;
                if (loaded === sections.length) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                loaded++;
                if (loaded === sections.length) {
                    setImagesLoaded(true);
                }
            };
        });
    }, [sections]);

    const gotoSection = useCallback((index: number, direction: number) => {
        if (!containerRef.current || animatingRef.current) return;

        const sectionsElements = sectionsRefs.current as Element[];
        const images = imagesRefs.current as Element[];
        const outerWrappers = outerRefs.current as Element[];
        const innerWrappers = innerRefs.current as Element[];

        const wrap = gsap.utils.wrap(0, sectionsElements.length);
        index = wrap(index);
        animatingRef.current = true;

        const fromTop = direction === -1;
        const dFactor = fromTop ? -1 : 1;

        const tl = gsap.timeline({
            defaults: { duration: 1.25, ease: 'power1.inOut' },
            onComplete: () => {
                animatingRef.current = false;
            }
        });

        timelineRef.current = tl;

        if (currentIndexRef.current >= 0) {
            gsap.set(sectionsElements[currentIndexRef.current], { zIndex: 0 });
            tl.to(images[currentIndexRef.current], { xPercent: -15 * dFactor })
                .set(sectionsElements[currentIndexRef.current], { autoAlpha: 0 });
        }

        gsap.set(sectionsElements[index], { autoAlpha: 1, zIndex: 1 });

        tl.fromTo(
            [outerWrappers[index], innerWrappers[index]],
            {
                xPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor)
            },
            { xPercent: 0 },
            0
        )
            .fromTo(
                images[index],
                { xPercent: 15 * dFactor },
                { xPercent: 0 },
                0
            );

        // Animate heading with simple fade and slide
        const heading = headingRefs.current[index];
        if (heading) {
            gsap.set(heading, {
                opacity: 0,
                y: 50
            });

            tl.to(
                heading,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                },
                0.4
            );
        }

        // Animate CTA button
        const cta = ctaRefs.current[index];
        if (cta) {
            gsap.set(cta, {
                opacity: 0,
                y: 30
            });

            tl.to(
                cta,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                },
                0.6
            );
        }

        currentIndexRef.current = index;
    }, []);

    useGSAP(() => {
        if (!containerRef.current || !imagesLoaded) return;

        const outerWrappers = outerRefs.current as Element[];
        const innerWrappers = innerRefs.current as Element[];

        gsap.set(outerWrappers, { xPercent: 100 });
        gsap.set(innerWrappers, { xPercent: -100 });

        gotoSection(0, 1);

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
                timelineRef.current = null;
            }
        };
    }, { scope: containerRef, dependencies: [sections.length, imagesLoaded] });

    // Autoplay effect
    useEffect(() => {
        if (!autoplay || !imagesLoaded) return;

        const interval = setInterval(() => {
            if (!animatingRef.current) {
                gotoSection(currentIndexRef.current + 1, 1);
            }
        }, autoplayDuration);

        return () => clearInterval(interval);
    }, [autoplay, autoplayDuration, imagesLoaded, gotoSection]);

    return (
        <div
            ref={containerRef}
            className={`h-[70vh] w-full overflow-hidden bg-black text-white uppercase font-sans relative ${className}`}
        >
            {sections.map((section, i) => (
                <section
                    key={`section-${i}`}
                    className="absolute top-0 left-0 h-full w-full invisible"
                    ref={(el) => { if (el) sectionsRefs.current[i] = el; }}
                >
                    <div className="outer w-full h-full overflow-hidden" ref={(el) => { if (el) outerRefs.current[i] = el; }}>
                        <div className="inner w-full h-full overflow-hidden" ref={(el) => { if (el) innerRefs.current[i] = el; }}>
                            <div
                                className="bg flex flex-col items-center justify-center absolute top-0 h-full w-full bg-cover bg-center"
                                ref={(el) => { if (el) imagesRefs.current[i] = el; }}
                                style={{
                                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url("${section.img}")`
                                }}
                            >
                                {showLogo && (
                                    <div className="mb-8 z-10">
                                        <Image
                                            src={logoSrc}
                                            alt="AJ Fence Logo"
                                            width={200}
                                            height={100}
                                            className="w-auto h-24 object-contain animate-fade-in"
                                        />
                                    </div>
                                )}
                                <h2 className="section-heading text-white text-center font-semibold w-[90vw] max-w-[1200px] text-4xl md:text-6xl normal-case leading-tight z-10 mb-8" ref={(el) => { if (el) headingRefs.current[i] = el; }}>
                                    {section.text}
                                </h2>

                                {section.ctaText && section.ctaLink && (
                                    <Link
                                        href={section.ctaLink}
                                        className="z-10 bg-[#e4c58a] text-[#4c0c0c] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#d4b57a] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                                        ref={(el) => { if (el) ctaRefs.current[i] = el; }}
                                    >
                                        {section.ctaText}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default AnimatedSections;
