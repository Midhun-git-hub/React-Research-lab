import React, { useEffect, useState, memo, useMemo } from "react";
import FuzzyText from "@/components/FuzzyText";
import Hyperspeed from "@/components/Hyperspeed";

// Memoized Hyperspeed
const MemoHyperspeed = memo(Hyperspeed);

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

  // Detect screen size (responsive)
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  //Smooth typewriter 
  useEffect(() => {
    let timeout;

    if (charIndex < texts[index].length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, isMobile ? 60 : 40); // slower on mobile
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, index, isMobile]);

  const displayText = texts[index].slice(0, charIndex);

  // Adaptive Hyperspeed config
  const effectOptions = useMemo(() => {
    if (isMobile) {
      // Mobile version
      return {
        distortion: "turbulentDistortion",
        length: 90,
        roadWidth: 6,
        islandWidth: 1,
        lanesPerRoad: 2,

        fov: 80,
        speedUp: 1.5,

        totalSideLightSticks: 12,
        lightPairsPerRoadWay: 12,

        lightStickWidth: [0.05, 0.15],
        lightStickHeight: [0.4, 0.7],

        movingAwaySpeed: [20, 30],
        movingCloserSpeed: [-60, -90],

        carLightsLength: [10, 30],
        carLightsRadius: [0.02, 0.06],

        carWidthPercentage: [0.2, 0.3],

        colors: {
          roadColor: 526344,
          islandColor: 657930,
          background: 0,
          shoulderLines: 1250072,
          brokenLines: 1250072,
          leftCars: [14441248, 14459680],
          rightCars: [3361783, 15066861],
          sticks: 12970219,
        },
      };
    }


    // Desktop version
    return {
      distortion: "turbulentDistortion",
      length: 200,
      roadWidth: 9,
      islandWidth: 2,
      lanesPerRoad: 3,

      fov: 90,
      fovSpeedUp: 120,
      speedUp: 2,

      carLightsFade: 0.4,

      totalSideLightSticks: 30,
      lightPairsPerRoadWay: 30,

      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,

      lightStickWidth: [0.08, 0.3],
      lightStickHeight: [0.8, 1.2],

      movingAwaySpeed: [40, 60],
      movingCloserSpeed: [-100, -140],

      carLightsLength: [20, 60],
      carLightsRadius: [0.05, 0.12],
      carWidthPercentage: [0.2, 0.4],
      carShiftX: [-0.2, 0.2],
      carFloorSeparation: [0.05, 0.5],

      colors: {
        roadColor: 526344,
        islandColor: 657930,
        background: 0,
        shoulderLines: 1250072,
        brokenLines: 1250072,
        leftCars: [14441248, 14459680, 14426144],
        rightCars: [3361783, 15066861, 12568307],
        sticks: 12970219,
      },
    };
  }, [isMobile]);

  return (
    <section className="min-h-screen w-full bg-black text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <MemoHyperspeed effectOptions={effectOptions} />
      </div>

      {/* Overlay (lighter on mobile) */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${isMobile ? "bg-black/40" : "bg-black/60"
        }`} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 min-h-screen">

        <div className="text-4xl md:text-6xl">
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.5} enableHover>
            404
          </FuzzyText>
        </div>

        <div className="text-lg md:text-2xl mt-3">
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.3} enableHover>
            React
          </FuzzyText>
        </div>

        <p className="mt-10 text-zinc-300 text-lg h-6 will-change-transform">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

      </div>
    </section>
  );
};

export default Hero;