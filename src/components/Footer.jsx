import data from '../data/portfolio.json';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Footer() {
  const { personal, navigation } = data;
  const year = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          <small className="footer-text mb-0">
            &copy; {year} <span>{personal.name}</span>
          </small>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            {navigation.map((n) => (
              <button
                key={n.id}
                onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {n.label}
              </button>
            ))}
          </div>

          <motion.div className="d-flex gap-3" {...fadeUp(0.72)}>
            {[
              { icon: 'bi-linkedin', href: personal.linkedin, label: 'LinkedIn' },
              { icon: 'bi-github', href: personal.github, label: 'GitHub' },
              { icon: 'bi-envelope-fill', href: `mailto:${personal.email}`, label: 'Email' },
            ].map((s) => (
              
                <a key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid var(--border)',
                  color: 'var(--primary-light)',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </footer>
  );
}