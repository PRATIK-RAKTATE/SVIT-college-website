// Alumni.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function Alumni() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <motion.div
        variants={cardVariants}
        className="max-w-3xl bg-white rounded-xl shadow p-6 text-center"
      >
        {/* heading */}
        <motion.h1
          variants={listItemVariants}
          className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4"
        >
          Alumni
        </motion.h1>

        {/* content list */}
        <motion.ul className="text-gray-700 text-left space-y-3 mb-6 list-disc list-inside">
          {[
            "Alumni Association of the college was established on 24-may-2004 as a not for profit organization with the objective to keep all the alumni associated with the alma matter and develop plans to contribute, support the institution for building better future for the generation X. The college believes that the alumni of the college are its ambassadors to the world.",
            "The alumni cell is the single point of contact for all alumni for organizing institution visit, expert lectures, webinars, mentorship assistance, training & placement assistance etc.",
            <>
              Official Alumni registration portal link:&nbsp;
              <a href="https://alumni.pravara.in/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                Click Here <FaExternalLinkAlt className="inline w-3 h-3 ml-1" />
              </a>
            </>,
            <>
              For any suggestions or feedback contact:&nbsp;
              <a href="mailto:svit.alc@pravara.in" className="text-indigo-600 hover:underline">svit.alc@pravara.in</a> or
              <a href="mailto:rushikesh.bhalerao@pravara.in" className="text-indigo-600 hover:underline ml-1">rushikesh.bhalerao@pravara.in</a>
            </>
          ].map((text, i) => (
            <motion.li key={i} variants={listItemVariants} transition={{ delay: 0.1 * i }}>
              {text}
            </motion.li>
          ))}
        </motion.ul>

        {/* contact card */}
        <motion.div
          variants={listItemVariants}
          transition={{ delay: 0.5 }}
          className="border-t pt-4 text-left text-sm text-gray-800 space-y-2"
        >
          <p className="font-semibold text-indigo-700">Contact:</p>
          <p>Dr. Pratibha V. Kashid<br />Alumni Co-ordinator<br />Nashik 422101</p>
          <p className="flex items-center gap-2"><FaPhone className="text-indigo-600" />Mobile:&nbsp;<a href="tel:+919422935610" className="hover:underline">09422935610</a></p>
          <p className="flex items-center gap-2"><FaPhone className="text-indigo-600" />Phone: 91-2551-271278</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-600" />Fax: 91-2551-271277</p>
        </motion.div>

        {/* CTA button */}
        <motion.a
          variants={listItemVariants}
          transition={{ delay: 0.7 }}
          href="https://alumni.pravara.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Visit Alumni Portal <FaExternalLinkAlt className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}