import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 p-4 ">
      {/* left side  */}
      <div className=" w-full md:w-1/2">
        <div className="text-center">
          <div className="border-b pb-4 border-black mb-4">
            <h1 className="font-bold text-4xl">Hi, </h1>
            <h1 className="text-[50px] ">
              I am <span className="text-blue-400 font-thin">Jaman Shah</span>
            </h1>
            <h1 className="font-bold text-4xl ">
              Web <span className="text-orange-500 font-normal">Developer</span>
            </h1>
          </div>
          <div className="font-normal">
            <p>Self Learner, </p>
            <p>Learning New Technologies is my passion.</p>
            <p>Passionate about becoming a software engineer in future.</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mt-3">Proficient in:</h1>
            <div className="flex justify-center gap-4 py-2">
              <img
                src="../../../public/images/react.png"
                alt="React"
                className="h-12 w-12"
              />
              <img
                src="../../../public/images/node.png"
                alt="Node"
                className="h-12 w-12"
              />
              <img
                src="../../../public/images/tailwind.png"
                alt="Tailwind"
                className="h-12 w-12"
              />
            </div>
          </div>
          <div>
            <button className="p-2 bg-blue-300 mt-2">Download Resume</button>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className="w-full md:w-1/2 border-b-[5px] md:border-b-0 md:border-l-[5px] pb-4 border-orange-500">
        <div className="flex flex-col p-4">
          <div
            className="h-[500px]  bg-cover bg-top p-2 rounded-3xl"
            style={{
              backgroundImage: `url("../../../public/images/profile.jpg")`,
            }}
          ></div>
          <div className="">
            <div className="flex justify-center gap-4 mt-4">
              <FaGithub className="text-3xl text-black cursor-pointer" />
              <FaLinkedin className="text-3xl text-blue-500 cursor-pointer" />
              <FaFacebook className="text-3xl text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
