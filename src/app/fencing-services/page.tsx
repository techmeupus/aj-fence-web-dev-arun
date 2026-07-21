import { Metadata } from 'next';
import FencingServicesContent from './FencingServicesContent';

export const metadata: Metadata = {
    title: "Fencing Services | Quality Residential & Commercial | AJ Fence",
    description: "AJ Fence offers a wide range of fencing services in Lakeland, FL. From durable vinyl and natural wood to secure aluminum and affordable chain link, we provide expert installation for every need.",
};

export default function FencingServicesOverviewPage() {
    return <FencingServicesContent />;
}
