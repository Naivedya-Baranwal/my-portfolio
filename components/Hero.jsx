'use client'
import React from 'react'
import Image from 'next/image';
import RotatingText from '@/components/animations/RotatingText'

const Hero = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='mt-24 lg:mt-42 flex flex-col-reverse lg:flex-row w-full lg:w-3/4 m-auto px-4'>
        <div className='text-sm/8 w-full lg:w-2/3 pt-10 lg:pt-20 lg:pr-65 text-center lg:text-left'>
          <h2 className='text-xl lg:text-2xl text-gray-600 mb-2'>Hi, I'm</h2>
          <h1 className='font-[varelaRound] text-4xl lg:text-6xl mb-3'>Naivedya Baranwal</h1>
          <RotatingText
            texts={['Software Developer', 'Cybersecurity Intern', 'AI/ML Intern', 'DSA Enthusiast']}
            mainClassName="text-3xl lg:text-4xl mb-3 text-blue-300 justify-center lg:justify-start"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.015}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <p className='text-lg lg:text-xl mb-5'>
          Passionate about building scalable software solutions, exploring AI/ML, and mastering modern technologies to create impactful digital experiences.    
          </p>

          <a
            href="https://drive.google.com/file/d/1NQdB-htkJ6wM-teVmUjIqItNL36KEHqw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="outline outline-purple-600 hover:scale-110 text-lg lg:text-xl transition transform cursor-pointer py-2 lg:py-3 px-4 lg:px-6 my-2 rounded-2xl">
              View Resume
            </button>
          </a>
        </div>
        <div className='w-1/3 m-auto mt-15 lg:mt-0'>
          <Image
            src="/assets/profile.jpeg"
            alt="My Profile Picture"
            width={350}
            height={300}
            className="rounded-full transform transition duration-500 hover:scale-103 border-blue-800 border-3"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
