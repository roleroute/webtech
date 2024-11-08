import "../Style.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Card7 from "../component/Card7";
import newIcons from "../../public/icons8-rupee-64.png";
import Modal from "../component/Modal";
import { BsFingerprint } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { BsUpcScan } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { myData } from "../../data";
import { FiCheckSquare } from "react-icons/fi";
import RenderForm from "../component/RenderForm";
import MyForm from "../component/MyForm";
import Lets from "../component/Lets";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
};

const renderForm = () => <RenderForm />;

const FrontpageBulk_SMS = () => {
  const data = [
    {
      icons: <BsFingerprint />,
      title: "Highly Secure",
      content:
        "To ensure the safe delivery of every single SMS sent to the user’s phone number, Webtech Solution makes use of 100 percent secure bulk SMS gateways. We understand the privacy and security of every customer and that is why we do not risk it by using cheap SMS gateways.",
    },

    {
      icons: <BsAward />,
      title: "Recurring Marketing Campaigns",
      content:
        "With the help of Bulk SMS Service, it is now possible to conduct recurring marketing campaigns on regular basis. Businesses can create and send recurring marketing & promotional SMSs in bulk by scheduling them for daily or weekly or according to their requirement. With our Bulk SMS portal, it is possible to customise these Bulk SMSs any time before delivery.",
    },
    {
      icons: <BsPatchCheck />,
      title: "Exclusive Features",
      content:
        "At Webtechage Pvt.Ltd you get access to several other features along with sending Bulk SMS to the audience. Get access to Delivery Report, integrate Free API, schedule Bulk SMS Campaigns for up to 1 year, customize contact list and lots more. With all these exclusive features, businesses are more likely to get amazing benefits by using our Bulk SMS Service.",
    },
    {
      icons: <BsUpcScan />,
      title: "Quick Delivery",
      content:
        "With our promising Bulk SMS services, flexible APIs, and optimised SMS delivery routes, we ensure that all the Bulk SMS campaigns take place at the scheduled time. All the promotional SMS campaigns take place between 9 AM to 9 PM. Our guaranteed uptime makes it possible for us to deliver all the Bulk SMSs quickly.",
    },
    {
      icons: <MdHeadsetMic />,
      title: "Best Support",
      content:
        "With the help of our experts, it is now possible to access different features of Bulk SMS service within a few minutes. Our support team is always available over calls or live chat to assist you with all your queries related to Bulk SMS Services and features available on our Bulk SMS Portal.",
    },
    {
      icons: <BsCalendarCheck />,
      title: "Best Pricing",
      content:
        "Webtechage Pvt. Ltd. is known for offering Bulk SMS Service at the best price in the market. We only charge for the SMSs delivered successfully on the customer’s number. We are offering Bulk SMS services for businesses of all sizes according to their budget and need. Our customizable Bulk SMS plans are available at affordable pricing.",
    },
    {
      icons: <BsFileEarmarkBarGraph />,
      title: "Detailed Reporting",
      content:
        "To help businesses know the success rate of the marketing campaigns or to help them know the delivery status of the Bulk SMS sent for customer interaction, we offer a detailed report to all our clients. They can access the detailed report for every campaign by logging in to the Bulk SMS portal offered by Webtechage Pvt.Ltd..",
    },
    {
      icons: <BsSpeedometer />,
      title: "Superior Reliability",
      content:
        "Bulk SMS services offered by Webtech Solution are highly reliable for different purposes. Be it the marketing campaigns or delivering OTP SMS on a customer’s number; a safe and secure Bulk SMS gateway is used for sending all the Bulk SMSs. We ensure a 99.9 percent success rate for all the Bulk SMS campaigns.",
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <>
      <div className="blog-banner">
        <div className="blog-inner-card">
          <h1>India's #1</h1>
          <h2> Bulk SMS Service Provider In India </h2>
          <p>
            Increase sales and customer satisfaction with smarter SMS campaigns,
            instant OTPs, notifications, two-way interactions, and other
            award-winning bulk SMS services.
          </p>

          <a href="tel:+917065680680">
            <button>+91-7065680680</button>
          </a>
          <button onClick={toggleModalVisibility}>Get in Touch</button>
        </div>
        <MyForm />
      </div>
      {/* Sms Section */}
      <div className="Sms-box Front_SMS_box">
        <h1>Bulk sms Service India</h1>
        <p>
          Webtechage Private Limited is best digital marketing service provider
          company in India offer's bulk SMS service with all types of database
          as per the clients requirement which helps to increase your business.
        </p>
        <div className="sms-outer Front_Outer">
          <div className="Bulk_services Front_services ">
            <p>
              Webtechage Private Limited provides customized SMS solutions for
              Businesses and Companies, Hospitals, Schools, colleges, Small
              retail vendors, individuals, and students. For using our SMS
              services, you don’t need to install any software or applications,
              only just log in to your panel with your Id password and use the
              SMS service. For SMS marketing, you can easily send SMS to any
              large number of the database in just minutes. Many more companies
              are providing SMS services in India offering highly effective and
              business-oriented SMS services at a very low cost. But before
              taking these services from any service provider first of all
              ensure about the company and their data that whether they are
              targeting the same what you are looking for because many times it
              is found that they take the money and also send the message but
              when we talk about inquiries about products and services, they
              fail to deliver their virtual report.
            </p>{" "}
            <br />
          </div>
          <div className="Bulk_services">
            <img
              src="https://webtechsolution.co/assets/img/600814.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*Your_Business*/}
      <div className="Right-for-Your">
        <h1>PICK THE TYPE OF SMS THAT IS RIGHT FOR YOUR BUSINESS</h1>
        <p>
          Webtechage Private Limited offers a variety of Bulk SMS Services along
          with a stupendous SMS gateway that caters for the need of multiple
          businesses and organizations. For customer service to marketing
          campaigns, you can choose the Bulk SMS Service that can match your
          business goals.
        </p>
        <div className="International-SMS">
          <div className="International-SMS2">
            <img src={newIcons} alt="" />
            <h1>Transactional SMS</h1>
            <p>
              Businesses can now send all the important updates and alerts to
              their customers using transactional SMS Service by integrating our
              transactional SMS API into their system. It is one of the safest
              and fastest ways of communicating crucial information to
              customers. At Webtech Solution, we offer a Transactional SMS
              gateway that works 24 by 7 and for both DND & Non-DND numbers.
            </p>
            <a href="/Transactional">Read More...</a>
          </div>
          <div className="International-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-promotional-64.png"
              alt=""
            />
            <h1>Promotional SMS</h1>
            <p>
              Promote your business and help your products and services reach
              your potential customers or existing customers with the help of
              Bulk Promotional SMS Service. Our affordable promotional SMS plans
              are suitable for marketing campaigns, enhancing brand image, and
              promoting products, services, discounts, and offers. We send all
              the promotional SMSs using a unique sender ID and during business
              hours only.
            </p>
            <a href="/Bulk_sms">Read More...</a>
          </div>
          <div className="International-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-international-64.png"
              alt=""
            />
            <h1>International SMS</h1>
            <p>
              With the help of our International SMS service, it is now possible
              for businesses to reach global clients and customers. We make use
              of internet-based affordable bulk SMS service to deliver
              international SMS to multiple mobile operators across the globe.
              We offer a web interface to all our clients so that they can
              access the delivery report, customise SMS templates, and check
              other such details on their system.
            </p>
            <a href="/Bulk_sms">Read More...</a>
          </div>
        </div>
      </div>

      {/*Popular SMS*/}
      <div className="Popular-SMS">
        <h1>POPULAR SMS USE CASES</h1>
        <p>
          Industries are making use of Bulk SMS Services for a long time, as
          text messages are one of the most convenient and easiest ways of
          reaching your audience. It comes ups with a high success rate, timely
          delivery, and better engagement. Some of the popular industries that
          make use of Bulk SMS services are – Advertising & Media, Banking &
          Finance, Event Management, E-commerce & Retail, Hotels & Resorts,
          Travel & Tourism, Real Estate, FMCG, Education, and many more.
        </p>

        <div className="Popular-Card">
          <div className="Popular-inner-card">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-campaign-64.png"
              alt=""
            />
            <h1>Marketing Campaigns</h1>
            <p>
              Our creative team help industries in running advertising and
              marketing campaigns successfully by using Bulk SMS service. We
              design unique marketing campaigns by understanding the goals of
              our clients and utilizing the right marketing strategy. It helps
              them get a huge and positive response from the target audience.
            </p>
          </div>
          <div className="Popular-inner-card">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-calendar-64.png"
              alt=""
            />
            <h1>Appointment Reminders</h1>
            <p>
              If you do not wish to lose your valuable customers, then you must
              remind them about the services or bookings or appointments they
              have taken. Webtech Solution offers a quick and cost-effective way
              to help you send appointment reminders using the Bulk SMS service.
              It increases customer satisfaction.
            </p>
          </div>
          <div className="Popular-inner-card">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-customer-support-64.png"
              alt=""
            />
            <h1>Customer Support</h1>
            <p>
              For businesses to run successfully, they need to communicate and
              interact with their customers constantly. Though there are
              multiple communication channels available for interaction text
              messaging is the fastest way to communicate. Our Bulk SMS service
              helps businesses communicate different information including
              surveys, promotional & transactional messages, and other such
              communication via SMS only.
            </p>
          </div>
          <div className="Popular-inner-card">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-billing-66.png"
              alt=""
            />
            <h1>Billing & Payment</h1>
            <p>
              From financial institutions to E-commerce industries, they all
              make use of Bulk SMS for sending billing and payment information
              on customers’ mobile numbers. At Webtech Solution we offer an
              effective Transactional Bulk SMS service to send all the crucial
              information related to financial transactions, E-Receipts, and
              E-Bills to customers in a secure way.
            </p>
          </div>
        </div>
      </div>
      {/* Callback Section */}
      <div className="callback-section">
        <h1>Get Bulk SMS Service For Your Business Today!</h1>
        <p>
          Not Sure about this Servic? Contact to Our Sales Specialist today!
        </p>
        <button onClick={toggleModalVisibility}>Request for Demo!</button>
      </div>
      {/*Service Platform*/}
      <div className="Service-Platform">
        <h1>FEATURES IN 1 EASY BULK SMS SERVICE PLATFORM</h1>
        <h2>Check our Services</h2>
        <p>
          Make the journey with your customers smooth, engaging, and
          trustworthy, by taking our Bulk SMS Service for your business.
          Webtechage Private Limited Bulk SMS Services help in making
          communication easier and better with your customers and clients.
        </p>
        <div className="Easy-Bulk-SMS">
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-message-preview-50.png"
              alt=""
            />
            <h1>Send SMS Online via different platforms</h1>
            <p>
              With our Bulk SMS Service, businesses can send bulk SMS online at
              any time and from any web platform by logging into our Bulk SMS
              portal or by using the plug-ins offered by us.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-messaging-50.png"
              alt=""
            />
            <h1>Receives SMS Online</h1>
            <p>
              Enable both-way SMS communication to help your customers reach out
              to you with ease using the keywords or long codes given by you. We
              also help you set auto-replies for smooth customer interaction via
              SMS.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-project-management-66.png"
              alt=""
            />
            <h1>Track Bulk SMS Campaign Metrics</h1>
            <p>
              Now track the progress of every Bulk SMS Campaign separately and
              in real-time. Get complete details, including message delivery
              status, the number of messages failed, user’s response, and lots
              more.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-api-64.png"
              alt=""
            />
            <h1>Easy to integrate SMS API</h1>
            <p>
              Webtech Solution makes it easy to integrate our Bulk SMS APIs with
              any third party application within a few minutes and offers
              technical support also.
            </p>
          </div>
        </div>
        <div className="Easy-Bulk-SMS">
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-privacy-policy-68.png"
              alt=""
            />
            <h1>Real-Time Report Access</h1>
            <p>
              Check real-time delivery reports of all the Bulk SMS services
              including OTP SMS, Transactional SMS, Promotional SMS, and other
              SMS Campaigns with the help of the Bulk SMS Portal.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-attach-64.png"
              alt=""
            />
            <h1>Send Files as SMS Attachments</h1>
            <p>
              Create short links to send images, videos, music, documents, or
              other such attachments to your customers within the 160 SMS
              characters only using the Bulk SMS service.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-form-80.png"
              alt=""
            />
            <h1>Send Event Reminders</h1>
            <p>
              To maintain a healthy customer relationship, use our Bulk SMS
              services to send event reminders, appointment reminders, movie
              schedules, and booking confirmations to your customers.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-voucher-80.png"
              alt=""
            />
            <h1>Mobile Vouchers & Ticketing</h1>
            <p>
              With the help of Dual VMNs, it is now possible to get sales
              enquiries or support queries via SMS or missed call, by setting up
              auto-replies on the same number.
            </p>
          </div>
        </div>
        <div className="Easy-Bulk-SMS">
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-update-64.png"
              alt=""
            />
            <h1>Mobile Solutions for Better Engagement</h1>
            <p>
              From web surveys to forms, discount coupons to vouchers, all can
              be sent to the targeted audience or customers via SMS for
              increasing engagement rate and getting customer satisfaction.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-email-open-50.png"
              alt=""
            />
            <h1>Mass Alerts and Notifications</h1>
            <p>
              Webtechage Private Limited provides Bulk SMS Service to send mass
              alerts during critical situations like earthquakes or floods. Mass
              notifications to staff members and customers can also be sent
              using our Bulk SMS Service.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-android-studio-50.png"
              alt=""
            />
            <h1>Regular System Update</h1>
            <p>
              To let businesses enjoy our Bulk SMS services smoothly with
              multiple advanced features, we send regular system and software
              updates to provide latest version of Bulk SMS Portal.
            </p>
          </div>
          <div className="Easy-Bulk-SMS2">
            <img
              src="https://webtechsolution.co/assets1/img/icon/icons8-setting-64%20(1).png"
              alt=""
            />
            <h1>Build Opt-In List using DND manager</h1>
            <p>
              Webtechage Private Limited offers you a Bulk SMS Panel that comes
              with a DND Manager to help you send Bulk SMS only on Non-DND
              contact numbers by creating a sender list after filtering DND
              numbers.
            </p>
          </div>
        </div>
      </div>

      {/*ContextName*/}

      <div className="Phone ContextName">
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
      {/*Features & Benifits*/}
      <div className="Features-Benifits">
        <h1>FEATURES & BENIFITS</h1>
        <h2>Check our Services</h2>
        <p>
          (Below features only valid for promotional SMS and Transactional with
          sender id SMS)
        </p>

        <div className="Sender-header">
          <h2>Promotional SMS</h2>
          <h2>Transactional SMS</h2>
        </div>
        <div className="Sender-Id-SMS">
          {myData.map((e) => {
            return (
              <div className="Sender-Id-SMS-2">
                <FiCheckSquare />
                <h6>{e}</h6>
              </div>
            );
          })}
        </div>
      </div>
      {/*Our Context*/}
      <div className="Our-Context">
        <h1>
          ADVANTAGES OF TAKING BULK SMS SERVICES FROM WABTECHAGE PVT. LTD.
        </h1>
        <p>
          Let’s take it one by one. Imagine yourself and see if this description
          fits you. You are an entrepreneur with a mobile app idea in your mind.
        </p>

        <div className="Context-outer-card">
          {data.map((e) => {
            return (
              <div className="Context-inner-card">
                <div className="Context-inner-inner">
                  <p className="Context-icons ">{e.icons}</p>
                  <p className="Context-title Bulk-title">{e.title}</p>
                </div>
                <p className="Context-content Bulk-content">{e.content}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/*Question*/}
      <div className="Question">
        <h2>RESOURCE/FREQUENTLY ASKED QUESTION </h2>
        <Accordion>
          <AccordionItem header="What is Bulk SMS ?">
            Bulk SMS is a kind of message transmitting service used for sending
            informational or promotional text messages to a wide audience. It
            has various applications like OTP, Banking Messages, E-Commerce Site
            Transaction Messages, Offers, coupons, gathering feedback via text
            messages, and many more.
          </AccordionItem>

          <AccordionItem header="Why choose Webtechage Private Limited for Bulk SMS Marketing?">
            <li className="Quick">
              <b>Scalable Bulk SMS Marketing Services</b>
            </li>
            <li>
              We do understand that along with the growth of businesses, they
              will require a better SMS Marketing approach. To help businesses
              in the long run, we offer a scalable Bulk SMS Marketing platform.
              This will help businesses in using upgraded Bulk SMS Marketing
              services with time and requirement.
            </li>
            <li className="Quick">
              <b>Complete Bulk SMS Marketing</b>
            </li>
            <li>
              After taking Bulk SMS Marketing services from Webtechage Private
              Limited, you will not require any other SMS marketing company. We
              do understand that different business segments can have different
              objectives. To fulfil the objectives of all the business domains,
              we offer complete Bulk SMS Marketing Solutions.
            </li>
            <li className="Quick">
              <b>Custom Bulk SMS Marketing Plans</b>
            </li>
            <li>
              To help our clients in reaching their goals within their budget or
              present needs, we help them with our customised services. Our
              experts communicate with these businesses to understand what they
              are expecting and to help them understand how we can help them.
              After understanding their expectations and what kind of Bulk SMS
              Marketing Solution they require, our team helps in forming a
              custom Bulk SMS Marketing Plan for them.
            </li>
            <li className="Quick">
              <b>Budget-Friendly Bulk SMS Marketing Services</b>
            </li>
            <li>
              {" "}
              Our Bulk SMS Marketing Services are quite affordable. We have kept
              the pricing of our Bulk SMS services by keeping all business
              segments in mind. As we aim to make our Bulk SMS Marketing
              Services available for all.
            </li>
          </AccordionItem>

          <AccordionItem header="What is Bulk SMS Gateway?">
            Bulk SMS Gateway is a platform or a channel that allows users to
            transmit bulk SMSs on users’ numbers from a telecommunication
            system. We have one of the most trusted and efficient Bulk SMS
            Gateway that helps in transmitting all types of Bulk SMS Messages.
          </AccordionItem>

          <AccordionItem header="Which type of Bulk SMS services are offered by Webtechage Private Limited?">
            Webtechage Private Limited offers mainly 2 types of Bulk SMS
            services that are Transactional Bulk SMS Service and Promotional
            Bulk SMS Service.
            <li className="Quick">
              <b>Transactional Bulk SMS Service</b>
            </li>
            <li>
              This messaging service is an automatic text message transmitting
              service which sends vital information to a customer’s mobile
              number. This kind of text message is automated when a certain
              action is initiated by the customer. Transactional SMS is allowed
              on all the numbers and it can be sent at any hour of the day. It
              is being used for sending order tracking texts, delivery of the
              order, general alerts, OTPs, banking alerts, payment-related
              texts, and many more.
            </li>
            <li className="Quick">
              <b>Promotional Bulk SMS Service</b>
            </li>
            <li>
              This messaging service is used for sending the company’s products,
              services, and offers related information. It is mainly used for
              sending promotional and marketing content. Businesses and
              companies run Bulk Promotional SMS marketing campaigns to promote
              their brand for increasing sales and brand visibility. One can
              send promotional text messages only during business hours. Also,
              promotional SMSs can be delivered only on Non-DND numbers.
              Promotional SMS includes messages related to offers on products or
              services, discounts on products, sign-up offers, and lots more.
            </li>
          </AccordionItem>
        </Accordion>
      </div>

      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
        {renderForm()}
      </Modal>
      {/*Lets Talk*/}
      <div className="Lets-talk Talk-to">
        <div className="Lets-main Talk-main">
          <h1>
            <b>Lets Talk!</b>
          </h1>
          <p1>Our clients are smart, thoughtful, & forward-thinking.</p1>
          <br />
          <p2>Sound like you? Get in touch.</p2>
          <br />
          <p3>+91-70656 80680</p3>
        </div>
          <Lets/>
      </div>

      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
        {renderForm()}
      </Modal>
    </>
  );
};

export default FrontpageBulk_SMS;
