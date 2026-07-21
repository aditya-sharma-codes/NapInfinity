import React, { useState } from 'react';
import { sendInquiryEmail } from '../utils/sendEmail';

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendInquiryEmail(formData);
      setIsSubmitting(false);
      setSubmitted(true);
      localStorage.setItem('nap_inquiry_submitted', 'true');
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', email: '', phone: '', inquiryType: '', message: '' });
      }, 5000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen">
      
      {/* Hero / Header Section */}
      <header className="relative overflow-hidden bg-surface-container-lowest py-20 md:py-32">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
          <span className="font-label-caps text-label-caps text-primary mb-4 block tracking-widest uppercase">Contact Our Team</span>
          <h1 className="font-display-lg text-display-lg md:text-[64px] text-on-surface mb-6 leading-tight">
            Let's build the future <span className="text-primary">together.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            The Infinity Engineering Framework is designed for visionaries. Whether you're starting a new venture or scaling a global infrastructure, our experts are ready to consult.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-primary opacity-20"></div>
      </header>

      <main className="py-20">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-surface-variant shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-xl text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm">Headquarter</h3>
                </div>
                <p className="font-body-md text-secondary">
                  Office No- 702, Building No-9, M-Avenue, Rustomjee Evershine Global City, Near Yazoo Park, Virar(West), Mumbai, Maharashtra-401303
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl border border-surface-variant shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-xl text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm">Global Support</h3>
                </div>
                <p className="font-body-md text-secondary font-semibold">info@napinfinity.com</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl border border-surface-variant shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-xl text-primary">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm">Direct Call</h3>
                </div>
                <p className="font-body-md text-secondary">+91 9561782326</p>
              </div>

              {/* Consultation Hours */}
              <div className="bg-primary text-on-primary p-8 rounded-xl border border-primary relative overflow-hidden text-white">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-outlined">schedule</span>
                    <h3 className="font-headline-sm text-headline-sm">Consultation Hours</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-label-caps text-[10px] opacity-70">MON - FRI</p>
                      <p className="font-body-md font-bold">08:00 AM - 08:00 PM</p>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] opacity-70">SATURDAY</p>
                      <p className="font-body-md font-bold">09:00 AM - 03:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-surface-variant shadow-sm">
              <div className="mb-10">
                <h2 className="font-headline-lg text-headline-lg mb-2">Project Inquiry</h2>
                <p className="font-body-md text-secondary">Complete the form below and our technical team will contact you within 24 hours.</p>
              </div>

              {submitted && (
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg border border-emerald-200 mb-6 flex items-center gap-2 font-body-md font-bold">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Message sent successfully! Our technical team will reach out shortly.</span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Full Name</label>
                    <input 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none" 
                      placeholder="Full Name" 
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Email Address</label>
                    <input 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none" 
                      placeholder="Email Address" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Phone Number</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none" 
                      placeholder="Phone Number" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Inquiry Type</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    <option value="" disabled>Select an option below</option>
                    <option value="Industrial Machinery">Industrial Machinery</option>
                    <option value="Electrical Products">Electrical Products</option>
                    <option value="Sound Masking Systems">Sound Masking Systems</option>
                    <option value="Interior Consultation & Project Execution">Interior Consultation &amp; Project Execution</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none" 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group text-white"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">refresh</span> Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                    </>
                  )}
                </button>
              </form>

            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
