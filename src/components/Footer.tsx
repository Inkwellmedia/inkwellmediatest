'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import logo from '../../public/inkwell-logo.png';
import Image from 'next/image';
// import {
//     Facebook,
//     Twitter,
//     LinkedIn,
//     Email,
//     Phone
// } from '@mui/icons-material'
// import { Variants } from 'framer-motion'

// const sectionVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i = 1) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: 0.2 * i, duration: 0.6 },
//     }),
// }


const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1ByoST3Vwp/?mibextid=wwXIfr',
        icon: 'https://ik.imagekit.io/Shubham2285/IMG_3602.png?updatedAt=1751639838318',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/inkwellmediaa?igsh=MW1ldG1kY3oxOWQ0Ng%3D%3D&utm_source=qr',
        icon: 'https://ik.imagekit.io/Shubham2285/IMG_3603.png?updatedAt=1751639838925',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/inkwell_media/',
        icon: 'https://ik.imagekit.io/Shubham2285/IMG_3601.png?updatedAt=1751639838137',
    },
];

interface FooterProps {
    gradient?: string;
}

export default function Footer({ gradient }: FooterProps) {
    return (
        <Box
            component='footer'
            sx={{
                color: 'common.white',
                pt: 6,
                pb: 3,
                background:
                    gradient ||
                    'linear-gradient(275deg, rgba(0, 0, 0, 1) 0%, rgba(54, 54, 54, 1) 50%, rgba(0, 0, 0, 1) 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'center' },
                        justifyContent: { xs: 'center', md: 'space-between' },
                        mb: 2,
                        gap: 2,
                    }}
                >
                    {/* Logo */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            mb: { xs: 2, md: 0 },
                        }}
                    >
                        <Image
                            src={logo}
                            alt='Inkwell Media Logo'
                            width={120}
                            height={50}
                            priority
                        />
                        <Typography
                            variant='subtitle2'
                            sx={{
                                fontStyle: 'italic',
                                color: 'white',
                                fontSize: '1.1rem',
                                mt: 1,
                                fontFamily: 'Nunito, sans-serif',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            {'Where imagination transforms into visuals'}
                        </Typography>
                    </Box>
                    {/* Social Icons - mobile (centered below logo/text) */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2,
                            mt: 0.5,
                        }}
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Box
                                    component='img'
                                    src={link.icon}
                                    alt={link.name}
                                    sx={{
                                        height: 28,
                                        width: 28,
                                        transition: 'transform 0.2s',
                                        '&:hover': { transform: 'scale(1.15)' },
                                    }}
                                />
                            </a>
                        ))}
                    </Box>
                    {/* Social Icons - desktop (bottom right corner) */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: { xs: 16, md: 24 },
                            right: { xs: 16, md: 32 },
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Box
                                    component='img'
                                    src={link.icon}
                                    alt={link.name}
                                    sx={{
                                        height: 28,
                                        width: 28,
                                        transition: 'transform 0.2s',
                                        '&:hover': { transform: 'scale(1.15)' },
                                    }}
                                />
                            </a>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography
                        variant='body2'
                        sx={{ opacity: 0.8, fontFamily: 'Nunito, sans-serif' }}
                    >
                        © {new Date().getFullYear()} InkwellMedia. All rights
                        reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
