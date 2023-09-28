import React from "react";
// import email from "../images/email-icon.png";
// import linkedin from "../images/linkedin-icon.png";
// import github from "../images/github-icon.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer class="bg-blue-200" id="contact">
        <div class="flex justify-between w-1/2 m-auto items-center py-4">
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
        <div class="m-auto text-sm sm:text-xs w-full text-center p-5">
          Copyright &copy;2023 Soh Sing Hian. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
