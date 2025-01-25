
import React from 'react';
import "./icons.css"
import { FaGithub, FaTiktok, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const IconLink = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {React.createElement(icon, { size: 24, color: 'white' })}
    </a>
  );
};

const Icons = () => {
  return (
    <div className="social-media-links">
      <IconLink icon={FaGithub} link="https://github.com" />
      <IconLink icon={FaTiktok} link="https://www.tiktok.com" />
      <IconLink icon={FaInstagram} link="https://www.instagram.com" />
      <IconLink icon={FaLinkedin} link="https://www.linkedin.com" />
      <IconLink icon={FaYoutube} link="https://www.youtube.com" />
      <IconLink icon={FaTwitter} link="https://www.twitter.com" />
    </div>
  );
};

export default Icons;