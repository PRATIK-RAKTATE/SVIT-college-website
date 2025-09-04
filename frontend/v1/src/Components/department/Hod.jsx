import React from 'react';

const Hod = ({Hodimg,Hodname,hodQ}) => {
  return (
    <section className="w-full p-4 max-w-5xl md:mt-12 items-center mx-auto">
    

      <figure className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        <img
          src={Hodimg}
          alt="Head of Department"
          className="w-full h-60 sm:h-72 md:h-96 lg:h-auto rounded-md shadow-xl object-contain"
        />
        <figcaption className="mt-4 text-center">
          <p className="text-lg sm:text-xl font-semibold text-slate-800">
            {Hodname}
          </p>
          <p className="text-sm text-slate-600">{hodQ}</p>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hod;
