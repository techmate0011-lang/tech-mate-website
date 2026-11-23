import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, ClipboardCheck, Code2, TerminalSquare, Headset } from 'lucide-react';
import { team } from '../data/team';
import { siteConfig } from '../data/siteConfig';

const icons = {
  briefcase: Briefcase,
  pmo: ClipboardCheck,
  code: Code2,
  terminal: TerminalSquare,
  support: Headset,
};

const TeamCard = ({ member, index }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const Icon = icons[member.icon] || Code2;

  // Cursor-following spotlight
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="group h-full rounded-2xl p-px bg-gradient-to-b from-white/20 to-white/0 hover:from-electric hover:to-electric/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(35,123,206,0.5)]"
      >
        <div className="relative h-full overflow-hidden rounded-2xl bg-[#121B2A] px-8 py-10 text-center">
          {/* spotlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'radial-gradient(320px circle at var(--x, 50%) var(--y, 0%), rgba(35,123,206,0.25), transparent 60%)' }}
          />

          {/* avatar */}
          <div className="relative mx-auto mb-6 h-24 w-24">
            <div
              className="absolute inset-0 rounded-full group-hover:animate-spin"
              style={{
                background: 'conic-gradient(from 0deg, #237BCE, #EAF2FA, #237BCE 40%, transparent 70%, #237BCE)',
                animationDuration: '3s',
              }}
            />
            <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-midnight font-heading text-3xl font-bold text-white">
              {member.name.charAt(0)}
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-electric text-white ring-4 ring-[#121B2A] group-hover:scale-110 transition-transform">
              <Icon size={16} />
            </div>
          </div>

          <h3 className="relative font-heading text-2xl font-bold text-white">{member.name}</h3>
          <p className="relative mt-2 text-sm text-gray-400 min-h-[2.5rem]">{member.role}</p>

          <div className="relative mt-5 flex flex-wrap justify-center gap-2">
            {member.tags?.map((t) => (
              <span key={t} className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs text-ice">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => (
  <section className="relative overflow-hidden bg-[#0B111A] px-6 py-28">
    {/* grid texture + glows */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          'linear-gradient(#EAF2FA 1px, transparent 1px), linear-gradient(90deg, #EAF2FA 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      }}
    />
    <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />
    <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />

    <div className="relative mx-auto max-w-6xl">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
          The team behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-ice">{siteConfig.companyName}</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Five people covering strategy, delivery, engineering, quality and support.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
