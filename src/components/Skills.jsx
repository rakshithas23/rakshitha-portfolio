import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

function ProfBar({ name, pct }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.transform = `scaleX(${pct})`; obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between mb-1">
        <span className="prof-label">{name}</span>
        <span className="prof-pct">{Math.round(pct * 100)}%</span>
      </div>
      <div className="progress-custom">
        <div ref={ref} className="progress-bar-custom" />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = data;

  return (
    <section id="skills" className="section-py" style={{ background: 'var(--dark2)' }}>
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">What I Know</span>
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto', fontSize: '0.95rem' }}>
            Hover the cards to explore each skill category
          </p>
        </motion.div>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
          {skills.map((skill, i) => (
            <div key={skill.category} className="col">
              <motion.div
                className="flip-card-wrapper h-100"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="flip-card-3d" style={{ height: '100%', minHeight: 200 }}>

                  <div className="flip-face flip-front">
                    <div className="flip-front-icon">
                      <i className={`bi ${skill.icon} text-${skill.color}`} style={{ fontSize: '1.6rem' }} />
                    </div>
                    <h3 className="flip-front-title text-center">{skill.category}</h3>
                    <span className="flip-hint">Hover to explore</span>
                  </div>

                  <div className="flip-face flip-back">
                    {skill.items.map(item => (
                      <span key={item} className="flip-back-badge">{item}</span>
                    ))}
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}