'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/inkwell-logo.png';

interface Props {
    window?: () => Window;
}

function HideOnScroll(props: Props & { children: React.ReactElement }) {
    return <>{props.children}</>;
}

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/why-us' },
];

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const drawer = (
        <Box
            className='w-full h-full p-0 flex flex-col'
            sx={{
                background: 'rgba(5, 0, 0, 0.6)',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)',
                color: 'white',
                fontFamily: 'Electrolize, sans-serif',
                padding: '20px',
            }}
        >
            <Box className='mb-6'>
                <Link href='/'>
                    <Image src={logo} alt='Logo' width={100} height={30} />
                </Link>
            </Box>
            <Divider />
            <List className='flex-grow'>
                {navItems.map((item) => (
                    <ListItem disablePadding key={item.label}>
                        <ListItemButton
                            component={Link}
                            href={item.href}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText
                                primary={item.label}
                                className='font-medium'
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box className='mt-auto'>
                <Button
                    component={Link}
                    href='/contact-us'
                    variant='text'
                    fullWidth
                    className='bg-accent hover:bg-accent-dark text-white rounded-full py-2 w-[200px]'
                >
                    <motion.a
                        href='/contact-us'
                        className='inline-block bg-gradient-to-r from-[#9F1D1D] to-[#3F002D] text-white rounded-full px-10 p-1 text-xs font-bold shadow-xl w-[200px]'
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '0px 0px 20px rgba(255,106,61,0.7)',
                        }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        Contact →
                    </motion.a>
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar
                    elevation={0}
                    className='backdrop-blur-md bg-white/10 text-white'
                    sx={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: '20px',
                        maxWidth: '90%',
                        margin: '10px auto',
                        left: 0,
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Electrolize, sans-serif',
                    }}
                >
                    <Toolbar className='container mx-auto flex justify-between items-center md:px-0'>
                        {/* Mobile Menu Button & Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                color='inherit'
                                aria-label='open drawer'
                                edge='start'
                                onClick={handleDrawerToggle}
                                className='md:hidden'
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* Logo */}
                            <div className='flex items-center justify-center h-full'>
                                <Link
                                    href='/'
                                    className='flex items-center justify-center'
                                >
                                    <IconButton
                                        edge='start'
                                        disableRipple
                                        aria-label='Inkwell Media'
                                        className='p-0'
                                    >
                                        <Image
                                            src={logo}
                                            alt='Inkwell Media Logo'
                                            width={120}
                                            height={50}
                                            priority
                                        />
                                    </IconButton>
                                </Link>
                            </div>
                        </Box>

                        {/* Desktop Navigation + Contact Button */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                type: 'spring',
                                stiffness: 120,
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <motion.nav
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className='hidden md:flex items-center space-x-8'
                            >
                                {navItems.map((item, idx) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: idx * 0.12,
                                            duration: 0.4,
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Link href={item.href}>
                                            <span className='cursor-pointer font-medium transition-colors hover:text-accent hover:border-2 hover:border-accent p-2 rounded text-sm'>
                                                {item.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>

                            <Button
                                component={Link}
                                href='/contact-us'
                                variant='text'
                                color='secondary'
                                className='bg-accent hover:bg-accent-dark text-white rounded-full px-6 py-2 shadow-lg'
                                disableElevation
                            >
                                <motion.a
                                    href='/contact-us'
                                    className='inline-block bg-gradient-to-r from-[#9F1D1D] to-[#3F002D] text-white rounded-full px-4 md:px-10 py-3 text-[10px] md:text-sm font-bold shadow-xl'
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow:
                                            '0px 0px 20px rgba(255,106,61,0.7)',
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 200,
                                    }}
                                >
                                    Contact Us
                                </motion.a>
                            </Button>
                        </motion.div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            <Drawer
                anchor='left'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        color: 'white',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
