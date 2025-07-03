import React from 'react'
import myprojects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link';

const Projects = () => {
  const firstFour = myprojects.length > 4 ? myprojects.slice(0, 4) : myprojects;

  return (
    <div className='text-center'>
      <h1 className='text-4xl text-center font-bold pb-2 mb-8'>Projects</h1>
      <div className=' space-y-12 mx-64'>
        {firstFour.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link href="/projects">
        <button className='cursor-pointer border border-amber-400 px-4 py-1.5 rounded-2xl m-4 text-xl'>View All</button>
      </Link>
    </div>
  )
}

export default Projects

