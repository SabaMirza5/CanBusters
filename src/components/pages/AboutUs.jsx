import React from "react";
import Newsletter from "../CommonComponent/Newsletter";
// import Testimonials from "../CommonComponent/Testimonials";
import HeroAbout from "../About/HeroAbout";
import OurServices from "../About/OurServices";

function AboutUs() {
  return (
    <div className="mt-20">
      <HeroAbout />
      <OurServices/>
      <Newsletter />
      {/* <Testimonials /> */}
    </div>
  );
}

export default AboutUs;
