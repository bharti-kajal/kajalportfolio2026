import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutAndWhatIDo from './components/AboutAndWhatIDo';
import TechnicalSkills from './components/TechnicalSkills';
import ExperienceAndProjects from './components/ExperienceAndProjects';
import ExperienceFooter from './components/ExperienceFooter';
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
    <div className={`${page === 'projects' ? 'page-bg-dark' : 'page-bg'} relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-[#00f2fe] selection:text-slate-900 py-2 sm:py-3`}>
      {/* Colour blobs behind the glass so the frosted blur has something to refract */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="orb top-[-6%] right-[2%] w-[620px] h-[620px] bg-gradient-to-br from-[#0a66ff]/70 via-[#00d2ff]/45 to-transparent" />
        <div className="orb top-[12%] left-[-12%] w-[520px] h-[520px] bg-[#4f46e5]/40" />
        <div className="orb top-[30%] right-[-8%] w-[560px] h-[560px] bg-[#38bdf8]/55" />
        <div className="orb top-[48%] left-[-8%] w-[520px] h-[520px] bg-[#8b9bff]/55" />
        <div className="orb top-[62%] right-[10%] w-[480px] h-[480px] bg-[#7dd3fc]/50" />
        <div className="orb bottom-[-4%] left-[10%] w-[560px] h-[560px] bg-[#0066ff]/50" />
      </div>

      {/* Main Full-Width Responsive Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-6 sm:space-y-8">
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

          {/* Experience Footer & Bottom Waves */}
          <ExperienceFooter
            onContactClick={() => setIsContactOpen(true)}
            onDownloadResume={handleDownloadResume}
          />
          </>
        )}
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
