import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Format numbers nicely (e.g., 1500 -> 1.5K, 2000000 -> 2M)
const formatNumber = (num) => {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M+";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K+";
  return num + "+";
};

function Counter({ from = 0, to = 100, duration = 2, label }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * (to - from) + from);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center font-montserrat"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.h2 className="text-5xl font-extrabold text-primary drop-shadow-sm">
        {formatNumber(count)}
      </motion.h2>
      <p className="text-text-color-secondary dark:text-gray-300 mt-2 text-lg font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export default function CounterSection() {
  return (
    <section className="relative py-24  flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Glow Animation */}
      <motion.div
        className="absolute w-[400px] h-[400px] "
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl 2xl:text-5xl font-light text-text-color dark:text-white mb-14 font-montserrat"
        
      >
        Unmatched Record of Outstanding{" "}
        <span className="text-primary font-medium">Project Launches</span>
      </motion.h2>

      {/* Counters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-6xl">
        <Counter to={50} label="Projects Completed" duration={3} />
        <Counter to={100} label="Clients Served" duration={3} />
        <Counter to={10000} label="Assets Managed" duration={3} />
        <Counter to={10} label="Years of Experience" duration={3} />
      </div>
    </section>
  );
}
