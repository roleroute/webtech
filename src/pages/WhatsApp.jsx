import React from "react";
import { data, Testimonial } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card5 from "../component/Card5";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Link } from "react-router-dom";

const WhatsApp = () => {
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

  return (
    <div className="whatsapp-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Connect Seamlessly with Customers on WhatsApp</h1>
        <h2>
          Automate and personalize your WhatsApp messages to engage, support,
          and grow your business effortlessly with Webtech.
        </h2>

        <Link to="/Contact">
          <button className="cta-button">Contact Us Today</button>
        </Link>
      </section>

      {/* Introduction to WhatsApp Business API */}
      <div className="wht-inner">
        <section className="introduction">
          <div className="wht-service-inn">
            <h2>Introduction to WhatsApp Business API</h2>
            <p>
              The WhatsApp Business API offers unique benefits through Webtech,
              enabling businesses to connect with their customers effortlessly.
            </p>
            <ul>
              <li>Automate customer support and reduce response time.</li>
              <li>
                Broadcast updates, promotions, and offers directly to customers.
              </li>
              <li>
                Integrate WhatsApp with your CRM for better customer insights.
              </li>
            </ul>
          </div>
          <div className="wht-service-inn">
            <img
              src="https://mtalkz.com/wp-content/uploads/2024/07/Image-2.webp"
              alt=""
            />
          </div>
        </section>

        {/* Key Features */}
        <section className="key-features">
          <div className="wht-service-inn">
            <img
              src="https://mtalkz.com/wp-content/uploads/2024/07/Image-3.webp"
              alt=""
            />
          </div>
          <div className="wht-service-inn">
            <h2>Key Features of Webtech WhatsApp API Service</h2>
            <ul>
              <li>
                Broadcast Messaging: Reach multiple customers with targeted
                messaging campaigns.
              </li>
              <li>
                Campaign Management: Schedule and personalize messages to engage
                prospects at the right time.
              </li>
              <li>
                Language Customization: Communicate in your customers' preferred
                language.
              </li>
              <li>
                Chatbot Integration: Automate replies for frequently asked
                questions and boost customer satisfaction.
              </li>
              <li>
                Analytics & Reporting: Track message performance and optimize
                campaigns for higher ROI.
              </li>
            </ul>
          </div>
        </section>

        {/* Service Plans and Pricing */}
        <section className="service-plans">
          <h2>Service Plans and Pricing</h2>
          <div className="plan">
            <h3>Starter</h3>
            <p>
              Ideal for small businesses needing essential messaging features.
            </p>
          </div>
          <div className="plan">
            <h3>Growth</h3>
            <p>For growing businesses looking for advanced engagement tools.</p>
          </div>
          <div className="plan">
            <h3>Enterprise</h3>
            <p>For high-volume users with comprehensive messaging needs.</p>
          </div>
        </section>
        <div className="Price">
        <h1>WhatsApp API Service</h1>
        <p>
        For customer engagement through WhatsApp API.
        </p>

        <div>
          <Slider {...settings}>
            <div className="slider_price">
              <h3>Starter</h3>
              <ul>
                
                 <li>10,000 messages</li>
                <li>
                  <b>Cost per Message</b>
                </li>
                <li>
                 ₹ 0.30
                </li>
                <li><b>Monthly Fee</b></li>
                <li> ₹3,000</li>
                <li><b>Validity</b></li>
                <li>1 month</li>
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Business</h3>
              <ul>
                <li>
                  50,000 messages
                </li>
                <li><b>Cost per Message</b></li>
                <li>
                ₹ 0.28
                </li>
                <li>
                  <b>Monthly Fee</b>
                </li>
                <li>₹12,000</li>
                <li>
                 <b>Validity</b>
                </li>
                <li>3 months</li>
               
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>
            <div className="slider_price">
              <h3>Enterprise</h3>
              <ul>
                <li>
                 100,000 messages
                </li>
                <li><b>Cost per Message</b></li>
                <li>
                   ₹0.25
                </li>
                <li>
                  <b>Monthly Fee</b>
                </li>
                <li>₹25,000</li>
                
                  <li>Validity</li>
                <li>6 months</li>
               
              </ul>
              <div class=" center homebutton">
                <a href="#" class="btn solid-btn btn-block center hh">
                  Pay Now
                </a>
              </div>
            </div>

            <div className="slider_price">
              <h3>Corporate</h3>
              <ul>
                <li>
                  500,000 messages
                </li>
                <li><b>Cost per Message</b></li>
                <li>
                   ₹0.22
                </li>
                <li>
                  <b>Monthly Fee</b>
                </li>
                <li>₹90,000</li>
                  <li>
                    <b>Validity</b>
                    </li>
                <li>1year</li>
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

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>
              Connect: Connect your WhatsApp Business API account with Webtech.
            </li>
            <li>
              Create: Design and personalize message templates for your business
              needs.
            </li>
            <li>
              Schedule: Set up your campaign timings and target your audience.
            </li>
            <li>
              Monitor: Track campaign performance with in-depth analytics.
            </li>
          </ol>
        </section>

        <div className="Testimonials">
          <h1>Testimonials</h1>
          <p>
            We had worked with several other marketing companies in the past who
            didn't deliver results and I'm happy to say WSI is doing that for
            us.
          </p>

          <div className="unique-slider-main-box unique-slider-main-box2">
            <Slider {...settings6}>
              {Testimonial.map((e) => {
                return <Card5 Testimonial={e} />;
              })}
            </Slider>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="Frequently_Asked_Questions Frequently_Asked_Questions2">
          <h1> Frequently Asked Questions </h1>

          <Accordion>
            <AccordionItem header="What is the WhatsApp Business API?">
              The WhatsApp Business API is a solution designed for medium and
              large businesses to manage and send messages to customers at
              scale. It allows businesses to automate communication and engage
              with customers seamlessly.
            </AccordionItem>

            <AccordionItem header="How can I integrate WhatsApp with my existing systems?">
              You can integrate WhatsApp with your existing CRM or customer
              support systems using the Webtech API. This integration helps
              streamline communication and improve customer insights.
            </AccordionItem>

            <AccordionItem header="What types of messages can I send using the WhatsApp API?">
              You can send various types of messages, including text messages,
              images, videos, and document files. Additionally, you can send
              notifications, updates, and promotional messages.
            </AccordionItem>

            <AccordionItem header="Is there a limit on the number of messages I can send?">
              Yes, there are limits on the number of messages you can send to
              ensure compliance with WhatsApp's policies. However, these limits
              can vary based on your business's verified status and usage
              history.
            </AccordionItem>

            <AccordionItem header="How does WhatsApp handle privacy and data security?">
              WhatsApp ensures end-to-end encryption for all messages, ensuring
              that only the sender and recipient can read the content.
              Businesses must also comply with data protection regulations when
              using the API.
            </AccordionItem>

            <AccordionItem header="Can I use WhatsApp to send promotional messages?">
              Yes, you can send promotional messages, but they must comply with
              WhatsApp’s guidelines. It's important to obtain customer consent
              before sending marketing messages.
            </AccordionItem>

            <AccordionItem header="What support do you provide for setting up WhatsApp API?">
              We offer comprehensive support to help you set up the WhatsApp
              Business API, including guidance on integration, message template
              design, and best practices for customer engagement.
            </AccordionItem>
          </Accordion>
        </div>

        {/* Call-to-Action */}
        <section className="call-to-action">
        <Link to="/Contact">
          <button className="cta-button">Start Your Free Trial</button>
          <button className="cta-button">Contact Us for a Demo</button>
          <button className="cta-button">Learn More</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default WhatsApp;
