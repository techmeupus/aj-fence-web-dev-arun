import { Metadata } from 'next';
import ResidentialFenceContent from './ResidentialFenceContent';

export const metadata: Metadata = {
    title: "Residential Fence Installation | Privacy & Curb Appeal | AJ Fence",
    description: "Enhance your home's character, privacy, and security with quality residential fencing from AJ Fence. Serving Lakeland and Central Florida with custom architectural details and dedicated craftsmanship.",
};

export default function ResidentialFencePage() {
    return <ResidentialFenceContent />;
}
