import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillDribbbleCircle,
  AiFillMail,
  AiFillInstagram,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

function Nav({
  home, portfolio, skill, about, options,
}) {
  const variants = {
    initial: {
      opacity: 0,
      x: -200,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const Item = ({ title }) => {
    <motion.p className="text-stone-200">{title}</motion.p>;
  };
  return (
    <nav
      className="from-slate-900 to-stone-900 bg-gradient-to-r px-4 lg:px-2"
      ref={home}
    >
      <div className="flex flex-col md:flex-row mx-auto max-w-5xl gap-4 md:gap-8 lg:gap-12">
        <div className="rounded-b-3xl md:block w-full max-w-xs md:max-w-lg mx-auto md:mx-0 z-20">
          <StaticImage
            src="../images/Nurul Jaelani.jpg"
            alt=""
            className="rounded-b-full drop-shadow-md"
          />
        </div>
        <div className="flex flex-col md:basis-1/2 basis-full gap-6 z-10">
          {/* <div className="flex text-white justify-between py-2 md:py-4">
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
              Code
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
          </div> */}
          {/* <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6 py-4">
            <motion.div className="flex gap-2 items-center" variants={variants} animate="animate" initial="initial">
              <p className="text-xl text-stone-300 md:text-2xl lg:text-3xl font-extralight italic">
                Aga Jelek
              </p>
              <span className="text-sm text-stone-500">(bukan nama asli)</span>
            </motion.div>
            <p className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl">
              Fullstack Web Developer
            </p>
            <p className="text-white">
              Fullstack web developer with 1year experience.
            </p>
          </div> */}
          {/* <div className="flex gap-2 pt-4 md:pt-6 lg:pt-10">
            <motion.div className="flex flex-col gap-4 text-xl md:text-xl lg:text-2xl font-sans" variants={variants} initial="initial" animate="animate">
              <motion.p className="text-stone-200" variants={variants}>Nama</motion.p>
              <motion.p className="text-stone-200" variants={variants}>Usia</motion.p>
              <motion.p className="text-stone-200" variants={variants}>Alamat</motion.p>
              <motion.p className="text-stone-200" variants={variants}>Pekerjaan</motion.p>
            </motion.div>
          </div> */}
          <div className="flex gap-2 pt-4 md:pt-6 lg:pt-10 w-full">
            <motion.div className="flex flex-col gap-4 text-xl md:text-xl lg:text-2xl font-sans w-full" variants={variants} initial="initial" animate="animate">
              <motion.div className="flex gap-4 md:gap-8 font-semibold italic" variants={variants}>
                <motion.p variants={variants} className="text-stone-400">Nama</motion.p>
                <motion.p variants={variants} className="text-stone-200">.................</motion.p>
              </motion.div>
              <motion.div className="flex gap-4 md:gap-8 font-semibold italic" variants={variants}>
                <motion.p variants={variants} className="text-stone-400">Usia</motion.p>
                <motion.p variants={variants} className="text-stone-200">..................</motion.p>
              </motion.div>
              <motion.div className="flex gap-4 md:gap-8 font-semibold italic" variants={variants}>
                <motion.p variants={variants} className="text-stone-400">Alamat</motion.p>
                <motion.p variants={variants} className="text-stone-200">Sedong</motion.p>
              </motion.div>
              <motion.div className="flex gap-4 md:gap-8 font-semibold italic" variants={variants}>
                <motion.p variants={variants} className="text-stone-400">Pekerjaan</motion.p>
                <motion.p variants={variants} className="text-stone-200">Software Enginner</motion.p>
              </motion.div>
              <motion.div className="flex gap-4 md:gap-8 font-semibold italic" variants={variants}>
                <motion.p variants={variants} className="text-stone-400">Hobi</motion.p>
                <motion.p variants={variants} className="text-stone-200">Bulutangkis, Travelling</motion.p>
              </motion.div>
              <motion.div className="flex gap-4 md:gap-8 font-semibold italic" variants={variants}>
                <motion.p variants={variants} className="text-stone-400">Kegiatan Sekarang</motion.p>
                <motion.p variants={variants} className="text-stone-200">Kerja, kerja, kerja. Pengen sih mencari calon pendamping hidup.</motion.p>
              </motion.div>
            </motion.div>
          </div>
          <a
            href="https://drive.google.com/file/d/18yGAyQqWWpsqDlszTkgxEAjHmDNaxhZX/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            {/* <button
              type="button"
              className="bg-stone-200 rounded-3xl text-stone-800 w-fit text-sm lg:text-base shadow-md drop-shadow-md font-semibold py-2 px-4"
            >
              Download CV
            </button> */}
          </a>
          <div className="gap-2 flex">
            <a href="https://instagram.com/aga_jelekk" target="_blank" rel="noreferrer">
              {/* <AiFillMail className="text-white text-3xl w-6 md:w-10" /> */}
              <AiFillInstagram className="text-white text-3xl md:text-4xl" />
            </a>
            {/* <a href="https://github.com/nuruljaelani" target="_blank" rel="noreferrer">
              <AiFillGithub className="text-white text-3xl w-6 md:w-10" />
            </a>
            <a href="https://linkedin.com/in/nurul-jaelani" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="text-white text-3xl w-6 md:w-10" />
            </a>
            <a href="https://dribbble.com/nuruljaelani" target="_blank" rel="noreferrer">
              <AiFillDribbbleCircle className="text-white text-3xl w-6 md:w-10" />
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
