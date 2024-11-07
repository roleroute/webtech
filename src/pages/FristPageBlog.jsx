import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const POSTS_PER_PAGE = 2;

const FristPageBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const push = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(posts);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://webtechapi.vercel.app/blog");
        setPosts(response.data.reverse());
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

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
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
        <div className="blog-main-box">
          {currentPosts.map((post) => (
            <div className="Blog-Name Mobile-Blog" key={post.id}>
              <img src={post.image} alt="" />
              <h1>{post.title}</h1>
              <div className="spanblog">
                <span>
                  <BsPerson /> Webtechage Pvt. Ltd.
                </span>
                <span><CiClock2 /> {formatDateTime(post.createdAt)}</span>
                <span>
                  <BiMessageRoundedDots /> {post.comments} comments
                </span>
              </div>
              <div 
                  className="blog-content" 
                dangerouslySetInnerHTML={{ __html: post.content || sampleContent }} // Render HTML content
              />
              <br />
              <div className="button1">
                <button onClick={() => push(`/Blog/${post._id}`)}>
                  Read More
                </button>
              </div>
            </div>
          ))}

          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
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
              <button>bulk sms provider</button>
              <button>bulk sms service </button>
              <button>bulk sms service in noida</button>
              <button>mobile app development agency</button>
              <button>mobile app development solution</button>
              <button>mobile application development company</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FristPageBlog;
