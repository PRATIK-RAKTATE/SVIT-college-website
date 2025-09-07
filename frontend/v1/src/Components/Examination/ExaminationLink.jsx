import React, { useState } from 'react';

const ExamLinks = () => {
  const [copied, setCopied] = useState(null);

  const links = [
    {
      title: 'Summer-2025 End-Semester Time-Table',
      url: 'https://svit.pravara.in/Examination/TimeTable_Summer2025.pdf',
      description: 'Official examination schedule for all UG & PG programmes'
    },
    {
      title: 'Study Material Download',
      url: 'https://sppuengineers.site/',
      description: 'Secure portal for admit card generation'
    },
    {
      title: 'Results Portal',
      url: 'https://onlineresults.unipune.ac.in/result/dashboard/default',
      description: 'Semester results with detailed mark-sheets'
    },
    {
      title: 'Revaluation / Photocopy',
      url: 'https://exampcr.unipune.ac.in/Student/Dashboard/LogintoSPS',
      description: 'Online application for answer-book re-checking'
    },
    {
      title: 'Student Login',
      url: 'https://sim.unipune.ac.in/SIM_APP/',
      description: 'Previous years’ papers for practice'
    },
    {
      title: 'Exam Grievance Portal',
      url: 'https://www.unipune.ac.in/administration_files/grievances.htm',
      description: 'Log complaints or anomalies'
    }
  ];

  const handleCopy = async (url, idx) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(idx);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes underlineExpand {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .underline-expand::after {
          content: '';
          display: block;
          height: 2px;
          background: #0ea5e9;
          transition: width 0.3s ease;
          width: 0;
        }
        .underline-expand:hover::after { width: 100%; }
      `}</style>

      <section className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
          <header className="mb-10 text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-800">Examination Resources</h2>
            <p className="mt-2 text-slate-600">Quick access to all examination-related services</p>
          </header>

          <ul className="grid gap-4 md:grid-cols-2">
            {links.map((link, i) => (
              <li
                key={i}
                className="animate-fadeInUp group relative flex items-center justify-between p-5 bg-slate-50 hover:bg-white border border-slate-200 rounded-lg transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex-1">
                  <h3 className="text-slate-800 font-medium underline-expand">{link.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{link.description}</p>
                </div>

                <div className="flex items-center gap-3 ml-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(link.url, i);
                    }}
                    className="p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition"
                    title="Copy link"
                    aria-label="Copy link"
                  >
                    {copied === i ? (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>

                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition"
                    title="Open in new tab"
                    aria-label="Open in new tab"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <footer className="mt-10 text-center">
            <p className="text-sm text-slate-500">Links open in a new tab • Last updated: 09 Jun 2025</p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default ExamLinks;