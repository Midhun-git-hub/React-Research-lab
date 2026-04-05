import React from 'react'
import OrbitImages from './../components/OrbitImages';
import hero1 from '/images/hero.png'

const OrbitImage = () => {

  const images = [
    hero1,
    "https://picsum.photos/300/300?grayscale&random=2",
    "https://picsum.photos/300/300?grayscale&random=3",
    "https://picsum.photos/300/300?grayscale&random=4",
    "https://picsum.photos/300/300?grayscale&random=5",
    "https://picsum.photos/300/300?grayscale&random=6",
  ];

  return (
    <section className='min-h-screen w-full px-6 py-10 flex items-center justify-center'>
      <div className='w-[700px] h-[300px] mx-auto relative overflow-hidden'>
        <OrbitImages
          images={images}
          shape="ellipse"
          radiusX={400}
          radiusY={80}
          rotation={-8}
          duration={120}
          itemSize={80}
          responsive={true}
          radius={160}
          direction="normal"
          showPath={true}
          pathColor='rgba(0,0,0,0.1)'
          pathWidth={2}
          paused={false}
        />
      </div>
    </section>
  )
}

export default OrbitImage