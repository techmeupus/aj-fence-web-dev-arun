import { Metadata } from 'next';
import FenceContractorContent from './FenceContractorContent';

export const metadata: Metadata = {
    title: "Expert Fence Contractor | Commercial & Residential | AJ Fence",
    description: "Professional fence contractor in Lakeland, FL. We offer expert guidance and installation for commercial and residential properties, including fence removal and ground prep.",
    alternates: {
        canonical: "https://ajfencemfg.com/fence-contractor/",
    },
};

export default function FenceContractorPage() {
    return <FenceContractorContent />;
}
