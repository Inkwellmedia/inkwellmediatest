import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { ContentDialogBox } from '@/components/dialog-box'


function IntroductaryVideo() {
    const [isVideoVisible, setIsVideoVisible] = React.useState(false)

    React.useEffect(() => {
      if (isVideoVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isVideoVisible]);

    return (
        <>
            <Button
                variant="contained"
                // color="primary"
                onClick={() => setIsVideoVisible(true)}
                className='animate-bounce hover:animate-ping'
                style={{
                    background:"black",
                    position: 'fixed',
                    top: '50%',
                    right: '20px',
                    zIndex: 1000,
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <img src="https://ik.imagekit.io/Shubham2285/_Pngtree_cartoon%20black%20play%20button%20element_5555037%20(1).png?updatedAt=1751558196917" alt="" />
            </Button>
            <ContentDialogBox
                isOpen={isVideoVisible}
                onClose={() => setIsVideoVisible(false)}
                isTransition={true}
                transitionDirection="down"
                maxWidth="sm"
                paperStyle={{
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                }}
                scroll="body"
                title={
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-center">Watch Our Introductory Video</h2>
                    </motion.div>
                }
                content={
                    isVideoVisible && (
                        <motion.div
                            initial={{ x: 120, opacity: 0, scale: 0.8 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 100 }}
                            className="w-full flex justify-center"
                        >
                            <div
                                className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-[280px] md:max-w-[320px]"
                                style={{ aspectRatio: '9 / 16', maxHeight: '80vh' }}
                            >
                                <div style={{ position: 'relative', width: '100%', paddingTop: '177.78%' }}>
                                    <iframe
                                        id="wistia_iframe_intro"
                                        src="https://fast.wistia.net/embed/iframe/e2cc1v59gm?autoplay=1&muted=1&controls=volume"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                        loading="lazy"
                                        title="Wistia Introductory Video"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '24px',
                                            border: 0
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            />
        </>
    )
}

export default IntroductaryVideo