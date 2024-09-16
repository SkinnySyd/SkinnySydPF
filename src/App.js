import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { User, FileText, Briefcase, BookOpen, Mail, MapPin, Download, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

// Import your component files
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ProfileCard from './components/ProfileCard';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'About', icon: User },
    { name: 'Resume', icon: FileText },
    { name: 'Portfolio', icon: Briefcase },
    { name: 'Blog', icon: BookOpen },
    { name: 'Contact', icon: Mail },
  ];

  return (
    <nav className="sidebar">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.name === 'About' ? '/' : `/${tab.name.toLowerCase()}`}
          className={`nav-item ${activeTab === tab.name.toLowerCase() ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.name.toLowerCase())}
        >
          <tab.icon size={20} />
          <span>{tab.name}</span>
        </Link>
      ))}
    </nav>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container">
      <ProfileCard />
      <div className="main-content">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;