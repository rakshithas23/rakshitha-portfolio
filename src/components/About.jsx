import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const { personal, education } = data;

  return (
    <section id="about" className="section-py about-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-4 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ position: 'relative' }}
            >
              {personal.photo ? (
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="rounded-4 shadow"
                  style={{
                    width: 280, height: 340, objectFit: 'cover',
                    border: '3px solid rgba(99,102,241,0.35)',
                    boxShadow: '0 0 50px rgba(99,102,241,0.15)',
                  }}
                />
              ) : (
                <div
                  className="rounded-4 d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: 280, height: 340,
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.15))',
                    border: '3px solid rgba(99,102,241,0.35)',
                    fontSize: '4rem', fontFamily: 'var(--font-display)',
                    fontWeight: 700, color: 'var(--primary-light)',
                  }}
                >
                  {personal.initials}
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font)', marginTop: 8 }}>
                    rakshitha.png
                  </span>
                </div>
              )}
              
            </motion.div>
          </div>

          <div className="col-lg-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {personal.bio.map((p, i) => (
                <motion.p key={i} className="about-para" variants={fadeUp}>{p}</motion.p>
              ))}

              <motion.div className="d-flex flex-wrap gap-2 mt-3 mb-4" variants={fadeUp}>
                
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h5 className="fw-bold mb-3" style={{ color: 'var(--text)', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                <i className="bi bi-mortarboard-fill me-2" style={{ color: 'var(--primary-light)' }} />
                Education
              </h5>
              <div className="d-flex flex-column gap-3">
                {education.map((edu, i) => (
                  <div key={i} className="glass-card edu-card">
                    <div className="edu-icon">{edu.abbr}</div>
                    <div className="flex-grow-1">
                      <div className="edu-degree">
                        {edu.degree}
                        {edu.status === 'current' && <span className="edu-current">Current</span>}
                      </div>
                      <div className="edu-school">{edu.school}</div>
                      <div className="edu-meta">{edu.period} · {edu.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
