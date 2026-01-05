
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectsHero from './components/projects/ProjectsHero';
import ProjectsMetrics from './components/projects/ProjectsMetrics';
import ProjectsGrid from './components/projects/ProjectsGrid';
import ProjectsTestimonials from './components/projects/ProjectsTestimonials';
import ProjectsCTA from './components/projects/ProjectsCTA';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <ProjectsHero />
      <ProjectsMetrics />
      <ProjectsGrid />
      <ProjectsTestimonials />
      <ProjectsCTA />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
