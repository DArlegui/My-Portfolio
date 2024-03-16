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
        I recently graduated from Las Positas College with a degree in computer science. During my time there, I studied C++ and programming principles to build effective data
        structures. Additionally, I completed advanced math courses, ranging from linear algebra to calculus, and statistics.
      </p>

      <p className="text-left mb-5" style={{ textIndent: '2.5rem' }}>
        Following my graduation, I wanted to continue my journey in the programming industry. I was accepted into Bay Valley Tech, where I was taught front-end and back-end web
        development. Through intensive learning, I mastered key technologies such as HTML&CSS, JavaScript, Typescript, Next.js, and MySQL. Moreover, I have hands-on experience in
        developing and deploying advanced web applications, including projects involving API integration and full-stack CRUD applications.
      </p>

      <p className="text-left" style={{ textIndent: '2.5rem' }}>
        Thank you for reading my story. I am confident that my combination of technical expertise and passion for learning make me a strong candidate within your team. If you are
        interested in working with me, please feel free to contact me.
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
