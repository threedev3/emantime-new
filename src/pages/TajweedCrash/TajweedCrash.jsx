import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import SubHero from "../../components/SubHero/SubHero";
import Footer from "../../components/Footer/Footer";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import ContactComp from "../../components/ContactComp/ContactComp";
import { useParams } from "react-router-dom";
import coursesData from "../../data/data";
import CourseHero from "../../components/CourseHero/CourseHero";
import CourseOverview from "../../components/CourseOverview/CourseOverview";
import CourseLearn from "../../components/CourseLearn/CourseLearn";
import CourseFor from "../../components/CourseFor/CourseFor";
import CourseMatter from "../../components/CourseMatter/CourseMatter";
import CourseFeatures from "../../components/CourseFeatures/CourseFeatures";
import FooterMosque from "../../components/FooterMosque/FooterMosque";
import TrialPopup from "../../components/TrialPopup/TrialPopup";
import { Helmet } from "react-helmet";
import useMediaQuery from "../../hooks/useMediaQuery";
import images from "../../assets/img/images";
import TajweedReasons from "../../components/TajweedReasons/TajweedReasons";
import CourseSchedule from "../../components/CourseSchedule/CourseSchedule";
import FreeTrial from "../../components/FreeTrial/FreeTrial";
import TajweedCrashText from "../../components/TajweedCrashText/TajweedCrashText";
import JoinTajweedCrash from "../../components/JoinTajweedCrash/JoinTajweedCrash";
import MasterQuran from "../../components/MasterQuran/MasterQuran";
import SpecialProgram from "../../components/SpecialProgram/SpecialProgram";
import TajweedCrashLearn from "../../components/TajweedCrashLearn/TajweedCrashLearn";
import TajweedCrashHero from "../../components/TajweedCrashHero/TajweedCrashHero";
import TajweedCrashForm from "../../components/ContactForm/TajweedCrashForm";

const TajweedCrash = () => {
  const [openModal, setOpenModal] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Tajweed Crash Course - EmanTime</title>
      </Helmet>
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      {isLargeScreen && <Topbar />}
      <TajweedCrashHero />
      {/* <CourseHero
        title="in Just 3 Days"
        boldTitle="Perfect Your Quran Recitation"
        text="A Special Ramadan "
        boldText="Tajweed Crash Course"
        image={images.tajweebCrashBg}
      /> */}
      <MasterQuran />
      <SpecialProgram />
      <TajweedCrashLearn />
      <TajweedReasons />
      <CourseSchedule />
      <JoinTajweedCrash />
      <FreeTrial
        title="Don’t Let This Ramadan Pass Without Perfecting"
        boldTitle="Your Recitation!"
        description="A few hours of focused learning can change how you recite the Quran forever."
        btnText="Secure Your Spot Now!"
      />
      <TajweedCrashForm />

      {/* <TajweedCrashText /> */}
      {/* <CourseOverview
        image={course.images.overview}
        overviewText={course.overviewText}
        reverse={course.reverseOverview || false}
      /> */}
      {/* <CourseLearn
        image={course.images.learn}
        learnItems={course.whatYouWillLearn}
        reverse={course.reverseLearn || false}
        bgColor={course.bgColor}
      /> */}
      {/* <CourseFor
        courseFor={course.courseFor}
        transparent={course.transparentBg || false}
      /> */}
      {/* <CourseMatter
        matterText={course.whyCourseMatters}
        image={course.images.matterImg}
        reverse={course.reverseMatter || false}
        transparent={course.transparentBg || false}
      /> */}
      {/* {course.keyFeatures && (
        <CourseFeatures keyFeatures={course.keyFeatures} />
      )} */}
      <FooterMosque />
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default TajweedCrash;
