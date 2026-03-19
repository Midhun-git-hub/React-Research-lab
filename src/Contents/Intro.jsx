import React, { useEffect, useState } from "react"
import { FuzzyText } from '@/components/ui/fuzzy-text';

const texts = [
    "Welcome to my UI Lab...",
    "Where things might break 😅",
    "Testing UI libraries...",
    "Sometimes good, sometimes chaos...",
    "But always learning 🚀"
]

const Intro = () => {
    const [displayText, setDisplayText] = useState("")
    const [index, setIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        if (charIndex < texts[index].length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + texts[index][charIndex])
                setCharIndex(charIndex + 1)
            }, 40)

            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setDisplayText("")
                setCharIndex(0)
                setIndex((prev) => (prev + 1) % texts.length)
            }, 1200)

            return () => clearTimeout(timeout)
        }
    }, [charIndex, index])

    return (
        <div className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-10">

            {/* Fuzzy-style heading */}
            <div className="text-4xl md:text-6xl font-bold text-white text-center">
                <FuzzyText
                    text="REACT LAB"
                    fontSize="clamp(2rem, 8vw, 5rem)"
                    noiseIntensity={1}
                    enableHover={true}
                    baseColor="#ffaaaa"
                    glowColor="#ffaaaa"
                />
            </div>

            {/* Typewriter text */}
            <p className="mt-6 text-zinc-400 text-lg h-6">
                {displayText}
                <span className="animate-pulse">|</span>
            </p>

            {/* Random chaotic badge */}
           <div className="mt-4 text-base font-bold tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded animate-chaos">
  unstable builds 🚧
</div>

        </div>
    )
}

export default Intro