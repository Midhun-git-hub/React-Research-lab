import React from 'react'
import CircularGallery from './../components/CircularGallery';
import img1 from '/images/image1.jpg';
import img2 from '/images/image2.jpg';
import img3 from '/images/image3.jpg';
import img4 from '/images/image4.jpg';
import img5 from '/images/image5.jpg';
import img6 from '/images/image6.jpg';
import img7 from '/images/image7.jpg';
import img8 from '/images/image8.jpg';
import img9 from '/images/image9.jpg';
import img10 from '/images/image10.jpg';
import img11 from '/images/image11.jpg';
import img12 from '/images/image12.jpg';
import img13 from '/images/image13.jpg';


const Gallery = () => {

    const myitems = [
        {image:img1, text:"Image 1"},
        {image:img2, text:"Image 2"},
        {image:img3, text:"Image 3"},
        {image:img4, text:"Image 4"},
        {image:img5, text:"Image 5"},
        {image:img6, text:"Image 6"},
        {image:img7, text:"Image 7"},
        {image:img8, text:"Image 8"},
        {image:img9, text:"Image 9"},   
        {image:img10, text:"Image 10"},
        {image:img11, text:"Image 11"},
        {image:img12, text:"Image 12"},
        {image:img13, text:"Image 13"},
    ]

    return (
        <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery items={myitems} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
                scrollSpeed={2}
            />
        </div>
    )
}

export default Gallery