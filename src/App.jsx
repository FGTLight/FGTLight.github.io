import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import { About, Contact, Footer, Hero, Projects, Skills } from './components/Sections.jsx';

// The initial theme is already set on <html> by the inline script in index.html.
const getInitialTheme = () => document.documentElement.getAttribute('data-theme') || 'light';

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
