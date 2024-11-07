
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import VoiceCard from '../component/VoiceCard';
import voiceImg from '../../public/imag1.png'
import voiceImg2 from '../../public/imag2.png'
import voiceImg3 from '../../public/image3.png'
import voiceImg4 from '../../public/image4.png'
import voiceImg5 from '../../public/image5.png'
import voiceImg6 from '../../public/image6.png'
import voiceImg7 from '../../public/image7.png'
import voiceImg8 from '../../public/image8.png'
import MyForm from '../component/MyForm';
import RenderForm from '../component/RenderForm';
import Lets from '../component/Lets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const renderForm = () => (
    <RenderForm />
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



const Voice = () => {

    const voicedata = [
        {
            img: voiceImg,
            title: "Detailed Report",
            content: "Our Voice Call/SMS Panel comes with detailed report features from where you can download the live reports"
        },
        {
            img: voiceImg2,
            title: "Upload Audio",
            content: "You can upload Audio in your own voice from your Panel itself or else you can ask for Professional Voice as well."
        },
        {
            img: voiceImg3,
            title: "Multiple Key Inputs",
            content: "This is a very unique feature from where you can enter multiple keys inputs for sales, support, service, etc."
        },
        {
            img: voiceImg4,
            title: "Cloud Server",
            content: "We have our panel hosted on a Cloud server, so you don't worry about your data security and it has 99.9% uptime"
        },
        {
            img: voiceImg5,
            title: "Instantly Delivery",
            content: "All the voice calls/SMS will be delivered within a few seconds and you can track them live."
        },
        {
            img: voiceImg6,
            title: "Schedule Your Voice",
            content: "You can easily schedule your voice calls for future dates and times and they will be delivered automatically at a specific date and time."

        },
        {
            img: voiceImg7,
            title: "Voice OTP On Call",
            content: "ou can send Voice OTP for 2 Factor authentication to your customers/clients which will give you the assurance of accuracy."
        },
        {
            img: voiceImg8,
            title: "Customer Support",
            content: "If once you will be associated with us we have dedicated customer support teams for you."
        },
    ]

    console.log(voicedata);


    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>

            <div className="blog-banner">
                <div className="blog-inner-card">
                    <h1>India's #1</h1>
                    <h2> Best Bulk Voice Call services Provide in India
                    </h2>
                    <p>Reach to your audience with Transactional Voice calls
                        Record customized voice messages and send them to your targeted audience with our easy to use platform </p>
                        <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
                <MyForm/>

            </div>
            {/* Voice Section */}
            <div className="Voice-box Voice-box2">
                <h1>Voice call Services</h1>
                <p>By Voice call Services You Can Target DND & Non DND Audience</p>
                <div className="voice-outer">
                    <div className="Voice_services Voice_services3">
                        <img src="https://webtechsolution.co/assets1/img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Voice_services Voice_services4 ">
                        <h1>
                        Voice Service
                        </h1>
                        <p>Voice Service can be used to send message to the numbers of customer passing the necessary information's for using the products or services. According to the TRAI Guidelines, this has been restricted that no promotional kinds of messages can be sent through this route. Some other majors important rules and policies are also given by the TRAI guidelines following the Transactional Bulk SMS Service. To know more you can visit our head office or call our experts, they will assist you with all the necessary information's and the details that need to know.</p> <br />
                        <h1>Voice Service SMS You Can Target Your Audience</h1>
                        <p>The bulk SMS service platform is designed to help small to large business owners who want to send alerts SMS, promotional, OTP, multimedia, and marketing. Our main aim is to make the SMS Industry simple, transparent, and less costly. by transactional SMS a businessman can target both types of audiences like DND and Non-DND. Our Promotional bulk SMS provides interfaces for you to craft your B2B and B2C communications. Our integrated APIs work across Email, SMS, Data, and other platforms we are the best bulk SMS service provider to help people to generate leads according to client need.</p>
                    </div>
                </div>
            </div>
            {/* Bulk Voice Section */}
            <div className="Bulk-Voice">
                <h1> BULK-VOICE CALL FEATURES</h1>
                <p>To convey your message to your customers or potential users, there is no better solution than the Voice Call. When you take Bulk Voice Call Service from Webtechage Private Limited, you get multiple features that make this service more beneficial for your business.</p>
            </div>

            <div className="bulk-voice-main-box">
                <div className="bulk-voice-inner">
                    <div className='bulk-voice-content'>
                        <h3>Make Bulk Voice Calls</h3>
                        <p>Webtechage Private Limited offers a Bulk Voice service that enables businesses to make hassle-free bulk voice calls at the same time on multiple numbers across different cities. Our multi-channel dialling panel makes it possible to carry out multiple voice campaigns at the same time with ease. Take our Bulk Voice Call Service and make multiple calls within a few seconds.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>Caller ID for Voice Calls</h3>
                        <p> Get a business caller ID to make bulk voice calls on multiple numbers or to carry our voice campaigns with ease. Webtech Solution allows multiple voice campaigns at the same time using the same caller ID for broadcasting important messages to customers. Using the same caller ID will help in building a brand image among the audience.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>Call Scheduling</h3>
                        <p>With the help of our call scheduling feature, it is now possible for businesses to schedule bulk voice calls for future dates from the Bulk Voice Call Panel. It helps in scheduling multiple voice campaigns in advance so that there should be no last-minute delay. Businesses can specify a particular date and time for scheduling calls for up to one year.</p>
                    </div>

                </div>
                <div className="bulk-voice-inner">
                    <img src="https://webtechsolution.co/assets1/img/service/ivr.jpg" alt="" />
                </div>
                <div className="bulk-voice-inner">
                    <div className='bulk-voice-content'>
                        <h3>Multiple Regional Languages</h3>
                        <p>Now carry out voice campaigns or broadcast voice messages to your audience in their regional language. We have a Bulk Voice Call platform that comes with multiple language features including the regional languages. Customers will feel more connected to your business when you will deliver messages in their native language.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>Comprehensive Voice Call Report</h3>
                        <p>Track all the voice calls and the voice campaigns with the help of the Bulk Voice Call Panel. It allows businesses to evaluate the success of voice campaigns and to plan future voice campaigns in a better way. Businesses can also record the response and feedback of the customers they got over the voice calls to improve their services.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>Text to Speech Conversion</h3>
                        <p>Our Bulk Voice Panel comes with a fully integrated system that allows one to convert text messages into speech for broadcasting voice messages. Get all the voice messages recorded and delivered in a professional voice with no extra cost. One can also modify these pre-recorded voice messages any time before the delivery of these automated voice calls</p>
                    </div>
                </div>
            </div>
            {/*IVR*/}
            <div className="IVR">
                <h1>Setting up your IVR for the Call Center was Never this Easy!</h1>
                <button onClick={toggleModalVisibility}> Contact with us </button>
            </div>
            <div className="IVR-main">
                <Accordion>
                    <AccordionItem header="What is Bulk Voice Service and Why It is Important for Any Business?">
                        A bulk Voice Call is a pre-recorded voice message which is sent by businesses or companies to the landlines or mobile phones of their customers or targeted audience. It is also known as voice SMS and is sent on bulk numbers at a time. The intention to send this Voice Call is to deliver a promotional or marketing message related to products and services of different brands or businesses. These voice calls are system generated automated calls made on numbers that are fed on the Bulk Voice Call Portal.
                    </AccordionItem>
                </Accordion>
            </div>
            <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
                {renderForm()}
            </Modal>
            {/*Voice call section*/}
            <div className="Voicec-call-section">
                <h1>Additional Features Of Voice Call Service Platform</h1>
                <h2>Check our Services</h2>
                <p>Voice Call/SMS Service Provider in India for your business. Send recorded bulk voice calls/SMS to your targeted audience in India.</p>

            </div>

            <div className="voice-card-main">

                {
                    voicedata.map((e) => {
                        return (
                            <VoiceCard data={e} />
                        )
                    })
                }
            </div>
            {/*Name*/}
            <div className="Name">
            <div className="phone-input-group">
              <input type="text"  id="name" name="name" placeholder='Enter your name' />
              <input type="text" id="phone" name="phone" placeholder="Enter your phone" />
             
            </div>
            <div className="button"> 
                <button>Submit</button>
              </div>

            </div>
              {/*Price*/}
      <div className="Price">
        <h1>Bulk Voice Call</h1>
        <p>
        Automated voice calls for promotional or informational purposes.		
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li>
                   10,000
                </li>
                <li><b>Cost per SMS</b></li>
                <li>
                 ₹ 0.20
                </li>
                <li>
                  <b>Total Price</b>
                </li>
                <li>₹ 2,000</li>
                <li><b>Validity</b></li>
                <li>₹ 2,000</li>
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Silver</h3>
              <ul>
                <li>
                 50,000
                </li>
                <li><b>Cost per SMS</b></li>
                <li>
                  ₹ 0.18
                </li>
                <li>
                  <b>Total Price</b>
                </li>
                <li> ₹9,000</li>
                <li>
                 <b>Validity</b>
                </li>
                <li>3 months</li>
                
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Gold</h3>
              <ul>
                <li>
                  1,00,000
                </li>
                <li><b>Cost per SMS</b></li>
                <li>
                  ₹ 0.15
                </li>
                <li>
                  <b>Total Price</b>
                </li>
                <li>₹ 15,000</li>
                  <li><b>Validity</b></li>
                <li>6 months</li>
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>

            <div className="slider_price">
              <h3>Platinum</h3>
              <ul>
                <li>
                  5,00,000
                </li>
                <li><b>Cost per Call</b></li>
                <li>
                ₹ 0.20
                </li>
                <li>
                  <b>Total Price</b>
                </li>
                <li>₹ 65,000</li>
                <li><b>Validity</b></li>
                <li>1 year</li>
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
                        <AccordionItem header="What is Bulk Voice Call?">
                            A bulk Voice Call is a pre-recorded voice message which is sent by businesses or companies to the landlines or mobile phones of their customers or targeted audience. It is also known as voice SMS and is sent on bulk numbers at a time. The intention to send this Voice Call is to deliver a promotional or marketing message related to products and services of different brands or businesses. These voice calls are system generated automated calls made on numbers that are fed on the Bulk Voice Call Portal.
                        </AccordionItem>

                        <AccordionItem header="Why choose Webtechage Pvt. Ltd for Bulk Voice Call Service?">
                            <ul>
                                <li>We offer secure and reliable Voice Call Services by using a secure platform. From customers’ contact details to their recorded voice messages, all the data is stored safely.</li>
                                <li>We offer a cost-effective Bulk Voice call service. From the installation cost to the Bulk Voice Call Plan charges, they all are affordable.</li>
                                <li>We offer multiple features like call monitoring, call recording, real-time delivery report, and many more.</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem header="Why using Bulk Voice Call Service is beneficial for businesses?">
                            <li className="Quick"><b>Fast Alerts during Emergency</b></li>
                            <li>Customers may miss reading a text message. But the probability of answering Voice Calls is more. In case of any emergency, Bulk Voice calls are one of the best alternatives for sending alerts to millions of people at the same time.</li>
                            <li className="Quick"><b>More Conversion Rate</b></li>
                            <li>With the help of Bulk Voice Calls, the promotion of products and services becomes more effective. The more the number of answered voice calls, the more will be the lead generations. Converting such leads into business is easier and faster, as voice calls leave a long-lasting impact on customers. Convincing customers over call seems easier than converting customers over text messages.</li>
                            <li className="Quick"><b>Precise Feedback</b></li>
                            <li>Conducting surveys using Bulk Voice Calls or taking customers’ feedback through voice calls is far better than any other method. As customers can give precise feedback and answers over voice calls. All this feedback gets recorded and can be used from time to time in making any marketing strategies or planning to deploy better customer service.</li>
                            <li className="Quick"><b>Adds Personal Touch</b></li>
                            <li>With Voice Calls it is easier to give a personalised touch to customers. They can relate to brands or products moreover Voice Calls then text messages. This also helps in retaining customers by improving customer satisfaction through Bulk Voice Calls.</li>
                        </AccordionItem>
                        <AccordionItem header="What is the duration of the Bulk Voice Calls?">
                            Most Bulk Voice Calls time duration varies from 30 seconds to 45 seconds. The Bulk Voice Calls made for conducting surveys or taking feedback may last a bit longer depending on the time taken by customers in giving feedback.
                        </AccordionItem>
                        <AccordionItem header="Do I Need to pay for the Bulk Voice Calls which were not answered by customers?">
                            No, unanswered Bulk Voice Calls are not chargeable. So, all the credits that were not used during the Bulk Voice Call Campaign will get credited back to your account.
                        </AccordionItem>
                    </Accordion>
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

export default Voice
