import React from "react";

const Contact = () => {
  return (
    <>
      <div
        class="flex flex-col justify-center text-center h-screen bg-sky-200"
        id="contact"
      >
        <h1 class="mb-6 font-bold text-4xl tracking-widest text-center">
          Contact Me
        </h1>
        <form
          action=""
          class="flex flex-col w-screen sm:px-5 md:px-20 lg:px-40"
        >
          <input
            type="text"
            name=""
            value=""
            placeholder="Name"
            onChange=""
            class="p-2 m-2 rounded-sm"
          />
          <input
            type="email"
            name=""
            value=""
            placeholder="Email"
            onChange=""
            class="p-2 m-2 rounded-sm"
          />
          <textarea
            name="message"
            value=""
            placeholder="Message"
            onChange=""
            class="p-2 m-2 rounded-sm"
            rows="5"
            cols="50"
          ></textarea>
          <button type="submit" class="rounded-lg bg-blue-100 p-2 m-2">
            Submit
          </button>
          <button type="reset" class="rounded-lg bg-blue-100 p-2 m-2">
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
