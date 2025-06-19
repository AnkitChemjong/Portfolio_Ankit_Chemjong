import React, { useState } from "react";
import ScrollInToView from "@/Service/ScrollInToView";
import { motion, useScroll, useTransform } from "framer-motion";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const navLinks = [
    { name: "Home", link: "nav" },
    { name: "About", link: "bio" },
    { name: "Skills", link: "skill" },
    { name: "Resume", link: "resume" },
    { name: "Project", link: "project" },
    { name: "Contact", link: "contact" },
  ];

  // State to toggle menu visibility
  const [showMenu, setShowMenu] = useState(false);

  const TogglMenu = () => (
    <motion.div
      initial={{ right: -200, top: 80, opacity: 0 }}
      animate={{ right: 10, top: 80, opacity: 1 }}
      exit={{ right: -200, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="fixed flex flex-col space-y-1 items-start w-fit h-fit py-4 px-6 bg-blue-500 rounded-3xl z-20"
    >
      {navLinks.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            ScrollInToView(item.link);
            setShowMenu(false); 
          }}
          className="font-bold text-white"
        >
          {item.name}
        </button>
      ))}
    </motion.div>
  );

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div id="nav" className="flex flex-col w-screen h-screen p-4 relative">
      <div className="z-10 fixed flex w-full h-fit px-10 md:px-20 py-4 justify-between items-center">
        <div className="-ml-5 md:ml-0">
          <h1 className="md:text-3xl text-2xl font-bold text-green-900">
            Ankit Chemjong
          </h1>
        </div>

        {/* Mobile menu icon */}
        <div className="grid md:hidden">
          <TiThMenu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>

        {/* Desktop menu */}
        <div className="gap-2 md:flex hidden">
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => ScrollInToView(item.link)}
              className="hover:text-blue-500 font-bold py-2 px-4 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Conditionally render menu on mobile */}
      {showMenu && <TogglMenu />}

      <div className="flex flex-col-reverse md:flex-row md:mt-0 mt-10 w-full h-3/4 items-center justify-evenly md:absolute md:bottom-20">
        <div className="w-fit h-fit p-4 space-y-4 ">
          <h1 className="text-3xl font-bold text-green-900">HI THERE,</h1>
          <h1 className="text-3xl font-bold ">I Am Web Developer |</h1>
          <p className="text-sm font-semibold leading-relaxed">
            I'm a passionate web developer who enjoys creating responsive,
            <br />
            user-friendly websites. I focus on writing clean code,
            <br />
            solving real problems, and continuously learning to improve my
            skills.
          </p>
          <button
            onClick={() => ScrollInToView("contact")}
            className="py-2 px-4 bg-green-700 rounded-full border-2 border-b-blue-300 cursor-pointer hover:bg-amber-500 hover:scale-110 transition-all duration-200"
          >
            Hire Me
          </button>
        </div>
        <motion.div style={{ y }}>
          <motion.img
            src="./image/hi.png"
            alt="profile image"
            className="md:w-96 md:h-96"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
