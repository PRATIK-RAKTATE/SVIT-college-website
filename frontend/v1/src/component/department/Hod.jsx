import React from 'react';

const Hod = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6 text-center">
        Department of Computer Engineering
      </h1>

      <figure className="w-full max-w-4xl">
        <img
          src="https://svitnashik.in/Images/Profile%20Images/Default/Dr_GBShinde.jpg"
          alt="Head of Department"
          className="w-full h-auto rounded-xl shadow-2xl"
        />
        <figcaption className="mt-4 text-center">
          <p className="text-xl font-semibold text-slate-800">
            Prof. Sharad M. Rokade (Associate Professor), HOD
          </p>
          <p className="text-sm text-slate-600">M.E. (CE), PhD (Pursuing)</p>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hod;
