import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'DUR E PAKEEZA',
  title: 'Frontend Developer | WordPress Developer',
  email: 'durepakeeza2007@gmail.com',
  shortBio:
    'I design and develop responsive, modern websites that combine clean interfaces, thoughtful user experiences, and reliable frontend development.',
  fullBio: [
    'With over 3 years of hands-on experience, I specialize in translating high-end digital concepts into fluid, responsive, and performance-driven websites. My expertise spans custom frontend engineering using modern HTML5, CSS3, and JavaScript, paired with deep mastery of the WordPress ecosystem, Elementor, and Elementor Pro.',
    'I bridge the gap between creative visual design and reliable technical execution. Whether crafting bespoke e-commerce experiences on WooCommerce, engineering sleek portfolio layouts, or customizing WordPress architectures, I focus on pixel perfection, clean code, cross-browser compatibility, and sub-second load times.'
  ],
  yearsOfExperience: '3+',
  location: 'Remote · Worldwide Available',
  availability: 'Available for Freelance & Full-time Roles',
  linkedinUrl: 'https://www.linkedin.com/in/dur-e-pakeeza',
  behanceUrl: 'https://www.behance.net/durepakeeza'
};

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-aurélia',
    number: '01',
    title: 'E-Commerce Website',
    category: 'Luxury Retail & WooCommerce',
    client: 'Aurélia Horlogerie & High Jewelry',
    year: '2024',
    role: 'Lead WordPress & WooCommerce Developer',
    technologies: ['WordPress', 'WooCommerce', 'Elementor Pro'],
    description:
      'A bespoke luxury timepiece and jewelry shopping experience featuring tailored catalog browsing, interactive product galleries, custom checkout flows, and sub-second page transitions.',
    image: '/src/assets/images/project_ecommerce_luxury_1794489141391.jpg',
    alt: 'Aurélia luxury watch and fine jewelry e-commerce website interface displayed on a high-end desktop monitor',
    overview:
      'Developed a high-converting, luxury e-commerce platform for high-end artisan timepieces and bespoke jewelry. The client required a digital flagship store that reflected timeless elegance without sacrificing WooCommerce checkout speed and mobile conversion.',
    challenge:
      'High-resolution imagery of precious metals and detailed dials created heavy payloads. Standard WooCommerce templates felt rigid and generic, lacking the editorial sophistication required by high-luxury collectors.',
    solution:
      'Built a fully customized Elementor Pro design system integrated with WooCommerce. Implemented smart lazy loading, WebP picture tags, dynamic AJAX cart drawers, custom product taxonomy filtering, and an streamlined single-page checkout.',
    deliverables: [
      'Custom Elementor Pro header & single-product templates',
      'Dynamic WooCommerce filter & currency selector',
      'AJAX side-cart drawer & rapid one-step checkout',
      'Fluid mobile responsive breakpoints & touch-friendly swipe gallery'
    ],
    metrics: [
      { label: 'Mobile Conversion Rate', value: '+38%' },
      { label: 'PageSpeed Score (Mobile)', value: '96/100' },
      { label: 'Average Session Duration', value: '3m 45s' }
    ],
    liveDemoType: 'ecommerce'
  },
  {
    id: 'portfolio-studio-aeterna',
    number: '02',
    title: 'Personal Portfolio Website',
    category: 'Architectural & Design Monograph',
    client: 'Studio Aeterna Architecture',
    year: '2024',
    role: 'Frontend & WordPress Developer',
    technologies: ['WordPress', 'Elementor Pro', 'HTML', 'CSS', 'JavaScript'],
    description:
      'An editorial digital portfolio for an international architectural studio, blending large-scale photography, refined typography, custom smooth transitions, and project archive filtering.',
    image: '/src/assets/images/project_editorial_portfolio_1794489141420.jpg',
    alt: 'Studio Aeterna editorial dark-mode architectural portfolio website mockup with Casa Selene showcase',
    overview:
      'Designed and engineered an avant-garde digital monograph for an award-winning architectural firm. The goal was to let monolithic concrete and glass structures speak through clean framing, intentional negative space, and typographic dignity.',
    challenge:
      'Achieving fluid full-screen responsive layouts without horizontal shifts, alongside smooth JavaScript scroll reveals that perform smoothly across iOS Safari and high-DPI desktop screens.',
    solution:
      'Crafted custom CSS Grid layouts with lightweight JavaScript scroll-observer triggers and Elementor Pro custom loop templates. Optimized media queries for ultrawide desktop monitors down to compact mobile viewports.',
    deliverables: [
      'Bespoke architectural project case study templates',
      'Interactive category filter with smooth state persistence',
      'Custom JavaScript lightbox with EXIF & plan overlays',
      'Zero-layout-shift typography hierarchy with Cormorant Garamond'
    ],
    metrics: [
      { label: 'First Contentful Paint', value: '0.6s' },
      { label: 'Cumulative Layout Shift', value: '0.00' },
      { label: 'Inbound Project Inquiries', value: '+52%' }
    ],
    liveDemoType: 'portfolio'
  },
  {
    id: 'notes-zen-workspace',
    number: '03',
    title: 'Notes Taking App',
    category: 'Productivity & Web Application',
    client: 'ZenNote Web Productivity',
    year: '2023',
    role: 'Frontend JavaScript Developer',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A sleek, distraction-free markdown note-taking web application featuring real-time preview, notebook organization, tag filtering, local storage persistence, and keyboard shortcuts.',
    image: '/src/assets/images/project_notes_app_1794489141168.jpg',
    alt: 'ZenNote dark mode modern markdown notes taking web application interface with multi-pane layout',
    overview:
      'Architected a standalone, browser-first productivity application focused on speed and simplicity. Built purely with semantic HTML5, modern CSS custom properties, and vanilla JavaScript for lightning-fast performance.',
    challenge:
      'Maintaining instant keystroke rendering in markdown preview while managing hierarchical state (notebooks, tags, pinned notes) with zero external library overhead.',
    solution:
      'Created an event-driven state architecture using native Web Storage API, debounced markdown parsing, custom modal dialogs, and a responsive 3-panel split layout with collapsible navigation.',
    deliverables: [
      'Live two-way markdown preview engine with syntax highlighting',
      'Hierarchical notebook folders and color-coded tag manager',
      'Offline-ready localStorage persistence with JSON export/import',
      'Comprehensive keyboard shortcut support (Ctrl+N, Ctrl+S, Esc)'
    ],
    metrics: [
      { label: 'Bundle Size', value: '18 KB (Zero Libs)' },
      { label: 'Input Latency', value: '< 4ms' },
      { label: 'Daily Active Notes Created', value: '1,200+' }
    ],
    liveDemoType: 'notes'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Modern, standards-based web engineering for responsive and fluid user interfaces.',
    skills: [
      {
        name: 'HTML5',
        level: 'Expert',
        focus: 'Semantic markup, accessibility (a11y), clean DOM structure',
        description: 'Constructing robust semantic document trees that enhance screen reader compatibility, SEO indexing, and maintainable styles.'
      },
      {
        name: 'CSS3',
        level: 'Expert',
        focus: 'Flexbox, CSS Grid, animations, variables & responsive design',
        description: 'Deep mastery of layout engines, modern custom properties, fluid typography scaling, and smooth GPU-accelerated micro-interactions.'
      },
      {
        name: 'JavaScript',
        level: 'Advanced',
        focus: 'ES6+, DOM manipulation, asynchronous APIs, event handling',
        description: 'Writing clean, modular vanilla JavaScript for dynamic components, form validations, AJAX data fetching, and state management.'
      },
      {
        name: 'Responsive Web Design',
        level: 'Expert',
        focus: 'Mobile-first design, fluid breakpoints, cross-device testing',
        description: 'Crafting interfaces that look tailored across 320px mobile screens, tablets, laptops, and 4K ultrawide monitors.'
      }
    ]
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'Complete WordPress development, bespoke theme customization, and page builder mastery.',
    skills: [
      {
        name: 'WordPress',
        level: 'Expert',
        focus: 'Core architecture, theme & plugin ecosystems, site management',
        description: 'Deploying, configuring, and hardening WordPress environments with clean database practices and modular templates.'
      },
      {
        name: 'Elementor',
        level: 'Expert',
        focus: 'Visual layouts, responsive control, custom styling',
        description: 'Building modern layouts rapidly with pixel-precise spacing, custom positioning, and dynamic content binding.'
      },
      {
        name: 'Elementor Pro',
        level: 'Expert',
        focus: 'Theme Builder, WooCommerce templates, popup triggers, dynamic loops',
        description: 'Engineering site-wide dynamic headers, single-post layouts, archive loops, and tailored WooCommerce product displays.'
      },
      {
        name: 'Website Customization',
        level: 'Expert',
        focus: 'Child themes, custom CSS overrides, PHP hook integration',
        description: 'Extending themes and plugins beyond standard settings to match exact client branding and functional workflows.'
      },
      {
        name: 'Landing Page Development',
        level: 'Expert',
        focus: 'High-conversion design, CTA hierarchy, fast loading speeds',
        description: 'Designing focused campaign landing pages that maximize user retention, lead generation, and sales conversions.'
      }
    ]
  },
  {
    id: 'design-optimization',
    name: 'Design & Optimization',
    description: 'User-centric aesthetic polish paired with rigorous technical speed optimization.',
    skills: [
      {
        name: 'UI/UX Design',
        level: 'Advanced',
        focus: 'Visual hierarchy, luxury spacing, typography, user flow',
        description: 'Designing balanced layouts with intentional white space, disciplined color palettes, and intuitive interaction design.'
      },
      {
        name: 'Basic SEO',
        level: 'Advanced',
        focus: 'On-page SEO, meta tags, schema markup, Core Web Vitals',
        description: 'Implementing semantic headings, alt tags, canonical URLs, and structured metadata for search engine indexing.'
      },
      {
        name: 'Website Performance Optimization',
        level: 'Expert',
        focus: 'Asset minification, lazy loading, caching, 90+ PageSpeed',
        description: 'Optimizing media payloads, eliminating render-blocking resources, and achieving pristine Core Web Vitals scores.'
      },
      {
        name: 'Cross-Browser Compatibility',
        level: 'Expert',
        focus: 'Chrome, Safari, Firefox, Edge, iOS & Android parity',
        description: 'Rigorous cross-platform testing ensuring uniform visual fidelity and interactive reliability across all web browsers.'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools',
    description: 'Modern developer workflow and source control toolchain.',
    skills: [
      {
        name: 'Git',
        level: 'Proficient',
        focus: 'Branching, commit conventions, version tracking, merge resolution',
        description: 'Maintaining clean commit histories, feature branches, and safe code rollbacks.'
      },
      {
        name: 'GitHub',
        level: 'Proficient',
        focus: 'Repository management, collaboration, code reviews, deployments',
        description: 'Managing remote repositories, release tags, and automated publishing workflows.'
      },
      {
        name: 'Visual Studio Code',
        level: 'Expert',
        focus: 'Extensions, debugging, linting, optimized developer workflow',
        description: 'Configuring productive development environments with strict linting, formatting, and live debugging tools.'
      }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'FoxDev Studio',
    role: 'WordPress Developer',
    period: 'Oct 2024 – Apr 2026',
    location: 'Remote',
    responsibilities: [
      'Developed and customized responsive WordPress websites using Elementor and Elementor Pro.',
      'Created modern website layouts focused on usability, responsiveness and visual consistency.',
      'Customized pages, landing pages and website components.',
      'Optimized websites for desktop, tablet and mobile.'
    ],
    keyHighlights: [
      'Delivered 25+ client web projects with 99% on-time milestone completion.',
      'Engineered reusable Elementor component templates that reduced development time by 30%.',
      'Audited mobile responsiveness across multiple device viewports to eliminate horizontal shifts.'
    ]
  },
  {
    company: 'CodeHub',
    role: 'WordPress Developer',
    period: 'Aug 2022 – Apr 2024',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained WordPress websites.',
      'Customized layouts and content using WordPress and Elementor.',
      'Implemented responsive designs.',
      'Worked on website customization, troubleshooting and frontend improvements.'
    ],
    keyHighlights: [
      'Maintained and optimized 15+ live client WordPress websites with zero unexpected downtime.',
      'Resolved cross-browser layout inconsistencies across Safari, Firefox, and Chromium engines.',
      'Implemented custom CSS and JavaScript extensions to elevate default Elementor widgets.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Sargodha',
    period: '2017 – 2021',
    highlights:
      'Comprehensive study of computer systems, software engineering, algorithms, data structures, and web technologies.'
  },
  {
    degree: 'ICS – Intermediate in Computer Science',
    institution: 'Punjab Group of Colleges',
    period: '2015 – 2017',
    highlights:
      'Fundamental training in computer programming, mathematics, physics, and computational thinking.'
  }
];

export const STATS = [
  { number: '3+', label: 'Years Experience', detail: 'Professional frontend & WordPress development' },
  { number: '40+', label: 'Responsive Websites', detail: 'Crafted with pixel precision across devices' },
  { number: '100%', label: 'Frontend + WordPress', detail: 'Holistic design and technical execution' },
  { number: '24/7', label: 'Client-Focused Development', detail: 'Reliable communication and bespoke delivery' }
];
