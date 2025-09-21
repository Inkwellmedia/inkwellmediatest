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
                className='fixed min-h-screen h-full bg-cover bg-center pt-20'
                style={{
                    backgroundImage:
                        "url('https://ik.imagekit.io/Shubham2285/bggggg.png?updatedAt=1751625459008')",
                    backgroundAttachment: 'fixed',
                    // iOS fallback - use a pseudo-element for fixed background
                    position: 'relative',
                }}
            >
                {/* iOS fallback background */}
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                        backgroundImage:
                            "url('https://ik.imagekit.io/Shubham2285/bggggg.png?updatedAt=1751625459008')",
                        backgroundAttachment: 'scroll', // Use scroll for iOS compatibility
                        zIndex: -1,
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
                        className='w-full lg:w-7xl text-white text-left space-y-6 mb-22'
                    >
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className='text-5xl md:text-8xl mt-[-20px]'
                            style={{ lineHeight: '0.8' }}
                        >
                            <span
                                style={{
                                    fontFamily: 'Impact, sans-serif',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Every
                            </span>{' '}
                            <span
                                style={{
                                    fontFamily: 'Kumar One Outline, cursive',
                                }}
                            >
                                Brand
                            </span>
                            <br />
                            <span
                                style={{
                                    fontFamily: 'Impact, sans-serif',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Has its own
                            </span>{' '}
                            <span
                                className='block mt-1 md:inline md:mt-0'
                                style={{
                                    fontFamily: 'Kumar One Outline, cursive',
                                }}
                            >
                                Story
                            </span>
                            <span
                                style={{
                                    display: 'block',
                                    marginTop: '-0.1em', // Reduced space above for mobile
                                    fontSize: '2rem', // Slightly smaller if needed
                                    fontFamily: 'Impact, sans-serif',
                                    letterSpacing: '0.05em',
                                    lineHeight: 1.1, // Tighter line height
                                }}
                            >
                                And we narrate it into visuals.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className='text-lg md:text-xl max-w-7xl text-left mt-10'
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
                            className='flex flex-col sm:flex-row gap-6 justify-start items-center flex-wrap pt-10'
                        ></motion.div>
                    </motion.div>
                </div>
            </section>
        </Typography>
    );
};

export default HomeHero;
