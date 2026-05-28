(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/data/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Centralized profile data — single source of truth for all portfolio content.
 * Content sourced from LinkedIn PDF and rewritten per PRD tone guidelines:
 * metric-driven, fintech-oriented, recruiter-friendly.
 */ /* ------------------------------------------------------------------ */ /*  Personal Information                                               */ /* ------------------------------------------------------------------ */ __turbopack_context__.s([
    "aboutCopy",
    ()=>aboutCopy,
    "caseStudies",
    ()=>caseStudies,
    "certifications",
    ()=>certifications,
    "education",
    ()=>education,
    "experiences",
    ()=>experiences,
    "hero",
    ()=>hero,
    "metrics",
    ()=>metrics,
    "navLinks",
    ()=>navLinks,
    "personalInfo",
    ()=>personalInfo,
    "primarySkills",
    ()=>primarySkills,
    "skillCategories",
    ()=>skillCategories,
    "skillProof",
    ()=>skillProof,
    "valueCards",
    ()=>valueCards,
    "workingStyle",
    ()=>workingStyle
]);
const personalInfo = {
    name: "Sree Charan Addala",
    initials: "SCA",
    role: "Fintech Data & Systems Analyst",
    location: "Canada",
    email: "charanaddalaa7@gmail.com",
    linkedin: "https://www.linkedin.com/in/sree-charan-addala-a5b51889",
    github: "https://github.com/sreecharan07",
    portfolio: "https://portfolio-dppm.vercel.app/"
};
const hero = {
    eyebrow: "Fintech-Focused Data & Systems Analyst",
    heading: "Turning financial data, systems, and workflows into clear business decisions.",
    intro: "I'm Sree Charan Addala, a financial data analyst with a software engineering background. I use SQL, Python, Power BI, financial modelling, and systems thinking to analyze data, automate workflows, improve reporting, and help teams make better decisions.",
    primaryCta: "View My Work",
    secondaryCta: "Download Resume",
    floatingTags: [
        "SQL",
        "Python",
        "Power BI",
        "Financial Modelling",
        "Automation",
        "Dashboards",
        "APIs"
    ],
    stats: [
        {
            value: "40%",
            label: "Reporting workflow improvement"
        },
        {
            value: "2+",
            label: "Years enterprise experience"
        },
        {
            value: "15%",
            label: "Month-over-month revenue growth"
        },
        {
            value: "MBA",
            label: "Business & engineering foundation"
        }
    ]
};
const aboutCopy = [
    "I work at the intersection of data, business workflows, and technical systems. My background started in sales analytics, where I worked close to product catalogues, marketplace performance, customer behavior, and business operations. That experience helped me understand how data supports revenue, efficiency, and decision-making.",
    "I later moved into software engineering, working on enterprise applications, backend logic, APIs, SQL optimization, automation, reporting dashboards, debugging, and CI/CD workflows. This gave me a stronger understanding of how data moves through systems and how reliable software improves business operations.",
    "Today, I'm focused on fintech-oriented data and systems roles where SQL, Python, Power BI, financial modelling, and business analysis can create measurable impact. I bring a practical mix of technical depth, analytical thinking, and business context through my MBA and engineering experience."
];
const valueCards = [
    {
        title: "Data Analysis",
        description: "SQL, Python, Power BI, dashboards, and reporting workflows.",
        icon: "chart"
    },
    {
        title: "Financial & Business Thinking",
        description: "MBA background, financial modelling, marketplace analysis, and decision support.",
        icon: "trending"
    },
    {
        title: "Systems Understanding",
        description: "Backend logic, APIs, databases, integrations, and enterprise workflows.",
        icon: "layers"
    },
    {
        title: "Automation Mindset",
        description: "Reducing manual work, improving reliability, and making operations easier to scale.",
        icon: "zap"
    }
];
const metrics = [
    {
        value: 40,
        suffix: "%",
        label: "Reduction in manual reporting"
    },
    {
        value: 35,
        suffix: "%",
        label: "Faster issue resolution"
    },
    {
        value: 30,
        suffix: "%",
        label: "SQL performance improvement"
    },
    {
        value: 25,
        suffix: "%",
        label: "Marketplace conversion increase"
    },
    {
        value: 10,
        suffix: "+",
        label: "SKUs launched via market research"
    }
];
const experiences = [
    {
        company: "CGS (Computer Generated Solutions)",
        role: "Associate Software Engineer",
        dates: "June 2022 – November 2023",
        location: "Hyderabad, Telangana, India",
        label: "Enterprise Systems · SQL · APIs · CI/CD",
        description: "Worked on enterprise software systems involving ERP modules, backend logic, SQL optimization, integrations, reusable business logic, structured error handling, and CI/CD workflows.",
        bullets: [
            "Developed ERP modules using C#, WPF, and SQL, enabling enterprise-scale merchandise planning and analytics.",
            "Built reusable libraries and shared business logic, reducing development effort by approximately 20% across teams.",
            "Optimized complex SQL queries and stored procedures, improving query performance by up to 30%.",
            "Implemented structured error handling, logging, and CI/CD pipelines in Azure DevOps, reducing issue resolution time by approximately 35% and accelerating releases by approximately 25%.",
            "Integrated Dynamics 365 with external systems using APIs and Azure Integration Services, supporting real-time, event-driven workflows."
        ],
        skills: [
            "SQL",
            "APIs",
            "Azure DevOps",
            "CI/CD",
            "Enterprise Systems",
            "Dynamics 365",
            "C#"
        ]
    },
    {
        company: "CGS (Computer Generated Solutions)",
        role: "Software Trainee",
        dates: "December 2021 – May 2022",
        location: "Hyderabad, Telangana, India",
        label: "Dashboards · SQL · Reporting · UI Systems",
        description: "Supported ERP application development, reporting dashboards, centralized logging, SQL optimization, and usability improvements.",
        bullets: [
            "Customized WPF UI components using DevExpress, improving usability and consistency across ERP modules.",
            "Implemented centralized error handling and logging frameworks, reducing post-deployment debugging time by approximately 30%.",
            "Developed Power BI dashboards by integrating operational data sources, reducing manual reporting by approximately 40%.",
            "Optimized SQL queries and database schemas, improving data retrieval performance by approximately 35%."
        ],
        skills: [
            "Power BI",
            "SQL",
            "DevExpress",
            "Reporting",
            "Logging",
            "Dashboard Development"
        ]
    },
    {
        company: "Instrukart Holdings",
        role: "Sales Analyst",
        dates: "March 2020 – June 2021",
        location: "Hyderabad, Telangana, India",
        label: "Sales Analytics · Marketplace Data · Business Operations",
        description: "Worked on marketplace performance, product catalogue optimization, sales and campaign analysis, competitor research, and operational process automation.",
        bullets: [
            "Optimized product catalogues and Amazon Marketplace listings, increasing conversion rates by up to 25%.",
            "Analyzed sales and campaign performance data, contributing to 10–15% month-over-month revenue growth.",
            "Automated listing and operational processes, reducing manual effort by approximately 30%.",
            "Conducted competitor and market research, supporting the successful launch of 10+ new SKUs."
        ],
        skills: [
            "Sales Analytics",
            "Marketplace Operations",
            "Product Data",
            "Competitive Research",
            "Process Automation"
        ]
    }
];
const caseStudies = [
    {
        title: "Operational Reporting Dashboard",
        category: "Data Analytics · Power BI · Reporting",
        filters: [
            "Data Analytics"
        ],
        summary: "Built Power BI dashboards by integrating operational data sources to reduce manual reporting and improve visibility into business workflows.",
        problem: "Manual reporting was time-consuming and limited visibility into operational performance.",
        solution: "Created dashboards using integrated operational data, allowing users to track performance and reduce repetitive manual reporting tasks.",
        impact: [
            "Reduced manual reporting by approximately 40%",
            "Improved access to operational insights",
            "Helped teams make faster reporting-driven decisions"
        ],
        tools: [
            "Power BI",
            "SQL",
            "Operational Data",
            "Dashboard Design",
            "Data Integration"
        ]
    },
    {
        title: "SQL Performance Optimization",
        category: "SQL · Database Optimization · Performance",
        filters: [
            "SQL"
        ],
        summary: "Optimized complex SQL queries, stored procedures, and database schemas to improve application performance and reporting speed.",
        problem: "Slow queries and inefficient database structures affected reporting speed and application responsiveness.",
        solution: "Improved SQL queries, optimized stored procedures, and refined database schemas for better data retrieval.",
        impact: [
            "Improved query performance by up to 30%",
            "Improved data retrieval performance by approximately 35%"
        ],
        tools: [
            "SQL",
            "Stored Procedures",
            "Query Optimization",
            "Database Schema Design"
        ]
    },
    {
        title: "Error Handling, Logging & CI/CD Reliability",
        category: "Automation · Reliability · DevOps",
        filters: [
            "Automation",
            "Systems"
        ],
        summary: "Implemented structured error handling, centralized logging, and CI/CD workflows to reduce debugging time and improve release efficiency.",
        problem: "Issue resolution and post-deployment debugging required too much manual investigation.",
        solution: "Added structured error handling, logging frameworks, and CI/CD pipelines using Azure DevOps.",
        impact: [
            "Reduced issue resolution time by approximately 35%",
            "Accelerated releases by approximately 25%",
            "Reduced post-deployment debugging time by approximately 30%"
        ],
        tools: [
            "Azure DevOps",
            "CI/CD",
            "Logging",
            "Debugging",
            "Error Handling"
        ]
    },
    {
        title: "Marketplace Sales Analytics",
        category: "Business Analytics · Sales Data · Marketplace Operations",
        filters: [
            "Business Operations",
            "Data Analytics"
        ],
        summary: "Analyzed marketplace sales, campaign performance, competitor activity, and product catalogue data to improve conversions and support business growth.",
        problem: "Marketplace performance depended on catalogue quality, pricing, product visibility, and campaign decisions.",
        solution: "Optimized Amazon product listings, analyzed sales and campaign data, automated operational processes, and supported new SKU launches through competitor research.",
        impact: [
            "Increased conversion rates by up to 25%",
            "Contributed to 10–15% month-over-month revenue growth",
            "Reduced manual effort by approximately 30%",
            "Supported successful launch of 10+ SKUs"
        ],
        tools: [
            "Sales Analytics",
            "Marketplace Data",
            "Excel",
            "Reporting",
            "Process Automation"
        ]
    },
    {
        title: "Enterprise ERP Analytics Workflow",
        category: "Enterprise Systems · Analytics · Workflow Design",
        filters: [
            "Systems"
        ],
        summary: "Developed ERP modules and shared business logic for enterprise-scale merchandise planning and analytics.",
        problem: "Enterprise planning workflows required reliable modules, reusable business logic, and integration with external systems.",
        solution: "Developed ERP modules, reusable libraries, SQL-backed logic, and real-time integrations with external systems.",
        impact: [
            "Enabled enterprise-scale merchandise planning and analytics",
            "Reduced development effort by approximately 20% through reusable business logic",
            "Supported real-time, event-driven workflows through API and Azure integrations"
        ],
        tools: [
            "ERP Systems",
            "SQL",
            "APIs",
            "Dynamics 365",
            "Azure Integration Services",
            "C#"
        ]
    }
];
const primarySkills = [
    "SQL",
    "Python",
    "Power BI",
    "Financial Modelling",
    "Data Analysis",
    "Systems Thinking",
    "Business Analysis",
    "Automation"
];
const skillCategories = [
    {
        title: "Financial & Business Analysis",
        skills: [
            "Financial Modelling",
            "Business Analysis",
            "Sales & Campaign Analysis",
            "Marketplace Analytics",
            "Operational Reporting",
            "Decision Support",
            "Competitor Research"
        ]
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
            "Reporting Automation"
        ]
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
            "Query Optimization"
        ]
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
            "Debugging"
        ]
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
            "Clean Logic"
        ]
    }
];
const skillProof = {
    SQL: "Used for ERP modules, query optimization, stored procedures, dashboards, and database schema improvements.",
    Python: "Applied in data analysis, automation scripts, and data science certification work.",
    "Power BI": "Built operational dashboards integrating data sources, reducing manual reporting by 40%.",
    "Financial Modelling": "MBA-trained; applied marketplace analytics and business decision support.",
    Docker: "Used for containerized development workflows and deployment pipelines.",
    "Azure DevOps": "Implemented CI/CD pipelines, reducing issue resolution time by 35%.",
    "Business Analysis": "MBA background combined with hands-on sales analytics and marketplace optimization experience."
};
const education = [
    {
        institution: "University Canada West",
        degree: "Master of Business Administration",
        field: "Business Administration, Management and Operations",
        dates: "January 2024 – June 2025",
        note: "Business foundation for analytics, operations, decision-making, and management context.",
        type: "Graduate"
    },
    {
        institution: "Indian Institute of Technology, Madras",
        degree: "Advanced Certification in Data Science and AI",
        field: "Artificial Intelligence",
        dates: "October 2021 – September 2022",
        note: "Technical foundation in data science, artificial intelligence, and analytical thinking.",
        type: "Certification"
    },
    {
        institution: "Gitam University, Hyderabad",
        degree: "Bachelor of Technology",
        field: "Computer Science",
        dates: "June 2016 – June 2020",
        note: "Software engineering and computer science foundation.",
        type: "Undergraduate"
    }
];
const certifications = [
    "Certified Digital Marketing Associate",
    "Data Analysis Using Python",
    "Data Visualisation in Tableau",
    "Data Analytics Essentials"
];
const workingStyle = [
    {
        title: "Business-First Analysis",
        description: "I start by understanding the business question, not just the dataset. The goal is to connect data work to decisions, efficiency, revenue, or risk.",
        icon: "target"
    },
    {
        title: "System-Aware Thinking",
        description: "My software engineering background helps me understand where data comes from, how systems interact, and why workflow reliability matters.",
        icon: "cpu"
    },
    {
        title: "Clear Communication",
        description: "I explain technical and analytical work in a way that business stakeholders can understand and act on.",
        icon: "messageCircle"
    },
    {
        title: "Automation Mindset",
        description: "I look for repeated manual work that can be simplified through dashboards, scripts, workflows, or better system design.",
        icon: "repeat"
    }
];
const navLinks = [
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#experience",
        label: "Experience"
    },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#education",
        label: "Education"
    },
    {
        href: "#contact",
        label: "Contact"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/data/profile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    /* Track scroll position for glass background */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    /* Intersection Observer for active section highlighting */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const sections = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map({
                "Navbar.useEffect.sections": (link)=>document.querySelector(link.href)
            }["Navbar.useEffect.sections"]).filter(Boolean);
            const observer = new IntersectionObserver({
                "Navbar.useEffect": (entries)=>{
                    entries.forEach({
                        "Navbar.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveSection(`#${entry.target.id}`);
                            }
                        }
                    }["Navbar.useEffect"]);
                }
            }["Navbar.useEffect"], {
                rootMargin: "-20% 0px -60% 0px"
            });
            sections.forEach({
                "Navbar.useEffect": (section)=>observer.observe(section)
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    /* Lock body scroll when mobile menu is open */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflow = isOpen ? "hidden" : "";
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isOpen
    ]);
    const handleLinkClick = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex items-center justify-between h-16 md:h-20",
                style: {
                    maxWidth: "var(--max-width)",
                    paddingLeft: "var(--section-padding-x)",
                    paddingRight: "var(--section-padding-x)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "font-heading text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors",
                        "aria-label": "Home",
                        onClick: ()=>window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }),
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalInfo"].initials,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex items-center gap-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            className: `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeSection === link.href ? "text-accent bg-accent/10" : "text-text-secondary hover:text-foreground hover:bg-surface"}`,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 ml-6 pl-6 border-l border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/ATS_Resume.pdf",
                                        download: true,
                                        className: "flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            "Resume"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold bg-accent text-charcoal rounded-full hover:bg-accent-hover transition-colors shadow-sm",
                                        children: [
                                            "Let's Connect",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden p-2 text-foreground hover:text-accent transition-colors",
                        onClick: ()=>setIsOpen(!isOpen),
                        "aria-label": isOpen ? "Close menu" : "Open menu",
                        "aria-expanded": isOpen,
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                            lineNumber: 126,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 flex-1",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: `block text-2xl font-semibold py-3 transition-colors ${activeSection === link.href ? "text-accent" : "text-foreground hover:text-accent"}`,
                                        onClick: handleLinkClick,
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this)
                                }, link.href, false, {
                                    fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-6 border-t border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/ATS_Resume.pdf",
                                    download: true,
                                    className: "flex items-center justify-center gap-2 w-full py-3 text-base font-medium border border-border rounded-full text-foreground hover:bg-surface transition-colors",
                                    onClick: handleLinkClick,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        "Download Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "flex items-center justify-center gap-2 w-full py-3 text-base font-semibold bg-accent text-charcoal rounded-full hover:bg-accent-hover transition-colors",
                                    onClick: handleLinkClick,
                                    children: [
                                        "Let's Connect",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/FinTech_Projects/Resume/my-portfolio/src/components/Navbar.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Navbar, "qCnE00LnRTWtTuLTqW6Xmisj0sU=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Menu
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 5h16",
            key: "1tepv9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h16",
            key: "1lakjw"
        }
    ],
    [
        "path",
        {
            d: "M4 19h16",
            key: "1djgab"
        }
    ]
];
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("menu", __iconNode);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)");
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Download
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 15V3",
            key: "m9g1x1"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "path",
        {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)");
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowUpRight
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
];
const ArrowUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-up-right", __iconNode);
;
 //# sourceMappingURL=arrow-up-right.js.map
}),
"[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FinTech_Projects$2f$Resume$2f$my$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FinTech_Projects/Resume/my-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_FinTech_Projects_Resume_my-portfolio_a651d176._.js.map