import React from 'react';
import { motion } from 'framer-motion';

const imageUrl = 'https://ik.imagekit.io/Shubham2285/Picsart_25-07-04_17-23-13-314.png?updatedAt=1751693287550';

// const curvedWords = [
//   { text: 'Learner', angle: 20, x: 70, y: 30 },
//   { text: 'Reader', angle: 35, x: 220, y: 35 },
//   { text: 'Adventurer', angle: 90, x: 270, y: 180 },
//   { text: 'Designer', angle: 135, x: 220, y: 340 },
//   { text: 'Actor', angle: 160, x: 70, y: 350 },
//   { text: 'Artist', angle: 200, x: 10, y: 270 },
//   { text: 'Author', angle: 250, x: 20, y: 120 },
//   { text: 'Explorer', angle: 300, x: 60, y: 50 },
// ];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const AboutTestimonial: React.FC = () => {
  return (
    <section
      className="w-full py-8 lg:py-10 px-6"
    >
      {/* Heading at the top */}
      <motion.div
        className="text-center mb-4 lg:mb-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div style={{
          padding: '0.5rem',
          textAlign: 'center',
        }}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-[Oxanium] text-white font-bold text-center md:whitespace-nowrap">
            Enough of work, just take a glimpse at our
            <span style={{ fontSize: '2em', marginLeft: '0.3em' }} className="text-3xl sm:text-5xl md:text-6xl font-bold">
              Origin.
            </span>
          </h2>
        </div>
      </motion.div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-0 md:px-8">
        {/* Left: Quotes and Name */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-white">
          <div className="italic text-2xl md:text-3xl lg:text-3xl mb-8" style={{ fontFamily: 'Lora, serif', lineHeight: 1.4 }}>
            &quot;If you love your work- it shouldn&apos;t be limited to just a space like a studio or a platform set. It should be enjoyed like a playground, a playfulness that derives practicality.&quot;
            <br /><br />
            &quot;When you work in such manner, it inspires an environment which draws out everyone&apos;s potential&quot;
          </div>
        </div>
        {/* Right: Image with curved text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative" style={{ minHeight: 300 }}>
          <div className="relative w-full max-w-[350px] h-[400px] overflow-visible">
            {/* Image container centered in larger area */}
            <div className="absolute top-[20px] left-[15px] w-[300px] md:w-[320px] h-[320px] md:h-[340px] z-10">
              <img
                src={imageUrl}
                alt="Shubham Saanp"
                className="w-full h-full object-cover block"
                style={{
                  borderTopLeftRadius: 200,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 200,
                  borderBottomLeftRadius: 200,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              />
            </div>
          </div>
          {/* Name and Title under image */}
          <div className="mt-4 text-center">
            <div className="font-bold text-xl md:text-2xl" style={{ fontFamily: 'Oxanium, sans-serif', textDecoration: 'underline', textDecorationThickness: '3px', textUnderlineOffset: '6px' }}>
              Shubham Sanap,
            </div>
            <div className="font-semibold text-base md:text-lg mt-2" style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}>
              Founder of Inkwell
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonial; 