import { portfolioData } from '../data/portfolio';
import { MapPin, Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col items-start gap-10 sm:gap-12">

      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        Experience
        <span className="text-blue-500">.</span>
      </h2>

      {/* Timeline Container - hidden on mobile, visible on md+ */}
      <div className="relative w-full">

        {/* Timeline Line - only visible on md+ */}
        <div className="hidden md:block absolute left-0 top-4 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="flex flex-col gap-5 sm:gap-8 md:gap-12">
          {experience.map((job, index) => (
            <div key={index} className="relative md:pl-16 w-full reveal" data-reveal>

              {/* Timeline Node - only on md+ */}
              <div className="hidden md:block absolute left-0 w-4 h-4 bg-white rounded-full border-4 border-blue-500 z-10 mt-1.5"></div>

              {/* Card */}
              <div className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">

                {/* Blue accent bar on left for mobile (replaces timeline) */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 md:hidden rounded-l-2xl"></div>

                <div className="p-4 sm:p-5 md:p-6 pl-5 sm:pl-6 md:pl-6">

                  {/* Top row: Role + Duration/Location */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3">
                      <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                            {job.role}
                          </h3>
                      </div>
                      <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1 text-xs text-gray-500 shrink-0">
                          <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-gray-400" />
                              {job.duration}
                          </span>
                          <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-gray-400" />
                              {job.location}
                          </span>
                      </div>
                  </div>

                  {/* Company + Type */}
                  <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="text-sm font-semibold text-gray-600">{job.company}</span>
                      <span className="text-[10px] sm:text-xs px-2 py-0.5 bg-blue-100 rounded text-blue-700 border border-blue-200 font-bold shrink-0">
                          {job.type}
                      </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-[13px] sm:text-sm">
                      {job.description}
                  </p>

                  {/* Tech Tags */}
                  {job.tech && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                          {job.tech.map((t, i) => (
                              <span key={i} className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-gray-100 text-gray-700 rounded border border-gray-200">
                                  {t}
                              </span>
                          ))}
                      </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
