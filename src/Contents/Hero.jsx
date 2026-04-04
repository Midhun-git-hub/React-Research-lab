import React, { useEffect, useState } from "react";
import FuzzyText from "@/components/FuzzyText";

const texts = [
  "Welcome to React Lab...",
  "Where UI goes through different experiments",
  "Different UI libraries have been taken as 'Test Subjects'...",
  "Sometimes Success, sometimes Failure...",
  "But always improving",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  /* =========================
     ✨ Smooth Typewriter (No Lag)
  ========================= */
  useEffect(() => {
    let timeout;

    if (charIndex < texts[index].length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  const displayText = texts[index].slice(0, charIndex);

  return (
    <section id="home" className="min-h-screen w-full bg-black text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 min-h-screen">

        {/* Title */}
        <div className="text-[clamp(1.8rem,3vw,2.4rem)] text-zinc-300">
          <FuzzyText baseIntensity={0.06} hoverIntensity={0.3} enableHover>
            404
          </FuzzyText>
        </div>

        {/* Subtitle */}
        <div className="text-sm mt-2 text-zinc-400">
          <FuzzyText baseIntensity={0.06} hoverIntensity={0.2} enableHover>
            React
          </FuzzyText>
        </div>

        {/* Typewriter */}
        <p className="mt-10 text-zinc-300 text-lg min-h-[28px]">
          {displayText}
          <span className="animate-pulse ml-1">|</span>
        </p>

      </div>
    </section>
  );
};

export default Hero;