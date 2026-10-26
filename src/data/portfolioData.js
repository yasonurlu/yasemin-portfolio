export const roles = [
  "Software Engineer",
  "FinTech Builder",
  "Coder",
  "Math Nerd",
];

export const experience = [
  {
    org: "ForInvest",
    role: "Android Engineering Intern",
    place: "Istanbul, Turkey",
    time: "June – July 2026",
    bullets: [
      "Engineered a real-time stock monitoring system polling REST APIs every second while maintaining a smooth 60 FPS UI using Kotlin Coroutines and StateFlow.",
      "Migrated the app UI from XML/Views to Jetpack Compose, replacing custom components with declarative composables.",
      "Designed a sealed-class state model to unify loading, error, and success states across the application.",
    ],
  },
  {
    org: "Boston University",
    role: "Grader",
    place: "Boston, MA",
    time: "Sept 2025 – May 2026",
    bullets: [
      "Evaluated coursework and provided feedback for 230+ students across statistics and web programming courses.",
      "Co-led CS103 discussion sections, teaching HTML, CSS, and JavaScript while mentoring students through debugging and frontend development.",
    ],
  },
  {
    org: "Ringlet",
    role: "Software Engineer Intern",
    place: "Boston, MA",
    time: "June – August 2025",
    bullets: [
      "Delivered cross-platform mobile features in React Native and TypeScript, shipping to production on iOS and Android.",
      "Designed backend APIs and frontend flows based on user feedback, improving friend discovery and event planning.",
      "Built end-to-end test infrastructure with Maestro and debugged performance across iOS and web.",
      "Worked in two-week agile sprints, demoing features directly to engineers and co-founders.",
    ],
  },
  {
    org: "Istanbul Portföy",
    role: "Financial Analyst Intern",
    place: "Istanbul, Turkey",
    time: "Dec 2024 – Jan 2025",
    bullets: [
      "Shadowed portfolio analysts to learn how asset allocation, risk exposure, and performance reviews are handled day to day.",
      "Joined daily market monitoring on the Bloomberg Terminal with a team managing 100M+ TRY in daily transactions.",
      "Reviewed financial statements of companies with 500M+ TRY in annual revenue, and saw how that analysis shaped investment decisions.",
    ],
  },
];

export const projects = [
  {
    name: "Market Data Engine",
    stack: "Python · asyncio · SQLite · pytest",
    tone: "sand",
    url: "https://github.com/yasonurlu/market-data-engine",
    linkText: "View on GitHub ↗",
    description:
      "An asynchronous market data pipeline ingesting 5-minute stock data from the Twelve Data API through concurrent producers and a bounded asyncio.Queue.",
    points: [
      "Modular producer/consumer architecture with swappable data-source and storage interfaces.",
      "In-memory per-symbol statistics with async SQLite persistence and indexed time-range queries.",
      "API retry with exponential backoff and typed async interfaces covered by pytest.",
    ],
  },
  // {
  //   name: "Portfolio Tracker",
  //   stack: "Python · FastAPI · React · SQLite",
  //   tone: "peach",
  //   url: "https://github.com/yasonurlu/portfolio-tracker",
  //   linkText: "View on GitHub ↗",
  //   description:
  //     "A full-stack portfolio tracking application for monitoring investments, market data, and portfolio performance.",
  //   points: [
  //     "Built a REST API for portfolio and market data management.",
  //     "Connected financial data to a responsive frontend for portfolio insights.",
  //     "Designed the application around modular backend services and persistent storage.",
  //   ],
  // },
  {
    name: "HobbyHabit",
    stack: "Kotlin · Jetpack Compose · MVVM",
    tone: "olive",
    url: "https://github.com/mdiazgar/HobbyHabit",
    linkText: "View on GitHub ↗",
    description:
      "An Android habit-tracking app built around MVVM, Room, and Retrofit with a clean separation between data, domain, and UI.",
    points: [
      "Managed asynchronous operations with Coroutines and StateFlow.",
      "Integrated the Ticketmaster API for location-based event discovery.",
      "Built streak analytics, calendar views, and activity history using Kotlin Flow.",
    ],
  },
  {
    name: "Sanvia",
    stack: "React · TypeScript · Vite · Firebase",
    tone: "burgundy",
    url: "https://sanvia.app/",
    linkText: "Visit Sanvia ↗",
    description:
      "An AI-powered health app where I built the core product interfaces, from the landing page to the AI chat.",
    points: [
      "Built core interfaces including the landing page, profile, and AI chat.",
      "Integrated OpenAI and Firebase APIs into a responsive frontend experience.",
      "Worked closely with backend engineers and designers to ship features quickly.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "React Native",
      "JavaScript",
      "HTML/CSS",
      "Vite",
    ],
  },
  {
    label: "Mobile",
    items: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Room",
      "Retrofit",
      "Coroutines",
      "StateFlow",
    ],
  },
  {
    label: "Backend & Tools",
    items: [
      "Python",
      "FastAPI",
      "Firebase",
      "REST APIs",
      "Docker",
      "Git",
      "SQL",
    ],
  },
];

export const interests = [
  {
    symbol: "∑",
    title: "Mathematics",
    text: "I enjoy the logic behind a good proof, and I've found that mathematical thinking makes me a better engineer.",
  },
  {
    symbol: "✈",
    title: "Travel",
    text: "I love exploring new cities, especially ones with strong art, history, and architecture.",
  },
  {
    symbol: "⌁",
    title: "Games & Puzzles",
    text: "From strategy games to daily puzzles, I like anything that makes me stop and figure out how a system works.",
  },
  {
    symbol: "◌",
    title: "Arts & History",
    text: "Museums, exhibitions, and theatre are a big part of how I spend time outside of tech.",
  },
];
