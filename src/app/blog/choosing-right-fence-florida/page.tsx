import { Metadata } from 'next';
import ChoosingRightFenceClient from './ChoosingRightFenceClient';

export const metadata: Metadata = {
    title: "Choosing the Right Fence for Your Florida Home | AJ Fence",
    description: "Learn how to choose the best fencing material for Florida's climate. Compare aluminum, vinyl, and wood options for your home at AJ Fence Manufacturing.",
};

export default function ChoosingRightFencePage() {
    return <ChoosingRightFenceClient />;
}
