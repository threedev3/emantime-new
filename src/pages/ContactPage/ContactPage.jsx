import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import SubHero from "../../components/SubHero/SubHero";
import Footer from "../../components/Footer/Footer";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import ContactComp from "../../components/ContactComp/ContactComp";
import FooterMosque from "../../components/FooterMosque/FooterMosque";

const ContactPage = () => {
  return (
    <div>
      <Topbar />
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