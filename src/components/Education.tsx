import { portfolioData } from '../data/portfolio';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start gap-12">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        Education
        <span className="text-blue-500">.</span>
      </h2>

      {/* Timeline Tree Container */}
      <div className="relative w-full ml-4 md:ml-0">
        
        {/* Vertical Tree Trunk Line */}
        <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0 transition-colors duration-300"></div>

        <div className="flex flex-col gap-12">
          {education.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full reveal`} data-reveal>
              
              {/* Timeline Node (Dot) */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm z-10 -translate-x-[calc(50%-0.5px)] md:-translate-x-1/2 mt-1.5 md:mt-0 transition-colors duration-300"></div>
              
              {/* Content Card Side */}
              <div className="w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0">
                <div className={`
                    relative p-4 sm:p-6 bg-white backdrop-blur-sm 
                    border border-gray-100 rounded-2xl 
                    shadow-sm hover:shadow-md transition-all duration-300 group
                    text-left
                  `}>
                    
                    {/* Arrow/Pointer */}
                   <div className={`hidden md:block absolute top-[50%] -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-gray-100 rotate-45 transition-colors duration-300
                      ${index % 2 === 0 ? '-left-[7px] border-r-0 border-t-0' : '-right-[7px] border-l-0 border-b-0 rotate-[225deg]'}
                   `}></div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.degree}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1.5 bg-blue-50 px-2 py-0.5 rounded-md">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                      <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2 py-0.5 rounded-md font-medium border border-green-100">
                        <Award className="w-3.5 h-3.5" />
                        {item.score}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
                      <span>{item.institution}, {item.location}</span>
                    </div>

                </div>
              </div>

              {/* Empty Side for Layout Balance */}
              <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
