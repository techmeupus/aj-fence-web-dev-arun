import { Metadata } from 'next';
import WoodFencingContent from './WoodFencingContent';

export const metadata: Metadata = {
    title: "Wood Fencing Services | Timeless & Natural Privacy | AJ Fence",
    description: "Custom-built wood fencing in Lakeland and Central Florida. Experience the natural beauty and complete privacy of our premium, durable pressure-treated wood fences.",
    alternates: {
        canonical: "https://ajfencemfg.com/fencing-services/wood/",
    },
};

export default function WoodFencingPage() {
    return <WoodFencingContent />;
}
