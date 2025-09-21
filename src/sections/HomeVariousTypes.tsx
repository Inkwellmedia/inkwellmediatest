'use client';
import React from 'react';

const types = [
      {
        title: 'Commercials & Ads',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3207.png?updatedAt=1750928384400',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Let the people recognize your brand, through mass communication',
        tags: ['TV Ads', 'Branding', 'Marketing'],
    },
    {
        title: 'YouTube Videos',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3199.jpeg?updatedAt=1750925132960',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Use the largest video social media to share and publicise your high quality full-length content on a global level.',
        tags: ['YouTube', 'Full-Length', 'HD'],
    },

    {
        title: 'Out-of-home (OHH) & kiosk',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3202.jpeg?updatedAt=1750926851595',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Whether its tv monitors or public billboards, these advertisements will never miss the opportunity to grab your potential audiences attention.',
        tags: ['Social Media', 'Promos'],
    },
    {
        title: 'Shorts & Reels',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3205.jpeg?updatedAt=1750927173686',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Engage and entertain, this motto works the best when it comes to quickly capturing the audience attention and creating attachment.',
        tags: ['Shorts', 'Reels', 'Viral'],
    },
    {
        title: 'Animations ',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3198.jpeg?updatedAt=1750925077225',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Fantasies cant be limited to convey just by words. Let the visuals speak for you.',
        tags: ['Full-Service', 'Script', 'Editing'],
    },
    {
        title: 'Podcast & Documentaries',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3531.png?updatedAt=1751278520777',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Share your story, not just by explanation, but through enacted experience',
        tags: ['Storytelling', 'Long-Form'],
    },
    {
        title: 'User-Generated Content',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3194.jpeg?updatedAt=1750925078478',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Let your community be the witness and feature of your successful journey, not as a bystander, but as a family.',
        tags: ['UGC', 'Authentic', 'Testimonials'],
    },
    {
        title: 'Walkthrough videos',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3200.jpeg?updatedAt=1750926850951',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Demonstrate what you want to highlight through the format of a video brochure. Emphasise the exclusivity of your products or services in an informative way. ',
        tags: ['Walkthrough', 'Product', 'Showcase'],
    },
    {
        title: 'Company culture videos ',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3195.jpeg?updatedAt=1750925078425',
        col: 'lg:col-span-2',
        row: 'lg:row-span-3',
        description: 'Your offices and employee management is a testimony of your work. Showcase the management and working ambience, services and employee correlation for people to let them know how you operate.',
        tags: ['Company Culture', 'Behind the Scenes', 'Testimonials'],
    },
        {
        title: 'Product shoot',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3196.jpeg?updatedAt=1750925078296',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Just as every product has its own persona, every product deserves its own voice as well! Let your product describe what it stands and how valuable it could be for its consumers.',
        tags: ['Brand introductive', 'Narrative', 'Settingful props'],
    },
     {
        title: 'Drone shoot',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3201.jpeg?updatedAt=1750926851708',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Can you imagine what happens when the skies become your lens, it evolves from a story to a living experience, cinematic grandeur shot of an aerial view which elevates your vision, i mean literally!',
        tags: ['Multi Angle capture', 'Cinematic orientation', 'First Person View'],
    },
      {
        title: 'Automotive shoot',
        image: 'https://ik.imagekit.io/Shubham2285/IMG_3204.jpeg?updatedAt=1750927177850',
        col: 'lg:col-span-2',
        row: 'lg:row-span-2',
        description: 'Whether its your first ride or your own promo, framing your fast lane should be special. It should inspire the desires of adventures, and the hunger to feel the thrills that comes from being behind the wheels.  Designed as a story, driven by visuals.',
        tags: ['Design highlight', 'Gimbal stability', 'Cinematic shots'],
    }
];

export default function VariousTypes() {
  return (
    <section className="py-16 text-white" style={{ background: "linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)" }}>
     <style>{`
  .card-container {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    transition: all 0.4s ease;
  }

  .card-container:hover .card-img {
    filter: brightness(0.6);
    transform: scale(1.05);
  }

 .card-title {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    font-weight: bold;
    font-size: 1.65rem;
    padding: 0.4rem 0.75rem;
    border-radius: 0.5rem;
    color: white;
    text-shadow:
        -0.5px -0.5px 0 #000,
        0   -0.5px 0 #000,
        0.5px -0.5px 0 #000,
        -0.5px  0   0 #000,
        0.5px  0   0 #000,
        -0.5px  0.5px 0 #000,
        0    0.5px 0 #000,
        0.5px  0.5px 0 #000;
}


  .card-description {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.85);
    color: white;
    transition: top 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 1;
  }

  .card-container:hover .card-description {
    top: 0;
  }

  .card-img {
    transition: all 0.4s ease;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .card-description p {
    font-size: 1.15rem; /* Increased font size here */
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`}</style>


      <div className="text-center mb-6 lg:mb-2">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold font-[Oxanium] leading-tight">
          Approach your audience, in ways which <span style={{ fontSize: '1.4em' }}>they</span> prefer.
        </h2>
      </div>
      <p className="p-2 text-center text-gray-300 max-w-4xl mx-auto mb-20 lg:mb-8 leading-relaxed text-lg font-[Titillium Web]">
        Diversity could be a blessing. Approach your audience with different meanings. Meanings which convinces them.  
      </p>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[300px] md:auto-rows-[150px]">
          {types.map((type, idx) => (
            <div key={idx} className={`${type.col} ${type.row} card-container`}>
              <img src={type.image} alt={type.title} className="card-img w-full h-full" />
              <div className="card-title text-base md:text-lg">{type.title}</div>
              <div className="card-description">
                <p>{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
