import { Metadata } from 'next';
import ChainLinkFencingContent from './ChainLinkFencingContent';

export const metadata: Metadata = {
    title: "Chain Link Fence Installation in Polk & Hillsborough County, FL",
    description: "Chain link fence installation & repair in Lakeland, Brandon, Tampa & across Polk and Hillsborough County. Residential & commercial. Free estimates. Serving FL since 2004.",
    alternates: {
        canonical: "https://ajfencemfg.com/fencing-services/chain-link/",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does chain link fencing cost in Lakeland, FL?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chain link fencing typically costs less than wood, vinyl, or aluminum fencing, making it one of the most budget-friendly options for Polk County homeowners. Exact pricing depends on fence height, coating (galvanized vs. vinyl), and total linear footage. Contact AJ Fence for a free on-site estimate."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need a permit to install a chain link fence in Polk County?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most residential fence installations in Polk County require a permit, especially for pool enclosures or fences over 6 feet tall. AJ Fence handles the permitting process for you as part of every installation."
            }
        },
        {
            "@type": "Question",
            "name": "How long does chain link fence installation take in Tampa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most residential chain link fence projects in the Tampa area are completed within 1-2 days once materials are on-site. Larger commercial or industrial installations may take longer depending on total footage and site access."
            }
        },
        {
            "@type": "Question",
            "name": "What's the difference between galvanized and vinyl-coated chain link?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Galvanized chain link is zinc-coated steel that resists rust at a lower cost, while vinyl-coated chain link adds a colored PVC layer (typically black or green) for a more finished look and extra weather resistance. Both are durable options for Central Florida's climate."
            }
        },
        {
            "@type": "Question",
            "name": "Does AJ Fence serve Brandon and the surrounding Hillsborough County area?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. AJ Fence installs and repairs chain link fencing throughout Hillsborough County, including Brandon, Tampa, Plant City, Riverview, and Valrico, in addition to our core Polk County service area."
            }
        },
        {
            "@type": "Question",
            "name": "Is chain link fencing a good option for pet containment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes - chain link is one of the most common choices for pet containment because it's durable, affordable, and difficult for most pets to dig under or climb over when properly installed with a buried bottom rail or tension wire."
            }
        }
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AJ Fence Mfg Inc.",
    "image": "https://ajfencemfg.com/chain-link.webp",
    "url": "https://ajfencemfg.com/fencing-services/chain-link/",
    "telephone": "+18638163117",
    "email": "ajfencemfg@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "3929 Old Tampa Hwy.",
        "addressLocality": "Lakeland",
        "addressRegion": "FL",
        "postalCode": "33811",
        "addressCountry": "US"
    },
    "areaServed": [
        { "@type": "AdministrativeArea", "name": "Polk County, FL" },
        { "@type": "AdministrativeArea", "name": "Hillsborough County, FL" },
        { "@type": "City", "name": "Lakeland" },
        { "@type": "City", "name": "Winter Haven" },
        { "@type": "City", "name": "Bartow" },
        { "@type": "City", "name": "Auburndale" },
        { "@type": "City", "name": "Haines City" },
        { "@type": "City", "name": "Lake Wales" },
        { "@type": "City", "name": "Mulberry" },
        { "@type": "City", "name": "Davenport" },
        { "@type": "City", "name": "Tampa" },
        { "@type": "City", "name": "Brandon" },
        { "@type": "City", "name": "Plant City" },
        { "@type": "City", "name": "Riverview" },
        { "@type": "City", "name": "Valrico" },
        { "@type": "City", "name": "Ruskin" }
    ],
    "priceRange": "$$",
    "foundingDate": "2004",
    "sameAs": [
        "https://www.instagram.com/ajfenceinc",
        "https://www.linkedin.com/company/aj-fence-mfg-inc"
    ]
};

export default function ChainLinkFencingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <ChainLinkFencingContent />
        </>
    );
}
