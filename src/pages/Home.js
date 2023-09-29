import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section class="h-screen flex flex-col justify-center text-center p-10 font-bold tracking-wide">
        <p class="text-5xl py-2 sm:text-3xl md:text-4xl">
          Hi, I'm <span class="text-sky-600">Sing Hian.</span>
        </p>
        <p class="text-3xl py-2 sm:text-xl md:text-2xl">
          I'm a Software Engineer.
        </p>
        <div>
          <div class="flex justify-between lg:w-1/3 max-w-[300px] m-auto items-center py-10">
            <a href="mailto:sohsinghian@gmail.com">
              <div class="rounded-full shadow-lg shadow-gray-400 bg-slate-100 p-4">
                <AiOutlineMail class="w-5 h-5" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sohsinghian/">
              <div class="rounded-full shadow-lg shadow-gray-400 bg-slate-100 p-4">
                <FaLinkedinIn class="w-5 h-5" />
              </div>
            </a>
            <a href="https://github.com/sohsinghian">
              <div class="rounded-full shadow-lg shadow-gray-400 bg-slate-100 p-4">
                <FaGithub class="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
