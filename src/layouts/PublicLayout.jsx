import React, { useEffect, useState } from "react";
import Footer from "../components/CommonComponent/Footer";
import Navbar from "../components/CommonComponent/Navbar";
import Loader from "../components/CommonComponent/Loader";

export default function PublicLayout({ children }) {
  const [loading, setLoading] = useState(() => {
    const hasLoaded = sessionStorage.getItem("app_loaded");
    return !hasLoaded; 
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("app_loaded", "true");
    }, 7000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-auto">{children}</main>
      <Footer />
    </>
  );
}
