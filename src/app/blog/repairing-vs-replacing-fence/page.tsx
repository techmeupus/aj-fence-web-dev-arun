import React from 'react';
import type { Metadata } from 'next';
import RepairVsReplaceClient from './RepairVsReplaceClient';

export const metadata: Metadata = {
    title: "Repairing vs. Replacing a Fence: How to Decide (2026 Guide)",
    description: "Should you repair or replace your fence? Compare costs, damage, lifespan, and expert tips to determine the best solution for your home or business.",
    openGraph: {
        title: "Repairing vs. Replacing a Fence: How to Decide (2026 Guide)",
        description: "Should you repair or replace your fence? Compare costs, damage, lifespan, and expert tips to determine the best solution for your home or business.",
        images: ["/blog-post/Repairing vs. Replacing a Fence.webp"],
    }
};

const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "@id": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/#article",
            "headline": "Repairing vs. Replacing a Fence: How to Decide (2026 Homeowner's Guide)",
            "description": "Learn when to repair or replace your fence by comparing costs, damage severity, lifespan, maintenance, and expert recommendations to make the best decision for your property.",
            "url": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/#webpage"
            },
            "image": {
                "@id": "https://ajfencemfg.com/blog-post/Repairing%20vs.%20Replacing%20a%20Fence.webp"
            },
            "keywords": [
                "Repairing vs Replacing a Fence",
                "Fence Repair",
                "Fence Replacement",
                "Repair or Replace Fence",
                "Fence Repair Cost",
                "Fence Replacement Cost",
                "Fence Damage",
                "Fence Lifespan",
                "Fence Maintenance",
                "Residential Fencing"
            ],
            "articleSection": "Fence Repair",
            "inLanguage": "en-US"
        },
        {
            "@type": "WebPage",
            "@id": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/#webpage",
            "url": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/",
            "name": "Repairing vs. Replacing a Fence: How to Decide",
            "description": "Complete homeowner's guide comparing fence repair and replacement, including costs, lifespan, maintenance, and expert recommendations.",
            "primaryImageOfPage": {
                "@id": "https://ajfencemfg.com/blog-post/Repairing%20vs.%20Replacing%20a%20Fence.webp"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/#breadcrumb",
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
                    "name": "Repairing vs. Replacing a Fence",
                    "item": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://ajfencemfg.com/blog/repairing-vs-replacing-fence/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is it cheaper to repair or replace a fence?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Repairing a fence is usually more affordable for minor damage. However, if the fence has widespread structural issues or frequent repairs, replacement often provides better long-term value."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I know if my fence should be replaced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If your fence has multiple failing posts, extensive rot, severe rust, widespread damage, or repair costs approaching the cost of a new fence, replacement is typically the better option."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can a damaged fence post be repaired?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. A single damaged or leaning fence post can often be replaced without replacing the entire fence, provided the surrounding structure remains stable."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a typical fence last?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fence lifespan depends on the material. Wood fences typically last 15–20 years, vinyl 20–30 years, aluminum 30–50 years, chain-link 20–30 years, and composite fences 25–35 years with proper maintenance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I repair storm-damaged fencing immediately?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Addressing storm damage promptly helps prevent additional structural issues, improves safety, and reduces the likelihood of more expensive repairs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does replacing a fence increase property value?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A new, professionally installed fence can improve curb appeal, enhance security and privacy, and make a property more attractive to potential buyers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is it worth repairing an old wood fence?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If an older wood fence has widespread rot, termite damage, or several failing posts, replacing it is generally a more cost-effective long-term investment than repeated repairs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which fence material requires the least maintenance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aluminum and vinyl fences require the least maintenance because they resist rust, rot, insects, and weather-related deterioration."
                    }
                }
            ]
        },
        {
            "@type": "ImageObject",
            "@id": "https://ajfencemfg.com/blog-post/Repairing%20vs.%20Replacing%20a%20Fence.webp",
            "url": "https://ajfencemfg.com/blog-post/Repairing%20vs.%20Replacing%20a%20Fence.webp",
            "contentUrl": "https://ajfencemfg.com/blog-post/Repairing%20vs.%20Replacing%20a%20Fence.webp",
            "caption": "Repairing an old fence versus replacing it with a new fence"
        }
    ]
};

export default function RepairVsReplacePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
            />
            <RepairVsReplaceClient />
        </>
    );
}
