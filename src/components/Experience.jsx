import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

export default function Experience() {
  const { experience } = data;

  return (
    <section id="experience" className="section-py">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Work History</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="exp-timeline">
          {experience.map((exp, i) => {
            const isCurrent = exp.period.toLowerCase().includes('present');
            return (
              <motion.div
                key={i}
                className="exp-timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`exp-timeline-dot ${isCurrent ? 'current' : 'past'}`} />

                <div className="glass-card exp-card">
                  <div className="row align-items-start mb-4">
                    <div className="col-md-8">
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <div>
                          <h3 style={{ fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)', margin: 0, lineHeight: 1.2 }}>
                            {exp.role}
                          </h3>
                          <p style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.95rem', margin: '4px 0 0' }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 mt-2 flex-wrap">
                        <span className={`exp-type-badge ${isCurrent ? 'current' : ''}`}>
                          {isCurrent && (
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)', display: 'inline-block', boxShadow: '0 0 6px var(--success)', marginRight: 6 }} />
                          )}
                          {exp.type}
                        </span>
                        {isCurrent && (
                          <span className="exp-active-badge">
                            <i className="bi bi-lightning-charge-fill me-1" />Active
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                      <div className="exp-meta-pill mb-2">
                        <i className="bi bi-calendar3" style={{ color: 'var(--primary-light)' }} />
                        {exp.period}
                      </div>
                      <br />
                      <div className="exp-meta-pill">
                        <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-light)' }} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="exp-bullets-list">
                    {exp.bullets.map((b, j) => (
                      <motion.div
                        key={j}
                        className="exp-bullet"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: j * 0.08 }}
                      >
                        <span className="exp-bullet-dot" />
                        <p
                          style={{ margin: 0, fontSize: '0.91rem', lineHeight: 1.75, color: 'var(--text-muted)', textAlign: 'justify' }}
                          dangerouslySetInnerHTML={{ __html: b }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
