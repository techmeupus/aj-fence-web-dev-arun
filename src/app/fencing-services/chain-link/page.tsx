import { Metadata } from 'next';
import ChainLinkFencingContent from './ChainLinkFencingContent';

export const metadata: Metadata = {
    title: "Chain Link Fencing | Durable & Affordable Security | AJ Fence",
    description: "Cost-effective chain link fencing solutions in Lakeland and Central Florida. Providing security and durability for residential and commercial properties since 2004.",
};

export default function ChainLinkFencingPage() {
    return <ChainLinkFencingContent />;
}
