
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { IoCheckmarkOutline } from "react-icons/io5";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { BiReceipt } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import { BiWallet } from "react-icons/bi";
import { BiImages } from "react-icons/bi";
import { BiShield } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { BiAlarm } from "react-icons/bi";

import { BsShop } from "react-icons/bs";
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
const GoogleMyBussiness = () => {

    const data = [
        {
            icons: <BiReceipt />,
            title: "We Manage Your Reputation",
            content: "We stay on top of your customer reviews by replying to them for you keeping your customers happy and Google even happier!"
        },


        {
            icons: <BiCube />,
            title: "We Increase Your Local Ranking",
            content: "We know that to rank well in the Google Map Pack you have to do more than stay on top of your Google Business Profile so we also build like citations (directory links). When working together with the work we do you can expect to see your business rise higher in the search results each month."
        },
        {
            icons: <BiWallet />,
            title: "Optimise Your Business Locally - GMB",
            content: "Lastly and just as important we ensure your profile is optimised and secure. We even provide you with recomendations on how you can improve your website to work better with your Google Business Profile."

        },
        {
            icons: <BiCube />,
            title: "Show up in Google Maps searches",
            content: "The work we do is designed to put you in the best position in your local market. We want you to get more calls, offer more quotes, get more walk-in traffic and have the best reputation in your area. Our Ninjas are always working away, monitoring your profile and looking at ways that enable us to do better as well. More questions?"
        },
        {
            icons: <BiImages />,
            title: "Boost local rankings and Traffic",
            content: "The work we do is designed to put you in the best position in your local market. We want you to get more calls, offer more quotes, get more walk-in traffic and have the best reputation in your area. Our Ninjas are always working away, monitoring your profile and looking at ways that enable us to do better as well. More questions?"
        },
        {
            icons: <BiShield />,
            title: "Increase Your Customer engagement",
            content: "The work we do is designed to put you in the best position in your local market. We want you to get more calls, offer more quotes, get more walk-in traffic and have the best reputation in your area. Our Ninjas are always working away, monitoring your profile and looking at ways that enable us to do better as well. More questions?"
        },
        {
            icons: < BsActivity />,
            title: "Improve your online reputation",
            content: "The work we do is designed to put you in the best position in your local market. We want you to get more calls, offer more quotes, get more walk-in traffic and have the best reputation in your area. Our Ninjas are always working away, monitoring your profile and looking at ways that enable us to do better as well. More questions?"
        },
        {
            icons: <BiAlarm />,
            title: "Increase leads and conversions",
            content: "The work we do is designed to put you in the best position in your local market. We want you to get more calls, offer more quotes, get more walk-in traffic and have the best reputation in your area. Our Ninjas are always working away, monitoring your profile and looking at ways that enable us to do better as well. More questions?"
        },
        {
            icons: <BsShop />,
            title: "More Calls, More Quotes, More Business!",
            content: "The work we do is designed to put you in the best position in your local market. We want you to get more calls, offer more quotes, get more walk-in traffic and have the best reputation in your area. Our Ninjas are always working away, monitoring your profile and looking at ways that enable us to do better as well. More questions?"
        },
    ]


    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>

            <div className="blog-banner">
                <div className="blog-inner-card">

                    <h1>India’s No. 1</h1>
                    <h2>Google Bussiness Listing Agency</h2>
                    <p>It makes it simpler for clients to locate businesses while looking for goods or services because it enables them to build and update their business information.</p>

                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
                <MyForm />

            </div>
            {/* Voice Section */}
            <div className="Voice-box Digital-box About-us Context-Us Google-us2">
                <h1>Google My Business Agency in India</h1>
                <p>Contact Top Leading Pay per Click Company in India to Increase Growth of Your Business </p>
                <div className="voice-outer  Context-outer">
                    <div className="Voice_services Voice-img Context-img Google-img Google-img2" >
                        <img src="https://img.freepik.com/free-photo/businesspeople-meeting-plan-analysis-graph-company-finance-strat_74952-1347.jpg" alt="" />
                    </div>
                    <div className="Voice_services Digital_service About-service IVR-Android Context-service Google-Service Google-Service2">
                        <p>
                            Google offers a tremendous range of services to help you claim and manage your online presence. Let’s Put Our Cities on the Map is a program designed to empower communities to support their local businesses and encourage them to get on the map. Local businesses keep our communities strong; when we help them succeed on the web, they make our communities even stronger.</p><br />

                        <h5>Where do your customers turn first to learn about your business and the products or services you offer? Chances are they search Google, and your business better be there! As a Certified Google Partner, Service Ninjas will set up your Google My Business Profile at affordable prices to get your business online

                        </h5>

                    </div>
                </div>
            </div>
            <div className="Mission">
                <div className="Aboutmission Androidmission Contextmission">
                    <ul>
                        <h1>Why do you need a Google Business Listing?
                        </h1>
                        <p>Before you create your Google Business account (or revamp it), let’s ask ourselves the most important question: why should you do this?</p><br />

                        <p>First of all, as we already know, Google processes over 3 billion searches in a single day – that’s a lot of footfall!</p><br />
                        <p>Secondly, most people do not make it to the second page of Google: the number of people going to the second page drops by an average of 71.82%!
                        </p><br />
                        <p>Now, it’s obvious the 71% is leaving because they have already found what they want on the first page- and that’s exactly where your business should be. Of course, there are a lot of other strategies you’d have to keep in place to ensure you’re on the first page of Google results but having a Google Business page will definitely have an impact on your strategy.</p>

                    </ul>
                </div>

                <div className="Aboutmission Aboutimg">
                    <img src="https://img.freepik.com/free-photo/search-find-view-information-data-graphic-symbol-icon_53876-121005.jpg?" alt="" />
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
                    <AccordionItem header="What is Andriod application ?">
                        Bulk SMS is a kind of message transmitting service used for sending informational or promotional text messages to a wide audience. It has various applications like OTP, Banking Messages, E-Commerce Site Transaction Messages, Offers, coupons, gathering feedback via text messages, and many more.
                    </AccordionItem>
                </Accordion>
            </div>
            {/*Benefits of our Google*/}
            <div className="Our-Google">
                <h1>BENEFITS OF OUR GOOGLE MY BUSINESS MANAGEMENT SERVICE</h1>
                <div className="Our-Google2">
                    <ul>
                        <p># Show up in Google Maps searches</p>
                        <p># Show up in the Google Local 3-Pack</p>
                        <p># Amplify your Google online presence</p>
                        <p># Increase leads and conversions</p>
                        <p># Increase engagement</p>
                        <p># Improve your online reputation</p>
                        <p># Boost local rankings</p>
                        <p># Help you gain a competitive advantage</p>
                        <p># With GMB Ninja, you get your own dedicated GMB expert working hard every month to optimise your listing, build relevance in local search, and grow your leads</p>
                    </ul>

                </div>

            </div>

            {/*Our Context*/}
            <div className="Our-Context Google-Context">
                <h1>BENEFITS OF OUR GOOGLE MY BUSINESS MANAGEMENT SERVICES - LOCAL SEARCH RANKINGS FACTORS
                </h1>


                <div className="Context-outer-card">

                    {data.map((e) => {
                        return (
                            <div className="Context-inner-card Google-inner-card">
                                <div className="Google-main">
                                    <p className='Context-icons Google-icons'>{e.icons}</p>
                                    <p className='Context-title Google-title'>{e.title}</p>
                                </div>
                                <p className='Context-content Google-content Google-content2'>{e.content}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
            {/*Price*/}
            <div className="Price">
                <h1>Google My Business</h1>
                <p>
                    Setup and management of Google My Business for local SEO.
                </p>

                <div>
                    <Slider {...settings}>
                        <div className="slider_price">
                            <h3>Basic</h3>
                            <ul>
                                <li><b>Setup Fee</b></li>
                                <li>
                                    ₹ 2,000
                                </li>
                                <li>
                                    <b>Monthly Management Fee</b>
                                </li>
                                <li>₹ 1,000</li>

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
                                    <b>Setup Fee</b>
                                </li>
                                <li>₹ 3,000</li>
                                <li>
                                    <b>Monthly Management Fee</b>
                                </li>
                                <li>
                                    ₹ 15,00
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

            {/*Frequently Asked Questions*/}
            <div className="Frequently_Asked_Questions">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <div className="Frequently-main">
                    <Accordion>
                        <AccordionItem header="What is content marketing?">
                            Content Marketing is a kind of marketing service that requires one to research the content, create content, edit, publish, and then distribute it on the online platform for attracting users. Content marketing services include videos or vlogs, blogs, articles, webinars, tutorials, and much other creative content. Businesses can make use of content marketing for improving the content on their website by using different content marketing strategies.
                        </AccordionItem>
                        <AccordionItem header="Why do we need content marketing services?">
                            <ul>
                                <p><b>Increase the visibility of your content</b></p>
                                <p>With the help of content marketing services like SEO, it is now possible to increase the traffic and visibility on the website. The more the traffic, the more will be the growth of the business.</p><br />
                                <p><b>Improves the ranking of your content</b></p>
                                <p>If you wish to see your content ranking at the 1st position on the SERP, then content marketing is a must. It will help in the overall evaluation of the content which will lead to improvised content. With better quality content, the chances of ranking high increase more.</p><br />
                                <p><b>Leads to more conversions</b></p>
                                <p>Be it the website content or the social media content, if the quality of your content is high, it can influence a lot many users. This will help increase the conversions organically. By taking the help of content marketing services you can add on the Call-To-Action in every content of yours. This will help users understand the end purpose of the content and you may get new customers also.</p><br />
                                <p><b>Retain more customers with better content</b></p>
                                <p>If your customers do not stay on your website for long or they do not engage more with your content, then you must take the help of content marketers. With the customization and editing of content, they will be able to make your content more engaging. It will help you in retaining customers with ease.</p>
                            </ul>
                        </AccordionItem>
                        <AccordionItem header="How Webtechage Private Limited will help us by offering content marketing services?">
                            <ul>
                                <li>By forming a content marketing strategy to cater for your business goals and needs.</li><br />
                                <li>By creating a variety of content for different platforms for marketing and promoting your products and services. Like video content, article or blogs, infographics, social media content, podcasts, and lots more.
                                </li> <br />
                                <li>Help your business grow by increasing the reach of your content by attracting more users through your content.</li><br />
                                <li>Help businesses in saving money spent on different marketing tactics used for promotion and marketing of the content.
                                </li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem header="Which content marketing services are offered by Webtechage Private Limited?">
                            Webtechage Private Limited offers a wide variety of content marketing services. We have experienced content marketers who are always ready to help you with different types of content. From evaluating and researching the content required by you to designing and creating the content, editing content, publishing content and then marketing the content, we take care of all these things. The popular content marketing services offered by us are Videos, Blogs, Infographics, Case studies, White Paper, newsletters, and Web Content.


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
                <Lets />
            </div>

            <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
                {renderForm()}
            </Modal>

        </>
    )
}

export default GoogleMyBussiness
