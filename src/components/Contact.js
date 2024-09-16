import React from 'react';

function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <p>You can reach out to me via the following platforms:</p>
      <ul>
        <li>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
      </ul>
    </div>
  );
}

export default Contact;
