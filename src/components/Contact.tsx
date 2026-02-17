import { portfolioData } from '../data/portfolio';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center gap-12 text-center">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 dark:text-slate-100 tracking-wide reveal" data-reveal>
        Contact
        <span className="text-blue-500 dark:text-cyan-400">.</span>
      </h2>

      <p className="max-w-xl text-gray-600 dark:text-slate-300 text-lg reveal reveal-delay-1" data-reveal>
        Feel free to reach out for collaborations, job opportunities, or just a friendly chat!
      </p>

      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-12 mt-4">
        
        {/* Contact Details Card */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 text-left reveal reveal-delay-2" data-reveal>
          <div className="p-5 sm:p-6 bg-white dark:bg-slate-800/40 backdrop-blur-sm border border-gray-100 dark:border-slate-700 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-['Bangers'] text-gray-800 dark:text-slate-200 mb-6">Get in Touch</h3>
            
            <div className="flex flex-col gap-5">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors group">
                <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-slate-700 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
                </div>
                <span className="font-medium">{contact.email}</span>
              </a>

              <div className="flex items-center gap-3 text-gray-600 dark:text-slate-300">
                <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
                </div>
                <span className="font-medium">{contact.location}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">
                <h4 className="font-bold text-gray-900 dark:text-slate-100 mb-4">Socials</h4>
                <div className="flex gap-3">
                    {contact.socials.map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-all text-sm font-medium">
                            {social.label}
                        </a>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full md:w-2/3 h-[300px] sm:h-[400px] bg-gray-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-800 reveal reveal-delay-3" data-reveal>
          <iframe 
            src={contact.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </div>

    </section>
  );
}
