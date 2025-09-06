import React, { useState } from 'react';

const ExaminationCommitteeTable = () => {
  const [copied, setCopied] = useState(null);

  const committee = [
    {
      sr: 1,
      post: 'C.E.O.',
      name: 'Prof. R. S. Shelke',
      contact: '7745059190',
      email: 'ravindra.shelke@pravara.in'
    },
    {
      sr: 2,
      post: 'Section Officer',
      name: 'Mr. A. T. Wadekar',
      contact: '9881525869',
      email: 'anil.wadekar@pravara.in'
    },
    {
      sr: 3,
      post: 'Assistant Section Officer',
      name: 'Mr. A. S. Zade',
      contact: '9922302211',
      email: 'ashokraozade@gmail.com'
    },
    {
      sr: 4,
      post: 'Assistant Section Officer',
      name: 'Ms. S. S. Mhaske',
      contact: '7588095453',
      email: 'sunanda.mhaske@pravara.in'
    }
  ];

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
      `}</style>

      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Examination Committee</h2>
            <p className="mt-2 text-slate-600">SVIT – Pravara Institute of Technology</p>
          </div>

          {/* Responsive Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Sr. No
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Post
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Contact No.
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Email ID
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {committee.map((row, idx) => (
                    <tr
                      key={row.sr}
                      className="hover:bg-slate-50 transition-colors duration-150 animate-slide-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        {row.sr}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                        {row.post}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">
                        {row.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <span>{row.contact}</span>
                          <button
                            onClick={() => handleCopy(row.contact, `contact-${row.sr}`)}
                            className="text-blue-600 hover:text-blue-800 transition"
                            title="Copy number"
                          >
                            {copied === `contact-${row.sr}` ? (
                              <span className="text-green-600">✓</span>
                            ) : (
                              '📋'
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${row.email}`}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            {row.email}
                          </a>
                          <button
                            onClick={() => handleCopy(row.email, `email-${row.sr}`)}
                            className="text-blue-600 hover:text-blue-800 transition"
                            title="Copy email"
                          >
                            {copied === `email-${row.sr}` ? (
                              <span className="text-green-600">✓</span>
                            ) : (
                              '📋'
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                          <a
                            href={`tel:+91${row.contact}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-xs font-medium"
                          >
                            📞 Call
                          </a>
                          <a
                            href={`mailto:${row.email}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-xs font-medium"
                          >
                            ✉️ Mail
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards (fallback) */}
          <div className="mt-8 lg:hidden space-y-4">
            {committee.map((row, idx) => (
              <div
                key={row.sr}
                className="bg-white rounded-xl shadow border border-slate-200 p-4 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-slate-500">#{row.sr}</span>
                  <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded">
                    {row.post}
                  </span>
                </div>
                <p className="text-lg font-bold text-slate-900 mb-3">{row.name}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Contact:</span>
                    <div className="flex items-center gap-2">
                      <a href={`tel:+91${row.contact}`} className="text-blue-600 hover:underline">
                        {row.contact}
                      </a>
                      <button
                        onClick={() => handleCopy(row.contact, `contact-${row.sr}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {copied === `contact-${row.sr}` ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Email:</span>
                    <div className="flex items-center gap-2">
                      <a href={`mailto:${row.email}`} className="text-blue-600 hover:underline">
                        {row.email}
                      </a>
                      <button
                        onClick={() => handleCopy(row.email, `email-${row.sr}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {copied === `email-${row.sr}` ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <a
                    href={`tel:+91${row.contact}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition text-sm font-medium"
                  >
                    📞 Call
                  </a>
                  <a
                    href={`mailto:${row.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                  >
                    ✉️ Mail
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExaminationCommitteeTable;