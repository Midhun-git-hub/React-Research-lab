import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { MusicToggleButton } from "./components/ui/skiper-ui/skiper25";
import Navbar from "./Contents/Navbar.jsx";
import Hero from "./Contents/Hero.jsx";
import About from "./Contents/About.jsx";
import Gallery from "./Contents/Gallery.jsx";
import Footer from "./Contents/Footer.jsx";
import LabNotice from "./Contents/LabNotice.jsx";
import InfinityGallery from "./Contents/InfinityGallery.jsx";
import GalleryInfo from "./Contents/GalleryInfo.jsx";
import Contact from "./Contents/Contact.jsx";
import InfinityInfo from "./Contents/InfinityInfo.jsx";
import OrbitImage from "./Contents/OrbitImage.jsx";
import Target from "./Contents/Target.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1a1a2e,#000)] text-white">
      <Navbar />
      <div className="group fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">
        <span className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition duration-300">
          Wanna hear something while exploring? 🎧
        </span>

        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-2 shadow-lg hover:scale-105 transition duration-300">
          <MusicToggleButton />
        </div>
      </div>
      <Hero />
      <About />
      <GalleryInfo />
      <Gallery />
      <InfinityInfo />
      <InfinityGallery />
      <OrbitImage />
      <Target />
      <Contact />
      <Footer />
      <Analytics />
      <LabNotice />
      <SpeedInsights />
    </div>
  );
};

export default App;
