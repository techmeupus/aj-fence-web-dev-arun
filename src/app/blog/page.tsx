import { Metadata } from 'next';
import BlogListingContent from './BlogListingContent';

export const metadata: Metadata = {
    title: "Fencing Blog | Tips, Guides & Inspiration | AJ Fence",
    description: "Stay informed with the latest fencing trends, maintenance advice, and home improvement inspiration from the AJ Fence team. Read our expert guides on choosing and caring for your fence.",
};

export default function BlogListingPage() {
    return <BlogListingContent />;
}
