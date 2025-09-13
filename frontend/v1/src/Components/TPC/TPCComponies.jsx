import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rawCompanies = [
  "TCS","Ventura","InSynapsis","ExceLR Pvt. Ltd.","Cipla Pharmaceutical Ltd., Kurkumbh, Pune","Infosys Ltd.",
  "Megafine Pharma Pvt. Ltd., Lakhamapur","Laxmi Organic Industries Pvt. Ltd., Mahad, Raigad.",
  "Svaar Process Solutions, Nashik","Mack Pharmatech Pvt. Ltd., Sinnar, Nashik.",
  "AM/NS India","BYJU'S India","Ring Gear Pvt. Ltd.","Anshuman Tech Pvt. Ltd., Pune",
  "Hidden Brains Infotech Pvt. Ltd.","Decimal Point Analytics","Gauss Electromagnetics Pvt. Ltd.",
  "IB Automation Pvt. Ltd.","Precision Instrument Pvt. Ltd.","SHRIZ International Pvt. Ltd., Pathardi Phata, Nashik","JSW Steel Pvt. Ltd."
];

const RecruiterWall = () => {
  const [search, setSearch] = useState("");

  const grouped = useMemo(() => {
    const filtered = rawCompanies.filter(c =>
      c.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.reduce((acc, cur) => {
      const initial = cur[0].toUpperCase();
      (acc[initial] ||= []).push(cur);
      return acc;
    }, {});
  }, [search]);

  const rowVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const underlineVariants = {
    rest: { scaleX: 0, originX: 0 },
    hover: { scaleX: 1, originX: 0, transition: { duration: 0.25 } }
  };

  return (
    <section className="bg-slate-50 text-slate-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Recruiters</h2>
          <p className="text-slate-600 mt-2">Companies that regularly hire SVIT talent</p>
        </motion.div>

        {/* search */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-10"
        >
          
        </motion.div>

        {/* list */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="space-y-8"
        >
          <AnimatePresence mode="wait">
            {Object.entries(grouped).sort().map(([initial, list]) => (
              <motion.div
                key={initial}
                variants={rowVariants}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {/* letter badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-indigo-600">{initial}</span>
                  <span className="text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded-full">{list.length}</span>
                </div>

                <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  {list.map((company) => (
                    <motion.div
                      key={company}
                      variants={rowVariants}
                      whileHover="hover"
                      className="relative px-5 py-4 text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-transparent transition-colors"
                    >
                      {company}
                      {/* subtle underline */}
                      <motion.div
                        variants={underlineVariants}
                        className="absolute bottom-0 left-5 right-5 h-0.5 bg-indigo-400"
                        initial="rest"
                        whileHover="hover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!Object.keys(grouped).length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 mt-10"
          >
            No companies match your search.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default RecruiterWall;