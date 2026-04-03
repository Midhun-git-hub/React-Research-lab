import React from "react";
import { motion } from "framer-motion";  //eslint-disable-line
import RotatingText from './../components/RotatingText';



const GalleryInfo = () => {
    return (
        <section id="collection" className="relative w-full bg-black text-white py-20 px-6 flex justify-center">

            <div className="max-w-3xl text-center">

                {/* Label */}
                <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">
                    About the Collection
                </p>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    Why These Characters?
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-zinc-400 leading-relaxed text-[15px] md:text-[17px]"
                >
                    This gallery is a curated mix of characters I admire — not just for their strength,
                    but for their mindset and presence. The circular layout represents continuity,
                    connecting them through themes of{" "}

                    <span className="inline-block align-middle">
                        <RotatingText
                            texts={[
                                'ambition',
                                'control',
                                'chaos',
                                'power',
                                'evolution',
                                'dominance'
                            ]}
                            mainClassName="
                            px-2
                            text-white
                            font-medium
                            bg-white/5
                            border border-white/10
                            backdrop-blur-sm
                            rounded-md
                            mx-1"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </span>

                    , each expressed in a different way.
                </motion.p>
            </div>

            {/* Divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-px 
        bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

        </section>
    );
};

export default GalleryInfo;