import React, { useState, useEffect } from 'react';

const ExaminationDepartment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactDetails = [
    { type: 'Landline', value: '(02551) 271278 (EXT. 209)', icon: '📞' },
    { type: 'Mobile 1', value: '9423787347', icon: '📱' },
    { type: 'Mobile 2', value: '9049265858', icon: '📱' },
    { type: 'Email', value: 'exam.svit@pravara.in', icon: '✉️' }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }
      `}</style>

      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Header */}
        <div className="relative w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
                Examination Department
              </h1>
              <p className="mt-4 text-lg lg:text-xl text-blue-200 max-w-3xl">
                SVIT – Pravara Institute of Technology • Nashik
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid gap-8 lg:grid-cols-2">
          {/* Left: Codes */}
          <div className="space-y-6">
            <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 p-6 lg:p-8 animate-slide-up`} style={{animationDelay:'100ms'}}>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">PUN Code</h2>
              <div className="flex items-center justify-between">
                <span className="text-2xl lg:text-3xl font-bold text-slate-900 font-mono">CEGN017720</span>
                <button
                  onClick={() => handleCopy('CEGN017720', 'pun')}
                  className="ml-4 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                >
                  {copiedField === 'pun' ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 p-6 lg:p-8 animate-slide-up`} style={{animationDelay:'200ms'}}>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">College Codes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                  <p className="text-slate-600 mb-1">Engineering</p>
                  <p className="text-2xl font-bold text-slate-900 font-mono">4027</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                  <p className="text-slate-600 mb-1">MBA</p>
                  <p className="text-2xl font-bold text-slate-900 font-mono">1127</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleCopy('4027', 'eng')}
                  className="px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition text-sm"
                >
                  {copiedField === 'eng' ? 'Copied ✓' : 'Copy Eng'}
                </button>
                <button
                  onClick={() => handleCopy('1127', 'mba')}
                  className="px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition text-sm"
                >
                  {copiedField === 'mba' ? 'Copied ✓' : 'Copy MBA'}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Contact */}
          <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 p-6 lg:p-8 animate-slide-up`} style={{animationDelay:'300ms'}}>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Contact Details</h2>
            <ul className="space-y-4">
              {contactDetails.map((c, i) => (
                <li key={i} className="flex items-start justify-between group">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-xl">{c.icon}</span>
                    <div>
                      <p className="text-slate-500 text-sm">{c.type}</p>
                      <p className="text-slate-900 font-medium">{c.value}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(c.value, c.type)}
                    className="opacity-0 group-hover:opacity-100 ml-4 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition text-sm"
                  >
                    {copiedField === c.type ? '✓' : 'Copy'}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:exam.svit@pravara.in"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                ✉️ Send Email
              </a>
              <a
                href="tel:+919423787347"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className={`bg-slate-100 rounded-xl p-4 animate-slide-up`} style={{animationDelay:'400ms'}}>
            <p className="text-sm text-slate-600">
              For grievances / revaluation / photocopy requests kindly mention your <strong>Exam Seat No</strong> and <strong>Course</strong> in the subject line.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExaminationDepartment;