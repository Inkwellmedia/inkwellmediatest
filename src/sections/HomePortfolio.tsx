import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Typography } from '@mui/material';
import Link from 'next/link';

export interface PortfolioItem {
    id: string;
    title: string;
    type: 'youtube' | 'shorts';
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
];

export default function Portfolio() {
    const isDesktop = useMediaQuery('(min-width:1024px)');

    const youtubeItems = portfolioItems.filter(item => item.type === 'youtube');
    const shortsItems = portfolioItems.filter(item => item.type === 'shorts');

    return (
        <Typography className="py-8" sx={{
            background: "linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)",
        }}>
            <div className="container mx-auto px-4 space-y-12">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-[Oxanium]">
                    <span className="text-[4.2rem] sm:text-[5rem] md:text-[6rem] font-bold leading-tight">
                      Portfolio
                        </span> for people, <span className="text-[4.2rem] sm:text-[5rem] md:text-[6rem] font-bold leading-tight">
                Drawpot 
                        </span>       for you.
             
                      
                    </h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-4 max-w-4xl mx-auto px-2" style={{ fontFamily: "'Titillium Web', sans-serif" }}>
                    Our success flourished from our clients who have turned their visions into reality through us. This is how our work speaks volumes. Take a glimpse on the varieties of projects we have worked upon.                   </p>
                </div>
                
                {/* Combined Portfolio Grid */}
                <div className="space-y-12">
                    {/* YouTube Videos - 3 columns */}
                    <div
                        className="grid gap-6"
                        style={{
                            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
                        }}
                    >
                        {youtubeItems.map(item => (
                            <VideoCard key={item.id} item={item} isDesktop={isDesktop} />
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
                            <VideoCard key={item.id} item={item} isDesktop={isDesktop} />
                        ))}
                    </div>
                </div>
                {/* View More Videos Button */}
                <div className="flex justify-center mt-8">
                    <Link href="/portfolio" passHref>
                        <span className="bg-gradient-to-r from-[#FF6A3D] to-[#4E1C50] text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-200 shadow-lg cursor-pointer hover:scale-105">
                            View More Videos
                        </span>
                    </Link>
                </div>
            </div>
        </Typography>
    );
}

interface VideoCardProps { item: PortfolioItem; isDesktop: boolean; }
function VideoCard({ item}: VideoCardProps) {
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
                    <motion.a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-[red] rounded-full p-4 shadow-xl"
                        aria-label={`Watch ${item.title} on YouTube`}
                    >
                        <PlayArrowIcon sx={{ fontSize: 60 }} />
                    </motion.a>
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