import React from "react";

import todo from "../assets/portfolio/todo.png";
import photoGallary from "../assets/portfolio/photogallary.png";

// import weathervjs from "../assets/portfolio/weathervjs.png";
import responsive from "../assets/portfolio/responsive.png";
import techblog from "../assets/portfolio/techblogs.png";
import netflix from "../assets/portfolio/netflixCoverr.png";
import youtube from "../assets/portfolio/youtube.png";

const Portfolio = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   src: weathervjs,
    //   href1: "https://my-weather-app-06.netlify.app",
    //   href2: "https://github.com/Shubhamdeulkar06/weatherApp",
    // },
    {
      id: 2,
      src: photoGallary,
      href1: "https://photo-gallary-06.netlify.app",
      href2: "https://github.com/Shubhamdeulkar06/photo-gallary",
      status: "Project Complete",
    },
    {
      id: 3,
      src: todo,
      href1: "https://simple-todo-list-react-js.netlify.app/",
      href2: "https://github.com/Shubhamdeulkar06/todo-list",
      status: "Project Complete",
    },
    {
      id: 4,
      src: responsive,
      href1: "https://responsive-website-dev06.netlify.app/",
      href2: "https://github.com/Shubhamdeulkar06/responsive-ui-01",
      status: "Project Complete",
    },
    {
      id: 5,
      src: techblog,
      href1: "https://techblogs-dev06.netlify.app/",
      href2: "https://github.com/Shubhamdeulkar06/techBlog",
      status: "Project Complete",
    },
    {
      id: 6,
      src: netflix,
      href1: "https://chillflix-dev06.netlify.app/",
      href2: "https://github.com/Shubhamdeulkar06/netflix-react",
      status: "Working on this project",
    },
    {
      id: 7,
      src: youtube,
      href1: "https://my-youtube-dev06.netlify.app//",
      href2: "https://github.com/Shubhamdeulkar06/youtube-react",
      status: "Working on this project",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-24 md:mt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my work</p>
        </div>
        <div className="px-1 grid sm:grid-cols-2 md:grid-cols-3 gap-8  ">
          {portfolios.map(({ id, src, href1, href2, status }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
              title={status}
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={href1}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={href2}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
