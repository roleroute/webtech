
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Card3 from '../component/Card3';
import { BsClipboardData } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { BsBullseye } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RenderForm from '../component/RenderForm';
import MyForm from '../component/MyForm';



const renderForm = () => (
    <RenderForm />
);



const OwnVoiceCall = () => {

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

            <div className="blog-banner">
                <div className="blog-inner-card">
                    <h1>India’s No. 1</h1>
                    <h2>Bulk Voice Call Service By Own Number</h2>
                    <p>Voice calls have a very important role in all areas including business, education, medication, eCommerce, politics, etc.
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
                <h1>Voice Call - By Own Number</h1>
                <p>We are The Best Voice Call Solution Provider in Noida

                </p>
                <div className="voice-outer">
                    <div className="Voice_services Voice-img" >
                        <img src="https://webtechsolution.co/assets1//img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Voice_services Digital_service OwnVoice">
                        <h2>By voice call you can promote your own business by sending recorded audio directly to any audience.
                        </h2>
                        <p> A voice call is a recorded voice message that will play when the phone is answered. Voice SMS allows the users to send voice messages in the form of audio files. We are a digital marketing Service supplier giving Bulk Voice Call services in India and internationally at the lowest rates. We offer a web-based Bulk Voice Call Service application for marketing that incorporates you to send, form, track, and find the response from our Bulk Voice Call service in mp3 formats. Bulk Voice Call Service is a machine-driven method. So, no operators have required to method the call.</p>
                        <h2>Voice Call Rules & Regulations:-</h2>
                        <ul>
                            <li>< IoCheckmarkOutline /><b> Campaign Time: </b>7:00 AM To 08:00 PM</li>
                            <li>< IoCheckmarkOutline /><b>Campaign Days:</b>Monday to Sunday</li>
                            <li>< IoCheckmarkOutline /><b> Voice Call Clip:</b>Less than 30seconds in any language & MP3 File</li>
                            <li>< IoCheckmarkOutline />You can also Download Delivery Reports for all the campaign hosted through your account within 24 hours</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1 className='we-know'>THE BENEFITS OF BULK VOICE CALL CHOOSING BY OWN NUMBER</h1>
            <p className='Ifyouare'>SMS Gateway Hub Offers Marketing SMS Services, Can be Used by any company or individual to promote or advertise about a product or brand or services Some of the Features are listed below </p>


            <div className="Exclusive OwnVoiceCard">
                <Card3 icons={<BsClipboardData />} title={"Increased Response:"} dis={"90% of SMS are interpreted by clients, it has increased response rate than e-mail and different mobile marketing tactics."} />
                <Card3 icons={<BsCardChecklist />} title={"Better customer experience"} dis={"Bulk SMS can send its campaigns to users to notify them of exclusive offers, emergency info, updates, reminders for a better customer experience."} />
                <Card3 icons={<BsPeopleFill />} title={"Increased Efficiency"} dis={"A short code was used to encourage young people in the community to sign up for their nearest Street Soccer event. Increased efficiency."} />
                <Card3 icons={<MdOutlineMessage />} title={"Reminders"} dis={"This guide covers the basics on how to send bulk SMS appointment reminders to customers and leads using the Sakari bulk messaging service."} />
                <Card3 icons={<IoCodeSlash />} title={"Promotions"} dis={"Promotional SMS is used for Sending offers, advertising SMSs, Business promotions to their customers."} />
                <Card3 icons={< BsBullseye />} title={"Notifications"} dis={"Bulk SMS services help send notifications, alerts, reminders and other types of communication across wide geographical areas."} />
            </div>
            {/*IVR*/}
            <div className="IVR OwnIVR">
                <h1>increase Your Bussiness</h1>
                <p>Many Bussiness owners using Voice Call find that the time saving benefits frees then up to focus on what really matter-the growth of their Bussiness</p>
                <button onClick={toggleModalVisibility}> Contact with us </button>
            </div>
            {/*OwnNumber*/}
            <div className="OwnNumber-Webtech">
                <h1>WHY TAKE OWN NUMBER BULK VOICE CALL SERVICE FROM WEBTECHAGE PRIVATE LIMITED?</h1>
                <p>Businesses require Own Number to make Bulk Voice Calls for offering customer service, marketing & promotion, and for several other business operations. Webtech Solution makes sure that they can provide the best Own Number service to their clients making it possible for them to carry out several functions. That is why even big MNCs are seeking help from Webtech Solution only when it comes to taking Bulk Voice Call Service using Own Number.</p>
                <div className="OwnNumber-card">
                    <div className="OwnNumber-card2">
                        <h2>Easy Set-up and Installation</h2>
                        <p>Webtechage offers a seamless set-up and installation for using Bulk Voice Call Service. With the help of our team, it is now possible to get the Own Number service installed within 24 hours only. Businesses need not wait for many days to start using the Bulk Voice Call Service.</p>

                    </div>
                    <div className="OwnNumber-card2">
                        <h2>99.9% Uptime Guaranteed</h2>
                        <p>We offer reliable Bulk Voice Call service along with 24 hours technical and customer support. Our team always ensures that they provide a quick resolution to all your queries, to maintain the guaranteed uptime. With 99.9% uptime, businesses are more likely to earn more profit by utilizing Bulk Voice Call service whenever required.</p>

                        </div>
                        <div className="OwnNumber-card2">
                        <h2>Extensive Features</h2>
                        <p>Bulk Voice Call service is required for different purposes and that is why it requires a variety of features. With Webtechage, one can get multiple Bulk Voice Call features using Own Number under one roof. Businesses can make use of these add-on features by logging in to the Own Number Bulk Voice Call Portal.</p>
                        </div>
                </div>
                <div className="OwnNumber-card">
                    <div className="OwnNumber-card2">
                        <h2>Excellent Call Quality</h2>
                        <p>Webtechage  makes use of a reliable network and robust gateway which allows one to make Bulk Voice Calls without any glitches. We ensure that the call quality of the Bulk Voice Calls delivered to users’ phone numbers is excellent. All the Bulk Voice Calls get delivered in stipulated time and we also provide a delivery report of each call.</p>
                        

                    </div>
                    <div className="OwnNumber-card2">
                        <h2>Customised Plans</h2>
                        <p>At Webtechage, we understand that different businesses may have different Bulk Voice Call requirements at different budgets. To make sure that all businesses can take the advantage of Bulk Voice Call Service, we have both basic and customised Bulk Voice Call Plans. One can take assistance from our experts to get a customized Own Number Voice Call Plan.</p>

                        </div>
                        <div className="OwnNumber-card2">
                        <h2>Two-way connectivity</h2>
                        <p>By offering Bulk Voice Call Service using Own Number, Webtechage provides businesses with two-way connectivity with their customers. It means businesses can not only send Bulk Voice Calls to customers’ phone numbers but can also receive calls or texts or feedback from customers on the same number.</p>

                        </div>
                </div>
                <div className="OwnNumber-card">
                    <div className="OwnNumber-card2">
                        <h2>Reasonable Pricing</h2>
                        <p>To make it easier for businesses to conduct marketing campaigns and reach their customers without spending a huge amount, Webtech Solution is offering Bulk Voice Call services at an affordable price. One only needs to pay for the voice calls which were successfully delivered to the recipient’s number.</p>

                    </div>
                    <div className="OwnNumber-card2">
                        <h2>24 by 7 Customer Support</h2>
                        <p>If you have any doubts about our Bulk Voice Call services or you are facing any problem in using Own Number for Bulk Voice Call, you can connect with our customer support 24 by 7. We also offer technical support if you are unable to access the Bulk Voice Call Portal or are facing other technical issues.</p>
                        </div>
                        
                </div>
            </div>
            {/*Price*/}
            <div className="Price">
                <h1>PRICE</h1>
                <p>Offering a complete spectrum of services</p>


                <div>

                    <Slider {...settings}>
                        <div className="slider_price Voice_Price">
                            <h3>Standard Plan</h3>
                            
                            <ul>
                                <li><b>75000</b></li>
                                <li>Transational Voice Call</li>
                                <li><b>30Sec Voice Call</b></li>
                                <li><b>25 Paisa Per Call</b></li>
                                <li>Quantity: 3 Lac</li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>

                            </div>

                        </div>
                        <div className="slider_price Voice_Price">
                            <h3>Unlimited Plan</h3>
                           
                            <ul>
                                <li><b>110000</b></li>
                                <li>Transational Voice Call</li>
                                <li><b>30 Sec Voice Call</b></li>
                                <li><b>22 Paisa Par Call</b></li>
                                <li><li>Quantity: 5 Lac</li></li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                            </div>
                        </div>
                        <div className="slider_price Voice_Price">
                            <h3>Basic Plan</h3>
                            
                            <ul>
                                <li><b>30000</b></li>
                                <li>Transational Voice Call</li>
                                <li><b>30 Sec Voice Call</b></li>
                                <li><b>30 Paisa Per Call</b></li>
                                <li><li>Quantity: 1 Lac</li></li> 
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                            </div>
                        </div>

                        <div className="slider_price Voice_Price">
                            <h3>Premium Plan</h3>
                            
                            <ul>
                                <li><b>200000</b></li>
                                <li>Transational Voice Call</li>
                                <li><b>30 Sec Voice Call</b></li>
                                <li><b>20 Paisa Per Call</b></li>
                                <li><li>Quantity: 10 Lac</li></li>
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
              {/*IVR*/}
              <div className="IVR OwnIVR">
                <h1>Don't Wait! Boost Your Business With Us. Get Started Now.</h1>
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

        </>
    )
}

export default OwnVoiceCall
