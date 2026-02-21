import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-start gap-12">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal px-2" data-reveal>
        {about.title}
        <span className="text-blue-500">.</span>
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mb-8 px-2">
        {/* Left Column: Bio */}
        <div className="flex flex-col gap-6 reveal reveal-delay-1" data-reveal>
          <div className="flex flex-col gap-4 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
            {about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Stats & Award */}
        <div className="flex flex-col gap-8 reveal reveal-delay-2" data-reveal>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            {about.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-1.5 p-5 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 group hover:-translate-y-1">
                <span className="text-3xl md:text-4xl font-black text-slate-900 font-['Bangers'] tracking-wider group-hover:text-blue-600 transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Award Card - Filling the empty space */}
          <div className="relative group overflow-hidden bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 border border-slate-100 flex flex-col sm:flex-row items-center gap-8 text-left">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] group-hover:bg-blue-100/50 transition-colors duration-700"></div>
            
            {/* Award Image with Zoom */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-blue-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-1 bg-white rounded-xl border border-slate-50 overflow-hidden">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/award.png" 
                    alt="Star Award - Skillmine" 
                    className="w-24 md:w-28 h-auto object-cover transform group-hover:scale-150 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
            </div>

            {/* Award Text */}
            <div className="flex flex-col gap-2 relative z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-blue-600/5 border border-blue-600/10 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-[8px] font-black text-blue-600 uppercase tracking-[0.4em]">Recognition</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-['Bangers'] text-slate-900 tracking-wider leading-none">
                STAR PERFORMER <span className="text-blue-600">Q2 2025</span>
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                Awarded by <span className="font-bold text-slate-900">Skillmine Technology</span> for exceptional leadership and performance.
              </p>
              <div className="flex gap-2 mt-1">
                 <span className="px-2 py-0.5 bg-slate-900 text-white text-[8px] font-black rounded uppercase">Q2 Achiever</span>
                 <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[8px] font-black rounded border border-blue-100 uppercase">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specializations - Full Width Below */}
      <div className="w-full bg-slate-50 border border-slate-200/60 rounded-[2.5rem] p-8 md:p-12 reveal reveal-delay-4" data-reveal>
        <h3 className="text-2xl font-['Bangers'] text-slate-900 tracking-wider flex items-center gap-4 mb-8">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          CORE SPECIALIZATIONS & EXPERTISE
        </h3>
        <div className="flex flex-wrap gap-3">
          {about.interests.map((interest) => (
            <span 
              key={interest} 
              className="px-6 py-3 bg-white text-slate-600 text-base font-bold rounded-2xl border border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default select-none shadow-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
