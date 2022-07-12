import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Skill({ skill }) {
  return (
    <div>
      <div className="mx-auto max-w-5xl py-4" ref={skill}>
        <div className="flex flex-col px-4 md:px-6 py-4 md:py-10 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-14">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold underline decoration-2 underline-offset-8 text-center">Skill</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/javascript.svg" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-yellow-800 text-sm sm:text-base md:text-lg font-semibold">Javascript</p>
            </div>
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/php.svg" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-sky-800 text-sm sm:text-base md:text-lg font-semibold">Php</p>
            </div>
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/laravel.svg" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-rose-800 text-sm sm:text-base md:text-lg font-semibold">Laravel</p>
            </div>
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/nodejs-icon.svg" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-green-800 text-sm sm:text-base md:text-lg font-semibold">Node Js</p>
            </div>
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/vuejs-seeklogo.com.svg" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-emerald-800 text-sm sm:text-base md:text-lg font-semibold">Vue Js</p>
            </div>
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/react.svg" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-cyan-800 text-sm sm:text-base md:text-lg font-semibold">React Js</p>
            </div>
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/Go-Logo_Blue.png" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-sky-800 text-sm sm:text-base md:text-lg font-semibold">Golang</p>
            </div>
            <div className="flex rounded-3xl py-2 px-4 items-center space-x-2">
              <StaticImage src="../images/git-seeklogo.com.svg" alt="" className="w-6 md:w-10 lg:w-14 h-auto" />
              <p className="text-red-800 text-sm sm:text-base md:text-lg font-semibold">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
