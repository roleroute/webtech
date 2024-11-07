
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



const TollIVR = () => {

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

            <div className="blog-banner New-banner">
                <div className="blog-inner-card">
                    <h1>India’s No. 1</h1>
                    <h2>Best IVR service provider in India </h2>
                    <p>Enhance your caller experience with our economical, efficient and easy-to-use IVR solution.|Generate More Leads with IVR Solution|Manage Large Call Volumes
                    </p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
               <MyForm/>

            </div>
            {/* Voice Section */}
            <div className="Voice-box Digital-box">
                <h1>IVR SERVICE</h1>
                <p>We Are The Best IVR And Toll Free Service Provider</p>
                <div className="voice-outer">
                    <div className="Voice_services Voice-img" >
                        <img src="https://webtechsolution.co/assets1//img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Voice_services Digital_service OwnVoice IVRToll">
                        <h2>Choose Best Plan As Per Your Need</h2>
                        <p> IVR Is A Technology Which Allows A Computer To Interact With Peoples Through The Use Of DTMF Tones And Voice Input By A Keypad. IVR Allows Customers To Interact With A Company’s Host System By Speech Recognition Or A Telephone Keypad In Telecommunications. IVR Systems Can Respond With Dynamically Generated Or Pre-Recorded Audio To Further Users On How To Proceed. These Systems Are More Intelligent Than Predictive Dialer Systems. It Can Be Used For Banking Payments And Services, Retail Orders, Mobile Purchases, Utilities, Weather Conditions, And Travel Information.</p>
                        <p>IVR systems are used for outbound calling and deployed in the network are sized to handle large call volumes. The main purpose of an IVR is to take input, process it, and return a result of an automated attendant to route calls. You can configure your IVR system in a way that the caller can leave a recorded message or they can opt for a callback.</p>

                    </div>
                </div>
            </div>
            {/*IVR*/}
            <div className="IVR OwnIVR">
                <h1>increase Your Bussiness</h1>
                <p>Many Bussiness owners using IVR Service find that the time saving benefits frees then up to focus on what really matter-the growth of their Bussiness</p>
                <button onClick={toggleModalVisibility}> Contact with us </button>
            </div>
            {/*IVR Service*/}
            <div className="IVR2-card">
                <h1>Benefits for Using IVR Services</h1>
                <p>Here is the List of some Benifits of using IVR ServicesHere is the List of some Benifits of using IVR Services</p>
                <div className="IVR-inner-card">

                    <div className="IVR-inner-card2">
                    <img src="https://img.icons8.com/ios-filled/54/000000/call-male.png" alt="" />
                    <div class="icon-text">
                      <h5 class="mb-2">
                        Complex Call Handling:</h5>
                      <p>IVR redirects routine calls to frequently asked questions and allows callers to use IVR as a free self-service service to handle complex calls and questions across multiple channels. 
                      </p>
                    </div>
                    </div>

                    <div className="IVR-inner-card2">
                    <img src="https://img.icons8.com/pastel-glyph/54/000000/website-analytics--v2.png" alt="" />
                    <div class="icon-text">
                      <h5 class="mb-2">
                      Access Your Analytics:</h5>
                      <p>Software-based solutions like IVR also provide you with the ability to track your data and metrics, covering everything from CSAT (Customer Satisfaction) to Call Abandonment Rate and Service Level.

 
                      </p>
                    </div>

                    </div>
                </div>

                <div className="IVR-inner-card">

                    <div className="IVR-inner-card2">
                    <img src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/54/000000/external-efficiency-digital-globalization-parzival-1997-detailed-outline-parzival-1997.png" alt="" />
                    <div class="icon-text">
                      <h5 class="mb-2">
                      Improved Customer Experience & Efficiency:</h5>
                      <p>When your IVR is reliable, easy to use, and effective, customers never have to worry about being routed to the wrong department or ending up with an agent who can’t solve their problem.  
                      </p>
                    </div>
                    </div>

                    <div className="IVR-inner-card2">
                    <img src="https://img.icons8.com/external-outline-geotatah/54/000000/external-need-lean-startup-outline-geotatah.png" alt="" />
                       
                    <div class="icon-text">
                      <h5 class="mb-2">
                      Meet Customers’ Real Needs:</h5>
                      <p>Modern IVR systems can do more than direct callers to “press 1 for customer service.” IVR should allow customers to find the resources they’re looking for, quickly and with ease. 
                      </p>
                    </div>
                    </div>
                </div>

                
                <div className="IVR-inner-card">

                    <div className="IVR-inner-card2">                 
                 <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/54/000000/external-manage-leader-and-teamwork-xnimrodx-lineal-xnimrodx.png" alt="" />
                 <div class="icon-text">
                      <h5 class="mb-2">
                      Scalable & Easy to Manage
                      :</h5>
                      <p>IVR-enabled contact centers are easily scalable, independent of the physical constraints of traditional call centers. You don’t even have to be a developer to get started! 
                      </p>
                    </div>
                    </div>

                    <div className="IVR-inner-card2">
                    <img src="https://img.icons8.com/ios-filled/54/000000/online-support.png" alt="" />
                    <div class="icon-text">
                      <h5>
                      Supports and Improves Lead Conversion
                      :</h5>
                      <p>Recent advancements in IVR technology have made it possible to use this tool for sales and lead generation. IVR systems, depending on the provider. </p>
                    </div>
                    </div>
                </div>
            </div>
            {/*IVR Special Fetures*/}
            <div className="IVR-Special-Fetures">
                <h1>IVR SPECIAL FEATURE</h1>
                <h2>Check our Services</h2>
                <p>Make the most of your bulk SMS marketing, customer engagement & retention campaigns with our award-winning features.</p>
               <div className="Special-inner-card">
                <div className="Special-inner-card2">
                <img src="https://img.icons8.com/ios-filled/80/000000/commercial-development-management.png" alt=""/>
                <h1>Customized Messages & Prompts</h1>
                <p>Record a customized greeting that best represents your company and record a message that takes the caller one-step closer to having his questions answered.</p>
                </div>
                <div className="Special-inner-card2">
                    <img src="https://img.icons8.com/ios-filled/80/000000/youtube-music.png" alt=""/>
                    <h1>Automated Customer Problem Resolution
                    </h1>
                    <p>Help customers solve their own problems by obtaining specific information from them about the problem and then guiding them through the steps to resolve</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/80/000000/external-headphone-podcast-xnimrodx-lineal-color-xnimrodx-2.png" alt=""/>
                        <h1>Route Callers to the Appropriate Department</h1>
                        <p>With IVR’s speech ‘receptionist’, you can route callers to the proper team or department that helps them meet their needs.</p>
                    
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios/80/000000/circled-menu.png" alt=""/>
                        <h1>Dynamic Menu Options</h1>
                        <p>If a customer problem goes beyond the dynamic menu, the IVR system guides the caller to the relevant agencies that are available.</p>
                    
                    </div>

               </div>
               <div className="Special-inner-card">
                <div className="Special-inner-card2">
                <img src="https://img.icons8.com/ios/80/000000/load-resume-template.png" alt=""/>
                <h1>Pre-built Templates</h1>
                <p>Customize IVR’s pre-built templates to deploy sophisticated call flows that meet your needs & ensure the right caller is directed to the right agent.</p>
                </div>
                <div className="Special-inner-card2">
                    <img src="https://img.icons8.com/ios/80/000000/hourglass-sand-bottom--v1.png" alt=""/>
                    <h1>Reduced Call Times</h1>
                    <p>Collecting important call information before connecting the caller to the agent dramatically cuts down on call handle time. In fact, we guarantee a minimum of 60 seconds!</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios-filled/80/000000/voicemail.png" alt=""/>
                        <h1>Voice Recognition Ability</h1>
                        <p>Integrating computer telephony technology with IVR software improves the flow of calls and reduces waiting times, resulting in higher overall customer satisfaction.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios/80/000000/artificial-intelligence.png" alt=""/>
                        <h1>AI-driven Voice Response </h1>
                        <p>Interactive voice response enables companies to interact with potential customers and customers using touch sounds and keyboards using DTMF (dual-tone, multi-frequency speaking language)</p>
                    
                    </div>

               </div>

                 <div className="Special-inner-card">
                <div className="Special-inner-card2">
                    <img src="https://img.icons8.com/ios/80/000000/error--v1.png" alt=""/>
                    <h1>It’s error-free</h1>
                    <p>If you have a receptionist answering your calls, there’s a good chance that in the hundreds of calls received daily, a couple of them will wind up in the wrong place. With an IVR auto attendant, the customer is responsible for where they are going.</p>

                </div>
                <div className="Special-inner-card2">
                    <img src="https://img.icons8.com/ios-filled/80/000000/missed-call.png" alt=""/>
                    <h1>Missed Call Numbers and Dual VMNs</h1>
                    <p>Missed call numbers and Dual VMNs allow you to open an easy, cost-effective 2-way communication channel with your customers via a simple missed call or SMS.</p>
                    </div>
                    <div className="Special-inner-card2">
                    <img src="https://img.icons8.com/external-good-lines-kalash/80/000000/external-response-seo-and-web-development-good-lines-kalash.png" alt=""/>
                    <h1>Reduces Response Time</h1>
                    <p>Ordered your favorite food and waited for a long time for it to deliver? Well, as a consumer, there’s a strong urge to get your issues resolved for the service you requested by calling the company’s helpline or customer support number.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios/80/000000/do-not-disturb.png" alt=""/>
                        <h1>Build Opt-in List with myDND Manager</h1>
                        <p>Webtechage myDND Manager builds and updates your opt-in customer list based on explicit customer requests. Customers can subscribe or unsubscribe anytime by just sending a simple SMS to your inbox</p>
                    
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
            {/*IVR*/}
            <div className="IVR OwnIVR">
                <h1>Start Converting Lead into Customer Today</h1>
                <h1> Call: 70656 80680</h1>
                <button onClick={toggleModalVisibility}> Contact with us </button>
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

export default TollIVR