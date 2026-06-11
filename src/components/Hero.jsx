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
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">

            {personal.available && (
              <motion.div className="hero-available mb-4" {...fadeUp(0.1)}>
                <span className="hero-available-dot" />
                Open to Internships &amp; Full-Time Opportunities
              </motion.div>
            )}

            <motion.p className="hero-eyebrow mb-2" {...fadeUp(0.2)}>
              Hello, I'm
            </motion.p>

            <motion.h1 className="hero-name mb-3" {...fadeUp(0.32)}>
              {personal.firstName}{' '}
              <span className="gradient-text">{personal.lastName}</span>
            </motion.h1>

            <motion.div className="hero-role-line mb-2" {...fadeUp(0.42)}>
              <span className="hero-role-tag">
                <i className="bi bi-code-slash" /> {personal.title}
              </span>
              <span className="hero-role-sep" />
              <span className="hero-role-edu">
                <i className="bi bi-mortarboard" /> {personal.subtitle}
              </span>
            </motion.div>

            <motion.div className="hero-location mb-4" {...fadeUp(0.48)}>
              <i className="bi bi-geo-alt-fill" />
              {personal.location}
            </motion.div>

            <motion.p className="hero-tagline" {...fadeUp(0.54)}>
              {personal.tagline}
            </motion.p>

            <motion.div className="d-flex flex-wrap gap-3 mb-4" {...fadeUp(0.62)}>
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

            <motion.div className="d-flex gap-3 mb-5" {...fadeUp(0.68)}>
              {[
                { icon: 'bi-linkedin', href: personal.linkedin, label: 'LinkedIn' },
                { icon: 'bi-github',   href: personal.github,   label: 'GitHub' },
                { icon: 'bi-envelope-fill', href: `mailto:${personal.email}`, label: 'Email' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} className="hero-social-btn">
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
