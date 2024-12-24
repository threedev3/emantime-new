import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import SubHero from "../../components/SubHero/SubHero";
import Footer from "../../components/Footer/Footer";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import ContactComp from "../../components/ContactComp/ContactComp";
import FooterMosque from "../../components/FooterMosque/FooterMosque";
import TrialPopup from "../../components/TrialPopup/TrialPopup";
import { Helmet } from "react-helmet";
import useMediaQuery from "../../hooks/useMediaQuery";

const ContactPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      <Helmet>
        <title>Contact Us - EmanTime</title>
      </Helmet>
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      {isLargeScreen && <Topbar />}

      <SubHero
        title="Contact "
        boldTitle="Us"
        text="Have any questions or need more information? Contact Emantimes Quran Academy today!"
      />
      <ContactComp />
      <FooterMosque />
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default ContactPage;
