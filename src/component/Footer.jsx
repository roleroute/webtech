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
                  <li><Link to="/FrontpageBulk_SMS"> Bulk SMS</Link></li>
                  <li><Link to="/Transactional">Transactional SMS</Link></li>
                  <li><Link to="/Bulk_sms"> Promotional SMS</Link></li>
                  <li><Link to="/Voice">Voice Call</Link></li>
                  <li><Link to="/IVR">IVR</Link></li>
                  <li><Link to="/TollFree">Tollfree</Link></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-2">
              <div>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="/Digital">Digital marketing</Link></li>
                  <li><Link to="/SEO"> SEO Services</Link></li>
                  <li><Link to="/SMO">SMO Services</Link></li>
                  <li><Link to="/PPC">PPC services </Link></li>
                  <li><Link to="/ContextWritting">Content Marketing </Link></li>
                  <li><Link to="/GoogleMyBussiness">Google My Business </Link></li>

                </ul>
              </div>
            </div>


            <div className="col-lg-2">
              <div>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="Development">Development</Link></li>
                  <li><Link to="/Development">Web Development</Link></li>
                  <li><Link to="/AndroidDevelopment">App Development</Link></li>
                  <li><Link to="#">Graphic Design </Link></li>
                </ul>
              </div>
            </div>


            <div className="col-lg-2">

              <div>
                <h6 className="footer-heading text-uppercase text-white">Useful Link</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="#"> Home</Link></li>
                  <li><Link to="/About"> About us</Link></li>
                  <li><Link to="#"> Services</Link></li>
                  <li><a href="/Term&Coditions"> T&C Services</a></li>
                  <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
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
            <div className="Copyright-inner">
              <BsTelephone />
             <div>
             <h2>+91 70656 80680</h2>
             <p>Mon-sat 10:am to 12pm</p>
             </div>

            </div>
            <div className="Copyright-inner">
              <BsEnvelope />
              <div>
              <h2>info@webtechage.com</h2>
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
