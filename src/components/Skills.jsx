import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

export default function Skills() {
  const { skills } = data;

  return (
    <section id="skills" className="section-py skills-section">
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--text-muted)', maxWidth: 460, margin: '0 auto', fontSize: '0.9rem' }}>
            Hover each card to explore the technologies
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center mb-5">
          {skills.map((skill, i) => (
            <div key={skill.category} className="col-6 col-md-4 col-lg-3">
              <motion.div
                className="flip-card-wrapper h-100"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <div className="flip-card-3d" style={{ height: '100%', minHeight: 220 }}>

                  <div className="flip-face flip-front">
                    <div className={`flip-front-icon flip-icon-${skill.color}`}>
                      <i className={`bi ${skill.icon}`} style={{ fontSize: '1.6rem' }} />
                    </div>
                    <h3 className="flip-front-title text-center">{skill.category}</h3>
                    <span className="flip-hint">
                      <i className="bi bi-arrow-repeat me-1" style={{ fontSize: '0.6rem' }} />
                      Hover to explore
                    </span>
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
