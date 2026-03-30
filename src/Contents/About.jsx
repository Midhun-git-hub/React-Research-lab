import React from "react";
import BorderGlow from "./../components/BorderGlow";
import GlitchText from './../components/GlitchText';

const About = () => {
  return (
    <section className="w-full px-6 py-24 text-white flex items-center justify-center">


      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#060010"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={true}
        colors={['#c084fc', '#f472b6', '#38bdf8']}
      >
        <div className="max-w-3xl text-center space-y-6 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            React Lab Experiments
          </h2>

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed text-lg">
            React Lab is a creative playground where modern UI concepts are explored, tested,
            and sometimes intentionally broken. This project is built to experiment with different
            animation libraries, rendering techniques, and interactive experiences using React.
          </p>

          <p className="text-zinc-500 leading-relaxed">
            From smooth motion effects to chaotic visual distortions, each component is treated
            as a test subject — pushing the boundaries of what frontend interfaces can feel like.
            Some ideas succeed, others fail, but every iteration contributes to learning, refinement,
            and innovation.
          </p>

          <p className="text-zinc-600 leading-relaxed">
            The goal is simple: build visually engaging, technically interesting, and slightly
            unpredictable UI experiences that go beyond traditional design patterns.
          </p>

          {/* Badge */}
          <div className="pt-6">
            <span className="inline-block text-sm font-bold tracking-widest text-pink-400 bg-pink-500/10 px-4 py-2 rounded-full animate-chaos">
              unstable builds 🚧
            </span>
          </div>

        </div>
      </BorderGlow>

    </section>
  );
};

export default About;