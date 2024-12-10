import React from "react";
import images from "../../assets/img/images";

import Form from "./Form";

const ContactForm = () => {
  return (
    <div
      className="w-full px-6 pt-12 pb-20 mb-6 overflow-hidden relative "
      id="contact"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-12">
        <div>
          <h3 className="lg:text-5xl md:text-4xl text-3xl max-w-4xl  text-center leading-10">
            We'd Love Your To Hear Your Thoughts About EmanTime
          </h3>
        </div>

        <Form />
      </div>

      <div className="absolute left-0 -top-36 overflow-hidden -z-20">
        <img src={images.design3} alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
