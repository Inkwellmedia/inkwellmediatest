"use client";
import Header from '@/components/Header'
import React from 'react'
// import Asker from '@/sections/Asker';
import Footer from '@/components/Footer';
import WhyUsHero from './WhyUsHero';
import WhyUsStats from './WhyUsStats';
import WhyUsFeatures from './WhyUsFeatures';
import Concept from '@/sections/HomeConcept';
import WhyUsMainSection from './WhyUsMainSection';


function WhyUsPage() {
  const whyUsGradient = "linear-gradient(214deg, rgba(0, 2, 5, 1) 0%, rgba(0, 0, 0, 1) 12%, rgba(2, 4, 26, 1) 21%, rgba(2, 2, 61, 1) 36%, rgba(5, 7, 77, 1) 45%, rgba(5, 5, 102, 1) 54%, rgba(13, 13, 128, 1) 69%, rgba(59, 139, 163, 1) 88%, rgba(0, 212, 255, 1) 100%)";
  return (
    <div style={{
          background: whyUsGradient,
        }}>
      <Header />

      <WhyUsHero />
      <WhyUsStats gradient={whyUsGradient} />
      <WhyUsFeatures />
      <Concept />
      <WhyUsMainSection />
      {/* <TypesAndProcess /> */}
      {/* <AudienceExplainer /> */}
      {/* <Asker variant="about" /> */}
      <Footer gradient={whyUsGradient} />
    </div>
  )
}

export default WhyUsPage