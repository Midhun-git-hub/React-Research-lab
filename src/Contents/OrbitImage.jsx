import React from 'react'
import OrbitImages from './../components/OrbitImages'
import hero from '/images/hero.jpg'
import hero1 from '/images/hero1.jpg'
import hero2 from '/images/hero2.jpg'
import hero3 from '/images/hero3.jpg'
import hero4 from '/images/hero4.jpg'
import hero5 from '/images/hero5.jpg'
import hero6 from '/images/hero6.jpg'
import { easeOut, motion } from 'framer-motion';


const OrbitImage = () => {

  const images = [
    hero,
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
  ];

  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center space-y-8'>
      <motion.div
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <motion.h1  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration:0.8, ease: "easeOut" }}  className='text-4xl font-serif text-center text-gray-400'>The Broken Ones</motion.h1>
        <motion.p className='text-center text-gray-500 max-w-md'>Not all scars are visible — some become silence, some chaos, some laughter.</motion.p>
        <motion.p className='text-center text-gray-500 max-w-md'>A personal take on what it means to be broken — open to interpretation.</motion.p>
      </motion.div>
        <div className='w-[800px] h-[400px] relative flex items-center justify-center'>
          <OrbitImages
            images={images}
          shape="ellipse"
          radiusX={300}
          radiusY={120}
          rotation={-8}
          duration={60}
          itemSize={70}
          responsive={true}
          direction="normal"
          showPath={true}
          pathColor='rgba(0,0,0,0.2)'
          pathWidth={2}
          paused={false}
        />
      </div>
    </section>
  )
}

export default OrbitImage