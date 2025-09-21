import React from 'react';

const features = [
  {
    title: 'Deep Domain Expertise',
    desc: 'With years of experience across real estate, e-commerce, corporate, and more, we understand your audience, your goals, and the best way to tell your story.'
  },
  {
    title: 'Experimentation of high end Production Tech',
    desc: 'We leverage 4K cameras, drones, gimbals, and pro lighting, plus studio facilities and advanced post-production workflows, for a polished, cinematic finish.'
  },
  {
    title: 'A wholly comprised Creative Control',
    desc: 'We manage the entirety of production- From concept and scripting to shooting, editing, and motion-graphics, everything happens under one roof, leaving no room for disarray. This is how we ensure consistent vision and faster turnarounds.'
  },
  {
    title: 'In-depth optimization',
    desc: 'In the sector of social media management, we conceptualize and designate strategies which puts your social standing at a highlight, with the backing of scheduled plans and active community engagement, analytical tools and metrics.'
  },
  {
    title: 'Data Driven Strategies',
    desc: `At Inkwell, a constant study of the market meta is pursued and then applied to the methods that could manifest the best results. This is how we combine analytics with creativity: testing thumbnails, A/B'ing cuts, and optimizing distribution to maximize reach, engagement, and ROI.`
  },
  {
    title: 'Individualizing identity and social engagement',
    desc: `We construct and uphold an influencer's social authenticity with their collaborative partners with the compatibility in mind, with the consideration of impact that's placed on the audience.`
  },
];

const WhyUsFeatures: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6" style={{ background: 'linear-gradient(214deg, rgba(0, 2, 5, 1) 0%, rgba(0, 0, 0, 1) 12%, rgba(2, 4, 26, 1) 21%, rgba(2, 2, 61, 1) 36%, rgba(5, 7, 77, 1) 45%, rgba(5, 5, 102, 1) 54%, rgba(13, 13, 128, 1) 69%, rgba(59, 139, 163, 1) 88%, rgba(0, 212, 255, 1) 100%)' }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16" style={{ fontFamily: 'Oxanium, sans-serif' }}>
          How we become the <span className="text-white">perfect partner <span className="font-extrabold">for you.</span></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((f, i) => (
            <div key={i}>
              <div className="font-bold text-lg text-white mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>{f.title}</div>
              <div className="text-white/90 text-base md:text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsFeatures; 