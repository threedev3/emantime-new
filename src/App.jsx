import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import PricingPage from "./pages/Pricing/PricingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Toaster } from "react-hot-toast";
import CoursePage from "./pages/CoursePage/CoursePage";
import EnrollmentPage from "./pages/EnrollmentPage/EnrollmentPage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="/enrollment-form/:id" element={<EnrollmentPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
