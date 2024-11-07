import React, { useState } from 'react';
import axios from 'axios'

const Lets = () => {

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
    
          // API call
          const response = await axios.post("https://webtechapi.vercel.app/enquiry", formData);
    
          // Success handling
          alert("Request sent successfully!");
          console.log("Response data:", response.data);
    
          // Clear the form
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
            termsAccepted: false,
          });
        } catch (error) {
          // Error handling
          console.error("Error submitting form:", error);
          alert(
            "There was an error submitting your request. Please try again later."
          );
        } finally {
          setLoading(false);
        }
      };

  return (
    <>
       <div className="Lets-main">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="mobile"
                id="mobile"
                name="phone"
                placeholder=" Your mobile number"
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
                id="discription"
                name="message"
                placeholder="Discription"
                className="discription"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  By Clicking on the same you are accepting our{" "}
                  <a href="/Term&Coditions">terms and condition</a> and{" "}
                  <a href="/PrivacyPolicy">Privacy Policy.</a>
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" />
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
    </>
  )
}

export default Lets
