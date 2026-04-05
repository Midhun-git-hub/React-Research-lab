import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CircularGallery from './../components/CircularGallery'

import img1 from '/images/image1.jpg'
import img2 from '/images/image2.jpg'
import img3 from '/images/image3.jpg'
import img4 from '/images/image4.jpg'
import img5 from '/images/image5.jpg'
import img6 from '/images/image6.jpg'
import img7 from '/images/image7.jpg'
import img8 from '/images/image8.jpg'
import img9 from '/images/image9.jpg'
import img10 from '/images/image10.jpg'
import img11 from '/images/image11.jpg'
import img12 from '/images/image12.jpg'
import img13 from '/images/image13.jpg'

const Gallery = () => {

    const myitems = [
        { image: img1, text: "Monkey D.Luffy" },
        { image: img2, text: "Roronoa Zoro" },
        { image: img3, text: "Saitama" },
        { image: img4, text: "Naruto Uzumaki" },
        { image: img5, text: "Eren Yeager" },
        { image: img6, text: "Vinsmoke Sanji" },
        { image: img7, text: "Light Yagami with Ryuk" },
        { image: img8, text: "Prince Vegeta" },
        { image: img9, text: "Son Goku" },
        { image: img10, text: "Tanjirou Kamado" },
        { image: img11, text: "Ichigo kurosaki" },
        { image: img12, text: "Kyojuro Rengoku" },
        { image: img13, text: "Edward Newgate" },
    ]

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

            {/* Heading */}
            <div className="flex flex-col items-center gap-3 mb-10 mt-20">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h1 className="text-sm tracking-[0.3em] text-zinc-500 uppercase">
                        Gallery
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Some Anime Heroes I Like
                    </h2>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-[10px] md:text-xs text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
                >
                    © Anime visuals belong to respective creators
                </motion.span>

            </div>

            {/* Gallery Container */}
            <div className="w-full max-w-5xl h-[350px] md:h-[600px] relative">

                {/* MAIN GALLERY */}
                <CircularGallery
                    items={myitems}
                    bend={isMobile ? 0.8 : 2}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={isMobile ? 0.05 : 0.03}
                    scrollSpeed={isMobile ? 3 : 1.5}
                />

                {/* GLOBAL SHADE (dims everything slightly) */}
                <div className="pointer-events-none absolute inset-0 z-[5] bg-black/40" />

                {/* CENTER FOCUS LIGHT */}
                <div className="pointer-events-none absolute inset-0 z-[6] flex items-center justify-center">
                    <div className="w-[40%] h-[60%] 
                        bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] 
                        blur-2xl" />
                </div>

                {/* LEFT SIDE FADE */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-[25%] z-[6]
                    bg-gradient-to-r from-black via-black/70 to-transparent" />

                {/* RIGHT SIDE FADE */}
                <div className="pointer-events-none absolute top-0 right-0 h-full w-[25%] z-[6]
                    bg-gradient-to-l from-black via-black/70 to-transparent" />

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center z-[7]">
                    <div className="w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" />
                </div>

            </div>

        </section>
    )
}

export default Gallery