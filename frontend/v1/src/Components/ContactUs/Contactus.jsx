// ReachUs.jsx
import React from 'react';

const ReachUs = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6">
      {/* subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:2rem_2rem]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 animate-fadeIn">
            Reach Us
          </h2>
          <p className="mt-2 text-slate-600">
            We’re always here to help — get in touch or drop by.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Address & Primary Contact */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 animate-slideUp">
            <h3 className="text-xl font-bold text-slate-800 mb-4">College Address</h3>

            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-indigo-600">📍</span>
                <div>
                  <p className="font-semibold">SVIT, Chincholi</p>
                  <p className="text-sm">Tal. Sinnar, Dist. Nashik, Maharashtra, India – 422 102</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-600">📞</span>
                <a href="tel:+919423787347" className="hover:text-indigo-600 transition">+91 9423787347</a>,&nbsp;
                <a href="tel:+912551271278" className="hover:text-indigo-600 transition">+91 2551 271278</a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-600">📠</span>
                <span>+91 2551 271278</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-600">✉️</span>
                <a
                  href="mailto:principal.svitnashik@pravara.in"
                  className="hover:text-indigo-600 transition"
                >
                  principal.svitnashik@pravara.in
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/YOUR_LINK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Get Directions
              </a>
              <a
                href="tel:+912551271278"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Us Paragraph */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 animate-slideUp [animation-delay:150ms]">
            <h3 className="text-xl font-bold text-slate-800 mb-4">📌 Contact Us</h3>
            <p className="text-slate-700 leading-relaxed">
              We welcome students, parents, and visitors to connect with us for any inquiries,
              support, or information about our academic programs, admissions, or facilities.
              Our dedicated staff will be happy to guide you and provide the assistance you need.
              You can reach us through phone, email, or by visiting our campus during working hours.
              We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default ReachUs;
