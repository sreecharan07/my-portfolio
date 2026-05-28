/**
 * Centralized profile data — single source of truth for all portfolio content.
 * Content sourced from LinkedIn PDF and rewritten per PRD tone guidelines:
 * metric-driven, fintech-oriented, recruiter-friendly.
 */

/* ------------------------------------------------------------------ */
/*  Personal Information                                               */
/* ------------------------------------------------------------------ */
export const personalInfo = {
  name: "Sree Charan Addala",
  initials: "SCA",
  role: "Fintech Data & Systems Analyst",
  location: "Canada",
  email: "charanaddalaa7@gmail.com",
  linkedin: "https://www.linkedin.com/in/sree-charan-addala-a5b51889",
  github: "https://github.com/sreecharan07",
  portfolio: "https://portfolio-dppm.vercel.app/",
};

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Fintech-Focused Data & Systems Analyst",
  heading: "Turning financial data, systems, and workflows into clear business decisions.",
  intro:
    "I'm Sree Charan Addala, a financial data analyst with a software engineering background. I use SQL, Python, Power BI, financial modelling, and systems thinking to analyze data, automate workflows, improve reporting, and help teams make better decisions.",
  primaryCta: "View My Work",
  secondaryCta: "Download Resume",
  floatingTags: [
    "SQL",
    "Python",
    "Power BI",
    "Financial Modelling",
    "Automation",
    "Dashboards",
    "APIs",
  ],
  stats: [
    { value: "40%", label: "Reporting workflow improvement" },
    { value: "2+", label: "Years enterprise experience" },
    { value: "15%", label: "Month-over-month revenue growth" },
    { value: "MBA", label: "Business & engineering foundation" },
  ],
};

/* ------------------------------------------------------------------ */
/*  About Section                                                      */
/* ------------------------------------------------------------------ */
export const aboutCopy = [
  "I work at the intersection of data, business workflows, and technical systems. My background started in sales analytics, where I worked close to product catalogues, marketplace performance, customer behavior, and business operations. That experience helped me understand how data supports revenue, efficiency, and decision-making.",
  "I later moved into software engineering, working on enterprise applications, backend logic, APIs, SQL optimization, automation, reporting dashboards, debugging, and CI/CD workflows. This gave me a stronger understanding of how data moves through systems and how reliable software improves business operations.",
  "Today, I'm focused on fintech-oriented data and systems roles where SQL, Python, Power BI, financial modelling, and business analysis can create measurable impact. I bring a practical mix of technical depth, analytical thinking, and business context through my MBA and engineering experience.",
];

export const valueCards = [
  {
    title: "Data Analysis",
    description:
      "SQL, Python, Power BI, dashboards, and reporting workflows.",
    icon: "chart",
  },
  {
    title: "Financial & Business Thinking",
    description:
      "MBA background, financial modelling, marketplace analysis, and decision support.",
    icon: "trending",
  },
  {
    title: "Systems Understanding",
    description:
      "Backend logic, APIs, databases, integrations, and enterprise workflows.",
    icon: "layers",
  },
  {
    title: "Automation Mindset",
    description:
      "Reducing manual work, improving reliability, and making operations easier to scale.",
    icon: "zap",
  },
];

