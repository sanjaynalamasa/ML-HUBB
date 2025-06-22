import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Github, Twitter, Linkedin, ArrowUp, Phone } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 relative">
      <button 
        onClick={scrollToTop}
        className="absolute right-8 top-0 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8" />
              <span className="text-xl font-bold text-white">ML Hub</span>
            </Link>
            <p className="text-sm">
              Empowering your applications with advanced AI capabilities.
            </p>
            <a
              href="https://wa.me/918919753387"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Chat Support</span>
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/chat", label: "AI Chat" },
                { to: "/vision", label: "Image Understanding" },
                { to: "/logs", label: "Log Parser" },
                { to: "/analysis", label: "Text Analysis" },
                { to: "/moderation", label: "Content Moderation" }
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} 
                     className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "API Reference", "Examples", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a key={index} 
                   href={href} 
                   className="hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center space-y-2">
          <p>&copy; {new Date().getFullYear()} ML Hub. All rights reserved.</p>
          <p className="text-gray-400 hover:text-white transition-colors">
            Designed and Developed by <span className="font-semibold">Sanjay Nalamasa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}