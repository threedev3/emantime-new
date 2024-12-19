import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PricingPage from "./pages/Pricing/PricingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Toaster } from "react-hot-toast";
import CoursePage from "./pages/CoursePage/CoursePage";
import EnrollmentPage from "./pages/EnrollmentPage/EnrollmentPage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="/enrollment-form/:id" element={<EnrollmentPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
