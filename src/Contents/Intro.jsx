import React, { useEffect, useState } from "react";
import FuzzyText from "@/components/FuzzyText";



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

    return (
        <div className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-10">
            {/* Fuzzy-style heading */}
            <div className="text-4xl md:text-6xl mt-45 text-center">
                <FuzzyText
                    baseIntensity={0.1}
                    hoverIntensity={0.5}
                    enableHover
                >
                    404
                </FuzzyText>
            </div>
            <div className="text-lg md:text-2xl mt-4">
                <FuzzyText
                    baseIntensity={0.1}
                    hoverIntensity={0.3}
                    enableHover
                >
                    React
                </FuzzyText>
            </div>

            {/* Typewriter text */}
            <p className="mt-10 text-zinc-400 text-lg h-6">
                {displayText}
                <span className="animate-pulse">|</span>
            </p>

            {/* Random chaotic badge */}
            <div className="mt-10 text-base font-bold tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded animate-chaos">
                unstable builds 🚧
            </div>
        </div>
    );
};

export default Intro;
