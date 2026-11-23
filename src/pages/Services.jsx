import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Code2, Cpu, ShieldCheck } from 'lucide-react';

const services = [
  { icon: Code2, title: "Web Development", desc: "Responsive business websites and web applications built with modern frameworks." },
  { icon: Cpu, title: "AI & Automation", desc: "AI-powered features, assistants, and practical automation tools for everyday work." },
  { icon: ShieldCheck, title: "Computer Vision", desc: "Face detection, recognition, and image processing systems." },
];

const Services = () => (
  <PageTransition>
      <SEO title="Services" description="Web development, AI and automation, and computer vision services from Tech Mate." />
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-12 text-center">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#1A2332] border border-[#344354] hover:border-electric transition-colors rounded-2xl p-8">
              <Icon size={32} className="text-electric mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Services;
