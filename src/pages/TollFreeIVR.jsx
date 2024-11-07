
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RenderForm from '../component/RenderForm';
import MyForm from '../component/MyForm';
import Lets from '../component/Lets';



const renderForm = () => <RenderForm />;



const TollFreeIVR = () => {

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
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],

    };



    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>

            <div className="blog-banner New-banner IVR-banner">
                <div className="blog-inner-card">
                    <h1>India’s No. 1</h1>
                    <h2>Toll-Free Number Solution for Startups, SMBs and Enterprises</h2>
                    <p>Get a professional toll free number and give your customers the privilege of calling your business for free </p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
             <MyForm/>

            </div>
            {/* Voice Section */}
            <div className="Voice-box Digital-box">
                <h1>Toll Free Numbers</h1>
                <p>Make use of toll free number service to build a brand image for your business. Webtechage Private Limited is one of the best toll free number providers in India offering exclusive services at cost-friendly prices.</p>
                <div className="voice-outer">
                    <div className="Voice_services Voice-img TollFree1" >
                        <img src="https://webtechsolution.co/assets1//img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Voice_services Digital_service OwnVoice IVRToll TollFree2">
                        <h2>Choose Best Plan As Per Your Need</h2>
                        <p> A toll free number is used by businesses or organizations to help their customers reach them with ease at no cost. Customers or clients can dial this number from anywhere in India free of cost. To increase customer interaction and achieve customer satisfaction, every business should make use of Toll Free Number Service.</p>
                        <p>Webtechage Private Limited offers toll free number services that include the number starting with 1800, 1860, and other such easy to remember series. With the help of this exclusive cloud telephony solution, we ensure that businesses can drive more call volume with the help of multiple extensions of the same toll free number. To help businesses get complete information about every incoming and outgoing call, we provide a toll-free number portal. For customers also, a self-care IVR portal is made available to access small details or to reach customer service agents for query resolution. Webtech Solution also ensures that businesses are accessible by customers 24 by 7, once they take toll free number service. All these services are made available in exclusive and affordable Toll Free Number Service plans designed by our team for different business needs.</p>

                        <p>Businesses do have to pay for both incoming and outgoing calls but they get a high return on investment. A toll free number helps in increasing sales by letting more potential customers/clients reach you with ease. By utilizing it in marketing and promotional campaigns, businesses can save huge costs and can build a unique business identity. One of the major purposes served by our toll free number services in India is getting customer satisfaction and customer retention.</p>

                    </div>
                </div>
            </div>

            {/*IVR Special Fetures*/}
            <div className="IVR-Special-Fetures">
                <h1>Toll Free Service Features</h1>
                <h2>Check our Services</h2>
                <p>Utilize our Toll Free Number Services for pulling marketing campaigns, maximizing customer interaction, and increasing customer retention with the help of its exclusive features.</p>
                <div className="Special-inner-card IVR-Special-Inner-card2">
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios-filled/80/000000/commercial-development-management.png" alt="" />
                        <h1>Get Instant Calling Access</h1>
                        <p>Webtechage Private Limited setups all the toll free number services in less time; making it possible for customers and clients to utilize the calling services instantly. Businesses can get access to calls at any location, wherever the toll free number extensions are installed. It helps businesses to make use of the same number even after the expansion of business in different cities.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios-filled/80/000000/youtube-music.png" alt="" />
                        <h1>Automatic Call Routing
                        </h1>
                        <p>The automatic call routing makes it possible to route customers’ calls to the desk of agents who are free to take calls. It results in less queue/wait time and increases the agent’s productivity and efficiency in handling calls. It also increases customer satisfaction by answering all the calls promptly.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/80/000000/external-headphone-podcast-xnimrodx-lineal-color-xnimrodx-2.png" alt="" />
                        <h1>Integrate CRM and IVR</h1>
                        <p>With the guidance of our technical team, incorporate simple to advanced IVR functions in your toll free number system within a few hours. Get your CRM dashboard and our easy to use APIs added smoothly to the system for a better customer approach and high-quality assistance.</p>

                    </div>


                </div>
                <div className="Special-inner-card IVR-Special-Inner-card2">
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-flaticons-lineal-flat-icons/80/000000/external-api-computer-programming-flaticons-lineal-flat-icons-2.png" alt="" />
                        <h1>Unlimited extensions</h1>
                        <p>Webtechage Private Limited offers unlimited extensions for the same number for receiving or making calls at the same time. These extensions are independent of locations and can be installed at different work locations for offering seamless customer service and the best toll free number calling experience.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/80/000000/external-pay-currency-icongeek26-outline-icongeek26-1.png" alt="" />
                        <h1>Flexible and affordable Subscriptions</h1>
                        <p>Webtechage Private Limited offers a variety of toll free number plans for different business segments. We provide flexible and customisable plans also that can match our client’s requirements. All these exclusive toll free number subscriptions are available at budget-friendly pricing.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios/80/000000/graph-report-script.png" alt="" />
                        <h1>Get Systematic Call Reports</h1>
                        <p>With the help of our analytical and live reporting system, businesses can get every call report on the dashboard. It will help in monitoring all the inbound and outbound calls for training purposes and future use. The detailed reports also help in getting deep insights about every call when required for future assistance or sales.</p>
                    </div>


                </div>
            </div>

             {/* Callback Section */}
      <div className="callback-section">
        <h1>Get enterprise SMS Service For Your Business Today</h1>
        <p>Not Sure about this Servic? Contact to Our Sales Specialist today!</p>
        <button onClick={toggleModalVisibility}>Resquest for Demo!</button>
      </div>


                {/*Price*/}
                <div className="Price">
                    <h1>PRICE</h1>
                    <p>Get Promotional Bulk SMS Services Online at affordable Price and send SMS with India’s leading bulk SMS service provider. Webtech Solution offers an ideal promotional bulk SMS service to your business which can directly generate sales and leads for your organization.</p>


                    <div>

                        <Slider {...settings}>
                            <div className="slider_price">
                                <h3>Standard</h3>
                                <ul>
                                    <li><b>1100</b></li>
                                    <li>Unlimited Time</li>
                                    <li><b>Sender Id Based</b></li>
                                    <li><b>SMS Delivery On DND</b></li>
                                    <li>14 Paisa Per SMS</li>
                                    <li>Quantity: 1 Lac</li>
                                    <li>Free API &amp; 100% SMS Deliver</li>
                                    <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                                </ul>
                                <div class=" center homebutton">
                                    <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>

                                </div>

                            </div>
                            <div className="slider_price">
                                <h3>Unlimited</h3>
                                <ul>
                                    <li><b>2999</b></li>
                                    <li>Unlimited Time</li>
                                    <li><b>Sender Id Based</b></li>
                                    <li><b>SMS Delivery On DND</b></li>
                                    <li>14 Paisa Per SMS</li>
                                    <li><li>Quantity: 1 Lac</li></li>
                                    <li>Free API &amp; 100% SMS Deliver</li>
                                    <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                                </ul>
                                <div class=" center homebutton">
                                    <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                                </div>
                            </div>
                            <div className="slider_price">
                                <h3>Basic</h3>
                                <ul>
                                    <li><b>399</b></li>
                                    <li>Unlimited Time</li>
                                    <li><b>Sender Id Based</b></li>
                                    <li><b>SMS Delivery On DND</b></li>
                                    <li>14 Paisa Per SMS</li>
                                    <li><li>Quantity: 1 Lac</li></li>
                                    <li>Free API &amp; 100% SMS Deliver</li>
                                    <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                                </ul>
                                <div class=" center homebutton">
                                    <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                                </div>
                            </div>

                            <div className="slider_price">
                                <h3>Premium Plan</h3>
                                <ul>
                                    <li><b>1100</b></li>
                                    <li>Unlimited Time</li>
                                    <li><b>Sender Id Based</b></li>
                                    <li><b>SMS Delivery On DND</b></li>
                                    <li>14 Paisa Per SMS</li>
                                    <li><li>Quantity: 1 Lac</li></li>
                                    <li>Free API &amp; 100% SMS Deliver</li>
                                    <li>Free Excel Plugin to send SMS Directly Through Excel</li>
                                </ul>
                                <div class=" center homebutton">
                                    <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
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
                            <AccordionItem header="What is a Toll Free Number?">
                                <p>Toll Free Number is a cost calling number provided by businesses or start-ups to their customers for interacting with them. When customers call on a toll free number, they do not have to pay any charges for the same. Businesses or the toll free number owners will have to pay for both incoming and outgoing calls. Most toll free numbers in India start from 1800 and one can dial them from any place in India without paying any charges. Every business that deals with customers must have a toll free number service to make it easier for them to connect and interact.</p> <br />
                                <p>Webtechage Private Limited offers toll free number services for start-ups, SMEs and enterprises to help them boost their customer’s experience. We have both basic and customised toll free numbers plans to fulfil the business needs.</p>
                            </AccordionItem>
                            <AccordionItem header="What makes Webtechage Private Limited toll free number services better than other companies?">
                                Webtech Solution is one of the best Indian toll free number providers. It makes toll free number services better and more beneficial than other companies in different ways, like:
                                <ul>
                                    <li><b>Cloud-Based Toll Free Number System</b></li><br />
                                    <li>With the help of a cloud-based toll free number, businesses can not only utilize this number benefit for customer service. But they can also use it for promotional and marketing campaigns, as tracking the call sources and doing surveys using cloud-based technology is easier than other ways.</li>
                                    <li><b>Superior Call Quality</b></li><br />
                                    <li>With Webtechage Private Limited, your customers and clients will get amazing call quality without worrying about call drops or voice lagging problems. Agents will be able to have a smooth and precise interaction with the customers without any problem.</li>
                                    <li><b>Get technical support from experts</b></li><br />
                                    <li>At Webtechage Private Limited, we have a team of experts, who are always ready to handle all sorts of technical queries and issues with the toll free number system. From assisting with the installation of the toll free number system to integrating API they will assist you whenever required.</li>
                                    <li><b>Affordable toll free number services</b></li><br />
                                    <li>We offer both basic and customised plans for toll free number services. Be it a start-up or an enterprise, our team will offer budget-friendly customisable plans by looking into your requirements.</li>
                                    <li><b>Self-Care Portal Available</b></li><br />
                                    <li>With the help of the self-care portal it is easier for customer or clients to route their calls to the department from which they need assistance. To make it better, we also offer an IVR System along with a toll free number.</li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem header="How Toll Free Number services can benefit our business?">
                                <ul>
                                    <li>Toll Free Number helps in improving interaction with clients and customers by offering a better cloud-based channel to communicate.</li><br />
                                    <li>Businesses can utilize a single toll free number for multiple parallel calls by getting business number extensions for your workplace.</li><br />
                                    <li>SMEs or start-ups can build or improve brand identity by associating a toll free number feature with their business. </li><br />
                                    <li>Businesses can easily track the return on investment on marketing campaigns by using toll free numbers for the campaigns. It helps in tracking every call and evaluating the success of the marketing campaigns.</li><br />
                                    <li>By using toll free numbers it is possible to increase call volume and attract more customers which can lead to an increase in sales.</li><br />
                                    <li>Businesses and organizations can get more customer satisfaction by enhancing the overall experience of the customers. A toll free number allows them to call free of cost and get all their queries resolved in less time.
                                    </li><br />
                                </ul>
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

            export default TollFreeIVR