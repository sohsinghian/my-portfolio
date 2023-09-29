import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer class="bg-slate-200" id="contact">
        <div class="flex justify-between max-w-[300px] m-auto items-center py-4">
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
        <p class="m-auto text-sm sm:text-xs w-full text-center p-5">
          Copyright &copy;2023 Soh Sing Hian. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
