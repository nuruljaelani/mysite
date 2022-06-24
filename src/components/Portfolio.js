import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Portfolio({ portfolio }) {
  return (
    <div>
      <div className="px-4 lg:px-2" ref={portfolio}>
        <div className="mx-auto md:px-0 max-w-5xl rounded-r-[6rem] md:rounded-r-[9rem] lg:rounded-r-[11rem] bg-gradient-to-r from-transparent to-stone-800 h-fit">
          <div className="flex flex-col py-4 md:py-10 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 px-4 md:px-6">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold underline decoration-2 underline-offset-8 text-center">My Portofolio</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="https://aula-admin.vercel.app" target="_blank">
                <div className="flex flex-col items-center space-y-4 h-[250px] md:h-[350px] w-auto">
                  <StaticImage src="../images/aula-admin.png" alt="" className="rounded-[1.5rem] md:rounded-[2.5rem] drop-shadow-lg shadow-current shadow-md" />
                  <p className="text-white font-semibold text-base sm:text-lg md:text-xl">Template Admin for Reactjs</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
