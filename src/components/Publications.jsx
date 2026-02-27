import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

export default function Publications() {
  const { publications } = data;

  return (
    <section id="publications" className="section-py" style={{ background: 'var(--dark2)' }}>
      <div className="container">

       
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Research</span>
          <h2 className="section-title">Publications</h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto', fontSize: '0.95rem' }}>
            Peer-reviewed academic research and technical publications
          </p>
        </motion.div>

        {publications.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card mb-4" style={{ overflow: 'hidden', position: 'relative' }}>

             
              <div style={{ height: 4, background: 'linear-gradient(90deg, var(--secondary), var(--primary), var(--purple))' }} />

            
              <div style={{
                position: 'absolute', top: -80, right: -80, width: 320, height: 320,
                background: 'var(--secondary)', borderRadius: '50%',
                filter: 'blur(110px)', opacity: 0.06, pointerEvents: 'none',
              }} />

              <div className="p-4 p-md-5">

               
                <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                  <span style={{
                    fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                    padding: '4px 14px', borderRadius: 99,
                    background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
                    color: 'var(--secondary)',
                  }}>
                    <i className="bi bi-journal-text me-1" /> {pub.type}
                  </span>
                  <span style={{
                    fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '4px 14px', borderRadius: 99,
                    background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                    color: 'var(--success)',
                  }}>
                    <i className="bi bi-check-circle-fill me-1" /> Published
                  </span>
                  <span style={{
                    fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '4px 14px', borderRadius: 99,
                    background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                    color: 'var(--accent)',
                  }}>
                    <i className="bi bi-graph-up me-1" /> Impact Factor: {pub.impactFactor}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
                    <i className="bi bi-calendar3 me-1" style={{ color: 'var(--primary-light)' }} />
                    {pub.year}
                  </span>
                </div>

               
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 700, color: 'var(--text)',
                  marginBottom: 16, lineHeight: 1.2,
                }}>
                  {pub.title}
                </h3>

                

              
                <div
                  className="d-flex flex-wrap gap-4 p-3 mb-4 rounded-3"
                  style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.12)' }}
                >
                  {[
                    { icon: 'bi-book-fill', color: 'var(--secondary)', label: 'Journal', value: pub.journal },
                    { icon: 'bi-layers-fill', color: 'var(--secondary)', label: 'Volume', value: pub.volume },
                    { icon: 'bi-file-text-fill', color: 'var(--secondary)', label: 'Pages', value: `pp. ${pub.pageRange}` },
                    { icon: 'bi-shield-check', color: 'var(--success)', label: 'Certification', value: pub.certification },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <i className={`bi ${item.icon}`} style={{ color: item.color, fontSize: '0.9rem', marginTop: 3 }} />
                      <div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text)', fontWeight: 600 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

               
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span style={{ padding: '5px 14px', borderRadius: 8, background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--purple)', fontWeight: 700 }}>e-ISSN:</span> {pub.issn.eISSN}
                  </span>
                  <span style={{ padding: '5px 14px', borderRadius: 8, background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--purple)', fontWeight: 700 }}>p-ISSN:</span> {pub.issn.pISSN}
                  </span>
                </div>

                
                <div className="mb-4">
                  <h6 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="bi bi-card-text" style={{ color: 'var(--primary-light)' }} /> Abstract
                  </h6>
                  <div className="p-4" style={{ background: 'rgba(99,102,241,0.04)', borderRadius: 12, borderLeft: '3px solid rgba(99,102,241,0.35)' }}>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-muted)', margin: 0, fontStyle: 'italic', textAlign: 'justify' }}>
                      "{pub.abstract}"
                    </p>
                  </div>
                </div>

                

               
                <div
                  className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div style={{ fontSize: '0.77rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                    <i className="bi bi-link-45deg me-1" style={{ color: 'var(--primary-light)' }} />
                    <a href={pub.link} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-light)' }}>
                      irjet.net · IRJET-V8I5586
                    </a>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-hero-primary d-inline-flex align-items-center gap-2"
                    style={{ padding: '10px 26px', fontSize: '0.83rem', whiteSpace: 'nowrap' }}
                  >
                    <i className="bi bi-file-earmark-pdf-fill" /> Read Full Paper
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
