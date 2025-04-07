import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-orange-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                Shinobi <span className="text-orange-400 group-hover:text-orange-300">World</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'text-orange-400 font-bold border-b-2 border-orange-400' 
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`nav-link transition-all duration-300 ${
                location.pathname === '/menu' 
                  ? 'text-orange-400 font-bold border-b-2 border-orange-400' 
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/register" 
              className={`nav-link transition-all duration-300 ${
                location.pathname === '/register' 
                  ? 'text-orange-400 font-bold border-b-2 border-orange-400' 
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              Register
            </Link>
            <Link 
              to="/shinobi" 
              className={`nav-link transition-all duration-300 ${
                location.pathname === '/shinobi' 
                  ? 'text-orange-400 font-bold border-b-2 border-orange-400' 
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              Shinobi
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 