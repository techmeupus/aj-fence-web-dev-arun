import { Metadata } from 'next';
import FenceInstallationContent from './FenceInstallationContent';

export const metadata: Metadata = {
    title: "Professional Fence Installation | Quality Workmanship | AJ Fence",
    description: "AJ Fence specializes in high-quality fence installation in Lakeland and Central Florida. Since 2004, we've provided outstanding service, privacy, and security for our clients.",
};

export default function FenceInstallationPage() {
    return <FenceInstallationContent />;
}
