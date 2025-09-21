"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    id: 1,
    name: "Shrikant Rathod",
    role: "Managing Director, PropZone",
    logo: "https://ik.imagekit.io/Shubham2285/IMG_3253.png?updatedAt=1751020440377", // Added logo for each testimonial
    title: "Trusted partner for a reason",
    feedback:
      "It's been over a year that we've been working with Inkwell, and I've noticed that not only the quality of their services never deteriorated, but they always improved each and every project! They never delayed, or disoriented their services, and the videos I received from each project always came with a personalised touch aligning with our organization, reasons why I trust and honour our partnership and I wish we keep it this way for a long time.",
  },
  {
    id: 2,
    name: "Vijay Rajput",
    role: "Managing Director, PlotVista",
    logo: "https://ik.imagekit.io/Shubham2285/IMG_3256.png?updatedAt=1751020435824", // Added logo
    title: "A company which is reliable and resourceful",
    feedback:
      "It was our first time approaching and working with a media production company, but now I can proudly say that relying on this company was assuring, and their products benefited us even more than we expected. We weren't sure about what and how we should set our approach, but with Inkwell's help, we received a pitch of high sales. I am honestly grateful to the entire Inkwell crew.",
  },
  {
    id: 3,
    name: "Pradeep Jarange",
    role: "MD-Mj Reality",
    logo: "https://ik.imagekit.io/Shubham2285/IMG_3259.png?updatedAt=1751020439865", // Added logo
    title: "Punctual on schedule and delivery",
    feedback:
      "We were actually planning towards creating the content by ourselves. We went ahead and tried a little, even produced something but the quality of our own videos weren't up to the market standards. That's when we decided to hire Inkwell Media as our media production company. And the differences were very clear—letting the media experts do their own thing feels just akin to a jeweller crafting his art with precision. Now whenever we have to do something regarding creating videos, our first choice lies on Inkwell, because we are confident that everyone has their own expertise.",
  },
  {
    id: 4,
    name: "Buvnesh Jagdale",
    role: "Managing Director, Venkatesha",
    logo: "https://ik.imagekit.io/Shubham2285/IMG_3576.png?updatedAt=1751560358148", // Added logo
    title: "A good guide with extensive research, even for beginners",
    feedback:
      "When we started approaching the production team to create videos for our properties, we weren't aware of what we should go for and what things we should advertise. But Inkwell not only recommended and advised on the particular matter, but even followed throughout the situation and compiled a research of their own that would promote our work in the best ways. The property walkthrough video they made for our Project Spring acted as a convincing attraction point for our customers. I wish the best for Inkwell just as they have done for us.",
  },
  {
    id: 5,
    name: "Chandrakant Mane",
    role: "Managing Director, Matrubhumi Developer",
    logo: "https://ik.imagekit.io/Shubham2285/IMG_3255.png?updatedAt=1751020439619", // Added logo
    title:
      "A high caliber company who knows how to function even on a large scale, and delivers satisfaction beyond expectations",
    feedback:
      "I had a wish to do something extraordinary for my organization. So I contacted Shubham and discussed what I wanted. He immediately scheduled a plan and discussed it with me—then he arranged some contacts, assembled his crew and pitched some well-renowned actors and actresses, and finalized and delivered the project which I had considered to be hard even before the deadline. Looking back, how they managed to do that in a shorter timeframe was truly astonishing. Overall all the investment that went into this was totally worth it, because it turned out to be the best marketing I had ever done for my organization.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const length = testimonials.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % length);
    setExpanded(false);
  };
  const prev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
    setExpanded(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
      setExpanded(false);
    }, 7000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <section className="py-20" style={{ background: "linear-gradient(316deg, rgba(194, 0, 0, 1) 0%, rgba(143, 0, 0, 1) 10%, rgba(116, 0, 0, 1) 20%, rgba(68, 0, 0, 1) 30%, rgba(5, 0, 0, 1) 64%)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-[Oxanium]">
          What Our Clients Say
        </h2>
        <p className="text-center text-white/80 text-lg md:text-xl font-[Titillium Web] mb-12 max-w-4xl mx-auto px-4">
          Genuine feedback from our recent partners across industries who have
          experienced our work first-hand. Not just a review, but their valued
          testimony.
        </p>

        {/* Flex wrapper for card + buttons */}
        <div className="flex justify-center items-center relative">
          <button
            onClick={prev}
            className="bg-white/20 hover:bg-white/40 p-2 rounded-full border border-white backdrop-blur-md z-10 mr-2"
          >
            <ArrowLeftIcon className="text-white" size={20} />
          </button>

          <div className="w-full max-w-4xl">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (t, i) =>
                  i === index && (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-6 md:p-10 flex flex-col items-start gap-4 relative overflow-hidden"
                    >
                      {/* Black Blending Shade Overlay */}
                      <div
                        className="absolute inset-x-0 top-0 h-48 rounded-t-3xl z-0"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 85%, transparent 100%)',
                        }}
                      ></div>

                      {/* Content (Quote icon, Client Info, and Logo) - positioned above the shade */}
                      <div className="flex justify-between items-start w-full relative z-10">
                        {/* Left side: Quote Icon and Client Info */}
                        <div className="flex flex-col items-start">
                            <FormatQuoteIcon className="text-white text-4xl mb-2" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                                    {t.name}
                                </h3>
                                <p className="text-md text-white/70">{t.role}</p>
                            </div>
                        </div>

                        {/* Right side: Logo - Increased size to w-36 h-36 */}
                        {t.logo && (
                            <div className="w-36 h-36 flex-shrink-0">
                                <img
                                    src={t.logo}
                                    alt={`${t.name}'s company logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                      </div>

                      {/* Remaining content - also needs to be above the overlay */}
                      <h4 className="text-lg md:text-xl font-bold text-white mt-2 relative z-10" style={{ fontStyle: 'italic', fontFamily: "'Nunito', sans-serif" }}>
                        {t.title}
                      </h4>
                      <p className="text-base md:text-lg leading-relaxed text-white/80 relative z-10" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        {expanded || typeof window === 'undefined' || window.innerWidth > 768
                          ? t.feedback
                          : t.feedback.slice(0, 200) + "..."}
                      </p>
                      {/* Read more/less button for mobile */}
                      {typeof window !== 'undefined' && window.innerWidth <= 768 && (
                        <button
                          className="text-white text-sm underline mt-2 relative z-10"
                          onClick={() => setExpanded(!expanded)}
                        >
                          {expanded ? "Read less" : "Read more"}
                        </button>
                      )}

                      {/* Pagination dots */}
                      <div className="flex mt-6 space-x-2 relative z-10">
                        {testimonials.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => setIndex(dotIdx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              dotIdx === index ? "bg-white" : "bg-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="bg-white/20 hover:bg-white/40 p-2 rounded-full border border-white backdrop-blur-md z-10 ml-2"
          >
            <ArrowRight className="text-white" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}