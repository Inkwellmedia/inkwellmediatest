// components/ServicesHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
// import Link from 'next/link';
import { Typography } from '@mui/material';

// const features = [
//     {
//         text: 'Rapid Turnaround & Agile Workflow',
//         tags: ['Speed', 'Efficiency'],
//     },
//     {
//         text: 'Data-Driven Creative Strategies',
//         tags: ['Analytics', 'Creativity'],
//     },
//     {
//         text: 'End-to-End Production Excellence',
//         tags: ['Quality', 'Reliability'],
//     },
//     {
//         text: 'Tailored & Localized Content',
//         tags: ['Custom', 'Localized'],
//     },
// ];

// const listItemVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.0 } },
// };

const ServicesHero: React.FC = () => (
    <Typography sx={{}}>
        <section
            className="relative min-h-screen h-full bg-cover bg-center pt-24"
            style={{
                backgroundImage: "url('https://ik.imagekit.io/Shubham2285/IMG_3535.jpeg?updatedAt=1751279321889')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontFamily: 'Elecrolize, sans-serif',
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{
                // background: 'linear-gradient(141deg,rgba(84, 1, 1, 1) 0%, rgba(247, 0, 58, 1) 17%, rgba(235, 45, 210, 1) 47%, rgba(183, 63, 235, 1) 63%, rgba(131, 26, 161, 1) 81%, rgba(56, 14, 69, 1) 100%)',
                opacity: 0.85
            }} />

            {/* Layout Container - match HomeHero */}
            <div className="relative z-10 container mx-auto px-4 min-h-screen h-full flex flex-col lg:flex-row items-center justify-center">
                {/* Left Content */}
                <motion.div
                    initial={{ x: -120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-7xl text-white text-left space-y-6 mb-22"
                >
                    <motion.h1
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-[-10px] mb-4"
                        style={{
                            fontFamily: 'Oxanium, sans-serif',
                            fontWeight: 700,
                            marginTop: '0px', // Default for desktop
                            ...(typeof window !== 'undefined' && window.innerWidth <= 768
                                ? { marginTop: '40px' } // Push header down in mobile mode
                                : {}),
                        }}
                    >
                        {/* Desktop: staggered, blocky effect */}
                        <span className="hidden md:block">
                            <span style={{ color: '#fff', fontSize: '3.2rem', fontWeight: 700, display: 'inline-block', lineHeight: 1.08 }}>
                                No longer just services,
                            </span>
                            <br />
                            <span style={{ marginLeft: '60px', color: '#fff', fontSize: '3.2rem', fontWeight: 700, display: 'inline-block', lineHeight: 1.08 }}>
                                but <span style={{ fontWeight: 900, fontSize: '4.5rem' }}>excellence</span> of our <span style={{ fontWeight: 900, fontSize: '4.5rem' }}>creativity</span>
                            </span>
                        </span>
                        {/* Mobile: simple stacked */}
                        <span className="block md:hidden text-3xl text-white font-bold leading-tight">
                            No longer just services,<br />but <span style={{fontSize:"2.8rem"}} className="font-extrabold">excellence</span> of our <span style={{fontSize:"2.8rem"}} className="font-extrabold">creativity</span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl max-w-7xl text-left mt-0"
                        style={{ fontFamily: "Cairo, sans-serif", lineHeight: 1.4 }}
                    >
                        Have you noticed the modern market? Our current generation <br/> is nothing less than a competition, where being outstanding <br/> becomes the primary objective- because this is what drives people <br/> to connect with you, right? This is exactly why you should let  Inkwell <br/> be the narrator of your brands story- because our speciality lies <br/> in adapting to the ever-evolving media landscape; while combining speed, <br/> creativity, and precision to deliver content that resonates with your <br/> audience is our Modus Operandi.
                    </motion.p>

                    {/* Responsive Feature List */}
                    <motion.ul
                        className="space-y-4 mt-8"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
                    >
                        {/* {features.map((feature, i) => (
                            <motion.li
                                key={i}
                                variants={listItemVariants}
                                className="flex items-start gap-3 text-white/90"
                                style={{ fontFamily: "'Titillium Web', sans-serif" }}
                            >
                                <CheckCircleIcon className="mt-1 text-2xl text-[#FF6A3D]" />
                                <div>
                                    <div className="font-medium text-lg" style={{ fontFamily: "'Titillium Web', sans-serif" }}>{feature.text}</div>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {feature.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="text-base text-white/80"
                                                style={{ fontFamily: "'Titillium Web', sans-serif" }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.li>
                        ))} */}
                    </motion.ul>

                    {/* Call to Action */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-8">
                        <Button
                          variant="text"
                          color="secondary"
                          className="bg-accent hover:bg-accent-dark text-white rounded-full px-6 py-2 shadow-lg"
                          disableElevation
                          onClick={() => {
                            const el = document.getElementById('services-list');
                            if (el) {
                              const y = el.getBoundingClientRect().top + window.pageYOffset - 100; // 100px offset
                              window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                          }}
                        >
                          <motion.a
                            className="inline-block bg-gradient-to-r from-[#9F1D1D] to-[#3F002D] text-white rounded-full px-4 md:px-10 py-3 text-[10px] md:text-sm font-bold shadow-xl"
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255,106,61,0.7)' }}
                            transition={{ type: 'spring', stiffness: 200 }}
                          >
                            Explore All Services
                          </motion.a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    </Typography>
);

export default ServicesHero;
