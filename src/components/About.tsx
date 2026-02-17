import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start gap-10">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 dark:text-slate-100 tracking-wide reveal" data-reveal>
        {about.title}
        <span className="text-blue-500 dark:text-cyan-400">.</span>
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        
        {/* Bio Text */}
        <div className="text-base md:text-lg text-gray-600 dark:text-slate-300 leading-relaxed font-medium reveal reveal-delay-1" data-reveal>
          <p>{about.bio}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6">
          {about.stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1 p-4 bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300 reveal reveal-delay-2" data-reveal>
              <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-cyan-400 font-['Bangers'] tracking-wider">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
