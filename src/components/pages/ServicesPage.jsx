import React from "react";
import WhatYouWillFind from "../Home/WhatYouWillFind";
import Newsletter from "../CommonComponent/Newsletter";
import Testimonials from "../CommonComponent/Testimonials";
import OurServices from "../About/OurServices";


function ServicesPage() {
  return (
    <div className="mt-20">
      <OurServices/>
      <WhatYouWillFind/>
      <Newsletter />
      <Testimonials />
    </div>
  );
}

export default ServicesPage;
