import { motion } from 'framer-motion';
import SpotlightCard from './animations/SpotlightCard';

const directionVariants = {
  left: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  center: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
};

const ExperienceCard = ({ experience, direction }) => {
  return (
    <SpotlightCard className={`w-full ${direction==='center' ? 'md:left-1/2' : ''}`} spotlightColor="rgba(150, 209, 255, 0.15)">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={directionVariants[direction]}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    className='dark:bg-[#3434348a] bg-white  dark:text-white text-black p-6 rounded-xl shadow-lg w-full max-w-xl '
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <div className='flex justify-center'>
  <img src={experience.logo.src} alt={experience.company} className="w-15 h-15 rounded-lg object-cover" />
     
        </div>
         <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">{experience.title}</h3>
          <p className="text-sm text-black dark:text-white">{experience.company}</p>
          <p className="text-sm text-black dark:text-white">{experience.duration} · {experience.location}</p>
        </div>
      </div>

      <ul className="list-none justify-text text-start list-inside text-sm space-y-1 mb-3">
        {experience.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-2">
        {experience.skills.map((skill, i) => (
          <span
            key={i}
            className="border border-black dark:border-white/30 text-sm px-3 py-1 rounded-full text-black dark:text-white hover:bg-white/10 transition"
          >
            {skill}
          </span>
        ))}
      </div>

      {experience.github && (
        <a
          href={experience.github}
          target="_blank"
          rel="noreferrer"
          className="block mt-3 text-blue-400 text-start text-sm hover:underline"
        >
          GitHub: {experience.github.split('/').pop()}
        </a>
      )}
    </motion.div>
    </SpotlightCard>
  );
};

export default ExperienceCard;
