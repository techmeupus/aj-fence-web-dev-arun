import { Metadata } from 'next';
import FenceCompanyContent from './FenceCompanyContent';

export const metadata: Metadata = {
    title: "Fence Company in Lakeland, FL | Installation & Contractor Services - AJ Fence",
    description: "Free, no-obligation fence consultation from AJ Fence - Lakeland's family-owned fence company since 2004. Licensed & insured, Polk & Hillsborough",
    alternates: {
        canonical: "https://ajfencemfg.com/fence-company/",
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://ajfencemfg.com/fence-company/#business",
  "name": "AJ Fence Inc.",
  "alternateName": "AJ Fence MFG",
  "url": "https://ajfencemfg.com/fence-company/",
  "logo": "https://ajfencemfg.com/logoajfencing.webp",
  "image": "https://ajfencemfg.com/herosection/1.avif",
  "description": "AJ Fence is a family-owned fence company in Lakeland, FL, providing custom aluminum, vinyl, wood, and chain link fence installation since 2004.",
  "telephone": "+1-863-816-3117",
  "email": "ajfencemfg@gmail.com",
  "foundingDate": "2004",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3929 Old Tampa Hwy",
    "addressLocality": "Lakeland",
    "addressRegion": "FL",
    "postalCode": "33811",
    "addressCountry": "US"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-863-816-3117",
      "contactType": "customer service",
      "areaServed": "Polk County, FL"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-813-239-4122",
      "contactType": "customer service",
      "areaServed": "Hillsborough County, FL"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Lakeland" },
    { "@type": "AdministrativeArea", "name": "Polk County, FL" },
    { "@type": "AdministrativeArea", "name": "Hillsborough County, FL" },
    { "@type": "City", "name": "Tampa" },
    { "@type": "City", "name": "Plant City" },
    { "@type": "City", "name": "Winter Haven" },
    { "@type": "City", "name": "Brandon" }
  ],
  "sameAs": [
    "https://www.instagram.com/ajfenceinc",
    "https://www.linkedin.com/company/aj-fence-mfg-inc"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fencing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aluminum Fence Installation",
          "url": "https://ajfencemfg.com/fencing-services/aluminum/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vinyl Fence Installation",
          "url": "https://ajfencemfg.com/fencing-services/vinyl/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wood Fence Installation",
          "url": "https://ajfencemfg.com/fencing-services/wood/"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chain Link Fence Installation",
          "url": "https://ajfencemfg.com/fencing-services/chain-link/"
        }
      }
    ]
  },
  "makesOffer": {
    "@type": "Offer",
    "name": "Free Fencing Consultation",
    "description": "Free, no-obligation consultation for custom home and commercial fencing projects."
  }
};

export default function FenceCompanyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FenceCompanyContent />
        </>
    );
}
