// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
import TrustedBy from "../components/TrustedBy.jsx";
import UXProblems from "../components/UXProblems.jsx";
import WhatIOffer from "../components/WhatIOffer.jsx";
import About from "../components/About.jsx";
import Portfolio from "../components/Portfolio.jsx";
import CTABanner from "../components/CTABanner.jsx";
import Testimonials from "../components/Testimonials.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Services from "../components/Services.jsx";
import DevPartner from "../components/DevPartner.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <main className="bg-[#e5f4fa] font-[Poppins]">
      <Hero />
      <TrustedBy />
      <UXProblems />
      <WhatIOffer />
      <About />
      <Portfolio />
      <CTABanner />
      <Testimonials />
      <HowItWorks />
      <Services />
      <DevPartner />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
