// src/data/siteData.js

export const NAV_LINKS = [
  { label: "About us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Service", href: "#services" },
];

export const MARQUEE_ITEMS = [
  "Logo 1", "Logo 2", "Logo 3", "Logo 4",
  "Logo 5", "Logo 6", "Logo 7", "Logo 8",
  "Logo 1", "Logo 2", "Logo 3", "Logo 4",
  "Logo 5", "Logo 6", "Logo 7", "Logo 8",
];

export const PROBLEMS = {
  startup: [
    { icon: "💸", title: "Senior UX hire\nis expensive" },
    { icon: "🎓", title: "Juniors lack\nproduct maturity" },
    { icon: "🧭", title: "Founders can't\nguide design" },
  ],
  product: [
    { icon: "📊", title: "Poor retention\nmetrics" },
    { icon: "🔄", title: "Inconsistent\nUX patterns" },
    { icon: "🚀", title: "Slow design\niteration cycles" },
  ],
};

export const PROCESS_CARDS = [
  {
    num: "01",
    title: "Strategy",
    color: "#44d557",
    shadowClass: "process-card-1",
    items: ["Stakeholder Discussions", "Project Vision/Goals", "Brand Strategy", "Measure of Success", "Project Priority"],
  },
  {
    num: "02",
    title: "Discovery",
    color: "#6198ff",
    shadowClass: "process-card-2",
    items: ["Competitor Analysis", "Analytics Review", "Content Audit", "User Interviews", "User Testing"],
  },
  {
    num: "03",
    title: "Analysis",
    color: "#ec74e8",
    shadowClass: "process-card-3",
    items: ["Use Cases", "Persona Creation", "Story Boards", "Red Route Diagram", "Workflow Diagram"],
  },
  {
    num: "04",
    title: "Design",
    color: "#ffc858",
    shadowClass: "process-card-4",
    items: ["Mood Board", "Wireframes", "Prototypes", "User feedback", "Goal-based design"],
  },
  {
    num: "05",
    title: "Delivery",
    color: "#44d557",
    shadowClass: "process-card-5",
    items: ["Design System", "Dev Handoff", "QA Support", "Iteration", "Documentation"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Product Manager, FinTech Startup",
    stars: 5,
    text: "Ashwani transformed our product's UX completely. Our user retention improved by 40% after the redesign. Working with Suru feels like having an in-house design lead.",
  },
  {
    name: "Rahul M.",
    role: "CEO, SaaS Platform",
    stars: 5,
    text: "The UX audit alone saved us months of wrong direction. Incredibly strategic thinking paired with beautiful execution. Highly recommend for any startup.",
  },
  {
    name: "Priya S.",
    role: "Co-founder, EdTech",
    stars: 5,
    text: "We needed someone who could think like a product owner and design like a pro. Ashwani delivered both. The onboarding flow he designed doubled our activation rate.",
  },
];

export const HOW_STEPS = [
  {
    icon: "📞",
    title: "Discovery Call",
    desc: "We start with a free consultation to understand your product, users, and goals — no jargon, just clarity.",
  },
  {
    icon: "🗺️",
    title: "UX Roadmap",
    desc: "You get a clear, prioritized design roadmap tailored to your stage — startup sprint or product scale.",
  },
  {
    icon: "🎨",
    title: "Design & Iterate",
    desc: "We design fast, gather feedback, and refine. You see progress every week — never waiting months for results.",
  },
  {
    icon: "🚀",
    title: "Handoff & Support",
    desc: "Dev-ready files, design system, and ongoing support to make sure the design ships exactly right.",
  },
];

export const SERVICES = [
  {
    emoji: "🖥️",
    title: "UX Design for Web & App",
    items: ["UX restructuring", "Wireframes & interactions", "High-fidelity app & web UI", "Clickable Figma prototype", "Developer-ready handoff"],
  },
  {
    emoji: "🧩",
    title: "Design System",
    items: ["Component library", "Color & typography system", "Spacing & grid rules", "Icon set", "Documentation"],
  },
  {
    emoji: "🔍",
    title: "UX Audit",
    items: ["Usability & heuristic evaluation", "User flow & journey analysis", "UX issues & friction points", "UI consistency", "Competitor UX review"],
  },
  {
    emoji: "🎨",
    title: "Brand & Visual Design",
    items: ["Product branding", "Design system setup", "UI kits", "Iconography", "Visual consistency"],
  },
  {
    emoji: "🤝",
    title: "Part Time UI UX Consultant",
    items: ["UX restructuring", "Wireframes & interactions", "High-fidelity app & web UI", "Design system & components", "Developer-ready handoff"],
  },
  {
    emoji: "🔄",
    title: "Redesign App & Web",
    items: ["UX restructuring", "Wireframes & interactions", "High-fidelity app & web UI", "Clickable Figma prototype", "Developer-ready handoff"],
  },
];

export const FAQS = [
  {
    q: "Why should I invest in a UI UX design company?",
    a: "Good UX design directly impacts user adoption, retention, and revenue. A strategic UX partner helps you avoid costly redesigns later and builds user trust from day one.",
  },
  {
    q: "How do UI UX design services impact my business growth?",
    a: "Well-designed products see higher conversion rates, lower churn, and stronger word-of-mouth referrals. Every UX decision maps directly to a business metric.",
  },
  {
    q: "What makes your UI UX design agency different?",
    a: "We work like an internal team member — not an external vendor. You get senior-level thinking, startup-speed execution, and fraction of the hiring cost.",
  },
  {
    q: "How does UX for SaaS and enterprise applications differ?",
    a: "Enterprise UX focuses on complex workflows, role-based access, and data density while SaaS UX prioritizes onboarding and activation funnels.",
  },
  {
    q: "What is UX-as-a-service, and how does it benefit my business?",
    a: "UX-as-a-service gives you ongoing access to senior design expertise on-demand, without the overhead of a full-time hire. Pay for what you need, scale up or down anytime.",
  },
];

export const PORTFOLIO_ITEMS = [
  { id: 1, label: "Case Study 1", tall: false },
  { id: 2, label: "Case Study 2", tall: true },
  { id: 3, label: "Case Study 3", tall: false },
  { id: 4, label: "Case Study 4", tall: false },
  { id: 5, label: "Case Study 5", tall: false },
];

export const TOOLS = [
  { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Miro", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logomark_Miro.png/600px-Logomark_Miro.png" },
  { name: "Lottie", icon: "https://static.lottiefiles.com/favicon/favicon-32x32.png" },
];
