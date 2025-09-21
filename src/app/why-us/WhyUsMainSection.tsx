import React from 'react';
import AboutTestimonial from './AboutTestimonial';
import FounderLetter from './FounderLetter';
import Asker from '@/sections/Asker';

const WhyUsMainSection: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen py-0"
      style={{
        background: 'linear-gradient(214deg, rgba(0, 2, 5, 1) 0%, rgba(0, 0, 0, 1) 12%, rgba(2, 4, 26, 1) 21%, rgba(2, 2, 61, 1) 36%, rgba(5, 7, 77, 1) 45%, rgba(5, 5, 102, 1) 54%, rgba(13, 13, 128, 1) 69%, rgba(59, 139, 163, 1) 88%, rgba(0, 212, 255, 1) 100%)',
      }}
    >
      <AboutTestimonial />
      <FounderLetter />
      <Asker variant="about" />
    </div>
  );
};

export default WhyUsMainSection; 