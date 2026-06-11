import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import data from '../data/portfolio.json';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = data.navigation.map(n => n.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 110) {
          setActive(ids[i]);
          return;
        }
      }
      setActive('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const collapse = document.querySelector('.navbar-collapse');
    if (collapse?.classList.contains('show')) collapse.classList.remove('show');
  };

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">

        <a
          className="navbar-brand navbar-brand-custom"
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
        >
          <span className="navbar-brand-dot" />
          {data.personal.firstName[0]}{data.personal.lastName[0]}
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          style={{ color: 'var(--primary-light)' }}
        >
          <i className="bi bi-list fs-4" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-1">
            {data.navigation.map((link) => (
              <li key={link.id} className="nav-item">
                <button
                  className={`nav-link nav-link-custom border-0 bg-transparent ${active === link.id ? 'active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href={data.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-hire ms-3"
          >
            <i className="bi bi-person-check-fill me-1" /> Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
