import React from "react";
import HeroHome from "../Home/HeroHome";
import WhyChooseUs from "../Home/WhyChooseUs";
import Newsletter from "../CommonComponent/Newsletter";
// import Testimonials from "../CommonComponent/Testimonials";
import OurServices from "../About/OurServices";

function Home() {
  return (
    <div className="mt-20">
      <HeroHome />
      <WhyChooseUs />
      <OurServices/>
      <Newsletter/>
      {/* <Testimonials/> */}
    </div>
  );
}

export default Home;

// jb main khta hu ilahi mery ahwal dekh...
// hukm hota he phle apny amal dekh...

// apni mrzi or rb k mrxi m frk ko gham khty h
