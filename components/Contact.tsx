'use client';
import { FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-2">
        Please contact me at{' '}
        <a className="underline" href="mailto:arleguidaniel@gmail.com">
          arleguidaniel@gmail.com
        </a>{' '}
        or by using form.
      </p>
      <form className="mt-10 flex flex-col">
        <input className="h-14 px-4 rounded-lg borderBlack outline-gray-400" type="text" placeholder="Your Email" />
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4 outline-gray-400" placeholder="Your Message" />
        <button
          className="group flex items-center justify-center gap-2 h-[2.5rem] w-[6.7rem] bg-gray-700 text-white rounded-xl outline-none transition-all focus:scale-105 hover:bg-gray-900 hover:scale-105 active:scale-110"
          type="submit">
          Submit
          <FaPaperPlane
            className="text-xs transition-all
          group-hover:translate-x-1
          group-hover:-translate-y-1
          "
          />
        </button>
      </form>
    </section>
  );
}