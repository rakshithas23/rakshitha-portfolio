import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data/portfolio.json';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="col-md-6 col-lg-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-card proj-card h-100">
      
        {project.dates && (
          <div
            className="d-inline-flex align-items-center gap-1 mb-2"
            style={{
              fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em',
              padding: '3px 10px', borderRadius: 99,
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            <i className="bi bi-calendar2" /> {project.dates}
          </div>
        )}

        <h4 className="proj-title">{project.title}</h4>

        {project.institution && (
          <p className="proj-institution">
            <i className="bi bi-building me-1" />{project.institution}
          </p>
        )}

        <p className="proj-desc">{project.description}</p>

       
        {project.highlights && (
          <div className="mb-3">
            {project.highlights.map(h => (
              <span key={h} className="proj-highlight">
                <i className="bi bi-check-circle-fill" style={{ fontSize: '0.6rem' }} /> {h}
              </span>
            ))}
          </div>
        )}

       
        <div className="d-flex flex-wrap gap-1 mt-auto">
          {project.tags.map(t => (
            <span
              key={t}
              style={{
                display: 'inline-flex', padding: '3px 10px', borderRadius: 99,
                fontSize: '0.67rem', fontWeight: 600,
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: 'var(--primary-light)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState('academic');
  const { academicProjects, workProjects } = data;
  const projects = tab === 'academic' ? academicProjects : workProjects;

  return (
    <section id="projects" className="section-py" style={{ background: 'var(--dark2)' }}>
      <div className="container">
       
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </motion.div>

      
        <motion.div
          className="d-flex justify-content-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            style={{
              display: 'inline-flex',
              background: 'rgba(30,41,59,0.7)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: 5,
              gap: 4,
            }}
          >
            {[
              { key: 'academic',      label: 'Academic Projects', icon: 'bi-mortarboard-fill' },
              { key: 'professional',  label: 'Professional Work',  icon: 'bi-briefcase-fill' },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key === 'professional' ? 'professional' : 'academic')}
                style={{
                  padding: '9px 22px', borderRadius: 10, border: 'none',
                  fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.25s',
                  background: tab === t.key ? 'linear-gradient(135deg, var(--primary), var(--primary-dark))' : 'transparent',
                  color: tab === t.key ? '#fff' : 'var(--text-muted)',
                  boxShadow: tab === t.key ? '0 4px 16px rgba(99,102,241,0.35)' : 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}
              >
                <i className={`bi ${t.icon}`} /> {t.label}
              </button>
            ))}
          </div>
        </motion.div>

      
        <div className="row g-4">
          <AnimatePresence mode="wait">
            {(tab === 'academic' ? academicProjects : workProjects).map((p, i) => (
              <ProjectCard key={`${tab}-${i}`} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
