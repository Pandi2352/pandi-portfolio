import { portfolioData } from '../data/portfolio';
import { ExternalLink, Tag, Sparkles } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
        
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide mb-16 text-center reveal" data-reveal>
        Featured Projects
        <span className="text-blue-500">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white/50 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal" 
            data-reveal 
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10"></div>

            <div className="flex flex-col h-full gap-4">
                
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.role}</span>
                        <h3 className="text-2xl font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-gray-400 hover:text-blue-600 hover:scale-110 transition-all shadow-sm border border-gray-100">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                </p>

                {/* Features List */}
                {project.features && (
                    <ul className="space-y-1.5 mb-2 flex-grow">
                        {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-gray-100/50">
                    {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-gray-50 group-hover:bg-white text-gray-500 text-xs font-medium rounded-md border border-gray-100 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>

                 {/* Category Tags */}
                 <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tags && project.tags.length > 0 && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-100/50 text-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                           <Tag className="w-3 h-3" />
                           {project.tags[0]}
                        </div>
                    )}
                 </div>

            </div>
          </div>
        ))}
      </div>

      {/* Learning & Upskilling Section - Dark Lab Theme */}
      {portfolioData.learningProjects && portfolioData.learningProjects.length > 0 && (
        <div className="mt-32 pt-0">
            <div className="relative mb-16 text-center reveal" data-reveal>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/20 blur-[50px] rounded-full"></div>
                <h2 className="relative text-3xl md:text-5xl font-['Bangers'] text-gray-900 tracking-wide z-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                        Lab & Experiments
                    </span>
                    <span className="text-gray-400 text-4xl">.</span>
                </h2>
                <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm font-medium tracking-wide uppercase">
                    R&D / Agentic Workflows / Vibe Coding
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2">
                {portfolioData.learningProjects.map((project, index) => (
                <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col bg-white rounded-3xl p-1 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 reveal"
                    data-reveal
                    style={{ transitionDelay: `${index * 150}ms` }}
                >
                    {/* Light Card Content */}
                    <div className="relative h-full bg-gradient-to-br from-white to-purple-50/30 rounded-[22px] p-6 flex flex-col z-20 overflow-hidden border border-purple-100/50">
                        
                        {/* Subtle Glow Effects - Lighter */}
                        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-200/20 blur-[60px] rounded-full group-hover:bg-purple-300/30 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-blue-200/20 blur-[50px] rounded-full group-hover:bg-blue-300/30 transition-all duration-500"></div>

                        {/* Top Row */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-2.5 bg-white rounded-xl border border-purple-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-5 h-5 text-purple-500" />
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        </div>

                        {/* Text Content */}
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                            {project.description}
                        </p>

                        {/* Tech Stack - Light Theme */}
                        <div className="mt-auto flex flex-wrap gap-2">
                            {project.tech.slice(0, 4).map((t, i) => (
                                <span key={i} className="px-2 py-1 bg-white text-purple-700 text-[10px] font-bold tracking-wider rounded border border-purple-100/50 shadow-sm">
                                    {t}
                                </span>
                            ))}
                            {project.tech.length > 4 && (
                                <span className="px-2 py-1 bg-white text-gray-500 text-[10px] font-bold rounded border border-gray-100 shadow-sm">+{project.tech.length - 4}</span>
                            )}
                        </div>

                        {/* Bottom decorative line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                </a>
                ))}
            </div>
        </div>
      )}
    </section>
  );
}
