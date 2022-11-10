import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content relative bottom-0">
  <div>
    
    <p><span className='text-orange-600 font-bold'>Ghura Fira</span><br/>Your best choice for best memories</p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4 text-orange-600">
      <a href='https://www.facebook.com/'><FaFacebook></FaFacebook></a>
      <a href='https://www.whatsapp.com/'><FaWhatsapp></FaWhatsapp></a>
      <a href="https://twitter.com/i/flow/login"><FaTwitter></FaTwitter></a>
    </div>
  </div>
</footer>
    );
};

export default Footer;