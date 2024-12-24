import React, { useState } from "react";
import icons from "../../assets/icons/icons";
import images from "../../assets/img/images";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full px-6 py-6 overflow-x-hidden relative ">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-4">
        <div className="">
          <img src={icons.startIcon} alt="" />
        </div>

        <div className="min-[1400px]:max-w-5xl max-w-3xl">
          <h3
            className="min-[1400px]:text-4xl lg:text-3xl md:text-4xl text-3xl text-center"
            style={{ lineHeight: "1.3" }}
          >
            Nourish Your Soul with the Light of the Quran A{" "}
            <span className="poppins-bold">Journey of Faith and Learning</span>
          </h3>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="poppins-bold text-3xl">01</h3>
              <p
                className="min-[1400px]:text-base text-sm text-black/65 min-[1400px]:max-w-[50%] xl:max-w-[60%] lg:max-w-[70%] max-w-[80%]"
                style={{ lineHeight: "1.8" }}
              >
                we believe that learning the Quran is more than just acquiring
                knowledge—it’s a profound journey of the heart and soul. It’s
                about reconnecting with the divine words of Allah (SWT), growing
                spiritually, and finding guidance for every step of your life.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-16 lg:ml-32 ml-12">
              <h3 className="poppins-bold text-3xl">02</h3>
              <p
                className="min-[1400px]:text-base text-sm text-black/65 min-[1400px]:max-w-[70%] xl:max-w-[80%] lg:max-w-[90%] max-w-full"
                style={{ lineHeight: "1.8" }}
              >
                While we welcome learners of all ages and backgrounds, our
                passion lies in empowering every muslim with high-quality,
                engaging lessons tailored to their needs.
              </p>
            </div>
          </div>

          <div className="mx-auto">
            <img
              src={images.bigLogo}
              alt=""
              className="min-[1400px]:w-[300px] xl:w-[270px] lg:w-[200px] md:w-[200px] object-contain"
            />
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2 -mt-16">
              <h3 className="poppins-bold text-3xl">03</h3>
              <p
                className="min-[1400px]:text-base text-sm text-black/65 min-[1400px]:max-w-[50%] xl:max-w-[60%] lg:max-w-[70%] max-w-[80%]"
                style={{ lineHeight: "1.8" }}
              >
                Whether you’re perfecting your Tajweed, memorizing the Quran,
                exploring the treasures of Islamic studies, or diving into the
                richness of the Arabic language, each class is more than just a
                session. It’s a moment of transformation designed to help you
                grow, connect, and thrive.
              </p>
            </div>
            <div className="flex flex-col gap-2 xl:mt-12 mt-16">
              <h3 className="poppins-bold text-3xl">04</h3>
              <p
                className="min-[1400px]:text-base text-sm text-black/65 min-[1400px]:max-w-[70%] xl:max-w-[80%] lg:max-w-[90%] max-w-full"
                style={{ lineHeight: "1.8" }}
              >
                With dedicated Arab teachers who care deeply about your
                progress, EmanTime isn’t just a learning platform it’s your
                partner on a journey of faith, growth, and excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <SecondaryButton
            label="Schedule Your Free Consultation Today!"
            className="bg-[#DB9E30]"
            buttonBg="bg-buttonBg text-white min-[1400px]:text-base text-sm"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
};

export default Services;
