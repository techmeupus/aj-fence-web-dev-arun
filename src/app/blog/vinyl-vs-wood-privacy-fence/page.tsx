import React from 'react';
import type { Metadata } from 'next';
import VinylVsWoodClient from './VinylVsWoodClient';

export const metadata: Metadata = {
    title: "Vinyl vs. Wood: Which Privacy Fence Suits You? | AJ Fence",
    description: "Compare vinyl vs wood privacy fences for your Florida home. Discover pros, cons, costs, and durability to make the right choice with AJ Fence.",
    openGraph: {
        title: "Vinyl vs. Wood: Which Privacy Fence Suits You? | AJ Fence",
        description: "Compare vinyl vs wood privacy fences for your Florida home. Discover pros, cons, costs, and durability to make the right choice with AJ Fence.",
        images: ["/blog-post/Vinyl vs. Wood Which Privacy Fence Is Best.webp"],
    },
    alternates: {
        canonical: "https://ajfencemfg.com/blog/vinyl-vs-wood-privacy-fence/",
    }
};

export default function VinylVsWoodPage() {
    return <VinylVsWoodClient />;
}
