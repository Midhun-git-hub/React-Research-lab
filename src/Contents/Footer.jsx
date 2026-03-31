import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CircularText from "@/components/mvpblocks/circular-text";



const Footer = () => {
  return (
    <footer className="relative w-full py-10 border-t border-white/10 bg-black text-white flex flex-col items-center justify-center gap-4">

      {/* LEFT FLOATING CIRCLE */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 scale-40 opacity-80">
        <CircularText
          text="*Under*Development"
          spinDuration={20}
          radius={25}
          onHover="goBonkers"
          className="text-[10px] text-white"
        />
      </div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-zinc-400 text-sm text-center"
      >
        Under Development.....
      </motion.p>

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-zinc-600 text-xs italic"
      >
        Built with curiosity and a bit of chaos.
      </motion.p>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-6 pt-2"
      >
        <a
          href="https://github.com/Midhun-git-hub"
          target="_blank"
          className="text-zinc-400 hover:text-white transition"
        >
          <FaGithub size={18} />
        </a>
      </motion.div>

    </footer>
  );
};

export default Footer;