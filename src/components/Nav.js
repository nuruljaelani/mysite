import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillDribbbleCircle,
  AiFillMail,
} from 'react-icons/ai';
import { Link } from 'gatsby';

function Nav({
  home, portfolio, skill, about, options,
}) {
  return (
    <nav
      className="from-slate-900 to-stone-900 bg-gradient-to-r px-4 lg:px-2"
      ref={home}
    >
      <div className="flex mx-auto max-w-5xl space-x-0 md:space-x-14 lg:space-x-20">
        <div className="md:basis-1/2 basis-0 rounded-b-3xl hidden md:block">
          <StaticImage
            src="../images/Nurul Jaelani.jpg"
            alt=""
            className="rounded-b-full drop-shadow-md"
          />
        </div>
        <div className="flex flex-col md:basis-1/2 basis-full space-y-8">
          <div className="flex text-white justify-between py-2 md:py-4">
            <button
              type="button"
              onClick={() => home.current.scrollIntoView(options)}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => portfolio.current.scrollIntoView(options)}
            >
              Portfolio
            </button>
            <button
              type="button"
              onClick={() => skill.current.scrollIntoView(options)}
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => about.current.scrollIntoView(options)}
            >
              About
            </button>
            <StaticImage
              src="../images/nj2.svg"
              alt=""
              className="w-14 h-auto"
            />
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6">
            <p className="text-lg text-stone-500 md:text-xl lg:text-2xl font-extralight italic">
              Nurul Jaelani
            </p>
            <p className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl">
              Fullstack Web Developer
            </p>
            <p className="text-white">
              Fullstack web developer with 1year experience.
            </p>
          </div>
          <Link
            to="https://drive.google.com/file/d/1lvkmzPu9cz1JpxZm5cnggmd3gcQP_bax/view?usp=sharing"
            target="_blank"
          >
            <button
              type="button"
              className="bg-stone-200 rounded-3xl text-stone-800 w-1/3 shadow-md drop-shadow-md font-semibold p-2"
            >
              Download CV
            </button>
          </Link>
          <div className="space-x-2 md:space-x-3 flex">
            <Link to="mailto:nuruljaelani96@gmail.com" target="_blank">
              <AiFillMail className="text-white text-3xl" />
            </Link>
            <Link to="https://github.com/nuruljaelani" target="_blank">
              <AiFillGithub className="text-white text-3xl" />
            </Link>
            <Link to="https://linkedin.com/in/nurul-jaelani" target="_blank">
              <AiFillLinkedin className="text-white text-3xl" />
            </Link>
            <Link to="https://dribbble.com/nuruljaelani" target="_blank">
              <AiFillDribbbleCircle className="text-white text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
