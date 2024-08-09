import { useState } from "react";
import "./Footer.css";
import facebookLogo from "../../../assets/svgs/facebook.svg";
import instagramLogo from "../../../assets/svgs/instagram.svg";

// This array and addEmail function is a placeholder until I can get the idea of how i want to set up the CMS backend
let subscribedEmails = [];
const addEmail = (email) => {
  subscribedEmails.push(email);
  console.log("Subscribed emails:", subscribedEmails);
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // need to add if email is in, opt out?
    if (email) {
      addEmail(email);
      setSuccessMessage("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    }
  };

  return (
    <footer className="footer">
      <div id="ig">
        <a href="(shop IG)" target="_blank">
          <img src={instagramLogo} className="logo" alt="instagram logo" />
        </a>
      </div>
      <div>
        <h2>Sign up for our newsletter!</h2>
        <form onSubmit={handleFormSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            className="email-input"
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
      <div id="fb">
        <a href="(shop FB)" target="_blank">
          <img src={facebookLogo} className="logo" alt="facbook logo" />
        </a>
      </div>
    </footer>
  );
}
