import React from 'react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { motion } from 'framer-motion';

const ProjectCard = ({ project , index , disableAnimation }) => {

  const { title, description, image, liveLink, repoLink, id } = project;  
  const shouldAnimate = !(disableAnimation && index === 0);

  return (
    <div>
      <SpotlightCard
        spotlightColor="rgba(0, 29, 255, 0.4)"
        className="transition transform-3d hover:scale-105 duration-500 ease-in-out"
      >
        <div className="flex flex-col md:flex-row" id={id}>
          <div className="w-full lg:w-1/2 lg:mr-10 mb-6 lg:mb-0">
            <img
              src={image}
              alt={title}
              className="relative rounded-lg"
            />
            
          </div>

          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 100 } : false}
            whileInView={shouldAnimate ? { opacity: 1, x: 0 } : false}
            transition={shouldAnimate ? { duration: 0.4, ease: 'easeOut' } : false}
            viewport={shouldAnimate? { once: false, amount: 0.6 } : false}
            className="flex flex-col  mt-0 md:mt-5 text-start w-full lg:w-1/2 "
          >
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-start">{title}</h1>
            <p className="text-md text-justify dark:text-gray-300  text-gray-600 mb-4">{description}</p>
            <div className="flex gap-x-2">
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer">
                  <button className="cursor-pointer transition transform hover:scale-105 duration-300 border border-amber-300 px-3 py-1 rounded-lg">
                    Live Link
                  </button>
                </a>
              )}
              {repoLink && (
                <a href={repoLink} target="_blank" rel="noreferrer">
                  <button className="cursor-pointer transition transform hover:scale-105 duration-300 border border-lime-300 px-3 py-1 rounded-lg">
                    Repo Link
                  </button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default ProjectCard;
