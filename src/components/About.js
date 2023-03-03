import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-2">
          I am a highly skilled full-stack developer with a Degree of Master's
          in Computer Applications and over 2 years of experience in software
          development. My passion lies in front-end development, and I enjoy
          transforming designs into functional and visually appealing web pages
          and applications with implementation of responsive designs.
        </p>
        <br />
        <p className="hidden md:block text-xl">
          With a keen eye for detail and a deep understanding of various
          front-end technologies such as HTML, CSS, JavaScript, and jQuery, I am
          proficient in working with popular front-end framework like React.js.
          I am also experienced in using tools like Git for project management.
        </p>
        <br />
        {/* <p className="text-xl">
          I have excellent communication skills and work well in a team
          environment. I am always eager to learn and am constantly updating my
          skills to keep up with the latest developments in the industry.
          Overall, I am a dedicated and talented full-stack developer with a
          strong passion for front-end development, and my skills and experience
          make me a valuable asset to any team.
        </p> */}
      </div>
    </div>
  );
};

export default About;
