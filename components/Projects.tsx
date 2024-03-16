'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { projectsData } from '@/lib/data';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Project from './Project';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <div className="flex flex-col text-center">
        <SectionHeading>My Projects</SectionHeading>
        <p className="leading-relaxed text-gray-700 text-xs mb-4">Hover/click image for GitHub repository.</p>
      </div>
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
