import React from "react";
import FooterMosque from "../../components/FooterMosque/FooterMosque";
import Footer from "../../components/Footer/Footer";
import RamadanLogin from "../../components/RamadanPlanner/login";
import TermsNavbar from "../../components/Navbar/TermsNavbar";

const RamadanPlanner = () => {
  return (
    <div>
      <TermsNavbar />
      <RamadanLogin />
      <FooterMosque />
      <Footer />
    </div>
  );
};

export default RamadanPlanner;
