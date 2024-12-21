import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TrialPopup from "../../components/TrialPopup/TrialPopup";
import TermsHeader from "../../components/TermsHeader/TermsHeader";
import Footer from "../../components/Footer/Footer";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import FooterMosque from "../../components/FooterMosque/FooterMosque";
import TermsSection from "../../components/TermsSection/TermsSection";

const TermsConditions = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Terms & Conditions - EmanTime</title>
      </Helmet>
      <TrialPopup openModal={openModal} setOpenModal={setOpenModal} />
      <TermsHeader
        boldTitle="Terms & "
        title="Conditions"
        text="The following Terms & Conditions must be read and agreed to by Students and Parents before enrollment in Emantime Academy:"
      />
      <TermsSection />
      <FooterMosque />
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default TermsConditions;
