"use client";

import { memo, useCallback, useState } from "react";

import HeroSection from "./Hero";
import QuickQuote from "./QuickQuote";
import ServicesSection from "./Services";
import FenceTypesSection from "./FenceTypes";
import TrustSectionBase from "./TrustSection";
import MapSection from "./MapSection";
import SearchIntent from "./SearchIntent";
import QuoteFormSection from "./QuoteForm";
import TapToCall from "./TapToCall";

// Memoized so opening/closing the quote popup only re-renders the popup (keeps INP low)
const Hero = memo(HeroSection);
const Services = memo(ServicesSection);
const FenceTypes = memo(FenceTypesSection);
const TrustSection = memo(TrustSectionBase);
const QuoteForm = memo(QuoteFormSection);

export default function Home() {

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuote = useCallback(() => setIsQuoteOpen(true), []);
  const closeQuote = useCallback(() => setIsQuoteOpen(false), []);

  return (
    <>
      {/* <MapSection />
      <SearchIntent /> */}
      {/* <TapToCall /> */}
      <Hero openPopup={openQuote}/>

      {/* Services opens popup */}
      <Services openPopup={openQuote} />

      <FenceTypes openPopup={openQuote}/>
      <TrustSection openPopup={openQuote}/>
      <QuoteForm />

      {/* Popup */}
      <QuickQuote isOpen={isQuoteOpen} onClose={closeQuote} />
    </>
  );
}