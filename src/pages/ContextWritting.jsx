
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { IoCheckmarkOutline } from "react-icons/io5";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { BiReceipt } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings6 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
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


const renderForm = () => (
    
    <form className="callback-form">
        <div>
            <h1>
                Looking to Grow your Business?
            </h1>
            <p>Get in touch for a free consultation!</p>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder='Enter your name' />
        </div>
        <div>
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
            <label htmlFor="phone"></label>
            <input type="phone" id="phone" name="phone" placeholder="Enter your phone" />
            <div>

                <select placeholder="Service" className='select-option'>
                    <option value="">--selectone----</option>
                    <option value="Digital-Marketing">Digtal Marketing</option>
                    <option value="seo-services">Seo-Services</option>
                    <option value="bulk-sms">Bulk Sms</option>
                    <option value="ppc-services">PPC-Service</option>
                    <option value="Web development">  Web Development</option>
                    <option value="App development">App Development</option>
                    <option value="ivr-service">IVR Service</option>
                    <option value="toll-free">Toll-free</option>
                    <option value="voice-service">Voice Call</option>
                </select>
            </div>
            <div>
                <textarea className='textarea-1' placeholder='Enter your message' />

            </div>
            <div className='checkbox'>
                <input type="checkbox" id='checkbox' />
                <label htmlFor="checkbox">
                    By Clicking on the same you are accepting our <a href="">terms and condition</a> and <a href="">Privacy Policy.</a></label>
            </div>
        </div>
        <button type="send">send</button>
    </form>
);



