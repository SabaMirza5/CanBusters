"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import glow from "/glow.png";
import AuthPage from "../Auth/AuthPage";

export default function Newsletter() {
  const sectionRef = useRef(null);
  const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState("login");

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
    <>
    
    
 
    <section ref={sectionRef} className="p-[5%] overflow-hidden my-10">
      <div className="relative md:block hidden">
        <motion.img
          src={glow}
          alt=""
          variants={glowAnimation}
          initial="initial"
          animate="animate"
          className="absolute xl:-left-20 lg:-left-20 lg:top-5 -left-10 -top-8"
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="relative w-full md:h-[420px] h-[380px] flex items-center justify-center rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/newsletterbg.jpg')] bg-cover bg-center bg-no-repeat"></div>

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-center text-white flex flex-col items-center justify-center md:gap-4 gap-2 md:px-6 px-3 w-full">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:text-2xl montserrat md:text-3xl text-xl xl:text-4xl font-bold"
            >
              Schedule Your Trash Can Service Today
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="2xl:leading-9 md:leading-8 leading-5 md:text-base text-sm"
            >
              Make trash day simple and stress-free with our fast and reliable garbage can pickup service.

              
              Choose a convenient time, <br className="lg:block hidden" /> and our professional team will take your bins to the curb and return them after pickup — no heavy lifting required.
            </motion.p>

            <motion.button
              onClick={() => {
                setAuthMode("signup");
                setAuthOpen(true);
              }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="shadow-md transition duration-300 rounded-2xl text-white py-2 px-4 capitalize bg-gradient-to-b from-[#97CA09] to-[#5f8005]"
            >
              Book Your Pickup Now
            </motion.button>
          </div>
        </div>
      </div>

      <div className="relative md:block hidden">
        <motion.img
          src={glow}
          alt=""
          variants={glowAnimation}
          initial="initial"
          animate="animate"
          className="absolute -right-12 -bottom-10"
        />
      </div>
    </section>
        <AuthPage
        isOpen={authOpen}
        defaultMode={authMode}
        onClose={() => setAuthOpen(false)}
      />
    </>
  );
}
