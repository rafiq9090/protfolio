import React, { useState } from 'react';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#home">Md Rafiqul Islam</a>
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;
