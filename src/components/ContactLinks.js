import React from "react";
import email from "../images/email-icon.jpeg";
import linkedin from "../images/linkedin-icon.png";
import github from "../images/github-icon.jpeg";

const ContactLinks = () => {
  return (
    <>
      <div className="flex items-center justify-between m-auto max-w-[330px] py-8">
        <img src={email} alt="email" width="30" height="30" />
        <div className="rounded-full ">
          <img src={linkedin} alt="linkedin" width="30" height="30" />
        </div>
        <img src={github} alt="github" width="30" height="30" />
      </div>
    </>
  );
};

export default ContactLinks;
