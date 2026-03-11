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
        className="text-center w-full max-w-md"
      >
        <h2 className="md:text-2xl text-xl font-bold text-primary mb-1 montserrat">
          Book a Pickup
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Schedule your garbage can pickup and return service
        </p>

        <form className="md:space-y-3 space-y-2" onSubmit={handleSubmit}>
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
            className="input-field h-16 resize-none"
          />
          <p className="text-xs text-gray-600 mb-2">
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
