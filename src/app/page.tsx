import { Metadata } from "next";
import AnimatedSections from "@/components/ui/animated-sections";
import ProfessionalSolutions from "@/components/home/ProfessionalSolutions";
import OurServices from "@/components/home/OurServices";
import FencingServices from "@/components/home/FencingServices";
import Testimonials from "@/components/home/Testimonials";
import RecentBlog from "@/components/home/RecentBlog";
import Contact from "@/components/home/Contact";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "AJ Fence – Trusted Fencing Company for Quality Fences",
  description: "AJ Fence is a reliable fencing company providing professional fence installation and repair for homes and businesses with durable, long-lasting results.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph":[
    {
      "@type":"Organization",
      "@id":"https://ajfencemfg.com/#organization",
      "name":"AJ Fence Inc.",
      "url":"https://ajfencemfg.com/",
      "logo":{
        "@type":"ImageObject",
        "@id":"https://ajfencemfg.com/#logo",
        "url":"https://ajfencemfg.com/Aj%20fence%20logoAsset%203-8.png"
      },
      "image":{
        "@id":"https://ajfencemfg.com/#logo"
      },
      "sameAs":[
        "https://share.google/htnMJxXwPlYUniAZE",
        "https://www.instagram.com/ajfenceinc"
      ]
    },
    {
      "@type":[
        "LocalBusiness",
        "HomeAndConstructionBusiness"
      ],
      "@id":"https://ajfencemfg.com/#localbusiness",
      "name":"AJ Fence Inc.",
      "url":"https://ajfencemfg.com/",
      "description":"AJ Fence Inc. is a trusted fencing company providing commercial and residential fence installation, custom fence design, fence replacement and fencing solutions throughout Polk County and Hillsborough County, Florida. We specialize in aluminum, vinyl, wood and chain link fencing built for durability, security and curb appeal.",
      "image":{
        "@id":"https://ajfencemfg.com/#logo"
      },
      "logo":{
        "@id":"https://ajfencemfg.com/#logo"
      },
      "telephone":"+1-863-816-3117",
      "email":"mailto:ajfencemfg@gmail.com",
      "priceRange":"$$",
      "parentOrganization":{
        "@id":"https://ajfencemfg.com/#organization"
      },
      "address":{
        "@type":"PostalAddress",
        "streetAddress":"3929 Old Tampa Hwy.",
        "addressLocality":"Lakeland",
        "addressRegion":"FL",
        "postalCode":"33811",
        "addressCountry":"US"
      },
      "geo":{
        "@type":"GeoCoordinates",
        "latitude":28.03162740452616,
        "longitude":-82.02681655767171
      },
      "openingHoursSpecification":[
        {
          "@type":"OpeningHoursSpecification",
          "dayOfWeek":[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens":"08:00",
          "closes":"17:00"
        }
      ],
      "contactPoint":[
        {
          "@type":"ContactPoint",
          "contactType":"Customer Service",
          "telephone":"+1-863-816-3117",
          "areaServed":"Polk County, Florida",
          "availableLanguage":"English"
        },
        {
          "@type":"ContactPoint",
          "contactType":"Customer Service",
          "telephone":"+1-813-239-4122",
          "areaServed":"Hillsborough County, Florida",
          "availableLanguage":"English"
        }
      ],
      "serviceArea":[
        {
          "@type":"AdministrativeArea",
          "name":"Polk County, Florida"
        },
        {
          "@type":"AdministrativeArea",
          "name":"Hillsborough County, Florida"
        }
      ],
      "areaServed":[
        {
          "@type":"AdministrativeArea",
          "name":"Polk County, Florida"
        },
        {
          "@type":"AdministrativeArea",
          "name":"Hillsborough County, Florida"
        }
      ],
      "hasOfferCatalog":{
        "@type":"OfferCatalog",
        "@id":"https://ajfencemfg.com/#services",
        "name":"Fence Installation Services",
        "itemListElement":[
          {
            "@id":"https://ajfencemfg.com/fence-contractor/#service"
          },
          {
            "@id":"https://ajfencemfg.com/fence-installation/#service"
          },
          {
            "@id":"https://ajfencemfg.com/home-fencing/#service"
          },
          {
            "@id":"https://ajfencemfg.com/residential-fence/#service"
          },
          {
            "@id":"https://ajfencemfg.com/fencing-services/aluminum/#service"
          },
          {
            "@id":"https://ajfencemfg.com/fencing-services/vinyl/#service"
          },
          {
            "@id":"https://ajfencemfg.com/fencing-services/wood/#service"
          },
          {
            "@id":"https://ajfencemfg.com/fencing-services/chain-link/#service"
          }
        ]
      }
    },
    {
      "@type":"WebSite",
      "@id":"https://ajfencemfg.com/#website",
      "url":"https://ajfencemfg.com/",
      "name":"AJ Fence Inc.",
      "publisher":{
        "@id":"https://ajfencemfg.com/#organization"
      },
      "inLanguage":"en-US"
    },
    {
      "@type":"WebPage",
      "@id":"https://ajfencemfg.com/#webpage",
      "url":"https://ajfencemfg.com/",
      "name":"AJ Fence – Trusted Fencing Company for Quality Fences",
      "description":"AJ Fence is a reliable fencing company providing professional fence installation and repair for homes and businesses with durable, long-lasting results.",
      "isPartOf":{
        "@id":"https://ajfencemfg.com/#website"
      },
      "about":{
        "@id":"https://ajfencemfg.com/#localbusiness"
      },
      "primaryImageOfPage":{
        "@id":"https://ajfencemfg.com/#logo"
      },
      "inLanguage":"en-US"
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/fence-contractor/#service",
      "name":"Fence Contractor",
      "url":"https://ajfencemfg.com/fence-contractor/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"},
      "areaServed":[
        {"@type":"AdministrativeArea","name":"Polk County, Florida"},
        {"@type":"AdministrativeArea","name":"Hillsborough County, Florida"}
      ]
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/fence-installation/#service",
      "name":"Fence Installation",
      "url":"https://ajfencemfg.com/fence-installation/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"}
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/home-fencing/#service",
      "name":"Home Fencing",
      "url":"https://ajfencemfg.com/home-fencing/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"}
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/residential-fence/#service",
      "name":"Residential Fence",
      "url":"https://ajfencemfg.com/residential-fence/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"}
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/fencing-services/aluminum/#service",
      "name":"Aluminum Fencing",
      "url":"https://ajfencemfg.com/fencing-services/aluminum/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"}
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/fencing-services/vinyl/#service",
      "name":"Vinyl Fencing",
      "url":"https://ajfencemfg.com/fencing-services/vinyl/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"}
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/fencing-services/wood/#service",
      "name":"Wood Fencing",
      "url":"https://ajfencemfg.com/fencing-services/wood/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"}
    },
    {
      "@type":"Service",
      "@id":"https://ajfencemfg.com/fencing-services/chain-link/#service",
      "name":"Chain Link Fencing",
      "url":"https://ajfencemfg.com/fencing-services/chain-link/",
      "provider":{"@id":"https://ajfencemfg.com/#localbusiness"}
    }
  ]
};

export default function Home() {
  const heroSections = [
    {
      text: "High-Quality Fence For Less!",
      img: "/herosection/1.avif",
      ctaText: "Contact Us Now",
      ctaLink: "/contact-us/"
    },
    {
      text: "High-Quality Fence For Less!",
      img: "/herosection/2.avif",
      ctaText: "Contact Us Now",
      ctaLink: "/contact-us/"
    },
    {
      text: "High-Quality Fence For Less!",
      img: "/herosection/3.avif",
      ctaText: "Contact Us Now",
      ctaLink: "/contact-us/"
    },
    {
      text: "High-Quality Fence For Less!",
      img: "/herosection/5.avif",
      ctaText: "Contact Us Now",
      ctaLink: "/contact-us/"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <AnimatedSections
          sections={heroSections}
          showLogo={true}
          logoSrc="/aj_fence_logo.avif"
        />
        <ProfessionalSolutions />
        <OurServices />
        <FencingServices />
        <Testimonials />
        <RecentBlog />
        <Contact />
        <ContactForm />
      </main>
    </>
  );
}
