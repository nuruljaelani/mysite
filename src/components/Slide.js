import { Splide, SplideSlide } from '@splidejs/react-splide';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Slide(props) {
  const {
    setReactAdmin, setBukuId, setIncovid, setTokoIkan, setChatApp, setEduskill,
  } = props;

  const options = {
    perPage: 1,
    perMove: 1,
    pagination: true,
    mediaQuery: 'min',
    breakpoints: {
      640: {
        perPage: 2,
        gap: 20,
      },
      768: {
        perPage: 2,
        gap: 20,
      },
      1024: {
        perPage: 3,
        gap: 30,
      },
    },
  };
  return (
    <div>
      <Splide aria-label="My Favorite Images" options={options}>
        <SplideSlide>
          <button type="button" className="flex flex-col space-y-4 cursor-pointer" onClick={setReactAdmin}>
            <StaticImage
              src="../images/aula-admin.png"
              alt=""
              className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-white font-semibold text-base md:text-lg">
                Template Admin Reactjs
              </p>
            </div>
          </button>
        </SplideSlide>
        <SplideSlide>
          <button type="button" className="flex flex-col space-y-4" onClick={setBukuId}>
            <StaticImage
              src="../images/bukuid.png"
              alt=""
              className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48"
            />
            <p className="text-white font-semibold text-base md:text-lg">
              Toko Buku Online
            </p>
          </button>
        </SplideSlide>
        <SplideSlide>
          <button type="button" onClick={setIncovid} className="flex flex-col space-y-4 h-fit">
            <StaticImage
              src="../images/Incovid.png"
              alt=""
              className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48"
            />
            <p className="text-white font-semibold text-base md:text-lg">
              Portal Informasi Covid 19
            </p>
          </button>
        </SplideSlide>
        <SplideSlide>
          <button type="button" onClick={setTokoIkan} className="flex flex-col space-y-4 h-fit">
            <StaticImage
              src="../images/toko-ikan.png"
              alt=""
              className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48"
            />
            <p className="text-white font-semibold text-base md:text-lg">
              Landing Page Toko Ikan
            </p>
          </button>
        </SplideSlide>
        <SplideSlide>
          <button type="button" onClick={setChatApp} className="flex flex-col space-y-4 h-fit">
            <StaticImage
              src="../images/chat-app.png"
              alt=""
              className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48"
            />
            <p className="text-white font-semibold text-base md:text-lg">
              Realtime Chat App
            </p>
          </button>
        </SplideSlide>
        <SplideSlide>
          <button type="button" onClick={setEduskill} className="flex flex-col space-y-4 h-fit">
            <StaticImage
              src="../images/eduskills.png"
              alt=""
              className="rounded-[1.5rem] md:rounded-2xl drop-shadow-lg shadow-current shadow-md h-40 lg:h-48"
            />
            <p className="text-white font-semibold text-base md:text-lg">
              Online courses platform
            </p>
          </button>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slide;
