import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 mt-4 text-white py-8 px-6 flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-sm">&copy; 2024 Jaman Shah. All rights reserved.</p>
        <p className="text-sm">Designed with ❤️</p>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/Jaman-Shah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl hover:text-gray-400 cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com/in/jamanshah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl hover:text-gray-400 cursor-pointer" />
        </a>
        <a
          href="https://facebook.com/jamanshah5400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-3xl hover:text-gray-400 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
