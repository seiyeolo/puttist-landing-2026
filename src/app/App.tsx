import React, { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { CountdownBanner } from '@/app/components/CountdownBanner';
import { Features } from '@/app/components/Features';
import { Technology } from '@/app/components/Technology';
import { About } from '@/app/components/About';
import { VideoDemo } from '@/app/components/VideoDemo';
import { ContactForm } from '@/app/components/ContactForm';
import { FAQ } from '@/app/components/FAQ';
import { CTA } from '@/app/components/CTA';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { AdminSettings } from '@/app/components/AdminSettings';
import { LanguageProvider } from '@/app/contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A1628] text-[#E5E7EB]">
        <Navigation />
        <CountdownBanner />
        <Hero />
        <Features />
        <Technology />
        <About />
        <VideoDemo />
        <ContactForm />
        <FAQ />
        <CTA />
        <Footer />
        <ScrollToTop />
        <AdminSettings />
      </div>
    </LanguageProvider>
  );
}