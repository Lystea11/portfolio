export type ProjectTier = "top" | "strong" | "smaller";
export type FilterCategory = "Cybersecurity" | "NPM Package" | "Web" | "Data";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  blogAngle: string;
  tier: ProjectTier;
  category: string;
  filterCategory: FilterCategory;
  index: number;
  // Visual layout hints
  size: "featured" | "tall" | "wide" | "standard";
  accentHue: number; // for generating unique color tints
  video?: string; // optional video preview path (e.g. "/ap-ally.webm")
  github?: string; // full GitHub URL (e.g. "https://github.com/Lystea11/ap-ally")
  url?: string; // optional live site URL
};

// Parsed from projects.md — structured for the portfolio
export const projects: Project[] = [
  {
    slug: "metaframe",
    title: "MetaFrame",
    tagline: "3D portfolio with Three.js",
    description:
      "Product page for Metaframe, showcasing 3D visualizations and animations at a professional level.",
    techStack: [
      "Next.js",
      "React",
      "Three.js",
      "@react-three/fiber",
      "Framer Motion",
      "TailwindCSS",
    ],
    highlights: [
      "Three.js 3D visualizations",
      "Framer Motion animations",
      "Full marketing site layout",
      "Mobile/desktop responsive",
    ],
    blogAngle:
      "Real product page, not just a good-lookging hero.",
    tier: "strong",
    category: "3D · Web Design",
    filterCategory: "Web",
    index: 13,
    size: "featured",
    accentHue: 260,
    video: "/metav2.webm",
    github: "https://github.com/Lystea11/metaframe",
    url: "https://metaframesecurity.com",
  },
  {
    slug: "bus-optimization",
    title: "BusOptimization",
    tagline: "RAPTOR transit routing algorithm in Rust",
    description:
      "A high-performance implementation of the backward RAPTOR (Round-based Public Transit Routing) algorithm in Rust, designed to compute optimal bus routes arriving at a destination by a target time. Implements a real algorithm that parallelizes across all CPU cores.",
    techStack: [
      "Rust",
      "Rayon",
      "Bitvec",
      "Serde",
      "Haversine",
    ],
    highlights: [
      "Academic-grade RAPTOR algorithm implementation",
      "Rust systems-level programming",
      "Parallel processing with Rayon",
      "Sub-second query on hundreds of stops",
      "Geospatial transfer generation",
    ],
    blogAngle:
      "Academic-grade algorithm in a systems language with real performance characteristics. Demonstrates algorithmic thinking at a high level.",
    tier: "top",
    category: "Systems · Algorithms",
    filterCategory: "Data",
    index: 2,
    size: "tall",
    accentHue: 200,
    video: "/busv2.webm",
    github: "",
    url: "",
  },
  {
    slug: "packet-analysis",
    title: "PacketAnalysis",
    tagline: "ML-based network anomaly detection",
    description:
      "A machine learning-based network traffic anomaly detection system using unsupervised learning built for the Metaframe project. Combines three detection methods: Isolation Forest, Entropy Analysis, and Behavioral Profiling. Handles 2M+ network flows with confidence scoring and vectorized operations for 10-100x speedup.",
    techStack: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
    ],
    highlights: [
      "Unsupervised ML — no labeled training data required",
      "Ensemble scoring from three independent methods",
      "Handles 2M+ network flows",
      "10-100x speedup with vectorized operations",
      "Works with UNSW-NB15 cybersecurity benchmark",
    ],
    blogAngle:
      "Cybersecurity + ML to create an advanced detection algorithm. Used and deployed in a real project.",
    tier: "top",
    category: "Cybersecurity · ML",
    filterCategory: "Cybersecurity",
    index: 3,
    size: "wide",
    accentHue: 150,
    video: "/packetanalysisv2.webm",
    github: "https://github.com/Lystea11/PacketAnalysis",
    url: "",
  },
  {
    slug: "life-os",
    title: "life-os",
    tagline: "Personal dashboard PWA for students",
    description:
      "A comprehensive personal dashboard for ASIJ students. Combines academics (grades, tests), finances, scheduling, and college planning into a single PWA. Created an Edsby API to reach the backend and retrieve grade information.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "react-big-calendar",
      "Recharts",
      "@dnd-kit",
      "TailwindCSS",
    ],
    highlights: [
      "14+ page routes covering grades, schedule, finance, college",
      "PWA — installable as native-feeling app",
      "College Scorecard API integration",
      "Fully customized Edsby API integration",
      "Full Supabase SSR + Google Auth",
    ],
    blogAngle:
      "A comprehensive personal dashboard for ASIJ students. Built to address a real need for a one-stop solution.",
    tier: "top",
    category: "Full-Stack · PWA",
    filterCategory: "Web",
    index: 4,
    size: "standard",
    accentHue: 280,
    video: "/life-osv2.webm",
    github: "https://github.com/Lystea11/life-os",
    url: "https://life-os-five-eta.vercel.app",
  },
  {
    slug: "ap-ally",
    title: "AP-Ally",
    tagline: "AI-powered study ecosystem for AP students",
    description:
      "A full-stack, AI-powered study platform for Advanced Placement (AP) students. Includes a web app and a React Native mobile app. For accurate AI output, the platform implements a RAG pipeline using Pinecone vector embeddings for intelligent study material retrieval, AI-generated personalized study plans via Google Genkit, and interactive math rendering with LaTeX and diagrams",
    techStack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Firebase",
      "Supabase",
      "Genkit AI",
      "Pinecone",
      "TailwindCSS",
    ],
    highlights: [
      "Full cross-platform ecosystem — web, iOS, and Android",
      "RAG pipeline using Pinecone vector embeddings",
      "AI-generated personalized study plans",
      "~70% code reuse between web and mobile",
      "Production-ready deployment configs",
    ],
    blogAngle:
      "Full-stack web + mobile development, AI/ML integration, and a real product vision for education technology.",
    tier: "top",
    category: "Full-Stack · AI · EdTech",
    filterCategory: "Web",
    index: 1,
    size: "featured",
    accentHue: 38,
    video: "/ap-allyv2.webm",
    github: "https://github.com/Lystea11/Ap-Ally",
    url: "https://ap-ally.com",
  },
  {
    slug: "jumble-jobs",
    title: "Jumble Jobs",
    tagline: "Prototype of a tinder-style job search website.",
    description:
      "Tinder-like web application designed to help users find jobs in a simple, swipe-based interface. This proof-of-concept project was built for a Waseda University student’s final year-long course, aiming to showcase a basic yet innovative approach to job searching.",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "Spline 3D",
      "Auth",
    ],
    highlights: [
      "3D spline interactive elements",
      "Authentication with firebase",
      "Innovative idea with MVP execution",
    ],
    blogAngle:
      "Built for a real college final, full MVP.",
    tier: "strong",
    category: "Front-end · 3D",
    filterCategory: "Web",
    index: 12,
    size: "standard",
    accentHue: 317,
    video: "JumbleJ.webm",
    github: "https://github.com/Lystea11/JumbleJobs",
    url: "https://lystea11.github.io/JumbleJobs/",
  },
  {
    slug: "pcbfile",
    title: "PCBFile / IEDF",
    tagline: "Open electronics design file format spec",
    description:
      "[IN DEVELOPMENT] A specification for a new open electronics design file format called IEDF (Intelligent Electronics Design Format), designed to replace Gerber, KiCad, Altium, and ODB++ formats. Seven core design principles covering intent preservation, determinism, and machine readability.",
    techStack: [
      "JSON Schema",
      "UUIDv7",
      "RFC 8785",
      "SHA-256",
    ],
    highlights: [
      "Seven core design principles",
      "UUIDv7-based object identity",
      "Patch-based safety model with rollback",
      "AI/ML-ready typed property graphs",
      "Hash chain auditability",
    ],
    blogAngle:
      "Standards/specification project that shows thinking at the architecture level about industry-wide problems.",
    tier: "top",
    category: "Standards · Architecture",
    filterCategory: "Data",
    index: 7,
    size: "standard",
    accentHue: 60,
    video: "/IEDFv2.webm",
    github: "https://github.com/Lystea11/IEDF",
    url: "",
  },
  {
    slug: "data-nhl",
    title: "NHL Analytics",
    tagline: "Sports prediction with ensemble ML",
    description:
      "Multiple sports prediction models built for the Wharton Data Science Challenge. NHL game outcome prediction using Elo ratings + XGBoost ensemble.",
    techStack: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
    ],
    highlights: [
      "Elo ratings + XGBoost ensemble",
      "Wharton Data Science Challenge submission",
      "Walk-forward temporal validation",
      "Handles datasets with 123M+ rows",
      "Bradley-Terry + Dixon-Coles models",
    ],
    blogAngle:
      "Data science + sports analytics with proper methodology.",
    tier: "strong",
    category: "Data Science · Sports",
    filterCategory: "Data",
    index: 8,
    size: "standard",
    accentHue: 220,
    video: "/datav2.webm",
    github: "https://github.com/Lystea11/NHL-Analytics",
    url: "",
  },
  {
    slug: "mirai-collective",
    title: "Mirai Collective",
    tagline: "Nonprofit consultancy portfolio site",
    description:
      "Portfolio website for Mirai Collective, a student-led nonprofit consultancy connecting international nonprofits with Japanese communities. Full responsive website with contact forms and partner showcase.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Firebase",
    ],
    highlights: [
      "Real nonprofit organization",
      "Full responsive design",
      "AI integration with Genkit",
      "Custom design system",
    ],
    blogAngle:
      "Co-founder of a real non-profit, built to showcase and connect.",
    tier: "strong",
    category: "Web · Nonprofit",
    filterCategory: "Web",
    index: 10,
    size: "tall",
    accentHue: 350,
    video: "/miraiv2.webm",
    github: "https://github.com/Lystea11/Mirai-Collective",
    url: "https://mirai-collective.com",
  },
  {
    slug: "ibrahim-portfolio",
    title: "Ibrahim Portfolio",
    tagline: "A custom-built portfolio for a college student. Built as part of a web-development agency.",
    description:
      "personal portfolio website created for a client who wanted a colorful and simple presentation. The main feature of this website is its dynamic background, created using a physics canvas powered by Matter.js.",
    techStack: [
      "HTML",
      "JS",
      "CSS",
    ],
    highlights: [
      "Fully customizable UI",
      "Global color scheme",
      "Matter.js for interactive background",
      "GSAP animations",
    ],
    blogAngle:
      "Front-end development with real work experience.",
    tier: "strong",
    category: "Front-End · UI",
    filterCategory: "Web",
    index: 10,
    size: "wide",
    accentHue: 77,
    video: "ibrahim.webm",
    github: "https://github.com/Lystea11/IbrahimPortfolio",
    url: "https://lystea11.github.io/IbrahimPortfolio/",
  },
  {
    slug: "tiny-progress",
    title: "tiny-progress",
    tagline: "Ultra-minimal CLI progress indicators",
    description:
      "An ultra-minimal progress indicator library for Node.js CLI tools — dots, bars, and spinners. Less than 5KB bundle with TTY auto-detection, published on NPM.",
    techStack: [
      "JavaScript",
      "Node.js",
    ],
    highlights: [
      "<5KB bundle",
      "TTY auto-detection",
      "Published on NPM",
      "Zero dependencies",
    ],
    blogAngle:
      "Shows ability to create and publish developer tools. Small but polished.",
    tier: "strong",
    category: "NPM Package · CLI",
    filterCategory: "NPM Package",
    index: 11,
    size: "standard",
    accentHue: 140,
    video: "/tinyv2.webm",
    github: "https://github.com/Lystea11/tiny-progress",
    url: "https://www.npmjs.com/package/tiny-progress",
  },
  {
    slug: "shortly-agency",
    title: "Shortly Agency",
    tagline: "Website designed to showcase and explain the business of a small agency.",
    description:
      "Client wanted a compact, yet aesthetically pleasing web app. The website implements an elegant design with smooth transitions, and a wow factor for creativity.",
    techStack: [
      "HTML",
      "JS",
      "CSS",
      "SPLINE",
      "3D",
    ],
    highlights: [
      "3D interactive element",
      "Smooth GSAP scroll animations",
      "Dark/Light mode switch",
    ],
    blogAngle:
      "Shows real work experience and the ability to create simple, yet useful web applications.",
    tier: "strong",
    category: "Front-end · UI",
    filterCategory: "Web",
    index: 11,
    size: "tall",
    accentHue: 260,
    video: "shortly.webm",
    github: "https://github.com/Lystea11/Shortly-Agency",
    url: "https://lystea11.github.io/Shortly-Agency/",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getTopProjects(): Project[] {
  return projects.filter((p) => p.tier === "top");
}

export function getAllProjects(): Project[] {
  return projects;
}
