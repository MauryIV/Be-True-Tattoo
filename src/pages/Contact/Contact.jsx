import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    size: "",
    inkColor: "black-gray",
    message: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic for sending email
    setFormData({
      name: "",
      number: "",
      email: "",
      subject: "",
      size: "",
      inkColor: "black-gray",
      message: "",
      file: null,
    });
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h2>Contact</h2>
          <p>
            You can reach us through Facebook, Instagram and phone, or feel free
            to stop in! While our artists set their own schedules, the shop is
            typically open: Tuesday - Saturday from 12pm - 7pm Sunday by
            appointment only Monday by appointment only Walk-ins are welcome
            contingent on availability and design complexity.
          </p>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Number:
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Approximate Size:
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Ink Color:
              <select
                name="inkColor"
                value={formData.inkColor}
                onChange={handleInputChange}
                required
              >
                <option value="black-gray">Black & Gray</option>
                <option value="color">Color</option>
              </select>
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Upload Image:
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
