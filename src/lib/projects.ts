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
};

// Parsed from projects.md — structured for the portfolio
export const projects: Project[] = [
  {
    slug: "ap-ally",
    title: "AP-Ally",
    tagline: "AI-powered study ecosystem for AP students",
    description:
      "A full-stack AI-powered study platform for Advanced Placement students, spanning a web app, a React Native mobile app, and an earlier Flutter prototype. Features a RAG pipeline using Pinecone vector embeddings for intelligent study material retrieval, AI-generated personalized study plans via Google Genkit, and interactive math rendering with LaTeX and diagram support.",
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
      "Flagship project — full-stack web + mobile development, AI/ML integration, and a real product vision for education technology.",
    tier: "top",
    category: "Full-Stack · AI · EdTech",
    filterCategory: "Web",
    index: 1,
    size: "featured",
    accentHue: 38,
    video: "/ap-allyv2.webm",
  },
  {
    slug: "bus-optimization",
    title: "BusOptimization",
    tagline: "RAPTOR transit routing algorithm in Rust",
    description:
      "A high-performance implementation of the backward RAPTOR (Round-based Public Transit Routing) algorithm in Rust, designed to compute optimal bus routes arriving at a destination by a target time. Implements a real academic algorithm used in production transit systems with parallel processing across all CPU cores.",
    techStack: ["Rust", "Rayon", "Bitvec", "Serde", "Haversine"],
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
  },
  {
    slug: "packet-analysis",
    title: "PacketAnalysis",
    tagline: "ML-based network anomaly detection",
    description:
      "A machine learning-based network traffic anomaly detection system using unsupervised learning. Combines three detection methods: Isolation Forest, Entropy Analysis, and Behavioral Profiling. Handles 2M+ network flows with confidence scoring and vectorized operations for 10-100x speedup.",
    techStack: ["Python", "scikit-learn", "pandas", "NumPy"],
    highlights: [
      "Unsupervised ML — no labeled training data required",
      "Ensemble scoring from three independent methods",
      "Handles 2M+ network flows",
      "10-100x speedup with vectorized operations",
      "Works with UNSW-NB15 cybersecurity benchmark",
    ],
    blogAngle:
      "Cybersecurity + ML is a hot combination. Demonstrates real data science and security knowledge, not just a tutorial follow-along.",
    tier: "top",
    category: "Cybersecurity · ML",
    filterCategory: "Cybersecurity",
    index: 3,
    size: "wide",
    accentHue: 150,
    video: "/packetanalysisv2.webm",
  },
  {
    slug: "life-os",
    title: "life-os",
    tagline: "Personal dashboard PWA for students",
    description:
      "A comprehensive personal dashboard for students — combining academics (grades, tests), finances, scheduling, and college planning into a single PWA. Features 14+ page routes, drag-and-drop widget dashboard, College Scorecard API integration, and full auth system.",
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
      "Drag-and-drop widget dashboard",
      "Full Supabase SSR + Google Auth",
    ],
    blogAngle:
      "Shows the ability to architect a large, multi-feature application. The personal OS concept is compelling and relatable.",
    tier: "top",
    category: "Full-Stack · PWA",
    filterCategory: "Web",
    index: 4,
    size: "standard",
    accentHue: 280,
    video: "/life-osv2.webm",
  },
  {
    slug: "pcbfile",
    title: "PCBFile / IEDF",
    tagline: "Open electronics design file format spec",
    description:
      "A specification for a new open electronics design file format called IEDF (Intelligent Electronics Design Format), designed to replace Gerber, KiCad, Altium, and ODB++ formats. Seven core design principles covering intent preservation, determinism, and machine readability.",
    techStack: ["JSON Schema", "UUIDv7", "RFC 8785", "SHA-256"],
    highlights: [
      "Seven core design principles",
      "UUIDv7-based object identity",
      "Patch-based safety model with rollback",
      "AI/ML-ready typed property graphs",
      "Hash chain auditability",
    ],
    blogAngle:
      "Standards/specification project — shows thinking at the architecture level about industry-wide problems, not just coding individual apps.",
    tier: "top",
    category: "Standards · Architecture",
    filterCategory: "Data",
    index: 7,
    size: "standard",
    accentHue: 60,
    video: "/IEDFv2.webm",
  },
  {
    slug: "data-nhl",
    title: "NHL Analytics",
    tagline: "Sports prediction with ensemble ML",
    description:
      "Multiple sports prediction models, primarily for NHL hockey, using ensemble ML methods. NHL game outcome prediction using Elo ratings + XGBoost ensemble, with Wharton Data Science Challenge submission.",
    techStack: ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost"],
    highlights: [
      "Elo ratings + XGBoost ensemble",
      "Wharton Data Science Challenge submission",
      "Walk-forward temporal validation",
      "Handles datasets with 123M+ rows",
      "Bradley-Terry + Dixon-Coles models",
    ],
    blogAngle:
      "Data science + sports analytics with proper methodology. The Wharton competition angle adds credibility.",
    tier: "strong",
    category: "Data Science · Sports",
    filterCategory: "Data",
    index: 8,
    size: "standard",
    accentHue: 220,
    video: "/datav2.webm",
  },
  {
    slug: "mirai-collective",
    title: "Mirai Collective",
    tagline: "Nonprofit consultancy portfolio site",
    description:
      "Portfolio website for Mirai Collective, a student-led nonprofit consultancy connecting international nonprofits with Japanese communities. Full responsive website with contact forms, partner showcase, AI integration.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Genkit AI",
      "Firebase",
    ],
    highlights: [
      "Real nonprofit organization",
      "Full responsive design",
      "AI integration with Genkit",
      "Custom design system",
    ],
    blogAngle:
      "Real nonprofit work — shows building things for actual organizations, not just personal projects.",
    tier: "strong",
    category: "Web · Nonprofit",
    filterCategory: "Web",
    index: 10,
    size: "standard",
    accentHue: 350,
    video: "/miraiv2.webm",
  },
  {
    slug: "tiny-progress",
    title: "tiny-progress",
    tagline: "Ultra-minimal CLI progress indicators",
    description:
      "An ultra-minimal progress indicator library for Node.js CLI tools — dots, bars, and spinners. Less than 5KB bundle with TTY auto-detection, published on NPM.",
    techStack: ["JavaScript", "Node.js"],
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
  },
  {
    slug: "metaframe",
    title: "MetaFrame",
    tagline: "3D portfolio with Three.js",
    description:
      "A 3D portfolio/marketing site with Three.js visualizations and Framer Motion animations. Features hero sections, feature pages, pricing cards, and extensive mobile/desktop mockups.",
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
      "Shows 3D web development and motion design skills.",
    tier: "strong",
    category: "3D · Web Design",
    filterCategory: "Web",
    index: 13,
    size: "standard",
    accentHue: 260,
    video: "/metav2.webm",
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
