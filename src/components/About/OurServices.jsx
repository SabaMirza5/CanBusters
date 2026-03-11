import React, { useRef } from "react";
import { motion } from "framer-motion";
import Vector from "/Vector.png";
import { FaHome, FaSprayCan, FaBuilding } from "react-icons/fa";

export default function OurServices() {
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
  const glowAnimation = {
    initial: { opacity: 0.8, scale: 1 },
    animate: {
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


const items = [
  {
    icon: FaHome,
    title: "Residential Pickup",
    desc: "Fast and reliable garbage can collection for homes, ensuring your bins are always clean, hygienic, and odor-free. Our team handles every pickup professionally and on time, giving you peace of mind.",
  },
  {
    icon: FaBuilding,
    title: "Commercial Pickup",
    desc: "Professional garbage removal services for offices, shops, and businesses. We maintain a clean and healthy environment for staff and customers by collecting and managing waste efficiently and responsibly.",
  },
  {
    icon: FaSprayCan,
    title: "Bin Cleaning & Sanitization",
    desc: "Our team thoroughly cleans and sanitizes your garbage bins regularly, removing unpleasant odors and bacteria. We help maintain a fresh, hygienic property for your home or business, every time.",
  },
];
  return (
    <section ref={sectionRef} className=" p-[5%]  bg-white text-black">
      <div className="text-center ">
        <div className="flex items-center justify-center relative w-full">
          <motion.img
            src={Vector}
            alt=""
            variants={glowAnimation}
            initial="initial"
            animate="animate"
            className="w-20 h-20 absolute  left-[28%] -translate-x-1/2 z-0 "
          />

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:text-2xl md:text-3xl montserrat  text-2xl xl:text-4xl font-bold text-center z-10 relative"
          >
            Why Can Busters
            <span className="text-primary"> Services?</span>
          </motion.h3>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:mt-6 mt-3 2xl:leading-9 md:leading-8 leading-6 md:text-base text-sm text-text-color"
        >
         Get fast and reliable garbage can pickup, professional bin cleaning, and effective pest & odor control — <br className="lg:block hidden" /> keeping your home or business fresh and hygienic.
        </motion.p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:p-3 p-0 w-full mt-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="relative h-full text-left group card rounded-xl md:p-5 p-3 
             bg-white transition-all duration-500
             shadow-[0_10px_20px_rgba(15,44,109,0.15),0_20px_40px_rgba(15,44,109,0.1)]
             hover:shadow-[0_15px_30px_rgba(15,44,109,0.2),0_25px_50px_rgba(15,44,109,0.15)]
             text-black"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
              ></div>

              <div
                className="absolute top-0  rounded-xl left-0 w-0 h-full  hover:text-white bg-gradient-to-b from-[#97CA09] to-[#5f8005] 
                  group-hover:w-full   group-hover:text-white  transition-all duration-700 ease-out rotate-180 pointer-events-none"
              ></div>

              <div className="relative space-y-2 transform  group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-[#EFF9FF] inline-flex items-center justify-center rounded-lg p-3">
                  <item.icon
                    size={37}
                    className="text-primary group-hover:text-primary transition-colors duration-500"
                  />
                </div>

                <div className="text-xl font-semibold montserrat  group-hover:text-white font-inter text-primary montserrat">
                  {item.title}
                </div>

                <p className="2xl:text-lg md:text-sm text-xs 2xl:leading-9 md:leading-7 leading-6 font-normal text-text-color group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
