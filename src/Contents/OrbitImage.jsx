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
    <OrbitImages
  images={images}
  shape="ellipse"
  radiusX={340}
  radiusY={80}
  rotation={-8}
  duration={30}
  itemSize={80}
  responsive={true}
  radius={160}
  direction="normal"
  fill
  showPath
  paused={false}
/>
  )
}

export default OrbitImage