import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeNavbarBg = () => {
    if (window.scrollY >= 90) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  const activeClass =
    "py-3 px-4 font-light hover:text-red-400 hover:font-bold transition duration-500 text-white font-bold";

  const menuItems = (
    <div className="hidden md:flex flex-col md:flex-row bg-[#a55eea] rounded-full md:relative">
      <NavLink exact to="/" className={activeClass}>
        HOME
      </NavLink>
      <NavLink to="/skills" className={activeClass}>
        SKILLS
      </NavLink>
      <NavLink to="/projects" className={activeClass}>
        PROJECTS
      </NavLink>
    </div>
  );

  return (
    <div>
      <motion.div
        initial={{
          y: 0,
          paddingTop: 20,
          paddingBottom: 20,
        }}
        animate={{
          y: navbarBg ? 20 : 0,
          position: "fixed",
          paddingRight: navbarBg ? 20 : 15,
          paddingLeft: navbarBg ? 20 : 15,
          paddingTop: navbarBg ? 15 : 20,
          paddingBottom: navbarBg ? 15 : 20,
        }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className={`${
          navbarBg ? "backdrop-filter border-b-0 backdrop-blur-lg" : "bg-white"
        } flex z-10 justify-between items-center sticky border-b border-black text-xl w-full font-bold mb-12`}
      >
        <div className="font-bold text-[25px] md:text-[40px]">
          <span className="font-thin">J</span>a
          <span className="font-thin text-orange-500">m</span>
          <span className="font-thin text-blue-500">a</span>n
        </div>
        <div className="md:flex md:gap-4 items-center">{menuItems}</div>
        <div className="flex gap-2 items-center md:hidden">
          <RxHamburgerMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-bold text-3xl cursor-pointer"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-[#a55eea] flex flex-col items-center justify-center md:hidden"
          >
            <NavLink
              onClick={() => setMenuOpen(!menuOpen)}
              exact
              to="/"
              className={activeClass}
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(!menuOpen)}
              to="/skills"
              className={activeClass}
            >
              SKILLS
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(!menuOpen)}
              to="/projects"
              className={activeClass}
            >
              PROJECTS
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
