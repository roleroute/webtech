import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { BiMessageRoundedDots } from "react-icons/bi";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/blogDetails/${id}`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}`;
  };

  return (
    <div>
      <div className="contact-page">
        <div className="contact-page-banner">
          <Link to="#">
            Home / <span> Blog</span>
          </Link>
          <h4> Blog</h4>
        </div>
      </div>
      <div className="Blog-Marketing">
        <div className="Blog-Name">
          <img src={blogs.image} alt="" />
          <h1>{blogs.title}</h1>
          <div className="spanblog">
            {" "}
            <span>
              <BsPerson /> Webtechage Pvt. Ltd.
            </span>
            <span>
              <CiClock2 />
              {formatDateTime(blogs.createdAt)}
            </span>
            <span>
              <BiMessageRoundedDots />
              12 comment
            </span>
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogs.content || "NaN" }} // Render HTML content
          />
        </div>
        <div className="Blog-Name">
          <h2>Search</h2>

          <div class="sidebar-item search-form">
            <form action="" method="post">
              <input type="text" name="search" fdprocessedid="ahrhn" />
              <button type="submit" name="searc" fdprocessedid="tes0c">
                Search
              </button>
            </form>
            <h2>Categories</h2>
            <ul>
              <li>Android App Development</li>
              <li>Bulk SMS</li>
              <li>Digital Marketing Service</li>
              <li>ivr service</li>
              <li>Pay Per Click</li>
              <li>Promotional SMS</li>
              <li>Search Engine Optimization</li>
              <li>Social Media Optimization </li>
              <li>Toll-free number</li>
              <li>Transactional SMS</li>
              <li>voice call Service</li>
              <li>Web Development</li>
            </ul>
            <h2>Recent Posts</h2>
            <div className="Recent-blog">
              <img
                src="https://webtechsolution.co/application/views/webtech/images/625e4776d1dbb.png"
                alt=""
              />
              <div className="Recent-content">
                <p>
                  How Mobile Marketing can be Made Effective With Bulk SMS
                  Service in India
                </p>
              </div>
            </div>
            <div className="Recent-blog">
              <img
                src="https://webtechsolution.co/application/views/webtech/images/62568e116a806.png"
                alt=""
              />
              <div className="Recent-content">
                <p>
                  Improve your IVR System by Taking Help from Best IVR Service
                  Provider
                </p>
              </div>
            </div>
            <div className="Recent-blog">
              <img
                src="https://webtechsolution.co/application/views/webtech/images/625675c4da916.png"
                alt=""
              />
              <div className="Recent-content">
                <p>
                  Learn How to Use Promotional SMS Service for Growth of
                  business
                </p>
              </div>
            </div>
            <div className="Recent-blog">
              <img
                src="https://webtechsolution.co/application/views/webtech/images/62556c67a7095.jpg"
                alt=""
              />
              <div className="Recent-content">
                <p>
                  Why Bulk Voice Call Service Is a Perfect Tool For Advertising
                  and Promotion
                </p>
              </div>
            </div>
            <div className="Recent-blog">
              <img
                src="https://webtechsolution.co/application/views/webtech/images/625425cca8764.jpg"
                alt=""
              />
              <div className="Recent-content">
                <p>
                  Few Promotional SMS Marketing Tactics to follow for ECommerce
                  Business
                </p>
              </div>
            </div>
            <h2>Tags</h2>

            <div className="tag-btns">
              <button>ivr system</button>
              <button>ivr service provider</button>
              <button>ivr service</button>
              <button>ivr service provider in noida</button>
              <button>IVR system provider</button>
              <button>IVR Toll Free Number Provider</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
