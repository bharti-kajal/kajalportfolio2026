import React, { useState } from 'react';
import { Send, Menu, X } from 'lucide-react';

export default function Navbar({ onContactClick, onCaseStudyClick, activeSection = 'Home', setActiveSection, onGoProjects, onGoHome }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
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
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00c6ff] flex items-center justify-center text-white font-black text-base shadow-[0_0_20px_rgba(0,102,255,0.6)] border border-white/20">
            KB
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-base sm:text-lg leading-tight tracking-tight">
              Kajal Bharti
            </span>
            <span className="text-xs text-sky-200/80 font-medium">
              Senior Backend Engineer
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative text-sm font-semibold px-4 py-1.5 transition-all duration-200 ${
                  isActive
                    ? 'text-white after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#7dd3fc] after:to-white after:shadow-[0_0_10px_rgba(125,211,252,0.9)]'
                    : 'text-slate-200/85 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Contact Me Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-b from-white/90 to-[#bfe0ff]/80 backdrop-blur-md text-[#0a4fd6] text-xs sm:text-sm font-bold shadow-[0_6px_22px_rgba(125,211,252,0.55)] hover:shadow-[0_8px_28px_rgba(125,211,252,0.8)] transition-all hover:scale-[1.03] active:scale-[0.98] border border-white/80"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0f2a78]/60 backdrop-blur-2xl border border-white/30 shadow-2xl flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.name
                  ? 'bg-white/25 text-white font-semibold'
                  : 'text-slate-200 hover:bg-white/10'
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
