export type Project = { title: string; category?: string; description: string; stack: string[]; image?: string; github?: string; demo?: string };
export type Certificate = { title: string; issuer: string; url?: string };

export const site = {
  name: "Shaheer Aftab",
  role: "Software Engineer",
  tagline: "I build web applications and machine learning systems, from the data and model to the interface people actually use.",
  location: "Lahore, Pakistan",
  github: "https://github.com/shaheeraftab-21",
  email: "shaheeraftab2024@gmail.com",
  linkedin: "https://www.linkedin.com/in/shaheeraftab",
  resume: "/resume.pdf",
};

export const focus = ["Software development", "Artificial intelligence", "Machine learning", "Web applications"];

// Fill these in later. Empty lists show a placeholder on the page.
export const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "C++", "PHP", "SQL", "JavaScript"],
  "Web and backend": ["React", "Node.js", "HTML", "Tailwind CSS", "Bootstrap 5", "MySQL", "MariaDB", "PostgreSQL"],
  "AI and ML": ["scikit-learn", "Pandas", "Plotly", "Claude API"],
  Tools: ["Git", "Chart.js", "Streamlit"],
};

export const projects: Project[] = [
  {
    title: "DHA Document Management Portal",
    category: "DOCUMENT MANAGEMENT",
    description: "Internship project at DHA Lahore: a role-based portal to digitize and manage land records, with audit logging and analytics.",
    stack: ["PHP 8", "MySQL", "Bootstrap 5", "Chart.js"],
    image: "/images/dha.jfif",
  },
  {
    title: "FinanceIQ — AI Financial Intelligence Platform",
    category: "AI DASHBOARD",
    description: "An AI-powered finance dashboard — fraud detection, subscription tracking, budget planning and a conversational assistant you can ask about your money.",
    stack: ["Python", "Streamlit", "scikit-learn", "Claude API"],
    image: "/images/financeiq.jpg",
    github: "https://github.com/shaheeraftab-21/Personal-Finance-Manager",
    demo: "https://shaheer-personal-finance-manager.streamlit.app/",
  },
  {
  title: "Lost & Found Pakistan — National Item Recovery Portal",
  category: "FULL-STACK WEB APP",
  description: "A national lost-and-found platform: report lost or found items with photos, search by category and city, and recover belongings through an owner-approved claim flow that keeps contact details private until approval.",
  stack: ["React", "Flask", "Tailwind CSS", "PostgreSQL", "Docker"],
  image: "/images/home.png",
  github: "https://github.com/shaheeraftab-21/Lost-and-Found-Pakistan",
  demo: "https://lost-and-found-pakistan.onrender.com",
  },
  {
    title: "Smart Navigation System",
    category: "ALGORITHMS",
    description: "Finds the fastest route between ten Lahore locations using Dijkstra's algorithm, with traffic and blocked roads. Group lab project.",
    stack: ["C++", "Dijkstra's algorithm"],
    image: "/images/web.jpg",
    github: "https://github.com/shaheeraftab-21/Smart-Navigation-System",
    demo: "https://smart-navigation-system-shaheer.vercel.app/",
  },
  {
    title: "Weather Forecast App",
    category: "WEB APP",
    description: "A responsive React app with live weather data from REST APIs and a theme that follows real conditions.",
    stack: ["React", "REST APIs", "JavaScript"],
  },
  {
    title: "Real Estate Listing Platform",
    category: "WEB PLATFORM",
    description: "A property buy-and-sell platform with map search, filters and agent chat.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const certificates: Certificate[] = [
   { title: "Javascript, HTML and CSS Development", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-6d8127e1-8cdf-4fb8-8526-4c1ed3d9ed44/" },
   { title: "Java EE Web Development", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-1c50d4fb-64fd-4851-ae7f-7660eabb7f01/" },
   { title: "Android Application Development", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-1866611c-8f83-42a4-9e30-e82153fae773/" },
   { title: "Critical Thinking in the AI Era", issuer: "HP Life", url: "https://www.life-global.org/certificate/4c3e41ad-814a-4519-91b3-2e05fe22f55e" },
   { title: "AI for Business Professionals", issuer: "HP Life", url: "https://www.life-global.org/certificate/2f7ced8a-e986-4fea-bec3-9c10eb8ed7c9" },
];

export type Experience = {
  role: string; company: string; logo?: string; period: string; mode?: string;
  summary: string; skills: string[];
  certificate?: { image: string; label?: string }; // image in /public/certificates
};
export const experience: Experience[] = [
  {
    role: "Software Development Intern",
    company: "DHA Lahore Official",
    logo: "/logos/dha-lahore.jfif",
    period: "Jul 2026 – Aug 2026",
    mode: "On-site",
    summary: "Web development internship at the Defence Housing Authority, Lahore, using PHP, MySQL and JavaScript.",
    skills: ["PHP 8", "MySQL", "JavaScript", "Bootstrap 5"],
    certificate: { image: "/certificates/dha-internship.jfif", label: "Internship Certificate" },
  },
  {
    role: "Intern",
    company: "InnoVista Ravi",
    logo: "/logos/innovista-ravi.png",
    period: "Jul 2026 – Aug 2026",
    mode: "On-site",
    summary: "On-site internship at InnoVista Ravi, the DHA Lahore Phase 8 Technology Zone, working on web development and networking.",
    skills: ["Web Development", "Networking"],
    certificate: { image: "/certificates/innovista-internship.jfif", label: "Certificate" },
  },
];