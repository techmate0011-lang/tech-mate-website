import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { projects } from '../data/projects';

const Projects = () => (
  <PageTransition>
      <SEO title="Projects" description="Explore Tech Mate projects: ULTRON AI assistant, Tourist Guide app, and a facial-recognition Smart Attendance System." />
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.id} className="bg-[#1A2332] rounded-2xl border border-[#344354] hover:border-electric transition-colors p-8">
              <span className="text-xs font-mono text-electric border border-electric/30 bg-electric/10 px-3 py-1 rounded-full inline-block mb-4">
                {p.status}
              </span>
              <h2 className="text-2xl font-heading font-bold">{p.title}</h2>
              <p className="text-electric text-sm mb-2">{p.subtitle}</p>
              <p className="text-sm text-muted mb-4">{p.category}</p>
              <p className="text-gray-300 text-sm mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-midnight text-gray-400 px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Projects;
