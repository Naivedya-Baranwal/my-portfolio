
import React from 'react'
import SpotlightCard from './animations/SpotlightCard'
import { motion } from 'framer-motion'
import BlurText from '@/components/animations/BlurText'

const Contact = () => {
  return (
    <div className='pt-0'>
      <BlurText
        text="📬 Get In Touch"
        delay={10}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold m-auto w-fit mb-4"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 100
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        className='flex justify-center pb-3 px-4 md:px-0'>
        <SpotlightCard spotlightColor="rgba(20, 29, 255, 0.3)" className="w-full md:w-auto">
          <form className='gap-y-4 flex flex-col justify-center text-lg items-start w-full ' action="https://formsubmit.co/naivedyab198@gmail.com" method="POST">
            <input required className='border relative border-purple-600 w-full md:w-lg px-2 py-4 rounded-2xl' type="text" placeholder='Enter Your Name' />
            <input required className='border relative border-purple-600 w-full md:w-lg px-2 py-4 rounded-2xl' type="text" placeholder='Enter Your Email' />
            <textarea required name="Message" id="" cols="30" rows="5" className='border md:w-lg relative border-purple-600 rounded-2xl w-full px-2 py-4' placeholder='Message'></textarea>
            <button className=' cursor-pointer w-44 py-2 transition transform hover:scale-110 duration-300 rounded-xl m-auto outline outline-blue-700'>Get In Touch</button>
          </form>
        </SpotlightCard>
      </motion.div>
    </div>
  )
}

export default Contact