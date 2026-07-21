import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import acousticHeroImg from '../assets/acoustic_hero.png';
import interiorServiceImg from '../assets/interior_service.png';
import soundMaskingDiagramImg from '../assets/sound_masking_diagram.jpg';
import IndiaFlag from '../components/IndiaFlag';
import { sendInquiryEmail } from '../utils/sendEmail';

export default function Services() {
  const navigate = useNavigate();

  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('view'); // 'view' or 'download'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Sound Masking Systems',
    message: 'Request for Sound Masking Catalog PDF.'
  });

  const catalogSlides = [
    {
      title: "SOUND MASKING SYSTEM",
      subtitle: "Enhancing Privacy. Improving Productivity.",
      badge: "🇮🇳 MADE IN INDIA",
      bullets: [
        "Smart Acoustic Privacy Solutions: Reduces speech intelligibility and creates a comfortable acoustic environment",
        "Power Amplifier / Controller: Single channel controller, single sensor input, built-in 2 channel power amplifier, DSP based sound masking",
        "Ceiling Loudspeaker: 6W rated power @ 100V, wide dispersion, flush mount ceiling clarity",
        "Ambient Noise Sensor: Self-developed sensor installed inside smoke detector style case"
      ]
    },
    {
      title: "CONTROLLER SPECIFICATIONS",
      subtitle: "NAP Infinity Sound Masking Controller with Integrated Amplifier",
      badge: "DIGITAL CONTROLLER",
      bullets: [
        "Product Type & Audio Processing: Digital Sound Masking Controller with 32-bit DSP",
        "Output Power & Speaker Load: 2 × 100 W RMS @ 100V Line, supporting up to 15 × 6W ceiling speakers (90W load)",
        "Masking Optimization: 100 Hz – 10 kHz optimized frequency response with digital multi-band EQ",
        "Controls: PC/Web-based configuration, Ethernet RJ45 network interface, and RS-485 communication link"
      ]
    },
    {
      title: "CEILING SPEAKER SPECIFICATIONS",
      subtitle: "NAP Infinity Ceiling Sound Masking Speaker",
      badge: "LOUDSPEAKER",
      bullets: [
        "Driver & Speaker Type: 6-inch Dual Cone Full-Range 100 V line ceiling loudspeaker",
        "Transformer Taps: Adjustable power settings (6W / 3W / 1.5W)",
        "Acoustic Metrics: Frequency response 80 Hz – 18 kHz, sensitivity 86 dB (1W / 1m), maximum SPL 94 dB",
        "Physical Design: Steel grille with ABS frame, white (RAL 9010) colour, spring clamp flush ceiling mount"
      ]
    },
    {
      title: "AMBIENT NOISE SENSOR SPECIFICATIONS",
      subtitle: "Intelligent microphone-based sensor",
      badge: "INTELLIGENT SENSOR",
      bullets: [
        "Measurement Range: 35–90 dBA with ±1 dB accuracy, A-weighted frequency weighting",
        "Automatic Level Control (ALC): Supported directly with the controller to dynamically increase/decrease masking levels",
        "System Capacity: 1 Zone, 1 Sensor, 1 Speaker Line, maximum speaker load 15 × Bosch LHM 0606/10 (6W)",
        "Operating Specifications: Power supply 24 VDC, current consumption <50 mA, operating temperature 0°C to +45°C"
      ]
    },
    {
      title: "CONTACT & SUPPORT",
      subtitle: "Sound of Silence Acoustic Solutions LLP",
      badge: "Acoustic Consulting | Noise Control",
      bullets: [
        "Services Provided: Sound masking system design & deployment, acoustic testing & measurements, and speech privacy assessment",
        "Acoustic Engineering: Noise control solutions, reverberation time analysis, corporate & commercial acoustic consulting",
        "Service Coverage: PAN India supply, installation, commissioning, and post-installation support",
        "Get in Touch: Mobile: +91 89288 68742 | Email: info@soundofsilence.in | Web: www.soundofsilence.in"
      ]
    }
  ];

  const handleOpenCatalogModal = (tab) => {
    setModalTab(tab);
    setCatalogModalOpen(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setIsModalSubmitting(true);
    try {
      await sendInquiryEmail(modalFormData);
      setIsModalSubmitting(false);
      setModalSubmitted(true);
      localStorage.setItem('nap_inquiry_submitted', 'true');
      
      // Auto trigger the PDF download
      const link = document.createElement('a');
      link.href = '/sound_masking_catalog.pdf';
      link.download = 'sound_masking_catalog.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
      setIsModalSubmitting(false);
    }
  };

  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = '/sound_masking_catalog.pdf';
    link.download = 'sound_masking_catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  React.useEffect(() => {
    if (catalogModalOpen) {
      const preventDefault = (e) => e.preventDefault();
      
      // Disable right click context menu
      document.addEventListener('contextmenu', preventDefault);
      
      // Disable print screen, copy, developer tools key combinations
      const handleKeyDown = (e) => {
        if (
          e.key === 'PrintScreen' || 
          (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'c' || e.key === 'u')) || 
          e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
        ) {
          e.preventDefault();
          alert("Screenshots, printing, and saving are disabled in catalog preview mode. Submit a quick inquiry to download the high-resolution PDF.");
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      // Listen for print screen keyup to clear clipboard
      const handleKeyUp = (e) => {
        if (e.key === 'PrintScreen') {
          navigator.clipboard.writeText('Screenshot disabled.');
        }
      };
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        document.removeEventListener('contextmenu', preventDefault);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [catalogModalOpen]);

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

            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={() => handleOpenCatalogModal('view')}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">menu_book</span>
                <span>View Catalog</span>
              </button>
              <button 
                onClick={() => handleOpenCatalogModal('download')}
                className="inline-flex items-center justify-center px-6 py-3 bg-surface-container-highest/80 hover:bg-surface-container-highest border border-outline-variant text-on-surface font-bold rounded-xl hover:scale-105 active:scale-95 transition-all gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>Download PDF Catalog</span>
              </button>
            </div>
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

      {/* Sound Masking Catalog Modal */}
      {catalogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all duration-300 text-slate-800 dark:text-slate-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div className="text-left">
                  <h3 className="font-headline-sm text-headline-sm dark:text-white">Sound Masking Catalog</h3>
                  <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">NAP INFINITY EXCELLENCE</p>
                </div>
              </div>
              <button 
                onClick={() => setCatalogModalOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <button 
                onClick={() => setModalTab('view')}
                className={`flex-1 py-4 text-center font-label-caps text-label-caps font-bold transition-all relative ${modalTab === 'view' ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
              >
                View Catalog
                {modalTab === 'view' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></div>}
              </button>
              <button 
                onClick={() => setModalTab('download')}
                className={`flex-1 py-4 text-center font-label-caps text-label-caps font-bold transition-all relative ${modalTab === 'download' ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
              >
                Download PDF
                {modalTab === 'download' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></div>}
              </button>
            </div>

            {/* Modal Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              
              {/* Tab 1: View Catalog (Interactive Slider/Mockup Pages) */}
              {modalTab === 'view' && (
                <div className="space-y-6">
                  {/* Real PDF Embed Container */}
                  <div className="relative w-full h-[60vh] md:h-[70vh] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                    
                    {/* Security Watermark Overlay */}
                    <div className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden flex flex-col justify-around rotate-[-12deg] scale-110 opacity-[0.04]">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex justify-around text-xs md:text-sm font-black tracking-widest text-white whitespace-nowrap">
                          <span>NAP INFINITY PREVIEW</span>
                          <span>NAP INFINITY PREVIEW</span>
                        </div>
                      ))}
                    </div>

                    {/* PDF iframe - Disable toolbar to hide Chrome's download/print options */}
                    <iframe 
                      src="/sound_masking_catalog.pdf#toolbar=0&navpanes=0" 
                      title="Sound Masking Catalog Preview"
                      className="w-full h-full border-none select-none"
                    />
                  </div>

                  {/* bottom note prompting download */}
                  <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-body-md text-slate-600 dark:text-slate-350 mb-4">
                      This is a non-downloadable preview of our catalog. Submit a quick inquiry to download the high-resolution PDF catalog.
                    </p>
                    <button 
                      onClick={() => setModalTab('download')}
                      className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all text-sm shadow-md"
                    >
                      Unlock PDF Download
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Download PDF (Inquiry Required) */}
              {modalTab === 'download' && (
                <div className="space-y-6">
                  {/* Checked if user already submitted an inquiry */}
                  {(localStorage.getItem('nap_inquiry_submitted') === 'true' || modalSubmitted) ? (
                    <div className="text-center py-8 space-y-6 max-w-md mx-auto">
                      <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-4xl font-bold">verified_user</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm dark:text-white">Download Authorized</h4>
                      <p className="font-body-md text-slate-600 dark:text-slate-400 leading-relaxed">
                        Thank you! Your active inquiry enables instant document access. You can now download the Sound Masking System Catalog PDF.
                      </p>
                      <button 
                        onClick={handleDirectDownload}
                        className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined">download</span>
                        <span>Download Catalog PDF</span>
                      </button>
                      <button 
                        onClick={() => setModalTab('view')}
                        className="text-xs font-bold text-primary hover:underline block mx-auto mt-4"
                      >
                        Back to Catalog Preview
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined font-bold">lock</span>
                        </div>
                        <p className="text-body-sm text-slate-650 dark:text-slate-350 leading-relaxed">
                          To download the PDF, please submit a quick inquiry below. The download will start automatically once submitted.
                        </p>
                      </div>

                      <form onSubmit={handleModalSubmit} className="space-y-4 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="font-label-caps text-label-caps block mb-1.5 text-xs text-slate-500 dark:text-slate-400">Full Name</label>
                            <input 
                              required
                              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none" 
                              placeholder="Full Name" 
                              type="text"
                              value={modalFormData.fullName}
                              onChange={(e) => setModalFormData({ ...modalFormData, fullName: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="font-label-caps text-label-caps block mb-1.5 text-xs text-slate-500 dark:text-slate-400">Email Address</label>
                            <input 
                              required
                              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none" 
                              placeholder="Email Address" 
                              type="email"
                              value={modalFormData.email}
                              onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-label-caps text-label-caps block mb-1.5 text-xs text-slate-500 dark:text-slate-400">Phone Number</label>
                          <input 
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none" 
                            placeholder="Phone Number" 
                            type="tel"
                            value={modalFormData.phone}
                            onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                          />
                        </div>

                        <div>
                          <label className="font-label-caps text-label-caps block mb-1.5 text-xs text-slate-500 dark:text-slate-400">Message</label>
                          <textarea 
                            rows="2" 
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none" 
                            placeholder="Message" 
                            value={modalFormData.message}
                            onChange={(e) => setModalFormData({ ...modalFormData, message: e.target.value })}
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={isModalSubmitting}
                          className="w-full bg-primary text-white py-3 rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 text-xs font-bold"
                        >
                          {isModalSubmitting ? (
                            <>
                              <span className="material-symbols-outlined animate-spin text-sm">refresh</span> Processing...
                            </>
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-sm">mail</span> Submit &amp; Download PDF
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </main>
  );
}
