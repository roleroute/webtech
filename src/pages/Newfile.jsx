
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Card3 from '../component/Card3'
import { CiCalendar } from "react-icons/ci";
import { BsCardChecklist } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiReceipt } from "react-icons/bi";
import { BiCubeAlt } from "react-icons/bi";
import { ImImages } from "react-icons/im";
import { BiShield } from "react-icons/bi";
import MyForm from '../component/MyForm';
import RenderForm from '../component/RenderForm';




const renderForm = () => <RenderForm />;



const Newfile = () => {

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
                    <h2>Server number </h2>
                    <p>Record your Voice | Select Audience | Voice Call Delivered Record, schedule, and blast voice messages in bulk to the target group with automated voice service. Customize your audio for live or voicemail messages.</p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
                <MyForm/>

            </div>
            {/* Voice Section */}
            <div className="Voice-box Digital-box">
                <h1>VOICE CALL BY SERVER NUMBER</h1>
                <p>Record your Voice | Select Audience | Voice Call Delivered</p>
                <div className="voice-outer">
                    <div className="Voice_services Voice-img" >
                        <img src="https://webtechsolution.co/assets1//img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Voice_services Digital_service OwnVoice">
                        <h2>The simplest way to expand your business! Try Voice Call SMS service from Login Network in 30 seconds.</h2>
                        <p> A web-based automated voice messaging application, the voice SMS service allows you to connect with your customers in a more personalized way with the help of voice messages. Get the demo and drive up your customer engagement process.</p>
                        <p>Webtechage Private Limited has been serving the best Voice Call Services to a wide array of businesses for many years. It has made it possible for businesses to utilize different types of Bulk Voice Call Solutions including Bulk Voice Calls using Own Number. By allowing businesses to use Own Number for bulk voice call service along with multiple features.</p>
                        <h2>FEATURES:-</h2>
                        <ul>
                            <li>< IoCheckmarkOutline />In the server number we can create API integration in documents as website or application use.</li>
                            <li>< IoCheckmarkOutline />Here we can get the extension from clients as press 1 and press 2.</li>
                            <li>< IoCheckmarkOutline />It's only counting the answered calls.</li>
                            <li>< IoCheckmarkOutline />It has 100% genuine delivery</li>
                            <li>< IoCheckmarkOutline />You will not get the call back from the customers.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1 className='we-know'>The Benefits of choosing your Own Phone Number</h1>
            <p className='Ifyouare'>it has become one of the leading Bulk Voice Call Service Providers in India. Businesses no longer need to invest in buying multiple numbers to carry out different voice call services for marketing, promotion, and delivery of important information. By using Own Number only businesses can reach multiple customers at the same time for different purposes.</p>
            <p className='Ifyouare'>We Offers Marketing SMS Services solution for promote or advertise your product or brand or services Some of the Features are listed below.</p>

            <div className="Exclusive OwnVoiceCard">
                <Card3 icons={<CiCalendar />} title={"Increased Response:"} dis={"To make a brand out of your organization, we’ll go with you. We branding your ideas and innovations."} />
                <Card3 icons={<BsCardChecklist />} title={"Better customer experience"} dis={"Various stunning services provided by our company for the better growth of your business brand along with us."} />
                <Card3 icons={<IoAlarmOutline />} title={"Increased Efficiency"} dis={"Think of more than a digital agency. You can connect to know more about the company. Our company is here with You."} />
                <Card3 icons={<MdOutlineMessage />} title={"Reminders"} dis={"Expand Your Business Social marketing is a strategy that is used by organizations these days to contact a wider audience."} />
                <Card3 icons={<BsCollection />} title={"Promotions"} dis={"Expand Your Business Social marketing is a strategy that is used by organizations these days to contact a wider audience."} />
                <Card3 icons={<BsCalendarCheck />} title={"Notifications"} dis={"Expand Your Business Social marketing is a strategy that is used by organizations these days to contact a wider audience."} />
            </div>
            {/*IVR*/}
            <div className="IVR OwnIVR">
                <h1>increase Your Bussiness</h1>
                <p>Many Bussiness owners using Voice Call find that the time saving benefits frees then up to focus on what really matter-the growth of their Bussiness</p>
                <button onClick={toggleModalVisibility}> Contact with us </button>
            </div>
            {/*Webtechage best for you*/}
            <div className="Wetechage-best">
                <h1>WHY WEBTECHAGE PRIVATE Limited IS BEST FOR YOU?</h1>
                <p>At Webtechage, we let start-ups, small businesses, e-commerce industries, and MNCs reach their customers or interact with them using the Own Number for Bulk Voice Call Service. It not only helps them to connect with their audience but also gives them a platform for two-way communication. As customers can also reach out to these businesses by calling on that number. Bulk Voice Call Service using Own Number is quite fruitful for marketing campaigns and for conducting surveys. As this is not a server or internet generated number, so the chances of getting a response are higher when sending Bulk Voice Calls using Own Number.

                </p>
                <div className="Webtechage-best-card">
                    <div className="Webtechage-best-card2">
                   
                        <h1 className="Webtech-H"><BiReceipt/> Reasonable Pricing</h1>
                        <p className="Webtech-P">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>

                    </div>
                    <div className="Webtechage-best-card2">
                          
                        <h1 className="Webtech-H"><BiCubeAlt /> 100% Delivery Rate</h1>
                        <p className="Webtech-P">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>

                    </div>
                    <div className="Webtechage-best-card2">
                        
                        <h1 className="Webtech-H">  <BiCubeAlt />99.9% Uptime guarented</h1>
                        <p className="Webtech-P">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>

                    </div>
                </div>
                <div className="Webtechage-best-card">
                    <div className="Webtechage-best-card2">
                          
                        <h1 className="Webtech-H"><BiCubeAlt />Advance API Integration</h1>
                        <p className="Webtech-P">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>

                    </div>
                    <div className="Webtechage-best-card2">
                     
                        <h1 className="Webtech-H"> <ImImages />24*7 Customer Support </h1>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>

                    </div>
                    <div className="Webtechage-best-card2">
                  
                 <h1 className="Webtech-H"><BiShield />Honest Truth worthy</h1>
                 <p className="Webtech-P">Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>

                    </div>
                </div>
                <div className="Webtechage-best-card">
                    <div className="Webtechage-best-card2">
                    
                        <h1 className="Webtech-H"><BiShield />Stability</h1>
                        <p className="Webtech-P">Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>

                    </div>
                    <div className="Webtechage-best-card2">
                    
                        <h1 className="Webtech-H"><BiShield />Security</h1>
                        <p className="Webtech-P">Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>

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
                                <li><b>18000</b></li>
                                <li>Server Number & Extension</li>
                                <li><b>30 Sec Voice Call</b></li>
                                <li><b>18 Paisa Per Call</b></li>
                                <li>Quantity: 3 Lac</li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>

                            </div>

                        </div>
                        <div className="slider_price Voice_Price">
                            <h3>Unlimited Plan</h3>

                            <ul>
                                <li><b>16000</b></li>
                                <li>Server Number & Extension</li>
                                <li><b>30 Sec Voice Call</b></li>
                                <li><b>16 Paisa Par Call</b></li>
                                <li><li>Quantity: 5 Lac</li></li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                            </div>
                        </div>
                        <div className="slider_price Voice_Price">
                            <h3>Basic Plan</h3>

                            <ul>
                                <li><b>20000</b></li>
                                <li>Server Number & Extension</li>
                                <li><b>30 Sec Voice Call</b></li>
                                <li><b>20 Paisa Per Call</b></li>
                                <li><li>Quantity: 1 Lac</li></li>
                            </ul>
                            <div class=" center homebutton">
                                <a href="#" class="btn solid-btn btn-block center hh">Pay Now</a>
                            </div>
                        </div>

                        <div className="slider_price Voice_Price">
                            <h3>Premium Plan</h3>

                            <ul>
                                <li><b>15000</b></li>
                                <li>Server Number & Extension</li>
                                <li><b>30 Sec Voice Call</b></li>
                                <li><b>15 Paisa Per Call</b></li>
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
                    <input type="text" id="name" name="name" placeholder='Enter your name' />
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

export default Newfile
