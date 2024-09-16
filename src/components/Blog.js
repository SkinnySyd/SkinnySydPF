import React from 'react';

function Blog() {
  return (
    <div className="blog-section">
      <h1>Blog</h1>
      <div className="blog-post">
        <h3>Post 1: Understanding Kubernetes</h3>
        <p>An in-depth look at Kubernetes architecture and how it can help DevOps teams scale applications.</p>
      </div>
      <div className="blog-post">
        <h3>Post 2: CI/CD Pipelines in Jenkins</h3>
        <p>A guide to building a CI/CD pipeline in Jenkins for seamless application delivery.</p>
      </div>
    </div>
  );
}

export default Blog;
