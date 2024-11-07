import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    termsAccepted: false,
    authorization: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill all fields and accept the terms.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/enquiry", formData);
      alert(response.data.message);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        termsAccepted: false,
        authorization: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your request. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="contact-main-box">
        <div className="contact-inner-box">
          <div className="contact-address-box">
            <div className="location-box">
              <FaLocationDot />
            </div>
            <h4>Our Address</h4>
            <p>
              B - 113, B Block, Sector 64,Noida, Uttar Pradesh, India, 201301
            </p>
          </div>
          <div className="contact-address-box contact-address-box2">
            <div div className="contect-inner-i">
              <div className="location-box">
                <MdOutlineMail />
              </div>
              <h3>Email Us</h3>
              <h2>info@webtechage.com</h2>
            </div>

            <div className="contect-inner-i">
              <div className="location-box">
                <BiPhoneCall />
              </div>
              <h3>Call Us</h3>
              <h2>+91 70656 80680</h2>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Discription"></label>

              <textarea
                type="discription"
                id="message"
                name="message"
                placeholder="Discription"
                className="discription"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <label htmlFor="checkbox">
                  By Clicking on the same you are accepting our{" "}
                  <a href="/Term&Coditions">terms and condition</a> and{" "}
                  <a href="/PrivacyPolicy">Privacy Policy.</a>
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="authorization"
                  checked={formData.authorization}
                  onChange={handleChange}
                />
                <label htmlFor="checkbox">
                  "I Authorize webtechage to send notification via
                  SMS/RCS/Call/Email/Whatsapp"{" "}
                </label>
              </div>
              <div className="button23">
                <button>Send more Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
