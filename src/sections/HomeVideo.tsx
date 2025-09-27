// import { Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import BrandNames from './BrandNames';

const HomeVideo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Add Wistia Player API script for postMessage mute control
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mute the Wistia video when the section is not visible
    useEffect(() => {
        // Always keep the video muted, do not unmute on visibility
        const handleMute = () => {
            const iframe = document.getElementById(
                'wistia_iframe'
            ) as HTMLIFrameElement;
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(
                    JSON.stringify({
                        method: 'setMuted',
                        value: true,
                    }),
                    '*'
                );
            }
        };
        // Mute on mount only
        handleMute();
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                minHeight: isMobile ? '60vh' : '120vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: isMobile ? '2.5rem' : '4rem',
                paddingBottom: isMobile ? '2rem' : '4rem',
                background:
                    'linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)',
            }}
        >
            <h2
                style={{
                    fontFamily: 'Oxanium, sans-serif',
                    color: '#fff',
                    fontSize: '3rem',
                    fontWeight: 500,
                }}
            >
                <span
                    style={{
                        fontSize: '4.2rem',
                        fontWeight: 700,
                    }}
                >
                    Showreel
                </span>{' '}
            </h2>

            <div
                style={{
                    width: isMobile ? '95vw' : '80vw',
                    maxWidth: isMobile ? '85vw' : '1400px',
                    transition: 'all 0.3s ease',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        paddingTop: '52.71%',
                    }}
                >
                    <iframe
                        id='wistia_iframe'
                        src='https://fast.wistia.net/embed/iframe/8a2rka6o3m?autoplay=1&muted=1&controls=volume&playButton=false'
                        frameBorder='0'
                        allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media'
                        loading='lazy'
                        title='Wistia Video Showreel'
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '8px',
                        }}
                    />
                </div>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
                <BrandNames />
            </div>
        </div>
    );
};

export default HomeVideo;
