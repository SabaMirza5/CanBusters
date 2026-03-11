
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

import { FaTruck } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import glow from "/glow.png";

const features = [
  {
    icon: (
      <FaTruck className=" text-3xl p-4 w-16 h-16 bg-gradient-to-b from-[#97CA09] to-[#5f8005] rounded-full" />
    ),
    title: "Fast Pickup",
    description:
      "Schedule your garbage can pickup and our team will arrive on time to collect and remove your bins efficiently, ensuring a hassle-free experience.",
  },
  {
    icon: (
      <FaCalendarCheck className=" text-3xl p-4 w-16 h-16 bg-gradient-to-b from-[#97CA09] to-[#5f8005] rounded-full" />
    ),
    title: "Easy Scheduling",
    description:
      "Select the date and time that works best for you. Our online booking form makes scheduling your garbage pickup quick and convenient.",
  },
  {
    icon: (
      <FaSmile className=" text-3xl p-4 w-16 h-16 bg-gradient-to-b from-[#97CA09] to-[#5f8005] rounded-full" />
    ),
    title: "Customer Satisfaction",
    description:
      "We take pride in keeping your bins clean and your home environment fresh. Our team ensures a professional, friendly, and reliable service every time.",
  },
  {
    icon: (
      <GiBinoculars className=" text-3xl p-4 w-16 h-16 bg-gradient-to-b from-[#97CA09] to-[#5f8005] rounded-full" />
    ),
    title: "Reliable Service",
    description:
      "Our trained staff follows a systematic process to collect, clean, and remove bins efficiently, making sure nothing is overlooked.",
  },
];

export default function WhyChooseUs() {
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

  return (
    <section ref={sectionRef} className="p-[5%]">
      <div className="relative">
        <motion.img
          src={glow}
          alt=""
          variants={glowAnimation}
          initial="initial"
          animate="animate"
          className="absolute xl:-left-20 xl:top-52 lg:-left-20 lg:top-64 -left-10 -top-8"
        />
      </div>

      <div className="flex justify-between items-center gap-10 lg:flex-row flex-col">
        <div className="text-left lg:w-[45%] w-full z-20">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:text-2xl md:text-3xl montserrat text-2xl xl:text-4xl font-bold text-gray-800 md:mb-4 mb-2"
          >
            Why <span className="text-primary">Choose Us</span>
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-text-color xl:mt-6 mt-3 2xl:leading-9 md:leading-8 leading-7 md:text-base text-sm"
          >
            Our garbage can removal service is dedicated to keeping your home and
            business environments clean and hygienic. We offer fast pickups,
            easy scheduling, and a professional, friendly team that ensures your
            bins are collected and maintained efficiently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-[55%] w-full">
          <motion.div className="space-y-6 w-full">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
               <div className="card p-5 space-y-2 text-center bg-gradient-to-b from-[#97CA09] to-[#5f8005] text-white rounded-2xl transition-all">
  <div className="flex justify-center items-center rounded-full">
    {feature.icon}
  </div>
  <div className="text-xl font-semibold montserrat">{feature.title}</div>
  <p className="2xl:text-lg md:text-sm text-xs 2xl:leading-9 md:leading-7 leading-6 font-normal text-[#E8E7EB]">
    {feature.description}
  </p>
</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="space-y-6 md:mt-20 w-full">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
               <div className="card p-5 space-y-2 text-center bg-gradient-to-b from-[#97CA09] to-[#5f8005] text-white rounded-2xl transition-all">
  <div className="flex justify-center items-center rounded-full">
    {feature.icon}
  </div>
  <div className="text-xl font-semibold montserrat">{feature.title}</div>
  <p className="2xl:text-lg md:text-sm text-xs 2xl:leading-9 md:leading-7 leading-6 font-normal text-[#E8E7EB]">
    {feature.description}
  </p>
</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}