import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission with API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please complete all fields and accept the terms.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("https://webtechapi.vercel.app/enquiry", formData);

      console.log("Response data:", response.data);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        termsAccepted: false,
      });
    } catch (error) {
      alert(
        error.response.data.message
      );
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-inner-card">
      <form onSubmit={handleSubmit}>
        <p className="FREEQuote"> Request a FREE Quote</p>
        <h1>Get response within 24 hours</h1>

        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="moblie"></label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your mobile number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="discription"></label>
          <input
            type="text"
            id="description"
            name="message"
            placeholder="Description"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="checkbocheckbox">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label htmlFor="x">
            By Clicking on the same you are accepting our{" "}
            <a href="">terms and condition</a> and{" "}
            <a href="">Privacy Policy.</a>
          </label>
        </div>
        <div class="send">
          <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send your Request"}{" "}
        </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
