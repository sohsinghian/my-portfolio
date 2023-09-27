import React from "react";
import email from "../images/email-icon.png";
import linkedin from "../images/linkedin-icon.png";
import github from "../images/github-icon.png";

const Footer = () => {
  return (
    <>
      <p className="text-center m-auto max-w-[330px] pt-8">Contact Me!</p>
      <div
        className="flex items-center justify-between m-auto max-w-[330px] py-8"
        id="contact"
      >
        <a href="mailto:sohsinghian@gmail.com">
          <img src={email} alt="email" width="30" height="30" />
        </a>
        <a href="https://www.linkedin.com/in/sohsinghian/">
          <img src={linkedin} alt="linkedin" width="30" height="30" />
        </a>
        <a href="https://github.com/sohsinghian">
          <img src={github} alt="github" width="30" height="30" />
        </a>
      </div>
    </>
  );
};

export default Footer;
