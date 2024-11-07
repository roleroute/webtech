
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
import RenderForm from '../component/RenderForm';
import MyForm from '../component/MyForm';
import Lets from '../component/Lets';
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




const SEO = () => {



    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>

            <div className="blog-banner">
                <div className="blog-inner-card">
                    <h1>India’s No. 1</h1>
                    <h2>Organic search drives more than 50% of all website traffic.</h2>
                    <p>Data shows, SEO if done right results in about 14.6% conversion. This is 8 times higher than traditional marketing. Let’s get started today!</p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
               <MyForm/>

            </div>
            {/* Voice Section */}
            <div className="Voice-box Digital-box SEO-box">
                <h1>SEO Company in India</h1>
                <p>Next Generation SEO Services To Increase organic traffics & Leads

                </p>
                <div className="voice-outer SEO-outer">
                    <div className="Voice_services Voice-img SEO-img" >
                        <img src="https://webtechsolution.co/assets1/img/service/promotional-bulk-sms999628.png" alt="" />
                    </div>
                    <div className="Voice_services Digital_service SEO-service">
                        <h1>Search Engine Optimization</h1>
                        <p>Search Engine Optimization refers to the marketing and optimization activities that enable the website work being done to improve website traffic across major search engines like Bing, Google, and ranking. Search engines rank the websites based on the relevant search phrases and are helpful for clients to achieve a higher ranking in the major search engines.</p>
                        <p>It is defined as a well-optimized website when a website ranks well on a search engine. There are many different techniques that need to be employed to achieve a good ranking website. To achieve a good ranking is not an easy task. Usually, SEO services are too expensive and some companies do not choose to use SEO services. We are one of the best SEO Company in Delhi NCR which provides extremely affordable SEO services. We can provide you with the best and most cost-effective services in Delhi. To occupy the top positions in the search engine ranking, most of the popular search engines constantly change the criteria and the algorithms preventing manipulation of the system. Our SEO Company follows the changing trends and makes sure that they are able to give their customers the best SEO services in Delhi.

                        </p>
                    </div>
                </div>
            </div>


            {/*IVR Special Fetures*/}
            <div className="IVR-Special-Fetures">
                <h1>OUR AFFORDABLE SEO SERVICES IN INDIA</h1>
                <h2>Check our Services</h2>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                <div className="Special-inner-card">
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-message-online-learning-kiranshastry-lineal-kiranshastry-3.png" alt="" />
                        <h1>Global & National SEO</h1>
                        <p>National SEO services from Webtechage Private Limited SEO experts are data-backed strategies to increase organic search visibility, outrank digital competitors

                        </p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/64/000000/external-app-development-seo-and-web-smashingstocks-detailed-outline-smashing-stocks.png" alt="" />
                        <h1>E-commerce SEO</h1>
                        <p>We ensure your online store's success by ranking your ecommerce site high in search results and driving customers for sales and conversions.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/wired/64/000000/shopping-cart-loaded.png" alt="" />
                        <h1>Enterprise SEO</h1>
                        <p>Want to take your business to the next level? We have the tools and skill-set to transform your revenues with actionable data.</p>

                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios/64/000000/microphone.png" alt="" />
                        <h1>Local SEOl</h1>
                        <p>Expand your reach to the local customers and grow your business locally as we place you on high ranks in local search results.</p>

                    </div>

                </div>
                <div className="Special-inner-card">
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/64/000000/external-web-development-web-design-and-development-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png" alt="" />
                        <h1>Small Business SEO</h1>
                        <p>Spread your business nationwide successfully as we help you get high search engine rankings to gain quality leads and sales.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-ivr-medical-technology-wanicon-lineal-wanicon.png" alt="" />
                        <h1>Multilingual SEO</h1>
                        <p>Multilingual SEO is the practice of optimizing content for multiple languages or multiple markets. Multilingual SEO is an important part of the website localization process that helps increase your chance of being found and clicked on the search engine’s results in a foreign target market.</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios/64/000000/statistics.png" alt="" />
                        <h1>YouTube / Video SEO Services</h1>
                        <p>Webtechage Private Limited, our YouTube optimization services help your business (and its channel) earn more views, likes, comments, subscribers, as well as build brand awareness, increase website traffic, and generate online sales and leads.

                        </p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-linector-lineal-linector/64/000000/external-seo-seo-marketing-linector-lineal-linector.png" alt="" />
                        <h1>App Store Optimization / App Store SEO</h1>
                        <p>Your business app can transform your sales & profits. We optimize your business app to rank higher in app store's search results to reach a wide audience.</p>

                    </div>

                </div>

                <div className="Special-inner-card">
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/64/000000/external-app-development-seo-and-web-smashingstocks-detailed-outline-smashing-stocks.png" alt="" />
                        <h1>Online Reputation Management</h1>
                        <p>Online Reputation Management or ORM, as the name suggests, is the process of managing the perceptions…</p>

                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/wired/64/000000/shopping-cart-loaded.png" alt="" />
                        <h1>Google Recovery Services</h1>
                        <p>Looking for a trusted Search Engine Optimization company that can delivers excellent Google Panda Recovery, Penguin Recovery & Reconsideration Requests Services?…</p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/ios/64/000000/statistics.png" alt="" />
                        <h1>Content Marketing</h1>
                        <p>Consider the impact of a billion users on one platform. One website where people gather, speak, interact, share and connect with each other.

                        </p>
                    </div>
                    <div className="Special-inner-card2">
                        <img src="https://img.icons8.com/external-linector-lineal-linector/64/000000/external-seo-seo-marketing-linector-lineal-linector.png" alt="" />
                        <h1>Guest Posting</h1>
                        <p>As an SEO firm with decades of collective experience, we at Techmagnate understand one thing very well – the importance of trust and reputation…</p>

                    </div>

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
                    <AccordionItem header="What is Bulk SMS?">
                        Bulk SMS is a kind of message transmitting service used for sending informational or promotional text messages to a wide audience. It has various applications like OTP, Banking Messages, E-Commerce Site Transaction Messages, Offers, coupons, gathering feedback via text messages, and many more.
                    </AccordionItem>
                </Accordion>
            </div>
            {/*we need an Agency */}
            <div className="Need_an_Agency">
                <h1>WHY DO WE NEED AN AGENCY FOR SEO?</h1>
                <div className="Need-SEO">
                    <ul>
                        <p>Implementing long-term Seo Services India requires an excellent team to develop and execute innovative SEO strategies with extensive Content marketing plans with the best quality content and user experience design to outrun competitors. A team of SEO experts includes content marketers, graphic and Web designers, motion designers, outreach managers, and many more.</p><br />
                        <p>We as a best SEO Company India possess talented and experienced professionals who can build perfect frameworks to help you convert traffic from search engines. Additionally, the experience gained enables us to develop a dynamic framework that can undergo alterations based on industrial-technological changes, algorithm changes, and client campaign requirements.</p><br />
                        <p>We guarantee a successful position among your industry competitors with our well-developed frameworks. Our strategies and plans highlight us as the preferred partner for any business. We categorize our frameworks into four parts, i.e., Learning, Planning, Adjustment, and Growth.</p>
                    </ul>
                    <div className="Need-SEO2">
                        <h1>Get Advantages of SEO and Increase organic traffics, sales & Lead</h1>
                        <p>Our team offers a free SEO audit in which our team does in-depth research of your existing SEO strategy and suggests techniques to improve it.</p>
                        <div className="SEO-outer">
                            <div className="SEO-inner">
                                <ul>
                                    <p># Get organic traffic</p>
                                    <p># No need to pay for advertisement</p>
                                    <p># Reach relevant audience</p>
                                    <p># Get high conversion rates</p>
                                    <p># Cost-effective</p>
                                </ul>
                            </div>
                            <div className="SEO-inner">
                                <ul>
                                    <p># Get High ROI</p>
                                    <p># Long-lasting results</p>
                                    <p># Increase Website Reaffic</p>
                                    <p># Increase Website Quality Service</p>
                                    <p># Increase Sales & Leads</p>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*Grow Your*/}
            <div className="Grow-your">
                <h1>Grow Your Brand, Drive More Revenue</h1>
                <h2>Innovative SEO strategies that increase your brand visibility and online revenue growth.</h2>
                <div className="Grow-outer-card">
                    <div className="Grow-inner-card">
                        <img src=" https://webtechsolution.co/assets1//img/service/levelup.jpg " alt="" />
                        <div className='p-4'>
                            <h5>Rank Better</h5>
                            <p>There's only one page in Google's search book that matters, the first page. Get your name on it with our organic SEO strategies to reach those who are searching for you.</p>
                        </div>
                    </div>
                    <div className="Grow-inner-card">
                        < img src="https://webtechsolution.co/assets1//img/service/goal.jpg" alt="" />
                        <div className='p-4'>
                            <h5>Set New Goals</h5>
                            <p>SEO is like evolution; it improves your online business with time and efforts. Our expertise ensures that you are constantly setting and achieving new online marketing goals.</p>
                        </div>

                    </div>
                    <div className="Grow-inner-card">
                        < img src="https://webtechsolution.co/assets1//img/service/monitize.jpg" alt="" />
                        <div className='p-4'>
                            <h5>Monetize Insights</h5>
                            <p>Money matters, so make sure your investments are going in the right direction with data driven decisions that improve your website, products and services organically.</p>
                        </div>


                    </div>
                </div>
            </div>
            {/*IVR*/}
            <div className="IVR OwnIVR SEO-IVR">
                <h1>Organic rankings by our SEO strategies</h1>
                <p>If you have any question or specific requirement. We will be glad to help.
                </p>
                <h5>Call: 7065-680680</h5>
                <button onClick={toggleModalVisibility}> Contact with us </button>
            </div>
            {/*Organic rankings*/}
            <div className="Organic-rankings">
                <h1>ORGANIC RANKINGS BY OUR SEO STRATEGIES</h1>
                <h2>Search Engine Optimization done right - Quality SEO Services in Delhi NCR</h2>
                <p>Tailor-made digital marketing solutions to match your unique business needs.

                </p>
                <div className=" Quality-SEO">
                    < div className="SEO-strategies">
                        <img src="https://img.icons8.com/external-ddara-flat-ddara/54/000000/external-competitor-digital-marketing-ddara-flat-ddara.png" alt="" />
                        <h1>Competitor Analysis
                        </h1>
                        <p>Knowing what your competition is doing is winning half the battle. So, we study the market and your competition to draw up an online marketing strategy that can get the best organic results for you.</p>
                    </div>
                    < div className="SEO-strategies">
                        <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/54/000000/external-keyword-online-marketing-wanicon-lineal-color-wanicon.png" alt="" />
                        <h1>Keyword Research & Selection </h1>
                        <p>With careful keywords research and selection, we plan for winning the other half of the online battle. Our in-depth keywords research helps in drawing up an SEO strategy that helps you make informed decisions, always.</p>

                    </div>



                </div>
                <div className=" Quality-SEO">
                    < div className="SEO-strategies">
                        <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/54/000000/external-audit-calculator-tools-phatplus-lineal-color-phatplus.png" alt="" />
                        <h1>Technical Audit</h1>
                        <p>Once on board, righting the wrongs is our first priority. With a thorough technical audit of your website we identify and isolate the issues that are affecting your online performance, before our SEO experts and developers set out to fix them.</p>

                    </div>
                    < div className="SEO-strategies">
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/54/000000/external-content-digital-marketing-flaticons-lineal-color-flat-icons-2.png" alt="" />
                        <h1>Content Strategy</h1>
                        <p>Next up, we ensure that the messaging is engaging and meaningful for your target audience by optimising website content with relevant keywords. Just so you know, Google too loves content with the right sprinkle of keywords.

                        </p>

                    </div>



                </div>
                <div className=" Quality-SEO">
                    < div className="SEO-strategies">
                        <img src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/54/000000/external-seo-seo-and-development-smashingstocks-outline-color-smashing-stocks.png" alt="" />
                        <h1>Off-page SEO</h1>
                        <p>Not everything we do happens on your website though. With Off-page SEO activities we tell the world about the amazing, SEO-friendly website of yours, generating high-quality backlinks to increase online relevance, authority and traffic.</p>

                    </div>
                    < div className="SEO-strategies">
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/54/000000/external-view-based-conversions-big-data-flaticons-lineal-color-flat-icons.png" alt="" />
                        <h1>Optimising Conversions</h1>
                        <p>After optimising your website for SEO, we set out to meet online business goals that matter to you the most – conversions and lead generation. With improved CTRs you can start expanding your business both online and offline.</p>

                    </div>



                </div>

            </div>
            {/*Our PPC */}
            <div className="Our-PPC SEO-Branch">
                <h1>WHAT IS AN SEO COMPANY AND WHY YOU NEED ONE?</h1>
                <p>SEO, a branch of internet marketing allows businesses to market themselves on the web. An SEO company is an SEO service provider that aids businesses in achieving higher unpaid rankings on search engines like Google. This boost in rankings means greater exposure, traffic, and opportunities to convert leads into sales.Do easy business with Webtech Solution , the best SEO company in India with no compromise on your marketing results.
                </p>
                <p>We help your business stay relevant on the search engine by appearing at the top of the user query or search. Any quality SEO India company uses tactics like writing user-relevant content, forming high-quality backlinks, and even Social Media to get your website and services ranked.Reading this information, you can understand why SEO is an essential service for the effective marketing of your business. When you own a business, SEO acts as a catalyst and brings more leads and businesses for you leveraging the potential of search engines. With SEO services you can accomplish:

                </p>
                <Tabs>
                    <div className="our-header">
                        <TabList>
                            <Tab><RiGpsFill /> Lead Generation</Tab>
                            <Tab><RiBodyScanFill />Brand visibility</Tab>
                            <Tab><BsSun />Increase Traffic</Tab>
                            <Tab><BsShop />Escalated Sales</Tab>
                            <Tab><PiStorefrontLight />Conversion Rate</Tab>
                        </TabList>
                    </div>
                         <div className="Our-Generration">
                           <TabPanel>
                        <h3>Development</h3>
                        <p>We Are The Webtechage Private Limited Web Design And Development Company</p>
                        <ul>
                            <p>FRONTEND & UI DESIGN</p>
                            <p>BACKEND DEVELOPMENT</p>
                            <p>DATABASE DEVELOPMENT AND WEB HOSTING</p>
                        </ul>
                        <p>Our Affordable SEO Services in India</p>
                        
                    </TabPanel>
                    </div>
                    <div className="Our-Generration">
                    <TabPanel>
                        <h3>Our Digital Marketing Services:-</h3>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><br />
                        <ul>
                            <p>Search Engine Optimization</p>
                            <p>Social Media Optimization</p>
                            <p> Social Media Marketing/li</p>
                            <p> Email Marketing</p>
                        </ul>
                    </TabPanel>
                    </div>
                    <div className="Our-Generration">
                    <TabPanel>
                        <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                        </p>
                        <ul>
                            <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit.
                            </p>
                            <p> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
                            </p>

                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </TabPanel>
                    </div>
                    <div className="Our-Generration">
                    <TabPanel>
                        <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                        </p>
                        <ul>
                            <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit.
                            </p>
                            <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                            </p>
                        </ul>

                    </TabPanel>
                    </div>
                    <div className="Our-Generration">
                    <TabPanel>
                    <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                        </p>
                        <ul>
                            <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit.
                            </p>
                            <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                            </p>
                        </ul>
                        
                    </TabPanel>
                    </div>
                </Tabs>
            </div>
                        {/*Price*/}
      <div className="Price">
        <h1>SEO Services (Search Engine Optimization)</h1>
        <p>
        Optimize your website for better visibility in search engines.	
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li><b>Montly Fee</b></li>
                <li>
                 ₹ 5,000
                </li>
                <li>
                  <b>Features</b>
                </li>
                   <li>Basic SEO</li>
                    <li> Keyword Research</li> 
                    <li>On-Page Optimization</li>
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
                <li>₹ 10,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                SEO+Content Optimization
                </li> 
                <li>Backlinks</li>
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
                <li>₹ 20,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                Full SEO Suite with Monthly Reports
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
                {/*IVR*/} 
                <div className="IVR OwnIVR PPCOWN">
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
                            <li>This is tried and tested and many businesses have made a huge profit by integrating SEO services on their website. Though SEO is a slow process and it takes time to get the desired results. But with the help of SEO, it is possible to get a high return on investment.</li>

                        </AccordionItem>
                        <AccordionItem header="What are the SEO plans offered by Webtechage Private Limited?
">
                            Our SEO experts have designed a variety of SEO Plans that suits different businesses. From reviewing clients’ websites to knowing their expected results, on-page optimization, content analysis, content marketing, positioning of the website, and many other services are included in our SEO Plans. You can check out all our SEO plans and their pricing on the website. To discuss more these SEO Plans, you can reach out to our SEO experts



                        </AccordionItem>
                        <AccordionItem header="Does Webtechage Private Limited also offer customised SEO Packages?">
                            Yes, we do offer customised SEO Packages to help you achieve your required SEO goals. Our SEO team will help you in building a customized SEO Package by reviewing your website, understanding your expectations, and analysing the SEO requirement on your website. The pricing of our customised SEO package varies according to your website’s needs.
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

export default SEO
