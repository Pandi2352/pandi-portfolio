import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start gap-12">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        {about.title}
        <span className="text-blue-500">.</span>
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        
        {/* Left Column: Bio & Interests */}
        <div className="flex flex-col gap-8 reveal reveal-delay-1" data-reveal>
          <div className="flex flex-col gap-4 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
            {about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Stats & Interests */}
        <div className="flex flex-col justify-center gap-8 reveal reveal-delay-2" data-reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {about.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-1 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                <span className="text-3xl md:text-4xl font-bold text-blue-600 font-['Bangers'] tracking-wider group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          {/* Visual decoration */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

          {/* Interests Moved Here */}
          <div className="flex flex-col gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
             <h3 className="text-xl font-['Bangers'] text-gray-800 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Areas of Focus
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {about.interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="px-3.5 py-1.5 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default select-none"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
