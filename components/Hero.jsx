"use client"
import React from 'react'
import Image from 'next/image';
import RotatingText from '@/components/animations/RotatingText'

const Hero = () => {
  return (
    <div className=' flex flex-col h-screen '>
      <div className='mt-42 flex w-3/4 m-auto'>
        <div className='text-sm/8 w-2/3 pt-20 pr-65'>
            <h2 className='text-2xl text-gray-600 mb-2'>Hi, I'm</h2>
          <h1 className='font-[varelaRound] text-6xl mb-3'>Naivedya Baranwal</h1>
            <RotatingText
              texts={['Full-Stack Developer', 'Cybersecurity Intern', 'AI/ML Intern', 'DSA Enthusiast']}
              mainClassName="text-4xl mb-3 text-blue-300 "
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.015}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          <p className='text-xl mb-5'>   
            Passionate about building scalable web apps and exploring modern technologies to create impactful digital experiences.
          </p>
       
          <a
            href="https://drive.google.com/file/d/1NQdB-htkJ6wM-teVmUjIqItNL36KEHqw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="outline outline-fuchsia-900  hover:scale-110 text-xl transition transform cursor-pointer py-3 px-6 my-2 rounded-2xl">
           View Resume
          </button>
          </a>
        </div>
        <div className='w-1/3 m-auto'>
          <Image
            src="/assets/profile.png"
            alt="My Profile Picture"
            width={350}
            height={300}
            className="rounded-full transform transition duration-500 hover:scale-103 border-fuchsia-900 border-3"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero


