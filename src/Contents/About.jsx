import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import ElectricBorder from "./../components/ElectricBorder";

const About = () => {
  // container animation 
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // each item animation
  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full px-6 py-24 text-white flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-sm tracking-[0.3em] text-zinc-500 uppercase">
            About
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            The Lab
          </h2>
        </div>
        <ElectricBorder
          color="#5eead4"
          speed={1}
          chaos={0.08}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="text-center space-y-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8 overflow-hidden">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_8px_rgba(94,234,212,0.5)]"
            >
              Inside React Lab
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-zinc-300 text-lg leading-relaxed"
            >
              A playground for testing, breaking, and learning React in ways that might not be "best practices" — but are always enlightening.
            </motion.p>

            {/* Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4"
            >
              {[
                {
                  title: "⚡ Motion Experiments",
                  desc: "Exploring fluid animations and interactive transitions.",
                },
                {
                  title: "🧪 UI Stress Testing",
                  desc: "Pushing components to their limits to discover edge cases.",
                },
                {
                  title: "🎨 Creative Interfaces",
                  desc: "Designing unconventional and visually rich layouts.",
                },
                {
                  title: "🔥 Experimental Effects",
                  desc: "Playing with chaos, distortion, and unexpected visuals.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/40 hover:shadow-[0_0_20px_rgba(94,234,212,0.2)] transition"
                >
                  <div className="font-semibold">{card.title}</div>
                  <p className="text-zinc-400 text-sm mt-1">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-zinc-500 italic pt-4"
            >
              Not everything works — but everything teaches.
            </motion.p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <span className="inline-block text-sm font-bold tracking-widest text-teal-300 bg-teal-400/10 border border-teal-400/20 px-4 py-2 rounded-full animate-chaos">
                unstable builds 🚧
              </span>
            </motion.div>

          </div>
        </ElectricBorder>
      </div>
    </section>
  );
};

export default About;