import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Image */}
      <img src="/src/assets/footer-bg-image.png" alt="Top Footer" />

      <div style={{ padding: '20px 0' }}>
        <Container>
          <Row>
            {/* Left Side: Logo and Address */}
            <Col md={4} className="text-left">
              <img src="path/to/your/logo.png" alt="Logo" className="logo" />
              <p>123 Goshala St.<br />City, State, ZIP</p>
            </Col>

            {/* Center: Quick Links and Social Media Icons */}
            <Col md={4} className="text-center">
              <h5>Quick Links</h5>
              <ul className="quick-links">
                <li><a href="#home" className="text-white">Home</a></li>
                <li><a href="#about" className="text-white">About Us</a></li>
                <li><a href="#services" className="text-white">Services</a></li>
                <li><a href="#contact" className="text-white">Contact</a></li>
              </ul>
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="https://instagram.com" className="text-white"><FaInstagram /></a>
                <a href="https://facebook.com" className="text-white"><FaFacebook /></a>
                <a href="https://youtube.com" className="text-white"><FaYoutube /></a>
                <a href="https://whatsapp.com" className="text-white"><FaWhatsapp /></a>
              </div>
            </Col>

            {/* Right Side: Newsletter Subscription */}
            <Col md={4} className="text-right">
              <h5>Subscribe to our Newsletter</h5>
              <Form inline className="newsletter">
                <Form.Control type="email" placeholder="Enter your email" />
                <Button variant="primary">Subscribe</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Image */}
      <img src="./src/assets/footer-bg-image.png" alt="Bottom Footer" />

      <div className="bottom-text">
        <Container>
          <p>&copy; {new Date().getFullYear()} Shree Krishna Goshala. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;