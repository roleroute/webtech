
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
import RenderForm from '../component/RenderForm';
import MyForm from '../component/MyForm';




const renderForm = () => <RenderForm />;



const Digital = () => {



  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>

      <div className="blog-banner">
        <div className="blog-inner-card">
          <h1>India’s No. 1</h1>
          <h2>Digtal Marketing Services - Webtechage</h2>
          <p>Best digtal marketing company in Noida</p>
          <a href="tel:+917065680680">
                        <button>+91-7065680680</button>
                    </a>
          <button onClick={toggleModalVisibility}>Get in Touch</button>
        </div>
      <MyForm/>

      </div>
      {/* Voice Section */}
      <div className="Voice-box Digital-box">
        <h1>Digital Marketing</h1>
        <p>We have developed an effective approach to improve the shaping of digital strategies for our clients that leads to defining prioritized, cost-effective solutions that deliver a measurable ROI.

        </p>
        <div className="voice-outer">
          <div className="Voice_services Voice-img" >
            <img src="https://webtechsolution.co/assets/img/913308.png" alt="" />
          </div>
          <div className="Voice_services Digital_service">
            <p>  Webtechage, as a leading Digital Marketing Company in India, helps you establish a foothold on the online medium for Search Engines and Social Media. At Webtechage, we use ethical and proven methods to get your brand to acquire and sustain a remarkable online presence.</p>
          </div>
        </div>
      </div>

      <h1 className='we-know'>Our Digital Marketing Services:-</h1>
      <p className='Ifyouare'>Looking for full-stack digital marketing solutions. Then it's time to rely on us. We create innovative marketing strategies that help your business increase its reach and engagement</p>


      <div className="Exclusive">
        <Card3 icons={<BsClipboardData />} title={"Search Englne Optimization"} dis={"As a part of our comprehensive SEO services, we perform an in-depth audience and competition analysis to optimize your Google Ranking. Our team is packed filled with technical digital marketing experts that assist you to translate organic rankings into revenue."} />
        <Card3 icons={<BsCardChecklist />} title={"Social Media Optimization"} dis={"Social media, like Facebook, LinkedIn, Twitter, Instagram, Pinterest are widely seen as meeting places for people across the globe. We assist you to become more visible and recognizable on social media networks in order that there's a positive impact on website traffic and sales."} />
        <Card3 icons={<BsPeopleFill />} title={"Social Media Marketing"} dis={"From increasing products/brand awareness to boosting the bottom line, we work with our clients/customers to generate social campaigns that will help you to grow your audience organically. We create high-quality contents that consumers have to expect from the brands."} />
        <Card3 icons={<MdOutlineMessage />} title={"Pay Per click"} dis={"products/brand's awareness and search results. We pick the best possible pay-per-click mix for your business, ranging from Google AdWords, Facebook Ads, Bing Ads, Youtube ads, too many more."} />
        <Card3 icons={<IoCodeSlash />} title={"Content Marketing"} dis={"We help clients acquire new audiences/customers through blogging and articles, publishing PR & more with varieties to perfect and unique their content marketing strategy. Our expert team is prepared to assist you to connect together with your audiences/customers like never before by providing the standard content they need to visualize."} />
        <Card3 icons={< BsBullseye />} title={"Video Marketing"} dis={"Visual contents such as images and videos get the highest numbers of shares and engagement compared to any other form of media. We have a smooth process to helps you achieve visual presence in online marketing, enhance product/brand recognition, and increase sales."} />
      </div>

      {/*Frequently Asked Questions*/}
      <div className="Frequently_Asked_Questions">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className="Frequently-main">
          <Accordion>
            <AccordionItem header="What is digital marketing?">
              <p>Digital Marketing is a new age marketing technique that utilizes several digital technologies, the internet, online communication channels, and marketing strategies to help businesses and organizations connect and engage with their audience and customers online. It makes use of varied online channels and marketing tactics to attract customers. Some of the popular online communication channels are – social media, emails, vlogs, blogs, podcasts, and many others. It enables businesses to connect with a large audience worldwide.</p> <br />
              <p>The success rate of digital marketing is far more than the traditional marketing. It shows results in less time and helps in generating more revenue in comparison to other marketing strategies.</p>
            </AccordionItem>
            <AccordionItem header="Why choose Webtechage as your digital marketing company?">
              <li className="Quick"><b>Expertise in Digital Marketing Services</b></li>
              <li>We have a team of experts who have in-depth knowledge about digital marketing. With their years of experience in offering digital marketing services to different business domains, they have become efficient in helping businesses grow consistently.</li>
              <li className="Quick"><b>All Digital Marketing Services under one roof</b></li>
              <li>We are glad to call ourselves a one-stop solution company, for all your digital marketing needs. From designing content on your website to offering you SEO and SMO Services, from marketing your content via social media to via emails, we are there to help you reach heights by offering tremendous digital marketing services.</li>
              <li className="Quick"><b>Transparent Services</b></li>
              <li>We believe in transparency when it comes to the digital marketing services offered by us. We not only share our strategies and tactics with clients before implementing them. But we also take their inputs and feedback to make it work according to their requiremen.</li>
              <li className="Quick"><b>Awarded for excellent digital marketing services</b></li>
              <li>With our excellent performance and efficient digital marketing services, we have made our clients grow invariably. This has helped us in winning numerous awards from our clients for our work recognition and skilful expertise. This has helped us earn positive reviews from multiple potentials clients across the country.</li>
            </AccordionItem>
            <AccordionItem header="Which digital marketing channels are used by Webtechage?">
              <p>
Webtechage makes use of a variety of digital marketing channels are SEO Services, SMO Services, Content Marketing, Email Marketing, PPC Services, and a few others.</p>
              <li className="Quick"><b>SEO</b></li>
              <li>Search Engine Optimization is used for enhancing the web pages to make them rank among the top websites on the search engine result page by increasing their visibility organically.</li>
              <li className="Quick"><b>SMO</b></li>
              <li>Social Media Optimization is a way of utilizing social media platforms for increasing brand awareness, growing business through social media channels, and promoting products and services among potential customers.
              </li><br />
              <li className="Quick"><b>PPC Services </b></li>
              <li>- Pay-Per-Click is a digital marketing model used by businesses to get more clicks or views or visitors to their website. Though, it is not an organic way of marketing, as businesses have to pay for every click.
              </li><br />
              <li className="Quick"><b>Email Marketing</b></li>
              <li>Email Marketing is a marketing strategy used for connecting with potential customers or already existing customers to deliver informative or promotional or personalised messages.
              </li><br />
              <li className="Quick"><b>Content Marketing </b></li>
              <li> Content marketing focuses on marketing strategies that help in curating and sharing varied content from articles to videos to podcasts, to attract, connect, and engage with the targeted audience.
              </li><br />

            </AccordionItem>
            <AccordionItem header="Which content marketing services are offered by Webtechage?">
            Webtechage offers a wide variety of content marketing services. We have experienced content marketers who are always ready to help you with different types of content. From evaluating and researching the content required by you to designing and creating the content, editing content, publishing content and then marketing the content, we take care of all these things. The popular content marketing services offered by us are Videos, Blogs, Infographics, Case studies, White Paper, newsletters, and Web Content.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Modal isVisible={isModalVisible} onClose={toggleModalVisibility}>
                {renderForm()}
            </Modal>
    </>
  )
}

export default Digital
