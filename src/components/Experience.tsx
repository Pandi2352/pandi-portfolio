import { portfolioData } from '../data/portfolio';
import { MapPin, Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-start gap-12">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        Experience
        <span className="text-blue-500">.</span>
      </h2>

      {/* Timeline Container */}
      <div className="relative w-full ml-4 md:ml-0">
        
        {/* Timeline Line */}
        <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-gray-200 transition-colors duration-300"></div>

        <div className="flex flex-col gap-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-16 w-full reveal" data-reveal>
              
              {/* Timeline Node */}
              <div className="absolute left-0 w-4 h-4 bg-white rounded-full border-4 border-blue-500 z-10 -translate-x-[calc(50%-1px)] mt-1.5 transition-colors duration-300"></div>
              
              {/* Card */}
              <div className="relative p-4 sm:p-6 bg-white backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 font-medium mt-1">
                            <Building2 className="w-4 h-4" />
                            <span>{job.company}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm px-2 py-0.5 bg-blue-50 rounded text-blue-600 border border-blue-100">
                                {job.type}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {job.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                        </span>
                    </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                    {job.description}
                </p>

                {job.tech && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {job.tech.map((t, i) => (
                            <span key={i} className="text-xs font-mono font-medium px-2 py-1 bg-gray-50 text-gray-600 rounded border border-gray-200">
                                {t}
                            </span>
                        ))}
                    </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
