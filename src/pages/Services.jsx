import React from 'react';
import { useNavigate } from 'react-router-dom';
import acousticHeroImg from '../assets/acoustic_hero.png';
import interiorServiceImg from '../assets/interior_service.png';
import soundMaskingDiagramImg from '../assets/sound_masking_diagram.jpg';
import IndiaFlag from '../components/IndiaFlag';

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
              Delivering innovative engineering solutions through Made in India <IndiaFlag className="w-4 h-2.5 inline align-middle" /> Sound Masking Systems, high-performance industrial machinery and components, and comprehensive interior consultation and project execution. Leveraging nearly two decades of technical expertise, we serve clients with precision, quality, and reliability across global markets.
            </p>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden bg-surface-dim min-h-[400px]">
          <img 
            alt="Sound and Acoustics" 
            className="w-full h-full object-cover" 
            src={acousticHeroImg} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/30 to-transparent lg:block hidden"></div>
        </div>
      </section>

      {/* Sound Masking Systems */}
      <section className="py-24 px-4 md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4 border border-primary/20">
              <IndiaFlag className="w-4 h-2.5" /> MAKE IN INDIA INITIATIVE
            </div>
            <span className="font-label-caps text-label-caps text-primary mb-2 block font-bold">SOUND MASKING &amp; PRIVACY</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Advanced Sound Masking Systems</h2>
            <div className="space-y-6 text-on-surface-variant font-body-md leading-relaxed mb-8">
              <p>
                At NAP Infinity, we design and manufacture advanced Made in India <IndiaFlag className="w-4 h-2.5 inline align-middle" /> sound masking systems that enhance speech privacy, improve workplace comfort, and increase productivity. Our intelligent sound masking technology introduces a subtle, unobtrusive background sound precisely tuned to the frequency of human speech, making conversations less intelligible while maintaining a comfortable acoustic environment.
              </p>
              <p>
                Powered by real-time adaptive technology, our system continuously monitors ambient noise levels and automatically adjusts the masking sound to ensure consistent performance throughout the day. This dynamic approach delivers superior privacy, minimizes distractions, and creates focused, productive workspaces across offices, healthcare facilities, financial institutions, government organizations, and other commercial environments.
              </p>
            </div>
            
            <h4 className="font-bold text-on-surface text-lg mb-4">Key Benefits</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Real-time adaptive sound masking technology</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Enhanced speech privacy and confidentiality</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Improved focus and workplace productivity</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Seamless integration with modern office environments</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Energy-efficient and easy to manage</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant font-bold items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                <span><IndiaFlag className="w-3.5 h-2 inline align-middle mr-1" /> Proudly designed and manufactured in India</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden border-8 border-surface-container-lowest shadow-2xl">
              <img 
                alt="Sound Masking and Privacy Diagram" 
                className="w-full h-full object-cover" 
                src={soundMaskingDiagramImg} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Exports Section */}
      <section className="bg-surface-container-low py-24 px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <span className="font-label-caps text-label-caps text-primary mb-2 block font-bold">GLOBAL SOURCING • TRUSTED PROCUREMENT • RELIABLE DELIVERY</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Industrial Exports</h2>
            <div className="space-y-6 text-on-surface-variant font-body-md leading-relaxed mb-8">
              <p>
                At NAP Infinity, we specialize in sourcing and exporting high-quality industrial machinery, equipment, and engineering products tailored to our clients' specific requirements. Leveraging our extensive supplier network and industry expertise, our procurement team identifies the most suitable products based on quality, performance, compliance, and cost-effectiveness.
              </p>
              <p>
                From supplier evaluation and quality assurance to logistics and export documentation, we manage the complete procurement process, ensuring seamless delivery and complete customer satisfaction.
              </p>
            </div>
            
            <h4 className="font-bold text-on-surface text-lg mb-4">Our Capabilities</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Customized sourcing based on client specifications</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Industrial machinery and engineering products</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Supplier identification and evaluation</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Quality inspection and compliance verification</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>Global procurement and export logistics</span>
              </li>
              <li className="flex items-start gap-2.5 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5 font-bold">check_circle</span>
                <span>End-to-end project coordination and support</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full lg:mt-16">
            {/* Card 1: Industrial Machinery */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Industrial Machinery</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Export of high-performance industrial machinery, manufacturing equipment, and heavy-duty mechanical systems tailored for global industrial requirements.
              </p>
            </div>

            {/* Card 2: Electrical Products */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">electrical_services</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Electrical Products</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Comprehensive export of certified electrical components, industrial power distribution equipment, and specialized wiring solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Consultation & Project Execution Section */}
      <section className="py-24 px-4 md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="font-label-caps text-label-caps text-primary mb-4 block">COMMERCIAL FIT-OUT &amp; DESIGN</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Interior Consultation & Project Execution</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Transforming commercial environments with tailored spatial planning, modular interior solutions, and flawless project management. Drawing on 18+ years of multidisciplinary expertise in interior fit-outs and modular design.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">design_services</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Spatial Planning &amp; Consultation</h4>
                    <p className="text-body-sm text-on-surface-variant">Ergonomic layout planning, workflow optimization, and architectural consultation tailored for modern commercial spaces.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">construction</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Modular Furniture &amp; Turnkey Execution</h4>
                    <p className="text-body-sm text-on-surface-variant">Seamless installation of modular systems, partitions, and complete interior fit-outs delivered on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">task_alt</span>
                  <div>
                    <h4 className="font-bold text-on-surface">End-to-End Project Management</h4>
                    <p className="text-body-sm text-on-surface-variant">Rigorous quality control, budget supervision, and single-point accountability from initial layout to final handover.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden border-8 border-surface-container-lowest shadow-2xl">
                <img 
                  alt="Interior Consultation & Project Execution" 
                  className="w-full h-full object-cover" 
                  src={interiorServiceImg} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-primary text-on-primary py-24 px-4 md:px-margin-desktop relative overflow-hidden text-white">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">Ready to Elevate Your Space or Operations?</h2>
          <p className="text-2xl md:text-3xl font-bold mb-12 italic opacity-95 text-white">
            "We create engineering and interior solutions that inspire confidence, improve performance, and contribute to sustainable business success."
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
