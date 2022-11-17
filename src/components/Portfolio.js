import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Slide from './Slide';

function Portfolio({ portfolio }) {
  return (
    <div>
      <div className="px-4 lg:px-2" ref={portfolio}>
        <div className="mx-auto md:px-0 max-w-5xl rounded-r-[6rem] md:rounded-r-[9rem] lg:rounded-r-[11rem] bg-gradient-to-r from-transparent to-stone-800 h-fit">
          <div className="flex flex-col h-fit py-4 md:py-10">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold underline decoration-2 underline-offset-8 text-center">Code</p>
            <Slide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
