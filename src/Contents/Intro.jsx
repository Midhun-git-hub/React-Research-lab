

import React, { useEffect, useState } from "react";
import FuzzyText from "@/components/FuzzyText";
import { MusicToggleButton } from "@/components/ui/skiper-ui/skiper25";

const texts = [
  "Welcome to React Lab...",
  "Where UI goes through different experiments",
  "Different UI libraries have been taken as 'Test Subjects'...",
  "Sometimes Success, sometimes Failure...",
  "But always improving",
];

const Intro = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showMusic, setShowMusic] = useState(false);

  // ✅ Typewriter effect
  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 40);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  //  Delay music button (nice UX)
  useEffect(() => {
    const timer = setTimeout(() => setShowMusic(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-10 min-h-screen">

      {/* Heading */}
      <div className="text-4xl md:text-6xl mt-32">
        <FuzzyText baseIntensity={0.1} hoverIntensity={0.5} enableHover>
          404
        </FuzzyText>
      </div>

      <div className="text-lg md:text-2xl mt-4">
        <FuzzyText baseIntensity={0.1} hoverIntensity={0.3} enableHover>
          React 
        </FuzzyText>
      </div>

      {/* Typewriter */}
      <p className="mt-10 text-zinc-400 text-lg h-6">
        {displayText}
        <span className="animate-pulse">|</span>
      </p>

      {/* Unstable Badge */}
      <div className="mt-10 text-base font-bold tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded animate-chaos">
        unstable builds 🚧
      </div>

      {/* Floating Music Button */}
      {showMusic && (
        <div className="group fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">

          {/* Hint text */}
          <span className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition duration-300">
            Wanna hear something while exploring? 🎧
          </span>

          {/* Button */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-2 shadow-lg hover:scale-105 transition duration-300">
            <MusicToggleButton />
          </div>

        </div>
      )}
    </div>
  );
};

export default Intro;