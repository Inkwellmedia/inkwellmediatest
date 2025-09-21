// components/ContactForm.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import OfficeIcon from '@mui/icons-material/Business';
// import PhoneIcon from '@mui/icons-material/Phone';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import EmailIcon from '@mui/icons-material/Email';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

const WEB3FORMS_API_KEY = '044af3e4-41db-430c-b97c-d9468f5fcd12';

// Helper to detect mobile device
const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [requirements, setRequirements] = useState('');
    const [focus, setFocus] = useState({ name: false, contact: false, requirements: false });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);
        const formData = new FormData();
        formData.append('access_key', WEB3FORMS_API_KEY);
        formData.append('name', name);
        formData.append('contact', contact);
        formData.append('requirements', requirements);
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                setSuccess(true);
                setName('');
                setContact('');
                setRequirements('');
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section 
            className="relative overflow-hidden py-20 min-h-screen"
            style={{
                background: 'linear-gradient(180deg, #181818 0px, #181818 60px, #000 100%)',
            }}
        >
            {/* Decorative animated dots */}
            <motion.div
                className="absolute top-10 left-5 w-3 h-3 bg-accent rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-12 right-10 w-4 h-4 bg-accent/50 rounded-full"
                animate={{ x: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Form */}
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Got any queries? Get in touch with us.</h2>
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div className="relative pt-4">
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onFocus={() => setFocus(f => ({ ...f, name: true }))}
                                    onBlur={() => setFocus(f => ({ ...f, name: false }))}
                                    className="w-full bg-transparent border-0 border-b-2 text-white text-base px-0 outline-none focus:ring-0 transition-all duration-200 peer"
                                    style={{ borderBottomColor: focus.name ? '#FF6A3D' : '#fff', borderBottomWidth: focus.name ? 3 : 2 }}
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 transition-all duration-200 pointer-events-none font-bold
                                        ${focus.name || name ? 'text-xs -top-2 text-accent' : 'text-lg top-4 text-white'}`}
                                    style={{ background: 'transparent' }}
                                >
                                    Your Name
                                </label>
                            </div>
                            {/* Contact Field */}
                            <div className="relative pt-4">
                                <input
                                    id="contact"
                                    type="text"
                                    value={contact}
                                    onChange={e => setContact(e.target.value)}
                                    onFocus={() => setFocus(f => ({ ...f, contact: true }))}
                                    onBlur={() => setFocus(f => ({ ...f, contact: false }))}
                                    className="w-full bg-transparent border-0 border-b-2 text-white text-base px-0 outline-none focus:ring-0 transition-all duration-200 peer"
                                    style={{ borderBottomColor: focus.contact ? '#FF6A3D' : '#fff', borderBottomWidth: focus.contact ? 3 : 2 }}
                                />
                                <label
                                    htmlFor="contact"
                                    className={`absolute left-0 transition-all duration-200 pointer-events-none font-bold
                                        ${focus.contact || contact ? 'text-xs -top-2 text-accent' : 'text-lg top-4 text-white'}`}
                                    style={{ background: 'transparent' }}
                                >
                                    Your Email or Phone number
                                </label>
                            </div>
                            {/* Requirements Field */}
                            <div className="relative pt-4">
                                <input
                                    id="requirements"
                                    type="text"
                                    value={requirements}
                                    onChange={e => setRequirements(e.target.value)}
                                    onFocus={() => setFocus(f => ({ ...f, requirements: true }))}
                                    onBlur={() => setFocus(f => ({ ...f, requirements: false }))}
                                    className="w-full bg-transparent border-0 border-b-2 text-white text-base px-0 outline-none focus:ring-0 transition-all duration-200 peer"
                                    style={{ borderBottomColor: focus.requirements ? '#FF6A3D' : '#fff', borderBottomWidth: focus.requirements ? 3 : 2 }}
                                />
                                <label
                                    htmlFor="requirements"
                                    className={`absolute left-0 transition-all duration-200 pointer-events-none font-bold
                                        ${focus.requirements || requirements ? 'text-xs -top-2 text-accent' : 'text-lg top-4 text-white'}`}
                                    style={{ background: 'transparent' }}
                                >
                                    Your requirements
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 w-full bg-gradient-to-r from-[#FF6A3D] to-[#4E1C50] text-white font-bold py-3 rounded shadow-lg transition-transform duration-200 hover:scale-105 disabled:opacity-60"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {success && (
                                <div className="mt-4 text-green-400 text-center font-semibold">
                                    We have received your message. We will contact you within 24 hours!
                                </div>
                            )}
                            {error && (
                                <div className="mt-4 text-red-400 text-center font-semibold">
                                    {error}
                                </div>
                            )}
                        </form>
                        {!success && (
                          <div className="mt-10 text-white text-center text-base md:text-lg font-medium">
                              <span className="block font-bold mb-2">Have a project in mind?</span>
                              Our team is ready to bring your vision to life. Fill out the form and we will get back to you within 24 hours!
                          </div>
                        )}
                    </div>

                    {/* Right: Info Cards */}
                    <div className="relative min-h-[420px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Office */}
                            <div className="bg-white/10 backdrop-blur-md p-6 text-white flex flex-col justify-center min-h-[110px] shadow-lg">
                                <span className="text-2xl font-bold">Office</span>
                                <span className="text-base font-medium mt-1">Navi Mumbai, Maharashtra</span>
                            </div>
                            {/* Phone */}
                            <div className="bg-white/10 backdrop-blur-md p-6 text-white flex flex-col justify-center min-h-[110px] shadow-lg">
                                <span className="text-2xl font-bold">Phone</span>
                                <a
                                  href={isMobile ? 'tel:+919082531628' : 'https://wa.me/919082531628'}
                                  target={isMobile ? undefined : '_blank'}
                                  rel={isMobile ? undefined : 'noopener noreferrer'}
                                  className="text-base font-medium mt-1 underline hover:text-accent transition-colors"
                                >
                                  +91 9082531628
                                </a>
                            </div>
                            {/* Email */}
                            <div className="bg-white/10 backdrop-blur-md p-6 text-white flex flex-col justify-center min-h-[110px] shadow-lg">
                                <span className="text-2xl font-bold">Email</span>
                                <a
                                  href="mailto:inkwellmedia.agency@gmail.com"
                                  className="text-base font-medium mt-1 underline hover:text-accent transition-colors"
                                >
                                  inkwellmedia.agency@gmail.com
                                </a>
                            </div>
                            {/* Availability */}
                            <div className="bg-white/10 backdrop-blur-md p-6 text-white flex flex-col justify-center min-h-[110px] shadow-lg">
                                <span className="text-2xl font-bold">Availability</span>
                                <span className="text-base font-medium mt-1">Mon-Sat / 9 to 8 everyday.<br/>(Holidays excluded)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .tag-shape {
                    clip-path: polygon(0 0, 90% 0, 100% 20%, 100% 100%, 0 100%, 0 0);
                }
                @media (max-width: 640px) {
                    .tag-shape {
                        transform: none !important;
                        position: static !important;
                        width: 100% !important;
                        left: 0 !important;
                        right: 0 !important;
                        top: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactForm;
