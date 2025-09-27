// components/HomeServices.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Re-added import
import ShareIcon from '@mui/icons-material/Share'; // Re-added import
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // Re-added import

interface Service {
    id: string;
    title: string;
    Icon: React.ComponentType<any>;
    description: string;
    tags: string[];
    image?: string; // Optional image property
}

const servicesData: Service[] = [
    {
        id: 'video',
        title: 'Video production & <br/> Content creation',
        Icon: VideoLibraryIcon,
        description: `Our expertise of video production and creativity varies from ranges such as commercial ads to full-length youtube videos, shorts and reels and many more customized content. We create content with a strategic approach helpful for generating your sales & boosts your brand awareness. Our production facility extends from scripting to finalization of the video projects, so you could enjoy the fruition of your vision.`,
        tags: ['4K', 'Cinematic', 'Broadcast'],
        image: 'https://ik.imagekit.io/Shubham2285/Picsart_25-07-05_00-22-47-476.png?updatedAt=1751655611828',
    },
    {
        id: 'social',
        title: 'Social Media Management',
        Icon: ShareIcon,
        description: `Inkwell is the best manager for your social media platforms when it comes to keeping your digital platforms and communities engaged and active. We provide performance analytics and campaign optimization for Meta platforms such as Facebook, Instagram, Whatsapp and other various platforms like Youtube, Twitter, Linkedin etc.Take an approach, and witness the organic  growth of your followers and platform reach through us.
`,
        tags: ['Engagement', 'Analytics', 'Growth'],
        image: 'https://ik.imagekit.io/Shubham2285/Picsart_25-07-05_00-26-03-305.png?updatedAt=1751655507514',
    },
    {
        id: 'marketing',
        title: 'Influencer Marketing',
        Icon: InsertDriveFileIcon,
        description: `leverage your work potential with help of Inkwell in establishing contracts with exclusive influencers : to set up the brand partnership, community engagement and media content publishing. Let Inkwell be the bridge to connect you with the best suited influencers. Whether its social media influencers, bloggers, vloggers, lifestyle persona or food enthusiast- we know who and how to connect you with the influencer who represents you the best.`,
        tags: ['Storytelling', 'Videography', 'Cinematic'],
        image: 'https://ik.imagekit.io/Shubham2285/Picsart_25-07-05_00-24-42-617.png?updatedAt=1751655507407',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const HomeServices: React.FC = () => (
    <section
        className='py-8'
        style={{
            background:
                'linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)',
            position: 'relative',
        }}
    >
        <div className='container mx-auto px-4'>
            {/* Header */}
            <motion.div
                className='text-center mb-4'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div
                    style={{
                        padding: '1rem',
                        textAlign: 'center',
                    }}
                >
                    <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold font-[Oxanium] leading-tight'>
                        The{' '}
                        <span
                            style={{ fontSize: '1.4em' }}
                            className='text-3xl sm:text-4xl md:text-5xl font-bold'
                        >
                            Services
                        </span>{' '}
                        we provide
                    </h2>
                </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {servicesData.map((svc) => (
                    <motion.div
                        key={svc.id}
                        className='service-card flex'
                        variants={itemVariants}
                    >
                        <ServiceCard service={svc} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

function ServiceCard({ service }: { service: Service }) {
    return (
        <div
            className='group mx-auto w-full'
            style={{
                perspective: '1000px',
                width: '100%',
                maxWidth: '350px',
                height: '500px', // Fixed height for the card
            }}
        >
            <div
                className='relative w-full h-full transition-transform duration-500'
                style={{
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d', // iOS Safari support
                }}
            >
                {/* Front of the card */}
                <div
                    className='absolute inset-0 border-2 border-white rounded-2xl flex flex-col items-center p-6 bg-white/20'
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        backgroundImage: `url(${service.image})`, // Set image as background
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start', // Align content to the top
                        transform: 'translateZ(0)', // Force hardware acceleration on iOS
                        WebkitTransform: 'translateZ(0)', // iOS Safari support
                    }}
                >
                    {/* Semi-transparent overlay for text readability */}
                    <div className='absolute inset-0 bg-black/40 rounded-2xl'></div>{' '}
                    {/* Lighter overlay to show more of the background image */}
                    <div className='relative z-10 flex flex-col items-center w-full'>
                        {' '}
                        {/* Content wrapper */}
                        {/* Title at the very top */}
                        <div className='px-4 py-2 rounded-lg mb-4'>
                            <h3
                                style={{
                                    fontFamily: 'Electrolize',
                                    fontWeight: '900',
                                    color: '#ffffff',
                                    textTransform: 'none',
                                    letterSpacing: '0.5px',
                                    transform: 'none',
                                    filter: 'none',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                }}
                                className='text-2xl font-black text-white text-center'
                            >
                                {service.id === 'video' ? (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: service.title,
                                        }}
                                    />
                                ) : (
                                    service.title
                                )}
                            </h3>
                        </div>
                        {/* Removed the icon from the front */}
                    </div>
                </div>

                {/* Back of the card */}
                <div
                    className='absolute inset-0 flex flex-col bg-white/5 backdrop-blur-lg p-4 border-2 border-white rounded-2xl'
                    style={{
                        transform: 'rotateY(180deg) translateZ(0)', // Add translateZ for iOS
                        WebkitTransform: 'rotateY(180deg) translateZ(0)', // iOS Safari support
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden', // Ensure webkit prefix
                        background:
                            'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                        border: '1px solid #FF6A3D',
                    }}
                >
                    {/* Header section */}
                    <div className='flex-shrink-0 mb-3'>
                        <h3
                            style={{ fontFamily: 'Electrolize' }}
                            className='text-xl font-semibold text-white text-center leading-tight'
                        >
                            {service.id === 'video' ? (
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: service.title,
                                    }}
                                />
                            ) : (
                                service.title
                            )}
                        </h3>
                    </div>

                    {/* Description section - flexible */}
                    <div className='flex-grow overflow-hidden mb-4'>
                        <p
                            style={{
                                fontFamily: 'Electrolize',
                                fontSize: '0.9rem',
                                lineHeight: '1.4',
                            }}
                            className='text-white/80 text-center h-full overflow-y-auto'
                        >
                            {service.description}
                        </p>
                    </div>

                    {/* Tags section */}
                    <div className='flex-shrink-0 flex flex-wrap justify-center gap-1 mb-4'>
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className='text-xs bg-[#FF6A3D]/20 text-white px-2 py-1 rounded-full'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* "Know More" Button - fixed at bottom */}
                    <div className='flex-shrink-0 flex justify-center'>
                        <motion.div whileHover={{ x: 5 }}>
                            <Link href='/services' passHref>
                                <Button
                                    component='a'
                                    variant='outlined'
                                    size='small'
                                    sx={{
                                        borderColor: '#FF6A3D',
                                        color: '#FF6A3D',
                                        py: 0.5,
                                        px: 3,
                                        fontSize: '0.875rem',
                                        borderRadius: '9999px',
                                        ':hover': {
                                            background: '#FF6A3D',
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    Know More
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Hover-triggered rotation */}
            <style jsx>{`
                .group:hover > div {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}

export default HomeServices;
