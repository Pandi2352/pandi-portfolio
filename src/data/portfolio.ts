import { Github, Linkedin, Mail, Twitter, Home as HomeIcon, User, Code, Briefcase, MessageCircle, Sparkles, Workflow, FileText, GraduationCap, Shapes } from 'lucide-react';
import { SiTailwindcss, SiMongodb, SiReact, SiTypescript, SiDocker, SiNestjs, SiAngular, SiBootstrap, SiFigma, SiFlutter, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiApachekafka, SiRedis, SiSocketdotio, SiOpenai, SiGoogle, SiAnthropic } from 'react-icons/si';

export const portfolioData = {
    personal: {
        name: "Pandi Selvam",
        surname: "P.",
        email: "mvp.bose23@gmail.com",
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
        { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/mvp-bose" },
        { label: "Twitter", icon: Twitter, href: "https://twitter.com/mvp_bose" },
        { label: "Email", icon: Mail, href: "mailto:mvp.bose23@gmail.com" }
    ],
    stack: [
        { text: "React", icon: SiReact, color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20" },
        { text: "TS", icon: SiTypescript, color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20" },
        { text: "Tailwind", icon: SiTailwindcss, color: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20" },
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
            { label: "LinkedIn", href: "https://linkedin.com/in/mvp-bose" },
            { label: "Email", href: "mailto:mvp.bose23@gmail.com" }
        ]
    }
};
