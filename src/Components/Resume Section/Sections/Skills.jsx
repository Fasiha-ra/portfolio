// eslint-disable-next-line no-unused-vars
import React from "react";

const Skills = () => {
  const skills = [
    { name: "Front-End with React", percentage: 94 },
    { name: "NextJS Development", percentage: 92 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "Styled-Components", percentage: 80 },
    { name: "MUI", percentage: 75 },
    { name: "Tailwind", percentage: 75 },
    { name: "Ant Design", percentage: 60 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-between gap-20">
      {/* Skill Icons Section */}
      <div className="hidden lg:inline-block lg:min-w-[40%]">
        {skills.map((skill) => (
          <div className="flex items-center gap-10 text-white text-xl font-bold my-6" key={skill.name}>
            <div className="w-16 h-16 rounded-full bg-dark-blue flex items-center justify-center">
              {/* Replace with actual icons or images */}
              <span className="text-2xl">{skill.name[0]}</span>
            </div>
            <h1>{skill.name}</h1>
          </div>
        ))}
      </div>
      {/* Progress Bars Section */}
      <div className="flex-1 flex flex-col gap-14">
        {skills.map((skill) => (
          <div className="flex items-center justify-center gap-5" key={skill.name}>
            <span className="text-white font-bold text-2xl xs:text-3xl">
              {skill.percentage}%
            </span>
            <div className="relative w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-light-pink rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
              <h1 className="text-white absolute lg:hidden block -top-6 xs:text-sm text-xs">
                {skill.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
