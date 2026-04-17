import React from 'react'
import BounceCards from './../components/BounceCards';

const Bounce = () => {
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-white mb-10 text-center">
          Bounce Cards Demo
        </h1>

        {/* Card Container */}
        <div className="w-full flex justify-center">
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover
          />
        </div>

      </div>

    </section>
  )
}

export default Bounce;