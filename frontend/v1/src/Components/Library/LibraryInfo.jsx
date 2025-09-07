// LibraryInfo.jsx
import React, { useState } from 'react';

const LibraryInfo = () => {
  const [activeTab, setActiveTab] = useState('objectives');

  const objectives = [
    "Support the Learning Process of the Students through Provision of Knowledge.",
    "Meet information needs of the faculty and support their Teaching & Research activities.",
    "Enrich the Knowledge Services.",
    "Provide Orientation, user Education and References Service to maximize the use of Library resources.",
    "Support the extra-curricular activities conducted by the Institute."
  ];

  const rules = [
    "All Students can avail the Library Membership against the fee receipt. The students are required to fill in the membership form along with two stamp size photographs. On completion of necessary formalities, students are given a membership identification number & a Library card (borrower’s card) will be issued to them.",
    "The borrower’s ticket remains valid for the period indicated on it, and the same can be renewed every academic year.",
    "Four books will be issued to every student for duration of 12 days only.",
    "Reference books, CD’s magazine/journal (back volumes) are available at Reference Section before Issuing.",
    "The student should check the book thoroughly, if any missing pages are found while borrowing the books, they must inform the Library staff immediately.",
    "No book in damaged condition will be accepted from the borrower. Mutilated or spoiled books will have to be replaced by the borrower with a recent edition if available, or pay its cost.",
    "In order to get the books renewed, borrower must be physically present at the circulation counter of the Library. Books are re-issued only, if it is not reserved.",
    "Students must carry their I-Card with them, whenever they visit the Library.",
    "Students are requested to observe strict silence in the library.",
    "Students are advised to use the reading room only for studying.",
    "Mobile phone is not allowed in the Library premises."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-8">
      {/* Increased width here (from max-w-4xl to max-w-6xl) */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 text-center">
          📚 Library Portal
        </h1>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          {['objectives', 'rules'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold capitalize transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-3">
          {(activeTab === 'objectives' ? objectives : rules).map((text, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <span className="text-xl mt-1">
                {activeTab === 'objectives' ? '🎯' : '📌'}
              </span>
              <p className="text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryInfo;
