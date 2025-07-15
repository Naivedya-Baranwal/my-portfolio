import React from 'react';
import experiences from '@/data/experience';
import ExperienceCard from '@/components/ExperienceCard';
import BlurText from '@/components/animations/BlurText'

const Experience = () => {
  return (
    <section className="text-center pb-16">
      <BlurText
        text="🧑‍💻 Experience"
        delay={10}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold m-auto w-fit mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 w-[100%] md:w-4/5 m-auto justify-items-center">
        {experiences.map((exp, index) => {
          const isLastOdd = experiences.length % 2 !== 0 && index === experiences.length - 1;
          const direction = isLastOdd
            ? 'center'
            : index % 2 === 0
              ? 'left'
              : 'right';
          return <ExperienceCard key={exp.id} experience={exp} direction={direction} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
