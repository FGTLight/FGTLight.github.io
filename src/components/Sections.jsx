import { useState } from 'react';
import { about, profile, projects, skillGroups } from '../data.js';
import {
  ArrowUpIcon,
  CheckIcon,
  CopyIcon,
  ExternalIcon,
  GithubIcon,
  LayoutIcon,
  LinkedinIcon,
  MailIcon,
  MobileIcon,
  ServerIcon,
  ToolIcon,
  WhatsappIcon,
} from './Icons.jsx';

const whatsappUrl = `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`;

function SectionHeading({ index, label, title, id }) {
  return (
    <header className="section-heading">
      <span className="mono-label">
        {index} — {label}
      </span>
      <h2 id={id}>{title}</h2>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="socials">
      {profile.github && (
        <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GithubIcon />
        </a>
      )}
      {profile.linkedin && (
        <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <LinkedinIcon />
        </a>
      )}
      <a className="icon-btn" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
        <MailIcon />
      </a>
      {profile.whatsapp && (
        <a className="icon-btn" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${profile.whatsapp}`}>
          <WhatsappIcon />
        </a>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <p className="mono-label hero__hello">
        <span className="status-dot" aria-hidden="true" /> hello, world
      </p>
      <h1 id="hero-title">
        Hi, I'm {profile.shortName}.<br />
        <span className="gradient-text">{profile.role}.</span>
      </h1>
      <p className="hero__tagline">{profile.tagline}</p>
      <div className="hero__cta">
        <a href="#projects" className="btn btn--primary">
          View projects
        </a>
        <a href="#contact" className="btn btn--ghost">
          Get in touch
        </a>
      </div>
      <SocialLinks />
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <SectionHeading index="01" label="about" title="About me" id="about-title" />
      <div className="about">
        <div className="about__text">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="card about__card">
          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mono-label">languages</h3>
          <ul className="lang-list">
            {about.languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                {l.level && <span className="pill">{l.level}</span>}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

const groupIcons = { Mobile: MobileIcon, Frontend: LayoutIcon, Backend: ServerIcon, Tools: ToolIcon };

export function Skills() {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <SectionHeading index="02" label="skills" title="Skills & tools" id="skills-title" />
      <div className="grid grid--skills">
        {skillGroups.map((g) => {
          const Icon = groupIcons[g.title] ?? ToolIcon;
          return (
            <article key={g.title} className="card skill-card">
              <div className="skill-card__icon">
                <Icon />
              </div>
              <h3>{g.title}</h3>
              <ul className="tags">
                {g.items.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section container" aria-labelledby="projects-title">
      <SectionHeading index="03" label="projects" title="Selected projects" id="projects-title" />
      <div className="grid grid--projects">
        {projects.map((p, i) => (
          <article key={p.title} className="card project-card">
            {p.image && (
              <img
                className="project-card__image"
                src={p.image}
                alt={`${p.title} screenshots`}
                loading="lazy"
                width="1280"
                height="720"
              />
            )}
            <div className="project-card__top">
              <span className="mono-label">{String(i + 1).padStart(2, '0')} / {p.type}</span>
              <div className="project-card__links">
                {p.repo && (
                  <a className="icon-btn" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source code on GitHub`}>
                    <GithubIcon />
                  </a>
                )}
                {p.demo && (
                  <a className="icon-btn" href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`}>
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags tags--mono" aria-label="Technologies">
              {p.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section container" aria-labelledby="contact-title">
      <div className="card contact">
        <SectionHeading index="04" label="contact" title="Let's build something together" id="contact-title" />
        <p>
          I'm open to full-time roles, freelance projects and collaborations. Whether you have a question or just want
          to say hi, my inbox is open.
        </p>
        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            <MailIcon /> Say hello
          </a>
          {profile.whatsapp && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost mono"
              aria-label={`Chat on WhatsApp at ${profile.whatsapp}`}
            >
              <WhatsappIcon /> {profile.whatsapp}
            </a>
          )}
          <button type="button" className="btn btn--ghost mono" onClick={copyEmail}>
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? 'Copied!' : profile.email}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
        <a href="#top" className="icon-btn" aria-label="Back to top">
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
}
