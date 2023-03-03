import React from "react";
import SocialLinksMobile from "./SocialLinksMobile";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-16 md:h-screen md:pt-16 lg:pt-0"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full max-h-max">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/09a20124-dd9b-499b-8263-4b46b3be69b8"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-cyan-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <SocialLinksMobile />
      </div>
    </div>
  );
};

export default Contact;
