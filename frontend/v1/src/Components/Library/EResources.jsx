// EResources.jsx
import React, { useState } from "react";

const EResources = () => {
  const [activeTab, setActiveTab] = useState("resources");

  const resources = [
    { sr: 1, name: "Springer- Mechanical Engineering", journals: 272, url: "https://link.springer.com/", note: "Access on IP Based", type: "UG" },
    { sr: 2, name: "Springer- Electrical, E &TC , and Computer Engineering", journals: 283, url: "https://link.springer.com/", note: "Access on IP Based", type: "UG" },
    { sr: 3, name: "J-GATE (MBA)", journals: 530, url: "http://www.jgateplus.com/", note: "Access on IP Based", type: "UG" },
    { sr: 4, name: "J-GATE (Engineering)", journals: 450, url: "http://www.jgateplus.com/", note: "Access on IP Based", type: "UG" },
    { sr: 5, name: "DELNET (Annual Membership)", journals: 795, url: "http://www.delnet.nic.in", note: "Access on IP Based", type: "UG" },
    { sr: 6, name: "NDL - National Digital Library", journals: "E-journals, E-Books, Thesis, Audio & Video Lectures etc.", url: "http://www.ndl.iitkgp.ac.in/", note: "Access on IP Based", type: "UG" },
    { sr: 7, name: "NPTEL Video’s Courses", journals: 27000, url: "http://10.0.0.203/", note: "Access on IP Based", type: "UG" },
    { sr: 8, name: "Springer (E-Books Package)", journals: 9703, url: "https://link.springer.com/", note: "Access on IP Based", type: "EB" },
  ];

  const facilities = [
    "Reading Hall", "Home Lending", "Overnight Book Facility",
    "Inter Library Loan", "Periodicals and Newspapers", "Reference Service",
    "Open access system", "Multimedia and Internet Service",
    "Career guidance and guidance in project work", "Books on competitive Exam",
    "Orientation of fresh students", "Current awareness service",
    "Book Bank Scheme", "Issuing of C.D. to faculty and students.",
    "Access to E – Journal & International Journal Databases.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-indigo-800 mb-8 text-center animate-fadeIn">
          E-Resources & Facilities
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["resources", "facilities"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${activeTab === tab ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50"}`}
            >
              {tab === "resources" ? "E-Resources" : "Library Facilities"}
            </button>
          ))}
        </div>

        {/* ---------- E-Resources ---------- */}
        {activeTab === "resources" && (
          <>
            {/* Desktop table (hidden below 768px) */}
            <div className="hidden md:block overflow-x-auto animate-slideUp">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Sr.</th>
                    <th className="p-4 text-left">E-Resources</th>
                    <th className="p-4 text-left">No. of Journals</th>
                    <th className="p-4 text-left">URL</th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((res, idx) => (
                    <tr key={res.sr} className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="p-4 font-semibold text-indigo-700">{res.sr}</td>
                      <td className="p-4">
                        {res.type === "EB" && (
                          <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mb-1">E-Book</span>
                        )}
                        <div className="font-medium text-slate-800">{res.name}</div>
                      </td>
                      <td className="p-4 text-slate-700">{res.journals}</td>
                      <td className="p-4">
                        <a href={res.url} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-medium">Visit →</a>
                        <div className="text-xs text-slate-500 mt-1">{res.note}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards (visible only below 768px) */}
            <div className="md:hidden grid gap-4 animate-slideUp">
              {resources.map((res, idx) => (
                <div key={res.sr} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-indigo-700">#{res.sr}</span>
                    {res.type === "EB" && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">E-Book</span>}
                  </div>
                  <div className="font-semibold text-slate-800">{res.name}</div>
                  <div className="text-sm text-slate-600"><span className="font-medium">Journals:</span> {res.journals}</div>
                  <a href={res.url} target="_blank" rel="noreferrer" className="text-sm text-indigo-600 hover:underline font-medium">Visit link →</a>
                  <div className="text-xs text-slate-500">{res.note}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ---------- Facilities ---------- */}
        {activeTab === "facilities" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-slideUp">
            {facilities.map((f, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📘</span>
                  <span className="font-medium text-slate-800">{f}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animations (pure Tailwind) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default EResources;