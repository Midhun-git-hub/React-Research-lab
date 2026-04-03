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
import villain11 from '/images/villain11.png';
import villain12 from '/images/villain12.png';


const InfinityGallery = () => {
  const items = [
    {
      image: villain1,
      link: 'https://onepiece.fandom.com/wiki/Donquixote_Doflamingo',
      title: 'Donquixote Doflamingo',
      description: 'He manipulates with a sinister smile, a ruthless puppeteer who controls the strings of power with a twisted sense of pleasure and absolute dominance.'
    },
    {
      image: villain2,
      link: 'https://onepiece.fandom.com/wiki/Crocodile',
      title: 'Sir Crocodile',
      description: 'He schemes from the shadows, a ruthless mastermind who bends kingdoms to his will with cunning and absolute control.'
    },
    {
      image: villain3,
      link: 'https://he-man.fandom.com/wiki/Skeletor',
      title: 'Skeletor',
      description: 'He craves ultimate power, a cunning sorcerer whose ruthless ambition is matched only by his relentless hatred of defeat.'
    },
    {
      image: villain4,
      link: 'https://onepunchman.fandom.com/wiki/Boros',
      title: 'Boros',
      description: 'He lives for battle, a conqueror who crosses galaxies seeking a fight worthy of his overwhelming power.'
    },
    {
      image: villain5,
      link: 'https://bleach.fandom.com/wiki/Sousuke_Aizen',
      title: 'Sousuke Aizen',
      description: 'He speaks with calm certainty, manipulating everything from the shadows while believing himself far above all others.'
    },
    {
      image: villain6,
      link: 'https://dragonball.fandom.com/wiki/Frieza',
      title: 'Lord Frieza',
      description: 'He rules with cold arrogance, treating entire worlds as disposable while reveling in absolute power and control.'
    },
    {
      image: villain7,
      link: 'https://naruto.fandom.com/wiki/Madara_Uchiha',
      title: 'Madara Uchiha',
      description: 'He stands like a fallen god, driven by a vision so absolute that the world itself becomes something to reshape by force.'
    },
    {
      image: villain8,
      link: 'https://onepiece.fandom.com/wiki/Enel',
      title: 'Enel',
      description: 'He declares himself a god, wielding overwhelming power with a smug certainty that no one could ever stand above him.'
    },
    {
      image: villain9,
      link: 'https://kimetsu-no-yaiba.fandom.com/wiki/Muzan_Kibutsuji',
      title: 'Muzan Kibutsuji',
      description: 'He commands silence with effortless dominance, viewing all others as disposable while relentlessly pursuing perfection and absolute control.'
    },
    {
      image: villain10,
      link: 'https://solo-leveling.fandom.com/wiki/Statue_of_God',
      title: 'Statue of God',
      description: 'He moves like a perfect god, hiding a cold mind that controls and discards lives without a second thought.'
    },
    {
      image: villain11,
      link: 'https://onepiece.fandom.com/wiki/Kaido',
      title: 'Kaido',
      description: 'He rules with a sinister smile, a ruthless puppeteer who controls the strings of power with a twisted sense of pleasure and absolute dominance.'
    },
    {
      image: villain12,
      link: 'https://onepiece.fandom.com/wiki/Charlotte_Katakuri',
      title: 'Charlotte Katakuri',
      description: 'He stands with unwavering honor, a powerful warrior whose calm discipline and unmatched strength make him nearly untouchable.'
    }
  ];
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-start">

      {/* HEADING SECTION */}
      <div className="text-center mt-16 mb-6 px-4">
        <h1 className="font-['Sora'] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-tight">
          Legendary Villains
        </h1>

        <p className="text-gray-400 mt-2 text-[clamp(0.9rem,2vw,1.2rem)] max-w-[500px] mx-auto">
          Power, chaos, and ambition — explore the minds that shaped their worlds.
        </p>
      </div>

      {/* GALLERY */}
      <div className="w-full h-[600px] relative">

        {/* TOP GRADIENT */}
        <div className="
        pointer-events-none
        absolute
        top-0 left-0
        w-full h-[120px]
        z-10
        bg-gradient-to-b from-black via-black/70 to-transparent"
        />

        {/* BOTTOM GRADIENT */}
        <div className="
        pointer-events-none
        absolute
        bottom-0 left-0
        w-full h-[140px]
        z-10
        bg-gradient-to-t from-black via-black/70 to-transparent"
        />

        <InfiniteMenu items={items} scale={1} />
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" />
        </div>
      </div>
    </div>
  )
}

export default InfinityGallery