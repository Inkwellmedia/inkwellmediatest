// components/ServicesFullContent.tsx
import React from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShareIcon from '@mui/icons-material/Share';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface ServiceItem {
    title: string;
    description: string;
    features: string[];
    tags: string[];
    Icon: React.ComponentType<any>;
}

const services: ServiceItem[] = [
    {
        title: 'Video production & Content creation',
        description: `Visuals, sounds, entertainment, and relativity—these factors could be said as four main pillars when it comes to captivating audiences' attention. While media is made to feed information, having versatile media formats plays a huge role in the formulation of a brand persona. To enhance your brand, we provide diverse media assets in themes suitable for fulfilling professional, entertainment, and infotainment needs. In content creation, we proceed thoroughly from brainstorming to planning, scripting, identifying, and utilizing conditions. These can be recreated into scenarios that will definitely help you fulfill your business needs by engaging the right audience and building a desirable brand identity.`,
        features: [
            'Presenting the right and best suited talents',
            'Utilization of best the gear and gadgets based on requirement',
            'Motion Graphics & Color Grading',
        ],
        tags: ['Storytelling', 'Videography', 'SocialContent'],
        Icon: InsertDriveFileIcon,
    },
    {
        title: 'Social Media Management',
        description: `In the wake of globalization, connectivity and engagement goes beyond the scope of community growth—it extends in the form of brand loyalty which directly impacts brand value and conversion. Understanding the gravity of social media management, Inkwell implements social media optimization on various social platforms such as Facebook, Instagram, WhatsApp, YouTube, Twitter, and LinkedIn. We provide services of platform optimization, community engagement, strategic formulation, campaign scheduling and management, and result calibration and analytics. Your social media platforms define your image, so let Inkwell decorate them securely.`,
        features: [
            'Data-Driven Content scheduling',
            'Real-Time Community Engagement',
            'A/B Testing & Performance Reports',
            'Effective metrics and KPI readings',
        ],
        tags: ['Engagement', 'Analytics', 'Growth'],
        Icon: ShareIcon,
    },
    {
        title: 'Influencer marketing',
        description: `Just take a look around you—you'll notice how in this current generation, influencers deal a huge impact over their audience with their specific endorsement; because that places a sense of authenticity of the product or service to the audience and it conveys a message. But of course it's not that easy to find an influencer who matches the identity of your brand, right? Especially when they have to fulfill certain criteria such as: i) engagement—not just limited to their followers but the entirety of the mass audience; ii) who knows how to stay up to date with ongoing trends; iii) manages collaborations suiting the market needs; while iv) planning and executing campaigns with your company. We understand it very well, so to ease your complications, Inkwell provides services such as contract management in sectors of partnership/ambassadorship, where we look forward to providing organizations with our selection of finest social media influencers. Whether it's endorsement or collaborations, or promotion over social platforms, we've got contacts in the influencer industries from the range of nano influencers even to the stage of mega influencer. We make it our own responsibility to arrange the best influencer for your work, just so we can witness your successful growth alongside us.`,
        features: [
            'Market valued and highly influential individuals',
            'Effective time flexible schedulings',
            'Result oriented cordial and trusted creators',
        ],
        tags: ['Strategy', 'Roadmap', 'Workshops'],
        Icon: SupportAgentIcon,
    },
];

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
    }),
};

const ServicesFullContent: React.FC = () => {
    return (
        <section
            id="services-list"
            className="py-24"
            style={{
                background: 'linear-gradient(141deg, rgba(84, 1, 1, 1) 0%, rgba(247, 0, 58, 1) 17%, rgba(235, 45, 210, 1) 47%, rgba(183, 63, 235, 1) 63%, rgba(131, 26, 161, 1) 81%, rgba(56, 14, 69, 1) 100%)',
            }}
        >
            <div className="container mx-auto px-4 space-y-20">
                {/* You might want to add your main section title here, as shown in the screenshot */}
                {/* Example: */}
                {/* <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-white mb-4">Every Service Has its own Impact</h2>
                    <h3 className="text-3xl font-semibold text-white mb-8">And we deliver it with excellence.</h3>
                    <p className="text-white/80 max-w-3xl mx-auto">
                        Have you noticed the modern market? Our current generation is nothing less than a competition, where being outstanding becomes the primary objective- because this is what drives people to connect with you, right? This is exactly why you should let Inkwell be the narrator of your brand's story- because our speciality lies in adapting to the ever-evolving media landscape; while combining speed, creativity,and precision to deliver content that resonates with your audience is our Modus Operandi.
                    </p>
                </div> */}


                {services.map((svc, idx) => {
                    const IconComponent = svc.Icon;
                    const isReversed = idx % 2 === 1;

                    return (
                        <motion.div
                            key={svc.title}
                            className="relative"
                            custom={idx}
                            variants={sectionVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div
                                className={`relative flex flex-col lg:flex-row items-stretch rounded-2xl shadow-2xl overflow-hidden ${isReversed ? 'lg:flex-row-reverse' : ''} transition-transform duration-300 hover:-translate-y-3`}
                                style={{ minHeight: 320 }}
                            >
                                {/* Image as background with overlay */}
                                <div
                                    className="absolute inset-0 w-full h-full z-1"
                                    style={{
                                        background: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.0) 100%), url(${
                                            svc.title === 'Video production & Content creation'
                                                ? 'https://ik.imagekit.io/Shubham2285/video%20production.jpeg?updatedAt=1751294739655'
                                                : svc.title === 'Social Media Management'
                                                    ? 'https://ik.imagekit.io/Shubham2285/social%20media%20management.png?updatedAt=1751294754036'
                                                    : svc.title === 'Influencer marketing'
                                                        ? 'https://ik.imagekit.io/Shubham2285/influencer%20marketing.png?updatedAt=1751294753794'
                                                        : ''
                                        })`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                                {/* Content overlay */}
                                <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 w-full lg:w-3/4" style={{ background: 'transparent' }}>
                                    <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>
                                        {svc.title}
                                    </h3>
                                    <p className="text-white/80 mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>{svc.description}</p>
                                    <div className="flex items-start justify-between mb-6">
                                        <ul className="space-y-3 flex-1">
                                            {svc.features.map((f) => (
                                                <li
                                                    key={f}
                                                    className="flex items-center gap-3 text-white/90"
                                                    style={{ fontFamily: 'Nunito, sans-serif' }}
                                                >
                                                    <CheckCircleIcon className="text-[#FF6A3D]" />{' '}
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <IconComponent className="text-[#FF6A3D] text-7xl opacity-90 hidden lg:block ml-8" />
                                    </div>
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {svc.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-sm bg-[#FF6A3D]/20 text-white px-4 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            component={Link}
                                            href="/contact-us"
                                            variant="contained"
                                            sx={{
                                                background:
                                                    'linear-gradient(135deg, #FF6A3D 0%, #4E1C50 100%)',
                                                color: 'fff',
                                                py: 1.5,
                                                px: 5,
                                                borderRadius: '9999px',
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
                                            }}
                                        >
                                            Contact Now
                                        </Button>
                                    </motion.div> */}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesFullContent;