import { portfolioData } from '../data/portfolio';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { personal, socials } = portfolioData;

  return (
    <footer className="w-full py-8 mt-12 mb-24 md:mb-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} {personal.name} {personal.surname}. All rights reserved.
        </div>

        {/* Tech Stack Credit */}
        <div className="flex items-center gap-1.5 text-sm text-gray-400">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400/20" />
          <span>using React & Tailwind</span>
        </div>

        {/* Social Links (Mobile only, desktop uses sidebar) */}
        <div className="flex md:hidden items-center gap-4">
            {socials.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <social.icon className="w-4 h-4" />
                </a>
            ))}
        </div>

      </div>
    </footer>
  );
}
