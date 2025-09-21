import React from 'react';
// import { motion } from 'framer-motion';
import Clouds from './Clouds';

const SplashScreen: React.FC = () => {
    return (
        <div style={containerStyle}>
            <style>{`
                @media (max-width: 600px) {
                    .splash-iframe-container {
                        width: 350px !important;
                        height: 350px !important;
                        min-width: 0 !important;
                        min-height: 0 !important;
                    }
                    .splash-iframe-container iframe {
                        width: 350px !important;
                        height: 350px !important;
                        min-width: 0 !important;
                        min-height: 0 !important;
                        border-radius: 20px;
                    }
                }
            `}</style>
            <Clouds />
            {/*
            <motion.h1
                style={textStyle}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3.5, ease: 'easeInOut' }}
            >
                INKWELL MEDIA
            </motion.h1>
            */}
            <div
                className="splash-iframe-container"
                style={{
                    width: 'max(80%,780px)',
                    zIndex: 99999999
                }}
            >
                <iframe src="/animations/3d-camera/index.html" style={{
                    width: '100%',
                    minHeight: '80vh',
                    border: 'none',
                    borderRadius: '20px',
                }}></iframe>
            </div>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    background: 'linear-gradient(316deg, rgb(194, 0, 0) 0%, rgb(143, 0, 0) 10%, rgb(116, 0, 0) 20%, rgb(68, 0, 0) 30%, rgb(5, 0, 0) 64%)',
    width: '100vw',
    height: '100vh',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};

// const textStyle: React.CSSProperties = {
//     color: '#FFFFFF',
//     fontSize: '2rem',
//     fontWeight: 700,
//     willChange: 'transform, opacity',
// };

export default SplashScreen;
