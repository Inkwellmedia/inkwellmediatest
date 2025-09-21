"use client";
import Header from '@/components/Header';
import React from 'react'
import ServicesHero from './ServicesHero';
import Footer from '@/components/Footer';
import Asker from '@/sections/Asker';
import ServicesFullContent from './ServiceExplainer';
import { SERVICE_GRADIENT } from '@/lib/gradients';


function ServicesPage() {
  return (
    <div style={{
      background: SERVICE_GRADIENT,
      position: 'relative',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: 'Elecrolize, sans-serif',
    }}>
      <Header />
      {/* <Typography className='seperator' sx={{
        height:{
          xs: '50px',
          sm: '70px',
          md: '80px',
        }
      }}/> */}
      <ServicesHero />
      <ServicesFullContent />
      <Asker gradient="transparent" variant="service" />
      <Footer gradient="transparent" />
    </div>
  )
}

export default ServicesPage