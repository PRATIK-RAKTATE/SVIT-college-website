// ContactPulse.jsx
import React, { useState, useEffect } from 'react';

const ContactPulse = () => {
  const [mapZoom, setMapZoom] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMapZoom(true), 300);
    return () => clearTimeout(t);
  }, []);

  const quickActions = [
    { icon: '📍', label: 'Get Directions', url: 'https://maps.app.goo.gl/YOUR_LINK', color: 'bg-indigo-500' },
    { icon: '📞', label: 'Call Us', url: 'tel:+912551271278', color: 'bg-emerald-500' },
    { icon: '✉️', label: 'Email Us', url: 'mailto:principal.svitnashik@pravara.in', color: 'bg-sky-500' },
    { icon: '🎓', label: 'Admission Enquiry', url: 'tel:+919881976109', color: 'bg-rose-500' },
  ];

  const contacts = [
    { label: 'Principal', phone: '+91 9423787452' },
    { label: 'Mechanical (HOD)', phone: '+91 9689908289' },
    { label: 'Computer (HOD)', phone: '+91 8329239001' },
    { label: 'I.T. (HOD)', phone: '+91 9561508626' },
    { label: 'Chemical (HOD)', phone: '+91 9423068528' },
    { label: 'Electrical (HOD)', phone: '+91 9689103785' },
    { label: 'E&TC (HOD)', phone: '+91 9423809692' },
    { label: 'MBA (HOD)', phone: '+91 9822875337' },
    { label: 'FE Dean (HOD)', phone: '+91 9763722527' },
    { label: 'Admission & Scholarship Section', phone: '+91 9881976109' },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      {/* animated background orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-sky-500 rounded-full opacity-20 blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <header className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400 animate-fadeIn">
            Connect with SVIT
          </h2>
          <p className="mt-3 text-slate-300 text-lg">Instant help, clear paths, bright futures.</p>
        </header>

        {/* Quick-action chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {quickActions.map((a, i) => (
            <a
              key={i}
              href={a.url}
              className={`flex items-center gap-2 px-5 py-3 rounded-full ${a.color} text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 animate-popIn`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-xl">{a.icon}</span>
              <span>{a.label}</span>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT: Map & Address Card */}
          <div className="lg:col-span-2">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl animate-slideUp">
              <iframe
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMv4JAeDMdh5y1NUWlFb2X-lMtDcr5Tu5QA&s"
                className={`w-full h-64 lg:h-full min-h-[300px] grayscale group-hover:grayscale-0 transition-all duration-700 ${mapZoom ? 'scale-100' : 'scale-110'}`}
                allowFullLoading=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold">SVIT, Chincholi</p>
                <p className="text-xs">Tal. Sinnar, Dist. Nashik – 422 102</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contacts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  className="group relative bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 animate-popIn"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-200 font-semibold">{c.label}</p>
                      <p className="text-cyan-300 font-mono text-sm mt-1">{c.phone}</p>
                    </div>
                    <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                </a>
              ))}
            </div>

            {/* bottom banner */}
            <div className="mt-8 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl p-5 text-center shadow-xl animate-slideUp [animation-delay:400ms]">
              <p className="text-white font-bold">Need immediate assistance?</p>
              <p className="text-white/80 text-sm mt-1">Call our central line <a href="tel:+912551271278" className="underline">+91 2551 271278</a> (24×7 IVRS)</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-popIn { animation: popIn 0.6s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.7s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default ContactPulse; 