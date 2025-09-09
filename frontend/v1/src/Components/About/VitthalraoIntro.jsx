import React from "react";

export default function VitthalraoIntro() {
  return (
    <>
      <div className="md:w-[1300px] md:h-[507px]  mt-12 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center gap-6 p-6">
        {/* Image */}
        <img
          src="https://svitnashik.in/Images/Profile%20Images/Inception/Padmashree_Vitthalrao_Vikhe_Patil.jpg"
          alt="Dr. Vitthalrao Vikhe Patil"
          className="w-80 h-full object-cover rounded-xl"
        />

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Dr. Vitthalrao Vikhe Patil
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            The Pravara Rural Education Society was established in July 1964 by
            the Herculean efforts of Dr. Vitthalrao Vikhe Patil, a unique
            visionary philanthropist and the pioneer of the first sugar factory
            in the co-operative sector not only in India but Asia. The society
            was established with twin objectives of providing high-class
            education comparable to the best in any urban area and to give a
            fillip to the empowerment of women through need-based education. His
            intuitive vision led him to the firm conviction that if quality
            education is provided to rural youth, they will play a dominant role
            in nation building. Further, he believed that education of a woman
            means the education of the whole family.
          </p>
        </div>
      </div>
    </>
  );
}
