import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at
          provident debitis minus vero voluptatem voluptas, cupiditate, corrupti
          tenetur, enim blanditiis amet ratione. Minus necessitatibus quidem
          maiores omnis, exercitationem repudiandae sit, recusandae facere
          pariatur sint et dolorum sunt laborum odit hic saepe numquam. Maxime
          aut excepturi quo eum? Explicabo, labore?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente
          accusamus, culpa perspiciatis dicta officiis nihil sint alias delectus
          quia autem assumenda. Quidem sed placeat commodi, suscipit, similique
          velit repudiandae sapiente qui fuga nam beatae sit sequi earum
          doloremque quisquam ipsam alias minima itaque molestias illo autem,
          quod natus? Consequuntur?
        </p>
      </div>
    </div>
  );
};

export default About;
