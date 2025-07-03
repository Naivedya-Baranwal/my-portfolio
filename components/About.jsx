import React from 'react';
import SpotlightCard from './animations/SpotlightCard';
import TiltedCard from './animations/TitleCard';

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center ">👋 About Me</h1>
      <div className='flex px-20 pt-10 pb-25  gap-x-1.5 justify-between'>
        <SpotlightCard className="custom-spotlight-card w-1/4 text-xl text-center transform transition duration-300 hover:scale-104" spotlightColor="rgba(100, 255, 150, 0.5)">
  <h1 className="text-2xl font-semibold mb-4 text-center">Get to Know Me</h1>
<div className="space-y-3 text-lg text-justify leading-relaxed">
  <p>
    I'm <span className="font-medium text-blue-600">Naivedya</span>, a Computer Science undergraduate at <strong>NIT Mizoram</strong> (2022–26). I'm passionate about web development, AI, and building impactful full-stack applications.
  </p>
<p>
  I love solving DSA problems and bringing ideas to life through full-stack web development. Exploring clean UI design, optimizing backend logic, and learning new technologies keeps me excited and constantly improving.
</p>
</div>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card w-3/4" spotlightColor="rgba(0, 29, 255, 0.4)">
          <div >
            <h2 className="text-xl font-bold mb-8">🎓 Education</h2>
            <div className='flex gap-x-2'>
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
                  <div className="p-4 bg-white/80 rounded-md shadow-md backdrop-blur-sm text-black w-[280px]">
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
                  <div className="p-4 bg-white/80 rounded-md shadow-md backdrop-blur-sm text-black w-[280px]">
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
                  <div className="p-4 bg-white/80 rounded-md shadow-md backdrop-blur-sm text-black w-[280px]">
                    <h3 className="text-lg font-bold">Secondary Education</h3>
                    <p className="text-sm mt-1">Sterling School, Babatpur, Varanasi (CBSE)</p>
                    <p className="text-sm">Percentage: 91.2</p>
                    <p className="text-sm">2018 – 2019</p>
                  </div>
                }
              />

            </div>
          </div>
        </SpotlightCard>
      </div>


    </div>
  )
}

export default About