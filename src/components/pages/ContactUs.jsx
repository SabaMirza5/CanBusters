
import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthPage from "../Auth/AuthPage";

const ContactUs = () => {
   const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState("login");
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

  return (
    <>
     <section className="w-full bg-white md:mt-28 mt-10">
      <div className="text-center relative h-screen  bg-[url('./contactusbg.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white montserrat">
          Contact Us
        </h2>
      </div>

      <div className="p-[5%]">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-black montserrat">
            Get in Touch <span className="text-primary">Today</span>
          </h3>

          <p className="mt-4 text-sm md:text-base text-text-color">
            Have questions about our <span className="text-primary font-bold">Can Busters</span> services?{" "}
            <br className="lg:block hidden" />
            Send us a message and our team will get back to you as soon as
            possible.
          </p>
        </motion.div>

        <div className="flex justify-between items-center gap-10 lg:mt-16 mt-7 lg:flex-row flex-col">
          {/* Contact Form */}
          <motion.form
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 lg:w-[55%] w-full"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-field"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="input-field" />
              <input
                type="text"
                placeholder="Phone Number"
                className="input-field"
              />
            </div>

            <textarea
              placeholder="Tell us how we can help or request a pickup..."
              className="input-field h-28 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Info Card */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#97CA09] to-[#5f8005] lg:w-[45%] w-full text-center text-white rounded-lg p-4 md:p-10 flex flex-col justify-center shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 montserrat">
           Need a Trash Can Pickup?
            </h3>

            <p className="text-sm md:text-base mb-6 md:!leading-10 leading-6">
              We make trash day simple and convenient. Schedule a pickup with our team and let us take your bins to the curb and return them after collection. Our service is quick, reliable, and designed to make your life easier.
            </p>

            <motion.button
             onClick={() => {
                setAuthMode("signup");
                setAuthOpen(true);
              }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-2 rounded-md transition"
            >
              Book a Pickup
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
      <AuthPage
        isOpen={authOpen}
        defaultMode={authMode}
        onClose={() => setAuthOpen(false)}
      />
    </>
   
  );
};

export default ContactUs;