import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteConfig';
import { team } from '../data/team';

const About = () => (
  <PageTransition>
      <SEO title="About" description="Learn about Tech Mate, an independent digital innovation studio, and meet the team behind our software and AI projects." />
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-heading font-bold mb-6">About {siteConfig.companyName}</h1>
        <p className="text-gray-300 text-lg mb-4">{siteConfig.description}</p>
        <p className="text-muted mb-12">Based in {siteConfig.location}, serving clients across Tamil Nadu and beyond.</p>

        <h2 className="text-3xl font-heading font-bold mb-6">Our Team</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {team.map((m) => (
            <div key={m.name} className="bg-[#1A2332] border border-[#344354] rounded-xl p-5">
              <h3 className="font-heading font-bold text-lg">{m.name}</h3>
              <p className="text-sm text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default About;
