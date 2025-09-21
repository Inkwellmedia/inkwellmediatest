// components/AudienceExplainer.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';

import {
  HomeWork as HomeWorkIcon,
  ShoppingCart as ShoppingCartIcon,
  BusinessCenter as BusinessCenterIcon,
  RocketLaunch as RocketLaunchIcon,
  Public as PublicIcon,
  VideoLibrary as VideoLibraryIcon,
  LocalHospital as LocalHospitalIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const audienceExplainer = [
  {
    title: 'Real Estate',
    description:
      'Video walkthroughs and location explainers are essential. Cinematic tours let buyers explore from home, investor-pitch videos explain ROI with data, and geo-map explainers showcase nearby amenities. These videos fast-track decisions and boost sales.',
    features: ['Cinematic Property Tours', 'Investor Pitches', 'Geo-Map Explainers'],
    tags: ['#RealEstate', '#Walkthrough', '#Explainers'],
    Icon: HomeWorkIcon,
    image: '/images/paper-style-building-with-people.png',
  },
  {
    title: 'E-commerce',
    description:
      'Product demo videos and testimonials reduce returns and build trust. Social-ready promotional clips boost engagement and conversions across platforms.',
    features: ['Product Demo Videos', 'Customer Testimonials', 'Promo Reels'],
    tags: ['#Ecommerce', '#Demo', '#Reels'],
    Icon: ShoppingCartIcon,
    image: 'https://ik.imagekit.io/Shubham2285/Field%20ecom.png',
  },
  {
    title: 'Corporate',
    description:
      'Training modules, leadership profiles, and event coverage help unify communication. We capture live events and create engaging content for internal and external use.',
    features: ['Training Modules', 'Executive Profiles', 'Event Coverage'],
    tags: ['#Corporate', '#Training', '#Events'],
    Icon: BusinessCenterIcon,
    image: '/images/managers-are-discussing-business-issues.png',
  },
  {
    title: 'Startups',
    description:
      'Launch films with motion design, repurposed clips, and targeted ads define your brand identity from day one and drive ROI.',
    features: ['Brand Launch Films', 'Social Clips', 'Targeted Ads'],
    tags: ['#Startups', '#Launch', '#Social'],
    Icon: RocketLaunchIcon,
    image: 'https://ik.imagekit.io/Shubham2285/Field%20start%20up.png',
  },
  {
    title: 'NGOs & Government',
    description:
      'Inform and inspire with storytelling, stats, and accessible multilingual explainers. From public health to policy campaigns—we ensure impact.',
    features: ['Awareness Campaigns', 'Info Videos', 'Policy Explainers'],
    tags: ['#NGO', '#Awareness', '#Info'],
    Icon: PublicIcon,
    image: 'https://ik.imagekit.io/Shubham2285/Field%20gov%20&%20ngo.png',
  },
  {
    title: 'Content Creators',
    description:
      'We elevate content creators through pro editing, on-set support, and fast turnarounds—keeping quality and engagement high.',
    features: ['Video Editing', 'On-Set Support', 'Post Production'],
    tags: ['#Creators', '#Editing', '#Support'],
    Icon: VideoLibraryIcon,
    image: 'https://ik.imagekit.io/Shubham2285/field%20creator.jpeg',
  },
  {
    title: 'Healthcare',
    description:
      'Educational and facility videos improve patient trust. Bite-sized training modules boost retention and outcomes.',
    features: ['Patient Education', 'Clinic Walkthroughs', 'Training Videos'],
    tags: ['#Healthcare', '#PatientCare', '#Training'],
    Icon: LocalHospitalIcon,
    image: 'https://ik.imagekit.io/Shubham2285/Field%20healthcare.png',
  },
  {
    title: 'Education',
    description:
      'We craft campus tours, course intros, and student-driven social reels that increase enrollment and highlight academic offerings.',
    features: ['Campus Tours', 'Course Intros', 'Promo Reels'],
    tags: ['#Education', '#Campus', '#Courses'],
    Icon: SchoolIcon,
    image: 'https://ik.imagekit.io/Shubham2285/Field%20Education.webp',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' },
  }),
};

const AudienceExplainer: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-[#000] via-[#00182a] to-[#002147]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-[Oxanium]">
            Our expertise in diverse fields
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto font-[Titillium Web]">
            From real estate walkthroughs to e-commerce demo videos, we create targeted content for every industry.
          </p>
        </motion.div>

        <div className="space-y-20">
          {audienceExplainer.map((svc, idx) => {
            const IconComponent = svc.Icon;
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={svc.title}
                className={`flex flex-col-reverse lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} gap-10 items-center bg-white/5 p-6 md:p-10 rounded-3xl shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.01] hover:border-[#FF6A3D]`}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
              >
                <div className="lg:w-2/3 w-full space-y-6">
                  <div className="text-white">
                    <div className="flex items-center gap-4 mb-3">
                      <IconComponent className="text-[#FF6A3D]" style={{ fontSize: '2.5rem' }} />
                      <h3 className="text-3xl font-bold font-[Oxanium]">{svc.title}</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">{svc.description}</p>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-white/90">
                        <CheckCircleIcon className="text-[#3AFF9A] mt-1 text-xl" />
                        <span className="text-base">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-[#FF6A3D]/20 text-white px-4 py-1.5 rounded-full border border-[#FF6A3D]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    component={Link}
                    href="/contact-us"
                    variant="contained"
                    sx={{
                      mt: 3,
                      background: 'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                      color: '#fff',
                      py: 1.5,
                      px: 6,
                      borderRadius: '9999px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 15px rgba(255, 106, 61, 0.4)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #FF7C52 0%, #5C2B60 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(255, 106, 61, 0.6)',
                      },
                    }}
                  >
                    Contact Now
                  </Button>
                </div>

                <div className="lg:w-1/3 w-full flex justify-center items-center">
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/20">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      layout="fill"
                      objectFit="cover" // Changed to cover for better image display
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceExplainer;