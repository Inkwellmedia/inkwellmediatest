import React from 'react';
// import { motion } from 'framer-motion';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import VideocamIcon from '@mui/icons-material/Videocam';
import EditIcon from '@mui/icons-material/Edit';
// import VideoProductionAnimation from './VideoProductionAnimation';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Link from 'next/link';
// import Button from '@mui/material/Button';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Google Fonts imports for Electrolize and Nunito
import Head from 'next/head';

const steps = [
    {
        title: 'Pre-Production',
        icon: PlaylistAddCheckIcon,
        description:
            'From brainstorming ideas and concepts to identifying best suited locations, imagining scenarios and writing specific scripts, hiring crew and approaching talents- it engulfs the field of planning and orientation, because we wish to represent the best for your vision.',
        features: [
            'Brainstorming ideas and concepts',
            'Identifying best suited locations',
            'Script writing, hiring crew, approaching talents',
        ],
        tags: ['Planning', 'Budgeting', 'Scheduling'],
        image: 'https://ik.imagekit.io/Shubham2285/pre%20production.png?updatedAt=1751294962238',
    },
    {
        title: 'Production',
        icon: VideocamIcon,
        description:
            'Actualising the scenario into a recording setup, this involves the shooting phase where we feature talented actors and actresses in a setup environment designed to highlight what describes you the best.',
        features: [
            'Shooting phase with talented actors',
            'Setup environment designed for you',
            'Direction and on-set management',
        ],
        tags: ['Filming', 'Direction', 'On-Set'],
        image: 'https://ik.imagekit.io/Shubham2285/production.jpeg?updatedAt=1751294925835',
    },
    {
        title: 'Post-Production',
        icon: EditIcon,
        description:
            'After getting the footage, it is processed over several factors- as we arrange the order into a sequence. Then we apply edits such as colour grading, add animations and visual elements, voice-over and sound design, and review it before finalizing because we want to proof check if it requires any changes or customization from your opinion, and finish it by delivering the product.',
        features: [
            'Editing and arranging footage',
            'Color grading, animations, sound design',
            'Final review and delivery',
        ],
        tags: ['Editing', 'Color Grading', 'Sound Mix'],
        image: 'https://ik.imagekit.io/Shubham2285/post%20production.jpg?updatedAt=1751294967754',
    },
];

export default function Concept() {
    return (
        <section className="relative py-16 overflow-hidden" style={{
            background: "linear-gradient(214deg, rgba(0, 2, 5, 1) 0%, rgba(0, 0, 0, 1) 12%, rgba(2, 4, 26, 1) 21%, rgba(2, 2, 61, 1) 36%, rgba(5, 7, 77, 1) 45%, rgba(5, 5, 102, 1) 54%, rgba(13, 13, 128, 1) 69%, rgba(59, 139, 163, 1) 88%, rgba(0, 212, 255, 1) 100%)",
        }}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Electrolize:wght@400;700&family=Nunito:wght@400;700&family=Oxanium:wght@700&family=Lora:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-stretch gap-8 relative">
                {/* Left Panel: Large static heading */}
                <div className="w-full mb-8 lg:mb-0 flex flex-col lg:justify-center lg:items-start lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-2/5 lg:mr-12 lg:ml-16" style={{zIndex:2}}>
                    <h2 className="mb-4 text-white" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                        <span style={{ fontFamily: 'Oxanium, sans-serif', fontSize: '4rem', display: 'block', lineHeight: 1.05 }}>How we Roll</span>
                        <span style={{ fontFamily: 'Oxanium, sans-serif', fontSize: '2rem', fontWeight: 400 }}>Transforming creativity into content.</span>
                    </h2>
                    <p className="mb-6 text-gray-200" style={{ fontFamily: 'Lora, serif', fontSize: '1.35rem', lineHeight: 1.6 }}>
                        Realization of concepts into creation is just as wonderful as a butterfly&apos;s evolution. Want a sneak peek at how it goes? Here&apos;s how we draw your imagination into illustration.
                    </p>
                </div>
                {/* Right Panel: Vertical stack of cards */}
                <div className="w-full flex flex-col gap-12 max-w-2xl px-4 lg:ml-auto">
                    {steps.map((step) => (
                        <div
                            key={step.title}
                            className="relative rounded-[2.5rem] border border-gray-400/40 shadow-xl px-10 py-10 flex flex-col md:flex-row items-center overflow-hidden transition-transform duration-300 hover:-translate-y-3"
                            style={{
                                background: `linear-gradient(214deg, rgba(0, 2, 5, 1) 0%, rgba(0, 0, 0, 1) 12%, rgba(2, 4, 26, 1) 21%, rgba(2, 2, 61, 1) 36%, rgba(5, 7, 77, 1) 45%, rgba(5, 5, 102, 1) 54%, rgba(13, 13, 128, 1) 69%, rgba(59, 139, 163, 1) 88%, rgba(0, 212, 255, 1) 100%)`,
                            }}
                        >
                            {/* Image background with black gradient overlay */}
                            <div
                                className="absolute inset-0 w-full h-full z-0 rounded-[2.5rem]"
                                style={{
                                    background: `linear-gradient(to right, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.0) 100%), url(${step.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    filter: 'brightness(0.85)',
                                }}
                            />
                            <div className="flex-1 relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>
                                    {step.title}
                                </h3>
                                <p className="text-white/80 mb-2 text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
