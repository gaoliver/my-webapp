import React, { useState, useEffect, useContext } from 'react';
import { SidebarContainer } from '../../styles/sidebar';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { ThemeContext } from 'styled-components';

import './index.scss';

const Sidebar: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const location = useLocation().hash.replace('#', '');
  const [prevPage, setPrevPage] = useState('');

  function unactiveSidebar() {
    if (title === 'dark') {
      document
        .getElementById('sidebar-container')
        ?.classList.remove('active-dark');
    } else {
      document.getElementById('sidebar-container')?.classList.remove('active');
    }
    setToggleSidebar(false);
  }
  function activeSidebar() {
    if (title === 'dark') {
      document
        .getElementById('sidebar-container')
        ?.classList.add('active-dark');
    } else {
      document.getElementById('sidebar-container')?.classList.add('active');
    }
    setToggleSidebar(true);
  }
  const onClick = () => {
    if (toggleSidebar) {
      unactiveSidebar();
    } else {
      activeSidebar();
    }
  };

  document.documentElement.onclick = function (event) {
    const sidebar = document.getElementById('sidebar-container');
    const menuBtn = document.getElementById('menu_btn');

    if (event.target === menuBtn) return;

    if (event.target !== sidebar && toggleSidebar) {
      return document.getElementById('menu')?.click();
    }
  };

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

  useEffect(() => {
    setActivePage();
  });

  return (
    <SidebarContainer id="sidebar-container">
      <input
        type="checkbox"
        id="menu"
        name="menu"
        className="menu_responsive"
        style={{ display: 'none' }}
        onClick={onClick}
      />
      <label htmlFor="menu" className="menu_responsive">
        <span id="menu_btn"></span>
      </label>
      <ul>
        <li>
          <Link id="home-menu" smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link id="about-me-menu" smooth to="#about-me">
            About
          </Link>
        </li>
        <li>
          <Link id="portfolio-menu" smooth to="#portfolio">
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
