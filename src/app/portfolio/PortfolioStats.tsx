'use client';

import React from 'react';

// import Link from 'next/link';
import { motion} from 'framer-motion';
// import {
//   X,
//   PlayCircle,
//   Instagram,
//   Youtube,
//   Film,
// } from 'lucide-react';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { Typography } from '@mui/material';

type VideoType = 'youtube' | 'shorts' | 'reel' | 'custom';

interface PortfolioItem {
  id: string;
  title: string;
  type: VideoType;
  videoType: string;
  thumbnail: string;
  videoUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
      id: '1',
      title: '',
      type: 'youtube',
      videoType: 'Commercial Ad',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3561.jpeg?updatedAt=1751456558891',
      videoUrl: 'https://youtu.be/4spJftpawzc?si=dneE1RBmLq1_Mkdc',
  },
  {
      id: '2',
      title: '',
      type: 'youtube',
      videoType: 'Walkthrough',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3558.png?updatedAt=1751441166265',
      videoUrl: 'https://youtu.be/khet2AUsNto?si=VwFEnSVZTA6oaOUV',
  },
  {
      id: '3',
      title: '',
      type: 'youtube',
      videoType: 'YouTube Ad',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3560.jpeg?updatedAt=1751456559144',
      videoUrl: 'https://youtu.be/H6QoS8K_d-E?si=53byKFassHTGPGPU',
  },
  {
      id: '4',
      title: '',
      type: 'shorts',
      videoType: 'Instagram Reel',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3243.jpeg?updatedAt=1750963795975',
      videoUrl: 'https://youtube.com/shorts/94uZDoGDON4?si=ZG0I0_f6A1Bd07r3',
  },
  {
      id: '5',
      title: '',
      type: 'shorts',
      videoType: 'Facebook Feed',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3238.jpeg?updatedAt=1750963796366',
      videoUrl: 'https://youtube.com/shorts/JlV0Zpe-hlI?si=RADo1KCNGTtldkJn5',
  },
  {
      id: '6',
      title: '',
      type: 'shorts',
      videoType: 'YouTube Short',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3239.jpeg?updatedAt=1750963796756',
      videoUrl: 'https://youtube.com/shorts/CKqNbbi15oY?si=bNL6XG8xgK5j__Pa',
  },
  {
      id: '7',
      title: '',
      type: 'shorts',
      videoType: 'Instagram Reel',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3240.jpeg?updatedAt=1750963795719',
      videoUrl: 'https://youtu.be/Y2rg42rsOpg?si=FvYMeYzXKHlBa_gQ',
  },
  {
      id: '8',
      title: '',
      type: 'shorts',
      videoType: 'Facebook Feed',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3556.jpeg?updatedAt=1751441167540',
      videoUrl: 'https://www.youtube.com/shorts/al-_uTSeak4',
  },
  {
      id: '9',
      title: '',
      type: 'shorts',
      videoType: 'YouTube Ad',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3557.jpeg?updatedAt=1751441167506',
      videoUrl: 'https://youtube.com/shorts/F8wheacVWM8?si=_Aw1OqzWRXDgXHbb',
  },
  {
      id: '10',
      title: '',
      type: 'shorts',
      videoType: 'Facebook Feed',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3550.png?updatedAt=1751440177970',
      videoUrl: 'https://youtube.com/shorts/vqn5NRrcm6g?si=C6a-QGgPtk1vC_3G',
  },
  {
      id: '11',
      title: '',
      type: 'shorts',
      videoType: 'YouTube Short',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3547.png?updatedAt=1751440179236',
      videoUrl: 'https://youtube.com/shorts/isivFDOGemY?si=F37wnRNNsJartRJ5',
  },
  {
      id: '12',
      title: '',
      type: 'shorts',
      videoType: 'Campaign Ad',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3559.jpeg?updatedAt=1751441636833',
      videoUrl: 'https://youtube.com/shorts/SQNVQDK4tsQ?si=U1LhapoyrPtHPT3i',
  },
  {
      id: '13',
      title: '',
      type: 'shorts',
      videoType: 'Instagram Reel',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3546.png?updatedAt=1751440179459',
      videoUrl: ' https://youtube.com/shorts/a_MjHRBsNA0?si=qoCge0PDQnWPUW-n ',
  },
  {
      id: '14',
      title: '',
      type: 'shorts',
      videoType: 'Instagram Reel',
      thumbnail: 'https://ik.imagekit.io/Shubham2285/IMG_3548.png?updatedAt=1751440178930',
      videoUrl: 'https://youtube.com/shorts/wwyxj2gvp3c?si=g_IVWXrSbxZ1TrVy',
  },
];

export default function PortfolioStats() {
  const isDesktop = useMediaQuery('(min-width:1024px)');

  // Use the same filtering as HomePortfolio
  const youtubeItems = portfolioItems.filter(item => item.type === 'youtube');
  const shortsItems = portfolioItems.filter(item => item.type === 'shorts');

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(299deg, rgba(0, 0, 28, 1) 0%, rgba(20, 51, 143, 1) 26%, rgba(33, 80, 166, 1) 36%, rgba(132, 79, 201, 1) 53%, rgba(167, 68, 207, 1) 71%, rgba(136, 27, 161, 1) 85%, rgba(60, 24, 77, 1) 100%)' }}>
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-[#FF6A3D]/30 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ loop: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#FF6A3D] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 20 }}
      />

      <div className="container mx-auto px-4 space-y-12 text-white">
        {/* <div className="text-center mb-12 px-4">
          <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-[Oxanium]">
            <span className="text-[4.2rem] sm:text-[5rem] md:text-[6rem] font-bold leading-tight">
              Portfolio -
            </span>{' '}
            our Exquisite Memento
          </h2>
          <p className="text-center text-white/80 text-lg md:text-xl font-[Titillium Web] mb-4 max-w-4xl mx-auto px-4">
          Explore our most impactful work: our mastercraft designed to captivate, convert, and create lasting brand impact.
          </p>
        </div> */}
        {/* YouTube Videos - 3 columns */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
          }}
        >
          {youtubeItems.map(item => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
        {/* Shorts - 4 columns */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : '1fr',
          }}
        >
          {shortsItems.map(item => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface VideoCardProps { item: PortfolioItem; }
function VideoCard({ item }: VideoCardProps) {
  const isShort = item.type === 'shorts';
  // Use aspect-ratio for proper sizing
  const aspect = isShort ? '9 / 16' : '16 / 9';
  const minHeight = isShort ? 220 : 140;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-xl overflow-hidden shadow-lg border-2 border-[#9C27B0] flex flex-col mb-6"
      style={{ aspectRatio: aspect, width: '100%', minWidth: 0, minHeight, background: '#181818' }}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover absolute top-0 left-0"
          style={{ aspectRatio: aspect }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={item.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-4 shadow-xl"
            aria-label={`Watch ${item.title} on YouTube`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-red-600">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
        <h3 className="text-xl font-bold font-[Oxanium] mb-1">{item.title}</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 rounded-full font-semibold bg-red-600 text-white"> 
            {item.videoType}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
