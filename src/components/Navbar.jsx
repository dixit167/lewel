


import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import logo from "../assets/logo.jpg"

const Navbar = () => {
  const navRef = useRef(null);
  const brandRef = useRef(null);
  const linkRefs = useRef([]);
  const togglerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;

    // Navbar entrance
    gsap.fromTo(nav,
      { y: -100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'bounce.out' }
    );

    // Brand animation
    gsap.fromTo(brandRef.current,
      { x: -150, rotation: -45, opacity: 0 },
      { x: 0, rotation: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'back.out(1.7)' }
    );

    // Toggler animation
    gsap.fromTo(togglerRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, delay: 1.2, ease: 'elastic.out(1, 0.3)' }
    );

    // Link animation
    gsap.fromTo(
      linkRefs.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 1,
        ease: 'power3.out'
      }
    );

    // Scroll-based background animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bgOpacity = scrollY > 100 ? 0.98 : 0.95;
      gsap.to(nav, {
        backgroundColor: `rgba(26, 26, 26, ${bgOpacity})`,
        boxShadow: scrollY > 100 ? '0 8px 20px rgba(255, 215, 0, 0.2)' : '0 4px 12px rgba(0,0,0,0.2)',
        duration: 0.3,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    color: '#ddd',
    fontWeight: 500,
    transition: 'all 0.5s ease-in-out',
  };

  const hoverStyle = {
    color: 'gold',
    transform: 'scale(1.1)',
    textShadow: '0 0 5px #ffd700, 0 0 10px #fff',
    transition: 'all 0.5s ease-in-out',
  };

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="container">
      <Link
          ref={brandRef}
          to="/"
          className="navbar-brand"
          style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: 'gold',
            transition: 'transform 0.3s ease',
          }}
        >
          ✨ LUXE JEWELS ✨
        </Link>


        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/products', label: 'Collections' },
              { path: '/testimonials', label: 'Reviews' },
              { path: '/contact', label: 'Contact' },
              { path: '/login', label: 'Account' },
              { path: '/cart', label: 'Cart (0)' },
            ].map((item, index) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  ref={(el) => (linkRefs.current[index] = el)}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  style={{
                    ...navLinkStyle,
                    ...(location.pathname === item.path ? { color: 'gold', borderBottom: '2px solid gold' } : {}),
                  }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, hoverStyle);
                    setTimeout(() => {
                      if (e.target) {
                        Object.assign(e.target.style, navLinkStyle);
                        if (location.pathname === item.path) {
                          e.target.style.color = 'gold';
                          e.target.style.borderBottom = '2px solid gold';
                        }
                      }
                    }, 4000);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, navLinkStyle);
                    if (location.pathname === item.path) {
                      e.target.style.color = 'gold';
                      e.target.style.borderBottom = '2px solid gold';
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







