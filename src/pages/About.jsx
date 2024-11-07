import React, { useState } from "react";
import Modal from "../component/Modal";
import { IoCheckmarkOutline } from "react-icons/io5";
import { TfiTwitter } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import RenderForm from "../component/RenderForm";
import MyForm from "../component/MyForm";

const renderForm = () => <RenderForm />;

const About = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <div className="blog-banner">
        <div className="blog-inner-card">
          <h2>About</h2>
          <p>
            Get a professional toll free number and give your customers the
            privilege of calling your business for free
          </p>
          <a href="tel:+917065680680">
            <button>+91-7065680680</button>
          </a>
          <button onClick={toggleModalVisibility}>Get in Touch</button>
        </div>
        <MyForm />
      </div>
      {/* Voice Section */}
      <div className="Voice-box Digital-box About-us">
        <h1>ABOUT US</h1>
        <p>
          Webtechage is not just another digital marketing company. We are among
          the fastest-growing digital marketing company in India. We have a
          great team of people with deep industry knowledge.
        </p>
        <div className="voice-outer">
          <div className="Voice_services Voice-img ">
            <img
              src="https://webtechsolution.co/assets1//img/service/smo816332.png"
              alt=""
            />
          </div>
          <div className="Voice_services Digital_service About-service About-service2">
            <h1>Who we are?</h1>
            <h2>About Webtechage Private Limited</h2>
            <p>
              Webtechage Private Limited has risen together of the most
              prestigious and reputed Online Digital Marketing and Web
              Development company in India - one of the leading web service
              providers since 2008, with Over 7000 Successful Presentations &
              over 8000 customers across diverse industries, we are a positive
              company strongly looking forward. Best Domain Expertise, Good
              Technology Skills, Process Focus, Speed, and Innovations enable us
              to produced value-added, top-quality IT solutions for our
              customers. At Webtechage we aim further than providing solutions
              that impact business; we aim to vary the way you are doing
              business.
            </p>
            <p>
              In Webtechage Private Limited, the specialists keep their brains
              free from any limits with the goal that they will envision and
              imagine incredible ideas, which can be adored by your customers.
              we all know that you simply put a lot of trusts in us and hence we
              generally carry out our best with conviction and dedication to
              safeguard that belief and confidence. Webtech Solution constructs
              and fabricates comprehensive website design and renders such
              development services that boost highly scalable designs, the
              incredible notion of graphics and layouts, and search engine
              optimized content. Our team has eminent skills that will be
              tailored to fulfill clients’ requirements based on the newest
              technology platforms.
            </p>
          </div>
        </div>
      </div>
      <div className="Mission">
        <div className="Aboutmission">
          <h1>Our Mission</h1>
          <h2>(What can we wish to achieve?)</h2>
          <p>
            "To achieve our objectives in an environment of fairness, honesty,
            and courtesy towards our customers, employees, vendors, and society
            at large."
          </p>
          <h3>Our Vision </h3>
          <h4>(What we aim to?)</h4>
          <p1>
            "We are a globally respected organization that gives best-of-thought
            business solutions, leveraging technologies, delivered by best
            professional teams."
          </p1>
        </div>

        <div className="Aboutmission Aboutimg">
          <img
            src="https://webtechsolution.co/assets1//img/service/smo8163321.png "
            alt=""
          />
        </div>
      </div>
      <div className="Values">
        <div className="Values-SMS Valuesimg">
          <img
            src="https://webtechsolution.co/assets1//img/service/smo8163321.png "
            alt=""
          />
        </div>
        <div className="Values-SMS">
          <h1> Values</h1>
          <h2>(What can we believe in?)</h2>
          <p>
            We are passionate about our work profession, we believe in making
            genuine commitments and honest delivery of work. Our creative
            strength lies within the expertise and knowledge of our team. We
            work together by establishing trust and confirm that delivery is
            correct on time.
          </p>

          <p>
            <strong>Customer Satisfaction:</strong> To surpass customer
            expectations consistently.
          </p>
          <p>
            <b>Quality & Fairness:</b> To be objective and transactions-oriented
            and thereby earn trust and respect.
          </p>

          <ul className="Values-ul">
            <li>
              <IoCheckmarkOutline />
              <b>Bulk SMS </b>
            </li>
            <li>
              <IoCheckmarkOutline />
              <b>Voice Service</b>
            </li>
            <li>
              <IoCheckmarkOutline />
              <b>IVR</b>
            </li>
            <li>
              <IoCheckmarkOutline />
              <b>Development</b>
            </li>
            <li>
              <IoCheckmarkOutline />
              <b>Digital Marketing</b>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="we-know we-about">OUR EXPERT TEAM</h1>
      <p className="Ifyouare Ifabout">
        Our best-experienced teams deliver excellent services. Expertise comes
        from experience, hard works, and dedication. Ask us! We have been
        learning and growing steadily over the last 7 years to become the
        leading digital marketing company in Noida. We attract the best talent.
        We invest time to enhance their skills. And our team reflects our
        commitment to <b>WEBTECHAGE</b>
      </p>
      <div className="Admin-Manager-main">
        <div className="Admin-Manager">
          <img
            src="https://webtechsolution.co/assets1//img/team/rohit-raghav-078715.png"
            alt=""
          />
          <h1>
            <b>Rohit Raghav</b>
          </h1>
          <p>Managing Director</p>

          <div className="whatsaap-hover">
            <div className="Admin-Icons">
              <TfiTwitter />
            </div>
            <div className="Admin-Icons">
              <FaFacebook />
            </div>
            <div className="Admin-Icons">
              <FiPhone />
            </div>
            <div className="Admin-Icons">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="Admin-Manager">
          <img
            src="https://webtechsolution.co/assets1//img/team/mukesh-yadav691349.jpeg"
            alt=""
          />
          <h1>
            <b>Mukesh Yadav</b>
          </h1>
          <p>Admin Manager</p>
          <div className="Social">
            <li> </li>
            <div className="whatsaap-hover">
              <div className="Admin-Icons">
                <TfiTwitter />
              </div>
              <div className="Admin-Icons">
                <FaFacebook />
              </div>
              <div className="Admin-Icons">
                <FiPhone />
              </div>
              <div className="Admin-Icons">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        <div className="Admin-Manager">
          <img
            src="https://webtechsolution.co/assets1//img/team/rehan-khan014065.jpeg"
            alt=""
          />
          <h1>
            <b>Rehan Khan</b>
          </h1>
          <p>Account Department Head</p>
          <div className="whatsaap-hover">
            <div className="Admin-Icons">
              <TfiTwitter />
            </div>
            <div className="Admin-Icons">
              <FaFacebook />
            </div>
            <div className="Admin-Icons">
              <FiPhone />
            </div>
            <div className="Admin-Icons">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="Admin-Manager">
          <img
            src="https://webtechsolution.co/assets1//img/team/ankit-shrivastav558165.jpg"
            alt=""
          />
          <h1>
            <b>Ankit Shrivastav</b>
          </h1>
          <p>Human Resource</p>
          <div className="whatsaap-hover">
            <div className="Admin-Icons">
              <TfiTwitter />
            </div>
            <div className="Admin-Icons">
              <FaFacebook />
            </div>
            <div className="Admin-Icons">
              <FiPhone />
            </div>
            <div className="Admin-Icons">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
        {renderForm()}
      </Modal>
    </>
  );
};

export default About;
