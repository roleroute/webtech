
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RiGpsFill } from "react-icons/ri";
import { RiBodyScanFill } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { PiStorefrontLight } from "react-icons/pi";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyForm from '../component/MyForm';
import RenderForm from '../component/RenderForm';





const renderForm = () => <RenderForm />;



const PPCService = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
        customPaging: i => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    border: "2px solid green",
                    borderRadius: "50%",
                    background: i === 0 ? "green" : "transparent",
                }}
            ></div>
        ),
        dotsClass: "slick-dots custom-dots", // Custom class for dots
    };
    const slidesData = [
        {
            icon: "https://img.icons8.com/ios/64/000000/pinterest--v1.png",
            title: "Pinterest advertising",
            description: "Consider the impact of a billion users on one platform. One website where people gather, speak, interact,share and connect with each other."
        },
        {
            icon: "https://img.icons8.com/ios/64/000000/facebook-new.png",
            title: "Facebook advertising",
            description: "Consider the impact of a billion users on one platform. One website where people gather, speak, interact,share and connect with each other"
        },
        {
            icon: "https://img.icons8.com/ios/64/000000/instagram-new--v1.png",
            title: "Instagram advertising",
            description: "Consider the impact of a billion users on one platform. One website where people gather, speak, interact,share and connect with each other."
        },
        {
            icon: "https://img.icons8.com/ios/64/000000/twitter--v1.png",
            title: "Twitter advertising",
            description: "Consider the impact of a billion users on one platform. One website where people gather, speak, interact,share and connect with each other."
        },         
        {
            icon: "https://img.icons8.com/ios/64/000000/linkedin.png",
            title: "Linkdine advertising",
            description: "Consider the impact of a billion users on one platform. One website where people gather, speak, interact,share and connect with each other.",
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
                    <h1>India’s No. 1</h1>
                    <h2>Pay Per Click Marketing</h2>
                    <p>Get a professional toll free number and give your customers the privilege of calling your business for free</p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
               <MyForm/>

            </div>
            {/* Voice Section */}
            <div className="Voice-box Digital-box About-us">
                <h1>PPC SERVICES</h1>
                <p>Contact Top Leading Pay per Click Company in India to Increase Growth of Your Business</p>
                <div className="voice-outer">
                    <div className="Voice_services Voice-img Pay-img" >
                        <img src="https://webtechsolution.co/assets1//img/service/ppc287862.png" alt="" />
                    </div>
                    <div className="Voice_services Digital_service About-service Pay-service">

                        <br /><br /><br /><p>Pay per Click marketing is a powerful tool that provides measurable results. It takes knowledge, insight, and skill to run a successful marketing campaign. Customers can display the ads on Google and the advertising network. We use an array of techniques to help you and get the maximum value from paid search. Pay per Click advertising is a form of marketing where advertisers can pay to display their advertisements on search engines. So, contact our experts to get the best Pay per Click services in India.</p>
                        <h2>How Can Our Experts at Pay per Click Company Help You to Grow Your Business?</h2><br />
                        <p>Nowadays, all the leading search engines have their own pay-per-click services which help you to promote your business faster. We are one of the best Leading Pay per Click Company in India which ensures to provide the best solution for you when you need fast results and have a limited time. There are some top pay-per-click services which includes Yahoo’s Search Marketing, Microsoft’s Bing Ads, and Google’s Ad Words. All these pay-per-click advertising services run with a simple concept and you have to pay only when the user clicks on your link. You can create an ad using your business keywords as an advertiser. Your ad appears next to the search results in sponsored links when a user searches using any of your keywords.</p>
                    </div>
                </div>
            </div>
            <div className="Mission">
                <div className="Aboutmission">
                    <h1>Benefits of Pay per Click Advertising:-</h1><br />
                    <p>Generally, people are not going to find the website because it is running. There is a constant need to reach customers. There are several benefits that come with Pay per Click Advertising mentioned below:</p><br />
                    <p><b>Targeting the Audiences:- </b> Pay per Click advertising allow you to choose the location, time, and websites where your ad will appear and gives you the ability to appeal to a specific audience.</p><br />
                    <p><b>Independent Algorithms:-</b>There are constant changes to search engine algorithms which make Google pretty. Pay per Click Advertising takes away the worry of high-tech and fast-paced changes</p><br />
                    <p><b>Develop Marketing Strategies:-</b> Pay per Click advertising gives you the ability to test out the new marketing strategies and will provide you the freedom to change up marketing strategies. We offer advertising programs dedicated to the success of our clients</p>
                </div>

                <div className="Aboutmission Aboutimg">
                    <img src="https://webtechsolution.co/assets1//img/service/ppc496028.png " alt="" />
                </div>
            </div>
            <div className="Values">
                <div className="Values-SMS Valuesimg">
                    <img src="https://webtechsolution.co/assets1//img/service/ppc287862.png " alt="" />

                </div>
                <div className="Values-SMS">
                    <h1> What Do We Cover in Our Social Media Marketing Solutions?</h1>
                    <p>Our professional Pay per Click Management Services will make your money count. Google was the pioneer to introduce the concept of Pay per Click Advertising to business over the web. Google named it “Google Ad words” and it has changed the face of internet marketing. Pay per Click services has been a cost-effective and efficient option for businesses to reach out to the target audience. Looking at the Google Ad words popularity and success all the major search engines over the web started to provide Pay per Click Advertising. Pay per Click Services has gained importance because of the fact that you have to pay only for the number of clicks that are made in your advertisement.</p>
                </div>
            </div>
            {/*Our PPC */}
            <div className="Our-PPC">
                <h1>Our PPC (PAY PER CLICK) SETVICES INClUDE:</h1>
                <p>Pay per Click marketing is a powerful tool that provides measurable results. It takes knowledge, insight, and skill to run a successful marketing campaign. Customers can display the ads on Google and the advertising network. We use an array of techniques to help you and get the maximum value from paid search. Pay per Click advertising is a form of marketing where advertisers can pay to display their advertisements on search engines. So, contact our experts to get the best Pay per Click services in India.</p>
                <Tabs>
                    <div className="our-header">
                        <TabList>
                            <Tab><RiGpsFill /> Search Advertising</Tab>
                            <Tab><RiBodyScanFill />Display Advertising</Tab>
                            <Tab><BsSun />Video Advertising</Tab>
                            <Tab><BsShop />Remarketing & Retargetin</Tab>
                            <Tab><PiStorefrontLight />Product Listing Ads</Tab>
                        </TabList>
                    </div>
                    <div className="PPC-Advertising">
                        <TabPanel>
                            <h3>Search Advertising,</h3>
                            <p>Search Advertising or PPC Services is a powerful way of getting in front of people who are searching for the services you are offering. It is the smartest way of appearing in the search results outperforming the competition.In this type, your text Ad appears on the top of the results page that boosts the chances of generating quality leads to your business.</p>
                            <p>When a visitor searches for a particular keyword, your Ad appears and you turn the traffic into customers, that's the power of Search Advertising.It brings in quick impact on the business as it gives a broader reach towards the targeted potential customers. Leverage traffic from the first page of search results to drive targeted leads to your online business.</p>
                        </TabPanel>
                    </div>
                    <div className="PPC-Advertising">
                        <TabPanel>
                            <h3>Display Advertising</h3>
                            <p>A display advertising can quickly generate a lot of traffic to your website by providing contextual value to the visitors. Display Ads brings a much broader platform to showcase your Ad in front of the right people. With the help of these Ads, you can directly reach in front of the customers without waiting for them to find you using a keyword. The whole network of Display Advertising is much dynamic that converts quickly for you.</p><br />
                        </TabPanel>
                    </div>
                    <div className="PPC-Advertising">
                        <TabPanel>
                            <h3>Video Advertising</h3>
                            <p>Video advertising is a marketing strategy that implies using a short and informative video that promotes a product and occurs before, during, or after the main video. It helps tell the story, improve sales volume, create buzz, convey information in a short and interesting manner, and reach a wide audience.</p>
                        </TabPanel>
                    </div>
                    <div className="PPC-Advertising">
                        <TabPanel>
                            <h3>Remarketing & Retargeting</h3>
                            <p>Remarketing and Retargeting are both powerful terms that drive digital marketing. Many people confuse these similar-sounding terms, but they both are different and serve a diverse purpose.Remarketing is usually linked with re-engaging your customers with products or services using a medium of interaction, for example - Emails. Based on visitors' behavior on your website, remarketing could be done on the basis of cart abandonment, upselling, cross-selling, sending product reminders and so more.</p>
                        </TabPanel>
                    </div>
                    <div className="PPC-Advertising">
                        <TabPanel>
                            <h3>Product Listing Ads</h3>
                            <p>PLAs are a powerful way of selling your products through Google Network. These Ads let you convert your products from Google Merchant Center into quick shopping advertisements for items you want to promote. By leveraging Adwords, it lets you optimize your products and sell them in a flawless way. Right from creating a product listing to optimizing marketing campaigns to generating leads reports, we have got you covered with product listing ads.</p>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
            {/*ADVERTISING SERVICES*/}
            <div className="Advestising-Servicers">
                <h1>OTHER SPECIALIZED PAID ADVERTISING SERVICES</h1>
                <p>Offering a complete spectrum of services</p>
                <div className="slider-container slider-container2">
                    <Slider {...settings}>
                        {slidesData.map((slide, index) => (
                            <div key={index} className="card card2 Card3">
                                <img src={slide.icon} alt={slide.title} className="icon icon5" />
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
               {/*Price*/}
          <div className="Price">
        <h1>PPC Services (Pay-Per-Click)</h1>
        <p>
        Manage paid advertising campaigns on Google and social media.
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li><b>Montly Fee</b></li>
                <li>
                 ₹ 7,000
                </li>
                <li>
                  <b>Features</b>
                </li>
                   <li>Google Ads Setup</li>
                    <li>Basic Reporting</li>    
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
                 <b>Monthly Fee</b>
                </li>
                <li>₹ 15,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                 Google+ Facebook Ads
                </li> 
                <li>Monthly Analysis</li>
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
                 <b>Monthly Fee</b>
                </li>
                <li>₹ 25,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                 Full PPC Suite
                </li>
                <li> Ad Copy + Design</li>
                
                
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
            {/* Callback Section */}
            <div className="callback-section">
                <h1>Get enterprise SMS Service For Your Business Today</h1>
                <p>Not Sure about this Servic? Contact to Our Sales Specialist today!</p>
                <button onClick={toggleModalVisibility}>Resquest for Demo!</button>
            </div>
            <div className="IVR-main Development-main ">
                <Accordion>
                    <AccordionItem header="What is PPC Marketing?">
                        PPC or pay-per-click is a type of internet marketing which involves advertisers paying a fee each time one of their ads is clicked. Simply, you only pay for advertising if your ad is actually clicked on. It’s essentially a method of ‘buying’ visits to your site, in addition to driving website visits organically. One of the most popular forms of PPC is search engine advertising, which allows advertisers to pay for ad placement in a search engine’s sponsored links. This works when someone searches for a keyword related to their business offering. For example, if we bid on the keyword ‘Google Shopping Management’ our ad might show up at the top of the Google results page.
                    </AccordionItem>
                </Accordion>
            </div>
            {/*Frequently Asked Questions*/}
            <div className="Frequently_Asked_Questions">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <div className="Frequently-main">
                <Accordion>
            <AccordionItem header="What is SEO?">
              SEO which is known as Search Engine Optimization utilizes some set of practices that helps in enhancing the overall website to improve the traffic on the website. Optimizing the content using different SEO tactics, improves the site’s visibility as well as ranking. SEO may show the result slowly but it is a long term strategy used for achieving success organically.
            </AccordionItem>
            <AccordionItem header="Why do businesses require SEO Services?">


              <li className="Quick"><b>Rank high on SERP</b></li>
              <li>Every business owner wants to see their website ranking high on SERP. To make it possible, one needs to take SEO services. With the help of SEO only it is possible to optimize the website content to make it rank at the top of the search engine results.</li>
              <li className="Quick"><b>Leave a good impact on customers</b></li>
              <li>With the help of SEO you can make your website content readable and consumable. With digitalization, customers have become more aware and prefer to visit those sites only which offer good content. By delivering quality content or by improving the quality of already existing content, you can retain your customers.</li>
              <li className="Quick"><b>Increase Traffic on the website</b></li>
              <li>The better and optimize the content will be, the better will be the reach. All this can be done only with the help of SEO Services. To make your business or blog successful, you require more impressions or views on your website. So, as a business owner, you must take SEO Services for improving website traffic to get more conversions.</li>
              <li className="Quick"><b>Leave your competitors behind</b></li>
              <li>In today’s competitive world, every business owner is using different tactics to become successful. With the help of SEO services, you can improve the content on your website, add to a better user experience, and can get customers organically. This will help you in giving tough competition to your competitors and beating them in the market.</li>
              <li className="Quick"><b>High return on investment</b></li>
              <li>This is tried and tested and many businesses have made a huge profit by integrating SEO services on their website. Though SEO is a slow process and it takes time to get the desired results. But with the help of SEO, it is possible to get a high return on investment.

</li>
            
            
            </AccordionItem>
            <AccordionItem header="What are the SEO plans offered by Webtechage Pvt. Ltd.">
            Our SEO experts have designed a variety of SEO Plans that suits different businesses. From reviewing clients’ websites to knowing their expected results, on-page optimization, content analysis, content marketing, positioning of the website, and many other services are included in our SEO Plans. You can check out all our SEO plans and their pricing on the website. To discuss more these SEO Plans, you can reach out to our SEO experts
            </AccordionItem>
            <AccordionItem header="Does Webtechage Pvt. Ltd. also offer customised SEO Packages?">
            Yes, we do offer customised SEO Packages to help you achieve your required SEO goals. Our SEO team will help you in building a customized SEO Package by reviewing your website, understanding your expectations, and analysing the SEO requirement on your website. The pricing of our customised SEO package varies according to your website’s needs.
            </AccordionItem>
           
          </Accordion>
                </div>
            </div>
            {/*IVR*/}
            <div className="IVR OwnIVR PPCOWN">
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

export default PPCService
