"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Asker from '@/sections/Asker'
import FAQ from '@/sections/FAQ'
import HeroTargetAudience from '@/sections/HeroTargetAudience'
import HomeHero from '@/sections/HomeHero'
import HomePortfolio from '@/sections/HomePortfolio'
import HomeServices from '@/sections/HomeServices'
import VariousTypes from '@/sections/HomeVariousTypes'
import HomeVideo from '@/sections/HomeVideo'
import IntroductaryVideo from '@/sections/IntroductaryVideo'
import ScrollButton from '@/sections/ScrollButton'
import Testimonials from '@/sections/Testimonial'
import React from 'react'


function HomePage() {
  const homeGradient = "linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)";
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeVideo/>
      <HomeServices />
      {/* <HomeConcept /> */}
      <VariousTypes />
      <HomePortfolio />
      <HeroTargetAudience />
      <Testimonials />
      <FAQ />
      <Asker gradient={homeGradient} />
      <Footer gradient={homeGradient} />
      <IntroductaryVideo />
      <ScrollButton/>
    </div>
  )
}

export default HomePage