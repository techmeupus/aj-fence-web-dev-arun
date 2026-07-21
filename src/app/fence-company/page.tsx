import { Metadata } from 'next';
import FenceCompanyContent from './FenceCompanyContent';

export const metadata: Metadata = {
    title: "Trusted Local Fence Company | Lakeland & Central FL | AJ Fence",
    description: "AJ Fence is your trusted local fence company in Lakeland, Florida. Providing custom home fencing solutions, quality craftsmanship, and personalized designs since 2004.",
};

export default function FenceCompanyPage() {
    return <FenceCompanyContent />;
}
