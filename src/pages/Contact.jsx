import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteConfig';

const empty = { name: '', email: '', message: '', botcheck: '' };

const Contact = () => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    if (siteConfig.web3formsKey.startsWith('YOUR')) {
      setError('The contact form is not set up yet. Add your Web3Forms access key in src/data/siteConfig.js.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `New enquiry from ${form.name} - ${siteConfig.companyName}`,
          from_name: `${siteConfig.companyName} Website`,
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: form.botcheck, // spam trap, must stay empty
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm(empty);
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Could not send your message. Please try again in a moment.');
      setStatus('error');
    }
  };

  const field = "w-full bg-[#1A2332] border border-[#344354] focus:border-electric outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-500";

  return (
    <PageTransition>
      <SEO title="Contact" description="Contact Tech Mate to discuss your idea for a web, AI or software project." />
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-4">Let's Talk</h1>
          <p className="text-muted mb-8">Tell us about your idea and we'll get back to you.</p>

          {status === 'success' ? (
            <div className="rounded-2xl border border-electric/40 bg-electric/10 p-8 text-center" role="status">
              <CheckCircle2 className="mx-auto mb-4 text-electric" size={48} />
              <h2 className="text-2xl font-heading font-bold mb-2">Message sent!</h2>
              <p className="text-gray-300 mb-6">Thanks for reaching out. We'll reply to your email soon.</p>
              <button onClick={() => setStatus('idle')} className="text-electric hover:text-ice transition-colors font-semibold">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              {/* hidden spam trap */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden"
                     checked={!!form.botcheck} onChange={(e) => setForm({ ...form, botcheck: e.target.checked ? 'yes' : '' })} />
              <input required placeholder="Your name" className={field} value={form.name} onChange={update('name')} />
              <input required type="email" placeholder="Email" className={field} value={form.email} onChange={update('email')} />
              <textarea required rows={5} placeholder="Message" className={field} value={form.message} onChange={update('message')} />

              {status === 'error' && (
                <p className="flex items-start gap-2 text-sm text-red-400" role="alert">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" /> {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-electric hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (<><Loader2 size={18} className="animate-spin" /> Sending...</>) : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
