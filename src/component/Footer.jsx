import React from 'react'
import { Link } from 'react-router-dom'
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";



const Footer = () => {
  return (
    <>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div>
                <h6 className="footer-heading text-uppercase text-white"> Our Services </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li><a href="/FrontpageBulk_SMS"> Bulk SMS</a></li>
                  <li><a href="/Transactional">Transactional SMS</a></li>
                  <li><a href="/Bulk_sms"> Promotional SMS</a></li>
                  <li><a href="/Voice">Voice Call</a></li>
                  <li><a href="/IVR">IVR</a></li>
                  <li><a href="/TollFreeIVR">Tollfree</a></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-2">
              <div>
                <ul className="list-unstyled footer-link mt-4">
                  <li><a href="/Digital">Digital marketing</a></li>
                  <li><a href="/SEO"> SEO Services</a></li>
                  <li><a href ="/SMO">SMO Services</a></li>
                  <li><a href="/PPC">PPC services </a></li>
                  <li><a href="/ContextWritting">Content Marketing </a></li>
                  <li><a href="/GoogleMyBussiness">Google My Business </a></li>

                </ul>
              </div>
            </div>


            <div className="col-lg-2">
              <div>
                <ul className="list-unstyled footer-link mt-4">
                  <li><a href="Development">Development</a></li>
                  <li><a href="/Development">Web Development</a></li>
                  <li><a href="/AndroidDevelopment">App Development</a></li>
                  <li><a href ="#">Graphic Design </a></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-2">

              <div>
                <h6 className="footer-heading text-uppercase text-white">Useful Link</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="#"> Home</Link></li>
                  <li><a href="/About"> About us</a></li>
                  <li><a href="#"> Services</a></li>
                  <li><a href="/Term&Coditions"> T&C Services</a></li>
                  <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                  <li><a href="/RefundPolicy">Refund Policy</a></li>
            
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div>
                <h6 className="footer-heading text-uppercase text-white">Technologies</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="#">
                    PHP</Link></li>
                  <li><Link to="#"> HTML</Link></li>
                  <li><Link to="#"> Javascript</Link></li>
                  <li><Link to="#">CSS</Link></li>
                  <li><Link to="#">Angular</Link></li>
                  <li><Link to="#">
                    Database</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="#">
                    Python</Link></li>
                  <li><Link to="#"> C#</Link></li>
                  <li><Link to="#"> Java</Link></li>
                  <li><Link to="#">
                    Kotlin</Link></li>
                  <li><Link to="#">
                    React</Link></li>
                </ul>
              </div>
            </div>


          </div>
        </div>


        <div className="Copyright">
          <div className="Copyright-outter">
            <div className="Copyright-inner Copyright2">
              <BsTelephone />
             <div>
             <h2>
             <a href="tel:+91 70656 80680">+91 70656 80680</a></h2>
             <p>Mon-sat 10:am to 12pm</p>
             </div>

            </div>
            <div className="Copyright-inner Copyright2">
              <BsEnvelope />
              <div>
              <h2>
                <a href="tel:info@webtechage.com">info@webtechage.com</a></h2>
              <p>Emial Us</p>
              </div>
            </div>
            <div className="Copyright-inner">
            <IoLocationOutline />
            <div>
             <p>B - 113, B Block, Sector 64,Noida, <br /> Uttar Pradesh, India, 201301</p>
             </div>

           </div>
         
          </div>
        
           
          <div className="text-center mt-5">
          <p className="footer-alt mb-0 f-14">© Copyright Webtech . All Rights ReservedDesigned by Webtech Age Pvt. Ltd.</p>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
