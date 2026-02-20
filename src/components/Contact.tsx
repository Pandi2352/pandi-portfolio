import { portfolioData } from '../data/portfolio';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const { contact, personal } = portfolioData;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center gap-8 md:gap-12 text-center">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-['Bangers'] text-gray-900 tracking-wide reveal" data-reveal>
        Contact
        <span className="text-blue-500">.</span>
      </h2>

      <p className="max-w-xl text-gray-600 text-lg reveal reveal-delay-1" data-reveal>
        Feel free to reach out for collaborations, job opportunities, or just a friendly chat!
      </p>

      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-12 mt-4">
        
        {/* Contact Details Card */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 text-left reveal reveal-delay-2" data-reveal>
          <div className="p-5 sm:p-6 bg-white border border-gray-200">
            <h3 className="text-2xl font-['Bangers'] text-gray-800 mb-3">Get in Touch</h3>
            
            <div className="flex flex-col gap-5">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium break-all">{contact.email}</span>
              </a>

              <a href="mailto:mvp.bosepandi@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium break-all">mvp.bosepandi@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium">{contact.location}</span>
              </div>

              <a href={`tel:${personal.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium">{personal.phone}</span>
              </a>
            </div>

            <div className="mt-2 pt-6">
                <h4 className="font-bold text-gray-900 mb-3">Socials</h4>
                <div className="flex gap-3 flex-wrap">
                    {contact.socials.filter(s => s.label !== 'Phone').map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-blue-500 hover:text-white transition-all text-sm font-medium">
                            {social.label}
                        </a>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full md:w-2/3 h-[300px] sm:h-[400px] bg-gray-100 overflow-hidden shadow-sm border border-gray-200 reveal reveal-delay-3" data-reveal>
          <iframe 
            src={contact.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="w-full h-full object-cover transition-opacity duration-500"
          ></iframe>
        </div>

      </div>

      {/* Quote Section */}
      <div className="mt-10 md:mt-16 text-center reveal reveal-delay-4 px-4" data-reveal>
        <blockquote className="text-xl md:text-2xl font-light italic text-gray-400 font-['Bangers'] tracking-wider opacity-80 hover:opacity-100 transition-opacity">
          "Never forget what you are. The internet will not. Wear it like armor."
        </blockquote>
      </div>

    </section>
  );
}
