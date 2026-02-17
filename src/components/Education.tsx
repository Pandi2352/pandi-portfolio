import { portfolioData } from '../data/portfolio';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start gap-16">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        Education
        <span className="text-blue-500">.</span>
      </h2>

      {/* Timeline Tree Container */}
      <div className="relative w-full ml-0 md:ml-0">
        
        {/* Vertical Tree Trunk Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0 transition-colors duration-300"></div>

        <div className="flex flex-col gap-12">
          {education.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center w-full reveal group`} data-reveal>
              
              {/* Timeline Node (Dot) */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 shadow-sm z-10 -translate-x-1/2 mt-1.5 md:mt-0 transition-all duration-300 group-hover:scale-125 group-hover:border-blue-600"></div>
              
              {/* Content Card Side */}
              <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                <div className={`
                    relative p-6 bg-white border border-gray-100 rounded-2xl 
                    shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1
                    transition-all duration-300 flex flex-col gap-3
                    ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}
                  `}>
                    
                    <div className={`flex flex-col gap-1 ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'}`}>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.degree}
                      </h3>
                      <span className="text-sm font-semibold text-gray-500">{item.institution}</span>
                    </div>

                    <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-200">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                        <Award className="w-3.5 h-3.5" />
                        {item.score}
                      </span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-xs text-gray-400 font-medium ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
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
