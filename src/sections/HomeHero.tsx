import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

// Custom hook for counting up
function useCountUp({
    end,
    duration = 2,
    start = 0,
}: {
    end: number;
    duration?: number;
    start?: number;
}) {
    const [count, setCount] = useState(start);
    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
                (timestamp - startTimestamp) / (duration * 1000),
                1
            );
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(step);
    }, [end, duration, start]);
    return count;
}

const HomeHero: React.FC = () => {
    // Base styles for the skewed button-like elements
    const skewedButtonBaseStyles = {
        color: 'white',
        background: 'rgba(0,0,0,0.2)', // Slightly transparent dark background
        border: '2px solid #FF6A3D', // Red border color
        padding: '8px 24px',
        fontWeight: 'bold',
        fontSize: '1rem',
        display: 'inline-flex', // Use inline-flex for proper content sizing
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        position: 'relative', // Needed for unskewing inner content
        overflow: 'hidden', // Ensures content stays within the skewed shape
        // Hover effect for the skewed button itself
        '&:hover': {
            background: 'rgba(255, 106, 61, 0.1)', // Slight red background on hover
        },
    };

    const videosCount = useCountUp({ end: 1140, duration: 6 });
    const viewsCount = useCountUp({ end: 11866000, duration: 6 });

    return (
        <Typography sx={{}}>
            <section
                className='relative min-h-screen h-full pt-20'
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* iOS-compatible background */}
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage:
                            "url('https://ik.imagekit.io/Shubham2285/bggggg.png?updatedAt=1751625459008')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll', // Use scroll for iOS compatibility
                        zIndex: -2,
                        // iOS-specific fixes
                        WebkitTransform: 'translateZ(0)',
                        transform: 'translateZ(0)',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                    }}
                />
                {/* Additional iOS fallback with transform3d */}
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage:
                            "url('https://ik.imagekit.io/Shubham2285/bggggg.png?updatedAt=1751625459008')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1,
                        // iOS hardware acceleration
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        transform: 'translate3d(0, 0, 0)',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                    }}
                />
                {/* Dark Overlay */}
                <div className='absolute inset-0 bg-black/40' />

                {/* Layout Container */}
                <div className='relative z-10 container mx-auto px-4 min-h-screen h-full flex flex-col lg:flex-row items-center justify-center'>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className='w-full lg:w-7xl text-white text-center lg:text-left space-y-6 mb-22'
                    >
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className='text-4xl sm:text-5xl md:text-8xl'
                            style={{
                                lineHeight: '0.9',
                                marginTop: '0',
                                // iOS-specific fixes
                                WebkitTextSizeAdjust: '100%',
                                textSizeAdjust: '100%',
                            }}
                        >
                            {/* First line: Every Brand */}
                            <div
                                style={{
                                    display: 'block',
                                    marginBottom: '0.1em',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        letterSpacing: '0.05em',
                                        marginRight: '0.3em',
                                    }}
                                >
                                    Every
                                </span>
                                <span
                                    style={{
                                        fontFamily:
                                            'Kumar One Outline, cursive',
                                    }}
                                >
                                    Brand
                                </span>
                            </div>

                            {/* Second line: Has its own Story */}
                            <div
                                style={{
                                    display: 'block',
                                    marginBottom: '0.2em',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: 'Impact, sans-serif',
                                        letterSpacing: '0.05em',
                                        marginRight: '0.3em',
                                    }}
                                >
                                    Has its own
                                </span>
                                <span
                                    style={{
                                        fontFamily:
                                            'Kumar One Outline, cursive',
                                    }}
                                >
                                    Story
                                </span>
                            </div>

                            {/* Third line: And we narrate it into visuals. */}
                            <span
                                style={{
                                    display: 'block',
                                    fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                                    fontFamily: 'Impact, sans-serif',
                                    letterSpacing: '0.05em',
                                    lineHeight: 1.2,
                                    marginTop: '0.1em',
                                }}
                            >
                                And we narrate it into visuals.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className='text-lg md:text-xl max-w-7xl text-center lg:text-left mt-10'
                            style={{
                                fontFamily: "'Titillium Web', sans-serif",
                            }}
                        >
                            Its your story, your dream. Let the Inkwell narrate
                            it for you. We work towards elevating your <br />
                            digital footprint, business performance and social
                            standing with implementation of dynamic media.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className='text-5xl md:text-xl max-w-7xl flex justify-start flex-wrap gap-2 relative ml-2 md:ml-32'
                        >
                            {/* First Skewed "Button" (Left) */}
                            <div className='transform skew-x-[-15deg] z-20 border-2 border-red-500 bg-black/20 px-6 py-2 font-bold text-white text-base inline-flex items-center justify-center cursor-pointer transition hover:bg-red-500/10'>
                                <span className='transform skew-x-[15deg] block'>
                                    {videosCount.toLocaleString()}+ Videos
                                </span>
                            </div>

                            {/* Second Skewed "Button" (Right and Overlapping) */}
                            <div
                                style={{
                                    ...skewedButtonBaseStyles,
                                    transform: 'skewX(-15deg)', // Same skew
                                    position: 'absolute',
                                    top: '35px',
                                    left: '160px',
                                    zIndex: 1,
                                }}
                                className='ml-2 md:ml-0'
                            >
                                <span
                                    style={{
                                        transform: 'skewX(15deg)',
                                        display: 'block',
                                    }}
                                >
                                    {viewsCount.toLocaleString()}+ Views
                                </span>{' '}
                                {/* Unskew text */}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 0.6,
                                type: 'spring',
                                stiffness: 120,
                            }}
                            className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center flex-wrap pt-10'
                        >
                            {/* Call Button */}
                            <motion.a
                                href='tel:+919082531628'
                                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-red-700'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background:
                                        'linear-gradient(135deg, #FF6A3D 0%, #E53E3E 100%)',
                                    boxShadow:
                                        '0 4px 15px rgba(255, 106, 61, 0.3)',
                                }}
                            >
                                <svg
                                    className='w-6 h-6 mr-3 group-hover:animate-pulse'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                                </svg>
                                <span className='font-[Oxanium] tracking-wide'>
                                    Call Now: +91 9082531628
                                </span>
                                <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </Typography>
    );
};

export default HomeHero;
