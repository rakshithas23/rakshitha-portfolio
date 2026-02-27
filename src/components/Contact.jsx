import { useState } from 'react';
import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

export default function Contact() {
  const { personal, certifications } = data;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
  e.preventDefault();
  setError('');

  // Manual validation
  if (!form.name.trim() || form.name.trim().length < 2) {
    setError('Please enter your full name (at least 2 characters).'); return;
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    setError('Please enter a valid email address.'); return;
  }
  if (!form.subject.trim()) {
    setError('Please enter a subject.'); return;
  }
  if (!form.message.trim() || form.message.trim().length < 0) {
    setError('Message must be at least 1 characters.'); return;
  }

  setLoading(true);

  const res = await fetch('https://formspree.io/f/meeldqdv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      name:    form.name,
      email:   form.email,
      subject: form.subject,
      message: form.message,
    }),
  });

  const data = await res.json();
  setLoading(false);

  if (res.ok) {
    setSubmitted(true);
  } else {
    setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again!');
  }
};

  const contactItems = [
    { icon: 'bi-envelope-fill', label: 'Email', val: personal.email, href: `mailto:${personal.email}` },
    { icon: 'bi-geo-alt-fill', label: 'Location', val: personal.location, href: null },
    { icon: 'bi-linkedin', label: 'LinkedIn', val: 'linkedin.com/in/rakshitha-srinivasa', href: personal.linkedin },
    { icon: 'bi-telephone-fill', label: 'Phone', val: personal.phone, href: `tel:${personal.phone}` },
  ];

  return (
    <section id="contact" className="section-py">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto', fontSize: '0.95rem' }}>
            I'm currently open to internships and full-time opportunities. Let's build something great together!
          </p>
        </motion.div>

        <div className="row g-5">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-card p-4 mb-4">
                <h5 className="fw-bold mb-4" style={{ color: 'var(--text)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <i className="bi bi-person-lines-fill me-2" style={{ color: 'var(--primary-light)' }} />
                  Contact Info
                </h5>
                {contactItems.map(c => (
                  <div key={c.label} className="contact-info-item">
                    <div className="contact-icon-wrap">
                      <i className={`bi ${c.icon}`} />
                    </div>
                    <div>
                      <div className="contact-label">{c.label}</div>
                      <div className="contact-value">
                        {c.href
                          ? <a href={c.href} target={c.label === 'LinkedIn' ? '_blank' : undefined} rel="noreferrer">{c.val}</a>
                          : <span>{c.val}</span>
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-4">
                <h5 className="fw-bold mb-4" style={{ color: 'var(--text)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <i className="bi bi-award-fill me-2" style={{ color: 'var(--accent)' }} />
                  Certifications & Publications
                </h5>
                {certifications.map((c, i) => (
                  <div key={i} className="cert-item">
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      background: c.type === 'pub' ? 'rgba(6,182,212,0.12)' : 'rgba(245,158,11,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: c.type === 'pub' ? 'var(--secondary)' : 'var(--accent)',
                      fontSize: '0.85rem',
                    }}>
                      <i className={`bi ${c.icon}`} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 500, color: 'var(--text)', lineHeight: 1.4 }}>{c.title}</div>
                      {c.note && <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>{c.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>


          <div className="col-lg-7">
            <motion.div
              className="glass-card p-4 p-md-5"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <div className="text-center py-4">
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✨</div>
                  <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', fontStyle: 'italic', marginBottom: 8 }}>
                    Message Sent!
                  </h4>
                  <p style={{ color: 'var(--text-muted)' }}>
                    Thanks for reaching out, <strong style={{ color: 'var(--primary-light)' }}>{form.name}</strong>!
                    I'll get back to you soon.
                  </p>
                  <button
                    className="btn btn-hero-outline mt-3"
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h5 className="fw-bold mb-4" style={{ color: 'var(--text)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <i className="bi bi-send-fill me-2" style={{ color: 'var(--primary-light)' }} />
                    Send a Message
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Name
                        </label>
                        <input
                          name="name" type="text" required
                          className="form-control"
                          placeholder="Your full name"
                          value={form.name} onChange={handleChange}
                          style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text)', padding: '11px 14px' }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Email
                        </label>
                        <input
                          name="email" type="email" required
                          className="form-control"
                          placeholder="your@email.com"
                          value={form.email} onChange={handleChange}
                          style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text)', padding: '11px 14px' }}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Subject
                      </label>
                      <input
                        name="subject" type="text"
                        className="form-control"
                        placeholder="What's this about?"
                        value={form.subject} onChange={handleChange}
                        style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text)', padding: '11px 14px' }}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Message
                      </label>
                      <textarea
                        name="message" rows={5} required
                        className="form-control"
                        placeholder="Let's build something amazing together..."
                        value={form.message} onChange={handleChange}
                        style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text)', padding: '11px 14px', resize: 'vertical' }}
                      />
                    </div>
                    {error && (
                      <div className="alert d-flex align-items-center gap-2 mb-3" style={{
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.3)',
                        borderRadius: 10,
                        color: '#f87171',
                        fontSize: '0.85rem',
                        padding: '10px 14px',
                      }}>
                        <i className="bi bi-exclamation-circle-fill" />
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-hero-primary w-100 d-flex align-items-center justify-content-center gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <><span className="spinner-border spinner-border-sm" /> Sending...</>
                      ) : (
                        <><i className="bi bi-send-fill" /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
