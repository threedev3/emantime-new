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

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Helmet>
        <title>
          EmanTime – Learn Quran and Islamic Studies Online From Expert Arab
          Teachers
        </title>
      </Helmet>
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      <Topbar />
      <Herosection />
      <Choose />
      <Reasons />
      <Unique />
      <Process />
      <Programs />
      <Pricing />
      <Testimonials />
      <FreeTrial />
      <ContactForm />
      {/* <FooterMosque /> */}
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default Home;
