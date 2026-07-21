import { Metadata } from 'next';
import VinylFencingContent from './VinylFencingContent';

export const metadata: Metadata = {
    title: "Vinyl Fence Installation Services | AJ Fence Company",
    description: "AJ Fence is a trusted vinyl fence company offering professional vinyl fence installation. Durable, low-maintenance fencing for homes and businesses.",
};

export default function VinylFencingPage() {
    return <VinylFencingContent />;
}
