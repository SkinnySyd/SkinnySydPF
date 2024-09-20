import React from 'react';
import { Mail, MapPin, Download, Facebook, Twitter, Instagram, Linkedin, Github, Flag } from 'lucide-react';
import { sizeHeight } from '@mui/system';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-left">
      <div className="profile-image-outer-wrapper">
        <div className="profile-image-wrapper">
          <img src="https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726431275/perfil4_rvihx6.jpg" alt="Aditya Pratama" className="profile-image" />
        </div>   
      </div>       
    
        <div className="profile-info">
            <h1>Oussama RACHIQ</h1>
            <p>DevOps | SRE | Cloud Engineer</p>
            <div className="social-links">
                <Facebook size={18} />
                <Twitter size={18} />
                <Instagram size={18} />
                <Linkedin size={18} />
                <Github size={18} />
                <Flag size={18} />
             </div>
        </div>
      </div>

      <div className="vertical-line"></div> {/* Vertical line */}

      <div className="profile-right">
        <div className="contact-info">
          <div className="info-item">
            <span>EMAIL</span>
            <p><Mail size={14} /> rachiq.oussama.et@gmail.com</p>
          </div>
          <div className="info-item">
            <span>CV</span>
            <button className="download-btn">
              Download <Download size={14} />
            </button>
          </div>
          <div className="info-item">
            <span>LOCATION</span>
            <p><MapPin size={14} /> RABAT, MOROCCO</p>
          </div>
          <div className="info-item">
            <span>STATUS</span>
            <p>
                <img 
                    src="https://res.cloudinary.com/dsq1xkg4o/image/upload/v1726796072/edfm8xtov1u0zazlucm9.png" 
                    alt="my road to nirv..." 
                    className="status-icon" 
                />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;