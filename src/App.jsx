import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import ServicesPage from "./components/pages/ServicesPage";

import ScrollToTop from "./components/CommonComponent/ScrollToTop";

function App() {
  const { user } = useAuth();

  return (
    <>
      <div className="page-transition ">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Home />
                </PublicLayout>
              }
            />
            <Route
              path="/about-us"
              element={
                <PublicLayout>
                  <AboutUs />
                </PublicLayout>
              }
            />
            <Route
              path="/contact-us"
              element={
                <PublicLayout>
                  <ContactUs />
                </PublicLayout>
              }
            />
            <Route
              path="/services"
              element={
                <PublicLayout>
                  <ServicesPage />
                </PublicLayout>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
