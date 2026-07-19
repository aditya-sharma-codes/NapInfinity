import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-inverse-surface border-t border-surface-variant w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-headline-sm text-headline-sm font-black text-on-surface dark:text-inverse-on-surface">
              NAP Infinity
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-dim mb-6">
            Engineering precision, industrial exports, and advanced acoustic solutions for a global market.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">language</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="mailto:info@napinfinity.com">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface dark:text-inverse-on-surface mb-6">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/">Home</Link></li>
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/about">About Us</Link></li>
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/services">Services</Link></li>
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/request-quote">Inquiry</Link></li>
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface dark:text-inverse-on-surface mb-6">
            Core Services
          </h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/services">Industrial Exports</Link></li>
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/services">Sound Masking</Link></li>
            <li><Link className="text-on-surface-variant dark:text-surface-dim hover:underline hover:text-primary transition-colors font-body-sm text-body-sm" to="/services">Acoustic Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface dark:text-inverse-on-surface mb-6">
            Contact Us
          </h4>
          <div className="space-y-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-dim">
                Office No- 702, Building No-9, M-Avenue, Rustomjee Evershine Global City, Near Yazoo Park, Virar(West), Mumbai, Maharashtra-401303
              </p>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-dim">
                info@napinfinity.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-surface-variant dark:border-on-secondary-fixed-variant px-4 md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-dim">
          © 2024 NAP Infinity. Engineering Precision. Global Excellence.
        </p>
        <div className="flex gap-8">
          <a className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-dim hover:text-primary" href="#">Privacy Policy</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-dim hover:text-primary" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
