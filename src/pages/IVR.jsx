
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import VoiceCard from '../component/VoiceCard';
import IVR1 from '../../public/IVR1.png'
import IVR2 from '../../public/IVR2.png'
import IVR3 from '../../public/IVR3.png'
import IVR4 from '../../public/IVR4.png'
import IVR5 from '../../public/IVR5.png'
import IVR6 from '../../public/IVR6.png'
import Card3 from '../component/Card3';
import { CiCalendar } from "react-icons/ci";
import { BsCardChecklist } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import RenderForm from '../component/RenderForm';
import MyForm from '../component/MyForm';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const renderForm = () => <RenderForm />;
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




const IVR = () => {

    const voicedata = [
        {
            img: IVR1,
            title: "Instant Installation",
            content: "Quick and easy installation of IVR System to help businesses utilize its features from day one. This enables one to take calls of customers from day one only by activating all the IVR System services."
        },
        {
            img: IVR2,
            title: "In-Budget Pricing",
            content: "Webtechage has the best and most affordable IVR System in India. It covers most of the IVR Solutions at low pricing; including configuration, advanced features, and technical support.."
        },
        {
            img: IVR3,
            title: "Real-Time Tracking",
            content: "Access all the calls in real-time by utilizing the IVR System dashboard and real-time tracking feature. Monitor the real-time call report from the dashboard to offer a better and more feasible solution to customers at different levels."
        },
        {
            img: IVR4,
            title: "User-Friendly System",
            content: "With multiple features, easy access to the dashboard, and less technical handling; we offer a user-friendly IVR Portal for all businesses. It allows agents to manage calls and other IVR functions with ease."
        },
        {
            img: IVR5,
            title: "Easy CRM Integration",
            content: "Integrate CRM in the IVR System with ease and get access to all the customer data on the same dashboard to offer quick and better support to customers when resolving queries."
        },
        {
            img: IVR6,
            title: "Guaranteed Uptime",
            content: "With 24 by 7 customer support and backend support, we offer 99.99 percent uptime to avoid any lag in the IVR Services. This helps in running all the IVR Services constantly without letting any delay in offering the customer support."

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
                    <h1>India’s No. 1</h1>
                    <h2> IVR System for your Business
                    </h2>
                    <p>Smart IVR service configured through a Virtual Number interacts with customers and routes calls to appropriate department </p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
                <MyForm/>

            </div>
            {/* Voice Section */}
            <div className="Voice-box IVR-box">
                <h1>IVR Solution</h1>
                <p>At Webtechage we offer a high range and flexible cloud-based IVR System that can be utilized by varied business domains. We are one of the best IVR Service Providers in India offering IVR services at cost-friendly prices.

                </p>
                <div className="voice-outer IVR-outer2">
                    <div className="Voice_services IVR-services2 IVR-service1">
                        <img src="https://webtechsolution.co/assets1/img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Voice_services IVR-services2">
                        <h1>Best IVR Service Provider in India
                        </h1>
                        <p className="IVR-P">Interactive Voice Response (IVR) is a service that functions with the help of an automated voice response system. The IVR System offered by Webtechage works on cloud-based technology. It has multiple features that make it beneficial for both businesses as well as customers. The pre-recorded voice system responds to the input given by callers using the voice input or DTMF tones or the telephone keypad. It takes input from users, processes their request, and reverts in the form of an automated voice response or by routing calls to the concerned department. Webtech Solution offers a virtual IVR number to businesses along with an auto-attendant feature. According to the needs of the businesses, they can get advanced features with multi-level menu options. It makes virtual phone system navigation easier; allowing callers to get the right solution or reach the right department.</p> <br />

                        <p className="IVR-P"> Webtechage is helping customers get the desired information about the product or services they wish to buy or are already utilizing with the help of the cloud IVR System. With the help of an automated communication system, it is allowing businesses to deliver useful information when required by customers. This new advancement in telephony and computer technology is a great benefit for businesses. They are utilizing the IVR (Interactive Voice Response) System functions for both inbound and outbound calling for various applications. Like Telecom Sector, Banking Sector, E-commerce Industry, Travel Portals, Railway Enquiries, Flight Bookings, Movie Ticket Booking, Food Delivery Apps, Cab booking, and many more. Other than these applications, IVR System also helps businesses in marketing by helping them generate leads.</p>
                    </div>
                </div>
            </div>

            <h1 className='we-know ivr-know'>BENEFITS OF USING IVR SERVICE IN INDIA</h1>
            <p className='Ifyouare'>Below are some of the benefits that businesses or organizations can get by using Interactive Voice Response Service for business in India.
</p>


            <div className="Exclusive">
                <Card3 icons={<CiCalendar/>} title={"Offers first contact resolutions"} dis={"It is now possible to provide first contact resolutions to callers with the help of the IVR System. As it redirects the calls to the right department or to the concerned person only who can offer the right solution to the caller’s query. This saves time for both callers and agents; and adds customer satisfaction also."} />
                <Card3 icons={<BsCardChecklist />} title={"Boosts customer service efficiencies"} dis={"With the help of IVR Services, customer service has improved a lot. As most of the small queries are answered by the automated voice response system. So, customer service agents get ample time to resolve the other major or important queries of customers on time."} />
                <Card3 icons={<IoAlarmOutline />} title={"Increases agent’s efficiency"} dis={"IVR System transfers customer’s calls to the right agent or department by understanding their queries. It saves agents from wasting their time on wrong queries and utilizing all their time in resolving the queries they are experts in. It increases the overall productivity of the customer service agent."} />
                <Card3 icons={<MdOutlineMessage />} title={"Reduces operational cost"} dis={"The Interactive Voice Response (IVR) System helps in cutting the extra cost that the businesses were investing in call attendants, receptionists, or customer service. By making use of IVR solutions, organizations require less workforce for handling customer service. Most of the manual calling work is now automated and all of this reduces the operational cost."} />
            </div>

            {/* Bulk Voice Section */}
            <div className="Bulk-Voice">
                <h1> IVR - Interactive Voice Response Features</h1>
                <p>Get an auto call attendant along with multiple features to handle all your calls. Know what all features come up with the cloud IVR System offered by Webtechage Perivate Limited.</p>
            </div>

            <div className="bulk-voice-main-box">
                <div className="bulk-voice-inner">
                    <div className='bulk-voice-content'>
                        <h3>Multiple Menu Options</h3>
                        <p> Uniquely designed Interactive Voice Response System offering connectivity and configuration for multiple departments. The wisely designed IVR System makes navigation, call flow, and query resolution better for both callers and agents. Customers no longer need to wait for long for their query resolution.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>Pre-recorded professional IVR messages
                        </h3>
                        <p>Dedicated and high-quality voice-over provided by professionals for pre-recorded voice messages according to your business needs. All the pre-recorded voice messages can be changed or replaced when required. The professional IVR messages improve brand image and leave a great impact on customers.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>IVR Call Recording
                        </h3>
                        <p>Track and access complete details of every call that was connected via this IVR System automatically with the help of the call recording feature. Unlimited calls can get recorded and stored in the IVR System for future use. It also allows higher management to monitor calls and train agents to offer better customer service in future.</p>
                    </div>

                </div>
                <div className="bulk-voice-inner">
                    <img src="https://webtechsolution.co/assets1/img/service/ivr.jpg" alt="" />
                </div>
                <div className="bulk-voice-inner">
                    <div className='bulk-voice-content'>
                        <h3>Integrate API and third-party applications</h3>
                        <p>Incorporate third-party applications and useful APIs in our cloud-based IVR System to make your business offer better and more innovative solutions. Being one of the topmost IVR Service providers in India, we provide complete technical assistance for integrating these APIs and applications.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>Integrate CRM</h3>
                        <p>CRM Integration is offered along with IVR System to help businesses access complete details of the customer while using the IVR Services. It helps in verifying customer details and offering better resolution by checking complete information. Agents will no longer need to juggle between different applications or dashboards to check customers’ data.</p>
                    </div>
                    <div className='bulk-voice-content'>
                        <h3>Call Forwarding</h3>
                        <p>No delays or long waiting queues in forwarding calls to the concerned department or dedicated agents with the help of easy IVR System navigation and instant call routing feature. The pre-recorded voice messages guide the customer to connect with the right department in a few seconds.</p>
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
                    <AccordionItem header="What is IVR & It is Important for business ?">
                        IVR which is Interactive Voice Response is an automated phone system that allows people to communicate with a computerised or pre-recorded voice using touch-tone keypad input or voice. From giving basic information to routing calls to getting technical assistance, IVR serves various purposes. With the help of dedicated IVR software and a phone system, it is easy to integrate IVR into the business. Some of its basic uses are checking order status, checking bank balance, activating or deactivating any VAS service, railway enquiry, and more.
                    </AccordionItem>
                </Accordion>
            </div>
            <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
                {renderForm()}
            </Modal>
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
                   {/*Price*/}
      <div className="Price">
        <h1>IVR (Interactive Voice Response)</h1>
        <p>
        Customizable IVR system for automated customer interaction.		
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li><b>Setup Fee</b></li>
                <li>
                 ₹ 5,000
                </li>
                <li>
                  <b>Monthly Fee</b>
                </li>
                <li>₹ 2,000</li>
               
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Business</h3>
              <ul>
                <li>
                 <b>Setup Fee</b>
                </li>
                <li>₹ 10,000</li>
                <li>
                 <b>Monthly Fee</b>
                </li>
                <li>
                  ₹2,500
                </li> 
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Enterprise</h3>
              <ul>
                <li>
                 <b>Setup Fee</b>
                </li>
                <li>₹ 15,000</li>
                <li>
                 <b>Monthly Fee</b>
                </li>
                <li>
                ₹ 4,000
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
            {/*Name*/}
            <div className="Name">
                <h1>Don't Wait! Boost Your Business With Us. Get Started Now.</h1>
            <div className="phone-input-group">
              <input type="text"  id="name" name="name" placeholder='Enter your name' />
              <input type="text" id="phone" name="phone" placeholder="Enter your phone" />
             
            </div>
            <div className="button"> 
                <button>Submit</button>
              </div>
            </div>
            
            {/*Frequently Asked Questions*/}
            <div className="Frequently_Asked_Questions">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <div className="Frequently-main">
                    <Accordion>
                        <AccordionItem header="What is IVR?">
                            IVR which is Interactive Voice Response is an automated phone system that allows people to communicate with a computerised or pre-recorded voice using touch-tone keypad input or voice. From giving basic information to routing calls to getting technical assistance, IVR serves various purposes. With the help of dedicated IVR software and a phone system, it is easy to integrate IVR into the business. Some of its basic uses are checking order status, checking bank balance, activating or deactivating any VAS service, railway enquiry, and more.
                        </AccordionItem>
                        <AccordionItem header="What are the benefits of choosing Webtechage for IVR Service?">
                            <li className="Quick"><b>Easy configuration</b></li>
                            <li>The configuration of the IVR System is quite easy and basic. We do not use those traditional IVR Systems with such a time-taking configuration process. From setting up the extension to configuring the IVR System software, all this can be done with ease.</li>
                            <li className="Quick"><b>Both Inbound and Outbound IVR Services</b></li>
                            <li>Unlike other IVR System Service Providers, we offer both Inbound and Outbound IVR services. You need not find two different agencies to get inbound IVR and outbound IVR. Also, we have upgraded IVR System which makes IVR service more beneficial for both businesses and customers</li>
                            <li className="Quick"><b>Support from our technical team</b></li>
                            <li>Our technical team is always available to help you with the IVR System. From helping you understand how to integrate this into your system to help you in troubleshoot the technical problems, our experts will guide you throughout.</li>
                            <li className="Quick"><b>Cost-friendly IVR System</b></li>
                            <li>You can check our IVR System plans according to the IVR Service you are taking. With the kind of IVR System and the latest services offered by us, it is not easy to get these services at the price offered by us.</li>
                        </AccordionItem>
                        <AccordionItem header="What is the difference between Inbound IVR and Outbound IVR?">
                            <li className="Quick"><b>Inbound IVR</b></li>
                            <li>Inbound IVR Service is used for handling incoming or inbound calls. From calls auto attendant to route calls to respective departments, music or information announcement during the call on hold to resolving minor or basic customer queries, Inbound IVR is being used for different applications. It can be telephony system based or it can be system operated. Most customer care centres make use of the Inbound IVR System</li>
                            <li className="Quick"><b>Outbound IVR</b></li>
                            <li>The outbound IVR System is used for dialling calls for different purposes. In this IVR System, the automated computerised system makes calls on numbers that are fed into the system software. It can be used for making sales or promotional calls or for updating customers about any amount deduction from their bank account, conducting surveys or taking feedback.</li><br />

                            <li>At Webtech Solution, you get both Inbound IVR and Outbound IVR Services. You can take any IVR service according to your business need.</li>
                        </AccordionItem>
                        <AccordionItem header="How IVR Service can help my business?">
                            <ul>
                                <li>Increase productivity by using an automated outbound call system for potential customers. No manual calling will be required.</li>
                                <li>Saves time by redirecting calls to the concerned department, resolving basic customer queries, and</li>
                                <li>No long call queues due to the virtual receptionist. This will save businesses from losing customers and handling irate customers with a better approach</li>
                                <li>Improve brand image by offering professional virtual phone service to customers.</li>
                                <li>Save cost spend on traditional calling as well as on hiring agents for handling and making calls. </li>
                                <li>Adds to customer satisfaction by offering quick self-service to customers.</li>
                            </ul>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </>
    )
}

export default IVR
