import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Portfolio() {
  return (
    <div>
      <div className="px-4 lg:px-2">
        <div className="mx-auto md:px-0 max-w-5xl rounded-r-[6rem] md:rounded-r-[9rem] lg:rounded-r-[11rem] bg-gradient-to-r from-transparent to-stone-600">
          <div className="flex flex-col py-4 md:py-10 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 px-4 md:px-6">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold underline decoration-2 underline-offset-8 text-center">My Portofolio</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center space-y-4">
                <StaticImage src="../images/blog.png" alt="" className="rounded-[2rem] md:rounded-[4rem] drop-shadow-lg shadow-current shadow-md" />
                <p className="text-white font-semibold text-base sm:text-lg md:text-xl">Blog</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <StaticImage src="../images/info-covid.png" alt="" className="rounded-[2rem] md:rounded-[4rem] drop-shadow-lg shadow-current shadow-md" />
                <p className="text-white font-semibold text-base sm:text-lg md:text-xl">Info Covid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
