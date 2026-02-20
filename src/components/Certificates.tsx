import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Award, ExternalLink, User, Calendar, BadgeCheck } from 'lucide-react';

const categoryConfig: Record<string, { gradient: string; bg: string; text: string; border: string }> = {
  "Full-Stack": { gradient: "from-violet-500 to-purple-600", bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  "Frontend":   { gradient: "from-blue-500 to-cyan-500",     bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200" },
  "Backend":    { gradient: "from-emerald-500 to-teal-600",  bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Mobile":     { gradient: "from-sky-500 to-indigo-500",    bg: "bg-sky-50",     text: "text-sky-700",    border: "border-sky-200" },
  "AI":         { gradient: "from-amber-500 to-orange-500",  bg: "bg-amber-50",   text: "text-amber-700",  border: "border-amber-200" },
  "Tools":      { gradient: "from-gray-500 to-slate-600",    bg: "bg-gray-50",    text: "text-gray-700",   border: "border-gray-200" },
};

const categories = ["All", ...Object.keys(categoryConfig)] as const;

export default function Certificates() {
  const { certificates } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? certificates
    : certificates.filter(c => c.category === activeCategory);

  const getCounts = (cat: string) =>
    cat === "All" ? certificates.length : certificates.filter(c => c.category === cat).length;

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start gap-12">

      {/* Section Header */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide">
            Certificates
            <span className="text-blue-500">.</span>
          </h2>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full">
            <BadgeCheck className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Udemy Verified</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm font-medium max-w-lg">
          Continuous learning validated through industry-recognized certifications.
        </p>
      </div>

      {/* Category Filters with Counts */}
      <div className="flex items-center gap-2 flex-wrap">
        {categories.map(cat => {
          const count = getCounts(cat);
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                  : "bg-white/60 text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {cat}
              <span className={`text-[10px] font-mono ${isActive ? "text-gray-400" : "text-gray-400"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {filtered.map((cert, index) => {
          const colors = categoryConfig[cert.category] || categoryConfig["Tools"];
          return (
            <a
              key={cert.certificateId}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white rounded-2xl p-1 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Inner Card */}
              <div className="relative h-full bg-white rounded-[12px] p-5 flex flex-col gap-3 overflow-hidden border border-gray-100 group-hover:border-gray-200 transition-colors">

                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Background watermark */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
                  <Award className="w-28 h-28 rotate-12" />
                </div>

                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${colors.bg} ${colors.text} ${colors.border} border rounded-md`}>
                    {cert.category}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-gray-800 transition-colors relative z-10 min-h-[2.5rem]">
                  {cert.name}
                </h3>

                {/* Instructor */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium relative z-10">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  <span className="truncate">{cert.instructor}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 relative z-10">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    View
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>

                {/* Certificate ID */}
                <div className="text-[9px] font-mono text-gray-300 tracking-wider relative z-10 select-none">
                  {cert.certificateId.slice(0, 20)}...
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50/80 border border-gray-100 rounded-xl w-full sm:w-auto">
        <BadgeCheck className="w-5 h-5 text-blue-500" />
        <p className="text-xs text-gray-500 font-medium">
          <span className="text-gray-900 font-bold">{certificates.length}</span> verified certificates earned from Udemy
        </p>
      </div>
    </section>
  );
}
