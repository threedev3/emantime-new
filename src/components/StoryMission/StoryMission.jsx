import React from "react";
import images from "../../assets/img/images";

const StoryMission = () => {
  return (
    <div className="w-full px-6 py-6 overflow-x-hidden relative bg-aboutBg">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center items-center xl:gap-8 gap-4">
        {/* story  */}

        {/* <div className="flex md:flex-row flex-col justify-between items-center gap-8"> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 place-content-between place-items-center lg:gap-8 gap-8">
          {/* <div className="flex flex-col md:gap-6 gap-4 xl:max-w-[40%] lg:max-w-[45%] md:max-w-[50%]"> */}
          <div className="flex flex-col md:gap-4 gap-4 ">
            <h3 className="min-[1400px]:text-4xl lg:text-3xl md:text-4xl text-3xl">
              Our <span className="poppins-bold">Story</span>
            </h3>
            <div className="flex flex-col md:gap-4 gap-4">
              <p className="xl:text-base lg:text-sm md:text-base text-sm text-black/65">
                At EmanTime, we understand that no two learners are the same.
                Every individual’s journey with the Quran is uniquely shaped by
                personal aspirations, life experiences, and spiritual goals.
                That’s why our programs are thoughtfully designed to meet you
                where you are, with a special focus on creating a safe and
                nurturing space for women and children.
              </p>
              <p className="xl:text-base lg:text-sm md:text-base text-sm text-black/65">
                Learning the Quran isn’t just about recitation it’s about
                building a relationship with the words of Allah that touches
                your heart and transforms your soul. Inspired by centuries-old
                traditions and empowered by modern online tools, EmanTime
                bridges the best of both worlds to offer a learning experience
                that is authentic, meaningful, and life-changing.
              </p>
            </div>
          </div>

          <div className="">
            {/* <img src={images.story} alt="" className="aspect-square min-[1400px]:w-[570px] object-contain" /> */}
            <img src={images.story} alt="" className="" width={400} />
          </div>
        </div>
        {/* mission  */}

        {/* <div className="flex md:flex-row flex-col justify-between items-center gap-8"> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 place-content-between place-items-center lg:gap-8 gap-8">
          <div className="lg:order-1 order-2">
            <img src={images.mission} alt="" width={460} />
          </div>
          {/* <div className="flex flex-col md:gap-6 gap-4 xl:max-w-[40%] lg:max-w-[45%] md:max-w-[50%]"> */}
          <div className="flex flex-col md:gap-4 gap-4 lg:order-2 order-1">
            <h3 className="min-[1400px]:text-4xl lg:text-3xl md:text-4xl text-3xl">
              Our <span className="poppins-bold">Mission</span>
            </h3>
            <div className="flex flex-col md:gap-4 gap-4">
              <p className="xl:text-base lg:text-sm md:text-base text-sm text-black/65">
                At EmanTime, we are driven by one simple yet profound goal: To
                guide learners closer to the Quran, one heartfelt lesson at a
                time.
              </p>
              <p className="xl:text-base lg:text-sm md:text-base text-sm text-black/65">
                Our mission is to build a lifelong love for the Quran that goes
                beyond the classroom. We aim to inspire confidence,
                understanding, and sincerity in every student, helping them
                build a strong and lasting connection to their faith. Guided by
                our expert Arab teachers, every lesson becomes a step closer to
                Allah and a beacon of light for your spiritual journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryMission;
