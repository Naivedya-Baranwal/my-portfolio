'use client'
import React, { useState } from 'react';
import FilterBar from '@/app/projects/FilterBar';
import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const Page = () => {
  const [projectType, setProjectType] = useState("all");
  const [hasFiltered, setHasFiltered] = useState(false);

  const filteredProjects = projectType === "all"
    ? projects
    : projects.filter((project) => project.type === projectType);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className='w-full relative px-4 sm:px-6 md:px-8 pt-24 md:pt-32'>
        <h1 className='text-3xl md:text-4xl text-center font-bold mb-6 md:mb-8'>💼 Projects</h1>

        <FilterBar setProjectType={(type) => {
          setProjectType(type);
          setHasFiltered(true);
        }} />

        <div className='space-y-8 sm:space-y-12 mt-8 sm:mt-10 mx-0 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-46'>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                disableAnimation={!hasFiltered}
              />
            ))
          ) : (
            <p className='text-center text-gray-400'>No projects found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
