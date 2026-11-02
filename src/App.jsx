import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutAndWhatIDo from './components/AboutAndWhatIDo';
import TechnicalSkills from './components/TechnicalSkills';
import ExperienceAndProjects from './components/ExperienceAndProjects';
import Footer from './components/Footer';
import ContactCTA from './components/ContactCTA';
import ContactModal from './components/ContactModal';
import SkillsModal from './components/SkillsModal';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  // Tiny hash router: '#/projects' shows the All Projects page, anything else is Home
  const getPage = () => {
    const h = window.location.hash;
    if (/^#\/projects\/[^/]+/.test(h)) return 'project';
    return h.startsWith('#/projects') ? 'projects' : 'home';
  };
  const getProjectId = () => (window.location.hash.match(/^#\/projects\/([^/?#]+)/) || [])[1] || null;
  const [page, setPage] = useState(getPage());
  const [projectId, setProjectId] = useState(getProjectId());

  useEffect(() => {
    const onHash = () => {
      const next = getPage();
      setPage(next);
      setProjectId(getProjectId());
      setActiveSection(next === 'home' ? 'Home' : 'Projects');
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    if (getPage() !== 'home') setActiveSection('Projects');
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const goProjects = () => { window.location.hash = '#/projects'; };
  const goProject = (proj) => { window.location.hash = `#/projects/${proj.id}`; };
  const goHome = (afterSelector) => {
    if (page === 'home') {
      if (afterSelector) document.querySelector(afterSelector)?.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = '#/';
    if (afterSelector) setTimeout(() => document.querySelector(afterSelector)?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  const handleDownloadResume = () => {
    // Resume is downloaded via href directly
  };

  const handleViewProjects = () => {
    goProjects();
  };

  return (
    <div className={`page-bg-ref relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-[#00f2fe] selection:text-slate-900 py-3 sm:py-6`}>
      {/* Soft colour blobs behind the glass (same on every page) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="orb top-[-6%] right-[2%] w-[620px] h-[620px] bg-gradient-to-br from-[#0a66ff]/50 via-[#00d2ff]/25 to-transparent" />
        <div className="orb top-[45%] right-[-8%] w-[520px] h-[520px] bg-[#7dd3fc]/35" />
        <div className="orb top-[60%] left-[-10%] w-[480px] h-[480px] bg-[#9cc4f5]/35" />
      </div>

      {(
        <svg className="absolute bottom-0 right-0 w-[70%] max-w-[900px] h-[220px] pointer-events-none z-0 opacity-80" viewBox="0 0 600 200" preserveAspectRatio="none" aria-hidden="true"
          style={{ WebkitMaskImage: 'linear-gradient(to left, #000 40%, transparent)', maskImage: 'linear-gradient(to left, #000 40%, transparent)' }}>
          <defs>
            <linearGradient id="pw1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0a66ff" stopOpacity="0.15" /><stop offset="1" stopColor="#0a3fc4" stopOpacity="0.9" /></linearGradient>
            <linearGradient id="pw2" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#38bdf8" stopOpacity="0.1" /><stop offset="1" stopColor="#00d2ff" stopOpacity="0.8" /></linearGradient>
          </defs>
          <path d="M0,150 C160,60 380,200 600,60 L600,200 L0,200 Z" fill="url(#pw2)" />
          <path d="M0,180 C200,110 420,210 600,120 L600,200 L0,200 Z" fill="url(#pw1)" />
        </svg>
      )}

      {/* Main Full-Width Responsive Container */}
      <div className="relative z-10 w-full max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col space-y-6 sm:space-y-8">
        {/* Navigation */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onContactClick={() => setIsContactOpen(true)}
          onGoProjects={goProjects}
          onGoHome={goHome}
        />

        {page === 'project' ? (
          <ProjectDetailPage key={projectId} projectId={projectId} />
        ) : page === 'projects' ? (
          <ProjectsPage
            onProjectClick={goProject}
            onExploreCaseStudies={() => setIsContactOpen(true)}
          />
        ) : (
          <>
          {/* Hero Section */}
          <Hero
            onViewProjects={handleViewProjects}
            onDownloadResume={handleDownloadResume}
          />

          {/* Key Metrics / Stats Bar */}
          <StatsBar />

          {/* About Me & What I Do */}
          <AboutAndWhatIDo
            onCategoryClick={() => setIsSkillsOpen(true)}
          />

          {/* Work Experience & Featured Projects */}
          <ExperienceAndProjects
            onProjectClick={goProject}
            onViewAllProjects={handleViewProjects}
          />

          {/* Technical Skills (Exact 4x4 Grid with Category Filter Tabs) */}
          <TechnicalSkills
            onViewAllSkills={() => setIsSkillsOpen(true)}
          />

          {/* Closing call-to-action */}
          <ContactCTA onContactClick={() => setIsContactOpen(true)} />

          </>
        )}

        <Footer onGoHome={goHome} onGoProjects={goProjects} onContactClick={() => setIsContactOpen(true)} />
      </div>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <SkillsModal
        isOpen={isSkillsOpen}
        onClose={() => setIsSkillsOpen(false)}
      />
    </div>
  );
}
