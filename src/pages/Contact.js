import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sent = () =>
    toast.success("Message sent successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const failed = () =>
    toast.error("Failed to send message, please try again...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const emptyDetails = () =>
    toast.error("Please fill in all details before submitting", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      emptyDetails();
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            sent();
          },
          (error) => {
            console.log(error.text);
            failed();
          }
        );
    }
    setEmail("");
    setName("");
    setMessage("");
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  return (
    <>
      <div
        class="flex flex-col justify-center text-center h-screen"
        id="contact"
      >
        <h1 class="mb-6 font-bold text-4xl tracking-widest text-center">
          Contact Me
        </h1>
        <form
          ref={form}
          onSubmit={handleSubmit}
          class="flex flex-col w-screen sm:px-5 md:px-20 lg:px-40"
        >
          <input
            name="user_name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={handleNameChange}
            class="p-2 m-2 rounded-sm bg-slate-100"
          />
          <input
            name="user_email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
            class="p-2 m-2 rounded-sm bg-slate-100"
          />
          <textarea
            name="message"
            value={message}
            placeholder="Message"
            onChange={handleMessageChange}
            class="p-2 m-2 rounded-sm bg-slate-100"
            rows="5"
            cols="50"
          ></textarea>
          <button
            type="submit"
            class="rounded-lg bg-blue-100 p-2 m-auto font-bol w-20 font-bold hover:bg-blue-200"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Contact;
