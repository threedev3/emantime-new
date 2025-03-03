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

const CoursePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const { slug } = useParams(); // Get the slug from the URL
  const course = coursesData[slug]; // Fetch the course data using the slug

  if (!course) {
    return <h1>Course Not Found</h1>; // Handle invalid slugs
  }

  return (
    <div>
      <Helmet>
        <title>{`${course.boldTitle} ${course.title}`} - EmanTime</title>
      </Helmet>
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      {isLargeScreen && <Topbar />}
      <CourseHero
        title={course.title}
        boldTitle={course.boldTitle}
        text={course.text}
        image={course.images.banner}
      />
      <CourseOverview
        image={course.images.overview}
        overviewText={course.overviewText}
        reverse={course.reverseOverview || false}
      />
      <CourseLearn
        image={course.images.learn}
        learnItems={course.whatYouWillLearn}
        reverse={course.reverseLearn || false}
        bgColor={course.bgColor}
      />
      <CourseFor
        courseFor={course.courseFor}
        transparent={course.transparentBg || false}
      />
      <CourseMatter
        matterText={course.whyCourseMatters}
        image={course.images.matterImg}
        reverse={course.reverseMatter || false}
        transparent={course.transparentBg || false}
      />
      {course.keyFeatures && (
        <CourseFeatures keyFeatures={course.keyFeatures} />
      )}
      <FooterMosque />
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default CoursePage;
