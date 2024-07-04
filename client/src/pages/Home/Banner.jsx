import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import pdf from "/resume/Jaman_Shah_Resume.pdf"; // Update this path to your actual PDF file

const Banner = () => {
  //social media profile URLs
  const githubUrl = "https://github.com/jaman-shah";
  const linkedinUrl = "https://www.linkedin.com/in/jamanshah";
  const facebookUrl = "https://facebook.com/jamanshah5400";

  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 p-4 mt-24">
      {/* left side */}
      <div className="w-full md:w-1/2">
        <div className="text-center">
          <div className="border-b pb-4 border-black mb-4">
            <h1 className="font-light text-[50px]">Hi, </h1>
            <h1 className="text-[50px]">
              I am <span className="text-blue-400 font-thin">Jaman Shah</span>
            </h1>
            <h1 className="font-thin text-4xl">
              <span className="font-thin">A Junior</span> Web{" "}
              <span className="text-orange-500 font-normal">Developer</span>
            </h1>
          </div>
          <div className="border-b pb-4">
            <h1>Studying BSS Honours, Political Science</h1>
            <h1>at Jagannath University</h1>
            <h1 className="font-bold">Dhaka, Bangladesh</h1>
          </div>
          <div className="font-normal">
            <p>Self Learner, </p>
            <p>Learning New Technologies is my passion.</p>
            <p>Passionate about becoming a software engineer in future.</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mt-3">Proficient in:</h1>
            <div className="flex justify-center gap-4 py-2">
              <img src="/images/react.png" alt="React" className="h-12 w-12" />
              <img src="/images/node.png" alt="Node" className="h-12 w-12" />
              <img
                src="/images/tailwind.png"
                alt="Tailwind"
                className="h-12 w-12"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <a
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href={pdf}
              target="_blank"
              download="Jaman_Shah_Resume.pdf"
              rel="noreferrer"
            >
              <div className="flex items-center">
                <BsDownload className="mr-2" />
                <h3>DOWNLOAD RESUME</h3>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="w-full md:w-1/2 border-b-[5px] md:border-b-0 md:border-l-[5px] pb-4 border-orange-500">
        <div className="flex flex-col p-4">
          <div
            className="h-[500px] bg-cover bg-top p-2 rounded-3xl"
            style={{
              backgroundImage: `url("/images/profile.jpg")`,
            }}
          ></div>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-black cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-500 cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 cursor-pointer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
