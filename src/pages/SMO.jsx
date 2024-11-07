
import React, { useState } from 'react';
import Modal from '../component/Modal';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import 'react-tabs/style/react-tabs.css';
import Card3 from '../component/Card3'
import { BsClipboard2Data } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { BsBullseye } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
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



const SMO = () => {
  

  const data = [
    {
      icons: <BiReceipt />,
      title: "Build Brand Awareness",
      content: "Social media marketing helps to spread the word about your goods, products, and operations."
    },


    {
      icons: <BiCube />,
      title: "Enhance your traffic",
      content: "Using social media and linking it to your website will increase your traffic tremendously."
    },
    {
      icons: <BiWallet />,
      title: "Cost-Effective Advertising",
      content: "Social media marketing is a reliable and cost-effective way to connect with the audience to increase sales,"

    },
    {
      icons: <BiCube />,
      title: "Upgrade Search Engine Grade",
      content: "Social media marketing helps to get some organic traffic to company websites which directly helps to promote the business,"
    },
    {
      icons: <BiImages />,
      title: "Promoting Products and Services",
      content: "social media marketing helps to boost the promotion of goods by posting daily articles related to the products,"
    },
    {
      icons: <BiShield />,
      title: "Build Brand Loyalty",
      content: "it is very important to post some articles regularly to engage with the audience and starts making the relationship between the audiences."
    },
    {
      icons: < BsActivity />,
      title: "Higher Conversion Rates",
      content: "Every article post, image, comment, or video may boost viewers and audience to your company’s website and increase traffic."
    },
    {
      icons: <BiAlarm />,
      title: "Save Time and Money",
      content: "As you don’t need to manage year-round overheads of these developers, the process is cost and time-efficient. No need to keep deadline reminders."
    },
    {
      icons: <BsShop />,
      title: "Acquire Marketplace Insights",
      content: "Develop pricing strategies, and estimate or calculate current performance against market prospective."
    },
  ]




  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>

      <div className="blog-banner SMO-banner">
        <div className="blog-inner-card">
          <h1>India’s No. 1</h1>
          <h2>Social Media Optimization</h2>
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
        <h1>SMO SERVICES</h1>
        <p>Looking for Social Media Marketing Solutions in Delhi? Call Us</p>
        <div className="voice-outer">
          <div className="Voice_services Voice-img " >
            <img src="https://webtechsolution.co/assets1/img/service/smo-servies-noida-india.jpg" alt="" />
          </div>
          <div className="Voice_services Digital_service About-service IVR-Android SMO-service ">
            <p>Our digital markets experts use their industry experience to make your brand more popular on different social media platforms like Google+, Twitter, Facebook, YouTube, etc. Our SMO Company has successfully met the needs of the customers. We have designed our services in such a way that people offer you a better area, where you can get involved the best to increase brand awareness.</p>
            <h2>Social Media Marketing for Businesses</h2>
            <p className="SMO-p"><b>Social Media Marketing</b> is a powerful tool for the customers and businesses of all sizes to reach prospects. Now, Customers are already interacting with brands through social media. If you are not speaking directly to the audience through social media platforms like Twitter, Instagram, Facebook, and Pinterest, then you are missing out. Social media can bring remarkable success to your business by creating a brand and even driving leads. SMM is a form of internet marketing which involves sharing content on social media networks to achieve marketing goals. Social media marketing includes such activities as image updates, videos, posting text, and other content which drives audience engagement and paid social media advertising for business.</p>

          </div>
        </div>
      </div>
      <div className="Mission">
        <div className="Aboutmission Androidmission">
          <h1>B2B Social Media Marketing Services</h1>
          <p >Social media marketing services are focused on putting your company in a better position between you and your customers. Our services are designed to show you where you can best get involved and the tactics you should use to help increase brand awareness. Using social media audit, competitive analysis, and custom-built interactive strategies, you can take advantage of the social web. Social media has proven to be a viable marketing channel for B2B companies of all sizes, across the world.</p>
        </div>

        <div className="Aboutmission Aboutimg">
          <img src="https://webtechsolution.co/assets1/img/service/social-media-servies-india.jpg " alt="" />
        </div>
      </div>
      <h1 className='we-know'>WHAT DO WE COVER IN OUR SOCIAL MEDIA MARKETING SOLUTIONS?</h1>
      <p className='Ifyouare'>Many companies offer social media marketing services. We are one of the few with experience to reach goals in social PR and lead generation using social media. A successful B2B social media marketing strategy connects you with the right prospects and customers on the proper platforms. See our digital marketing services to help the websites.</p>


      <div className="Exclusive OwnVoiceCard SMO-Card2">
        <Card3 icons={<BsClipboard2Data />} title={"Competitive Analysis"} dis={"We will identify the action alerts, potential service providers, and tactics that you can start implementing in your industry."} />
        <Card3 icons={<BsCardChecklist />} title={"Social profile Setup and Optimization"} dis={"We will identify the social networks where people are talking about you and where you should be participating."} />
        <Card3 icons={<IoPeopleSharp />} title={"Community building strategy development"} dis={"We will outline what the competition is doing and how you can enter these communities and form relationships."} />
        <Card3 icons={<MdOutlineMessage />} title={"Badge creation and strategy"} dis={"We can create interactive badges that have obvious link-building benefits and will position you as an authority in the industry."} />
        <Card3 icons={<HiCode />} title={"Software recommendations"} dis={"There are thousands of social media tools due to a larger audience and the explosion of open-source software."} />
        <Card3 icons={<BsBullseye />} title={"Define your target audience"} dis={"When building a social media marketing strategy, the first step should be defining your buyer persona and your target audience."} />
        <Card3 icons={<RiDeleteBinLine />} title={"Set clear goals and KPIs"} dis={"Every successful marketing strategy has a clear set of goals and objectives. It is important to define SMART goals."} />
        <Card3 icons={<BsCollection />} title={"Engage with your followers"} dis={"Once you schedule or publish your posts on social media, your job is not done. Moreover, your followers’ engagement with your posts is what drives more visibility."} />
        <Card3 icons={< BsGraphUpArrow />} title={"Make employees your brand advocates"} dis={"In the previous section, we briefly introduced brand advocacy. Even though your brand advocates can be various influencers, customers, partners, and other stakeholders,"} />

      </div>
      {/*SMO Services*/}
      <div className="SMO-Services">
        <h1>OUR SMO SERVICES IN INDIA</h1>
        <h2>Check our Services
        </h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        <div className="SM0-Services2">
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/facebook-new.png" alt="" />
            <h1>Facebook Marketing</h1>
            <p>National SEO services from Webtech Solution SEO experts are data-backed strategies to increase organic search visibility, outrank digital competitors</p>

          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/linkedin.png" alt="" />
            <h1>Linkedin Marketing</h1>
            <p>We ensure your online store's success by ranking your ecommerce site high in search results and driving customers for sales and conversions.</p>
          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/instagram-new--v1.png" alt="" />
            <h1>Instagram Marketing</h1>
            <p>Want to take your business to the next level? We have the tools and skill-set to transform your revenues with actionable data.</p>

          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/twitter--v1.png" alt="" />
            <h1>Twitter Marketing
            </h1>
            <p>Expand your reach to the local customers and grow your business locally as we place you on high ranks in local search results.</p>

          </div>

          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/youtube-play--v1.png" alt="" />
            <h1>YouTube Marketing
            </h1>
            <p>Spread your business nationwide successfully as we help you get high search engine rankings to gain quality leads and sales.</p>

          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/pinterest--v1.png" alt="" />
            <h1>Pinterest Marketing</h1>
            <p>Spread your business nationwide successfully as we help you get high search engine rankings to gain quality leads and sales</p>



          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/google-logo--v1.png" alt="" />
            <h1>Google My Business Marketing</h1>
            <p>Consider the impact of a billion users on one platform. One website where people gather, speak, interact, share and connect with each other.</p>

          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/64/000000/external-app-development-seo-and-web-smashingstocks-detailed-outline-smashing-stocks.png" alt="" />
            <h1>Online Reputation Management (ORM)
            </h1>
            <p>Spread your business nationwide successfully as we help you get high search engine rankings to gain quality leads and sales</p>
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
          <AccordionItem header="What is Andriod application ?">
            Bulk SMS is a kind of message transmitting service used for sending informational or promotional text messages to a wide audience. It has various applications like OTP, Banking Messages, E-Commerce Site Transaction Messages, Offers, coupons, gathering feedback via text messages, and many more.
          </AccordionItem>
        </Accordion>
      </div>
      {/*Our Context*/}
      <div className="Our-Context Google-Context SMO-Context">
        <h1>WHY SHOULD YOU TAKE SOCIAL  MEDIA MARKETING SERVICEAS?</h1>
        <p>Our digital markets experts use their industry experience to make your brand more popular on different social media platforms like Google+, Twitter, Facebook, YouTube, etc. Our SMO Company has successfully met the needs of the customers. We have designed our services in such a way that people offer you a better area, where you can get involved the best to increase brand awareness.</p>

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
      {/*SMO Services*/}
      <div className="SMO-Services">
        <h1>TOUCH INSIDE INTERNET MARKETING SERVICES</h1>
        <h2>Check our Services
        </h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        <div className="SM0-Services2">
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/external-linector-lineal-linector/64/000000/external-seo-seo-marketing-linector-lineal-linector.png" alt="" />
            <h1>Search Engine Optimization ( SEO)
            </h1>
            <p>National SEO services from Webtech Solution SEO experts are data-backed strategies to increase organic search visibility, outrank digital competitors</p>

          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/dotty/64/000000/playstore.png" alt="" />
            <h1>App Store Optimization App Store SEO ( ASO)</h1>
            <p>We ensure your online store's success by ranking your ecommerce site high in search results and driving customers for sales and conversions.</p>
          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/ios/64/000000/google-logo--v1.png" alt="" />
            <h1>Google My Business Optimization (GMB)</h1>
            <p>Want to take your business to the next level? We have the tools and skill-set to transform your revenues with actionable data.</p>

          </div>
          <div className=" SMO-Services3">
            <img src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/64/000000/external-app-development-seo-and-web-smashingstocks-detailed-outline-smashing-stocks.png" alt="" />
            <h1>Online Reputation Management (ORM)</h1>
            <p>Spread your business nationwide successfully as we help you get high search engine rankings to gain quality leads and sales</p>

          </div>
        </div>
      </div>
          {/*Price*/}
          <div className="Price">
        <h1>SMO Services (Social Media Optimization)</h1>
        <p>
        Increase brand awareness on social media platforms.	
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Basic</h3>
              <ul>
                <li><b>Montly Fee</b></li>
                <li>
                 ₹ 4,000
                </li>
                <li>
                  <b>Features</b>
                </li>
                   <li>2 Social Media Platforms</li>
                    <li>10 Posts/month</li>    
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
                <li>₹ 8,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                3 Platforms
                </li> 
                <li>20 Posts/month+Analytics</li>
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
                <li>₹ 12,000</li>
                <li>
                 <b>Features</b>
                </li>
                <li>
                 5 Platforms
                </li>
                <li>30 Post/month</li>
                <li>Custom Strategy</li>
                
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

export default SMO
