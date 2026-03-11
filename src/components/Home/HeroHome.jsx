import React, { useState } from "react";
import heroHome from "/heroHome.png";
import vactorHome from "/vactorHome.png";
import { motion } from "framer-motion";
import studentImg from "/studentImg.png";
import { IoStar } from "react-icons/io5";
import { FaQuoteRight } from "react-icons/fa";
import AuthPage from "../Auth/AuthPage";
const HeroSection = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  return (
    <>
      <div className="relative overflow-hidden  ">
        <section className=" flex flex-col  mb-20 lg:flex-row items-center justify-between p-[5%] bg-white   ">
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="lg:text-2xl montserrat md:text-3xl text-2xl xl:text-4xl xl:!leading-[50px] font-bold text-gray-800">
             Welcome to Our Garbage Can Pickup Service — Fast and  

             
              <span className="text-primary"> Hassle-Free</span>
            </h1>

            <p className="text-text-color xl:mt-6 mt-3 md:leading-9 leading-7 md:text-base text-sm">
              Are you tired of remembering trash day or struggling to move heavy garbage cans to the curb? We make it easy. Our Garbage Can Runner service helps homeowners, elderly residents, and vacation property owners by taking their garbage cans out for pickup and returning them after collection.

With our simple and reliable service, you never have to worry about missing trash day again.
            </p>

            <motion.button
              onClick={() => {
                setAuthMode("signup");
                setAuthOpen(true);
              }}
              whileHover={{
                scale: 1.07,
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 shadow-md transition duration-300   border rounded-2xl text-white py-2 px-4 capitalize     bg-gradient-to-b from-[#97CA09] to-[#5f8005]"
            >
             Book Your Trash Can Service
            </motion.button>
          </div>

          <div className="relative w-full lg:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-b from-[#97CA09] to-[#5f8005] rounded-full top-0 right-5 blur-2xl opacity-30 animate-pulse"></div>

            <img
              src={heroHome}
              alt="student"
              className="relative z-10 w-72 md:w-96 animate-float"
            />

            <div className="absolute xl:top-24 md:top-32 top-36 z-20  border border-[#112A70] w-64  xl:left-0 lg:-left-8 md:-left-2 -left-3 bg-white shadow-2xl rounded-xl xl:p-5 p-3 text-sm  animate-fadeIn delay-1000">
              <div className="flex items-center gap-2">
                <img src={studentImg} alt="user" className=" " />
                <p className="text-xs font-semibold text-black">2400+</p>
              </div>

              <p className="font-semibold text-gray-800 montserrat">
                Satisfied Customers
              </p>

              <div className="flex items-center justify-between ">
                <div className="flex items-center text-[#74808E] text-lg">
                  <IoStar className="" />
                  <IoStar className="" />
                  <IoStar className="" />
                  <IoStar className="" />
                  <IoStar className="" />
                  <IoStar className="" />
                </div>
                <p className="text-xs font-semibold text-black">(4.7 Stars)</p>
              </div>
            </div>

            <div className="absolute bottom-40 shadow-xl md:block hidden   z-20 right-2 bg-white rounded-lg px-3 py-2 text-sm animate-fadeIn delay-1500">
              <p className="text-black montserrat font-semibold capitalize 2xl:text-lg text-sm flex items-center gap-1">
                <IoStar className="text-[#74808E] text-xl" />
                Fast & Reliable Pickup
              </p>
            </div>
            <div className="relative">
              <div className="absolute md:-bottom-5 -bottom-10 w-64 z-20 xl:-right-20 lg:-right-16 md:-right-14  -right-2 bg-white  p-4 animate-fadeIn delay-1500                                                     border border-[#112A70] te shadow-2xl rounded-xl text-sm  animate-fadeIn delay-1000">
                <p className="text-black text-xs">
                  

                 A trusted service helping homeowners, elderly residents, and vacation property owners manage their trash day without the hassle.
                </p>
              </div>

              <div className="absolute md:-bottom-9 -bottom-12 z-20 xl:-right-16 md:-right-12 right-7  animate-fadeIn delay-1500">
                <FaQuoteRight className="text-[#97CA09] text-4xl" />
              </div>
            </div>
          </div>
        </section>
        <div className=" flex items-center justify-center  relative">
          <div className="w-[20%]">
            <img src={vactorHome} alt="" className="absolute  z-50 " />
          </div>
        </div>
      </div>
      <AuthPage
        isOpen={authOpen}
        defaultMode={authMode}
        onClose={() => setAuthOpen(false)}
      />
    </>
  );
};

export default HeroSection;