/* ------------------------------------------------------------------ */
/*  Impact Metrics                                                     */
/* ------------------------------------------------------------------ */
export const metrics = [
  { value: 40, suffix: "%", label: "Reduction in manual reporting" },
  { value: 35, suffix: "%", label: "Faster issue resolution" },
  { value: 30, suffix: "%", label: "SQL performance improvement" },
  { value: 25, suffix: "%", label: "Marketplace conversion increase" },
  { value: 10, suffix: "+", label: "SKUs launched via market research" },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */
export const experiences = [
  {
    company: "CGS (Computer Generated Solutions)",
    role: "Associate Software Engineer",
    dates: "June 2022 – November 2023",
    location: "Hyderabad, Telangana, India",
    label: "Enterprise Systems · SQL · APIs · CI/CD",
    description:
      "Worked on enterprise software systems involving ERP modules, backend logic, SQL optimization, integrations, reusable business logic, structured error handling, and CI/CD workflows.",
    bullets: [
      "Developed ERP modules using C#, WPF, and SQL, enabling enterprise-scale merchandise planning and analytics.",
      "Built reusable libraries and shared business logic, reducing development effort by approximately 20% across teams.",
      "Optimized complex SQL queries and stored procedures, improving query performance by up to 30%.",
      "Implemented structured error handling, logging, and CI/CD pipelines in Azure DevOps, reducing issue resolution time by approximately 35% and accelerating releases by approximately 25%.",
      "Integrated Dynamics 365 with external systems using APIs and Azure Integration Services, supporting real-time, event-driven workflows.",
    ],
    skills: [
      "SQL",
      "APIs",
      "Azure DevOps",
      "CI/CD",
      "Enterprise Systems",
      "Dynamics 365",
      "C#",
    ],
  },
  {
    company: "CGS (Computer Generated Solutions)",
    role: "Software Trainee",
    dates: "December 2021 – May 2022",
    location: "Hyderabad, Telangana, India",
    label: "Dashboards · SQL · Reporting · UI Systems",
    description:
      "Supported ERP application development, reporting dashboards, centralized logging, SQL optimization, and usability improvements.",
    bullets: [
      "Customized WPF UI components using DevExpress, improving usability and consistency across ERP modules.",
      "Implemented centralized error handling and logging frameworks, reducing post-deployment debugging time by approximately 30%.",
      "Developed Power BI dashboards by integrating operational data sources, reducing manual reporting by approximately 40%.",
      "Optimized SQL queries and database schemas, improving data retrieval performance by approximately 35%.",
    ],
    skills: [
      "Power BI",
      "SQL",
      "DevExpress",
      "Reporting",
      "Logging",
      "Dashboard Development",
    ],
  },
  {
    company: "Instrukart Holdings",
    role: "Sales Analyst",
    dates: "March 2020 – June 2021",
    location: "Hyderabad, Telangana, India",
    label: "Sales Analytics · Marketplace Data · Business Operations",
    description:
      "Worked on marketplace performance, product catalogue optimization, sales and campaign analysis, competitor research, and operational process automation.",
    bullets: [
      "Optimized product catalogues and Amazon Marketplace listings, increasing conversion rates by up to 25%.",
      "Analyzed sales and campaign performance data, contributing to 10–15% month-over-month revenue growth.",
      "Automated listing and operational processes, reducing manual effort by approximately 30%.",
      "Conducted competitor and market research, supporting the successful launch of 10+ new SKUs.",
    ],
    skills: [
      "Sales Analytics",
      "Marketplace Operations",
      "Product Data",
      "Competitive Research",
      "Process Automation",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Case Studies (work-derived, not invented projects)                 */
/* ------------------------------------------------------------------ */
export type CaseStudyCategory =
  | "All"
  | "Data Analytics"
  | "SQL"
  | "Automation"
  | "Systems"
  | "Business Operations";

export interface CaseStudy {
  title: string;
  category: string;
  filters: CaseStudyCategory[];
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  tools: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Operational Reporting Dashboard",
    category: "Data Analytics · Power BI · Reporting",
    filters: ["Data Analytics"],
    summary:
      "Built Power BI dashboards by integrating operational data sources to reduce manual reporting and improve visibility into business workflows.",
    problem:
      "Manual reporting was time-consuming and limited visibility into operational performance.",
    solution:
      "Created dashboards using integrated operational data, allowing users to track performance and reduce repetitive manual reporting tasks.",
    impact: [
      "Reduced manual reporting by approximately 40%",
      "Improved access to operational insights",
      "Helped teams make faster reporting-driven decisions",
    ],
    tools: [
      "Power BI",
      "SQL",
      "Operational Data",
      "Dashboard Design",
      "Data Integration",
    ],
  },
  {
    title: "SQL Performance Optimization",
    category: "SQL · Database Optimization · Performance",
    filters: ["SQL"],
    summary:
      "Optimized complex SQL queries, stored procedures, and database schemas to improve application performance and reporting speed.",
    problem:
      "Slow queries and inefficient database structures affected reporting speed and application responsiveness.",
    solution:
      "Improved SQL queries, optimized stored procedures, and refined database schemas for better data retrieval.",
    impact: [
      "Improved query performance by up to 30%",
      "Improved data retrieval performance by approximately 35%",
    ],
    tools: [
      "SQL",
      "Stored Procedures",
      "Query Optimization",
      "Database Schema Design",
    ],
  },
  {
    title: "Error Handling, Logging & CI/CD Reliability",
    category: "Automation · Reliability · DevOps",
    filters: ["Automation", "Systems"],
    summary:
      "Implemented structured error handling, centralized logging, and CI/CD workflows to reduce debugging time and improve release efficiency.",
    problem:
      "Issue resolution and post-deployment debugging required too much manual investigation.",
    solution:
      "Added structured error handling, logging frameworks, and CI/CD pipelines using Azure DevOps.",
    impact: [
      "Reduced issue resolution time by approximately 35%",
      "Accelerated releases by approximately 25%",
      "Reduced post-deployment debugging time by approximately 30%",
    ],
    tools: ["Azure DevOps", "CI/CD", "Logging", "Debugging", "Error Handling"],
  },
  {
    title: "Marketplace Sales Analytics",
    category: "Business Analytics · Sales Data · Marketplace Operations",
    filters: ["Business Operations", "Data Analytics"],
    summary:
      "Analyzed marketplace sales, campaign performance, competitor activity, and product catalogue data to improve conversions and support business growth.",
    problem:
      "Marketplace performance depended on catalogue quality, pricing, product visibility, and campaign decisions.",
    solution:
      "Optimized Amazon product listings, analyzed sales and campaign data, automated operational processes, and supported new SKU launches through competitor research.",
    impact: [
      "Increased conversion rates by up to 25%",
      "Contributed to 10–15% month-over-month revenue growth",
      "Reduced manual effort by approximately 30%",
      "Supported successful launch of 10+ SKUs",
    ],
    tools: [
      "Sales Analytics",
      "Marketplace Data",
      "Excel",
      "Reporting",
      "Process Automation",
    ],
  },
  {
    title: "Enterprise ERP Analytics Workflow",
    category: "Enterprise Systems · Analytics · Workflow Design",
    filters: ["Systems"],
    summary:
      "Developed ERP modules and shared business logic for enterprise-scale merchandise planning and analytics.",
    problem:
      "Enterprise planning workflows required reliable modules, reusable business logic, and integration with external systems.",
    solution:
      "Developed ERP modules, reusable libraries, SQL-backed logic, and real-time integrations with external systems.",
    impact: [
      "Enabled enterprise-scale merchandise planning and analytics",
      "Reduced development effort by approximately 20% through reusable business logic",
      "Supported real-time, event-driven workflows through API and Azure integrations",
    ],
    tools: [
      "ERP Systems",
      "SQL",
      "APIs",
      "Dynamics 365",
      "Azure Integration Services",
      "C#",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */
export const primarySkills = [
  "SQL",
  "Python",
  "Power BI",
  "Financial Modelling",
  "Data Analysis",
  "Systems Thinking",
  "Business Analysis",
  "Automation",
];

export const skillCategories = [
  {
    title: "Financial & Business Analysis",
    skills: [
      "Financial Modelling",
      "Business Analysis",
      "Sales & Campaign Analysis",
      "Marketplace Analytics",
      "Operational Reporting",
      "Decision Support",
      "Competitor Research",
    ],
  },
  {
    title: "Data & BI",
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Data Analysis",
      "Dashboard Development",
      "Data Visualization",
      "Reporting Automation",
    ],
  },
  {
    title: "Systems & Technical Analysis",
    skills: [
      "APIs",
      "Backend Logic",
      "Enterprise Applications",
      "ERP Systems",
      "Dynamics 365",
      "Azure Integration Services",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      "Docker",
      "Azure DevOps",
      "CI/CD Pipelines",
      "Logging",
      "Error Handling",
      "Workflow Automation",
      "Debugging",
    ],
  },
  {
    title: "Software Engineering Foundation",
    skills: [
      "Software Engineering",
      "Backend Development",
      "C#",
      "WPF",
      "DevExpress",
      "Reusable Libraries",
      "Clean Logic",
    ],
  },
];

/* Proof mapping for skill hover tooltips */
export const skillProof: Record<string, string> = {
  SQL: "Used for ERP modules, query optimization, stored procedures, dashboards, and database schema improvements.",
  Python: "Applied in data analysis, automation scripts, and data science certification work.",
  "Power BI":
    "Built operational dashboards integrating data sources, reducing manual reporting by 40%.",
  "Financial Modelling":
    "MBA-trained; applied marketplace analytics and business decision support.",
  Docker: "Used for containerized development workflows and deployment pipelines.",
  "Azure DevOps":
    "Implemented CI/CD pipelines, reducing issue resolution time by 35%.",
  "Business Analysis":
    "MBA background combined with hands-on sales analytics and marketplace optimization experience.",
};

/* ------------------------------------------------------------------ */
/*  Education & Certifications                                         */
/* ------------------------------------------------------------------ */
export const education = [
  {
    institution: "University Canada West",
    degree: "Master of Business Administration",
    field: "Business Administration, Management and Operations",
    dates: "January 2024 – June 2025",
    note: "Business foundation for analytics, operations, decision-making, and management context.",
    type: "Graduate" as const,
  },
  {
    institution: "Indian Institute of Technology, Madras",
    degree: "Advanced Certification in Data Science and AI",
    field: "Artificial Intelligence",
    dates: "October 2021 – September 2022",
    note: "Technical foundation in data science, artificial intelligence, and analytical thinking.",
    type: "Certification" as const,
  },
  {
    institution: "Gitam University, Hyderabad",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    dates: "June 2016 – June 2020",
    note: "Software engineering and computer science foundation.",
    type: "Undergraduate" as const,
  },
];

export const certifications = [
  "Certified Digital Marketing Associate",
  "Data Analysis Using Python",
  "Data Visualisation in Tableau",
  "Data Analytics Essentials",
];

/* ------------------------------------------------------------------ */
/*  Working Style                                                      */
/* ------------------------------------------------------------------ */
export const workingStyle = [
  {
    title: "Business-First Analysis",
    description:
      "I start by understanding the business question, not just the dataset. The goal is to connect data work to decisions, efficiency, revenue, or risk.",
    icon: "target",
  },
  {
    title: "System-Aware Thinking",
    description:
      "My software engineering background helps me understand where data comes from, how systems interact, and why workflow reliability matters.",
    icon: "cpu",
  },
  {
    title: "Clear Communication",
    description:
      "I explain technical and analytical work in a way that business stakeholders can understand and act on.",
    icon: "messageCircle",
  },
  {
    title: "Automation Mindset",
    description:
      "I look for repeated manual work that can be simplified through dashboards, scripts, workflows, or better system design.",
    icon: "repeat",
  },
];

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
