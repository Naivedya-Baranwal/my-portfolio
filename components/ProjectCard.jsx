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
        <div className="flex" id={id}>
          <div className="w-1/2 mr-10">
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
            className="flex flex-col mt-14 text-start w-1/2 "
          >
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-md text-gray-300 mb-4">{description}</p>
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
