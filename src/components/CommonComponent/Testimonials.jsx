import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaStar } from "react-icons/fa";

import user1 from "/user1.jpg";
import user2 from "/user2.png";
import user3 from "/user3.png";
import user4 from "/user4.jpg";
import student1 from "/student1.jpg";
import student2 from "/student2.jpg";
function TestimonialCard({ item }) {
  const swiperSlide = useSwiperSlide();
  const isActive = swiperSlide.isActive;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.9,
        y: isActive ? 0 : 20,
        scale: isActive ? 1 : 0.92,
        filter: isActive ? "blur(0px)" : "blur(0px)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0px 20px 40px rgba(59,130,246,0.18)",
      }}
      className="bg-white rounded-2xl p-4 space-y-2 cursor-pointer"
    >
      {item.layout === "image-first" && (
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] object-cover rounded-xl"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      )}

      <div className="flex items-center justify-between text-black">
        <h2 className="text-lg font-semibold montserrat">{item.name}</h2>
        <div className="flex items-center gap-2">
          <p className="font-bold">{item.rating}</p>
          <FaStar className="text-orange-500" />
        </div>
      </div>

      <p className="md:text-sm text-xs leading-5 text-text-color">
        {item.text}
      </p>

      {item.layout === "text-first" && (
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] object-cover rounded-xl"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  );
}

export default function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const testimonials = [
    {
      id: 1,
      name: "Thabo Mokoena",
      rating: "4.7",
      image: user1,
      layout: "image-first",
      text: "Can Busters provides fast and reliable garbage pickup. My bins are always collected on time, and the team is professional and courteous. I feel confident knowing my home stays clean and hygienic.",
    },
    {
      id: 2,
      name: "Kabelo R.",
      rating: "4.7",
      image: user2,
      layout: "text-first",
      text: "Scheduling pickups has never been easier. The Can Busters team is punctual and efficient, and their bin cleaning service keeps my property fresh and odor-free. Highly recommend!",
    },
    {
      id: 3,
      name: "Thandi M.",
      rating: "4.7",
      image: user3,
      layout: "image-first",
      text: "The bin sanitization and odor control service is excellent. Can Busters ensures my bins are always clean, and their attention to detail gives me peace of mind.",
    },
    {
      id: 4,
      name: "Sipho L.",
      rating: "4.7",
      image: student2,
      layout: "text-first",
      text: "I’ve tried multiple garbage removal services, but Can Busters stands out for reliability and professionalism. They make sure nothing is missed, and my property stays neat every time.",
    },
    {
      id: 5,
      name: "Nomvula D.",
      rating: "4.8",
      image: student1,
      layout: "image-first",
      text: "Excellent customer support and efficient service! Can Busters handles everything smoothly, from scheduling to pickup, making garbage management hassle-free.",
    },
    {
      id: 6,
      name: "Mandla S.",
      rating: "4.7",
      image: user4,
      layout: "text-first",
      text: "The Can Busters team is thorough and reliable. Their garbage collection, bin cleaning, and odor control services have completely transformed the way I manage waste at home.",
    },
  ];

  return (
    <section className="bg-white p-[5%] overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl montserrat md:text-3xl xl:text-4xl font-bold text-black">
          What <span className="text-primary">Our Customers</span> Say!
        </h3>

        <p className="mt-4 text-sm md:text-base text-text-color">
         We believe in building experiences, not just services. Here’s what our Customers  <br className="lg:block hidden" />have to say about the impact we've made in their journey.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:mt-10 mt-5"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          grabCursor={true}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
