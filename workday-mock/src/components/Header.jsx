import React from 'react';
import { Menu, Search, Bell, HelpCircle, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle">
          <Menu size={20} />
          <span>MENU</span>
        </button>
        <div className="logo">
          <span>EMBL</span>
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-container">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      
      <div className="header-right">
        <button className="icon-button">
          <Bell size={20} />
          <span className="notification-badge">1</span>
        </button>
        <button className="icon-button">
          <HelpCircle size={20} />
        </button>
        <button className="icon-button profile-button">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;