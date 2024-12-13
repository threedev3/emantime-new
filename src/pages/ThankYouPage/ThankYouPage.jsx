import React from "react";
import ThankYouBanner from "../../components/ThankYouBanner/ThankYouBanner";
import Choose from "../../components/Choose/Choose";
import FooterMosque from "../../components/FooterMosque/FooterMosque";
import Footer from "../../components/Footer/Footer";

const ThankYouPage = () => {
  return (
    <div>
      <ThankYouBanner
        title="Thank You "
        text="Thank you for visiting our website and for your interest in Eman Time. We truly appreciate your support and engagement!"
      />
      <Choose />
      <FooterMosque />
      <Footer />
    </div>
  );
};

export default ThankYouPage;
