
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { IoCheckmarkOutline } from "react-icons/io5";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RiGpsFill } from "react-icons/ri";
import { RiBodyScanFill } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { PiStorefrontLight } from "react-icons/pi";
import { BiReceipt } from "react-icons/bi";
import { PiCube } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import RenderForm from '../component/RenderForm';
import MyForm from '../component/MyForm';
import Lets from '../component/Lets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};



const renderForm = () => <RenderForm />;



const AndroidDevelopment = () => {



  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>

      <div className="blog-banner">
        <div className="blog-inner-card">

          <h2>Best Mobile App Development Company in Delhi & Gurgaon</h2>
          <p>We design and develop Android & IOS mobile applications for
          </p>
          <ul>
            <p>Sports and Entertainment</p>
            <p>Healthcare and Telemedicine</p>
            <p>Chating and Social Networking</p>
            <p>Food Delivery and Hospitality</p>
          </ul>
          <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
          <button  onClick={toggleModalVisibility}>Get in Touch</button>
        </div>
      <MyForm/>

      </div>
      {/* Voice Section */}
      <div className="Voice-box Digital-box About-us">
        <h1>ANDROID APPLICATION</h1>
        <p>Here We Webtechage Private Limited Provide The Complete Solution For Mobile Apps
        </p>
        <div className="voice-outer">
          <div className="Voice_services Voice-img " >
            <img src="https://webtechsolution.co/assets1//img/service/android-application336916.png" alt="" />
          </div>
          <div className="Voice_services Digital_service About-service IVR-Android ">
            <h1>APPLICATION DEVELOPMENT</h1>
            <h2>Mobile App Development Services</h2>
            <p>We are the best App Development Service Provider in Noida, an expert in Web development technology and Mobile app development. Our App Development Company is engaged in offering web solutions and application development services including IOS App Development, iPhone App Development, Ecommerce Development, Open Source Development, Phone Gap Development, Digital Marketing, Android App Development, PSD to HTML Services, at competitive rates. We provide perfectly balanced Web Development packages and Mobile App Development solutions to optimize the solutions for digital marketing.</p>

          </div>
        </div>
      </div>
      <div className="Mission">
        <div className="Aboutmission Androidmission">
          <h1>APPLICATION DEVELOPMENT</h1>
          <h2>Grow Your Business By Contacting Best App Development Company in Noida
          </h2>
          <p>"Mobile App Development has transformed business communication and processes with the customers and reformulates the way technology and people interact with each other. We create a mobile app that delivers high performance and services to the specific needs of our clients. Our team of experts at the best Mobile App Development Company in Noida can help you with their deep industry knowledge if you need a mobile app development solution for your iPhone, IPad, or Android. Our mobile app development services can be availed for getting the best applications for mobile devices such as iPhone, IPad, Android Wearables, Android Phones, and IOS Wearables."</p>
        </div>

        <div className="Aboutmission Aboutimg">
          <img src="https://webtechsolution.co/assets1//img/service/android-application457968.png " alt="" />
        </div>
      </div>
      <div className="Values">
        <div className="Values-SMS Valuesimg">
          <img src="https://webtechsolution.co/assets1//img/service/android-application311441.png " alt="" />

        </div>
        <div className="Values-SMS Andoid-SMS">
          <h1>What Do We Offer At Mobile App Development Services?</h1>
          <p>We offer different app development services such as iPhone App Development, IPad App Development, Android App Development, Wearable Development, IoT Development, IBeacon Development. Our expert team of mobile app developers is capable of accomplishing individual and high-end business requirements. Our mobile app development team can create highly personalized and customized mobile applications for your business. So dial our number to talk with our professionals and get more insight details.</p>

        </div>
      </div>

      {/*IVR Special Fetures*/}
      <div className="IVR-Special-Fetures Android-Fetures">
        <h1>ANDROID APP DEVELOPMENT SERVICES</h1>
        <h2>Check our Services</h2>
        <p>We build beautiful websites which attract and convert.</p>
        <div className="Special-inner-card IVR-Special-Inner-card2 Android-card">
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-others-pike-picture/64/000000/external-assistance-remote-work-freelance-others-pike-picture-2.png" alt="" />
            <h1>Custom Android app Development</h1>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/64/000000/external-ux-design-digital-marketing-smashingstocks-mixed-smashing-stocks.png" alt="" />
            <h1>Enterprise Oriented Solutions
            </h1>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/64/000000/external-ux-design-agile-development-smashingstocks-mixed-smashing-stocks.png" alt="" />
            <h1>Migration & Upgradation Services </h1>
            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>

          </div>


        </div>
        <div className="Special-inner-card IVR-Special-Inner-card2 Android-card">
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/000000/external-consultant-achievement-planning-parzival-1997-detailed-outline-parzival-1997.png" alt="" />
            <h1>Android App Consulting Services</h1>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-maintain-customer-validation-outline-wichaiwi.png" alt="" />
            <h1>Android App Support & Maintenance
            </h1>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-maintain-customer-validation-outline-wichaiwi.png" alt="" />
            <h1>QA and Testing Services
            </h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>


        </div>
      </div>

      {/* Callback Section */}
      <div className="callback-section">
        <h1>Get enterprise SMS Service For Your Business Today</h1>
        <p>Not Sure about this Servic? Contact to Our Sales Specialist today!</p>
        <button onClick={toggleModalVisibility}>Resquest for Demo!</button>
      </div>
      <div className="IVR-main Development-main ">
        <Accordion>
          <AccordionItem header="What is Andriod application ?">
            Bulk SMS is a kind of message transmitting service used for sending informational or promotional text messages to a wide audience. It has various applications like OTP, Banking Messages, E-Commerce Site Transaction Messages, Offers, coupons, gathering feedback via text messages, and many more.
          </AccordionItem>
        </Accordion>
      </div>
      {/*Our PPC */}
      <div className="Our-PPC Our-Android">
        <h1>Android App Development Process</h1>
        <h2>Our Process</h2>
        <p>We build beautiful websites which attract and convert.</p>
        <Tabs>
          <div className="our-header">
            <TabList>
              <Tab><RiGpsFill />Android App Development Consultation</Tab>
              <Tab><RiBodyScanFill />Android UI/UX Design</Tab>
              <Tab><BsSun />Custom App Development</Tab>
              <Tab><BsShop />Android Software Testing</Tab>
              <Tab><PiStorefrontLight />Multi-platform Deployment</Tab>
            </TabList>
          </div>
          <div className="PPC-Advertising Android-Advertising">
            <TabPanel>
             <div className='panel-box'>
             <div className='pane-content'>
                <h3>Development</h3>
                <p>We Are The Webtech Solution Web Design And Development Company</p>
                <ul>
                  <li> FRONTEND & UI DESIGN</li>
                  <li> BACKEND DEVELOPMENT</li>
                  <li> DATABASE DEVELOPMENT AND WEB HOSTING</li>
                </ul>
                <p>We Are Providing Creative Web Design And Development Services In India All Around The World. We Have Professional Developers And Designers To Fulfill Your Needs. Our Web Design Services Include Mobile App Development, Ecommerce Website Development, Word Press Development, Custom Web Design, Responsive Web Design, Online Marketing, And Many More.</p>
              </div>
              <div className="Android-Icons">
                <img src="https://webtechsolution.co//assets1/img/tabs-1.jpg" alt="" />
              </div>
             </div>
            </TabPanel>

          </div>
          <div className="PPC-Advertising Android-Advertising">
            <TabPanel>
            <div className='panel-box'>
            <div className='pane-content'>
              <h3>Our Digital Marketing Services:-</h3>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul>
                <li>Search Engine Optimization</li>
                <li> Social Media Optimization</li>
                <li>Social Media Marketing/li</li>
                <li> Email Marketing</li>
              </ul>
              </div>
              <div className="Android-Icons">
                <img src="https://webtechsolution.co//assets1/img/tabs-2.jpg" alt="" />
              </div>
              </div>
            </TabPanel>

          </div>
          <div className="PPC-Advertising Android-Advertising">
            <TabPanel>
            <div className='panel-box'>
            <div className='pane-content'>
              <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda </h3>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
                </li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="Android-Icons">
                <img src="https://webtechsolution.co//assets1/img/tabs-3.jpg" alt="" />
              </div>
              </div>

            </TabPanel>

          </div>
          <div className="PPC-Advertising Android-Advertising">
            <TabPanel>
            <div className='panel-box'>
            <div className='pane-content'>
              <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum
              </h3>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              </div>
              <div className="Android-Icons">
                <img src="https://webtechsolution.co//assets1/img/tabs-4.jpg" alt="" />
              </div>
              </div>
            </TabPanel>
          </div>
          <div className="PPC-Advertising Android-Advertising">
            <TabPanel>
            <div className='panel-box'>
            <div className='pane-content'>

              <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum
              </h3>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul></div>
              <div className="Android-Icons">
                <img src="https://webtechsolution.co//assets1/img/tabs-4.jpg" alt="" />
              </div>
              </div>

            </TabPanel>
          </div>
        </Tabs>
      </div>
      {/*Android-Name*/}
      <div className="Android-Name">
       <div className="form-container container-form">
      <input type="text" placeholder="Enter your name" className="form-input" />
      <input type="text" placeholder="Enter Your Phone" className="form-input" />
      <button className="submit-btn">Submit</button>
    </div>
      </div>
      {/*Android App*/}
      <div className="Android-App">
        <div className="Android-App4">
          <h1>Why to Choose Us for Android App Development</h1>
          <p>Our 20+ years of domain expertise make us in providing secure, scalable, feature-reached and high performing Android applications. Webtech System has innate capabilities to address all by providing out-of-box services.</p>

        </div>
        <div className="Android-App4 Android-App5 ">
          <div className="Android-App6">
            <div className="Android-App7">
              <BiReceipt />
              <h5>360 Solutions</h5>
              <p>Avail expertise and experiences to provide Full-cycle Android Solutions involving of Discovery, Design, Architecture, Development, Deployment to Post-Development Support.</p>

            </div>
            <div className="Android-App7">
              <PiCube />
              <h5>Flexible Hiring Models</h5>
              <p>Our flexible engagement models for hiring Android App Developers at highly competitive rates and act as your strategic partner or perform as your in-house team allied with agile methodology.</p>

            </div>

          </div>
          <div className="Android-App6">
            <div className="Android-App7">
              <BsWallet2 />
              <h5>Cost-Effective</h5>
              <p>We follow agile Android App Development process that cares with the best solution for cost-effective & time-bound delivery by keeping latest and modern technology in mind.</p>


            </div>
            <div className="Android-App7">
              <BsClipboardData />
              <h5>Full-Transparency</h5>
              <p>We believe in transparent and seamless communication at every step of the way using the latest collaboration tools and modern communication channel follow with 24X7 support.</p>


            </div>

          </div>


        </div>

      </div>
      {/*IVR Special Fetures*/}
      <div className="IVR-Special-Fetures Android-Fetures">
        <h1>Industries We Serve</h1>
        <p>We Have Delivered High-Performance Android Solutions For Clients From Different Industry Verticals and Being one of the best Android app development companies in India</p>
        <div className="Special-inner-card IVR-Special-Inner-card2 Android-card">
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-others-pike-picture/64/000000/external-assistance-remote-work-freelance-others-pike-picture-2.png" alt="" />
            <h1>Retail & ECommerce</h1>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/64/000000/external-ux-design-digital-marketing-smashingstocks-mixed-smashing-stocks.png" alt="" />
            <h1>E-Learning Solutions</h1>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/64/000000/external-ux-design-agile-development-smashingstocks-mixed-smashing-stocks.png" alt="" />
            <h1>Social Networks Solutions</h1>
            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>

          </div>


        </div>
        <div className="Special-inner-card IVR-Special-Inner-card2 Android-card">
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/000000/external-consultant-achievement-planning-parzival-1997-detailed-outline-parzival-1997.png" alt="" />
            <h1>Travel & Tourism Solutions</h1>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-maintain-customer-validation-outline-wichaiwi.png" alt="" />
            <h1>Logistics & Transport Solutions
            </h1>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-maintain-customer-validation-outline-wichaiwi.png" alt="" />
            <h1>Media & Entertainment
            </h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>


        </div>

        <div className="Special-inner-card IVR-Special-Inner-card2 Android-card">
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/000000/external-consultant-achievement-planning-parzival-1997-detailed-outline-parzival-1997.png" alt="" />
            <h1>Healthcare App Solutions</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-maintain-customer-validation-outline-wichaiwi.png" alt="" />
            <h1>Banking & Finance Solutions
            </h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
          <div className="Special-inner-card2 Android-card2">
            <img src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-maintain-customer-validation-outline-wichaiwi.png" alt="" />
            <h1>Automotive Solutions </h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>


        </div>
      </div>

                {/*Price*/}
                <div className="Price">
        <h1>Android Application Development</h1>
        <p>
        Custom mobile applications for Android.
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li><b>Price Range</b></li>
                <li>
                Starting from ₹30,000
                </li>
                <li>
                  <b>Features</b>
                </li>
                   <li>Simple App with 3-4 Screens</li>
                     
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Advanced</h3>
              <ul>
                <li>
                 <b>Price Range</b>
                </li>
                <li>Starting from ₹50,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                App with Backend + Database
                   </li> 
             
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Premium</h3>
              <ul>
                <li>
                 <b>Price Range</b>
                </li>
                <li>Starting from ₹80,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                Full-Featured App with Custom UI
                </li>
              
                
                
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>

          </Slider>
        </div>
      </div>
        
      {/*Frequently Asked Questions*/}
      <div className="Frequently_Asked_Questions">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className="Frequently-main">
          <Accordion>
            <AccordionItem header="I have a small/mid-size online business; do I really need SEO?">
              Short answer, yes you do. Generally, over 50% of your website visitors come through Search Engines. Most of them are discovering your site for the first time after searching for a relevant keyword. Search engines like Google assign weightage to websites based on parameters like technical efficacy and content when showing results. To make sure that your website is in sync with those parameters and ranks at the top, you need SEO.
            </AccordionItem>
            <AccordionItem header="I have done SEO, my website still won't rank, why?">
              There can be a number of reasons. You might be working with an active 'Google penalty' without even knowing it or maybe the SEO was not done correctly, or you are in a super competitive niche where your peers are deploying better digital marketing strategies. If you need help, call us up for a free SEO audit of the website.
            </AccordionItem>
            <AccordionItem header="What is a Google Penalty?">
              Google is constantly working towards delivering “more personalized search results”. In this quest, the company releases periodic updates to its search algorithms. A Google penalty or ‘action’ is applied when your website is caught violating one or more of its guidelines. Getting a penalty lifted can take anywhere from a few weeks to a year. That's another reason why you should have an SEO expert on board to assist you.
            </AccordionItem>
            <AccordionItem header="How long does SEO take? What is the ROI?">
              Like we said, SEO is like evolution, you get better with time and efforts. You might start seeing initial results for some very obscure keywords within a few days of doing SEO. After a month, you will start ranking on more relevant keywords, and after a year, your SERP rankings will increase for even more focused keywords. The ROI of SEO varies from industry to industry. Basically, it depends on how important it is for your business to come up as the top recommendation in search results? Let's sit together to find out.
            </AccordionItem>
            <AccordionItem header="What can SEO do for my business?">
              SEO can be a serious asset if online marketing is an important part of your business. Focused keyword selection and content strategy combined with a technically sound website can help you in bypassing competition and tapping new markets. The best part about SEO is that your conversions are completely organic and thus, help you in building genuine brand awareness and loyalty. Which, in turn, helps your organic revenue.
            </AccordionItem>
            <AccordionItem header="I have more questions, where do I ask?">
              We thought you would. Use the contact form below to shoot us an email and we will gladly assist you with a new SEO strategy for 2020.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/*Lets Talk*/}
      <div className="Lets-talk Talk-to">
        <div className="Lets-main Talk-main">
          <h1><b>Lets Talk!</b></h1>
          <p1>Our clients are smart, thoughtful, & forward-thinking.</p1><br />
          <p2>Sound like you? Get in touch.</p2><br />
          <p3>+91-70656 80680</p3>

        </div>
        <Lets/>
      </div>
      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
        {renderForm()}
      </Modal>
      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
                {renderForm()}
            </Modal>
    </>
  )
}

export default AndroidDevelopment
