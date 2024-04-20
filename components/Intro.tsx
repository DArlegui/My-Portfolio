'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { PiCertificateBold } from 'react-icons/pi';
import photo from '../public/photo.jpg';

const certLink = process.env.CERTS_LINK;

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [showDocument, setShowDocument] = useState(false);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              duration: 0.2,
            }}>
            <Image src={photo} alt="My Portrait" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:h-36 sm:w-36" />
          </motion.div>
          {/* <motion.span
            className="absolute bottom-2 right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1 className="mb-10 mt-4 px-5 text-2xl font-medium !leading-[1.5] sm:text-[34px]" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hi! I'm Daniel.</span> I'm a <span className="font-bold">full-stack developer</span> with <span className="font-bold"> 4 years</span> of experience. Recently, I
        have been focusing on web app development.
        {/* <span className="underline">web app development</span>. */}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}>
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <button
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack
        "
          onClick={() => setShowDocument(!showDocument)}>
          {showDocument ? 'Close' : 'View'} Resume <FaMagnifyingGlass className="opacity-60" />
        </button>

        <div className="flex flex-row items-center justify-center gap-3">
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
            href="https://www.linkedin.com/in/danielarlegui/"
            target="_blank">
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack"
            href="https://github.com/DArlegui"
            target="_blank">
            <FaGithubSquare />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack"
            href={certLink}>
            <PiCertificateBold />
          </a>
        </div>
      </motion.div>

      {showDocument && (
        <div className="flex flex-col items-center justify-center mt-10">
          <iframe src="/CV.pdf" width="100%" height="600px"></iframe>
        </div>
      )}
    </section>
  );
}
