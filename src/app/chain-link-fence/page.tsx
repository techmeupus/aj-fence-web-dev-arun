import { Metadata } from 'next';
import ChainLinkFenceLearnMoreContent from './ChainLinkFenceContent';

export const metadata: Metadata = {
    title: "Chain Link Fencing Solutions | Affordable & Secure | AJ Fence",
    description: "Learn about the benefits of chain link fencing for your Lakeland property. AJ Fence provides durable, affordable, and secure chain link solutions that keep your kids and pets safe without blocking your view.",
};

export default function ChainLinkFenceLearnMorePage() {
    return <ChainLinkFenceLearnMoreContent />;
}
