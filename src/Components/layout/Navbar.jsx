import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import Button from '../shared/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-onyx/90 backdrop-blur-md border-b border-onyx-border shadow-lg shadow-black/20 py-3'
            : 'bg-onyx/70 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg py-1"
            >
              <img
                src={logoImg}
                alt="BrandAlkemy Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-poppins font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                  Brand<span className="text-amber">Alkemy</span>
                </span>
                <span className="hidden sm:block text-[9px] font-mono tracking-widest text-neutral-400 uppercase -mt-0.5">
                  The Art of Brand Transformation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 font-poppins font-semibold text-sm tracking-wide transition-colors duration-200 group ${
                      isActive ? 'text-amber' : 'text-neutral-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {/* Amber animated underline on hover / active */}
                      <span
                        className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-amber transition-all duration-300 rounded-full ${
                          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTA (Always Visible) */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex shadow-amber-glow font-bold"
              >
                Start Your Transformation
              </Button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg bg-onyx-light border border-onyx-border text-neutral-300 hover:text-amber focus:outline-none focus:ring-2 focus:ring-amber"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
