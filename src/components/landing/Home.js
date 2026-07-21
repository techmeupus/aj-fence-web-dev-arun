"use client";

import { useState } from "react";

import Hero from "./Hero";
import QuickQuote from "./QuickQuote";
import Services from "./Services";
import FenceTypes from "./FenceTypes";
import TrustSection from "./TrustSection";
import MapSection from "./MapSection";
import SearchIntent from "./SearchIntent";
import QuoteForm from "./QuoteForm";
import TapToCall from "./TapToCall";

export default function Home() {

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

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