import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
// import { Project } from 'next/dist/build/swc';

export default function Projects() {
  return (
    <section>
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

// type ProjectProps = (typeof projectsData)[0];

function Project({ title, description, tags, imageUrl }: any) {
  return <article></article>;
}
