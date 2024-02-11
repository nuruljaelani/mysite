import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Profile({ about }) {
  return (
    <div>
      <div className="mx-auto max-w-5xl py-4 md:py-8 lg:py-12 px-4 lg:px-2" ref={about}>
        <div className="bg-gradient-to-r from-transparent via-black to-black rounded-r-[10rem]">
          <div className="flex items-center space-x-4">
            {/* <p className="text-white basis-2/3 text-xs sm:text-sm md:text-base lg:text-lg p-4 md:p-8 lg:p-10">I am a Fullstack web developer with 1 year experience. I can help everyone build their applications. I am used to working with a team or individually.</p> */}
            <div className="flex flex-col basis-2/3">
              <p className="text-lg md:text-xl lg:text-2xl text-stone-200">Quote :</p>
              <p className="text-base md:text-lg lg:text-xl italic text-stone-400">&quot;Belum ada!&quot;</p>
            </div>
            <div className="basis-1/3 justify-end items-end">
              <StaticImage src="../images/20220226_142216(2).jpg" alt="" className="w-28 sm:w-44 md:w-60 lg:w-80 h-auto rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
