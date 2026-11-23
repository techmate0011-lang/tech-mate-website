import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

const Footer = () => (
  <footer className="border-t border-white/10 bg-midnight px-6 py-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
      <div className="text-center md:text-left">
        <p className="font-heading font-bold text-white">{siteConfig.companyName}</p>
        <p>{siteConfig.tagline}</p>
        <p>Based in {siteConfig.location}</p>
      </div>
      <div className="flex gap-6">
        <Link to="/about" className="hover:text-electric transition-colors">About</Link>
        <Link to="/projects" className="hover:text-electric transition-colors">Projects</Link>
        <Link to="/contact" className="hover:text-electric transition-colors">Contact</Link>
      </div>
      <p>© {new Date().getFullYear()} {siteConfig.companyName}</p>
    </div>
  </footer>
);

export default Footer;
