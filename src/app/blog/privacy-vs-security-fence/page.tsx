import React from 'react';
import { Metadata } from 'next';
import PrivacyVsSecurityClient from './PrivacyVsSecurityClient';

const post = {
    title: "Privacy vs. Security Fences: Which Does Your Property Need?",
    metaTitle: "Privacy vs. Security Fences: Which Does Your Property Need? | AJ Fence",
    metaDescription: "Choosing between a privacy fence and a security fence? Learn the differences, benefits, and which fencing solution is best for your residential or commercial property.",
    description: "Choosing between a privacy fence and a security fence? Learn the differences, benefits, and which fencing solution is best for your residential or commercial property."
};

export const metadata: Metadata = {
    title: post.metaTitle,
    description: post.metaDescription,
};

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"WebPage",
      "@id":"https://ajfencemfg.com/blog/privacy-vs-security-fence/#webpage",
      "url":"https://ajfencemfg.com/blog/privacy-vs-security-fence/",
      "name":"Privacy vs. Security Fences: Which Does Your Property Need?",
      "description":post.metaDescription,
      "isPartOf":{
        "@id":"https://ajfencemfg.com/#website"
      },
      "breadcrumb":{
        "@id":"https://ajfencemfg.com/blog/privacy-vs-security-fence/#breadcrumb"
      }
    },
    {
      "@type":"BlogPosting",
      "@id":"https://ajfencemfg.com/blog/privacy-vs-security-fence/#blogposting",
      "headline":post.title,
      "description":post.metaDescription,
      "mainEntityOfPage":{
        "@id":"https://ajfencemfg.com/blog/privacy-vs-security-fence/#webpage"
      },
      "url":"https://ajfencemfg.com/blog/privacy-vs-security-fence/",
      "datePublished":"2026-06-29",
      "dateModified":"2026-06-29",
      "articleSection":[
        "Privacy Fences",
        "Security Fences",
        "Fence Comparison",
        "Residential Fencing",
        "Commercial Fencing"
      ],
      "keywords":[
        "privacy fence",
        "security fence",
        "fence installation",
        "residential fence",
        "commercial fence",
        "chain link fence",
        "wood fence",
        "vinyl fence",
        "AJ fence manufacturing"
      ]
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://ajfencemfg.com/blog/privacy-vs-security-fence/#breadcrumb",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Home",
          "item":"https://ajfencemfg.com/"
        },
        {
          "@type":"ListItem",
          "position":2,
          "name":"Blog",
          "item":"https://ajfencemfg.com/blog/"
        },
        {
          "@type":"ListItem",
          "position":3,
          "name":"Privacy vs. Security Fences",
          "item":"https://ajfencemfg.com/blog/privacy-vs-security-fence/"
        }
      ]
    },
    {
      "@type":"FAQPage",
      "@id":"https://ajfencemfg.com/blog/privacy-vs-security-fence/#faq",
      "mainEntity":[
        {
          "@type":"Question",
          "name":"Which fence provides the most privacy?",
          "acceptedAnswer":{
            "@type":"Answer",
            "text":"Solid wood, vinyl, and composite privacy fences provide the highest level of visual privacy because they eliminate gaps between panels."
          }
        },
        {
          "@type":"Question",
          "name":"Is a privacy fence more secure than chain link?",
          "acceptedAnswer":{
            "@type":"Answer",
            "text":"A privacy fence offers more visual concealment, while chain link often provides stronger perimeter security. The best choice depends on your property's needs."
          }
        },
        {
          "@type":"Question",
          "name":"What is the most durable fencing material?",
          "acceptedAnswer":{
            "@type":"Answer",
            "text":"Steel and aluminum are among the most durable fencing materials, while vinyl offers excellent longevity with minimal maintenance."
          }
        },
        {
          "@type":"Question",
          "name":"How long does fence installation take?",
          "acceptedAnswer":{
            "@type":"Answer",
            "text":"Most residential fence installation projects are completed within a few days, although larger or more complex installations may require additional time."
          }
        },
        {
          "@type":"Question",
          "name":"Should I hire professionals for fence installation?",
          "acceptedAnswer":{
            "@type":"Answer",
            "text":"Yes. Professional installers ensure your fence is properly aligned, securely anchored, and built to meet local building codes, maximizing its lifespan and performance."
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PrivacyVsSecurityClient />
        </>
    );
}
