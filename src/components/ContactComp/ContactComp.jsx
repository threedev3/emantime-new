import React from "react";
import images from "../../assets/img/images";

import icons from "../../assets/icons/icons";
import Form from "../ContactForm/Form";

const ContactComp = () => {
  const contactDetails = [
    {
      icon: icons.whatsappBig,
      title: "+1 551-253-3039",
    },
    {
      icon: icons.whatsappBig,
      title: "+44 20 3289 4228",
    },
    {
      icon: icons.emailSolid,
      title: "support@emantime.com",
    },
  ];

  return (
    <div className="w-full  pt-12  overflow-hidden relative " id="contact">
      <div className="max-w-[1600px] px-6 mx-auto flex flex-col justify-center items-center gap-12">
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
      {/* <div className="absolute right-0 -bottom-36 overflow-hidden -z-20">
        <img src={images.design1} alt="" />
      </div> */}

      <div
        className="bg-contactDetailsBg py-32 px-6 mt-16 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.map})`,
        }}
      >
        <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-12">
          <div>
            <h3 className="lg:text-5xl md:text-4xl text-3xl text-center max-w-4xl leading-tight">
              We’re Here To Help You Start Your{" "}
              <span className="poppins-bold">Quran journey!</span>
            </h3>
          </div>

          <div className="flex flex-row justify-center items-center flex-wrap w-full gap-6">
            {contactDetails.map((contact, index) => (
              <div className="p-1 flex gap-5 items-center bg-white  shadow-lg rounded-full min-[540px]:w-auto w-full">
                <div className="bg-gradOne h-16 w-16 rounded-full flex justify-center items-center">
                  <img src={contact.icon} alt="" className="" />
                </div>
                <p className="text-black mr-3 font-semibold">{contact.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
