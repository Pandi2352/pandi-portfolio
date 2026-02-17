import React, { useState, useEffect, Suspense, lazy, memo } from "react";
import { portfolioData } from "../data/portfolio";
import { Phone } from "lucide-react";

const About = lazy(() => import("./About"));
const Education = lazy(() => import("./Education"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const Experience = lazy(() => import("./Experience"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

import AnimatedBackground from "./AnimatedBackground";

// Loading component
const SectionLoader = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="animate-pulse space-y-4 w-full max-w-4xl px-6">
      <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto"></div>
      <div className="h-64 bg-gray-100 rounded-xl w-full"></div>
    </div>
  </div>
);

export default function Home() {
  const { personal, hero, socials, stack, nav, about } = portfolioData;
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = nav.map((item) => item.label.toLowerCase());

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger earlier for smoother feel
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [nav]);

  return (
    <div className="relative min-h-screen text-gray-900 font-['Inter'] overflow-x-hidden selection:bg-blue-200 selection:text-blue-900 transition-colors duration-500">
      <AnimatedBackground />
      {/* Top Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-6 pointer-events-none">
        <div className="text-2xl md:text-3xl font-normal tracking-wide text-gray-900 font-['Bangers'] select-none uppercase transition-colors duration-300 pointer-events-auto">
          {personal.name.toUpperCase()}
          <span className="text-blue-600">
            {" "}
            {personal.surname}
          </span>
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            <Phone className="w-5 h-5 text-blue-500" />
            <span className="hidden sm:inline">{personal.phone}</span>
          </a>
        </div>
      </header>

      {/* Left Sidebar - Vertical Email */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 pointer-events-auto mix-blend-difference text-white">
        <div className="h-24 w-[1px] bg-gray-400"></div>
        <a
          href={`mailto:${personal.email}`}
          className="writing-vertical-rl text-blue-600 hover:text-blue-800 font-bold tracking-widest transition-colors duration-300 transform rotate-180 text-sm"
          style={{ writingMode: "vertical-rl" }}
        >
          {personal.email}
        </a>
        <div className="h-24 w-[1px] bg-gray-400"></div>
      </div>

      {/* Right Sidebar - Socials */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 pointer-events-auto">
        <div className="h-24 w-[1px] bg-gray-400"></div>
        <div className="flex flex-col gap-5">
          {socials.map((social, index) => (
            <SocialLink
              key={index}
              href={social.href}
              icon={<social.icon className="w-5 h-5" />}
              label={social.label}
            />
          ))}
        </div>
        <div className="h-24 w-[1px] bg-gray-400"></div>
      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Main Hero Section */}
        <div id="home" className="w-full">
          <main className="flex flex-col items-start justify-start min-h-screen px-6 md:px-12 text-left max-w-full md:max-w-6xl mx-auto pt-32 md:pt-32 w-full">
            
            <div className="mb-4 pl-1">
              <span className="text-gray-500 font-medium text-base tracking-wide transition-colors duration-300">
                {personal.greeting}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-wide text-gray-900 mb-2 leading-[0.95] font-['Bangers'] transition-colors duration-300 drop-shadow-sm">
              <span className="block">{hero.headline.part1}</span>
            </h1>

            <p className="max-w-xl text-lg text-gray-600 mb-5 leading-relaxed text-left pl-1 transition-colors duration-300 font-medium">
              {hero.description}
            </p>

            {/* Tech Stack Section */}
            <div className="flex flex-col gap-4 mb-10 pl-1 w-full max-w-5xl">
              <span className="uppercase tracking-[0.2em] text-xs font-extrabold text-blue-500/80">Powering Next-Gen Apps With</span>
              <div className="flex flex-wrap gap-2.5">
                {stack.map((tech, index) => (
                  <TechBadge
                    key={index}
                    icon={<tech.icon className="w-3.5 h-3.5" />}
                    text={tech.text}
                    color={tech.color}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pl-1">
              {hero.actions.map((action, index) => (
                <ActionButton
                  key={index}
                  primary={action.primary}
                  icon={action.icon}
                  text={action.text}
                  href={action.href}
                />
              ))}
            </div>

            {/* Key Stats / Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl pl-1 animate-fadeIn delay-300">
              {about.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start justify-center p-5 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                   <span className="text-3xl md:text-4xl font-black text-gray-900 font-['Bangers'] tracking-wide group-hover:text-blue-600 transition-colors">
                     {stat.value}
                   </span>
                   <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                     {stat.label}
                   </span>
                </div>
              ))}
               {/* Dynamic Stat for Learning Projects */}
               {portfolioData.learningProjects && (
                <div className="flex flex-col items-start justify-center p-5 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                   <span className="text-3xl md:text-4xl font-black font-['Bangers'] tracking-wide">
                     {portfolioData.learningProjects.length}+
                   </span>
                   <span className="text-[10px] md:text-xs font-bold text-blue-100 uppercase tracking-widest mt-1">
                     R&D Experiments
                   </span>
                </div>
               )}
            </div>

            {/* Mobile Socials */}
            <div className="flex md:hidden items-center gap-4 mt-10">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/50 backdrop-blur-sm rounded-xl text-gray-500 border border-gray-100 shadow-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </main>
        </div>

        <Suspense fallback={<SectionLoader />}>
            {/* About Section */}
            <div id="about" className="w-full">
            <About />
            </div>

            {/* Experience Section */}
            <div id="experience" className="w-full">
            <Experience />
            </div>

            {/* Skills Section */}
            <div id="skills" className="w-full">
            <Skills />
            </div>

            {/* Projects Section */}
            <div id="projects" className="w-full">
            <Projects />
            </div>

            {/* Education Section */}
            <div id="education" className="w-full">
            <Education />
            </div>

            {/* Contact Section */}
            <div id="contact" className="w-full">
            <Contact />
            </div>

            <Footer />
        </Suspense>

        {/* Spacer for bottom nav visibility */}
        <div className="h-24"></div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 max-w-[95%] w-fit pointer-events-none">
        <nav className="flex items-center gap-1 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-sm px-2 sm:px-3 py-2 rounded-2xl pointer-events-auto overflow-x-auto no-scrollbar transition-all duration-300">
          <div className="flex items-center gap-1">
            {nav.map((item, index) => (
              <NavLink
                key={index}
                active={activeSection === item.label.toLowerCase()}
                icon={<item.icon className="w-5 h-5" />}
                label={item.label}
                onClick={() => scrollToSection(item.label.toLowerCase())}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

const SocialLink = memo(({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 text-blue-600 hover:text-blue-800 hover:bg-black/5 rounded-xl transition-all duration-200"
    >
      {icon}
    </a>
  );
});

const TechBadge = memo(({
  text,
  color,
  icon,
}: {
  text: string;
  color: string;
  icon: React.ReactNode;
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-bold border ${color} shadow-sm whitespace-nowrap`}
    >
      {icon}
      {text}
    </span>
  );
});

const ActionButton = memo(({
  text,
  icon,
  primary,
  href,
}: {
  text: string;
  icon?: React.ElementType;
  primary?: boolean;
  href?: string;
}) => {
  const baseStyles =
    "relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-['Inter'] font-bold text-sm tracking-widest transition-all duration-200 w-full sm:w-auto transform active:scale-95 active:translate-y-1";

  const primaryStyles =
    "bg-blue-600 text-white border-b-4 border-blue-800 hover:bg-blue-500 hover:border-blue-700 shadow-lg shadow-blue-200";

  const secondaryStyles =
    "bg-white text-gray-800 border border-t border-l border-r border-gray-200 border-b-4 border-b-gray-300 hover:bg-gray-50 hover:border-b-gray-400 shadow-sm";

  const variants = primary ? primaryStyles : secondaryStyles;

  const Icon = icon;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants} group`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {text}
          {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
        </span>
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants} group`}>
      <span className="relative z-10 flex items-center gap-2">
        {text}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
});

const NavLink = memo(({
  icon,
  active,
  onClick,
  label,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  label: string;
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`p-3 rounded-xl transition-colors duration-200 shrink-0 cursor-pointer ${active ? "text-gray-900 bg-white shadow-sm border border-gray-100" : "text-gray-500 hover:text-gray-900 hover:bg-white/50"}`}
    >
      {icon}
    </button>
  );
});
