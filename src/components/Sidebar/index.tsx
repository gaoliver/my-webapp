import React, { useState } from 'react';
import { SidebarContainer } from '../../styles/sidebar';

import './index.scss';

const Sidebar: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const onClick = () => {
    if (toggleSidebar) {
      document.getElementById('sidebar-container')?.classList.remove('active');
      setToggleSidebar(false);
    } else {
      document.getElementById('sidebar-container')?.classList.add('active');
      setToggleSidebar(true);
    }
  };
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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
