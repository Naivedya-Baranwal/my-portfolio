import React from 'react'
import myprojects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link';
import BlurText from '@/components/animations/BlurText'

const Projects = () => {
  const firstFour = myprojects.length > 4 ? myprojects.slice(0, 4) : myprojects;

  return (
    <div className='text-center pb-10'>
      <BlurText
        text="💼 Projects"
        delay={10}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold m-auto w-fit mb-12"
      />
      <div className=' space-y-12 mx-64'>
        {firstFour.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link href="/projects">
        <button className='cursor-pointer border transition transform hover:scale-110 duration-300 border-blue-700 px-8 py-2 my-10 rounded-2xl m-4 text-xl'>View All</button>
      </Link>
    </div>
  )
}

export default Projects

