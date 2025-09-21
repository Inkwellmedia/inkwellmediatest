import React from 'react';
import { Box, useTheme } from '@mui/material';

const brands = [
  'https://ik.imagekit.io/Shubham2285/IMG_3261.png?updatedAt=1751021054877',
  'https://ik.imagekit.io/Shubham2285/IMG_3260.png?updatedAt=1751020440486',
  'https://ik.imagekit.io/Shubham2285/IMG_3253.png?updatedAt=1751020440377',
  'https://ik.imagekit.io/Shubham2285/IMG_3259.png?updatedAt=1751020439865',
  'https://ik.imagekit.io/Shubham2285/IMG_3255.png?updatedAt=1751020439619',
  'https://ik.imagekit.io/Shubham2285/IMG_3254.png?updatedAt=1751020438828',
  'https://ik.imagekit.io/Shubham2285/IMG_3258.png?updatedAt=1751020437994',
  'https://ik.imagekit.io/Shubham2285/IMG_3256.png?updatedAt=1751020435824',
  "https://ik.imagekit.io/Shubham2285/IMG_3578.png?updatedAt=1751560355895",
  "https://ik.imagekit.io/Shubham2285/IMG_3575.png?updatedAt=1751560356749",
  "https://ik.imagekit.io/Shubham2285/IMG_3577.png?updatedAt=1751560358137",
  "https://ik.imagekit.io/Shubham2285/IMG_3576.png?updatedAt=1751560358148"
];

const BrandNames: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        width: '100vw',
        padding: 0,
        boxSizing: 'border-box',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 'calc(100vw - 8px)',
          mx: 'auto',
          overflow: 'hidden',
          py: 1.5,
          pb: 0,
          border: '2px solid #fff',
          borderRadius: '40px',
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.15)',
          boxSizing: 'border-box',
          height: { xs: '70px', sm: '90px', md: '110px' },
          background: 'rgba(10, 0, 0, 0.45)',
          position: 'relative',
        }}
      >
        <Box
          className="marquee"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            animation: 'marquee 18s linear infinite',
          }}
        >
          {[...brands, ...brands].map((src, idx) => (
            <Box
              key={`${src}-${idx}`}
              sx={{
                flex: '0 0 auto',
                width: { xs: '120px', sm: '160px', md: '200px' },
                mx: { xs: 3, sm: 4, md: 6 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`Brand logo ${idx + 1}`}
                sx={{
                  maxHeight: { xs: 40, sm: 60, md: 80 },
                  objectFit: 'contain',
                  filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none',
                }}
              />
            </Box>
          ))}
        </Box>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              will-change: transform;
            }
          `}
        </style>
      </Box>
    </div>
  );
};

export default BrandNames;
