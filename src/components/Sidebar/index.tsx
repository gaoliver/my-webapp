import React, { useState, useEffect, useContext } from 'react';
import { SidebarContainer } from '../../styles/sidebar';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { ThemeContext } from 'styled-components';
import { AiFillHome, BsPersonSquare, MdDevices } from 'react-icons/all';

import './index.scss';

const Sidebar: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const onClick = () => {
    if (toggleSidebar) {
      if (title === 'dark') {
        document
          .getElementById('sidebar-container')
          ?.classList.remove('active-dark');
      } else {
        document
          .getElementById('sidebar-container')
          ?.classList.remove('active');
      }
      setToggleSidebar(false);
    } else {
      if (title === 'dark') {
        document
          .getElementById('sidebar-container')
          ?.classList.add('active-dark');
      } else {
        document.getElementById('sidebar-container')?.classList.add('active');
      }
      setToggleSidebar(true);
    }
  };

  useEffect(() => {
    setActivePage();
  });

  // Active page effect
  const location = useLocation().hash.replace('#', '');
  const [prevPage, setPrevPage] = useState('');

  function setActivePage() {
    if (location === '') {
      document
        .getElementById(prevPage + '-menu')
        ?.classList.remove('active-page');
      document.getElementById('home-menu')?.classList.add('active-page');
      setPrevPage('');
    } else if (prevPage !== '') {
      document
        .getElementById(prevPage + '-menu')
        ?.classList.remove('active-page');
      document.getElementById(location + '-menu')?.classList.add('active-page');
      setPrevPage(location);
    } else {
      document.getElementById('home-menu')?.classList.remove('active-page');
      document.getElementById(location + '-menu')?.classList.add('active-page');
      setPrevPage(location);
    }
  }
  return (
    <SidebarContainer id="sidebar-container">
      {/* Responsive menu */}
      <input
        type="checkbox"
        id="menu"
        style={{ display: 'none' }}
        onClick={onClick}
      />
      <label htmlFor="menu" className="menu_responsive">
        <span></span>
      </label>
      {/* Menu */}
      <ul>
        <li>
          <Link id="home-menu" smooth to="#home">
            <AiFillHome size={35} style={{ marginRight: 20 }} /> Home
          </Link>
        </li>
        <li>
          <Link id="about-me-menu" smooth to="#about-me">
            <BsPersonSquare size={35} style={{ marginRight: 20 }} /> About
          </Link>
        </li>
        <li>
          <Link id="portfolio-menu" smooth to="#portfolio">
            <MdDevices size={35} style={{ marginRight: 20 }} />
            Portfolio
          </Link>
        </li>
        <li>
          <Link id="contact-menu" smooth to="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
