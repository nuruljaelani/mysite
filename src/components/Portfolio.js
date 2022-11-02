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
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 h-full">
              <div className="flex flex-col space-y-4">
                <Link to="https://aula-admin.vercel.app" target="_blank">
                  <StaticImage src="../images/aula-admin.png" alt="" className="rounded-[1.5rem] md:rounded-[2.5rem] drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
                </Link>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <div className="bg-sky-500 p-1 rounded-md text-white text-xs w-fit">Frontend</div>
                    <Link to="https://github.com/nuruljaelani/aula-admin" target="_blank">
                      <div className="flex items-center space-x-1">
                        <AiFillGithub className="text-white" />
                        <p className="text-xs text-white">Repository</p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-white font-semibold text-base md:text-lg">Template Admin Reactjs</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <Link to="https://bukukita.vercel.app" target="_blank">
                  <StaticImage src="../images/bukukita.png" alt="" className="rounded-[1.5rem] md:rounded-[2.5rem] drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
                </Link>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <div className="bg-sky-500 p-1 rounded-md text-white text-xs w-fit">Frontend</div>
                    <Link to="https://github.com/nuruljaelani/bookstore.fe" target="_blank">
                      <div className="flex items-center space-x-1">
                        <AiFillGithub className="text-white" />
                        <p className="text-xs text-white">Repository</p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-white font-semibold text-base md:text-lg">Toko Buku Online</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <Link to="https://lapakkita.herokuapp.com" target="_blank">
                  <StaticImage src="../images/lapakkita1.png" alt="" className="rounded-[1.5rem] md:rounded-[2.5rem] drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
                </Link>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <div className="bg-sky-500 p-1 rounded-md text-white text-xs w-fit">Fullstack</div>
                    <Link to="https://github.com/nuruljaelani/lapakita" target="_blank">
                      <div className="flex items-center space-x-1">
                        <AiFillGithub className="text-white" />
                        <p className="text-xs text-white">Repository</p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-white font-semibold text-base md:text-lg">Toko Online / Marketplace</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 h-fit">
                <Link to="https://incovid19.vercel.app" target="_blank">
                  <StaticImage src="../images/Incovid.png" alt="" className="rounded-[1.5rem] md:rounded-[2.5rem] drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
                </Link>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <div className="bg-sky-500 p-1 rounded-md text-white text-xs w-fit">Frontend</div>
                    <Link to="https://github.com/nuruljaelani/incovid" target="_blank">
                      <div className="flex items-center space-x-1">
                        <AiFillGithub className="text-white" />
                        <p className="text-xs text-white">Repository</p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-white font-semibold text-base md:text-lg">Portal Informasi Covid 19</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 h-fit">
                <Link to="https://toko-ikan.vercel.app" target="_blank">
                  <StaticImage src="../images/toko-ikan.png" alt="" className="rounded-[1.5rem] md:rounded-[2.5rem] drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
                </Link>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <div className="bg-sky-500 p-1 rounded-md text-white text-xs w-fit">Frontend</div>
                    <Link to="https://github.com/nuruljaelani/slicing-figma" target="_blank">
                      <div className="flex items-center space-x-1">
                        <AiFillGithub className="text-white" />
                        <p className="text-xs text-white">Repository</p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-white font-semibold text-base md:text-lg">Landing Page Toko Ikan</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
