'use client';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  const { ref } = useSectionInView('About', 0.75);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4 text-left" style={{ textIndent: '2.5rem' }}>
        I graduated from Las Positas College with an Associate Degree in Computer Science, gaining a strong foundation
        in C++ programming, data structures, and advanced math. Following my graduation, I was accepted into Bay Valley
        Tech. Through intensive learning, I mastered key technologies such as HTML&CSS, JavaScript, Typescript, Next.js,
        and MySQL. I also worked on projects involving API integration and full-stack CRUD applications.
      </p>

      <p className="text-left mb-5" style={{ textIndent: '2.5rem' }}>
        Most recently, I completed a Software Developer Internship at Workforce Development, where I collaborated with a
        team of developers on various projects. I contributed to bug fixes, optimized website performance, improved CSS
        responsiveness, and managed version control using GitHub. This experience provided me with over 500 hours of
        coding and project management training in a professional setting.
      </p>

      <p className="text-left" style={{ textIndent: '2.5rem' }}>
        I am confident that my combination of technical expertise, practical experience, and passion for learning makes
        me a strong candidate for any software development role. I would love the opportunity to bring my skills to your
        team. Please feel free to contact me if you’re interested in collaborating.
        {/* 
        <br />
        <br />
        <span className="italic"> Lorem ipsum</span>
        <span className="font-medium"> Lorem ipsum</span>.
        <span className="underline">Lorem ipsum</span>
        */}
      </p>
    </motion.section>
  );
}
