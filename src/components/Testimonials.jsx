import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const testimonialsData = [
  {
    name: "John Doe",
    image: "./src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "./src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
  {
    name: "John Doe",
    image: "/src/assets/gallery2.jpeg", // Replace with actual image URL
    comment: "An amazing place full of love and care for cows!",
  },
 
]
  

const Testimonials = () => {
  const chunkSize = 3; // Number of testimonials to show in a row
  const chunks = [];

  // Create chunks of testimonials
  for (let i = 0; i < testimonialsData.length; i += chunkSize) {
    chunks.push(testimonialsData.slice(i, i + chunkSize));
  }

  return (
    <section id="testimonials" className="py-5 bg-light testimonials-section">
      <h2 className="text-center">What People Say</h2>
      <Container>
        <Carousel interval={3000} controls={true} indicators={true}>
          {chunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="text-center">
                {chunk.map((testimonial, idx) => (
                  <Col key={idx} md={4} className="mb-4">
                    <div className="testimonial-card p-3 border rounded">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle mb-3"
                        style={{ width: "100px", height: "100px" }} // Adjust size as needed
                      />
                      <h5>{testimonial.name}</h5>
                      <p>"{testimonial.comment}"</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;