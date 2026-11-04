import React, { useState } from 'react';
import { Send, Menu, X } from 'lucide-react';

export default function Navbar({ onContactClick, onCaseStudyClick, activeSection = 'Home', setActiveSection, onGoProjects, onGoHome }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.name);
    setMobileMenuOpen(false);
    if (item.name === 'Case Studies') {
      if (onCaseStudyClick) return onCaseStudyClick();
    }
    if (item.name === 'Projects') return onGoProjects && onGoProjects();
    if (item.name === 'Home') return onGoHome && onGoHome();
    onGoHome && onGoHome(item.href);
  };

  return (
    <header className="w-full pt-2 pb-2 z-40 relative">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <button onClick={() => onGoHome && onGoHome()} className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#13694e] to-[#0b3d2e] flex items-center justify-center text-[#f5eee0] font-serif font-bold text-base shadow-[0_8px_18px_-8px_rgba(11,70,52,0.8)] border border-white/20">
            KB
          </div>
          <span className="font-serif font-bold text-[#14261e] text-lg leading-tight tracking-tight">Kajal Bharti</span>
        </button>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative text-[13px] lg:text-sm font-semibold px-2.5 lg:px-3 py-1.5 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#14261e] after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[#c9962b]'
                    : 'text-[#2f4a3d] hover:text-[#0f5a43]'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Contact */}
        <div className="flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-blue text-white text-xs sm:text-sm font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#fffaf0] text-[#14261e] border border-[#e6dac0]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-3 rounded-2xl bg-[#fffaf0] border border-[#e6dac0] shadow-xl flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.name ? 'bg-[#0f5a43] text-white font-semibold' : 'text-[#2f4a3d] hover:bg-[#f1e7d0]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
