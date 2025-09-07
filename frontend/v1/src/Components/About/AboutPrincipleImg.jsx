import React from 'react'

const AboutPrincipleImg = () => {
  return (
    <section className="w-full p-4 max-w-6xl md:mt-12 items-center mx-auto">
      <figure className="w-full max-w-3xl mx-auto">
        <img
          src="https://svitnashik.in/Images/Profile%20Images/Default/Dr_GBShinde.jpg"
          alt="Head of Department"
          className="w-full h-[550px] sm:h-[600px] md:h-[400px] rounded-xl shadow-2xl object-cover"
        />
        <figcaption className="mt-4 text-center">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800">
            Prof.(Dr.) G.B. Shinde, Principal, SVIT, Nashik.
          </p>
          <p className="text-base sm:text-lg text-slate-600">
            Ph.D. (Chem. Engg.), M.E. (Chemical Engg.), MBA (HRM).
          </p>
        </figcaption>
      </figure>
    </section>
  )
}

export default AboutPrincipleImg
