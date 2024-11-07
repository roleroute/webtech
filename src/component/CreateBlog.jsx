import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill CSS import
import axios from "axios";

const FormContainer = styled.div`
  max-width: 60%;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  font-size: 28px;
  font-weight: bold;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #666;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border 0.3s;

    &:focus {
      border: 1px solid #007bff;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const ImagePreview = styled.img`
  width: 400px;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-top: 10px;
`;

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !category.trim()) {
      alert("Title and Category are required.");
      return;
    }
    const blogData = {
      title,
      content,
      image,
      category,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    setLoading(true);
    try {
      const response = await axios.post("https://webtechapi.vercel.app/blog", blogData);
      console.log("Blog created:", response.data);
      setTitle("");
      setContent("");
      setImage(null);
      setCategory("");
      setTags("");
      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
      setError("An error occurred while creating the blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fjvuh6il");

    setLoading(true);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dxquikycq/upload`,
        formData
      );
      if (response.data && response.data.secure_url) {
        setImage(response.data.secure_url);
        alert("File uploaded successfully!");
      } else {
        setError("File upload failed. Please try again.");
      }
    } catch (error) {
      setError(
        "An error occurred while uploading the file. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Title>Create Blog</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Content:</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            required
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                ["bold", "italic", "underline", "blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
              ],
            }}
            style={{ height: "200px" }} // Editor height
          />
        </FormGroup>
        <FormGroup>
          <label>Image:</label>
          <input type="file" onChange={handleFileChange} required />
          {image && <ImagePreview src={image} alt="Uploaded preview" />}
        </FormGroup>
        <FormGroup>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Tags (comma separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </FormGroup>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Blog"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CreateBlog;
