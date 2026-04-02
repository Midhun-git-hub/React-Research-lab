import React from "react";
import { FaDiscord, FaGithub} from "react-icons/fa";
import { ScrollVelocity } from "./../components/ScrollVelocity";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white mt-32 pt-10">
      {/* TOP FADE */}
      <div className="absolute -top-10 left-0 w-full h-20 bg-linear-to-b from-transparent via-black/60 to-black pointer-events-none" />

      {/* DIVIDER */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-6" />

      {/* Scroll Text */}
      <ScrollVelocity
        texts={["- Development in progress", "- Stay tuned for updates"]}
        velocity={100}
        className="text-gray-300 text-[clamp(1.2rem,2.5vw,2rem)] font-semibold tracking-wide"
      />

      <div className="flex flex-col items-center gap-4 py-10">
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/Midhun-git-hub">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
          <a href="https://discord.com/users/770568742304219136">
            <FaDiscord className="hover:text-cyan-400 transition" />
          </a>
        </div>

        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Midhun
        </p>
      </div>
    </footer>
  );
};

export default Footer;
