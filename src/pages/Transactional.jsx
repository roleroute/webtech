
import "../Style.css"
import React, { useState } from 'react';
import { CiCalendar } from "react-icons/ci";
import { BsCardChecklist, BsCalendarCheck, BsChatSquareText, BsCollection, BsBinoculars, BsTranslate } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import { data, Testimonial } from '../../data';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Card7 from "../component/Card7";
import Modal from "../component/Modal";
import Card5 from "../component/Card5";
import RenderForm from "../component/RenderForm";
import MyForm from "../component/MyForm";
import Lets from "../component/Lets";

const renderForm = () => (
<RenderForm />
);




const Transactional = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,

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
                // autoplay: true,

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
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (

        <>
            <div className="blog-banner">
                <div className="blog-inner-card">
                    <h1>India's #1</h1>
                    <h2> Top Best Transactional Bulk SMS Services Provider in India
                    </h2>
                    <p>Get a reliable, fast, and cost-effective Transactional Bulk SMS Service for initiating healthy business communication with your target audience to provide complete value and satisfaction.
                    </p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
                <MyForm/>

            </div>
            {/* Sms Section */}
            <div className="Sms-box Transactional-SMS">
                <h1>Transactional BULK SMS</h1>
                <p>Transactional SMS is a kind of message sent by an enterprise or business to transmit critical or useful information to their audience. The message contains OTP, Alert messages, financial transaction or bank account details, appointment details, and information about the product or services used by the customer.</p>
                <div className="sms-outer">
                    <div className="Bulk_services Transactional-Services">
                        <img src="https://webtechsolution.co/assets1/img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Bulk_services Transactional-Services2">
                        <h1>Transactional Bulk SMS</h1>
                        <p>Webtechage Private Limited is the most reliable Transactional Bulk SMS Service Provider in India. We offer a transactional Bulk SMS Service that caters for the need of most businesses for sending important messages related to their products and services. Our Transactional SMS Service is used to send messages on both DND and Non-DND numbers 24 by 7 using a safe and secure Transactional SMS gateway. We strictly follow the TRAI Guidelines and that is why we exclude any promotional information when using this service. With this message service, it is now possible to hold healthy communication with your customers by sending them useful info. Our experts are always ready to assist you with Transactional SMS Services and other information related to it.</p>
                        <h1>By Transactional Bulk SMS You Can Target Your Audience
                        </h1>
                        <p>The bulk SMS service platform is designed to help small to large business owners who want to send alerts SMS, promotional, OTP, multimedia, and marketing. Our main aim is to make the SMS Industry simple, transparent, and less costly. by transactional SMS a businessman can target both types of audiences like DND and Non-DND. Our Promotional bulk SMS provides interfaces for you to craft your B2B and B2C communications. Our integrated APIs work across Email, SMS, Data, and other platforms we are the best bulk SMS service provider to help people to generate leads according to client need.</p>
                    </div>
                </div>
            </div>

            {/*IVR Special Fetures*/}
            <div className="IVR-Special-Fetures ">
                <h1 className="Transactional-Fetures2">USAGE OF TRANSACTIONAL SMS SERVICE PROVIDE IN INDIA
                </h1>
                <p className="Transactional-Fetures">Webtechage Private Limited is one of the top-most transactional SMS Service Providers in India, offering transactional SMS service for multiple business sectors. We aim to offer seamless transactional SMS APIs, pre-defined templates, and on-time transactional SMS delivery to all our clients.

                </p>
                <div className="Special-inner-card IVR-Special-Inner-card2 Trans-inner">
                    <div className="Special-inner-card2 Trans-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-education-64.png" alt="" />
                        <h1>Booking Confirmation Notifications</h1>
                        <p>Different business sectors require transactional SMS service for sending booking confirmations to their customers regularly. For example railway ticket booking, flight booking, movie show booking, event booking, clinic appointment booking, gas cylinder booking, bus ticket booking, food order booking, and lots more.</p>
                    </div>
                    <div className="Special-inner-card2 Trans-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-bank-cards-50.png" alt="" />
                        <h1>Financial Transaction Alerts</h1>
                        <p>Financial institutions require bulk transactional SMS services to send important financial alerts to customers. For example, amount deducted from a bank account, salary or money credited to a bank account, credit card transaction, online banking OTP, and more. These notifications not only help customers get an update about the transactions but also alert them about any fraud taking place.</p>
                    </div>
                    <div className="Special-inner-card2 Trans-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-cart-64.png" alt="" />
                        <h1>Ecommerce Notifications and Alerts</h1>
                        <p>It is one of those sectors which require transactional SMS service every minute. As E-Commerce businesses require to s end important transactional SMS to their customers for different purposes. For example, order confirmation, order cancellation, return request processing, the amount refunded, e-receipt for purchase made, and lots more.</p>

                    </div>


                </div>
                <div className="Special-inner-card IVR-Special-Inner-card2 Trans-inner">
                    <div className="Special-inner-card2 Trans-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-approval-64.png" alt="" />
                        <h1>Send Education SMS & Alerts</h1>
                        <p>Transactional SMS is used for sending critical educational alerts and updates by schools, colleges, and educational institutions. Some of these educational transactional SMSs contain messages about attendance update, fee submission notification, student marks or performance report, links for downloading course material or syllabus and more.</p>
                    </div>
                    <div className="Special-inner-card2 Trans-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-cart1-64.png" alt="" />
                        <h1>Retail Store Notifications</h1>
                        <p>Retail shops both online and offline require transactional SMS service to send important notifications to their customers. It can be a notification regarding the recent purchase they made or retail store online user registration notification or the availability of the stock the customers signed up for.</p>
                    </div>
                    <div className="Special-inner-card2 Trans-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-crowd-50.png" alt="" />
                        <h1>Mass Communication Notifications</h1>
                        <p>At times, governments or different businesses or organizations require to communicate important updates or alert their customers at the same time. For this mass communication, they make use of transactional SMS to reach people in bulk. For example, alerts about Earthquake or Flood in any particular area.</p>
                    </div>


                </div>
            </div>

            {/* Callback Section */}
            <div className="callback-section">
                <h1>Get enterprise SMS Service For Your Business Today</h1>
                <p>Not Sure about this Servic? Contact to Our Sales Specialist today!</p>
                <button onClick={toggleModalVisibility}>Resquest for Demo!</button>
            </div>
            {/*Fetures of Transactional */}
            <div className="Fetures-Transactional-SMS">
                <h1>FEATURES OF TRANSACTIONAL SMS SERVICES</h1>
                <p>Being one of the best transactional SMS Service Providers in India, we offer premium transactional SMS services with multiple features. It allows businesses to utilize transactional SMS services that can maximize their profit and helps them deliver satisfactory services to their customers</p>
                <div className="Trans-SMS-inner">
                    <div className="Trans-SMS-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-sms-50.png" alt="" />
                        <h1>Customise SMS as per use</h1>
                        <p>Along with the pre-defined transactional SMS templates, we also offer customisable transactional SMS service, where businesses can customise the SMS templates according to their use. Organizations can customise transactional SMSs from the dashboard until they are not sent to the customer’s number.</p>
                    </div>
                    <div className="Trans-SMS-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-report-68.png" alt="" />
                        <h1>Integrate APIs free of cost</h1>
                        <p>To make use of our Transactional SMS Service, businesses can integrate our robust APIs with ease in their existing system or software. The integration of our transactional SMS APIs will not take more time, as it is a seamless process. Businesses need not pay any extra cost for the APIs and they only need to pay for the transactional SMS plans they buy.</p>

                    </div>
                    <div className="Trans-SMS-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-do-not-disturb-50.png" alt="" />
                        <h1>Transmit messages in different languages</h1>
                        <p>Webtechage Private Limited offers transactional SMS services in different languages including the regional languages. It becomes easier for customers to understand the transactional messages sent in their regional language. Customers will no longer miss any important alert or critical update sent to them via transactional SMS Service and will respond to it on time.

                        </p>

                    </div>

                </div>
                <div className="Trans-SMS-inner">
                    <div className="Trans-SMS-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-setting-64.png" alt="" />
                        <h1>Deliver messages on DND numbers</h1>
                        <p>We offer a transactional SMS service that allows businesses and organizations to transmit transactional messages on Do Not Disturb (DND) numbers also. With the help of this feature, businesses can send important messages containing OTP SMS, financial transactions, and other such critical alerts on DND numbers as well.</p>
                    </div>
                    <div className="Trans-SMS-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-language-50.png" alt="" />
                        <h1>Get a Delivery Report for every SMS</h1>
                        <p>With our bulk transactional SMS system, it is now possible for businesses to keep a track of all the transactional messages that are successfully delivered to the user’s number. A delivery report for every single message is made available on the transactional SMS dashboard. The delivery report contains the delivery date and time of the transactional SMS.</p>
                    </div>
                    <div className="Trans-SMS-inner2">
                        <img src="https://webtechsolution.co/assets1/img/icon/icons8-clock-50.png" alt="" />
                        <h1>24 by 7 Transaction SMS Service</h1>
                        <p>We offer 24 by 7 transaction SMS delivery service, as transactional SMSs are not time-bound. As these messages are stimulated when an action is taken by the customer or when the organizations need to send an important alert. So, our transactional SMSs can be sent at any hour of the day for delivering important information.</p>

                    </div>

                </div>

            </div>


            {/*Price*/}
            <div className="Price">
                <h1>PRICE</h1>
                <p>Get Promotional Bulk SMS Services Online at affordable Price and send SMS with India’s leading bulk SMS service provider. Webtech Solution offers an ideal promotional bulk SMS service to your business which can directly generate sales and leads for your organization.</p>


                <div>

                    <Slider {...settings}>
                        <div className="slider_price">
                            <h3>Silver</h3>
                            <ul>
                                <li><b>50,000</b></li>
                                <li><b>Validity</b></li>
                                <li>3 month</li>
                                <li>16 Paisa Per SMS</li>
                                <li><b>Total Price</b></li>
                                <li>8,000</li>
                                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>

                            </div>

                        </div>
                        <div className="slider_price">
                            <h3>Gold</h3>
                            <ul>
                                <li><b>1,00,000</b></li>
                                <li><b>Validity</b></li>
                                <li>6 months</li>
                                <li>14 Paisa Per SMS</li>
                                <li><b>Total Price</b></li>
                                <li>14,000</li>
                                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                            </div>
                        </div>
                        <div className="slider_price">
                            <h3>Basic</h3>
                            <ul>
                                <li><b>10,000</b></li>
                               <li><b>Validity</b></li> 
                                <li>1 month</li>
                                <li>18 Paisa Per SMS</li>
                                <li><b>Total Price</b></li>
                                <li>1,800</li>
                                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                            </div>
                        </div>

                        <div className="slider_price">
                            <h3>Platinum</h3>
                            <ul>
                                <li><b>5,00,000</b></li>
                                <li><b>Validity</b></li>
                                <li>1 year</li>
                                <li>12 Paisa Per SMS</li>
                                <li><b>Total Price</b></li>
                                <li>60,000</li>
                                <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                            </div>
                        </div>



                    </Slider>
                </div>
            </div>
            {/*Question*/}
            <div className="Question">
                <h2>RESOURCE/FREQUENTLY ASKED QUESTION </h2>
                <Accordion>
                    <AccordionItem header="What is Transactional SMS?">
                        Transactional SMS is a kind of automated messaging used for conveying all the vital details to people. It is one of the easiest and quick ways to communicate all the necessary info in the form of a text message. Whether you have a start-up or a Multi-National Company, transactional SMS is required by every business segment at present. Even though it does not communicate any promotional information, companies do require it for sending order details, appointment details, delivery status, registration details, OTP, phone bills, and other such info. Banking institutions also make use of transactional SMS for sending bank account related details. The Transactional SMS service helps in building healthy communication between customers and companies.

                    </AccordionItem>

                    <AccordionItem header="How Webtechage Private Limited is helping organizations by offering Transactional SMS?">

                        <li className="Quick"><b>Delivering important updates on time</b></li>
                        <li> There is no quick and easy way of sending important notifications to customers other than transactional SMSs. At present, almost everyone makes use of a mobile phone. Our Transaction SMS Gateway makes it possible for organizations to reach their existing users on time, using this cost-friendly Bulk SMS Service.</li>
                        <li className="Quick"><b>Building customer relationships</b></li>
                        <li>By helping the companies in sending important updates to customers on time, we are helping them in building a good rapport about their company in customers’ minds. This not only helps customers in getting satisfaction. But it also helps these organizations in retaining customers.</li>
                        <li className="Quick"><b>Fetching real-time Delivery Report                        </b></li>
                        <li> Webtechage Private Limited not only provides a platform for organizations to transmit valuable information in the form of text messages to their customers. But it also helps in fetching the delivery report to know whether the customers received the Transactional SMS or not.</li>
                       
                    </AccordionItem>

                    <AccordionItem header="Is there any time restriction for Transactional SMS?">
                    No, transactional SMS can be sent at any time within 24 hours duration. These messages are sent to deliver crucial details. Most times, Transactional SMSs are triggered in response to the action taken by users or customers. So, there is no fixed time for transmitting these messages.
                    </AccordionItem>

                    <AccordionItem header="Is it possible to utilize Transactional SMS for both DND and NON-DND numbers?">
                    Yes, Transactional SMSs can be sent on both DND and NON-DND numbers. Transactional SMS contains important information which can be helpful for people in different ways. No one would like to miss such important information that is why Transactional SMSs are sent on all numbers. It can include messages from Bank, alert notifications, One-Time Passwords, order booking, appointment messages and lots more.
                    </AccordionItem>


                    <AccordionItem header="What kind of Transactional SMS Services are offered by Webtechage Private Limited?">
                    The Webtechage Private Limited offers a variety of transactional SMS Services that can help customers and businesses in a different ways. Some of the popular transactional SMS Services offered by our company are:- OTP which is a One-Time Password Service, E-Commerce Site Booking Confirmations, Order Cancellations, Bank Account Transaction or Financial Transaction Information, User Registration or Log In Details, Railway Ticket Booking or Airplane Ticket Booking Details, Delivery Status, Alerts during suspicious activities on customer’s account, E-receipts, and many more.


                    </AccordionItem>

                </Accordion>
            </div>
            
          <div className="Testimonials Testimonials2">
            <h1>Testimonials</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

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

            {/*Lets Talk*/}
            <div className="Lets-talk">
                <div className="Lets-main">
                    <h1><b>Lets Talk!</b></h1>
                    <p1>Our clients are smart, thoughtful, & forward-thinking.</p1><br />
                    <p2>Sound like you? Get in touch.</p2>
                </div>
                <Lets/>
                    </div>

            <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
                {renderForm()}
            </Modal>


        </>
    )
}

export default Transactional;