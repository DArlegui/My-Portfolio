'use client';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { Fragment } from 'react';
import Project from './Project';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <div className="flex flex-col text-center">
        <SectionHeading>My Projects</SectionHeading>
        <p className="leading-relaxed text-gray-700 text-xs mb-4 sm:block hidden">Hover/click image for GitHub repository.</p>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
