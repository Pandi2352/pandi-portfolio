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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skills.map((category, index) => (
          <div key={index} className="flex flex-col gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 reveal" data-reveal>
            
            <h3 className="text-2xl font-['Bangers'] text-gray-800 tracking-wide mb-2">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, idx) => (
                <div key={idx} className="group flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                  <skill.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
