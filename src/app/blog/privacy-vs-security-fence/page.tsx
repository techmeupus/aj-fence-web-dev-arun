import React from 'react';
import type { Metadata } from 'next';
import PrivacyVsSecurityClient from './PrivacyVsSecurityClient';

export const metadata: Metadata = {
    title: "Privacy vs. Security Fences: Which Is Right for Your Property?",
    description: "Compare privacy and security fences to find the best option for your home or business. Learn the key differences, benefits, costs, and expert tips before you build.",
    openGraph: {
        title: "Privacy vs. Security Fences: Which Is Right for Your Property?",
        description: "Compare privacy and security fences to find the best option for your home or business. Learn the key differences, benefits, costs, and expert tips before you build.",
        images: ["/blog-post/Privacy vs. Security Fences Which Does Your Property Need.jpg"],
    }
};

const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "@id": "https://ajfencemfg.com/blog/privacy-vs-security-fence/#article",
            "headline": "Privacy vs. Security Fences: Which Does Your Property Need? A Complete Homeowner's Guide",
            "description": "Choosing between a privacy fence and a security fence? Learn the differences, benefits, materials, and which solution is best for your property.",
            "url": "https://ajfencemfg.com/blog/privacy-vs-security-fence/",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://ajfencemfg.com/blog/privacy-vs-security-fence/#webpage"
            },
            "image": {
                "@id": "https://ajfencemfg.com/blog-post/Privacy%20vs.%20Security%20Fences%20Which%20Does%20Your%20Property%20Need.jpg"
            },
            "keywords": [
                "Privacy Fence vs Security Fence",
                "Privacy Fence Benefits",
                "Security Fence Benefits",
                "Vinyl Privacy Fence",
                "Aluminum Security Fence",
                "Residential Fencing Guide"
            ],
            "articleSection": "Fencing Comparison",
            "inLanguage": "en-US"
        },
        {
            "@type": "WebPage",
            "@id": "https://ajfencemfg.com/blog/privacy-vs-security-fence/#webpage",
            "url": "https://ajfencemfg.com/blog/privacy-vs-security-fence/",
            "name": "Privacy vs. Security Fences Comparison Guide",
            "description": "Comprehensive comparison guide between privacy fences and security fences.",
            "primaryImageOfPage": {
                "@id": "https://ajfencemfg.com/blog-post/Privacy%20vs.%20Security%20Fences%20Which%20Does%20Your%20Property%20Need.jpg"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://ajfencemfg.com/blog/privacy-vs-security-fence/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ajfencemfg.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://ajfencemfg.com/blog/"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Privacy vs. Security Fences",
                    "item": "https://ajfencemfg.com/blog/privacy-vs-security-fence/"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://ajfencemfg.com/blog/privacy-vs-security-fence/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which fence offers the most privacy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Solid vinyl, wood, and composite fences provide the highest level of privacy by completely blocking visibility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which fence provides better security?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aluminum, steel, and reinforced chain-link fences generally offer stronger protection against unauthorized access."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can a privacy fence improve security?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. A privacy fence can discourage opportunistic trespassing by limiting visibility into your property."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which fence lasts longer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "High-quality aluminum, steel, vinyl, and composite fences can last for 30 to 50+ years with proper installation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which fence requires the least maintenance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aluminum and vinyl fences are among the easiest to maintain because they resist rust, rot, and insect damage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I combine privacy and security features?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Many homeowners choose reinforced privacy fences with secure gates, while commercial properties combine ornamental fencing with access controls."
                    }
                }
            ]
        }
    ]
};

export default function PrivacyVsSecurityPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
            />
            <PrivacyVsSecurityClient />
        </>
    );
}
