import gamehubImg from '@/public/GameHub.png';
import issueTrackerImg from '@/public/IssueTracker.png';
import weatherImg from '@/public/WeatherApp.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import figmaIcon from '@/public/skill_icons/figma.png';
import gitIcon from '../public/skill_icons/github.png';
import jsIcon from '../public/skill_icons/javascript.png';
import reactIcon from '../public/skill_icons/react.png';
import tailwindIcon from '../public/skill_icons/tailwind.png';
import typescriptIcon from '../public/skill_icons/typescript.png';
import nextjsIcon from '../public/skill_icons/nextjs.png';
import prismaIcon from '../public/skill_icons/prisma.png';
import radixIcon from '../public/skill_icons/radixui.png';
import framerIcon from '../public/skill_icons/framer.png';
import nodeIcon from '../public/skill_icons/node.png';
import mysqlIcon from '../public/skill_icons/mysql.png';
import cplusplusIcon from '../public/skill_icons/cplusplus.png';
import dgripIcon from '../public/skill_icons/datagrip.png';
import asmIcon from '../public/skill_icons/asm.png';
import vercelIcon from '../public/skill_icons/vercel.png';
import psIcon from '../public/skill_icons/photoshop.png';

export const skillsData = [
  { title: 'Github', icon: gitIcon },
  { title: 'JavaScript', icon: jsIcon },
  { title: 'TypeScript', icon: typescriptIcon },
  { title: 'React', icon: reactIcon },
  { title: 'Next.js', icon: nextjsIcon },
  // { title: 'Vercel', icon: vercelIcon },
  { title: 'Tailwind', icon: tailwindIcon },
  { title: 'Figma', icon: figmaIcon },
  { title: 'Photoshop', icon: psIcon },
  { title: 'RadixUI', icon: radixIcon },
  { title: 'Framer', icon: framerIcon },
  { title: 'Prisma', icon: prismaIcon },
  { title: 'Node', icon: nodeIcon },
  { title: 'MySQL', icon: mysqlIcon },
  { title: 'C++', icon: cplusplusIcon },
  // { title: 'Assembly', icon: asmIcon },
] as const;

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Las Positas College',
    location: 'Livermore, CA',
    description: 'Graduated with a degree in computer science. I was able to learn and apply various programming languages and concepts, such as C++ and Data Structures.',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2022',
  },
  {
    title: 'Cleanroom Technician',
    location: 'Livermore, CA',
    description: 'Worked as a cleanroom technician at Formfactor Inc, where I was responsible for the maintenance and production of semiconductor dies. ',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2023',
  },
  {
    title: 'Bay Valley Tech Internship',
    location: 'Modesto, CA',
    description: "After completing Bay Valley Tech's 7-month code academy​, I was offered an internship to collaborate with a team on creating full-stack projects.",
    icon: React.createElement(FaReact),
    date: '2024 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Issue Tracker',
    description: 'A full-stack CRUD issue tracker project built using Next.js, NextAuth, Prisma, and various other modern technologies. Users are able to log in. ',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind', 'Prisma', 'RadixUI'],
    imageUrl: issueTrackerImg,
    githubLink: 'https://github.com/DArlegui/Issue-Tracker',
  },
  {
    title: 'Weather App',
    description: 'Developed using React and Vanilla JavaScript (each separately), this  app allows users to check the weather information for a specific location.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vanilla JS'],
    imageUrl: weatherImg,
    githubLink: 'https://github.com/DArlegui/Weather-App',
  },
  {
    title: 'Game Hub',
    description:
      'This game discovery allows users to explore and search for games based on different platforms and genres. Many features and Utilizes RAWG API to fetch game data.',
    tags: ['React', 'Chakra UI', 'Tailwind', 'React Query', 'RAWG API'],
    imageUrl: gamehubImg,
    githubLink: 'https://github.com/DArlegui/Game-Hub',
  },
] as const;
