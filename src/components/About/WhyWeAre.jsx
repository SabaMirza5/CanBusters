import React, { useRef } from "react";
import { motion } from "framer-motion";
import Vector from "/Vector.png";
import { FaUsers, FaHandsHelping, FaBell } from "react-icons/fa";

export default function WhyWeAre() {
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
      icon: FaUsers,
      title: "Engage with Student",
      desc: " Join a growing student network from across South Africa, where voices are heard and experiences are shared. Whether you need academic advice or inspiration from real success stories, support is always just a message away.",
    },
    {
      icon: FaHandsHelping,
      title: "Get Advice and Support",
      desc: "Whether you're overwhelmed by the OurNSFAS process, unsure about eligibility or just need honest advice — our student community is here for you. From answering questions to sharing practical tips, this space is built to support and uplift.",
    },
    {
      icon: FaBell,
      title: "Stay Informed and Empowered",
      desc: "Never miss an important update — from OurNSFAS policy changes and  finding new opportunities and student programs. Stay informed, be prepared, and make confident decisions that shape your academic journey.",
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
            Why OurNSFAS Student Support Group{" "}
            <span className="text-blue-500">Forum?</span>
          </motion.h3>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:mt-6 mt-3 2xl:leading-9 md:leading-8 leading-6 md:text-base text-sm text-text-color"
        >
          Get real advice, helpful resources, and emotional support from
          students just like you — <br className="lg:block hidden" /> no more
          guessing through your OurNSFAS process.
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
                className="absolute top-0  rounded-xl left-0 w-0 h-full bg-gradient-to-t hover:text-white from-[#1A143A] to-[#2B8CFF] 
                  group-hover:w-full   group-hover:text-white  transition-all duration-700 ease-out rotate-180 pointer-events-none"
              ></div>

              <div className="relative space-y-2 transform  group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-[#EFF9FF] inline-flex items-center justify-center rounded-lg p-3">
                  <item.icon
                    size={37}
                    className="text-[#0F2C6D] group-hover:text-primary transition-colors duration-500"
                  />
                </div>

                <div className="text-xl font-semibold montserrat  group-hover:text-white font-inter text-[#0F2C6D] montserrat">
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
