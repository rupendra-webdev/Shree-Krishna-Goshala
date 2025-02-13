import React from "react";
import { FaDonate } from 'react-icons/fa'; // Import an icon for the donation button

const Donation = () => {
  return (
    <section id="donation" className="donation-section">
      <div className="donation-content">
        <div className="donation-text">
          <h2>Support Our Goshala</h2>
          <p>"Your donation helps us provide food, shelter, and medical care for our cows."</p>
          <a href="upi://pay?pa=yourupiid@upi&pn=Shree Krishna Goshala&cu=INR" className="btn btn-success">
            <FaDonate /> Donate via UPI
          </a>
        </div>
        <div className="donation-qr">
          <img src="src/assets/Qr.png" alt="Donation QR Code" width="200" />
        </div>
      </div>
    </section>
  );
};

export default Donation;