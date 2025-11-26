import type { Metadata } from 'next';
import './globals.css';
// import ContextProviders from './providers';
import Head from 'next/head';

export const metadata: Metadata = {
    metadataBase: new URL('https://inkwellmedia.agency'),
    title: 'Inkwellmedia Agency',
    description:
        'Inkwellmedia Agency - Your trusted partner in media solutions.',
    keywords: [
        'Ad Making Agency',
        'Media Solutions',
        'Advertising',
        'Marketing',
        'Creative Agency',
        'Ad making agency in mumbai',
        'Advertising agency in mumbai',
        'Media solutions in mumbai',
        'Social media management in mumbai',
        'Digital marketing in mumbai',
        'Creative agency in mumbai',
        'Ad making agency in india',
        'Advertising agency in india',
        'Media solutions in india',
        'Social media management in india',
        'Digital marketing in india',
        'Creative agency in india',
        'social media management',
        'digital marketing',
        'creative agency',
        'ad making',
        'advertising agency',
        'media solutions',
        'mumbai',
        'india',
        'Pune',
    ],
    authors: [{ name: 'Inkwellmedia Agency' }],
    openGraph: {
        title: 'Inkwellmedia Agency - Ad Making Experts',
        description:
            'Inkwellmedia Agency - Your trusted partner in media solutions and ad making.',
        url: 'https://inkwellmedia.agency/',
        siteName: 'Inkwellmedia Agency',
        images: {
            url: 'https://inkwellmedia.agency/logo.jpg',
            width: 1200,
            height: 630,
            alt: 'Inkwellmedia Agency Logo',
            type: 'image/jpeg',
        },
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Inkwellmedia Agency - Ad Making Experts',
        description:
            'Inkwellmedia Agency - Your trusted partner in media solutions and ad making.',
        images: ['/logo.jpg'],
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59JZ9WRG');
        `,
                    }}
                />
                {/* Meta Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1034844105517983');
fbq('track', 'PageView');`,
                    }}
                />
            </Head>
            {/* Meta Pixel NoScript */}

            <html
                lang='en'
                suppressHydrationWarning={true}
                data-lt-installed='true'
            >
                <head>
                    <link rel='icon' href='/favicon.ico' />
                    <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='anonymous'
                    />
                    {/* Google Fonts: All used fonts and weights */}
                    <link
                        href='https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono:wght@400;700&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Kumar+One+Outline&family=Bebas+Neue&family=Oswald:wght@400;700&family=Oxanium:wght@400;700&family=Electrolize:wght@400;700&family=Nunito:wght@300;400;600;700;900&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Electrolize&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600;700&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;1,400;1,600&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Armata&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap'
                        rel='stylesheet'
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KWKB3XH8');`,
                        }}
                    />
                    <noscript>
                        <img
                            height='1'
                            width='1'
                            style={{ display: 'none' }}
                            src='https://www.facebook.com/tr?id=1034844105517983&ev=PageView&noscript=1'
                        />
                    </noscript>
                </head>
                <body
                    style={{
                        background:
                            'linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)', // Light red gradient
                        minHeight: '100vh',
                        color: '#fff',
                        fontFamily: 'Electrolize, sans-serif',
                    }}
                >
                    {/* Google Tag Manager (noscript) */}
                    <noscript>
                        <iframe
                            src='https://www.googletagmanager.com/ns.html?id=GTM-KWKB3XH8'
                            height='0'
                            width='0'
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    {/* <ContextProviders> */}
                    {children}
                    {/* </ContextProviders> */}
                </body>
            </html>
        </>
    );
}
