import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

import AnimatedBackground from "./AnimatedBackground";

export default function Home() {
  const { personal, hero, socials, stack, nav } = portfolioData;
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
      threshold: 0.5, // Trigger when 50% of the section is visible
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

        <div className="flex items-center gap-4 pointer-events-auto"></div>
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
          <main className="flex flex-col items-start justify-center min-h-screen px-6 md:px-12 text-left max-w-full md:max-w-6xl mx-auto pt-32 md:pt-20 w-full">
            {/* Status Pill */}
            <div className="mb-6 pl-1 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full text-blue-700 text-xs font-bold tracking-wide uppercase shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for New Projects
              </div>
            </div>

            <div className="mb-4 pl-1">
              <span className="text-gray-500 font-medium text-base tracking-wide transition-colors duration-300">
                {personal.greeting}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-wide text-gray-900 mb-2 leading-[0.95] font-['Bangers'] transition-colors duration-300 drop-shadow-sm">
              <span className="block">{hero.headline.part1}</span>
            </h1>

            <p className="max-w-xl text-lg text-gray-600 mb-10 leading-relaxed text-left pl-1 transition-colors duration-300 font-medium">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3 mb-12 text-sm text-gray-500 font-medium max-w-5xl leading-relaxed pl-1">
              <span className="uppercase tracking-wider text-xs font-bold text-gray-400 mr-2">Powering Next-Gen Apps with</span>
              {stack.map((tech, index) => (
                <TechBadge
                  key={index}
                  icon={<tech.icon className="w-3.5 h-3.5" />}
                  text={tech.text}
                  color={tech.color}
                />
              ))}
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

            {/* Mobile Socials */}
            <div className="flex md:hidden items-center gap-4 mt-10">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/50 backdrop-blur-sm rounded-xl text-gray-500 border border-gray-100 shadow-sm hover:text-blue-600 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </main>
        </div>

        {/* About Section */}
        <div id="about" className="w-full">
          <About />
        </div>

        {/* Education Section */}
        <div id="education" className="w-full">
          <Education />
        </div>

        {/* Skills Section */}
        <div id="skills" className="w-full">
          <Skills />
        </div>

        {/* Experience Section */}
        <div id="experience" className="w-full">
          <Experience />
        </div>

        {/* Contact Section */}
        <div id="contact" className="w-full">
          <Contact />
        </div>

        <Footer />

        {/* Spacer for bottom nav visibility */}
        <div className="h-32"></div>
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
                onClick={() => scrollToSection(item.label.toLowerCase())}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      title={label}
      className="p-3 text-blue-600 hover:text-blue-800 hover:bg-black/5 rounded-xl transition-all duration-200"
    >
      {icon}
    </a>
  );
}

function TechBadge({
  text,
  color,
  icon,
}: {
  text: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-bold border ${color} shadow-sm whitespace-nowrap`}
    >
      {icon}
      {text}
    </span>
  );
}

function ActionButton({
  text,
  icon,
  primary,
  href,
}: {
  text: string;
  icon?: React.ElementType;
  primary?: boolean;
  href?: string;
}) {
  const baseStyles =
    "relative flex items-center justify-center gap-2 px-8 py-4 rounded-full font-['Inter'] font-bold text-sm tracking-widest transition-colors duration-200 w-full sm:w-auto overflow-hidden group cursor-pointer";

  const primaryStyles =
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md border border-transparent";

  const secondaryStyles =
    "bg-white/10 backdrop-blur-md text-gray-800 border border-gray-200 hover:bg-gray-50 shadow-sm";

  const variants = primary ? primaryStyles : secondaryStyles;

  const Icon = icon;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {text}
          {Icon && <Icon className="w-4 h-4" />}
        </span>
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants}`}>
      <span className="relative z-10 flex items-center gap-2">
        {text}
        {Icon && <Icon className="w-4 h-4" />}
      </span>
    </button>
  );
}

function NavLink({
  icon,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-xl transition-colors duration-200 shrink-0 cursor-pointer ${active ? "text-gray-900 bg-white shadow-sm border border-gray-100" : "text-gray-500 hover:text-gray-900 hover:bg-white/50"}`}
    >
      {icon}
    </button>
  );
}
