import React from 'react';
import { useNavigate } from 'react-router-dom';

const industrialImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-l6QZBRWB-3_JXvlTfcPMvmpGpTllsgnIOu33Vp1VbZyOi0guYpt4URC0qlVRQXK-2CRaHKBNZ5NQHWOoPn-uPeIPW0QI5W2jcnUx0e2Nw7m4P6I14sRqHL1yM9iMMXqF8Zq0gicrs7ba71LUbrHxAkXt84hSuAaAwvrAEQF7lzo2CB77xNHSWA6EzEFIyJMDkOAPCCRtr8YdwP4Qe6Z91Hy0BbGIvO3J_1q5VoRG675UQHJaCd4";
const soundMaskingEnvImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLyV3L3FRbNWf25S1TXKkQPinr-C1pTqhW54Lm9DD_TXcaUs6nWIbz3mDV2lo7k4tCMA3_ezeBS8BkCCLk8G5BSIFy--So2JlpwWhXdIIR2xxXQy6iQjJWcu0FglLi3pJWULhpqBTuU7b6rzDXPaGFqNWQx5aBk7GCUgGcvbu3LXAYHDMrBhGAHFgdU-WfIeVlHiWEnzlzW-pLHnU9BzZ5Ti-yHQn_hYl8GTysLcJiUqrMlw6m5CM";

export default function Services() {
  const navigate = useNavigate();

  return (
    <main className="bg-background text-on-surface">
      
      {/* Hero Section: Split Layout style */}
      <section className="flex flex-col lg:flex-row min-h-[70vh]">
        <div className="flex-1 flex flex-col justify-center px-4 md:px-margin-desktop py-20 bg-surface-container-lowest">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
              Precision Engineering for a <span className="text-primary">Global Frontier.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Leveraging decades of technical expertise to deliver high-performance industrial components, acoustic systems, and engineering consultations worldwide.
            </p>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden bg-surface-dim min-h-[400px]">
          <img 
            alt="Industrial Facility" 
            className="w-full h-full object-cover" 
            src={industrialImg} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/30 to-transparent lg:block hidden"></div>
        </div>
      </section>

      {/* Industrial Exports Section */}
      <section className="bg-surface py-24 px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Industrial Exports</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Global procurement and precision manufacturing of high-spec mechanical components for heavy industry, energy, and infrastructure projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Custom Machining</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                High-tolerance CNC machining and component fabrication designed to meet rigorous international standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-label-caps text-[10px] text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  ISO 9001:2015 CERTIFIED
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">box_add</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Global Procurement</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Strategic sourcing of critical industrial materials and specialized hardware across five continents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-label-caps text-[10px] text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  REAL-TIME LOGISTICS TRACKING
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Structural Steel</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Fabrication of heavy-duty structural steel components for large-scale infrastructure and industrial framing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-label-caps text-[10px] text-on-surface">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  ADVANCED COATING SYSTEMS
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Sound Masking Systems */}
      <section className="py-24 px-4 md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="font-label-caps text-label-caps text-primary mb-4 block">ACOUSTIC COMFORT</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Advanced Sound Masking Systems</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Our Sound Masking systems introduce a sophisticated, unobtrusive background sound designed to match the frequency of human speech, improving privacy and focus.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant text-center">
                <span className="material-symbols-outlined text-primary mb-2">corporate_fare</span>
                <p className="font-label-caps text-[10px]">OFFICE</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant text-center">
                <span className="material-symbols-outlined text-primary mb-2">medical_services</span>
                <p className="font-label-caps text-[10px]">HEALTHCARE</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant text-center">
                <span className="material-symbols-outlined text-primary mb-2">school</span>
                <p className="font-label-caps text-[10px]">EDUCATION</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px] text-white">bolt</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Productivity Boost</h4>
                  <p className="text-body-sm text-on-surface-variant">Up to 40% increase in productivity through peak noise reduction.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px] text-white">verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Enhanced Privacy</h4>
                  <p className="text-body-sm text-on-surface-variant">Critical for HR departments, legal firms, and patient exam rooms.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-[32px] overflow-hidden border-8 border-surface-container-lowest shadow-2xl">
              <img 
                alt="Sound Masking Environment" 
                className="w-full h-full object-cover" 
                src={soundMaskingEnvImg} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Consultation Section: Bold Red style */}
      <section className="bg-primary text-on-primary py-24 px-4 md:px-margin-desktop relative overflow-hidden text-white">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">Engineering Consultation</h2>
          <p className="text-2xl md:text-3xl font-bold mb-12 italic opacity-95 text-white">
            "We create engineering solutions that inspire confidence, improve performance, and contribute to sustainable business success across industries."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => navigate('/request-quote')}
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Start Inquiry
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all active:scale-95"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
