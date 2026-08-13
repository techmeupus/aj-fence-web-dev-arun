import React from 'react';
import type { Metadata } from 'next';
import ChainLinkCostGuideClient from './ChainLinkCostGuideClient';

export const metadata: Metadata = {
    title: "Chain Link Fence Installation in Lakeland, FL | Cost Guide",
    description: "Searching for chain link installation near me? See 2026 pricing, the step-by-step install process, and permit facts for Lakeland, Polk & Hillsborough County homes.",
    keywords: [
        "chain link installation near me",
        "chain link fence cost Lakeland FL",
        "chain link fence installers Polk County",
        "chain link fence installation process",
        "chain link fence permit Lakeland",
        "chain link fencing Lakeland FL",
        "vinyl coated chain link cost",
        "residential chain link fence cost"
    ],
    openGraph: {
        title: "Chain Link Fence Installation in Lakeland, FL | Cost Guide",
        description: "Searching for chain link installation near me? See 2026 pricing, the step-by-step install process, and permit facts for Lakeland, Polk & Hillsborough County homes.",
        images: ["/blog-post/chain link cost.webp"],
        url: "https://ajfencemfg.com/blog/chain-link-fence-installation-lakeland-fl-cost-guide/",
        type: "article",
    },
    alternates: {
        canonical: "https://ajfencemfg.com/blog/chain-link-fence-installation-lakeland-fl-cost-guide/",
    }
};

const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "headline": "Chain Link Fence Installation in Lakeland, FL: A Homeowner's Guide to Cost & Process",
            "datePublished": "2026-08-14",
            "dateModified": "2026-08-14",
            "author": {
                "@type": "Organization",
                "name": "AJ Fence Inc."
            },
            "publisher": {
                "@type": "Organization",
                "name": "AJ Fence Inc.",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://ajfencemfg.com/logoajfencing.webp"
                }
            },
            "mainEntityOfPage": "https://ajfencemfg.com/blog/chain-link-fence-installation-lakeland-fl-cost-guide/",
            "image": "https://ajfencemfg.com/blog-post/chain%20link%20cost.webp"
        },
        {
            "@type": "HowTo",
            "name": "How Chain Link Fence Installation Works",
            "step": [
                { "@type": "HowToStep", "name": "Free on-site estimate" },
                { "@type": "HowToStep", "name": "Utility locate (Call 811)" },
                { "@type": "HowToStep", "name": "Permit and HOA check" },
                { "@type": "HowToStep", "name": "Layout and post hole digging" },
                { "@type": "HowToStep", "name": "Setting posts in concrete" },
                { "@type": "HowToStep", "name": "Installing top rail and mesh" },
                { "@type": "HowToStep", "name": "Hanging gates" },
                { "@type": "HowToStep", "name": "Final walkthrough and cleanup" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does a chain link fence cost for an average Lakeland backyard?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A typical 150-linear-foot backyard at 6 feet high costs roughly $2,200–$4,000 installed, depending on coating and gate count."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does chain link fence installation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most residential chain link installations are completed in one day once posts are set."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is chain link or vinyl-coated chain link better for Florida weather?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Vinyl-coated mesh resists humidity and UV exposure slightly better than bare galvanized steel and holds its color longer."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need a survey before installing a chain link fence?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A property line survey helps avoid boundary disputes and is often required for permitting."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does AJ Fence serve both Polk and Hillsborough County?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, AJ Fence installs chain link fencing throughout Polk County and Hillsborough County from its Lakeland location."
                    }
                }
            ]
        }
    ]
};

export default function ChainLinkCostGuidePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
            />
            <ChainLinkCostGuideClient />
        </>
    );
}
