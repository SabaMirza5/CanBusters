
import React from "react";
import { motion } from "framer-motion";

function OurPartner() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const logos = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
    "/partner5.png",
    "/partner6.png",
    "/partner7.png",
    "/partner8.png",
    "/partner9.png",
  ];

  return (
    <motion.div   className="px-[5%] py-10 bg-white overflow-hidden">
      {/* Heading */}
      <motion.h2
       variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
        className="text-4xl dark:text-white font-light text-center font-montserrat capitalize text-text-color-secondary mb-12"
      >
        Our
        <span className="text-text-color font-medium">
          {" "}
          Collaborative Partnerships{" "}
        </span>
        Fuel Success and Growth
      </motion.h2>

      {/* Ticker Section */}
      <div className="relative w-full overflow-hidden">
        {/* Infinite smooth track */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // ⏩ faster speed (was 40)
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0  flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="object-cover w-full h-full   transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default OurPartner;
