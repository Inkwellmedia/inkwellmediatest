import React from 'react';

const letter = `This is my testimony: not as a businessman or as the founder of Inkwell; but from an Artist- a Learner who started by himself- and a Youngster,  who had a dream.

    Before starting inkwell, I used to work in a company for their creative department. Despite being involved in a field such as the creative department, I sensed something was missing- it was a free space which develops a trendful mindset. It was just a half-baked notion, which almost seemed akin to a plan without execution. As an explorer who wanted to learn more and work innovatively, I knew I had to get out of there- so I got out. I had nothing, no savings, nothing to rely on- but simultaneously I had something: it was willpower and some friends to rely on.

I was mentally prepared to start from the scratch and initially I did work with no profit. But my main motive was set. I only focused on improving and learning. With such a set of directives, eventually people started acknowledging my production assets, approached and got even more than what they had desired. The rest is evidently presented before you if you check on the projects I have worked on.

Regarding Inkwell and my crew, when I started building this company, I wasn't limiting my thinking to just having a crew and getting my work done, because what I had envisioned was to create a playful place, like a playground where people would have an open interaction, where they are driven by goal- and most importantly where they get to do what they enjoy doing. Now I can proudly  exclaim that I have everything I ever wanted.

        Just as I have got everything, I wish to help others achieve their dreams through our work.  It's no longer just 'I', but 'us'.  And it shouldn't just stop there, but it must include others as well as you too- the person who is reading it. So together, I hope we can realize our vision- not just as a collaboration, but as a relation.`;

const paragraphs = letter.split('\n').filter(Boolean);

const FounderLetter: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center min-h-[50vh] py-8 px-1">
      <div className="relative rounded-[3rem] shadow-2xl max-w-7xl w-full mx-auto p-8 md:p-12 border-[6px] border-black/60 backdrop-blur-md" style={{boxShadow: '0 8px 40px #0008'}}>
        <div className="text-white text-base md:text-lg font-light leading-relaxed tracking-wide" style={{fontFamily: 'Lato, Arial, sans-serif'}}>
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'mb-6 indent-0' : 'mb-6 indent-8'}>
              {i === 0 ? (
                <span className="float-left text-4xl md:text-5xl font-bold text-white mr-2" style={{fontFamily: 'Georgia, serif', lineHeight: 1}}>
                  {p.trim().charAt(0)}
                </span>
              ) : null}
              {i === 0 ? p.trim().slice(1) : p.trim()}
            </p>
          ))}
        </div>
        {/* Navigation dots */}
        <div className="absolute top-8 right-8 flex flex-col gap-5">
          <span className="w-6 h-6 rounded-full border-2 border-white bg-black" />
          <span className="w-6 h-6 rounded-full border-2 border-white bg-transparent" />
          <span className="w-6 h-6 rounded-full border-2 border-white bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default FounderLetter; 