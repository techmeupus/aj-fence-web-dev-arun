import { Metadata } from 'next';
import VinylFenceLearnMoreContent from './VinylFenceContent';

export const metadata: Metadata = {
    title: "Vinyl Fence Solutions | Durable Privacy Fencing | AJ Fence",
    description: "Discover why vinyl fencing is the ultimate privacy solution for Florida homes. AJ Fence offers maintenance-free, durable, and stylish vinyl fences in Lakeland and Beyond.",
};

export default function VinylFenceLearnMorePage() {
    return <VinylFenceLearnMoreContent />;
}
