import { Metadata } from 'next';
import AluminumFencingContent from './AluminumFencingContent';

export const metadata: Metadata = {
    title: "Aluminum Fencing Services | Elegant & Durable Protection | AJ Fence",
    description: "AJ Fence Inc. offers premium aluminum fencing solutions in Lakeland and Central Florida. Rust-resistant, low-maintenance, and elegant designs for your property.",
};

export default function AluminumFencingPage() {
    return <AluminumFencingContent />;
}
