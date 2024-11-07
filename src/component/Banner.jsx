import "../Style.css";
import Card7 from "./Card7";
import { CiCalendar } from "react-icons/ci";
import {
  BsCardChecklist,
  BsCalendarCheck,
  BsChatSquareText,
  BsCollection,
  BsBinoculars,
  BsTranslate,
} from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Modal from "../component/Modal";
import MyForm from "./MyForm";
import RenderForm from "./RenderForm";

const renderForm = () => (
  <RenderForm/>
);


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

const Banner = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <>
      <div className="blog-banner">
        <div className="blog-inner-card">
          <h1>India's #1</h1>
          <h2> Promotional Bulk SMS Services</h2>
          <p>Easily send smarter bulk SMS</p>
          <p>100% delivery report</p>
          <p>Easy to use Bulk SMS Portal</p>
          <a href="tel:+917065680680">
            <button>+91-7065680680</button>
          </a>

          <button onClick={toggleModalVisibility}>Get in Touch</button>
        </div>
        <MyForm/>
      </div>
      {/* Sms Section */}
      <div className="Sms-box">
        <h1>PROMOTIONAL BULK SMS</h1>
        <div className="sms-outer">
          <div className="Bulk_services">
            <img
              src="https://webtechsolution.co/assets1/img/service/promotional-bulk-sms999628.png"
              alt=""
            />
          </div>
          <div className="Bulk_services">
            <h1>
              By Promotional Bulk SMS You Can Target Your Non DND Audience
            </h1>
            <p>
              We are the leading bulk SMS Company in Noida, who is here to
              transform your plans into reality. Everyone wants to get the right
              person at the right price, at the right time. We are ready to
              embrace all your hassles if you are looking to get all the above 3
              rights. We are the best bulk SMS service provider that helps you
              to extend your business’s ability across India.
            </p>{" "}
            <br />
            <p>
              Bulk Promotional SMS Service is that the easiest and simplest
              method of communicating and interacting large set of audience.
              This is the best deal that one can make to advertise, promote and
              build the business purpose interactions with the public.
            </p>
          </div>
        </div>
      </div>
      {/*  Promotional Sms Section */}
      <div className="Promotional-box">
        <div className="Promotional_services1">
          <h1>Promotional SMS Service Provider in Noida</h1>
          <p>
            In a way to promote your brands, service, and products, promotional
            SMS service has become the most cost-effective option in all over
            India. Interacts with the massive set of audience in only one click
            is that the most convenient option available with Bulk SMS Service
            in India. It helps in giving instants & valuable response.
          </p>
          <br />
          <p>
            Promotional Bulk SMS Service in India (Delhi NCR) has named for
            being on top as the most effective & easiest marketing tools to
            bring more business & building business brands. It has a great
            effects in attracting more visitors and generate quality leads.
            Thus, Bulk Promotional SMS is that the only option for the companies
            who want to build on robust marketing strategy for achieving all
            their business objectives in marketing fields. In the current market
            trends of serving effectives marketing services, we offers
            Promotional SMS solutions in India (Delhi NCR) that are specifically
            designed to make communications personalized & effective. We
            mentions some of the important reasons here is help you in choosing
            our Promotional SMS Service in India(Noida).
          </p>
        </div>
        <div className="Promotional_services">
          <img
            src="https://webtechsolution.co/assets1/img/service/promotional-sms839907-.png"
            alt=""
          />
        </div>
      </div>

      {/* increase Your Bussiness*/}
      <div className="Your_Bussiness">
        <h1>increase Your Bussiness</h1>
        <p>
          Many business owners using SMS find that the time saving benefit frees
          them up to focus on what really matters – the growth of their
          business.
        </p>
        <button onClick={toggleModalVisibility}>Contact With Us</button>
      </div>

      <div className="Sms-box">
        <div className="sms-outer">
          <div className="Bulk_services">
            <img
              src="https://webtechsolution.co/assets1/img/service/ivr-service.png"
              alt=""
            />
          </div>
          <div className="Bulk_services">
            <h1>How to help our Promotional Bulk SMS Services</h1>
            <p>
              Our Promotional SMS service lets enterprises to promote their
              businesses Bringing to you the new way to send SMS offering
              discounts to your prospects. Send Bulk personalized SMS to ypur
              prospects to show them how much do you care By using SMS GATEWAY
              Post API, you get to send marketing SMS to an astronomically high
              number of People{" "}
            </p>{" "}
            <br />
            <p>
              Our Promotional SMS service lets enterprises to promote their
              businesses.
            </p>
            <br />
            <p>
              Bringing to you the new way to send SMS offering discounts to your
              prospects.
            </p>{" "}
            <br />
            <p>
              Send Bulk personalized SMS to ypur prospects to show them how much
              do you care
            </p>
            <br />
            <p>
              By using Webtechage Private Limited Post API, you get to send
              marketing SMS to an astronomically high number of People
            </p>
            <br />
          </div>
        </div>
      </div>
      {/*Features*/}
      <div className="Features_SMS">
        <h1>FEATURES PROMOTIONAL BULK SMS SERVICES</h1>
        <p>
          Webtechage Private Limited Offers Marketing SMS Services, Can be Used
          by any company or individual to promote or advertise about a product
          or brand or services Some of the Features are listed below.
        </p>
      </div>
      <div className="Features-card-box">
        <Card7
          icons={<CiCalendar />}
          title={"Schedule SMS for Future"}
          dis={
            "Bulk SMS Services is the fastest method of delivering information. You can schedule SMS for future dates for a predefine date and time."
          }
        />
        <Card7
          icons={<BsCardChecklist />}
          title={"SMS Delivery on NON-DND No."}
          dis={
            "Bulk SMS is restricted to sending messages to DND numbers only between 9AM and 9PM, as part of the Promotional SMS Service."
          }
        />
        <Card7
          icons={<IoAlarmOutline />}
          title={"Time Restriction."}
          dis={
            "Our bulk SMS service and software are free to use, you simply pay for the texts that you send. You can buy Textlocal bulk SMS credits online."
          }
        />
        <Card7
          icons={<BsChatSquareText />}
          title={"SMS From Excel."}
          dis={
            "Our SMS Excel Plugin offers users to send SMS from Excel sheet directly without login sms panel. As most Business Professionals use MS Excel."
          }
        />
        <Card7
          icons={<BsCollection />}
          title={"Group Messaging"}
          dis={
            "Group messaging lets you to collaborate with multiple users simultaneously. To support various business events such as 'area outage in a location."
          }
        />
        <Card7
          icons={<BsCalendarCheck />}
          title={"Genuine Delivery Report"}
          dis={
            "One of the most efficient services is sending messages online to a group at one instance. Genuine Delivery Report. Webtech offers dynamic delivery reports ."
          }
        />
        <Card7
          icons={<BsCollection />}
          title={"User-Friendly SMS Portal"}
          dis={
            "Meet entirely intuitive, simple and user-friendly SMS Portal. Use our web portal for seamless SMS communication with your target audience."
          }
        />
        <Card7
          icons={<BsBinoculars />}
          title={"Multiple Routes"}
          dis={
            " Our Bulk SMS Reseller portal covers not only SMS service, but also Missed call, Multi Level Reseller; Multiple Routes Available; Sender ID for Promo. "
          }
        />
        <Card7
          icons={<BsTranslate />}
          title={"Regional Language"}
          dis={
            "Send bulk SMS now in different regional languages like Telugu, Tamil, Hindi, Punjabi, Urdu & other indian regional languages. Webtech provide Unicode"
          }
        />
      </div>
      {/*Webteach*/}
      <h1 className="Webteach_age-heading">
        WHY WEBTECHAGE PRIVATE LIMITED IS BEST FOR YOU?
      </h1>
      <div className="Webteach_age">
        <div className="Webteach_card Webteach_card_Age">
          <img
            src="https://webtechsolution.co/assets1/img/service/promotional-bulk-sms.jpg"
            alt=""
          />
        </div>
        <div className="Webteach_card">
          <div className="Webteach-outer-card">
            <div className="Webteach-inner-card">
              <h1> Reasonable Pricing</h1>
              <p>
                Webtechage Pvt. Ltd. offers reasonable pricing and efficient
                transactional SMS plans which can let you send hundreds of SMS
                in no significant time. Providers.
              </p>
            </div>
            <div className="Webteach-inner-card">
              <h1>100% Delivery Rate</h1>
              <p>
                Webtechage Pvt. Ltd. offer Bulk Promotational SMS services with
                100% delivery reate. You can get right solution.
              </p>
            </div>
          </div>
          <div className="Webteach-outer-card">
            <div className="Webteach-inner-card">
              <h1>99.9% Uptime guarented</h1>
              <p>
                Industry-leading uptime backed by a fully transparent Service
                Level Agreement (SLA). General. We guarantee our server uptime
                to be a minimum of 99.9% uptime.
              </p>
            </div>
            <div className="Webteach-inner-card">
              <h1>Advance API Integration</h1>
              <p>
                Integrate SMS sending with our Free Bulk SMS API on your
                applications! The integration of this HTTPs API is simple, fast,
                accessible to all developers.
              </p>
            </div>
          </div>
          <div className="Webteach-outer-card">
            <div className="Webteach-inner-card">
              <h1>24*7 Customer Support</h1>
              <p>
                We are committed in providing an exclusive range of 24 X 7
                Customer Support Service. Looking for help? For help from an
                agent, follow the Get help link below to chat or request a call.
              </p>
            </div>
            <div className="Webteach-inner-card">
              <h1> Honest Truth worthy</h1>
              <p>
                Honest & Trustworthy. We provide your high quality fast bulk sms
                gateway to get your OTP sms delivered in 2-5 seconds.
              </p>
            </div>
          </div>
          <div className="Webteach-outer-card">
            <div className="Webteach-inner-card">
              <h1>Stability</h1>
              <p>
                Promote and Grab Customers through SMS Marketing. Avail
                efficient promotional SMS services from the best bulk SMS
                service provider in India. Try Now
              </p>
            </div>
            <div className="Webteach-inner-card">
              <h1>Security</h1>
              <p>
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Price*/}
      <div className="Price">
        <h1>PRICE</h1>
        <p>
          Get Promotional Bulk SMS Services Online at affordable Price and send
          SMS with India’s leading bulk SMS service provider. Webtech Solution
          offers an ideal promotional bulk SMS service to your business which
          can directly generate sales and leads for your organization.
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Standard</h3>
              <ul>
                <li>
                  <b>65000</b>
                </li>
                <li>Unlimited Time</li>
                <li>
                  <b>Sender Id Based</b>
                </li>
                <li>
                  <b>SMS Delivery On DND</b>
                </li>
                <li>13 Paisa Per SMS</li>
                <li>Quantity: 1 Lac</li>
                <li>Free API &amp; 100% SMS Deliver</li>
                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Unlimited</h3>
              <ul>
                <li>
                  <b>12000</b>
                </li>
                <li>Unlimited Time</li>
                <li>
                  <b>Sender Id Based</b>
                </li>
                <li>
                  <b>SMS Delivery On DND</b>
                </li>
                <li>12 Paisa Per SMS</li>
                <li>
                  <li>Quantity: 1 Lac</li>
                </li>
                <li>Free API &amp; 100% SMS Deliver</li>
                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li>
                  <b>14000</b>
                </li>
                <li>Unlimited Time</li>
                <li>
                  <b>Sender Id Based</b>
                </li>
                <li>
                  <b>SMS Delivery On DND</b>
                </li>
                <li>14 Paisa Per SMS</li>
                <li>
                  <li>Quantity: 1 Lac</li>
                </li>
                <li>Free API &amp; 100% SMS Deliver</li>
                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>

            <div className="slider_price">
              <h3>SIM Based SMS</h3>
              <ul>
                <li>
                  <b>9000</b>
                </li>
                <li>Unlimited Time</li>
                <li>
                  <b>Sender Id Based</b>
                </li>
                <li>
                  <b>SMS Delivery On DND</b>
                </li>
                <li>9 Paisa Per SMS</li>
                <li>
                  <li>Quantity: 1 Lac</li>
                </li>
                <li>Free API &amp; 100% SMS Deliver</li>
                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
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
      {/*Question*/}
      <div className="Question">
        <h2>RESOURCE/FREQUENTLY ASKED QUESTION </h2>
        <Accordion>
          <AccordionItem header="What is Promotional SMS?">
            Promotional SMS is a message sent by individuals, businesses, and
            organizations for the promotion or advertisement of their brand or
            products or services. This message includes details about new
            product launches, discounts on any service, new offers available on
            E-commerce websites, sign-up links for the website and lots more.
            With the help of Promotional SMS, it is easy to reach people. It is
            one of the most effective ways of marketing and promotion with a
            high success ratio. Most Promotional SMSs contain ‘call to action’
            texts that trigger users to check and invest in the products and
            services offered by companies.
          </AccordionItem>

          <AccordionItem header="How Webtech Solution helps businesses by offering Promotional SMS service?">
            <li className="Quick">
              <b>Quick Delivery</b>
            </li>
            <li>
              With our fast SMS gateway, it is possible to transmit bulk
              Promotional SMS in a few seconds. Our Promotional SMS API helps in
              delivering promotional messages quickly during busy hours also.
            </li>
            <li className="Quick">
              <b>Reach millions of people</b>
            </li>
            <li>
              In one click, it is possible to reach millions of users or
              potential customers with the help of our Bulk Promotional SMS
              gateway. From one location only, you can transmit Promotional SMS
              to PAN India locations. You can upload the mobile numbers to the
              system on which you want to deliver the Promotional SMS.
            </li>
            <li className="Quick">
              <b>Customised Plans</b>
            </li>
            <li>
              {" "}
              At Webtech Solution, we offer customised Promotional SMS plans
              according to the need of the business or marketing campaign. You
              can communicate with our experts and can know more about our
              tailor-made Bulk Promotional SMS plans. This helps businesses
              spend money on such marketing campaigns according to their budget.
            </li>
            <li className="Quick">
              <b>Suitable for all SMS marketing campaigns</b>
            </li>
            <li>
              {" "}
              We are into the business of SMS marketing for a long time and have
              worked with multiple clients from different business domains. Our
              Promotional SMS Platform supports all types of SMS marketing
              campaigns, be it a food and beverage industry, e-commerce
              business, retail business, election campaigns, or any other
              campaign.
            </li>
          </AccordionItem>

          <AccordionItem header="How to get Bulk Promotional SMS credits?">
            To get Bulk Promotional SMS credits you can check our Bulk
            Promotional SMS plans. We have different plans according to both
            small and large businesses' requirements. You can buy credits
            according to your needs. To know about the complete process of
            buying credits, you can connect with our team.
          </AccordionItem>

          <AccordionItem header="Is it possible to send Promotional SMS to all numbers?">
            No, Promotional SMSs can be sent on Non-DND numbers only. As
            Promotional SMSs contain marketing and advertising message, so it is
            not allowed to send to mobile numbers that have activated the DND
            service. At Webtech Solution, we have a Bulk SMS portal that helps
            in segregating all the DND numbers from the list of all the mobile
            numbers automatically.
          </AccordionItem>

          <AccordionItem header="What is the right time to send promotional SMS?">
            Promotional SMSs must be sent during standard business hours only,
            that is from 9 AM to 9 PM. Be it for any business domain or election
            campaigns, all the promotional SMSs should be delivered between
            these hours only.
          </AccordionItem>
        </Accordion>
      </div>

      {/*Business*/}
      <div className="Bussiness">
        <h2>Don't Wait! Boost Your Business With Us. Get Started Now.</h2>
        <div className="phone-input-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone"
          />
        </div>
        <div className="button">
          <button>Submit</button>
        </div>
      </div>
      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
        {renderForm()}
      </Modal>
    </>
  );
};

export default Banner;
