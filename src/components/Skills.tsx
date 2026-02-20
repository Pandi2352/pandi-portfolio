import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start gap-12">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        Skills
        <span className="text-blue-500">.</span>
      </h2>

      {/* Masonry Layout for a Unique Look */}
      <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {skills.map((category, index) => {
          // Special styling for "Vibe Coding"
          const isSpecial = category.category === "Vibe Coding";
          
          return (
            <div 
              key={index} 
              className={`
                break-inside-avoid flex flex-col gap-4 p-6 rounded-3xl border
                transition-all duration-500 reveal group/card hover:-translate-y-1
                ${isSpecial 
                  ? "bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border-indigo-100 shadow-xl shadow-purple-500/5 backdrop-blur-sm" 
                  : "bg-gradient-to-br from-white/80 to-white/40 border-white/60 shadow-lg shadow-blue-500/5 backdrop-blur-xl hover:shadow-blue-500/10 hover:border-blue-200"
                }
              `} 
              data-reveal
            >
              
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xl font-['Bangers'] tracking-wide ${isSpecial ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600" : "text-gray-800"}`}>
                  {category.category}
                </h3>
                {isSpecial ? (
                  <span className="animate-pulse w-2 h-2 rounded-full bg-purple-500"></span>
                ) : (
                   <span className="w-8 h-1 bg-blue-500 rounded-full opacity-20 group-hover/card:w-12 group-hover/card:opacity-100 transition-all duration-300"></span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-sm cursor-default transition-all duration-300 hover:scale-105
                      ${isSpecial
                        ? "bg-white/60 border-indigo-100 text-indigo-900 hover:border-purple-300 hover:bg-white"
                        : "bg-white border-gray-100 text-gray-600 hover:border-blue-400 hover:text-blue-600"
                      }
                    `}
                  >
                    <skill.icon className={`w-4 h-4 ${isSpecial ? "text-purple-500" : "text-gray-600"}`} />
                    <span className="text-sm font-semibold">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
