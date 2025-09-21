"use client";
import Header from '@/components/Header';
import React from 'react'
import PortfolioHero from './PortfolioHero';
import Footer from '@/components/Footer';
import Asker from '@/sections/Asker';
import PortfolioStats from './PortfolioStats';

const portfolioGradient = "linear-gradient(90deg, #ffb3b3 0%, #ff6a3d 50%, #fff0e6 100%)";
const statsGradient = "linear-gradient(299deg, rgba(0, 0, 28, 1) 0%, rgba(20, 51, 143, 1) 26%, rgba(33, 80, 166, 1) 36%, rgba(132, 79, 201, 1) 53%, rgba(167, 68, 207, 1) 71%, rgba(136, 27, 161, 1) 85%, rgba(60, 24, 77, 1) 100%)";

function PortfolioPage() {
  return (
    <div style={{
      background: portfolioGradient, // Light red gradient
      position: 'relative',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: 'Elecrolize, sans-serif',
    }}>
      <Header />
      
      <PortfolioHero />
      <PortfolioStats />

      <Asker gradient={statsGradient} variant="portfolio" />
      <Footer gradient={statsGradient} />

    </div>
  )
}

export default PortfolioPage