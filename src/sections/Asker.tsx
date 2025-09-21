import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export interface AskerProps {
    gradient?: string;
    variant?: 'home' | 'service' | 'portfolio' | 'about';
}

const Asker: React.FC<AskerProps> = ({ gradient, variant = 'home' }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (inView) {
            controls.start({ scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.8 } });
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            className="py-20 relative overflow-hidden"
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, ...(gradient ? { background: gradient } : {}) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border-3 border-white rounded-3xl p-12 overflow-hidden hover:shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    animate={controls}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                >
                    {/* Decorative accents */}
                    <motion.span
                        className="absolute top-6 left-6 w-5 h-5 rounded-full bg-gradient-to-tr from-[#FF6A3D] to-[#FFA62B]"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <motion.span
                        className="absolute bottom-6 right-6 w-6 h-6 border-2 border-white rounded-full"
                        animate={{ x: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    />

                    {variant === 'about' ? (
                        <div
                            className="flex flex-col items-center text-center w-full"
                            style={{ lineHeight: 1 }}
                        >
                            <div style={{ marginBottom: '0.05em' }}>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginRight: '0.3rem' }}>We don&apos;t just</span>
                                <span style={{ color: '#6C55C9', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 4.5rem)', marginRight: '0.3rem' }}>Shoot</span>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>,</span>
                            </div>
                            <div style={{ marginTop: '-0.35em' }}>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginRight: '0.3rem' }}>We shape</span>
                                <span style={{ color: '#6C55C9', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 4.5rem)', marginRight: '0.3rem' }}>stories</span>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>.</span>
                            </div>
                        </div>
                    ) : variant === 'portfolio' ? (
                        <div
                            className="flex flex-col items-center text-center w-full"
                            style={{ lineHeight: 1 }}
                        >
                            <div style={{ marginBottom: '0.05em' }}>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 2.2rem)', marginRight: '0.3rem' }}>A short</span>
                                <span style={{ color: '#F2C230', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 4rem)', marginRight: '0.3rem' }}>beginning</span>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 2.2rem)' }}>,</span>
                            </div>
                            <div style={{ marginTop: '-0.35em' }}>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 2.2rem)', marginRight: '0.3rem' }}>for the</span>
                                <span style={{ color: '#F2C230', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 4rem)', marginRight: '0.3rem' }}>grand</span>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 2.2rem)' }}>ending.</span>
                            </div>
                        </div>
                    ) : variant === 'service' ? (
                        <div
                        className="flex flex-col items-center text-center w-full"
                        style={{ lineHeight: 1.1 }}
                      >
                        <div style={{ marginBottom: '0.4em' }}>
                          <span
                            style={{
                              color: '#e99b9b',
                              fontWeight: 700,
                              fontSize: 'clamp(2.8rem, 6vw, 4rem)',
                              marginRight: '0.3rem',
                            }}
                          >
                            Serving
                          </span>
                          <span
                            style={{
                              color: 'white',
                              fontWeight: 700,
                              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                              position: 'relative',
                              top: '-0.2em',
                            }}
                          >
                            the
                          </span>
                        </div>
                      
                        <div style={{ marginBottom: '0.4em' }}>
                          <span
                            style={{
                              color: '#e99b9b',
                              fontWeight: 700,
                              fontSize: 'clamp(3rem, 6.5vw, 4.2rem)',
                              marginRight: '0.3rem',
                            }}
                          >
                            Satisfaction
                          </span>
                          <span
                            style={{
                              color: 'white',
                              fontWeight: 700,
                              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                              position: 'relative',
                              top: '-0.2em',
                            }}
                          >
                            in
                          </span>
                        </div>
                      
                        <div style={{ marginBottom: '0.4em' }}>
                          <span
                            style={{
                              color: '#e99b9b',
                              fontWeight: 700,
                              fontSize: 'clamp(3rem, 6.5vw, 4.2rem)',
                              marginRight: '0.3rem',
                            }}
                          >
                            Form
                          </span>
                          <span
                            style={{
                              color: 'white',
                              fontWeight: 700,
                              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                              position: 'relative',
                              top: '-0.2em',
                            }}
                          >
                            of
                          </span>
                        </div>
                      
                        <div>
                          <span
                            style={{
                              color: '#e99b9b',
                              fontWeight: 700,
                              fontSize: 'clamp(3rem, 6.5vw, 4.2rem)',
                            }}
                          >
                            Relations
                          </span>
                          <span
                            style={{
                              color: 'white',
                              fontWeight: 700,
                              fontSize: 'clamp(2rem, 5vw, 3rem)',
                              marginLeft: '0.1rem',
                              position: 'relative',
                              top: '-0.2em',
                            }}
                          >
                            .
                          </span>
                        </div>
                      </div>
                      
                    ) : (
                        <>
                            {/* Main Heading */}
                            <motion.h3
                                className="text-4xl md:text-4xl font-bold text-white text-center mb-4"
                                style={{ fontFamily: "'Staatliches', sans-serif !important" }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <span style={{
                                    fontSize: '2em', color: '#FF6A3D', fontWeight: 'bold',
                                }}>Beyond</span> the <span style={{
                                    fontSize: '2em', color: '#FF6A3D', fontWeight: 'bold',
                                }}>videos</span>, <span style={{
                                    fontSize: '2em', color: '#FF6A3D', fontWeight: 'bold',
                                }}>we</span> build <span style={{
                                    fontSize: '2em', color: '#FF6A3D', fontWeight: 'bold',
                                }}>experiences</span>
                            </motion.h3>

                            {/* Subheading */}
                            <motion.p
                                className="text-center text-white/80 mb-8 text-xl md:text-2xl max-w-3xl mx-auto"
                                style={{ fontFamily: "'Playfair Display', serif !important" }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Captivate your audience, not just by words, but with our visuals that narrates your stories.
                            </motion.p>

                            {/* Call to Action */}
                            <motion.div
                                className="flex justify-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
                            >
                                <motion.a
                                    href="/contact-us"
                                    className="inline-block bg-gradient-to-r from-[#FF6A3D] to-[#FFA62B] text-white rounded-full px-10 py-4 text-lg font-medium shadow-xl"
                                    whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,106,61,0.7)' }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    Get Started →
                                </motion.a>
                            </motion.div>
                        </>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Asker;
