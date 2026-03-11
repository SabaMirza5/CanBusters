
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import BookingForm from "./BookingForm";

const AuthPage = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl mx-4 h-[500px] md:h-[560px] bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-gradient-to-b from-[#97CA09] to-[#5f8005] text-white rounded-full p-2 shadow z-10"
            >
              <HiX size={22} />
            </button>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:flex relative overflow-hidden flex-col justify-center items-center text-white"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/loginVideo.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-primary/40" />

              <div className="relative z-10 text-center p-10">
                <h2 className="text-3xl font-bold mb-3 montserrat">
                  Book Your Garbage Can Pickup
                </h2>

                <p className="text-sm opacity-90 max-w-xs mx-auto">
               Schedule Your Garbage Can Service Quickly and Easily
                </p>
              </div>
            </motion.div>

            <div className="p-5 lg:p-10 h-full flex items-center justify-center">
              <BookingForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthPage;