import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../navbar/navbar.css";
import Logo from "../../../public/Logo.png";
import { IoIosMail } from "react-icons/io";
import { BsPhone } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const AdminId = localStorage.getItem("AdminId");

  const LogOut = () => {
    localStorage.removeItem("AdminId");
    if (!AdminId) {
      navigate("/adminLogin");
    }
    window.location.reload();
  };

  return (
    <>
      <div className="topnav">
        <div className="top-nav-inner">
          <p>
            {" "}
            <IoIosMail />
            info@webtechage.com{" "}
          </p>

          <p>
            <BsPhone />
            +91-70656 80680
          </p>
        </div>
        <div className="top-nav-inner top-nav-inner2">
          <div className="icons-box">
            {" "}
            <FaTwitter />
          </div>
          <div className="icons-box">
            {" "}
            <FaFacebookF />
          </div>
          <div className="icons-box">
            {" "}
            <IoLogoInstagram />
          </div>
          <div className="icons-box">
            {" "}
            <IoLogoPinterest />
          </div>
          <div className="icons-box">
            {" "}
            <FaLinkedinIn />
          </div>
          <div className="icons-box">
            {" "}
            <FaYoutube />
          </div>
        </div>
      </div>
      <header>
        <nav>
          <div className="logo">
            <Link to="/" className="dropdown">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className="main-ul">
            <li>
              <Link to="/" className="dropdown">
                Home
              </Link>
            </li>
            <li>
              <Link to="/FrontpageBulk_SMS" className="dropdown">
                Bulk SMS
              </Link>

              <ul className="menu-dropdown menu-dropdown1">
                <li>
                  <Link to="/Bulk_sms">Promotional Bulk SMS</Link>
                </li>
                <li>
                  <Link to="Transactional">Transactional Bulk SMS</Link>
                </li>
                <li>
                  <Link to="/WhatsApp">
                    WhatsApp Service
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/Voice">Voice Call</Link>

              <ul className="menu-dropdown menu-dropdown2">
                <li>
                  <Link to="/OwnVoiceCall">By Own Number</Link>
                </li>
                <li>
                  <Link to="/Newfile">BY Server Number</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/IVR">IVR</Link>
              <ul className="menu-dropdown menu-dropdown2">
                <li>
                  <Link to="/TollIVR">IVR Service</Link>
                </li>
                <li>
                  <Link to="/TollFreeIVR">Toll Free</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/Development">Development</Link>
              <ul className="menu-dropdown menu-dropdown2">
                <li>
                  <Link to="/AndroidDevelopment">Android Application</Link>
                </li>
                <li>
                  <Link to="/Development">Website Application</Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/Digital">Digital Marketing</Link>
              <ul className="menu-dropdown menu-dropdown2">
                <li>
                  <Link to="/SEO">SEO Services</Link>
                </li>
                <li>
                  <Link to="/SMO">SMO Services</Link>
                </li>
                <li>
                  <Link to="/PPCService">PPC Services</Link>
                </li>
                <li>
                  <Link to="/ContextWritting">Content Marketing</Link>
                </li>
                <li>
                  <Link to="/GoogleMYBussiness">Google My Business</Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link>Resource</Link>
              <ul className="menu-dropdown menu-dropdown2">
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/FristPageBlog">Blog</Link>
                </li>
              </ul>
            </li>

            {AdminId && (
              <li className="dropdown">
                <Link>Admin</Link>
                <ul className="menu-dropdown menu-dropdown2">
                  <li>
                    <Link to="/create-blog">Create Blog</Link>
                  </li>
                  <li>
                    <Link to="/allBlog">All Blogs</Link>
                  </li>
                  <li>
                    <Link to="/leads">Leads</Link>
                  </li>
                  <li>
                    <Link onClick={LogOut}>LogOut</Link>
                  </li>
                </ul>
              </li>
            )}

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src="https://www.webtechage.com/assets/Logo-BLXbwxS2.png"
              width={80}
              alt=""
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" >
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bulk SMS
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/FrontpageBulk_SMS">
                      Bulk SMS
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Bulk_sms">
                      Promotional Bulk SMS
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/WhatsApp">
                      WhatsApp Service
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Transactional">
                      Transactional Bulk SMS
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Voice Call
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/Voice">
                      Voice Call
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/OwnVoiceCall">
                      By Own Number
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Newfile">
                      By Service Number
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  IVR
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/IVR">
                      IVR
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/TollIVR">
                      IVR Service
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/TollFreeIVR">
                      Tool Free
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Development
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/AndroidDevelopment">
                      Android Application
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Development">
                      Website Application
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Digital Marketing
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/Digital">
                      Digital Marketingvices
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/SEO">
                      SEO Services
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/SMO">
                      SMO Services
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/PPCService">
                      PPC Services
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to="/ContextWritting">
                      Content Marketing
                    </Link>
                  </li>

                  <li>
                    <Link class="dropdown-item" to="/GoogleMYBussiness">
                      Google My Business
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resource
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/About">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/FristPageBlog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
