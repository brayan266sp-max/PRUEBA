/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { EmergingTalentSection } from './components/EmergingTalentSection';
import { CategoriesCarousel } from './components/CategoriesCarousel';
import { TrustSection } from './components/TrustSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';

export default function App() {
  const scrollToRegister = () => {
    const el = document.getElementById('registro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus email input after smooth scroll
      setTimeout(() => {
        const input = document.getElementById('cta-email-input');
        if (input) input.focus();
      }, 500);
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('como-funciona');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] flex flex-col font-sans selection:bg-[#70AD70]/30 selection:text-[#2F6F35]">
      {/* Interactive Cursor Animation across the entire page */}
      <CursorGlow />

      {/* 1. GitHub-style Glassmorphism Navigation */}
      <Navbar onCtaClick={scrollToRegister} />

      <main className="flex-1">
        {/* 2. Hero Section: GitHub Universe-grade Hero with interactive terminal & telemetry */}
        <HeroSection onCtaClick={scrollToRegister} onExploreClick={scrollToExplore} />

        {/* 3. Section 1: Problema - "Encontrar talento no debería ser una apuesta" with diff viewer */}
        <ProblemSection />

        {/* 4. Section 2: Solución - "Conoce BRINDO" (GitHub Bento Grid + Triple-A) */}
        <SolutionSection />

        {/* 5. Section 3: Cómo funciona - 4 connected pipeline stages (Busca -> Elige -> Contrata -> Recibe) */}
        <HowItWorksSection />

        {/* 6. Section 4: Talento emergente - Contributor showcase (Universidades, SENA, Egresados) */}
        <EmergingTalentSection />

        {/* 7. Section 5: Categorías - GitHub Marketplace style horizontal stream */}
        <CategoriesCarousel />

        {/* 8. Section 6: Confianza - Enterprise Trust & Compliance Center (Escrow PSE, Cédula, Habeas Data) */}
        <TrustSection />

        {/* 9. Section 7: CTA Final - High-tech command console waitlist & app store badges */}
        <FinalCtaSection />
      </main>

      {/* 10. Section 8: Footer - Obsidian footer with live system operational status badge */}
      <Footer />
    </div>
  );
}
