import React from "react";
import images from "../../assets/img/images";

import Form from "./Form";
import FooterMosque from "../FooterMosque/FooterMosque";

const ContactForm = () => {
  return (
    <div
      className="w-full px-6 min-[1400px]:pt-10 pt-6 overflow-hidden relative "
      id="contact"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center min-[1400px]:gap-10 xl:pb-6">
        <div>
          <h3 className="min-[1400px]:text-4xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl max-w-3xl mb-4 text-center leading-10">
            We'd Love Your To Hear Your Thoughts About EmanTime
          </h3>
        </div>

        <Form />
      </div>

      <div className="absolute left-0 -top-36 overflow-hidden -z-20">
        <img src={images.design3} alt="" className="xl:w-auto md:w-48 w-40" />
      </div>

      <FooterMosque />
    </div>
  );
};

export default ContactForm;
