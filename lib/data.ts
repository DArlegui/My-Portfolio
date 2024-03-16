import gamehubImg from '@/public/GameHub.png';
import issueTrackerImg from '@/public/IssueTracker.png';
import weatherImg from '@/public/WeatherApp.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

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
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description: 'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
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

export const skillsData = [
  'Git',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Prisma',
  'RadixUI',
  'Framer Motion',
  'Node.js',
  'Express',
  'MySQL Workbench',
  'DataGrip',
  'C++',
  'Assembly',
] as const;
