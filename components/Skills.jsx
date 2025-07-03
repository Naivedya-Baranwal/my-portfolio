import React from 'react'
import SpotlightCard from './animations/SpotlightCard';
import SkillItem from './animations/SkilItem';

const Skills = () => {
  return (
    <div className='text-center mb-36'>
      <h1 className='text-4xl font-bold pb-2 mb-8'>Skills</h1>

      <div className='flex gap-x-4 mx-4'>
        <SpotlightCard className="custom-spotlight-card w-1/4 transition transform hover:scale-104 duration-300" spotlightColor="rgba(130, 29, 255, 0.3)">
          <div>
            <h1 className='text-2xl font-bold mb-4'>Languages</h1>
                <SkillItem icon="/skillsLogos/language/java.svg" label="JAVA" percent={90} />
                <SkillItem icon="/skillsLogos/language/python.svg" label="PYTHON" percent={70} />
                <SkillItem icon="/skillsLogos/language/javascript.svg" label="JAVASCRIPT" percent={70} />
                <SkillItem icon="/skillsLogos/language/c-programming.svg" label="C" percent={60} />
                <SkillItem icon="/skillsLogos/language/c++.svg" label="CPP" percent={40} />
          </div>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card w-1/2 transition transform-3d hover:scale-104 duration-300" spotlightColor="rgba(130, 29, 255, 0.3)">
          <div>
            <h1 className='text-2xl font-bold mb-4'>Web Development</h1>
            <div className='flex justify-around mt-4'>
              <div className='w-2/5'>
                <h1 className='text-xl font-bold mb-3'>Frontend</h1>
                <SkillItem icon="/skillsLogos/WebDev/html.svg" label="HTML" percent={90} />
                <SkillItem icon="/skillsLogos/WebDev/css.svg" label="CSS" percent={90} />
                <SkillItem icon="/skillsLogos/WebDev/javascript.svg" label="Javascript" percent={70} />
                <SkillItem icon="/skillsLogos/WebDev/react.svg" label="React.js" percent={80} />
                <SkillItem icon="/skillsLogos/WebDev/nextjs.svg" label="Next.js" percent={70} />
                <SkillItem icon="/skillsLogos/WebDev/tailwind-css.svg" label="Tailwind CSS" percent={90} />

              </div>
              <div className='w-2/5'>
                <h1 className='text-xl font-bold mb-3'>Backend</h1>
                <SkillItem icon="/skillsLogos/WebDev/node.svg" label="Node.js" percent={65} />
                <SkillItem icon="/skillsLogos/WebDev/express.svg" label="Express.js" percent={65} />
                <SkillItem icon="/skillsLogos/WebDev/mongodb.svg" label="MongoDB" percent={70} />
                <SkillItem icon="/skillsLogos/WebDev/mysql.svg" label="MySQL" percent={60} />
                <SkillItem icon="/skillsLogos/WebDev/authentication.svg" label="Auth (JWT+bcrypt)" percent={80} />
                <SkillItem icon="/skillsLogos/WebDev/render.svg" label="Render" percent={70} />
              </div>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card w-1/4 transition transform-3d hover:scale-104 duration-300" spotlightColor="rgba(130, 29, 255, 0.3)">
          <div >
            <h1 className='text-2xl font-bold mb-4'>Tools & Libraries</h1>
                <SkillItem icon="/skillsLogos/tools/git.svg" label="Git & GitHub" percent={75} />
                <SkillItem icon="/skillsLogos/tools/vs-code.svg" label="VS Code" percent={90} />
                <SkillItem icon="/skillsLogos/tools/postman.svg" label="Postman" percent={80} />
                <SkillItem icon="/skillsLogos/tools/Vercel_deploy.svg" label="Vercel" percent={70} />
                <SkillItem icon="/skillsLogos/tools/figma.svg" label="Figma" percent={65} />
          </div>
        </SpotlightCard>
      </div>
    </div>
  )
}

export default Skills