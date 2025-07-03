import React from 'react'
import SpotlightCard from '@/components/animations/SpotlightCard'

const ProjectCard = ({project}) => {
    const {title, description, image, liveLink , repoLink, id} = project;
 
  return (
    <div >
        <SpotlightCard>
            <div className='flex' id={id}>
                <img src={image} alt={title} className='w-1/2 rounded-lg mr-12'/>
                <div className='flex flex-col mt-14 text-start w-1/2'>
                    <h1 className='text-2xl font-bold mb-4'>{title}</h1>
                <p className='text-md text-gray-300 mb-4'>{description}</p>
                <div className='flex gap-x-2'>
                   {liveLink &&  <a href={liveLink} target="_blank" rel="noreferrer">
                        <button className='cursor-pointer border border-lime-300 px-3 py-1 rounded-lg'>Live Link</button>
                    </a>}
                   {repoLink && <a href={repoLink} target="_blank" rel="noreferrer">
                        <button className='cursor-pointer border border-lime-300 px-3 py-1 rounded-lg'>Repo Link</button>
                    </a>}
                </div>
                </div>
             
            </div>
        </SpotlightCard>
    </div>
  )
}

export default ProjectCard