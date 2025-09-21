// components/ServicesHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
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

const PortfolioHero: React.FC = () => (
    <Typography sx={{}}>
        <section
            className="relative min-h-screen h-full bg-cover bg-center pt-24"
            style={{
                backgroundImage: "url('https://ik.imagekit.io/Shubham2285/Portfolio.jpg?updatedAt=1751284659158')",
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
            <div className="relative z-10 container mx-auto px-4 min-h-screen h-full flex flex-col items-center justify-center">
                {/* Centered Content */}
                <motion.div
                    initial={{ x: -120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-3xl text-white text-center space-y-6 mb-22 mx-auto"
                >
                    <motion.h1
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-[-10px] mb-4 text-center"
                        style={{ fontFamily: 'Oxanium, sans-serif', fontWeight: 700, color: '#fff', fontSize: '3.2rem', lineHeight: 1.08 }}
                    >
                        <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-[Oxanium]">
                    <span className="text-[4.2rem] sm:text-[5rem] md:text-[6rem] font-bold leading-tight">
                      Portfolio <br/>
                        </span> our Exquisite Memento
             
                      
                    </h2>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl max-w-3xl text-center mt-8 mx-auto font-semibold"
                        style={{ fontFamily: "'Cairo', sans-serif", lineHeight: 1.4 }}
                    >
When we take any project work in our hands, we put efforts not just for our clients, but for our own improvement as well. We exalt our work as innovation- because we wish to give individuality to each and every distinctive asset.  Every frame in our portfolio is crafted with precision, creativity, and strategy: guaranteeing content that not only amazes the viewers but delivers measurable results. To understand how it works-Explore our most impactful work: our mastercraft designed to captivate, convert, and create lasting brand impact.
</motion.p>

                    {/* Responsive Feature List */}
                    <motion.ul
                        className="space-y-4 mt-8 text-center"
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
                </motion.div>
            </div>
        </section>
    </Typography>
);

export default PortfolioHero;
