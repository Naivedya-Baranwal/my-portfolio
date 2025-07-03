import React from 'react'
import Image from 'next/image';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className=' flex flex-col h-screen '>
      <nav className='flex z-5 justify-between py-8 px-12  text-2xl fixed w-full'>
        <div>Naivedya</div>
        <div className='flex gap-x-6 '>
          <Link to="about" smooth={true} duration={500} offset={-110} className="cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} offset={-100} className="cursor-pointer">Skills</Link>
          <Link to="DsaProgress" smooth={true} duration={500} offset={-100} className="cursor-pointer">DSA Stats</Link>
          <Link href="/projects" smooth={true} duration={500} offset={-100} className="cursor-pointer">Projects</Link>
        </div>
        <div>
          <Link to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer">Contact Me</Link>
        </div>
      </nav>

      <div className='mt-44 flex '>
        <div className='text-sm/8 w-1/2 p-20'>
          <h1 className='font-[varelaRound] text-7xl mb-8'>Hello, my name is Naivedya Baranwal</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit reiciendis quibusdam, error culpa nam oditia ipsam eaque iste non dolor recusandae porro numquam eos, suscipit culpa. Quisquam, cupiditate numquam!</p>
          <button className="border border-white hover:bg-white text-white font-semibold py-1 px-4 my-4 rounded-3xl">
            Resume
          </button>
        </div>
        <div className='m-auto'>

          <Image
            src="/assets/profile.png"
            alt="My Profile Picture"
            width={350}
            height={300}
            className="rounded-[7.5vw] transform transition duration-500 hover:scale-103 border-green-700 border-3"
          />
        </div>

      </div>

    </div>
  )
}

export default Hero