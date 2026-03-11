import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import web_logo from "/web_logo.png"

import { motion } from "framer-motion";

function Footer() {
  const footerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const footerItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const linkHover = {
    hover: {
      x: 5,
      transition: { duration: 0.3 },
    },
  };

  const iconHover = {
    hover: {
      scale: 1.15,
      rotate: 3,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <>
      <motion.footer
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-b from-[#97CA09] to-[#5f8005] text-white border-t border-gray-200 md:p-10 p-5 "
      >
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-10 ">
          <motion.div
            variants={footerItem}
            className=" flex flex-col  text-left justify-center "
          >
            <div className="flex items-center gap-0 md:flex-row flex-col">
              <div className="">
                <img src={web_logo} alt=""  className="md:w-80 w-40"/>
              </div>
              <div className="">
            <h3 className="text-white capitalize md:text-xl  text-base font-bold">
             Can Busters
            </h3>
          
            <p className="md:text-sm text-xs text-white pt-1 font-normal">
              Where Hassle-Free Trash Day Meets Reliable Service, and Every Bin Gets Handled On Time!
            </p>
            </div>
            </div>
          </motion.div>

          <motion.div
            variants={footerItem}
            className="  flex md:items-center items-start flex-col"
          >
            <h3 className="md:text-xl text-base font-semibold  mb-3 relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-white rounded-full"></span>
            </h3>

            <ul className="space-y-2 mt-4 capitalize">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about-us" },
                { label: "services", to: "/forum" },
                { label: "Contact Us", to: "/contact-us" },
              ].map((item, index) => (
                <motion.li key={index} variants={linkHover} whileHover="hover">
                  <Link
                    to={item.to}
                    className="md:text-sm text-xs hover:text-white flex items-center gap-1"
                  >
                    <span className="text-white">›</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={footerItem}
            className="  flex items-start flex-col text-left "
          >
            <h3 className="md:text-xl text-base font-semibold text-left  mb-3 relative inline-block">
              Get In touch
              <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-white rounded-full"></span>
            </h3>

            <ul className="space-y-2 mt-4">
              {[
                { label: "Canbusters1@gmail.com", to: "" },
                { label: "www.canbusters", to: "/" },
                { label: "7808326800", to: "" },
              ].map((item, index) => (
                <motion.li key={index} variants={linkHover} whileHover="hover">
                  <Link
                    to={item.to}
                    className="md:text-sm text-xs hover:text-white flex items-center gap-1"
                  >
                    <span className="text-white">›</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-1">
              <h3 className="md:text-xl   text-base font-semibold   relative inline-block">
                Follow us on
                <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-white rounded-full"></span>
              </h3>
              <div className="flex items-center gap-3 text-2xl text-white mt-3 ">
                {[
                  FaFacebook,
                  FaSquareInstagram,
                  AiFillTwitterCircle,
                  IoLogoWhatsapp,
                ].map((Icon, index) => (
                  <motion.div
                    key={index}
                    variants={iconHover}
                    whileHover="hover"
                    className="cursor-pointer"
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
      <div className="bg-white p-2">
        <h3 className="text-black text-center montserrat md:text-base text-xs">
          Copyright © {new Date().getFullYear()} | Can Busters
        </h3>
      </div>
    </>
  );
}

export default Footer;
