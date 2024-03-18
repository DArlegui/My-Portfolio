'use client';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const fadeinAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-x-9 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center justify-center rounded-lg px-5 py-3 space-y-4 w-[88px]"
            key={index}
            variants={fadeinAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}>
            <Image src={skill.icon} alt="logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <p>{skill.title}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
