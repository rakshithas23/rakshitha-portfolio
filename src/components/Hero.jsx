import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { personal, stats } = data;

  return (
    <section id="home" className="hero-section">
      {/* Grid background */}
      <div className="hero-bg-grid" />
      {/* Glow orbs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">


            <motion.p className="hero-eyebrow mb-2" {...fadeUp(0.2)}>
              Hello, I'm
            </motion.p>

            <motion.h1 className="hero-name mb-3" {...fadeUp(0.32)}>
              {personal.firstName}{' '}
              <span className="gradient-text">{personal.lastName}</span>
            </motion.h1>

            <motion.p className="hero-title" {...fadeUp(0.44)}>
              <i className="bi bi-code-slash me-2" style={{ color: 'var(--primary-light)' }} />
              {personal.title}
            </motion.p>

             <motion.p className="hero-title" {...fadeUp(0.44)}>
              {personal.subtitle}
            </motion.p>

          
            <motion.p className="hero-tagline" {...fadeUp(0.54)}>
              {personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="d-flex flex-wrap gap-3 mb-5" {...fadeUp(0.64)}>
              <button
                className="btn btn-hero-primary d-inline-flex align-items-center gap-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="bi bi-grid-fill" /> View My Work
              </button>
              <button
                className="btn btn-hero-outline d-inline-flex align-items-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="bi bi-send-fill" /> Get In Touch
              </button>
            </motion.div>


            <motion.div className="d-flex gap-3">
              {[
                { icon: 'bi-linkedin', href: personal.linkedin, label: 'LinkedIn' },
                { icon: 'bi-github', href: personal.github, label: 'GitHub' },
                { icon: 'bi-envelope-fill', href: `mailto:${personal.email}`, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 42, height: 42, borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid var(--border)',
                    color: 'var(--primary-light)',
                    fontSize: '1.1rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </motion.div>
          </div>


          <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <motion.div
              className="hero-photo-wrap float-anim"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="hero-photo-ring hero-photo-ring-1" />
              <div className="hero-photo-ring hero-photo-ring-2" />
              {personal.photo ? (
                <img src={personal.photo} alt={personal.name} className="hero-photo" />
              ) : (
                <div className="hero-photo-placeholder">
                  {personal.initials}
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font)', color: 'var(--text-muted)', marginTop: 8 }}>
                    Add photo to /public
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
