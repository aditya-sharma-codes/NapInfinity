import React from 'react';
import { useNavigate } from 'react-router-dom';
import IndiaFlag from '../components/IndiaFlag';

const founderImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDQWiF-V2-Lx9u9hcITDe0g2JVIFh4dVM4qHEjaRp2SW_3X7dwmrUR5YyiQaom97B0HDH5wa1Pry80EwOh0oVF-VlBfVGYXl1AyXmrgXuu1Kd13QWbjAQDqEuTuUAgOG1ea48RI_fVyjQiy6SZUEPaQaUzpHWDeSXdpMbGcxwFrOWcbZz5CTy_7L128RlJF7ojqY132BrhpJDqGGRgxprLHvcctqiHSlSBSbg7TkmD8kyPj5kLq65t47zqF_AkhWlIPhyX2KMsuXgOCEA";

export default function About() {
  const navigate = useNavigate();

  return (
    <main className="bg-background text-on-background min-h-screen">
      
      {/* Clean Text-Only Hero Section */}
      <section className="bg-surface-container-lowest py-20 md:py-28 px-4 md:px-margin-desktop border-b border-surface-variant">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block font-label-caps">
            About Us
          </span>
          <h1 className="text-display-lg md:text-[56px] text-on-surface mb-6 leading-tight font-extrabold">
            Engineering Excellence. Innovation. <span className="text-primary">Trusted Partnerships.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            NAP Infinity is a technology-driven engineering company specializing in industrial exports, sound masking systems, and interior consultation & project execution. We are committed to delivering high-quality products and innovative solutions that enhance productivity, improve environments, and create long-term value for our clients.
          </p>
        </div>
      </section>

      {/* Founder Section: Side-by-Side */}
      <section className="py-24 px-4 md:px-margin-desktop bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-8 border-surface-container-lowest">
              <img 
                alt="Amit Prasad - Founder" 
                className="w-full h-full object-cover" 
                src={founderImg} 
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-on-primary p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-headline-sm">Amit Prasad</p>
              <p className="text-xs uppercase tracking-widest font-semibold mt-1 opacity-90">Founder &amp; Mechanical Engineer</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-headline-lg text-on-surface">The Vision Behind Infinity</h2>
            <div className="space-y-6 text-on-surface-variant">
              <p className="text-body-md leading-relaxed">
                Founded by Amit Prasad, a Mechanical Engineer with over 18 years of multidisciplinary industry experience, NAP Infinity is built on a strong foundation of technical expertise, operational excellence, and customer-centric values. His professional journey spans the automotive, modular furniture, interior fit-out, and interior consultation & project execution industries, providing a unique perspective on engineering challenges and practical business solutions. To further strengthen his management expertise, he completed an Operations Management program from IIT Delhi.
              </p>
              <p className="text-body-md leading-relaxed">
                Driven by a passion for engineering and innovation, Amit established NAP Infinity with a vision to develop world-class engineering solutions while building trusted relationships across global markets. Rooted in the <strong>Make in India <IndiaFlag className="w-4 h-2.5 inline align-middle" /></strong> initiative, the company actively promotes indigenous manufacturing by exporting high-grade industrial machinery and electrical products globally, alongside advanced Sound Masking Systems and comprehensive Interior Consultation & Project Execution.
              </p>
            </div>
            <div className="bg-surface-container p-6 rounded-lg border-l-4 border-primary">
              <p className="text-body-md italic text-on-surface font-medium leading-relaxed flex items-center gap-1.5 flex-wrap">
                "Building trusted relationships across global markets through precision engineering and Make in India <IndiaFlag className="w-4 h-2.5" /> excellence."
              </p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex items-center gap-4 shadow-sm">
              <IndiaFlag className="w-10 h-7 rounded-sm shadow-md" />
              <div>
                <h4 className="font-bold text-on-surface text-base flex items-center gap-2">Make in India Vision</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Backed by deep engineering expertise and IIT Delhi management training, NAP Infinity delivers Indian precision manufacturing to clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Narrative */}
      <section className="py-24 px-4 md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline-lg text-on-surface mb-8">Our Strategic Approach</h2>
          <div className="space-y-6 text-on-surface-variant text-body-lg max-w-3xl mx-auto leading-relaxed">
            <p>
              At NAP Infinity, we believe that every successful project begins with understanding our clients' objectives. Our approach combines technical knowledge, innovation, precision engineering, and uncompromising quality to deliver solutions tailored to each customer's requirements.
            </p>
            <p>
              Our commitment extends beyond supplying products—we strive to become a reliable long-term partner by providing dependable service, technical support, and continuous innovation. Every solution we deliver reflects our core values of Integrity, Quality, Innovation, and Customer Satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 px-4 md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-lg transition-shadow border border-outline-variant group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">gavel</span>
              <h4 className="text-headline-sm mb-2 group-hover:text-primary transition-colors">Integrity</h4>
              <p className="text-body-sm text-on-surface-variant">Honesty in every deal and transparency in every partnership.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-lg transition-shadow border border-outline-variant group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">verified</span>
              <h4 className="text-headline-sm mb-2 group-hover:text-primary transition-colors">Quality</h4>
              <p className="text-body-sm text-on-surface-variant">Precision in every detail to ensure global industrial standards.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-lg transition-shadow border border-outline-variant group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">lightbulb</span>
              <h4 className="text-headline-sm mb-2 group-hover:text-primary transition-colors">Innovation</h4>
              <p className="text-body-sm text-on-surface-variant">Creative engineering solutions that solve modern challenges.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-lg transition-shadow border border-outline-variant group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">sentiment_very_satisfied</span>
              <h4 className="text-headline-sm mb-2 group-hover:text-primary transition-colors">Satisfaction</h4>
              <p className="text-body-sm text-on-surface-variant">A relentless focus on exceeding our customers' expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Conclusion Section */}
      <section className="bg-primary text-on-primary py-24 px-4 md:px-margin-desktop relative overflow-hidden text-white">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-headline-lg mb-8 leading-tight">Our Future Outlook</h2>
          <p className="text-2xl md:text-3xl font-bold mb-12 italic opacity-95">
            "As we continue to grow, our mission remains clear: to create engineering solutions that inspire confidence, improve performance, and contribute to sustainable business success across industries."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => navigate('/services')}
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Explore Our Solutions
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
