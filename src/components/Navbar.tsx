import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="logo-text sd:font-serif" onClick={closeMenu}>
          TAZ MOHAMMAD
        </a>

        {/* Navigation Links - Desktop */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {isMenuOpen && (
            <div className="mobile-menu-header">
              <div className="close-menu">
                <span>CLOSE MENU</span>
                <button onClick={closeMenu} className="x-button">✕</button>
              </div>
            </div>
          )}
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                <span>HOME</span>
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                <span>ABOUT</span>
               
              </a>
            </li>
            <li>
              <a href="#properties" onClick={closeMenu}>
                <span>PROPERTIES</span>
            
              </a>
            </li>
            <li>
              <a href="#search" onClick={closeMenu}>
                <span>HOME SEARCH</span>
               
              </a>
            </li>
            <li>
              <a href="#communities" onClick={closeMenu}>
                <span>COMMUNITIES</span>
        
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
