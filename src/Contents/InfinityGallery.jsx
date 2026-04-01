import React from 'react'
import InfiniteMenu from './../components/InfiniteMenu';
import villain1 from '/images/villain1.png';
import villain2 from '/images/villain2.png';
import villain3 from '/images/villain3.png';
import villain4 from '/images/villain4.png';
import villain5 from '/images/villain5.png';
import villain6 from '/images/villain6.png';
import villain7 from '/images/villain7.png';
import villain8 from '/images/villain8.png';
import villain9 from '/images/villain9.png';
import villain10 from '/images/villain10.png';



const InfinityGallery = () => {
    const items = [
  {
    image: villain1,
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain2,
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain3,
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain4,
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain5,
    link: 'https://google.com/',
    title: 'Item 5',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain6,
    link: 'https://google.com/',
    title: 'Item 6',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain7,
    link: 'https://google.com/',
    title: 'Item 7',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain8,
    link: 'https://google.com/',
    title: 'Item 8',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain9,
    link: 'https://google.com/',
    title: 'Item 9',
    description: 'This is pretty cool, right?'
  },
  {
    image: villain10,
    link: 'https://google.com/',
    title: 'Item 10',
    description: 'This is pretty cool, right?'
  }
];
  return (
    

<div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}
    scale={1}
/>
</div>
  )
}

export default InfinityGallery