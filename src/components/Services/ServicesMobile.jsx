import React, { useState } from "react";
import icons from "../../assets/icons/icons";
import useMediaQuery from "../../hooks/useMediaQuery";
import images from "../../assets/img/images";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import TrialModal from "../TrialModal/TrialModal";

const ServicesMobile = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full px-6 py-6 overflow-x-hidden relative ">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-3">
        <div className="">
          <img src={icons.startIcon} alt="" />
        </div>

        <div className="max-w-7xl">
          <h3 className="text-xl text-center" style={{ lineHeight: "1.3" }}>
            Nourish Your Soul with the Light of the Quran A{" "}
            <span className="poppins-bold">Journey of Faith and Learning</span>
          </h3>
        </div>

        {/* <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h3 className="poppins-bold text-4xl">01</h3>
            <p
              className="md:text-base text-sm text-black/65 min-[1400px]:max-w-[50%] xl:max-w-[60%] lg:max-w-[70%] max-w-[80%]"
              style={{ lineHeight: "1.8" }}
            >
              we believe that learning the Quran is more than just acquiring
              knowledge—it’s a profound journey of the heart and soul. It’s
              about reconnecting with the divine words of Allah (SWT), growing
              spiritually, and finding guidance for every step of your life.
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-end items-end">
            <div className="w-fit flex flex-col gap-3 justify-end items-end">
              <h3 className="poppins-bold text-4xl text-start w-full">01</h3>
              <p
                className="md:text-base text-sm text-black/65 min-[1400px]:max-w-[50%] xl:max-w-[60%] lg:max-w-[70%] max-w-[80%]"
                style={{ lineHeight: "1.8" }}
              >
                we believe that learning the Quran is more than just acquiring
                knowledge—it’s a profound journey of the heart and soul. It’s
                about reconnecting with the divine words of Allah (SWT), growing
                spiritually, and finding guidance for every step of your life.
              </p>
            </div>
          </div>
        </div> */}

        <div className="max-w-2xl mx-auto  space-y-12">
          {/* Section 01 */}
          <div className="relative min-[540px]:pr-[100px] pr-[50px]">
            <div className="mb-2">
              <h2 className="text-3xl font-bold poppins-bold">01</h2>
            </div>
            <p className="text-black/65  max-w-md text-sm">
              We believe that learning the Quran is more than just acquiring
              knowledge—it's a profound journey of the heart and soul. It's
              about reconnecting with the divine words of Allah (SWT), growing
              spiritually, and finding guidance for every step of your life.
            </p>
          </div>

          <div className="mx-auto">
            <img
              src={images.arrow1}
              alt=""
              className="mx-auto min-[540px]:w-[300px] w-[230px] object-contain"
            />
          </div>

          {/* Section 02 */}
          <div className="relative min-[540px]:pl-[100px] pl-[50px] mt-8">
            <div className="mb-2">
              <h2 className="text-3xl font-bold poppins-bold">02</h2>
            </div>
            <p className="text-black/65 text-sm mb-4 max-w-md">
              While we welcome learners of all ages and backgrounds, our passion
              lies in empowering every muslim with high-quality, engaging
              lessons tailored to their needs.
            </p>
          </div>

          <div className="mx-auto">
            <img
              src={images.arrow2}
              alt=""
              className="mx-auto min-[540px]:w-[300px] w-[230px] object-contain"
            />
          </div>

          {/* Section 03 */}
          <div className="relative min-[540px]:pr-[100px] pr-[50px] mt-8">
            <div className="mb-2">
              <h2 className="text-3xl font-bold poppins-bold">03</h2>
            </div>
            <p className="text-black/65 text-sm mb-4 max-w-md">
              Whether you're perfecting your Tajweed, memorizing the Quran,
              exploring the treasures of Islamic studies, or diving into the
              richness of the Arabic language, each class is more than just a
              session. It's a moment of transformation designed to help you
              grow, connect, and thrive.
            </p>
          </div>

          <div className="mx-auto">
            <img
              src={images.arrow1}
              alt=""
              className="mx-auto min-[540px]:w-[300px] w-[230px] object-contain"
            />
          </div>

          {/* Section 04 */}
          <div className="relative min-[540px]:pl-[100px] pl-[50px] mt-16">
            <div className="mb-2">
              <h2 className="text-3xl font-bold poppins-bold">04</h2>
            </div>
            <p className="text-black/65 text-sm mb-4 max-w-md">
              With dedicated Arab teachers who care deeply about your progress,
              EmanTime isn't just a learning platform; it's your partner on a
              journey of faith, growth, and excellence.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <SecondaryButton
            label="Schedule Your Free Consultation Today!"
            className="bg-[#DB9E30] "
            buttonBg="bg-buttonBg text-white text-sm"
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

export default ServicesMobile;
