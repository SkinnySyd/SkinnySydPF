import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/blog.css'; // Assuming you have a CSS file for styling

function Blog() {
  const [posts, setPosts] = useState([]);

  const getPostData = () => {
    axios
      .get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@skinnysyd')
      .then((res) => {
        console.log(res.data); // Log the full response here
        setPosts(res.data.items);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  };

  useEffect(() => {
    getPostData();
  }, []);

  const extractImageFromContent = (content) => {
    const imgMatch = content.match(/<img.*?src="(.*?)"/); // Match image src
    return imgMatch ? imgMatch[1] : null; // Return image URL or null
  };

  return (
    <div className="blog-section">
      <h1>Blog</h1>
      <div className="blog-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.guid} className="blog-card">
              {/* Display thumbnail */}
              {post.thumbnail || extractImageFromContent(post.content) ? (
                <img 
                  src={post.thumbnail || extractImageFromContent(post.content)} 
                  alt={post.title} 
                  className="blog-thumbnail" 
                />
              ) : (
                <div className="blog-thumbnail-placeholder">No Image Available</div>
              )}

              <div className="blog-content">
                <h3>{post.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: post.contentSnippet }} />
              </div>

              <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more">
                <i className="fas fa-book-open read-more-icon"></i>
                <span>Read more</span>
              </a>
            </div>
          ))
        ) : (
          <p>Loading blog posts...</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
