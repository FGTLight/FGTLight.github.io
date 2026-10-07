import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons.jsx';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const linkRefs = useRef({});

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      // Scroll spy: the active section is the last one whose top has passed the navbar
      const offset = window.innerHeight * 0.35;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = null;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= offset) current = l.href;
      }
      if (atBottom) current = links[links.length - 1].href;
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Move the underline under the active link (re-measure on resize and once fonts load)
  useLayoutEffect(() => {
    const measure = () => {
      const el = active && linkRefs.current[active];
      if (!el) return setIndicator((i) => ({ ...i, width: 0 }));
      setIndicator({ left: el.offsetLeft + 14, width: el.offsetWidth - 28 });
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  // Close the mobile menu with Escape or when resizing to desktop
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 769px)');
    const onMq = (e) => e.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const isDark = theme === 'dark';

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="container navbar__inner" aria-label="Main">
        <a href="#top" className="logo" aria-label="Fabian Guevara Torguet — back to top">
          &lt;FG/&gt;
        </a>

        <ul id="nav-links" className={`nav-links${open ? ' nav-links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                ref={(el) => (linkRefs.current[l.href] = el)}
                className={active === l.href ? 'is-active' : undefined}
                aria-current={active === l.href ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li
            className="nav-indicator"
            aria-hidden="true"
            style={{
              width: indicator.width,
              transform: `translateX(${indicator.left}px)`,
              opacity: indicator.width ? 1 : 0,
            }}
          />
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light theme' : 'Dark theme'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-links"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
