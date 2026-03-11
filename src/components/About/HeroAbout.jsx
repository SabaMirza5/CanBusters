import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthPage from "../Auth/AuthPage";
import vactorHome from "/vactorHome.png";
import about1 from "/about1.jpg";
import about2 from "/about2.jpg";
import about3 from "/about3.jpg";
import about4 from "/about4.jpg";

const HeroAbout = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  return (
    <>
      <section className="relative p-[5%] bg-white overflow-hidden">
        <div className="absolute md:flex hidden inset-0 left-9 top-36 z-0  justify-start items-start">
          <img
            src={vactorHome}
            alt="background vector"
            className="w-[60%] opacity-90"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="lg:w-[80%] w-full">
            <h1 className="xl:text-4xl  montserrat lg:text-3xl md:text-3xl text-2xl xl:leading-[50px] font-bold text-gray-800">
              Reliable Trash Can  
              <span className="text-primary"> Assistance</span>{" "}
            You Can Count On
            </h1>

            <p className="text-text-color xl:mt-6 mt-3 md:leading-9 leading-7 md:text-base text-sm">
              Keep your home or property organized with ease. Schedule your trash can service today and let our professional team take your bins to the curb and return them after pickup. From fast residential and commercial collection to scheduled weekly service, we make sure your trash day is hassle-free and convenient. Book now and enjoy peace of mind every week.
            </p>

            <motion.button
              onClick={() => {
                setAuthMode("signup");
                setAuthOpen(true);
              }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="mt-5 shadow-md border rounded-2xl text-white py-2 px-5 bg-gradient-to-b from-[#97CA09] to-[#5f8005]"
            >
              Book Your Pickup Now
            </motion.button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 md:mt-20 mt-10 md:flex-row flex-col ">
          <div className="md:w-[60%] w-full">
            <img
              src={about1}
              alt=""
              className="rounded-3xl object-cover  w-full lg:h-[350px] md:h-[250px] h-[200px]  "
            />
          </div>
          <div className="md:w-[40%] w-full">
            <img
              src={about2}
              alt=""
              className="rounded-3xl object-cover w-full  lg:h-[350px] md:h-[250px] h-[200px] "
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 mt-3 md:flex-row flex-col">
          <div className="md:w-[50%] w-full">
            <img
              src={about3}
              alt=""
              className="rounded-3xl object-cover w-full lg:h-[350px] md:h-[250px] h-[200px]"
            />
          </div>
          <div className="md:w-[50%] w-full">
            <img
              src={about4}
              alt=""
              className="rounded-3xl object-cover w-full  lg:h-[350px] md:h-[250px] h-[200px] "
            />
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

export default HeroAbout;
