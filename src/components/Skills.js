import React from "react";
import IndividualSkill from "./IndividualSkill";
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

const Skills = () => {
  return (
    <>
      <div className="w-full lg:h-screen p-2" id="skills">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="pb-2 font-bold text-5xl tracking-widest text-center">
            Skills
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <IndividualSkill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
