import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const heroImg = "/hero_engineering_facility.png";
const acousticImg = "/sound_masking_office_interior.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans selection:bg-primary selection:text-white">
      
      {/* High-Impact Sharp Hero Section */}
      <section className="relative h-[90vh] min-h-[650px] flex items-center overflow-hidden pt-12 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Ultra-Sharp High-Tech Industrial Engineering Facility" 
            className="w-full h-full object-cover opacity-85 scale-105 transition-transform duration-1000" 
            src={heroImg} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-white bg-primary rounded-full shadow-lg shadow-primary/30 font-label-caps">
              ESTABLISHED EXCELLENCE
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
              Engineering Solutions That <span className="text-primary underline decoration-primary/40 underline-offset-8">Drive Performance</span> &amp; Build Trust
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-body-lg">
              Introducing NAP Infinity's excellence in high-precision engineering, industrial exports, and interior consultation & project execution. We bridge the gap between complex challenges and sustainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => navigate('/request-quote')}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-primary/30 group"
              >
                Request a Quote
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Bar */}
      <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="p-8 text-center border-r border-slate-100 dark:border-slate-800">
            <div className="text-4xl font-display font-extrabold text-primary mb-1">18+</div>
            <div className="text-xs uppercase tracking-widest font-semibold text-slate-500">Years Experience</div>
          </div>
          <div className="p-8 text-center border-r border-slate-100 dark:border-slate-800">
            <div className="text-4xl font-display font-extrabold text-primary mb-1">500+</div>
            <div className="text-xs uppercase tracking-widest font-semibold text-slate-500">Global Clients</div>
          </div>
          <div className="p-8 text-center border-r border-slate-100 dark:border-slate-800">
            <div className="text-4xl font-display font-extrabold text-primary mb-1">100%</div>
            <div className="text-xs uppercase tracking-widest font-semibold text-slate-500">Quality Assured</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl font-display font-extrabold text-primary mb-1">24/7</div>
            <div className="text-xs uppercase tracking-widest font-semibold text-slate-500">Reliable Support</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  alt="Modern office interior featuring sound masking technology" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]" 
                  src={acousticImg} 
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Precision &amp; Partnership</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 dark:text-white leading-tight">Driving Industrial Innovation with Legacy &amp; Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                At NAP Infinity, we specialize in delivering world-class engineering solutions. Our legacy is built on nearly two decades of precision manufacturing and strategic global partnerships.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-semibold">Technology Driven</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-semibold">Engineering Excellence</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-semibold">Global Exports</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-semibold">Customer Focus</span>
                </li>
              </ul>
              <Link 
                to="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary rounded-xl font-bold transition-all group"
              >
                Learn More About Us
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-display font-bold dark:text-white mb-6">Premium Engineering Services</h3>
            <p className="text-slate-600 dark:text-slate-400">Leveraging deep technical expertise to provide tailored solutions for complex industrial environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-50 dark:bg-red-950/30 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">public</span>
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 dark:text-white">Industrial Exports</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Seamless global supply chain management for industrial components and heavy machinery.</p>
              <ul className="space-y-3 mb-8 text-sm font-medium text-slate-500">
                <li className="flex items-center gap-2">∙ Logistics Management</li>
                <li className="flex items-center gap-2">∙ Strategic Sourcing</li>
                <li className="flex items-center gap-2">∙ Regulatory Compliance</li>
              </ul>
            </div>
            <div className="group bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-50 dark:bg-red-950/30 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">graphic_eq</span>
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 dark:text-white">Sound Masking</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Innovative systems designed to enhance workplace privacy and focus through sound masking technology.</p>
              <ul className="space-y-3 mb-8 text-sm font-medium text-slate-500">
                <li className="flex items-center gap-2">∙ Office Privacy</li>
                <li className="flex items-center gap-2">∙ Healthcare Silence</li>
                <li className="flex items-center gap-2">∙ Custom Installation</li>
              </ul>
            </div>
            <div className="group bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-50 dark:bg-red-950/30 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">architecture</span>
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 dark:text-white">Interior Consultation & Project Execution</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Comprehensive design consultation, workspace planning, and seamless project execution for modern commercial spaces.</p>
              <ul className="space-y-3 mb-8 text-sm font-medium text-slate-500">
                <li className="flex items-center gap-2">∙ Workspace Planning</li>
                <li className="flex items-center gap-2">∙ Design Consultation</li>
                <li className="flex items-center gap-2">∙ End-to-End Execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The NAP Infinity Edge</h2>
              <h3 className="text-4xl font-display font-bold dark:text-white">Why Global Leaders Trust Us</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">We combine decades of heritage with cutting-edge engineering processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">history</span>
              <div>
                <h5 className="font-bold mb-2 text-lg dark:text-white">18+ Years Experience</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Deeply rooted industry knowledge gathered over nearly two decades.</p>
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">verified</span>
              <div>
                <h5 className="font-bold mb-2 text-lg dark:text-white">Quality Assurance</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Rigorous multi-stage testing ensuring every component meets global standards.</p>
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
              <div>
                <h5 className="font-bold mb-2 text-lg dark:text-white">Innovative Solutions</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Constant R&amp;D to stay ahead of evolving engineering challenges.</p>
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
              <div>
                <h5 className="font-bold mb-2 text-lg dark:text-white">Technical Expertise</h5>
                <p className="text-sm text-slate-500 leading-relaxed">A team of specialized engineers with diverse industrial backgrounds.</p>
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
              <div>
                <h5 className="font-bold mb-2 text-lg dark:text-white">Reliable Support</h5>
                <p className="text-sm text-slate-500 leading-relaxed">End-to-end technical assistance from consultation to maintenance.</p>
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
              <div>
                <h5 className="font-bold mb-2 text-lg dark:text-white">Global Reach</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Seamless export capabilities serving major industrial hubs worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process Workflow */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Workflow</h2>
            <h3 className="text-4xl font-display font-bold dark:text-white">Our Proven Engineering Process</h3>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center relative group">
                <div className="w-12 h-12 bg-primary text-white font-bold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">1</div>
                <h5 className="font-bold mb-3 dark:text-white text-lg">Requirement Analysis</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Deep dive into client needs and technical constraints.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center relative group">
                <div className="w-12 h-12 bg-primary text-white font-bold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">2</div>
                <h5 className="font-bold mb-3 dark:text-white text-lg">Strategic Planning</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Custom solution design and resource allocation.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center relative group">
                <div className="w-12 h-12 bg-primary text-white font-bold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">3</div>
                <h5 className="font-bold mb-3 dark:text-white text-lg">Quality Inspection</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Rigorous testing phases to ensure zero-defect output.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center relative group">
                <div className="w-12 h-12 bg-primary text-white font-bold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">4</div>
                <h5 className="font-bold mb-3 dark:text-white text-lg">Ongoing Support</h5>
                <p className="text-sm text-slate-500 leading-relaxed">Long-term maintenance and technical partnership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Elevate Your Engineering Standards?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Consult with our expert engineers today and discover how NAP Infinity can optimize your industrial performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigate('/request-quote')}
                className="px-10 py-4 bg-white text-primary font-extrabold rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                Schedule Consultation
              </button>
              <Link 
                to="/contact"
                className="px-10 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 font-bold rounded-xl transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
