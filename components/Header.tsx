'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { links } from '@/lib/data';
import clsx from 'clsx'; //npm i clsx
import { motion } from 'framer-motion'; //npm i framer-motion
import Link from 'next/link';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] "
        // initial={{ y: -100, x: '-50%', opacity: 0 }}
        // animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></div>
      <nav className=" flex fixed top-0 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[0.9rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.95rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              // initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition', {
                  'text-gray-950': activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}>
                {link.name}

                {link.name === activeSection && (
                  <span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    // layoutId="activeSection"
                    // transition={{
                    //   type: 'spring',
                    //   stiffness: 380,
                    //   damping: 30,
                    // }}
                  ></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
