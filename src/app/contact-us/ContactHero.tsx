import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <>
      <div style={{ height: '96px', background: '#000' }} /> {/* Spacer for navbar height, now black */}
      <section
        className="w-full h-screen"
        style={{
          background: "url('https://ik.imagekit.io/Shubham2285/400rs.png?updatedAt=1751305845220') no-repeat center center",
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          minHeight: '100vh',
          minWidth: '100vw',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* No content, only background image */}
        {/* Spacer to leave space before the blend starts */}
        <div style={{ height: '100px', width: '100%' }} />
        {/* Gradient overlay at the bottom for smooth blend */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '220px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #181818 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        {/* Animated Down Arrow */}
        <motion.div
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: [0, 18, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 32,
            transform: 'translateX(-50%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16L20 26L30 16" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>
    </>
  );
}