const ContextWritting = () => {

    const data = [
        {
            icons:<BiReceipt />,
            title: "Blog Posts Creation",
            content: "A blog can be one of the most important tools to educate and inform your audience and cultivate loyalty. We can help with research and development, planning an overall content strategy, and populating your content calendar with fresh and unique content, designed for both humans and search engines."
        },

      
        {
            icons: <BiCube />,
            title: "Infographics Design",
            content: "Infographics are becoming an important part of storytelling – helping you to make complex concepts simpler and garnering eyeballs. We can help you create effective infographics and illustrations that can be embedded on blogs and websites and drive action."
        },
        {
            icons: <BsFillPersonCheckFill />,
            title: "SEO Content Writing",
            content:"As India’s leading SEO agency, we know how to produce website content aimed at humans and for search engines alike.Website Content Writing. We can work with you to create product descriptions, value propositions, landing page copy, and other website copy – all designed to maximise readability and conversion."

        },
        {
            icons:  <BiCube />,
            title:"Social Media Content Writing",
            content:"We provide social media content rwiting services, helping you to make complex concepts simpler and garnering eyeballs. We can help you create effective infographics and illustrations that can be embedded on blogs and websites and drive action."
        },
        {
            icons:<BsGraphUpArrow />,
            title:"Press Releases",
            content:"We also create press releases for digital PR, which is compelling for readers and designed for maximum reach and promotion."
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
                    <h2>CONTENT MARKETING</h2>
                    <p>Get a professional toll free number and give your customers the privilege of calling your business for free</p>
                    <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
                    <button onClick={toggleModalVisibility}>Get in Touch</button>
                </div>
                <div className="blog-inner-card">
                    <form >
                        <p className='FREEQuote'> Request a FREE Quote</p>
                        <h1>Get response within 24 hours</h1>

                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder='Enter your name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="moblie"></label>
                            <input type="mobile" id="moblie" name="moblie" placeholder="Your moblie number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="discription"></label>
                            <input type="discription" id="discription" name="discription" placeholder="Discription" />
                        </div>
                        <div className='checkbocheckbox'>
                            <input type="checkbox" id='checkbox' />
                            <label htmlFor="x">
                                By Clicking on the same you are accepting our <a href="">terms and condition</a> and <a href="">Privacy Policy.</a></label>
                        </div>
                        <div class="send">
                            <button> Send your Request</button>
                        </div>

                    </form>
                </div>

            </div>
            {/* Voice Section */}
            <div className="Voice-box Digital-box About-us Context-Us">
                <h1>CONTENT MARKETING</h1>
                <p>CONTENT CREATION SERVICES
                </p>
                <div className="voice-outer  Context-outer">
                    <div className="Voice_services Voice-img Context-img Context-img1" >
                        <img src="https://webtechsolution.co/assets1//img/service/content-marketing402543.png" alt="" />
                    </div>
                    <div className="Voice_services Digital_service About-service IVR-Android Context-service Context-service2 ">
                        <p>Content is a third most sought after services by online businesses and WebtechSolution delivers only the best. Don’t believe us? Ask our 100+ clients who totally rely upon us for their SEO, SMO, Google AdWords, and branding content.</p>
                        <h1>COMPREHENSIVE STRATEGY
                        </h1>
                        <p1>We provide a comprehensive content marketing plan that suits your marketing needs be it for any digital marketing services like SEO, SMO, Google AdWords, Email Marketing... etc. From an aggressive researching and ideation process to executing smart ideas that make you a source of information. We help you design the most relevant content on the basis of your business. The content creation services are subtly incorporated with your digital marketing goals. No advancement in the digital market has been able to dethrone content and its aspects of helping a business in successful branding activities, converting sales, and retaining customers. As the heart of the digital experience, content is the most affluent player at every platform like- website, Google AdWords, social media marketing, and email marketing ads

                        </p1>

                    </div>
                </div>
            </div>
            <div className="Mission">
                <div className="Aboutmission Androidmission Contextmission">
                    <ul>
                        <h1>HOW ARE WE DIFFERENT FROM OTHER COMPANIES?
                        </h1>
                        <p>Content creation service for ‘TD Digital Solution’, 'Rana Digital Solution', 'Digital Shine', and 'Lead In Solution' all are the best IT Solution company in Noida.</p><br />
                        <h1>HOW ARE WE DIFFERENT FROM OTHER COMPANIES?</h1>

                        <p><b>Research About Topics:- </b>Researching about their topics, surveys, audience data, productions, and publications.
                        </p>
                        <p><b>Analysis Phase:- </b> Specialized and skilled strategies deployment that attracts all readers</p>
                        <p><b>Creations:- </b> Create or developed out-reaching content with a high quality of keywords</p>
                        <p><b>Blends:-</b>Companies' goals and vision are blended with the overall tones and style of the contents</p>
                        <p><b>ROI (Return On Investment):- </b>We focus on areas that promise the largest ROI (Return on investment) for your business.
                        </p>
                    </ul>
                </div>

                <div className="Aboutmission Aboutimg">
                    <img src="https://webtechsolution.co/assets1//img/service/content-marketing4025431.png " alt="" />
                </div>
            </div>




            {/* Callback Section */}
            <div className="callback-section">
                <h1>Get enterprise SMS Service For Your Business Today</h1>
                <p>Not Sure about this Servic? Contact to Our Sales Specialist today!</p>
                <button onClick={toggleModalVisibility}>Resquest for Demo!</button>
            </div>
           

            {/*Our Context*/}
            <div className="Our-Context">
                <h1>OUR CONTEXT MARKETING SERVICES LIST INCLUDES</h1>
                <p>Let’s take it one by one. Imagine yourself and see if this description fits you. You are an entrepreneur with a mobile app idea in your mind.</p>

                <div className="Context-outer-card">

                    {data.map((e) => {
                        return (
                            <div className="Context-inner-card">
                                   <div className='Context-inner-inner'>
                                   <p className='Context-icons'>{e.icons}</p>
                                   <p className='Context-title'>{e.title}</p>
                                   </div>
                                    <p className='Context-content'>{e.content}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
                   {/*Price*/}
          <div className="Price">
        <h1>Content Marketing</h1>
        <p>
        Content creation and distribution for your brand.
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
                   <li>4 Blog Posts</li>
                    <li>Basic Social Sharing</li>    
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
                 8 Blogs Posts
                </li> 
                <li>Content for 2 Social Channels</li>
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
                 12 Posts
                </li>
                <li>Video Content</li>
                <li>Advanced Promotion</li>
                
                
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
                {/*ContextName*/}
            
            <div className="Phone ContextName">
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

export default ContextWritting
