"use client";
import Header from '@/components/Header';
import React from 'react'
import ContactForm from './ContactForm';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';


function ContactUsPage() {
  return (
    <div style={{
      background: "linear-gradient(90deg, #1a000a 0%, #3a0d2d 50%, #000 100%)", // Dark red/blackish gradient
    }}>
      <Header />

      <ContactHero/>
      <ContactForm />


      <Footer/>
    </div>
  )
}

export default ContactUsPage