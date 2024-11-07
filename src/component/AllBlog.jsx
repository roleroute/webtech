import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdEdit } from "react-icons/md";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://webtechapi.vercel.app/blog');
        setBlogs(response.data.reverse());
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    console.log("Attempting to delete blog with ID:", blogId);
    
    try {
      await axios.delete(`https://webtechapi.vercel.app/blog/${blogId}`);
      

      setBlogs(blogs.filter(blog => blog._id !== blogId));
      alert('Blog deleted successfully!');
    } catch (error) {
      console.error("Error deleting blog:", error.response ? error.response.data : error.message); // Log error response
      alert("Error deleting blog");
    }
  };



  // Render loading or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Sample HTML content
  const sampleContent = `
    <p>
      <strong style="color: rgb(68, 68, 68);">Mobile marketing</strong>
      <span style="color: rgb(68, 68, 68);">
        &nbsp;is to promote on or with mobile phones. It consists of many activities and small things even like SMS notifications, advertisement notifications, or maybe purchasing notifications. It is somewhat similar to online marketing as marketers also need a buyer to buy services and a supplier to sell the products. We can ensure people that they are getting proper emails, notifications, SMS, MMS or various other advice...
      </span>
    </p>
  `;

  return (
    <div className="blog-container">
      <h1>All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="blog-list">
          {blogs.map(blog => (
            <div className="blog-card" key={blog._id}>
                 <img src={blog.image} alt={blog.title} className="blog-image" />
              <h2>{blog.title}</h2>
              <div 
                  className="blog-content" 
                dangerouslySetInnerHTML={{ __html: blog.content || sampleContent }} // Render HTML content
              />
             
              <div className="blog-actions">
                <button onClick={() => handleDelete(blog._id)}><MdEdit /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlog;
