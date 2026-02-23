import { portfolioData } from '../data/portfolio';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col items-start gap-10 sm:gap-16">

      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        Education
        <span className="text-blue-500">.</span>
      </h2>

      {/* ===== MOBILE LAYOUT (below md) ===== */}
      <div className="flex flex-col w-full md:hidden">
        {education.map((item, index) => (
          <div key={index} className="relative reveal" data-reveal>

            {/* Connector line between cards */}
            {index < education.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-0 w-px border-l border-dashed border-gray-300"></div>
            )}

            <div className="flex gap-4 items-start pb-8">
              {/* Year circle */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                <span className="text-[11px] font-black text-gray-800">{item.year}</span>
              </div>

              {/* Card */}
              <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-[14px] font-bold text-gray-900 leading-snug">
                    {item.degree}
                  </h3>
                  <span className="shrink-0 text-[11px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">
                    {item.score}
                  </span>
                </div>

                <p className="text-xs text-gray-500 font-medium leading-snug mb-2">
                  {item.institution}
                </p>

                <div className="flex items-center gap-1 text-[11px] text-gray-400">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== DESKTOP LAYOUT (md+) — Center Alternating Timeline ===== */}
      <div className="relative w-full hidden md:block">

        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-4 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="flex flex-col gap-12">
          {education.map((item, index) => (
            <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center w-full reveal group`} data-reveal>

              {/* Timeline Node */}
              <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 shadow-sm z-10 -translate-x-1/2 transition-all duration-300 group-hover:scale-125 group-hover:border-blue-600"></div>

              {/* Content Card */}
              <div className="w-[calc(50%-2rem)]">
                <div className={`
                    relative p-6 bg-white border border-gray-100 rounded-2xl
                    shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1
                    transition-all duration-300 flex flex-col gap-3
                    ${index % 2 === 0 ? 'text-left' : 'text-right'}
                  `}>

                    <div className={`flex flex-col gap-1 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.degree}
                      </h3>
                      <span className="text-sm font-semibold text-gray-500">{item.institution}</span>
                    </div>

                    <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-200">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                        <Award className="w-3.5 h-3.5" />
                        {item.score}
                      </span>
                    </div>

                    <div className={`flex items-center gap-2 text-xs text-gray-400 font-medium ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </div>
                </div>
              </div>

              {/* Empty Side */}
              <div className="w-[calc(50%-2rem)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
