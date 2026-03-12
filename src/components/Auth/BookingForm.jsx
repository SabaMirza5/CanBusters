import React, { useState } from "react";
import { motion } from "framer-motion";
import PickupConfirmationPopup from "./PickupConfirmationPopup";

const BookingForm = ({ onSwitch }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4 }}
        className="text-center w-full max-w-md "
      >
        <h2 className="md:text-2xl text-lg font-bold text-primary md:mb-1 mb-0 montserrat">
          Book a Pickup
        </h2>
        <p className="md:text-sm text-xs text-gray-500 md:mb-6 mb-3">
          Schedule your garbage can pickup and return service
        </p>

        <form className="md:space-y-3 space-y-1" onSubmit={handleSubmit}>
          <div className="flex items-center md:gap-3 gap-2 md:flex-row flex-col">
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
          <input type="email" placeholder="Email" className="input-field" />

          <input
            type="text"
            placeholder="Phone Number"
            className="input-field"
            required
          />

          <input
            type="text"
            placeholder="Pickup Address"
            className="input-field"
            required
          />

          <div className="flex md:gap-3 gap-2 md:flex-row flex-col">
            <input type="date" className="input-field" required />

            <input type="time" className="input-field" required />
          </div>

          <textarea
            placeholder="Additional Notes (Optional)"
            className="input-field md:h-16 h-10 resize-none"
          />
          <p className="md:text-xs text-[10px] text-gray-600 md:mb-2 mb-0">
            <strong>Pricing:</strong>{" "}
            <span className="text-primary font-bold">$20</span> per pickup for
            regular properties,{" "}
            <span className="text-primary font-bold">$45</span> for scheduled or
            subscription services.
          </p>

          <motion.button
            whileHover={{
              scale: 1.07,
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="    btn-primary"
          >
            Book Now
          </motion.button>
        </form>
      </motion.div>
      <PickupConfirmationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
};

export default BookingForm;
