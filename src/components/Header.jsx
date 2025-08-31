import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <div >
<img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/30-Alumni-Logos-to-Make-an-Authoritative-Network/graduate-school-technology-by-mypen-brandcrowd.png" className="logo" alt="Alumni Portal Logo" />
<span>Alumini portal</span></div>
        <ul className="nav-links">
          <li><Link to="/alumni">Alumni Database</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/mentoring">Mentoring</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;