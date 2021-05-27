import React, { useState, useEffect, useContext } from 'react';
import { SidebarContainer } from '../../styles/sidebar';
import { useLocation } from 'react-router-dom';
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
          <a id="home-menu" href="#home">
            <AiFillHome size={35} style={{ marginRight: 20 }} /> Home
          </a>
        </li>
        <li>
          <a id="about-me-menu" href="#about-me">
            <BsPersonSquare size={35} style={{ marginRight: 20 }} /> About
          </a>
        </li>
        <li>
          <a id="portfolio-menu" href="#portfolio">
            <MdDevices size={35} style={{ marginRight: 20 }} />Portfolio
          </a>
        </li>
        <li>
          <a id="contact-menu" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
