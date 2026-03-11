import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import web_logo from "/web_logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import AuthPage from "../Auth/AuthPage";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const logoVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about-us" },
    { label: "Services ", path: "/services" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <motion.nav
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center  justify-between w-full md:px-5 px-3 md:py-4 py-3 fixed top-0 left-0 z-50  shadow-md bg-white"
      >
        <motion.div variants={logoVariants} initial="hidden" animate="visible">
          <Link to="/">
            <img
              src={web_logo}
              alt="Logo of CanBuster"
              className="md:w-20 w-16"
            />
          </Link>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center lg:space-x-8 font-normal capitalize text-text-color text-base "
        >
          {menuItems.map((item) => (
            <li key={item.path} className="relative group">
              <NavLink
                to={item.path || "#"}
                onClick={(e) => {
                  if (item.label === "Create Post") {
                    e.preventDefault();
                    setCreatePostOpen(true);
                  }
                }}
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    item.label === "Create Post"
                      ? "text-black font-semibold"
                      : isActive
                        ? "text-primary"
                        : "hover:text-primary"
                  }`
                }
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2"
        >
          <motion.button
            onClick={() => {
              setAuthMode("signup");
              setAuthOpen(true);
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-1 border rounded-2xl text-white py-2 px-4 bg-gradient-to-b from-[#97CA09] to-[#5f8005]"
          >
            Book Now
          </motion.button>

          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden"
            >
              <ul className="flex flex-col p-5 text-text-color items-center py-5 space-y-4 text-base font-montserrat">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={(e) => {
                        if (item.label === "Create Post") {
                          e.preventDefault();
                          setCreatePostOpen(true);
                          setIsOpen(false);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className={`transition-all cursor-pointer ${
                        item.label === "Create Post"
                          ? "text-primary font-semibold"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <motion.button
                  onClick={() => {
                    setAuthMode("signup");
                    setAuthOpen(true);
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className=" lg:flex md:hidden flex  md:w-auto justify-center text-center w-full items-center gap-1 bg-gradient-to-b from-[#97CA09] to-[#5f8005] text-white px-4 py-2 rounded-2xl"
                >
                  Book Now
                </motion.button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <AuthPage
        isOpen={authOpen}
        defaultMode={authMode}
        onClose={() => setAuthOpen(false)}
      />

    
    </>
  );
}
