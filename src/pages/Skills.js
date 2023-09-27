import React from "react";
import IndividualSkill from "../components/IndividualSkill";
import css from "../images/css.png";
import avaloq from "../images/avaloq.png";
import html from "../images/html.png";
import js from "../images/javascript.png";
import mongodb from "../images/mongodb.png";
import react from "../images/react.png";
import express from "../images/express.png";
import node from "../images/node.png";
import pgsql from "../images/pgsql.png";
import github from "../images/github-icon.png";
import plsql from "../images/plsql.png";
import python from "../images/python.png";

const Skills = () => {
  return (
    <>
      <section
        class="flex flex-col sm:justify-start sm:h-full md:justify-center md:h-screen lg:justify-center lg:h-screen text-center px-10"
        id="skills"
      >
        <p class="mb-6 font-bold text-4xl tracking-widest text-center">
          Skills
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <IndividualSkill src={html} name="HTML" />
          <IndividualSkill src={css} name="CSS" />
          <IndividualSkill src={js} name="Javascript" />
          <IndividualSkill src={mongodb} name="MongoDB" />
          <IndividualSkill src={react} name="React.js" />
          <IndividualSkill src={express} name="Express.js" />
          <IndividualSkill src={node} name="Node.js" />
          <IndividualSkill src={pgsql} name="PostgreSQL" />
          <IndividualSkill src={github} name="Github" />
          <IndividualSkill src={avaloq} name="Avaloq" />
          <IndividualSkill src={plsql} name="PL/SQL" />
          <IndividualSkill src={python} name="Python" />
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Skills;
