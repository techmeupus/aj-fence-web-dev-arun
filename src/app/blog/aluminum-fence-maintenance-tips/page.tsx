import { Metadata } from 'next';
import AluminumMaintenanceClient from './AluminumMaintenanceClient';

export const metadata: Metadata = {
    title: "5 Essential Maintenance Tips for Aluminum Fencing | AJ Fence",
    description: "Keep your aluminum fence looking new with these 5 simple maintenance tips. Learn how to clean, protect, and inspect your fence for long-lasting performance.",
};

export default function AluminumMaintenancePage() {
    return <AluminumMaintenanceClient />;
}
