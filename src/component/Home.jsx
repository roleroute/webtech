import React, { useState } from 'react';
import './navbar/navbar.css';
import laptop from "../../public/laptop.jpg";
import moblie from "../../public/screen.jpg";
import computer from "../../public/computer.jpg";
import slide_1 from "../../public/slide-1.jpg";
import slide_5 from "../../public/slide-5.jpg";
import axios from 'axios'
import './navbar/navbar.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { IoWifiSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import Card from './Card';
import { data, Testimonial } from '../../data';
import Modal from './Modal';
import Card3 from './Card3';
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";
import SimpleSlider from './SimpleSlider';
import Card5 from './Card5';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Contact from './Contact';
import Card2 from './Card2';
import Card6 from './Card6';
import Footer from './Footer';



const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  const settings6 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };




  const settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert("Please fill all fields and accept the terms.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/enquiry", formData);
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
      alert("There was an error submitting your enquiry. Please try again later.");
    }
  };



  const renderForm = () => (
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
        By clicking on this, you accept our <a href="/Term&Coditions">terms and conditions</a> and <a href="/PrivacyPolicy">Privacy Policy.</a>
      </label>
    </div>
    <button type="submit">Send</button>
  </form>
  );

  return (
    <div>
      <div className="hero-section">
        <div className="overlay">
          <div className="container2">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-overlay"></div>
                  <img src={laptop} className="d-block w-100" alt="Laptop" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Welcome to Webtechage Private Limited</h5>
                    <p>Webtechage Private Limited is one of the leading bulk SMS service providers...</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-overlay"></div>
                  <img src={moblie} className="d-block w-100" alt="Mobile" />
                  <div className="carousel-caption d-none d-md-block" style={{ marginTop: '-50px' }}>
                    <h5>Bulk SMS</h5>
                    <p>One of India's top providers of bulk SMS services...</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-overlay"></div>
                  <img src={computer} className="d-block w-100" alt="Computer" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Development</h5>
                    <p>By using the top web development services in India...</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-overlay"></div>
                  <img src={slide_1} className="d-block w-100" alt="Slide 1" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>IVR</h5>
                    <p>Use our cloud-based Interactive Voice Response (IVR)...</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-overlay"></div>
                  <img src={slide_5} className="d-block w-100" alt="Slide 5" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Voice Call</h5>
                    <p>Use India's top bulk voice call service to make a lasting impact...</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Card sections */}
      <div className="card-main-box">
        <Card icons={<BiMessageRoundedDetail />} name={"Bulk SMS"} content={"Our Bulk SMS Service includes both promotional and transactional bulk SMS services. We are offering a reliable Bulk SMS service to all our clients."} />
        <Card icons={<IoCallOutline />} name={"Voice call"} content={"Pre-recorded voice messages can be sent to mobile and landline networks via voice calls. We offer the most competitive prices on the market."} />
        <Card icons={<IoWifiSharp />} name={"IVR"} content={"IVR service is the best time and cost-saving solution for customer service automation."} />
        <Card icons={<FaCode />} name={"Digital Marketing"} content={"Take your company to new heights with our high-end digital marketing services."} />
      </div>

      {/* Section 3 */}
      <div className="section-3">
        <div className="img-box-3">
          <img src="https://webtechsolution.co/assets1/img/about.jpg" alt="" />
        </div>
        <div className="img-box-3">
          <h1>BEST DIGITAL MARKETING COMPANY IN INDIA</h1>
          <p>Webtechage Private Limited is not just another digital marketing company. We are among the fastest-growing digital marketing company in India.</p>
          <h4>The New Way to Success in Your Business</h4>
          <p>We know the value of your trust which you set on us and Webtech Solution always does its best to safeguard that trust.</p>
          <ul className='list-ul'>
            <li>Bulk SMS</li>
            <li>Voice Call</li>
            <li>Development</li>
            <li>Digital Marketing</li>
          </ul>
          <button>Read More</button>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-main-box">
        <h1>Services</h1>
        <p>Check our Services</p>
        <p>We offer all the necessary resources for your company to successfully implement its marketing plan.</p>

        <div className='card-2'>
          {data.map((e) => <Card2 data={e} />)}
        </div>
      </div>

      {/* Callback Section */}
      <div className="callback-section">
        <h1>Request for Call Back</h1>
        <p>Need help with promoting and advertising your business? Get a call back from us and discuss all your business needs with our experts and consultants.</p>
        <button onClick={toggleModalVisibility}>Call Back!</button>
      </div>


      <h1 className='we-know'>WE KNOW HOW TO DELIVER GOOD RESULT</h1>
      <div className="resultsection">
        <div className='result-inner result-inner1'>
          <img src="https://webtechsolution.co/assets1/img/service/research.png" alt="" />
        </div>
        <div className='result-inner'>
          <h2>Every Aspect Of Your Website And Business</h2>
          <p>Your business will no longer lag once you connect with our digital marketing experts. We have a team of experts who work from scratch to help you establish a competitive edge over other businesses and your competitors in the same industry. With the help of our services and the advanced tools & tactics we use, it is now easier for you to overcome almost every loophole in the marketing and development of your business.</p> <br />
          <p>We form our marketing strategies after understanding all your business details to help you grow in the best way. We maintain transparency with our clients to let them see how our step by step process and tools are paving a path for their organic growth, brand building, and high profit. To reach your target customers and your sales goal within your set budget, do connect with our experts at Webtechage Private Limited.</p>
        </div>
        <div>
        </div>
      </div>

      <h1 className='we-know'>Exclusive Stunning Features</h1>
      <p className='Ifyouare'> If you are looking for a company that you can rely on for long term success and high-profit margins, then Webtechage Private Limited is the one you are looking for. Our exclusive stunning features will help you know why choosing us will be the best decision for your company.</p>



      <div className="Exclusive">
        <Card3 icons={<BsBriefcase />} title={"Best Value"} dis={"With the gamut of services, a team of professionals, advanced tools, and the best strategies, Webtech Solution is all set to offer the best value to your company in the market. We will leave no stone unturned when it comes to offering development and digital marketing services to your company for getting high ROI and expected results."} />
        <Card3 icons={<BsCardChecklist />} title={"Stunning Services"} dis={"All the services that a business requires to strategize its growth and development are available at Webtech Solution. We offer a spectacular set of services that comes with amazing features to support multiple businesses under one roof for the ultimate goal – Huge Profit and Constant Growth, Connect with us to grow your business like never before."} />

        <Card3 icons={<BsBarChart />} title={"Quickest Support"} dis={"We are committed to providing more than just high-quality services and in-depth knowledge. However, we also think that when people need help, they should get it quickly and seamlessly. To get your questions answered or to receive any technical support you may need for our services, please get in touch with our support team at any time."} />

        <Card3 icons={<BsBinoculars />} title={"BsBinoculars"} dis={"Grow Your Company Improved reach, effective marketing campaigns, extremely engaging content, and a suite of cutting-edge tactics and technologies are all necessary for a firm to grow. We at Webtechage Private Limited provide much more than this to support the growth of your business in regional and international markets."} />
      </div>

      <h1 className='we-know'>OUR WORK</h1>
      <div className="OurWork">
        <h2>Offering a complete spectrum of services</h2>

        <div className="simple-slider-main-box">
          <SimpleSlider />
        </div>
        <div>

          <div className="Traffic">
            <h1>Increase More Traffic Your Business</h1>
            <p>Let your business and your online store grow organically by increasing its visibility with the help of Webtechage Private Limited.</p>
            <button onClick={toggleModalVisibility}> Contact with us </button>

          </div>
        </div>
        <div className="Our_clinet">
          <h1> OUR CLINET </h1>
          <p>10+ company serve</p>
          <div className="unique-slider-main-box">
            <Slider {...settings3}>
              <div className="value-card">
                <img src="https://webtechsolution.co/assets/img/cytochromelifesciences033187.png" alt="" />
              </div>
              <div className="value-card">'
                <img src="https://webtechsolution.co/assets/img/digitalshine629116.png " alt="" />
              </div>
              <div className="value-card">
                <img src="https://webtechsolution.co/assets/img/ranadigitals334789.png" alt="" />
              </div>
              <div className="value-card">
                <img src="https://webtechsolution.co/assets/img/leadinsolution368438.png" alt="" />
              </div>
              <div className="value-card">
                <img src="https://webtechsolution.co/assets/img/skpdigitalservices512071.png" alt="" />
              </div>
              <div className="comp-card">
                <img src="https://webtechsolution.co/assets/img/globaladvanced373707.png" alt="" />
              </div>

            </Slider>


          </div>

          <div className="Testimonials">
            <h1>Testimonials</h1>
            <p>We had worked with several other marketing companies in the past who didn't deliver results and I'm happy to say WSI is doing that for us.
            </p>

            <div className="unique-slider-main-box">
              <Slider {...settings6}>
                {
                  Testimonial.map((e)=>{
                      return(
                        <Card5 Testimonial={e}/>
                      )
                  })
                }
               
              </Slider>
            </div>


          </div>
          <div className="Frequently_Asked_Questions">
            <h1> Frequently Asked Questions </h1>

            <Accordion>
              <AccordionItem header="What kind of businesses do you work with?">

                We work with a broad range of company types [small start-ups, large corporations, nonprofits, B2B, B2C and more] across many business industries [technology, food, apparel, health + beauty, camps, travel, finance, arts, fair trade, and more].


              </AccordionItem>

              <AccordionItem header="How long does it take to build a website?">
                Our standard websites take approximately 90-120 days to create. Our E-commerce (online store) websites take approximately 160 days to create. This time will vary from project to project.
              </AccordionItem>

              <AccordionItem header="What platform do you build your websites on?">
                We build all of our websites on the open-source Content Management System (CMS) platform called MODX. You can learn more about MODX here
              </AccordionItem>

              <AccordionItem header="Will my website be mobile-friendly?">
                Let it be a ticket booking, online order, browsing, etc. people are keen to do these tasks on the go. So, developing a responsive website will help in increasing the look and feel of your website on both small and large devices.
              </AccordionItem>


              <AccordionItem header="How long will it take to get to the 1st page of Google?">
                Normally it would take a minimum of 6 months for your website to appear on the 1st page of Google and it completely depends on the difficulty of the keywords used in your website.
              </AccordionItem>

              <AccordionItem header="Can you help me improve my site without building a new website?">
                Our adroit UI UX experts can also help you with suggestions on improving user experience in an existing website hence, we can enhance your existing website without any hassle..
              </AccordionItem>

            </Accordion>
          </div>
          <h1>BLOG</h1>
          <p className='Blog-p'>Recent posts form our Blog</p>
          <div className="Blog">
            <Card6 image="https://webtechsolution.co/application/views/webtech/images/62568e116a806.png"
              title="How Mobile Marketing can be Made Effective With Bulk SMS Service in India"
              id="1"
            />

            <Card6 image="https://webtechsolution.co/application/views/webtech/images/625e4776d1dbb.png"
              title="How Mobile Marketing can be Made Effective With Bulk SMS Service in India"
              id="2"
            />

            < Card6 image="https://webtechsolution.co/application/views/webtech/images/625675c4da916.png"
              title="Learn How to Use Promotional SMS Service for Growth of business"
              id="3"
            />

          </div>
          <div className="Contact">
            <h1> CONTACT</h1>
            <p> Fill the form below and one of our consultants will analyse your requirements and get back to you with a free analysis and proposal. Rank high & engage with the right audience to get success online. Contact us today!</p>
            <Contact />



          </div>


        </div>



      </div>



      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
        {renderForm()}
      </Modal>
    </div>
  );
}

export default Home;
