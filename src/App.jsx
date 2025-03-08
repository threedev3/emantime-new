import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import PricingPage from "./pages/Pricing/PricingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Toaster } from "react-hot-toast";
import CoursePage from "./pages/CoursePage/CoursePage";
import EnrollmentPage from "./pages/EnrollmentPage/EnrollmentPage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import { initializeGTM, trackEvent } from "./utils/analytics";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import TajweedCrash from "./pages/TajweedCrash/TajweedCrash";
import RamadanPlanner from "./pages/RamadanPlannerPage";
import RamadanDashBoard from "./components/RamadanPlanner/Dashboard";

// Create a separate component for page tracking
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackEvent("page_view", {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    initializeGTM();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <BrowserRouter>
        <PageTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route
            path="/courses/tajweed-crash-course"
            element={<TajweedCrash />}
          />
          <Route path="/enrollment-form/:id" element={<EnrollmentPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/ramadan-planner" element={<RamadanPlanner />} />
          <Route path="/dashboard" element={<RamadanDashBoard />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
