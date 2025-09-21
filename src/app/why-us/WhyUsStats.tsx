import React, { useEffect, useState } from 'react';

interface WhyUsStatsProps {
  gradient: string;
}

// Custom hook for counting up
function useCountUp({ end, duration = 2, start = 0 }: { end: number; duration?: number; start?: number }) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [end, duration, start]);
  return count;
}

const stats = [
  {
    label: 'Clients partnered with',
    value: 40,
    unit: 'Brands',
    suffix: '+',
  },
  {
    label: 'Total videos Produced',
    value: 1140,
    unit: 'Videos',
    suffix: '+',
  },
  {
    label: 'Total views generated',
    value: 11866000,
    unit: 'Views',
    suffix: '+',
  },
];

const COUNTER_DURATION = 3.5; // seconds, all counters finish at the same time

const WhyUsStats: React.FC<WhyUsStatsProps> = ({ gradient }) => {
  // Use the counter for each stat (call hooks at top level)
  const count1 = useCountUp({ end: stats[0].value, duration: COUNTER_DURATION });
  const count2 = useCountUp({ end: stats[1].value, duration: COUNTER_DURATION });
  const count3 = useCountUp({ end: stats[2].value, duration: COUNTER_DURATION });

  return (
    <section
      className="w-full py-16 lg:py-28"
      style={{ background: gradient }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://ik.imagekit.io/Shubham2285/about%20us%20?updatedAt=1751644084106"
            alt="About Us"
            className="rounded-2xl shadow-2xl object-cover max-w-full h-[350px] lg:h-[500px]"
            style={{ maxWidth: '600px', width: '100%' }}
          />
        </div>
        {/* Right: Stats */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-12">
          <div className="text-center lg:text-left">
            <div className="text-white/80 text-lg mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>{stats[0].label}</div>
            <div className="text-white font-bold text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              {count1.toLocaleString()}<span>{stats[0].suffix}</span> <span className="text-2xl md:text-3xl lg:text-4xl font-normal ml-1">{stats[0].unit}</span>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-white/80 text-lg mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>{stats[1].label}</div>
            <div className="text-white font-bold text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              {count2.toLocaleString()}<span>{stats[1].suffix}</span> <span className="text-2xl md:text-3xl lg:text-4xl font-normal ml-1">{stats[1].unit}</span>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-white/80 text-lg mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>{stats[2].label}</div>
            <div className="text-white font-bold text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              {count3.toLocaleString()}<span>{stats[2].suffix}</span> <span className="text-2xl md:text-3xl lg:text-4xl font-normal ml-1">{stats[2].unit}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsStats; 