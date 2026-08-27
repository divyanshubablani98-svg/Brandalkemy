import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import ServicesPreview from '../components/home/ServicesPreview';
import WorkPreview from '../components/home/WorkPreview';
import WhyBrandAlkemy from '../components/home/WhyBrandAlkemy';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <Introduction />
      <ServicesPreview />
      <WorkPreview />
      <WhyBrandAlkemy />
      <FinalCTA />
    </div>
  );
}