// All site content lives here so it can be edited without touching components.

export const profile = {
  name: 'Fabian Guevara Torguet',
  shortName: 'Fabian',
  role: 'Full Stack & Mobile Developer',
  email: 'fgtdev753@gmail.com',
  whatsapp: '+555499154545', // international format, used for the wa.me link
  // TODO: add your real profile URLs (leave empty to hide the icon)
  github: 'https://github.com/FGTLight',
  linkedin: '',
  tagline:
    'I build fast, accessible web apps and cross-platform mobile apps — from the REST API to the last pixel.',
};

export const about = {
  paragraphs: [
    "I'm a Full Stack developer since 2024 and a mobile developer since 2025, working with React and Node.js on the web and Flutter on mobile.",
    "I hold a Computer Science degree from the University of Informatics Sciences (UCI), where I built a strong foundation in software engineering, algorithms and databases.",
    'I enjoy turning ideas into clean, maintainable products and I care about performance, accessibility and good developer experience.',
  ],
  facts: [
    { label: 'Full Stack', value: 'since 2024' },
    { label: 'Mobile (Flutter)', value: 'since 2025' },
    { label: 'Education', value: 'B.Sc. Computer Science — UCI' },
  ],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'C1' },
    { name: 'Portuguese', level: '' }, // TODO: add your level (e.g. B1)
  ],
};

export const skillGroups = [
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'BLoC', 'Riverpod', 'Google Maps', 'Background location'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Query', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST APIs', 'Supabase', 'PostgreSQL / PostGIS', 'SQLite (drift)'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub Actions', 'Vite', 'Vitest', 'Testing (unit, widget, bloc)'],
  },
];

// Leave `repo`, `demo` or `image` empty to hide them.
export const projects = [
  {
    title: 'PulseRoute',
    type: 'Mobile',
    description:
      'GPS tracker for runs and rides with a community safety layer: live route with background tracking, offline-first storage, PostGIS geo queries, realtime incident reports and alerts for hazards ahead on your path. 139 automated tests.',
    tech: ['Flutter', 'BLoC', 'Supabase', 'PostGIS', 'Google Maps', 'drift (SQLite)'],
    image: './projects/pulseroute.png',
    repo: 'https://github.com/FGTLight/pulseroute',
    demo: 'https://github.com/FGTLight/pulseroute/releases/latest',
  },
  {
    title: 'TaskFlow',
    type: 'Mobile',
    description:
      'Offline-first Android task manager with categories, priorities, reminder notifications and productivity stats. Feature-first clean architecture, 44 automated tests and CI that ships a release APK.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'drift (SQLite)', 'go_router', 'GitHub Actions'],
    image: './projects/taskflow.png',
    repo: 'https://github.com/FGTLight/task-system',
    demo: 'https://github.com/FGTLight/task-system/releases/latest',
  },
  {
    title: 'Cartly',
    type: 'Full Stack',
    description:
      'Full-stack online store: catalog with search, filters and pagination, persistent cart, accounts, simulated checkout and an admin panel for products, images and orders. Prices and stock are enforced in Postgres with Row Level Security and a transactional order function. 65 automated tests.',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'TanStack Query', 'Tailwind CSS'],
    image: './projects/cartly.png',
    repo: 'https://github.com/FGTLight/cartly',
    demo: 'https://fgtlight.github.io/cartly/',
  },
];
