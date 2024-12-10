import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import SubHero from "../../components/SubHero/SubHero";
import Pricing from "../../components/Pricing/Pricing";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import PricingText from "../../components/PricingText/PricingText";
import PricingComp from "../../components/PricingComp/PricingComp";
import FooterMosque from "../../components/FooterMosque/FooterMosque";

const PricingPage = () => {
  return (
    <div>
      <Topbar />
      <SubHero
        title="Our "
        boldTitle="Pricing"
        text="At Emantimes Quran Academy, we offer flexible pricing options to suit your learning needs."
      />
      <PricingText />
      <PricingComp />
      <ContactForm />
      <FooterMosque />
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default PricingPage;
