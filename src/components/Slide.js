import { Splide, SplideSlide } from '@splidejs/react-splide';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';
import { AiFillGithub } from 'react-icons/ai';

function Slide() {
  const options = {
    perPage: 1,
    perMove: 1,
    pagination: true,
    type: 'loop',
    mediaQuery: 'min',
    breakpoints: {
      640: {
        perPage: 2,
        gap: 20,
      },
      768: {
        perPage: 3,
        gap: 20,
      },
      1024: {
        perPage: 4,
        gap: 30,
      },
    },
  };
  return (
    <div>
      <Splide aria-label="My Favorite Images" options={options}>
        <SplideSlide>
          <div className="flex flex-col space-y-4">
            <Link to="https://aula-admin.vercel.app" target="_blank">
              <StaticImage src="../images/aula-admin.png" alt="" className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
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
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col space-y-4">
            <Link to="https://bukukita.vercel.app" target="_blank">
              <StaticImage src="../images/bukukita.png" alt="" className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
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
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col space-y-4">
            <Link to="https://lapakkita.herokuapp.com" target="_blank">
              <StaticImage src="../images/lapakkita1.png" alt="" className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
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
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col space-y-4 h-fit">
            <Link to="https://incovid19.vercel.app" target="_blank">
              <StaticImage src="../images/Incovid.png" alt="" className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
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
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col space-y-4 h-fit">
            <Link to="https://toko-ikan.vercel.app" target="_blank">
              <StaticImage src="../images/toko-ikan.png" alt="" className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48" />
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
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slide;
