// AimsObjectives.jsx
import React from 'react';

const AimsObjectives = () => {
  const aims = [
    'Provides inclusive technical education so that a deserving student is not denied an opportunity for technical education solely on socio economic constraint.',
    'Provides holistic education to develop skills, knowledge and value through well structured curriculum and instructions.',
    'To make students readily acceptable to the cooperate world and promote entrepreneurship.',
    'Institute has Vision and Mission which are innovative in nature. It fulfils the needful requirement of society by providing quality education through contemporary technology.',
    'Institute is renowned for producing university toppers amongst those admitted from rural areas.',
    'Institute promotes the senior faculties for quality improvement and higher education like Ph. D. And also for research activity.',
    'Institute has own solar power plant which is an ecofriendly project where students can perform research activities.',
    'Students undertake the projects sponsored by industries in Sinnar, Satpur and Ambad MIDC Nashik.',
    'The institute has GATE qualified Students.',
    'The institute has eminent global alumni interaction that supports for training and placement.',
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
          Aims & Objectives
        </h2>
        <ul className="space-y-4">
          {aims.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start text-gray-700 text-base leading-relaxed"
            >
              <span className="mr-3 text-indigo-600 font-bold">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AimsObjectives;
