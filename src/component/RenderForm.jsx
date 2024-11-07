import React, { useState } from "react";
import axios from "axios";

const RenderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false); // Loading state

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
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields and accept the terms.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "https://webtechapi.vercel.app/enquiry",
        formData
      );
      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error.response.data.message
      );
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <>
      <form className="callback-form" onSubmit={handleSubmit}>
        <div>
          <h1>Looking to Grow your Business?</h1>
          <p>Get in touch for a free consultation!</p>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="subject"
            className="select-option"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">--select one----</option>
            <option value="Digital-Marketing">Digital Marketing</option>
            <option value="seo-services">SEO Services</option>
            <option value="bulk-sms">Bulk SMS</option>
            <option value="ppc-services">PPC Services</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="ivr-service">IVR Service</option>
            <option value="toll-free">Toll-free</option>
            <option value="voice-service">Voice Call</option>
          </select>
        </div>
        <div>
          <textarea
            className="textarea-1"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">
            By clicking on this, you accept our{" "}
            <a href="">terms and conditions</a> and{" "}
            <a href="">Privacy Policy.</a>
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}{" "}
        </button>
      </form>
    </>
  );
};

export default RenderForm;
