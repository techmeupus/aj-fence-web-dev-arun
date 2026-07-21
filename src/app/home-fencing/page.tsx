import { Metadata } from 'next';
import HomeFencingContent from './HomeFencingContent';

export const metadata: Metadata = {
    title: "Home Fencing Solutions | Privacy, Security & Value | AJ Fence",
    description: "Explore the best home fencing options in Lakeland, FL. From wood and vinyl for privacy to elegant aluminum and affordable chain link, AJ Fence helps you add value and security to your property.",
};

export default function HomeFencingPage() {
    return <HomeFencingContent />;
}
