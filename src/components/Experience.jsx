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

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="glass-card exp-card mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
           
            <div className="row align-items-start mb-4">
              <div className="col-md-8">
                
                <div className="d-flex align-items-center gap-3 mb-2">
                  
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.4rem', color: 'var(--text)', margin: 0, lineHeight: 1.2 }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="exp-company-badge">
                  <span
                    style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)', display: 'inline-block', boxShadow: '0 0 6px var(--success)' }}
                  />
                  {exp.type}
                </span>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <div
                  className="d-inline-flex align-items-center gap-2 mb-2"
                  style={{
                    padding: '6px 14px', borderRadius: 10,
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid var(--border)',
                    fontSize: '0.8rem', color: 'var(--text-muted)',
                  }}
                >
                  <i className="bi bi-calendar3" style={{ color: 'var(--primary-light)' }} />
                  {exp.period}
                </div>
                <br />
                <div
                  className="d-inline-flex align-items-center gap-2"
                  style={{
                    padding: '4px 12px', borderRadius: 10,
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid var(--border)',
                    fontSize: '0.78rem', color: 'var(--text-muted)',
                  }}
                >
                  <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-light)' }} />
                  {exp.location}
                </div>
              </div>
            </div>

          
            <div>
              {exp.bullets.map((b, j) => (
                <motion.div
                  key={j}
                  className="exp-bullet"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: j * 0.1 }}
                >
                  <span className="exp-bullet-dot" />
                  <p
                    style={{ margin: 0, fontSize: '0.91rem', lineHeight: 1.75, color: 'var(--text-muted)', textAlign: 'justify' }}
                    dangerouslySetInnerHTML={{ __html: b }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
