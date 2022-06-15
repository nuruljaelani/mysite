import React from 'react';
import Nav from './Nav';

function Layouts({ children }) {
  return (
    <>
      <Nav />
      <main className="from-slate-900 to-stone-900 bg-gradient-to-r py-4 sm:py-8 md:py-14 lg:py-20">
        {children}
      </main>
      <footer className="from-slate-900 to-stone-900 bg-gradient-to-r py-2 md:py-6">
        <p className="text-white text-center text-xs md:text-sm lg:text-base">Copyright 2022 | &copy; Design by Nurul Jaelani</p>
      </footer>
    </>
  );
}

export default Layouts;
