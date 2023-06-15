import React from "react";
import IndividualSkill from "./IndividualSkill";

const Skills = () => {
  return (
    <>
      <div className="text-center w-full h-screen bg-teal-100" id="skills">
        <p className="pt-48 mb-8 font-bold text-5xl">Skills</p>
        <p>
          HTML, CSS, Javascript, React.js, Express.js, Node.js, PostgreSQL,
          MongoDB, Github
        </p>
        <IndividualSkill />
      </div>
    </>
  );
};

export default Skills;
