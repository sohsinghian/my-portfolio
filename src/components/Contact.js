import React from "react";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <>
      <div className="text-center h-screen bg-sky-200" id="contact">
        <h1 className="pt-48 font-bold text-lg">Contact Me</h1>
        <ContactLinks />
      </div>
    </>
  );
};

export default Contact;
