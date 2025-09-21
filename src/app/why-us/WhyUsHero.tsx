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

const WhyUsHero: React.FC = () => (
    <Typography sx={{}}>
        <section
            className="relative min-h-screen bg-cover bg-center pt-32 md:pt-24"
            style={{
                backgroundImage: "url('https://ik.imagekit.io/Shubham2285/about%20us2.jpg?updatedAt=1751555610468')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontFamily: 'Elecrolize, sans-serif',
                backgroundColor: 'rgba(0,0,0,0.55)',
                borderRadius: '1rem',
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{
                // background: 'linear-gradient(141deg,rgba(84, 1, 1, 1) 0%, rgba(247, 0, 58, 1) 17%, rgba(235, 45, 210, 1) 47%, rgba(183, 63, 235, 1) 63%, rgba(131, 26, 161, 1) 81%, rgba(56, 14, 69, 1) 100%)',
                opacity: 0.85
            }} />

            {/* Layout Container - match HomeHero */}
            <div className="relative z-10 container mx-auto px-2 md:px-4 min-h-screen flex flex-col justify-center">
                {/* Right Aligned Content */}
                <div className="w-full max-w-3xl ml-auto pr-4 md:pr-24">
                    <motion.div
                        initial={{ x: 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-right space-y-6 mb-22"
                    >
                        <motion.h1
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mt-[-10px] mb-4 text-right"
                            style={{ fontFamily: 'Oxanium, sans-serif', fontWeight: 700, color: '#fff', fontSize: '3.2rem', lineHeight: 1.08 }}
                        >
                            What is Inkwell?
                        </motion.h1>

                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl max-w-3xl text-right mt-0 ml-auto mb-8"
                            style={{fontFamily: "Cairo, sans-serif", lineHeight: 1.4 }}
                        >
If we&apos;re to answer in a few words? Specialists in the field of media production. But a few words don&apos;t always suffice, right? So let us give you a briefing:   </motion.p>

<motion.h1
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-[45px] mb-4 text-right"
    style={{ fontFamily: "Cairo, sans-serif", fontWeight: 700, color: '#fff', fontSize: '3rem', lineHeight: 1.08 }}
>
    <span style={{ fontStyle: 'italic', display: 'inline-block' }}>
        <span style={{
            fontSize: '1.3em',
            fontStyle: 'italic',
            display: 'inline-block',
            verticalAlign: 'bottom', /* Align the bottom of 'I' */
            lineHeight: 1,
            marginTop: '-0.1em' /* Adjust to visually align the bottom with the rest */
        }}>I</span>
        <span style={{
            fontSize: '1em',
            verticalAlign: 'bottom' /* Align the bottom of 'nkwell' */
        }}>nkwell</span>
    </span>
</motion.h1>

                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl max-w-3xl text-right mt-0 ml-auto"
                            style={{ fontFamily: "Lora, serif", lineHeight: 1.4 }}
                        >
As the name suggests, the metaphorical meaning gives the expression of a well brimming with ink such as ideas and creativity, just like how we work in the fields of creativity and production. Turning dreams into visualisation is an ability which we capitalize. Merging skillfully over the last years, we&apos;ve worked with several organizations helping them achieve commercial success. Even now, we&apos;re actively working over the commercial and corporate sector, personal interests and eventful settings- not just for profit, but for progress- our constant approach towards perfection.
</motion.p>
                        {/* Responsive Feature List */}
                        <motion.ul
                            className="space-y-4 mt-8 text-right"
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
            </div>
        </section>
    </Typography>
);

export default WhyUsHero;
