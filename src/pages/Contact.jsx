import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: 'Industrial Exports',
    message: '',
    privacy: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          inquiryType: 'Industrial Exports',
          message: '',
          privacy: false
        });
      }, 4000);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary min-h-screen">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-surface-container-lowest py-24 md:py-32">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
          <span className="font-label-caps text-label-caps text-primary mb-4 block tracking-widest uppercase">Global Excellence</span>
          <h1 className="font-display-lg text-display-lg md:text-[64px] text-on-surface mb-6 leading-tight">Get in Touch</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Partner with NAP Infinity LLP for world-class industrial exports, precision sound masking, and acoustic engineering solutions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-primary opacity-20"></div>
      </header>

      <main className="py-20">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            
            {/* Contact Info Grid (Bento Style) */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Address */}
              <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-lg border border-surface-variant shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-xl text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm">Office Address</h3>
                </div>
                <p className="font-body-md text-secondary">
                  Office No- 702, Building No-9, M-Avenue, Rustomjee Evershine Global City, Near Yazoo Park, Virar(West), Mumbai, Maharashtra-401303
                </p>
              </div>

              {/* Phone */}
              <div className="bg-surface-container-lowest p-8 rounded-lg border border-surface-variant shadow-sm">
                <div className="w-10 h-10 bg-secondary-container flex items-center justify-center rounded-lg text-primary mb-4">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <h3 className="font-label-caps text-label-caps mb-2 text-on-surface">Phone</h3>
                <p className="font-body-sm text-secondary font-bold">+91 9561782326</p>
              </div>

              {/* Email */}
              <div className="bg-surface-container-lowest p-8 rounded-lg border border-surface-variant shadow-sm">
                <div className="w-10 h-10 bg-secondary-container flex items-center justify-center rounded-lg text-primary mb-4">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <h3 className="font-label-caps text-label-caps mb-2 text-on-surface">Email</h3>
                <p className="font-body-sm text-secondary font-bold">info@napinfinity.com</p>
              </div>

              {/* Business Hours */}
              <div className="md:col-span-2 bg-primary text-on-primary p-8 rounded-lg border border-primary relative overflow-hidden text-white">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined">schedule</span>
                    <h3 className="font-headline-sm text-headline-sm">Business Hours</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-label-caps text-[10px] opacity-70">MON - FRI</p>
                      <p className="font-body-md font-bold">09:00 AM - 06:00 PM</p>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] opacity-70">SATURDAY</p>
                      <p className="font-body-md font-bold">10:00 AM - 02:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <span className="material-symbols-outlined !text-[120px]">precision_manufacturing</span>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-lg border border-surface-variant shadow-sm">
              <div className="mb-8">
                <h2 className="font-headline-lg text-headline-lg mb-2">Send an Inquiry</h2>
                <p className="font-body-md text-secondary">Complete the form below and our technical team will contact you within 24 hours.</p>
              </div>

              {submitted && (
                <div className="bg-emerald-600 text-white p-4 rounded-lg mb-6 flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Message Sent Successfully!</span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Full Name</label>
                    <input 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none" 
                      placeholder="John Doe" 
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
                      placeholder="john@company.com" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Company</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none" 
                      placeholder="Industrial Corp" 
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Inquiry Type</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option>Industrial Exports</option>
                      <option>Sound Masking Solutions</option>
                      <option>Acoustic Consulting</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-label-caps block mb-2 text-on-surface-variant">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md outline-none" 
                    placeholder="How can we help with your infrastructure needs?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <input 
                    required
                    className="rounded text-primary border-outline-variant focus:ring-primary" 
                    id="privacy" 
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  />
                  <label className="font-body-sm text-secondary" htmlFor="privacy">
                    I agree to the <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-white flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">refresh</span> Processing...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </form>

            </div>

          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full h-[500px] relative border-t border-b border-surface-variant overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.434344444444!2d72.76!3d19.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a90000000001%3A0x0!2zMTnCsDI3JzAwLjAiTiA3MsKwNDUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="absolute left-margin-desktop z-10 hidden md:block top-12">
          <div className="bg-surface-lowest p-8 rounded-lg shadow-xl border border-surface-variant max-w-sm md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <span className="font-label-caps text-label-caps text-on-surface">HEADQUARTERS</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm mb-2">Visit Our Center</h4>
            <p className="font-body-sm text-secondary mb-6">Experience our sound masking technology firsthand in our demo lab.</p>
            <a 
              className="flex items-center gap-2 text-primary font-bold hover:underline" 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
            >
              Get Directions
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
