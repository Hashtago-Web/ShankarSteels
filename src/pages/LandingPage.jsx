// src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import HeroSection2 from "../components/HeroSection2";
import Leader from "../components/Leader";
import ProductsSection from "../components/ProductSection";
import Feedback from "../components/Feedback";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HeroSection2 />
      <ProductsSection />
      <Leader />
      <Feedback />
    </>
  );
}
