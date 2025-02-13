import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/sutodgoshala.png";

const Header = ({ scrollToHome, scrollToDonation, scrollToVideos, scrollToGallery, scrollToTestimonials, scrollToAboutUs }) => {
  const [language, setLanguage] = useState("en"); // State to manage language

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "hi" : "en")); // Toggle between English and Hindi
  };

  // Texts in different languages
  const texts = {
    en: {
      home: "Home",
      gallery: "Gallery",
      images: "Images",
      videos: "Videos",
      blog: "Blog",
      donate: "Donate",
      testimonials: "Testimonials",
      howToVisit: "How to Visit",
      aboutUs: "About Us",
      language: "Language",
    },
    hi: {
      home: "घर",
      gallery: "गैलरी",
      images: "छवियाँ",
      videos: "वीडियो",
      blog: "ब्लॉग",
      donate: "दान करें",
      testimonials: "साक्षात्कार",
      howToVisit: "कैसे जाएँ",
      aboutUs: "हमारे बारे में",
      language: "भाषा",
    },
  };

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" className="shadow rounded">
      <Container>
        {/* Logo in the left corner */}
        <Navbar.Brand onClick={scrollToHome} style={{ cursor: "pointer" }}>
          <img
            src={logo}
            alt="Goshala Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={scrollToHome}>{texts[language].home}</Nav.Link>
            <NavDropdown title={texts[language].gallery} id="gallery-dropdown">
              <NavDropdown.Item onClick={scrollToGallery}>{texts[language].images}</NavDropdown.Item>
              <NavDropdown.Item onClick={scrollToVideos}>{texts[language].videos}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => window.open('https://yourblogurl.com', '_blank')}>{texts[language].blog}</Nav.Link>
            <Nav.Link onClick={scrollToDonation}>{texts[language].donate}</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link onClick={scrollToTestimonials}>{texts[language].testimonials}</Nav.Link>
            <Nav.Link onClick={() => window.open('https://howtovisit.com', '_blank')}>{texts[language].howToVisit}</Nav.Link>
            <Nav.Link onClick={scrollToAboutUs}>{texts[language].aboutUs}</Nav.Link>
            <Nav.Link onClick={toggleLanguage}>{language === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;