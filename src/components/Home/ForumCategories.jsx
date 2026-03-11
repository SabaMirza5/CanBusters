import React, { useRef } from "react";
import { motion } from "framer-motion";
import DiscussionBoardform from "/DiscussionBoardform.png";
import application from "/application.png";
import job from "/job.png";
import game from "/game.png";
import study from "/study.png";
import community from "/community.png";
import Vector from "/Vector.png";

export default function ForumCategories() {
  const sectionRef = useRef(null);

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

  const items = [
    {
      img: DiscussionBoardform,
      title: "Discussion Boards",
      desc: " This space is where students help students. Ask your questions, share what worked for you, and learn from others facing the same challenges. Engage in conversations on various topics, from academic achievements to financial advice. Our boards cater to diverse interests and concerns.",
    },
    {
      img: application,
      title: "Applications & Appeals",
      desc: "Applying for OurNSFAS or submitting an appeal can feel overwhelming. Here, members share step-by-step tips, common mistakes to avoid, and updates on deadlines. If your application was rejected, you’ll also find guidance on what to do next. Don’t go through it alone — let’s help each other succeed.",
    },
    {
      img: community,
      title: "Community & Wellness",
      desc: "University life can be stressful — and you’re not alone. This category is for open conversations about mental health, campus life, and staying balanced. Share your experiences, support others, and connect with students who truly understand the journey. Together, we build a stronger, healthier community.",
    },
    {
      img: study,
      title: "Study Tips & Resources",
      desc: "Being a student is more than just passing exams — it’s about learning smart. Here you’ll find notes, guides, and study hacks shared by fellow students. Whether it’s time management, preparing for tests, or free learning resources, this space is all about helping each other grow academically.",
    },

    {
      img: job,
      title: "Jobs & Opportunities",
      desc: "Your future starts now. In this space, you can explore bursaries, internships, part-time jobs, and graduate programs. Students and alumni share opportunities and experiences that can open doors beyond the classroom. Take the chance to plan your career while studying.",
    },

    {
      img: game,
      title: "Gaming Zone",
      desc: "Step into the Gaming Zone — your space to relax, recharge, and compete with fellow students. Whether you're into casual mobile games or intense online battles, this zone is built for fun. Discover trending games, join community challenges, and enjoy stress-free moments between studies.",
    },
  ];

  return (
    <section ref={sectionRef} className=" p-[5%]  bg-[#E8E7EB] text-black">
      <div className="text-center ">
        <div className="flex items-center justify-center relative w-full">
          <motion.img
            src={Vector}
            alt=""
            variants={glowAnimation}
            initial="initial"
            animate="animate"
            className="w-20 h-20 absolute  left-[28%] -translate-x-1/2 z-0 "
          />

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:text-2xl montserrat  md:text-3xl text-2xl xl:text-4xl font-bold text-center z-10 relative"
          >
            Explore <span className="text-blue-500">Forum</span> Categories
          </motion.h3>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:mt-6 mt-3 2xl:leading-9 md:leading-8 leading-6 md:text-base text-sm text-text-color"
        >
          Discover the power of your voice and unlock a world where knowledge,
          passion, and creativity converge – together, we can build <br />
          something greater than the sum of our individual ideas, creating a
          community of unstoppable energy.
        </motion.p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-14 md:p-3 p-0 w-full mt-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="relative h-full text-center group card bg-white  text-white rounded-xl md:p-5 p-3 
             transition-all duration-500 bg-opacity-90 group-hover:text-white"
            >
              <div className="flex items-center justify-center relative w-full -mt-14">
                <motion.img
                  src={Vector}
                  alt=""
                  variants={glowAnimation}
                  initial="initial"
                  animate="animate"
                  className="w-16 h-16 absolute  left-[28%] -translate-x-1/2 z-30 "
                />
                <img
                  src={item.img}
                  alt={item.title}
                  className=" w-20 h-20 rounded-full border border-black z-30 "
                />
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
              ></div>

              <div
                className="absolute top-0  rounded-xl left-0 w-0 h-full bg-gradient-to-t hover:text-white from-[#1A143A] to-[#2B8CFF] 
                  group-hover:w-full   group-hover:text-white  transition-all duration-700 ease-out rotate-180 pointer-events-none"
              ></div>

              <div className="relative space-y-2 transform  group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-xl font-semibold  group-hover:text-white font-inter text-black montserrat">
                  {item.title}
                </div>

                <p className="2xl:text-lg md:text-sm text-xs 2xl:leading-9 md:leading-7 leading-6 font-normal text-text-color group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
