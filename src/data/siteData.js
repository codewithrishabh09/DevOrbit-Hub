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
  { value: "25+", label: "Projects shipped" },
  { value: "9", label: "Service verticals" },
  { value: "500+", label: "Developer reach" },
  { value: "24/7", label: "Build mindset" }
];

export const services = [
  { title: "Web Development", icon: Globe2, stack: "React, Next.js, TypeScript", copy: "High-performance websites, SaaS dashboards, portals, and conversion-focused company platforms." },
  { title: "Frontend Development", icon: Layers3, stack: "React, Tailwind, Motion", copy: "Polished product interfaces with responsive systems, accessible components, and premium interactions." },
  { title: "Backend Development", icon: Database, stack: "Node.js, Express, FastAPI", copy: "Secure APIs, databases, authentication, admin tools, and scalable service architecture." },
  { title: "Full Stack Development", icon: Code2, stack: "MERN, Python, Cloud", copy: "End-to-end software builds from product strategy and UX to backend, deployment, and support." },
  { title: "AI Solutions", icon: BrainCircuit, stack: "Python, ML, Automation", copy: "AI-enabled workflows, intelligent assistants, recommendation systems, and applied ML prototypes." },
  { title: "Data Analytics", icon: BarChart3, stack: "Dashboards, BI, Python", copy: "Operational dashboards and decision systems that turn raw data into business momentum." },
  { title: "Mobile Apps", icon: Smartphone, stack: "React Native, APIs", copy: "Modern mobile experiences connected to reliable cloud services and product analytics." },
  { title: "Cloud Solutions", icon: Cloud, stack: "Docker, Deployments, CI/CD", copy: "Cloud-ready infrastructure, DevOps foundations, hosting, monitoring, and launch support." },
  { title: "UI/UX Design", icon: Figma, stack: "Figma, Systems, Research", copy: "Product design, design systems, wireframes, brand direction, and interaction design." }
];

export const technologies = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "Express", "FastAPI"] },
  { group: "Database", items: ["MongoDB", "PostgreSQL"] },
  { group: "AI", items: ["Python", "Machine Learning"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker"] }
];

export const projects = [
  { title: "OrbitCRM Intelligence", category: "Web Applications", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", tags: ["React", "Node", "Analytics"], copy: "A sales operations dashboard with lead scoring, pipeline visibility, and executive reporting." },
  { title: "Nebula AI Assistant", category: "AI Projects", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80", tags: ["Python", "NLP", "FastAPI"], copy: "A domain-focused assistant prototype for internal knowledge retrieval and workflow automation." },
  { title: "Founder Metrics OS", category: "Analytics Dashboards", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", tags: ["BI", "Charts", "MongoDB"], copy: "A founder-ready KPI suite for revenue, retention, acquisition, and product health." },
  { title: "Campus Launchpad", category: "Open Source Projects", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80", tags: ["Community", "React", "Mentorship"], copy: "A collaborative internship portal for assignments, reviews, certificates, and project galleries." }
];

export const internships = [
  "Frontend Developer Intern",
  "Backend Developer Intern",
  "Full Stack Developer Intern",
  "Python Developer Intern",
  "Data Analyst Intern",
  "UI/UX Designer Intern"
];

export const internshipBenefits = [
  "Offer Letter",
  "Certificate",
  "Letter of Recommendation",
  "Real Project Experience",
  "Mentorship",
  "Portfolio Building",
  "Career Guidance",
  "Learning Resources"
];

export const process = ["Apply", "Task Assignment", "Review", "Interview", "Selection", "Onboarding"];

export const leaders = [
  {
    name: "Rishabh Dwivedi",
    role: "Founder & Full Stack Developer",
    icon: Rocket,
    image: "/assets/founder.jpeg",
    imagePosition: "center 28%",
    bio: "Passionate Full Stack Developer focused on building innovative software products, AI solutions, startup ecosystems, and developer communities.",
    skills: ["React", "TypeScript", "Python", "FastAPI", "MongoDB", "Node.js", "AI/ML", "System Design", "Leadership"],
    highlights: ["Founder of DevOrbit Hub", "Software Engineer", "AI Enthusiast", "Startup Builder", "Community Leader"]
  },
  {
    name: "Aditya",
    role: "Co-Founder & Full Stack Developer",
    icon: Sparkles,
    image: "/assets/co-founder.png",
    imagePosition: "center 22%",
    bio: "Creative Full Stack Developer focused on scalable architectures, user experience, backend engineering, and product development.",
    skills: ["React", "TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "UI/UX"],
    highlights: ["Co-Founder", "Full Stack Engineer", "Mentor", "Product Builder", "Technology Contributor"]
  }
];

export const testimonials = [
  { name: "Startup Founder", role: "SaaS Client", quote: "DevOrbit Hub thinks like a product team, not just a vendor. The delivery felt sharp, strategic, and launch-ready." },
  { name: "Frontend Intern", role: "Developer Cohort", quote: "The internship gave me real tasks, review cycles, and confidence to show my portfolio professionally." },
  { name: "Community Member", role: "Open Source Contributor", quote: "A focused community for builders who want to learn, ship, and grow together." }
];

export const blogPosts = [
  { title: "How AI Will Shape Small Business Software", category: "AI", read: "6 min read" },
  { title: "Building Internship Portfolios That Recruiters Trust", category: "Careers", read: "5 min read" },
  { title: "From Idea to MVP: A Practical Founder Roadmap", category: "Startups", read: "8 min read" },
  { title: "Why Dashboards Need Product Thinking", category: "Analytics", read: "4 min read" }
];

export const careerRoles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Python Developer", "Data Analyst", "UI/UX Designer"];

export const communityItems = [
  { title: "Coding Challenges", icon: Code2 },
  { title: "Hackathons", icon: Rocket },
  { title: "Tech Events", icon: UsersRound },
  { title: "Workshops", icon: GraduationCap },
  { title: "Learning Resources", icon: BrainCircuit },
  { title: "Open Source Contributions", icon: BriefcaseBusiness }
];
