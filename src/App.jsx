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
import SwiftDialCaseStudyModal from './components/SwiftDialCaseStudyModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isSwiftDialCaseStudyOpen, setIsSwiftDialCaseStudyOpen] = useState(false);

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
    <div className={`${'page-bg-royal'} relative min-h-screen text-[#14261e] overflow-x-hidden font-sans selection:bg-[#0f5a43] selection:text-white py-1 sm:py-2`}>
      {/* Colour blobs behind the glass so the frosted blur has something to refract */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        
        
        
        
        
      </div>

      {/* Main Full-Width Responsive Container */}
      <div className={`relative z-10 w-full ${page === 'home' ? 'max-w-[1440px]' : 'max-w-[1360px]'} mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4 sm:space-y-5`}>
        {/* Navigation */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onContactClick={() => setIsContactOpen(true)}
          onCaseStudyClick={() => setIsSwiftDialCaseStudyOpen(true)}
          onGoProjects={goProjects}
          onGoHome={goHome}
        />

        {page === 'project' ? (
          <ProjectDetailPage
            key={projectId}
            projectId={projectId}
            onOpenCaseStudy={() => setIsSwiftDialCaseStudyOpen(true)}
          />
        ) : page === 'projects' ? (
          <ProjectsPage
            onProjectClick={goProject}
            onExploreCaseStudies={() => setIsSwiftDialCaseStudyOpen(true)}
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
            onCaseStudyClick={() => setIsSwiftDialCaseStudyOpen(true)}
          />

          {/* Technical Skills (Exact 4x4 Grid with Category Filter Tabs) */}
          <TechnicalSkills
            onViewAllSkills={() => setIsSkillsOpen(true)}
          />

          {/* Experience Footer & Bottom Waves */}
          <ExperienceFooter
            onContactClick={() => setIsContactOpen(true)}
            onDownloadResume={handleDownloadResume}
            onCaseStudyClick={() => setIsSwiftDialCaseStudyOpen(true)}
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

      <SwiftDialCaseStudyModal
        isOpen={isSwiftDialCaseStudyOpen}
        onClose={() => setIsSwiftDialCaseStudyOpen(false)}
      />
    </div>
  );
}
