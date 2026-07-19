import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDwDQlIdlF2_gjtyKrXH6U3M0j7PCp6lGCeOHUKKSQ7cxIeY2PupBzHHqRWChPEOLkj18UXU7nJc8AljQXqcc3H0kwY9dRjdsOg-mf89ej1gduMNeMrFym9ZBCV040_UvMdv4eFyuMGShQs-vko5bEzdUS7b5FW5SA4dAWEp-CMmjt13J2iAAqu2TQ0c6ULw_3DJcgJtaw0C8hyuO0gz8qy-CCdIk9tH1W_7bFDdAlUvkUVICZDXviVlbHWlkUBd8e6pA";

export default function Header() {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Inquiry', path: '/request-quote' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-surface-container-lowest sticky top-0 w-full z-50 border-b border-surface-variant shadow-sm">
      <nav className="flex justify-between items-center h-20 px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <NavLink to="/" className="flex items-center gap-4">
          <img 
            alt="NAP Infinity Logo" 
            className="h-10 w-auto object-contain" 
            src={logoUrl} 
          />
          <span className="font-headline-md text-headline-md font-bold text-on-surface">
            NAP Infinity LLP
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary border-b-2 border-primary font-bold font-label-caps text-label-caps py-1'
                  : 'text-secondary hover:text-primary transition-colors font-label-caps text-label-caps py-1'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <button 
          onClick={() => navigate('/request-quote')}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 active:scale-95 transition-all duration-150"
        >
          Request Quote
        </button>
      </nav>
    </header>
  );
}
