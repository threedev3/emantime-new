import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Herosection from "../../components/Herosection/Herosection";
import Topbar from "../../components/Topbar/Topbar";
import Reasons from "../../components/Reasons/Reasons";
import Unique from "../../components/Unique/Unique";
import Process from "../../components/Process/Process";
import Programs from "../../components/Programs/Programs";
import Pricing from "../../components/Pricing/Pricing";
import Testimonials from "../../components/Testimonials/Testimonials";
import FreeTrial from "../../components/FreeTrial/FreeTrial";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Choose from "../../components/Choose/Choose";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import FooterMosque from "../../components/FooterMosque/FooterMosque";
import TrialPopup from "../../components/TrialPopup/TrialPopup";
import { Helmet } from "react-helmet";
import StoryMission from "../../components/StoryMission/StoryMission";
import Services from "../../components/Services/Services";
import useMediaQuery from "../../hooks/useMediaQuery";
import ServicesMobile from "../../components/Services/ServicesMobile";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      <Helmet>
        <title>
          EmanTime – Learn Quran and Islamic Studies Online From Expert Arab
          Teachers
        </title>
      </Helmet>
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      {isLargeScreen && <Topbar />}
      <Herosection />
      {isMediumScreen ? <Services /> : <ServicesMobile />}
      <StoryMission />
      <Choose />
      <Reasons />
      <Unique />
      <Process />
      <Programs />
      <Pricing />
      <Testimonials />
      <FreeTrial
        title="Join the Thousands Who"
        boldTitle="Trust EmanTime"
        btnText="Book Your Free Trial"
      />
      <ContactForm />
      {/* <FooterMosque /> */}
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default Home;
