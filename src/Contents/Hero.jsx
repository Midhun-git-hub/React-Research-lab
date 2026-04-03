import React, { useEffect, useState, memo, useMemo } from "react";
import FuzzyText from "@/components/FuzzyText";
import Threads from "./../components/Threads";

const MemoThreads = memo(Threads);

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const speed = isMobile ? 55 : 35;

    let typingInterval;
    let pauseTimeout;

    typingInterval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev < texts[index].length) {
          return prev + 1;
        } else {
          clearInterval(typingInterval);

          pauseTimeout = setTimeout(() => {
            setCharIndex(0);
            setIndex((i) => (i + 1) % texts.length);
          }, 1200);

          return prev;
        }
      });
    }, speed);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
    };
  }, [index, isMobile]);

  const displayText = texts[index].slice(0, charIndex);

  const background = useMemo(() => {
    return (
      <MemoThreads
        amplitude={isMobile ? 0.25 : 0.9}
        distance={isMobile ? 0.2 : 0}
        enableMouseInteraction={true}
      />
    );
  }, [isMobile]);

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-black text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">{background}</div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        {/* Title */}
        <div className="text-[clamp(1.8rem,3vw,2.4rem)] text-zinc-300">
          <FuzzyText baseIntensity={0.08} hoverIntensity={0.4} enableHover>
            404
          </FuzzyText>
        </div>

        {/* Subtitle */}
        <div className="text-sm mt-2 text-zinc-400">
          <FuzzyText baseIntensity={0.08} hoverIntensity={0.25} enableHover>
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
