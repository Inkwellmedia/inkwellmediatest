// components/HomeTargetAudience.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TargetAudienceData = [
    {
        title: 'Real Estate',
        icon: 'https://ik.imagekit.io/Shubham2285/IMG_3251.png?updatedAt=1751018527886',
        tags: [
            'Cinematic Property Tours',
            'Investor Pitches',
            'Geo-Map Explainers',
        ],
    },
    {
        title: 'E-commerce',
        icon: 'https://ik.imagekit.io/Shubham2285/ecommerce.png?updatedAt=1750931719188',
        tags: ['Product Demo Videos', 'Customer Testimonials', 'Promo Reels'],
    },
    // {
    //     title: 'Corporate',
    //     icon: 'https://ik.imagekit.io/Shubham2285/IMG_3252.png?updatedAt=1751018529209',
    //     tags: ['Training Modules', 'Executive Profiles', 'Event Coverage'],
    // },
    {
        title: 'Startups',
        icon: 'https://ik.imagekit.io/Shubham2285/IMG_3250.png?updatedAt=1751018527259',
        tags: ['Brand Launch Films', 'Social Clips', 'Targeted Ads'],
    },
    // {
    //     title: 'NGOs & Gov',
    //     icon: 'https://ik.imagekit.io/Shubham2285/gov%20&%20ngos.png?updatedAt=1750931673325',
    //     tags: ['Awareness Campaigns', 'Info Videos', 'Policy Explainers'],
    // },
    // {
    //     title: 'Creators',
    //     icon: 'https://ik.imagekit.io/Shubham2285/creator.png?updatedAt=1750931646261',
    //     tags: ['Video Editing', 'On-Set Support', 'Post Production'],
    // },
    // {
    //     title: 'Healthcare',
    //     icon: 'https://ik.imagekit.io/Shubham2285/heathcare.png?updatedAt=1750931695627',
    //     tags: ['Patient Education', 'Clinic Walkthroughs', 'Training Videos'],
    // },
    {
        title: 'Education',
        icon: 'https://ik.imagekit.io/Shubham2285/Field%20Education.webp?updatedAt=1750931601612',
        tags: ['Campus Tours', 'Course Intros', 'Promo Reels'],
    },
];

const cardContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const isTouchDevice = () => {
    return (
        typeof window !== 'undefined' &&
        window.matchMedia('(hover: none) and (pointer: coarse)').matches
    );
};

const HomeTargetAudience: React.FC = () => {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

    const handleFlip = (idx: number) => {
        setActiveCardIndex((prev) => (prev === idx ? null : idx));
    };

    return (
        <section
            className='py-16 overflow-hidden'
            style={{
                background:
                    'linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)',
            }}
        >
            <div className='container mx-auto px-4'>
                <div className='flex flex-col items-center justify-center mb-6'>
                    <h2 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[Oxanium]'>
                        Our expertise in diverse fields
                    </h2>
                </div>

                <p className='text-center text-gray-300 max-w-4xl mx-auto mb-8 md:mb-6 leading-relaxed text-lg font-[Titillium Web]'>
                    With the right audience in mind, having a unique approach to
                    cater your audience is essential. We provide media assets
                    suitable and applicable for all industries, so that you may
                    present yourself before your audience with perfection.
                </p>

                <div className='flex justify-center'>
                    <div
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center'
                        onMouseLeave={() => setActiveCardIndex(null)}
                    >
                        {TargetAudienceData.map((service, idx) => {
                            const isFlipped = activeCardIndex === idx;
                            return (
                                <motion.div
                                    key={service.title}
                                    className='relative w-72 aspect-square [perspective:1000px] cursor-pointer'
                                    variants={cardContainerVariants}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true, amount: 0.3 }}
                                    onHoverStart={() =>
                                        !isTouchDevice() &&
                                        setActiveCardIndex(idx)
                                    }
                                    onHoverEnd={() =>
                                        !isTouchDevice() &&
                                        setActiveCardIndex(null)
                                    }
                                    onClick={() =>
                                        isTouchDevice() && handleFlip(idx)
                                    }
                                >
                                    <motion.div
                                        className='relative w-full h-full rounded-2xl shadow-xl transition-transform duration-300 [transform-style:preserve-3d]'
                                        animate={{
                                            rotateY: isFlipped ? 180 : 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                        }}
                                        style={{
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                        }}
                                    >
                                        {/* Front Side */}
                                        <div
                                            className='absolute inset-0 rounded-2xl overflow-hidden'
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                WebkitBackfaceVisibility:
                                                    'hidden',
                                            }}
                                        >
                                            <img
                                                src={service.icon}
                                                alt={service.title}
                                                className='w-full h-full object-cover rounded-2xl'
                                            />
                                            {/* Title container with top-left positioning and gradient blend */}
                                            <div
                                                className='absolute inset-x-0 top-0 pt-4 pb-24 px-4 flex items-start justify-start rounded-t-2xl' // Increased padding-bottom to 'pb-24'
                                                style={{
                                                    // Adjusted gradient for a longer, smoother blend
                                                    background:
                                                        'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 75%, transparent 100%)',
                                                }}
                                            >
                                                <h3
                                                    className='text-2xl font-bold text-white font-[Oxanium] text-left'
                                                    style={{
                                                        WebkitTextStroke:
                                                            '1px rgba(0,0,0,0.8)',
                                                        textShadow:
                                                            '2px 2px 4px rgba(0,0,0,0.5)',
                                                    }}
                                                >
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Back Side */}
                                        <div
                                            className='absolute inset-0 p-6 flex flex-col items-center justify-center text-center rounded-2xl'
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                WebkitBackfaceVisibility:
                                                    'hidden',
                                                transform: 'rotateY(180deg)',
                                                background:
                                                    'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                                                border: '1px solid #FF6A3D',
                                            }}
                                        >
                                            <div className='flex flex-col gap-2 mt-4'>
                                                {service.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className='text-sm font-medium text-white bg-white/20 px-3 py-1.5 rounded-full border border-white/30'
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTargetAudience;
