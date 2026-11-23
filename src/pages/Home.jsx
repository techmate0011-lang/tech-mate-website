import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import TeamSection from '../components/TeamSection';
import { projects } from '../data/projects';
import { ArrowRight, Code2, Cpu, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <PageTransition>
      <SEO />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/20 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 max-w-4xl"
        >
          <span className="text-electric font-heading tracking-widest text-sm uppercase mb-4 block">
            Independent Digital Innovation Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Building Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-ice">Move Ideas Forward.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We design, develop, and engineer intelligent software solutions that solve real-world challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="bg-electric hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all">
              Explore Our Work <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="border border-muted hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all">
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. SERVICES PREVIEW */}
      <section className="py-24 px-6 bg-lightbg text-midnight">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 size={32} className="text-electric"/>, title: "Web Development", desc: "Responsive business websites and web applications." },
              { icon: <Cpu size={32} className="text-electric"/>, title: "AI & Automation", desc: "AI-powered features and practical automation tools." },
              { icon: <ShieldCheck size={32} className="text-electric"/>, title: "Computer Vision", desc: "Face detection, recognition, and image processing." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                <p className="text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS (data/projects.js) */}
      <section className="py-24 px-6 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-heading font-bold">Selected Work</h2>
            <Link to="/projects" className="text-electric hover:text-ice transition-colors hidden md:flex items-center gap-2">
              View All Projects <ArrowRight size={16}/>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-[#1A2332] rounded-2xl overflow-hidden border border-[#344354] hover:border-electric transition-all">
                <div className="p-8">
                  <span className="text-xs font-mono text-electric border border-electric/30 bg-electric/10 px-3 py-1 rounded-full mb-4 inline-block">
                    {project.status}
                  </span>
                  <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-electric transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted mb-4">{project.category}</p>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs bg-[#101722] text-gray-400 px-2 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION (data/team.js) */}
      <TeamSection />
    </PageTransition>
  );
};

export default Home;
