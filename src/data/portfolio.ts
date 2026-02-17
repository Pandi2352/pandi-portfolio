import { Github, Linkedin, Mail, Home as HomeIcon, User, Code, Briefcase, MessageCircle, Sparkles, Workflow, FileText, GraduationCap, Shapes, Link, Phone } from 'lucide-react';
import { SiTailwindcss, SiMongodb, SiReact, SiTypescript, SiDocker, SiNestjs, SiAngular, SiBootstrap, SiFigma, SiFlutter, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiApachekafka, SiRedis, SiSocketdotio, SiOpenai, SiGoogle, SiAnthropic, SiDiscord } from 'react-icons/si';

export const portfolioData = {
    personal: {
        name: "Pandi Selvam",
        surname: "P.",
        email: "mvp.bose23@gmail.com",
        phone: "+91 9655396956",
        role: "Full-Stack Developer",
        openToWork: false,
        greeting: "Hi, I'm Pandi Selvam."
    },
    hero: {
        headline: {
            part1: "FULL-STACK DEVELOPER",
        },
        description: "Turning ideas into scalable, production-ready applications. Experienced in leading development teams and architecting robust solutions. Focused on performance, quality, and mentorship.",
        actions: [
            { text: "CHECK GITHUB", primary: true, icon: Github, href: "https://github.com/Pandi2352" },
            { text: "CHECK RESUME", primary: false, icon: FileText, href: "#" }
        ]
    },
    socials: [
        { label: "GitHub", icon: Github, href: "https://github.com/Pandi2352" },
        { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/pandi-selvam-p-1ab62b2a1" },
        { label: "Discord", icon: SiDiscord, href: "https://discord.com/invite/JEuEdJJB" },
        { label: "Email", icon: Mail, href: "mailto:mvp.bose23@gmail.com" },
        { label: "Phone", icon: Phone, href: "tel:+919655396956" }
    ],
    stack: [
        { text: "React", icon: SiReact, color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20" },
        { text: "TS", icon: SiTypescript, color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20" },
        { text: "Tailwind", icon: SiTailwindcss, color: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20" },
        { text: "Python", icon: SiPython, color: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20" },
        { text: "FastAPI", icon: SiFastapi, color: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20" },
        { text: "Node & Express", icon: SiNodedotjs, color: "bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20" },
        { text: "React Native", icon: SiReact, color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20" },
        { text: "Flutter", icon: SiFlutter, color: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20" },
        { text: "LangChain", icon: Link, color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20" },
        { text: "MongoDB", icon: SiMongodb, color: "bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20" },
        { text: "Docker", icon: SiDocker, color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20" },
        { text: "LangGraph", icon: Workflow, color: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20" },
        { text: "Gemini AI", icon: Sparkles, color: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20" },
        { text: "NestJS", icon: SiNestjs, color: "bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/20" }
    ],
    nav: [
        { label: "Home", icon: HomeIcon },
        { label: "About", icon: User },
        { label: "Experience", icon: Briefcase },
        { label: "Skills", icon: Shapes },
        { label: "Projects", icon: Code },
        { label: "Education", icon: GraduationCap },
        { label: "Contact", icon: MessageCircle }
    ],
    about: {
        title: "About Me",
        description: [
            "I'm a Full-Stack Developer & Team Lead with over 2.5 years of experience in building scalable, high-performance applications. My journey began with a curiosity for code and has evolved into a passion for architecting complex systems and leading technical teams.",
            "Currently, I bridge the gap between product vision and technical execution. I specialize in the MERN stack, Next.js, and cloud architectures, but my true strength lies in problem-solving, code optimization, and mentoring the next generation of developers.",
            "When I'm not coding, I'm exploring the frontiers of AI, diving into Web3 protocols, or refining my system design skills. I believe in continuous learning/shipping and building software that matters."
        ],
        stats: [
            { label: "Years Experience", value: "2.5+" },
            { label: "Projects Led", value: "8+" },
            { label: "Team Size", value: "5+" }
        ],
        interests: [
            "AI Agents",
            "Workflow Automation",
            "System Architecture",
            "RAG Systems",
            "Tech Leadership",
            "Web3",
            "UI/UX Design"
        ]
    },
    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            year: "2023",
            score: "75.3%",
            institution: "Virudhunagar Hindu Nadar’s Senthikumara Nadar College",
            location: "Virudhunagar"
        },
        {
            degree: "Bachelor of Computer Applications (B.C.A)",
            year: "2020",
            score: "60%",
            institution: "Ayya Nadar Janaki Ammal College of Arts and Science",
            location: "Sivakasi"
        },
        {
            degree: "HSC (Class XII)",
            year: "2017",
            score: "83.25%",
            institution: "SHNV Higher Secondary School",
            location: "Sivakasi"
        },
        {
            degree: "SSLC (Class X)",
            year: "2015",
            score: "89.4%",
            institution: "SHNV Higher Secondary School",
            location: "Sivakasi"
        }
    ],
    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React", icon: SiReact },
                { name: "Angular", icon: SiAngular },
                { name: "TypeScript", icon: SiTypescript },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Bootstrap", icon: SiBootstrap },
            ]
        },
        {
            category: "Backend & System",
            items: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "NestJS", icon: SiNestjs },
                { name: "Python", icon: SiPython },
                { name: "FastAPI", icon: SiFastapi },
                { name: "MongoDB", icon: SiMongodb },
                { name: "Kafka", icon: SiApachekafka },
                { name: "Redis", icon: SiRedis },
                { name: "WebSockets", icon: SiSocketdotio },
            ]
        },
        {
            category: "Mobile",
            items: [
                { name: "Flutter", icon: SiFlutter },
                { name: "FlutterFlow", icon: SiFlutter },
                { name: "React Native", icon: SiReact },
            ]
        },
        {
            category: "AI & Tools",
            items: [
                { name: "Gemini AI", icon: Sparkles },
                { name: "LangGraph", icon: Workflow },
                { name: "LangChain", icon: Code },
                { name: "Figma", icon: SiFigma },
                { name: "Docker", icon: SiDocker },
            ]
        },
        {
            category: "Leadership",
            items: [
                { name: "Team Mentoring", icon: User },
                { name: "System Design", icon: Shapes },
                { name: "Code Review", icon: Code },
                { name: "Agile/Scrum", icon: Workflow },
                { name: "Project Mgmt", icon: Briefcase },
            ]
        },
        {
            category: "Vibe Coding",
            items: [
                { name: "Codex CLI", icon: SiOpenai },
                { name: "Claude CLI", icon: SiAnthropic },
                { name: "Gemini CLI", icon: SiGoogle },
            ]
        }
    ],
    projects: [
        {
            title: "Document Management System (DMS)",
            description: "An enterprise-grade AI-powered Document Management System that centralizes document storage, retrieval, processing, and automation. Integrated with OCR, NLP, and RAG for intelligent document handling.",
            tech: ["React Vite", "NestJS", "MongoDB", "Gemini AI", "LangChain", "OCR"],
            role: "Team Lead",
            features: [
                "Intelligent Workflow Automation",
                "Advanced OCR & Document Comparison",
                "Schema-Based Field Extraction",
                "Secure, centralized document storage"
            ],
            tags: ["Enterprise", "AI", "Automation"],
            link: "#"
        },
        {
            title: "First Credit System (FCS)",
            description: "A comprehensive debt recovery platform designed to improve efficiency and compliance. Manages multiple creditors and debtors with streamlined workflows and regulatory adherence (TCPA, FTC, MVN).",
            tech: ["Remix JS", "NestJS", "MongoDB"],
            role: "Team Lead",
            features: [
                "Scalable Creditor/Debtor Management",
                "User-Specific Dashboards",
                "Regulatory Compliance (TCPA, FTC)",
                "Data Integrity & Security"
            ],
            tags: ["FinTech", "SaaS", "Compliance"],
            link: "#"
        },
        {
            title: "Click to Cancel",
            description: "A consumer protection solution enabling easy one-click subscription cancellations. Integrates with billing services like ABC Financials to transparently navigate complex cancellation flows.",
            tech: ["Remix JS", "NestJS", "MongoDB"],
            role: "Team Lead",
            features: [
                "One-Click Cancellation Button",
                "Service Provider Integration",
                "Customer Retention Flows",
                "Billing Transparency"
            ],
            tags: ["Consumer Tech", "Integration", "Web App"],
            link: "#"
        },
        {
            title: "Triveni Digital Sales Platform",
            description: "A comprehensive digital transformation platform for the sugar industry maximizing sales efficiency. Features AI-based pricing, digital bidding/auctions, and unified institutional CRM to streamline operations and enhance engagement.",
            tech: ["React Vite", "NestJS", "MongoDB"],
            role: "Frontend Developer",
            features: [
                "AI-Based Price & Demand Prediction",
                "Digital Sales (Bidding/Auctions)",
                "Institutional Sales CRM",
                "Real-time Analytics & SAP Sync"
            ],
            tags: ["Digital Transformation", "B2B", "AI"],
            link: "#"
        },
        {
            title: "Skillzen",
            description: "An intelligent multi-tenant Learning Management System leveraging AI/ML for personalized, adaptive learning experiences. Automates content creation and predicts learner outcomes.",
            tech: ["Remix JS", "NestJS", "MongoDB", "Gemini AI"],
            role: "Frontend Developer",
            features: [
                "AI-Automated Content Creation",
                "Adaptive Learning Paths",
                "Predictive Learner Analytics",
                "Multi-Tenant Architecture"
            ],
            tags: ["EdTech", "AI", "SaaS"],
            link: "#"
        },
        {
            title: "AI Customer Service Agent (CSA)",
            description: "An AI-powered system handling end-to-end customer service lifecycles. Features policy-driven AI agents that automate communication cadences, handle queries, analyze sentiment for retention offers, and seamlessly escalate complex cases.",
            tech: ["React", "NestJS", "MongoDB", "Gemini AI", "N8n"],
            role: "Frontend Developer",
            features: [
                "Policy-Driven AI Agent Configuration",
                "Automated Communication Cadences",
                "Sentiment Analysis & Retention Logic",
                "Human Agent Escalation & Ticketing"
            ],
            tags: ["AI Agents", "CX", "Automation"],
            link: "#"
        },
        {
            title: "Union Bank DMS (POC)",
            description: "AI-powered solution for template-based compliance checking of legal documents. Extracts information from scanned documents to verify compliance against predefined templates.",
            tech: ["React Vite", "NestJS", "MongoDB", "Cognitive AI"],
            role: "POC Developer",
            features: [
                "Automated Compliance Verification",
                "Scanned Document Extraction",
                "Template-Based Analysis"
            ],
            tags: ["POC", "Banking", "AI"],
            link: "#"
        },
        {
            title: "DMS Invoice Processing (POC)",
            description: "Streamlined invoice management POC that automates extraction, parsing, and workflow triggers. Processes PDF invoices into readable JSON and handles approval flows.",
            tech: ["React Vite", "NestJS", "MongoDB", "OCR"],
            role: "POC Developer",
            features: [
                "Automated Workflow Triggers",
                "PDF to JSON Parsing",
                "Approval/Rejection Flow",
                "Webhook Integration"
            ],
            tags: ["POC", "Automation", "Finance"],
            link: "#"
        },
        {
            title: "Indian Oil Document Comparison (POC)",
            description: "AI-driven solution for comparing two documents to identify differences, discrepancies, and inconsistencies. Particularly effective for verifying agreements, contracts, and policy revisions.",
            tech: ["React Vite", "NestJS", "MongoDB"],
            role: "Frontend Developer",
            features: [
                "Automated Document Comparison",
                "Discrepancy & Error Detection",
                "Side-by-Side Diff View",
                "Contract Verification"
            ],
            tags: ["POC", "AI", "Docs"],
            link: "#"
        }
    ],
    learningProjects: [
        {
            title: "AI Sales Agent",
            description: "A real-time competitive sales battle card generator powered by 7 specialized AI agents. Automates competitor research, feature analysis, and SWOT generation.",
            tech: ["React 19", "FastAPI", "Gemini 2.5", "Google ADK", "Python"],
            role: "Full-Stack Developer",
            features: [
                "7-Agent Sequential Pipeline",
                "Live Web Research Grounding",
                "Automated Battle Card Generation",
                "Multi-Agent Orchestration"
            ],
            tags: ["Agentic AI", "Python", "GenAI"],
            link: "https://github.com/Pandi2352/AI-sales-agent"
        },
        {
            title: "AISprintForge",
            description: "AI-powered sprint intelligence platform that turns GitHub/Jira data into actionable reports. Features risk scoring, sprint summaries, and AI chat reports.",
            tech: ["React 19", "NestJS", "MongoDB", "LangChain", "Gemini 2.5"],
            role: "Full-Stack Developer",
            features: [
                "Multi-Provider Sync (GitHub/Jira)",
                "AI Sprint Summaries & Risk Scoring",
                "Natural Language Chat Reports",
                "Automated Release Notes"
            ],
            tags: ["DevTools", "AI", "Productivity"],
            link: "https://github.com/Pandi2352/AISprintForge"
        },
        {
            title: "TNPSC AI Tutor",
            description: "An intelligent personalized coaching platform for TNPSC aspirants. Uses RAG-based AI for bilingual notes, adaptive quizzes, and mistake tracking.",
            tech: ["React", "NestJS", "MongoDB", "Gemini 2.5", "RAG"],
            role: "Full-Stack Developer",
            features: [
                "RAG-Based Bilingual Tutors",
                "Adaptive Daily Quizzes",
                "Mistake Pattern Analysis",
                "Current Affairs integration"
            ],
            tags: ["EdTech", "RAG", "Social Impact"],
            link: "https://github.com/Pandi2352/-TNPSC-AI-Tutor"
        },
        {
            title: "AI-Powered OCR Platform",
            description: "A state-of-the-art document analysis system leveraging Generative AI to transform documents into structured data, visual knowledge graphs, and actionable insights.",
            tech: ["React 18", "Node.js", "Gemini 1.5", "RAG"],
            role: "Full-Stack Developer",
            features: [
                "Intelligent OCR & Deep Analysis",
                "Visual Knowledge Graphs (Mindmaps)",
                "Identity Verification & Fraud Detection",
                "Retrieval-Augmented Generation (RAG)"
            ],
            tags: ["AI", "OCR", "Document Intelligence"],
            link: "https://github.com/Pandi2352/ai-ocr"
        },
        {
            title: "Scheduler Orchestrator",
            description: "A high-performance, resilient job orchestration microservice built to handle complex scheduling needs with execution persistence.",
            tech: ["NestJS", "Fastify", "MongoDB", "Agenda"],
            role: "Backend Developer",
            features: [
                "Flexible Cron & One-time Scheduling",
                "Webhook-based Job Execution",
                "Persistent Job Storage",
                "Swagger API Documentation"
            ],
            tags: ["Microservices", "Backend", "Scheduling"],
            link: "https://github.com/Pandi2352/Scheduler-Orchestrator"
        },
        {
            title: "Gemini OCR (npm package)",
            description: "A next-gen document intelligence wrapper for Node.js. Turns any file into structured data, mindmaps, and summaries using Google Gemini.",
            tech: ["TypeScript", "Google Gemini", "NPM"],
            role: "Open Source Author",
            features: [
                "Multimodal Processing (PDF, Video, etc.)",
                "Auto-generated Mindmaps & Summaries",
                "Batch Processing Support",
                "Strict Entity Extraction"
            ],
            tags: ["Open Source", "NPM", "AI"],
            link: "https://github.com/Pandi2352/npm-gemini-ocr"
        }
    ],
    experience: [
        {
            company: "Skillmine Technology",
            role: "Team Lead",
            duration: "June 2025 - Present",
            description: "Spearheading development for key client projects and overseeing the end-to-end delivery lifecycle. Responsibilities include architectural decision-making, code reviews, and implementing best practices. I actively mentor junior developers, manage sprint timelines, and collaborate with stakeholders to translate business requirements into technical solutions.",
            type: "Full-time",
            location: "Sivakasi"
        },
        {
            company: "Skillmine Technology",
            role: "Junior Software Developer",
            duration: "May 2024 - May 2025",
            description: "Underwent intensive training and worked on software development modules. Gained hands-on experience with the company's tech stack and development workflows.",
            type: "Full-time",
            location: "Sivakasi"
        },
        {
            company: "Skillmine Technology",
            role: "Trainee",
            duration: "Dec 2023 - May 2024",
            description: "Completed comprehensive training in software development methodologies, learning the core technology stack and participating in initial project modules.",
            type: "Full-time",
            location: "Sivakasi"
        },
        {
            company: "Cool Dreamers",
            role: "Web Developer Intern",
            duration: "May 2023 - Nov 2023",
            description: "Developed an online cracker shop website using Angular and Node.js. Created a user-friendly e-commerce platform for customers to browse and purchase various crackers.",
            tech: ["Angular", "Node.js"],
            type: "Internship",
            location: "Sivakasi"
        },
        {
            company: "ORIANA Information Technology LLP",
            role: "Python Developer Intern",
            duration: "Jan 2023 - Mar 2023",
            description: "Worked on 'Tailored Outcome and Its Protected Data Methodology Through Data Integrity'. Implemented data security measures using Python.",
            tech: ["Python"],
            type: "Internship",
            location: "Chennai"
        }
    ],
    contact: {
        email: "mvp.bose23@gmail.com",
        location: "Sivakasi, Tamil Nadu, India",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31487.625347318854!2d77.7785591!3d9.4542283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf3096b7617b%3A0x633d45ca46285430!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716301211111!5m2!1sen!2sin",
        socials: [
            { label: "GitHub", href: "https://github.com/Pandi2352" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/pandi-selvam-p-1ab62b2a1" },
            { label: "Email", href: "mailto:mvp.bose23@gmail.com" },
            { label: "Phone", href: "tel:+919655396956" }
        ]
    }
};
