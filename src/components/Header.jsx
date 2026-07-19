import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDwDQlIdlF2_gjtyKrXH6U3M0j7PCp6lGCeOHUKKSQ7cxIeY2PupBzHHqRWChPEOLkj18UXU7nJc8AljQXqcc3H0kwY9dRjdsOg-mf89ej1gduMNeMrFym9ZBCV040_UvMdv4eFyuMGShQs-vko5bEzdUS7b5FW5SA4dAWEp-CMmjt13J2iAAqu2TQ0c6ULw_3DJcgJtaw0C8hyuO0gz8qy-CCdIk9tH1W_7bFDdAlUvkUVICZDXviVlbHWlkUBd8e6pA";

export default function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Request Quote', path: '/request-quote' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-surface-container-lowest/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-surface-variant shadow-sm transition-all">
      <nav className="flex justify-between items-center h-20 px-4 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Logo & Name */}
        <NavLink 
          to="/" 
          className="flex items-center gap-3 md:gap-4 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img 
            alt="NAP Infinity Logo" 
            className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200" 
            src={logoUrl} 
          />
          <div className="flex flex-col">
            <span className="font-headline text-lg md:text-xl font-extrabold tracking-tight text-on-surface leading-none">
              NAP <span className="text-primary">INFINITY</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-secondary mt-0.5 hidden sm:inline-block">
              Precision Engineering
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-label-caps text-label-caps py-1 transition-colors relative ${
                  isActive
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full'
                    : 'text-secondary hover:text-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => navigate('/request-quote')}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 active:scale-95 transition-all duration-150 flex items-center gap-2 shadow-md shadow-primary/20"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Sandwich Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-on-surface" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sandwich Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-variant bg-surface-container-lowest/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50 text-secondary" />
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-surface-variant/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/request-quote');
              }}
              className="w-full bg-primary text-on-primary py-3 px-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/25 active:scale-98 transition-all"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
