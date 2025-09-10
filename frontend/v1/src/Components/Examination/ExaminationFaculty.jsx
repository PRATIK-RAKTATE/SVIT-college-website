// ExaminationCommitteeTable.jsx – desktop table ➜ mobile animated accordion
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const committee = [
  { sr: 1, post: "C.E.O.", name: "Prof. R. S. Shelke", contact: "7745059190", email: "ravindra.shelke@pravara.in" },
  { sr: 2, post: "Section Officer", name: "Mr. A. T. Wadekar", contact: "9881525869", email: "anil.wadekar@pravara.in" },
  { sr: 3, post: "Assistant Section Officer", name: "Mr. A. S. Zade", contact: "9922302211", email: "ashokraozade@gmail.com" },
  { sr: 4, post: "Assistant Section Officer", name: "Ms. S. S. Mhaske", contact: "7588095453", email: "sunanda.mhaske@pravara.in" },
];

export default function ExaminationCommitteeTable() {
  const [copied, setCopied] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  /* ---------- Desktop Table ---------- */
  const DesktopTable = () => (
    <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl border border-slate-200 bg-white">
      <motion.table
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-w-full divide-y divide-slate-200"
      >
        <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <tr>
            {["Sr.", "Post", "Name", "Contact", "Email"].map((h, i) => (
              <th key={i} className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {committee.map((c, i) => (
            <motion.tr
              key={c.sr}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm font-medium text-slate-900">{c.sr}</td>
              <td className="px-6 py-4 text-sm text-slate-700">{c.post}</td>
              <td className="px-6 py-4 text-sm font-semibold text-slate-900">{c.name}</td>
              <td className="px-6 py-4 text-sm text-slate-700 flex items-center gap-2">
                <span>{c.contact}</span>
                <button onClick={() => copy(c.contact, `c-${c.sr}`)} className="text-slate-500 hover:text-slate-800">
                  {copied === `c-${c.sr}` ? "✓" : "📋"}
                </button>
              </td>
              <td className="px-6 py-4 text-sm text-slate-700 flex items-center gap-2">
                <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
                <button onClick={() => copy(c.email, `e-${c.sr}`)} className="text-slate-500 hover:text-slate-800">
                  {copied === `e-${c.sr}` ? "✓" : "📋"}
                </button>
              </td>
              <td className="px-6 py-4 text-sm">
                <div className="flex gap-2">
                  <a href={`tel:+91${c.contact}`} className="px-3 py-1 rounded bg-green-600 text-white text-xs hover:bg-green-700 transition">Call</a>
                  <a href={`mailto:${c.email}`} className="px-3 py-1 rounded bg-blue-600 text-white text-xs hover:bg-blue-700 transition">Mail</a>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );

  /* ---------- Mobile Accordion ---------- */
  const MobileAccordion = () => (
    <div className="md:hidden space-y-3 px-2">
      {committee.map((c, i) => (
        <motion.div
          key={c.sr}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition"
            onClick={() => setActiveAccordion(activeAccordion === c.sr ? null : c.sr)}
          >
            <div>
              <div className="text-xs text-slate-500">#{c.sr} · {c.post}</div>
              <div className="font-bold text-slate-900">{c.name}</div>
            </div>
            <svg
              className={`w-5 h-5 text-slate-600 transform transition-transform duration-300 ${activeAccordion === c.sr ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Collapsible content */}
          <AnimatePresence>
            {activeAccordion === c.sr && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="border-t border-slate-100"
              >
                <div className="p-4 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Contact</span>
                    <div className="flex items-center gap-2">
                      <span>{c.contact}</span>
                      <button onClick={() => copy(c.contact, `c-${c.sr}`)} className="text-slate-500 hover:text-slate-800">
                        {copied === `c-${c.sr}` ? "✓" : "📋"}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Email</span>
                    <div className="flex items-center gap-2">
                      <span>{c.email}</span>
                      <button onClick={() => copy(c.email, `e-${c.sr}`)} className="text-slate-500 hover:text-slate-800">
                        {copied === `e-${c.sr}` ? "✓" : "📋"}
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <a href={`tel:+91${c.contact}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition text-sm font-medium">📞 Call</a>
                    <a href={`mailto:${c.email}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition text-sm font-medium">✉️ Mail</a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Examination Committee</h2>
          <p className="mt-2 text-slate-600">SVIT – Pravara Institute of Technology</p>
        </motion.div>

        <DesktopTable />
        <MobileAccordion />
      </div>
    </section>
  );
}
