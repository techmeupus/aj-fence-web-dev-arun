import { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
    title: "About AJ Fence | 20+ Years of Fencing Excellence in Lakeland, FL",
    description: "Learn about AJ Fence Inc., a family-owned fencing company serving Central Florida since 2004. Discover our commitment to quality craftsmanship and customer satisfaction.",
};

export default function AboutUsPage() {
    return <AboutUsContent />;
}
