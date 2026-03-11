"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaClock, FaLeaf, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function WhatYouWillFind() {
  const sectionRef = useRef(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const items = [
    {
      icon: FaClock,
      title: "Reliable & On-Time Service",
      desc: "Experience dependable garbage pickup that fits your schedule. Our team ensures timely service so your bins are always handled efficiently without delays or missed collections.",
    },
    {
      icon: FaLeaf,
      title: "Clean & Hygienic Environment",
      desc: "We focus on maintaining a clean and fresh environment around your home or business. Our service helps eliminate odors, prevent mess, and keep your surroundings hygienic.",
    },
    {
      icon: FaShieldAlt,
      title: "Safe & Professional Handling",
      desc: "Our trained team follows professional waste handling practices to ensure your bins are collected and cleaned safely while maintaining the highest sanitation standards.",
    },
    {
      icon: FaUsers,
      title: "Customer-Focused Experience",
      desc: "We prioritize customer satisfaction by offering friendly service, flexible scheduling, and reliable support to ensure your waste management needs are always met.",
    },
  ];

  return (
    <section ref={sectionRef} className="p-[5%] bg-secondary text-white">
      <div className="text-left">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:text-2xl montserrat md:text-3xl text-2xl md:mt-0 mt-5 xl:text-4xl font-bold md:mb-4 mb-2 text-primary"
        >
          What You'll Find
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-3 2xl:leading-9 md:leading-8 leading-6 md:text-base text-sm"
        >
          Discover the benefits of choosing Can Busters for your garbage
          management needs. Our services are designed to provide convenience,
          cleanliness, and reliability.
         
          Experience a professional approach to waste pickup that keeps your
          surroundings fresh and worry-free.
        </motion.p>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3 w-full mt-7">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className="relative group text-white rounded-xl md:p-5 p-3 overflow-hidden
                transition-all duration-500 bg-opacity-90"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                ></div>

                <div
                  className="absolute top-0 left-0 w-0 h-full bg-gradient-to-b from-[#97CA09] to-[#5f8005]
                  group-hover:w-full transition-all duration-700 ease-out rotate-180 pointer-events-none"
                ></div>

                <div className="relative space-y-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Icon className="text-4xl text-primary" />

                  <div className="text-lg font-semibold text-white montserrat">
                    {item.title}
                  </div>

                  <p className="2xl:text-lg md:text-sm text-xs 2xl:leading-9 md:leading-7 leading-6 font-normal text-[#DEDEDE]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
