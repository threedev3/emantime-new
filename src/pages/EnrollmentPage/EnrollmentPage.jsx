import React, { useEffect } from "react";
import EnrollmentForm from "../../components/EnrollmentForm/EnrollmentForm";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const EnrollmentPage = () => {
  const { id } = useParams(); // Extract the ID from the URL

  // useEffect(() => {
  //   // Track conversion when the enrollment page loads
  //   if (window.gtag) {
  //     window.gtag("event", "conversion", {
  //       send_to: "AW-16935762534",
  //       value: 1.0,
  //       currency: "USD",
  //     });
  //   }
  // }, []);

  return (
    <div>
      <Helmet>
        <title>
          Enrollmemt Form - EmanTime – Learn Quran and Islamic Studies Online
          From Expert Arab Teachers
        </title>
      </Helmet>
      <EnrollmentForm demoId={id} />
    </div>
  );
};

export default EnrollmentPage;
