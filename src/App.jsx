import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Donation from "./components/Donation";
import Videos from "./components/VideoComponent";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const donationRef = useRef(null);
  const galleryRef = useRef(null);
  const videosRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutUsRef = useRef(null);

  // State to manage language
  const [language, setLanguage] = useState("en");

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "hi" : "en"));
  };

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Header with navigation links */}
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToDonation={() => scrollToSection(donationRef)}
        scrollToGallery={() => scrollToSection(galleryRef)}
        scrollToVideos={() => scrollToSection(videosRef)}
        scrollToTestimonials={() => scrollToSection(testimonialsRef)}
        scrollToAboutUs={() => scrollToSection(aboutUsRef)}
      />

      {/* Home Section */}
      <div ref={homeRef}>
        <Home language={language} />
      </div>

      {/* Donation Section */}
      <div ref={donationRef}>
        <Donation language={language} />
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef}>
        <Gallery language={language} />
      </div>

      {/* Videos Section */}
      <div ref={videosRef}>
        <Videos language={language} />
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef}>
        <Testimonials language={language} />
      </div>

      {/* About Us Section */}
      <div ref={aboutUsRef}>
        <AboutUs language={language} />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;