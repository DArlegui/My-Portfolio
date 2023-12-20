'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { projectsData } from '@/lib/data';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Project from './Project';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection('Projects');
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
