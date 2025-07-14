
import React from 'react';
import SpotlightCard from './animations/SpotlightCard';
import TiltedCard from './animations/TitleCard';
import { motion } from 'framer-motion';
import BlurText from '@/components/animations/BlurText';

const About = () => {
  return (
    <div className='mt-8'>
      <BlurText
        text="👋 About Me"
        delay={10}
        animateBy="words"
        direction="top"
        className="text-3xl font-bold m-auto w-fit mb-4"
      />

      <div className='flex flex-col lg:flex-row px-4 lg:px-20 pt-10 pb-25 gap-y-6 lg:gap-y-0 lg:gap-x-1.5 justify-between'>
        <SpotlightCard className="custom-spotlight-card w-full lg:w-1/4 text-xl text-center transform transition duration-300 hover:scale-104" spotlightColor="rgba(100, 255, 150, 0.5)">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
            className="space-y-3 text-lg text-justify leading-relaxed"
          >
            <h1 className="text-2xl font-semibold mb-4 text-center">✨ Get to Know Me</h1>
           <p>
  I'm <span className="font-medium text-blue-600">Naivedya</span>, a Computer Science undergraduate at <strong>NIT Mizoram</strong> (2022–26). I'm passionate about software development, AI/ML, and building impactful full-stack applications.
</p>
<p>
  I enjoy solving DSA problems and bringing ideas to life through hands-on projects. Exploring clean UI, optimizing backend logic, and learning new technologies keeps me motivated and constantly improving.
</p>


          </motion.div>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card w-full lg:w-3/4" spotlightColor="rgba(0, 29, 255, 0.4)">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 ">🎓 Education</h2>
            <div className='flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-2 lg:text-start items-center'>
              <TiltedCard
                imageSrc="/assets/NIT_MZ.jpg"
                altText="Education Card"
                captionText="B.Tech - NIT Mizoram"
                containerHeight="340px"
                containerWidth="350px"
                imageHeight="350px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-4 bg-white/80 dark:bg-black dark:text-white rounded-md shadow-md backdrop-blur-sm text-black w-[280px]">
                    <h3 className="text-lg font-bold">B.Tech in Computer Science</h3>
                    <p className="text-sm mt-1">National Institute of Technology, Mizoram</p>
                    <p className="text-sm">CGPA: 9.15</p>
                    <p className="text-sm">2022 - 2026</p>
                  </div>
                }
              />
              <TiltedCard
                imageSrc="/assets/lbps.jpg"
                altText="Senior Secondary - Lord Buddha Public School"
                captionText="Senior Secondary - Lord Buddha School"
                containerHeight="340px"
                containerWidth="350px"
                imageHeight="350px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-4 bg-white/80 rounded-md dark:bg-black dark:text-white shadow-md backdrop-blur-sm text-black w-[280px]">
                    <h3 className="text-lg font-bold">Senior Secondary Education</h3>
                    <p className="text-sm mt-1">Lord Buddha Public School, Rajasthan (CBSE)</p>
                    <p className="text-sm">Percentage: 81.4%</p>
                    <p className="text-sm">2019 – 2021</p>
                  </div>
                }
              />
              <TiltedCard
                imageSrc="/assets/SterlingSchool.jpg"
                altText="Secondary - Sterling School"
                captionText="Secondary - Sterling School"
                containerHeight="340px"
                containerWidth="350px"
                imageHeight="350px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-4 bg-white/80 dark:bg-black dark:text-white rounded-md shadow-md backdrop-blur-sm text-black w-[280px]">
                    <h3 className="text-lg font-bold">Secondary Education</h3>
                    <p className="text-sm mt-1">Sterling School, Babatpur, Varanasi (CBSE)</p>
                    <p className="text-sm">Percentage: 91.2%</p>
                    <p className="text-sm">2018 – 2019</p>
                  </div>
                }
              />
            </div>
          </motion.div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default About;
