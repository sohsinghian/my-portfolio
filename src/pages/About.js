import React from "react";

const About = () => {
  return (
    <>
      <section
        class="h-screen flex flex-col justify-center text-center p-10"
        id="about"
      >
        <h1 class="font-bold text-4xl tracking-widest">About</h1>
        <br />
        <p class="text-md md:text-lg lg:text-xl py-1">
          I am a career switcher from the education to the tech industry.
        </p>
        <p class="text-md md:text-lg lg:text-xl py-1">
          I believe in building elegant software and writing codes that makes
          sense and is easy to read.
        </p>
        <p class="text-md md:text-lg lg:text-xl py-1">
          I enjoy the thought process in coding and is always looking to learn
          new skills to better myself.
        </p>
      </section>
    </>
  );
};

export default About;
