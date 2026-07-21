'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    type?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
    duration?: number;
    delay?: number;
    width?: "fit-content" | "100%";
    height?: "fit-content" | "100%" | "auto";
    className?: string;
    once?: boolean;
}

const ScrollReveal = ({
    children,
    type = 'fade-up',
    duration = 0.8,
    delay = 0.2,
    width = "100%",
    height = "auto",
    className = "",
    once = true
}: ScrollRevealProps) => {

    const variants = {
        'fade-up': {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        'slide-left': {
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 }
        },
        'slide-right': {
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 }
        },
        'scale-up': {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    return (
        <motion.div
            variants={variants[type]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1] // Custom ease-out expo-like
            }}
            className={className}
            style={{ width, height }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
