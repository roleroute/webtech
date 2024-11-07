import React, { useState } from 'react';
import styled from 'styled-components';



const UpdateBlog = ({ blog }) => {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Blog updated:', { title, content });
  };

  return (
    <UpdateContainer>
      <Title>Update Blog</Title>
      <form onSubmit={handleUpdate}>
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
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="5"
          />
        </FormGroup>
        <SubmitButton type="submit">Update Blog</SubmitButton>
      </form>
    </UpdateContainer>
  );
};

export default UpdateBlog;
