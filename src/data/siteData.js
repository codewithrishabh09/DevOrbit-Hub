import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Figma,
  Globe2,
  GraduationCap,
  Layers3,
  Rocket,
  Smartphone,
  Sparkles,
  UsersRound
} from "lucide-react";

export const stats = [
  { value: "25+", label: "Client Projects Delivered" },
  { value: "9", label: "Enterprise Service Verticals" },
  { value: "500+", label: "Interns Mentored" },
  { value: "100%", label: "Production Quality Focus" }
];

export const services = [
  { title: "Enterprise Web Development", icon: Globe2, stack: "React, Next.js, TypeScript", copy: "High-performance web applications, scalable SaaS platforms, and secure company portals built for production." },
  { title: "Frontend Engineering", icon: Layers3, stack: "React, Tailwind CSS v4", copy: "Robust, accessible, and highly responsive user interfaces designed to maximize conversion and user engagement." },
  { title: "Backend Architecture", icon: Database, stack: "Node.js, Express, PostgreSQL", copy: "Secure REST APIs, robust database architectures, and scalable microservices for enterprise demands." },
  { title: "Full Stack Delivery", icon: Code2, stack: "End-to-End Solutions", copy: "Comprehensive software development from initial strategy and UX planning to final deployment and maintenance." },
  { title: "AI & Automation", icon: BrainCircuit, stack: "Python, ML Models", copy: "Integration of AI workflows, intelligent automation, and custom machine learning prototypes into existing systems." },
  { title: "Business Intelligence", icon: BarChart3, stack: "Analytics Dashboards", copy: "Data visualization and operational dashboards designed to provide actionable insights for executive teams." },
  { title: "Mobile Application", icon: Smartphone, stack: "React Native", copy: "Cross-platform mobile applications delivering native performance and seamless integration with cloud backends." },
  { title: "Cloud Infrastructure", icon: Cloud, stack: "AWS, Docker, CI/CD", copy: "Reliable cloud deployments, secure hosting environments, and automated pipelines for continuous delivery." },
  { title: "Product Design (UI/UX)", icon: Figma, stack: "Figma, Design Systems", copy: "Professional wireframing, comprehensive design systems, and intuitive user experiences focused on business goals." }
];

export const technologies = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Python", "FastAPI"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions"] },
  { group: "Design & Planning", items: ["Figma", "Jira", "Notion"] }
];

export const projects = [
  { title: "Enterprise CRM Platform", category: "Web Applications", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", tags: ["React", "Node.js", "PostgreSQL"], copy: "A scalable sales operations platform engineered for a mid-sized enterprise, featuring advanced analytics and pipeline forecasting." },
  { title: "Automated Support AI", category: "AI Projects", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80", tags: ["Python", "NLP", "React"], copy: "A custom LLM integration for an e-commerce client, reducing customer support resolution time by 45%." },
  { title: "Executive KPI Dashboard", category: "Analytics Dashboards", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", tags: ["Next.js", "Data Viz", "MongoDB"], copy: "A real-time financial and operational dashboard delivering critical business metrics to a logistics company's executive board." },
  { title: "DevOrbit Mentorship Portal", category: "Internal Products", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80", tags: ["React", "Tailwind", "Firebase"], copy: "Our proprietary platform for managing intern cohorts, code reviews, and tracking contributions to client projects." }
];

export const internships = [
  "Frontend Engineering Intern",
  "Backend Systems Intern",
  "Full Stack Development Intern",
  "AI & Data Science Intern",
  "UI/UX Design Intern",
  "Product Management Intern"
];

export const internshipBenefits = [
  "Real Client Project Experience",
  "Formal Code Reviews by Seniors",
  "Production Environment Exposure",
  "Professional Portfolio Building",
  "Letter of Recommendation",
  "Official Internship Certificate",
  "Direct Industry Mentorship",
  "Pre-Placement Offer (PPO) Potential"
];

export const process = [
  "Application & Resume Screening",
  "Technical Assessment Task",
  "Technical Interview",
  "Culture Fit & Expectation Alignment",
  "Selection & Offer",
  "Onboarding to Live Projects"
];

export const leaders = [
  {
    name: "Rishabh Dwivedi",
    role: "Founder & Technical Director",
    icon: Rocket,
    image: "/assets/founder.jpeg",
    imagePosition: "center 28%",
    bio: "Technical leader driving enterprise software architecture and fostering a culture of practical engineering education.",
    skills: ["System Architecture", "React", "Python", "Team Leadership", "Client Delivery"],
    highlights: ["Founded DevOrbit Hub", "Architects Enterprise Solutions", "Mentors Engineering Teams"]
  },
  {
    name: "Aditya",
    role: "Co-Founder & Engineering Manager",
    icon: Sparkles,
    image: "/assets/co-founder.png",
    imagePosition: "center 22%",
    bio: "Engineering manager focused on maintaining strict production standards and overseeing the technical growth of our intern cohorts.",
    skills: ["Full Stack Development", "Node.js", "API Design", "Code Quality", "Mentorship"],
    highlights: ["Leads Backend Engineering", "Manages Intern Cohorts", "Ensures Production Quality"]
  }
];

export const testimonials = [
  { name: "Director of Operations", role: "Logistics Client", quote: "DevOrbit Hub delivered our internal dashboard ahead of schedule. Their focus on clean, maintainable architecture was exactly what we needed." },
  { name: "Former Frontend Intern", role: "Now Junior Developer", quote: "Working on actual client projects under strict code review gave me the practical experience that a standard boot-camp simply couldn't provide." },
  { name: "SaaS Founder", role: "Startup Client", quote: "They brought engineering discipline to our MVP. It wasn't just built quickly; it was built to scale securely." }
];

export const blogPosts = [
  { title: "Why Startups Need Enterprise-Grade Architecture Early", category: "Engineering", read: "7 min read" },
  { title: "The DevOrbit Hub Model: Delivering Software While Teaching", category: "Company", read: "5 min read" },
  { title: "Preparing Interns for Production Deployment Cycles", category: "Mentorship", read: "6 min read" },
  { title: "Integrating LLMs into Legacy Business Workflows", category: "AI Solutions", read: "8 min read" }
];

export const careerRoles = [
  "Senior Frontend Engineer",
  "Backend Systems Architect",
  "Technical Lead / Mentor",
  "Product Designer",
  "Technical Project Manager"
];

export const communityItems = [
  { title: "Open Source Initiatives", icon: Code2 },
  { title: "Engineering Workshops", icon: GraduationCap },
  { title: "Industry Webinars", icon: UsersRound },
  { title: "Technical Code Reviews", icon: BrainCircuit }
];
