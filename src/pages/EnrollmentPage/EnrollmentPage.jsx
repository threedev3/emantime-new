import React from "react";
import EnrollmentForm from "../../components/EnrollmentForm/EnrollmentForm";
import { useParams } from "react-router-dom";

const EnrollmentPage = () => {
  const { id } = useParams(); // Extract the ID from the URL
  console.log("Enrollment ID:", id);
  return (
    <div>
      <EnrollmentForm demoId={id} />
    </div>
  );
};

export default EnrollmentPage;
