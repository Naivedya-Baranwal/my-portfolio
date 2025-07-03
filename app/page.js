'use client'
import React from 'react'
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import DsaProgress from '@/components/DsaProgress';

const page = () => {
  return (
    <div>
      <Hero />

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="DsaProgress">
        <DsaProgress />
      </div>

      {/* <div id="projects"> */}
        <Projects />
      {/* </div> */}

      <div id="contact">
        <Contact />
      </div>

    </div>
  )
}

export default page