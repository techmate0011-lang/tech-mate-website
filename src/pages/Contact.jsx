import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteConfig';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const field = "w-full bg-[#1A2332] border border-[#344354] focus:border-electric outline-none rounded-lg px-4 py-3 text-white";

  return (
    <PageTransition>
      <SEO title="Contact" description="Contact Tech Mate to discuss your idea for a web, AI or software project." />
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-4">Let's Talk</h1>
          <p className="text-muted mb-8">Tell us about your idea and we'll get back to you.</p>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <input required placeholder="Your name" className={field} value={form.name} onChange={update('name')} />
            <input required type="email" placeholder="Email" className={field} value={form.email} onChange={update('email')} />
            <textarea required rows={5} placeholder="Message" className={field} value={form.message} onChange={update('message')} />
            <button type="submit" className="bg-electric hover:bg-blue-600 transition-colors text-white px-8 py-3 rounded-full font-semibold">
              Send message
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
