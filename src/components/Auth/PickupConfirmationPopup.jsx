import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdDeleteOutline } from "react-icons/md";

const PickupConfirmationPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gradient-to-b from-[#97CA09] to-[#5f8005] text-white rounded-lg md:p-10 p-5 w-[90%] max-w-md text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 25px rgba(255,255,255,0.6)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full"
            >
              <MdDeleteOutline className="text-white text-7xl" />
            </motion.div>
          </motion.div>

          <h3 className="md:text-xl text-lg font-semibold mb-2 montserrat">
            Pickup Request Sent
          </h3>

          <p className="md:text-sm text-xs mb-6">
            Your garbage can pickup request has been successfully submitted. Our
            team will contact you shortly to confirm the pickup schedule.
          </p>

          <button
            onClick={onClose}
            className="w-full bg-white text-black py-2 rounded-md transition"
          >
            OK
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PickupConfirmationPopup;
