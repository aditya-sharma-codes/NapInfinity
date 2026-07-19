/**
 * Utility to handle form email submissions for NAP Infinity.
 * Sends data via Web3Forms API if access_key is set, and opens mailto pre-filled link.
 */

export async function sendInquiryEmail({ fullName, email, phone = '', company = '', inquiryType = '', message = '' }) {
  const mailtoSubject = encodeURIComponent(`New Inquiry from ${fullName} - ${inquiryType || 'NAP Infinity'}`);
  const mailtoBody = encodeURIComponent(
    `Full Name: ${fullName}\n` +
    `Email: ${email}\n` +
    (phone ? `Phone: ${phone}\n` : '') +
    (company ? `Company: ${company}\n` : '') +
    `Inquiry Type: ${inquiryType}\n\n` +
    `Message:\n${message}\n`
  );

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (accessKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Website Inquiry from ${fullName}`,
          from_name: fullName,
          email: email,
          phone: phone,
          company: company,
          inquiry_type: inquiryType,
          message: message,
          to_email: 'info@napinfinity.com'
        })
      });
      const data = await response.json();
      if (data.success) {
        return { success: true, mode: 'api' };
      }
    } catch (err) {
      console.warn('Web3Forms API failed, falling back to mailto link', err);
    }
  }

  // Fallback: Open user mail client with pre-filled email to info@napinfinity.com
  const mailtoUrl = `mailto:info@napinfinity.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  window.location.href = mailtoUrl;

  return { success: true, mode: 'mailto' };
}
