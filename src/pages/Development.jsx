import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import VoiceCard from '../component/VoiceCard';
import Dev1 from '../../public/Dev1.png'
import Dev2 from '../../public/Dev2.png'
import Dev3 from '../../public/Dev3.png'
import Dev4 from '../../public/Dev4.png'
import Dev5 from '../../public/Dev5.png'
import Dev6 from '../../public/Dev6.png'
import Card3 from '../component/Card3';
import { CiCalendar } from "react-icons/ci";
import { BsCardChecklist } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";
import { BiCollection } from "react-icons/bi";
import { BsBinoculars } from "react-icons/bs";
import { techData } from '../../data';
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



const Development = () => {

  const voicedata = [
    {
      img: Dev1,
      title: "Needs Analysis",
      content: " Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
    },
    {
      img: Dev2,
      title: "Project Planning",
      content: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
    },
    {
      img: Dev3,
      title: "Design",
      content: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
    },
    {
      img: Dev4,
      title: "Development",
      content: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
    },
    {
      img: Dev5,
      title: "Launch",
      content: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
    },
    {
      img: Dev6,
      title: "Ongoing Maintenance",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"

    },

  ]

  console.log(voicedata);


  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>

      <div className="blog-banner development-banner">
        <div className="blog-inner-card development-card">
          <h1>India’s No. 1</h1>
          <h2> Web Application Development Company</h2>
          <p>Award-winning custom web application development company building high-performance, intuitive, secure, and best-in-class web applications.</p>
          <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
          <button  onClick={toggleModalVisibility}>Get in Touch</button>
        </div>
        <MyForm/>

      </div>
      {/* Voice Section */}
      <div className="Voice-box Development-box Development-box2">
        <h1>Development</h1>
        <p>Backend is soul. We work with php, laravel, django, nodejs, .net, java spring, and more for backend service for your website. We build SEO friendly and responsive websites that generate more revenue.  </p>
        <div className="voice-outer">
          <div className="Voice_services Development-services1">
            <img src="https://webtechsolution.co/assets1/img/service/promotional-bulk-sms999628.png" alt="" />
          </div>
          <div className="Voice_services Development-services2">
            <h1>Web Development</h1>
            <p>Backend is soul. We work with php, laravel, django, nodejs, .net, java spring, and more for backend service for your website. We build SEO friendly and responsive websites that generate more revenue. Developing a great website needs creative ideas and skills, and we have it both that converts your image into an online reality.</p> <br />

            <p>Our website developers provide expert web application development and web design services to our clients. Appnovation offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce and intranet experiences using the latest and proven web technologies. With up to 85% of consumers visiting company’s or service provider’s website before making a purchase, more and more consumers make decisions based on their online experience: the appearance, usability and accessibility of your website is more important than ever, especially in an increasingly competitive market.</p>
          </div>
        </div>
      </div>
      {/*Voice call section*/}
      <div className="Voicec-call-section">
        <h1>Why Choose Webtechage Private Limited</h1>
        <h2>Check our Services</h2>
        <p> We offer a flexible and multi-utility Interactive Voice Response (IVR) System.</p>

      </div>


      <div className="voice-card-main voice-card-main2">

        {
          voicedata.map((e) => {
            return (
              <VoiceCard data={e} />
            )
          })
        }
      </div>

      <div className="IVR Development">
        <h1>RESPONSIVE WEB DESIGN</h1>
        <p>It’s crucial to build a website that conveys the right message to the buyer, regardless of how they arrive on your site. We leverage responsive design to adjust visual elements on a variety of screen sizes, leading to greater conversion rates. This ensures a consistent approach across desktop, tablet, and mobile platforms.</p>
        <button onClick={toggleModalVisibility}> Contact with us </button>
      </div>

      <div className="IVR-main Development-main ">
        <Accordion>
          <AccordionItem header="What is Website Development ?">
            Websites are files stored on servers, which are computers that host (fancy term for “store files for”) websites. These servers are connected to a giant network called the Internet. Browsers are computer programs that load websites via your Internet connection, such as Google Chrome or Internet Explorer, while the computers used to access these websites are known as “clients”.
          </AccordionItem>
        </Accordion>
      </div>


      <h1 className='we-know'>Our Expertise</h1>
      <p className='Ifyouare'>Since we are among India’s top web development establishments, we extend our professional services to clients in different locations. Below are the web development work we offer to our clients with passion.
      </p>


      <div className="Exclusive Our-Expertise">
        <Card3 icons={<CiCalendar />} title={"Progressive Web App Development"} dis={"Sometimes, a business requires high-performing, secure, feature-packed, and scalable web application services delivering different solutions to clients."} />
        <Card3 icons={<BsCardChecklist />} title={"Custom Web Applications Development"} dis={" Again, we customize and scale your web application service according to your business type. The goal is to ensure your business leads while others follow."} />
        <Card3 icons={<IoAlarmOutline />} title={"Consulting & Business Analysis"} dis={"We deliver feature-packed, secure, high-performing, and scalable web development services to help different businesses penetrate the market well."} />
        <Card3 icons={<MdOutlineMessage />} title={"Digital Transformation"} dis={"We will transform your business to suit the digital era by providing scalable, secure, feature-packed, and well-performing web application services."} />
        <Card3 icons={<BiCollection />} title={"Prototyping & UX Designing"} dis={" Our dedicated team offers extensive services in prototyping and UX design through providing top-rated web app development"} />
        <Card3 icons={<BiCalendarCheck />} title={"Third-Party Integration"} dis={"We offer third-party integration web development services for our customers to ensure customer satisfaction and market penetration."} />
        <Card3 icons={<BiCollection />} title={"Full Stack Development"} dis={"As a result, we offer full-stack web development to your business through scalable, secure, feature-packed, and well-performing web application services."} />
        <Card3 icons={< BsBinoculars />} title={"Software Product Engineering"} dis={"Our teams have different levels of expertise. If your business requires software product engineering services."} />
        <Card3 icons={< BsBinoculars />} title={"CMS Website Development"} dis={"Our teams have different levels of expertise. If your business requires software product engineering services."} />

      </div>

      {/*IVR*/}
      <div className="Full-stack">
        <h1>Our Full-Stack Website Development Services</h1>
        <p>Since we are among India’s top web development establishments, we extend our professional services to clients in different locations. Below are the web development work we offer to our clients with passion.</p>
      </div>

      <div className="allservices-box">
        {
          techData.map((e) => {
            return (
              <div className="allservices-card">
                <img src={e.imgSrc} alt="" />
                <p>{e.name}</p>
              </div>
            )
          })
        }

      </div>

         <div className="Phone">
            <div className="phone-input-group">
              <input type="text"  id="name" name="name" placeholder='Enter your name' />
              <input type="text" id="phone" name="phone" placeholder="Enter your phone" />
             
            </div>
            <div className="button"> 
                <button>Submit</button>
              </div>
         </div>

      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
        {renderForm()}
      </Modal>
           {/*Price*/}
           <div className="Price">
        <h1>Website Development</h1>
        <p>
        Professional websites tailored to your business needs.
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li><b>Price Range</b></li>
                <li>
                Starting from ₹15,000
                </li>
                <li>
                  <b>Features</b>
                </li>
                   <li>Static Website (up to 5 pages)</li>
                     
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
                <li>Starting from ₹30,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                Dynamic Website with CMS
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
                <li>Starting from ₹60,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                E-commerce
                </li>
                <li>Payment Integration</li>
                <li>Custom Design</li>
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
    </>
  )
}

export default Development
