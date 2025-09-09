import React from "react";

export default function StylishTable() {
  const rows = [
    [
      1,
      "Arts, Science and Commerce College Satral.",
      1998,
      "http://www.pravarasatralcollege.org",
    ],
    [
      2,
      "College of Agriculture and Biotechnology",
      2003,
      "http://www.pravaraagribiotech.org.in",
    ],
    [
      3,
      "English Medium School Loni.",
      1975,
      "http://www.pravarapvpcollege.org.in",
    ],
    [4, "HAL-Pravara Aviation Academy", 2008, "http://www.hpai.in"],
    [
      5,
      "Home Science college for Women.",
      1997,
      "http://www.pravarahomescience.org.in",
    ],
    [
      6,
      "Industrial Training Institute. (for boys)",
      1984,
      "http://www.pravaraiti.org.in",
    ],
    [
      7,
      "Industrial Training Institute. (for Women)",
      1990,
      "http://www.pravarapharmacy.org.in",
    ],
    [8, "Kreeda Prabodhini.", 1997, "http://www.pravarakridaprabodhini.org.in"],
    [
      9,
      "Padhmashri Dr. Vitthalrao Vikhe Patil Arts, Science and Commerce College.",
      1971,
      "http://www.pravarakvm.org.in",
    ],
    [
      10,
      "Padhmashri Dr. Vitthalrao Vikhe Patil Institute of Technology and Engineering. (Polytechnic)",
      1981,
      "http://www.pravaraems.org",
    ],
    [
      11,
      "Padmashri Dr. Vitthalrao Vikhe Patil Sainik School.",
      1999,
      "http://www.pravarasainiksch.org.in",
    ],
    [
      12,
      "Pandit Jawaharlal Nehru Academy of Finance.",
      1983,
      "http://www.pravarakalaacadamy.org.in",
    ],
    [13, "Pravara Kanya Vidya Mandir", 1969, "http://www.pravarapps.org.in"],
    [14, "Pravara Public School", 1964, "www.pravarapublicschool.org"],
    [
      15,
      "Pravara Rural College of Architecture.",
      1996,
      "http://www.pravaraarchitecture.org.in",
    ],
    [
      16,
      "Pravara Rural College of Education.",
      1990,
      "http://www.pravarabed.org.in",
    ],
    [
      17,
      "Pravara Rural College of Pharmacy.",
      1987,
      "http://www.pravarapharmacy.org.in",
    ],
    [
      18,
      "Pravara Rural College of Physical Education.",
      1992,
      "http://www.pravarabped.org.in",
    ],
    [
      19,
      "Pravara Rural Engineering College.",
      1983,
      "http://www.pravaraengg.org.in",
    ],
    [
      20,
      "Shri Sai Baba Institute of Engineering Research and Allied Sciences",
      1997,
      "http://www.pravarassri.org.in",
    ],
    [
      21,
      "Sir Visvesvaraya Institute of Technology, Nashik",
      1998,
      "http://www.svitnashik.in",
    ],
    [
      22,
      "Women College of Pharmacy Chincholi.",
      2006,
      "http://www.pravaracopc.org.in",
    ],
  ];

  return (
    <div className="min-h-screen md:w-full w-[450px] bg-white flex items-center justify-center md:p-6">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <h2 className="text-3xl font-extrabold text-center py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white tracking-wide">
          Pravara Institutions
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                Sr. No
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                Name of Institution
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                Year of Inception
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([sr, name, year, link], i) => (
              <tr
                key={sr}
                className={`transition-colors duration-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-indigo-50`}
              >
                <td className="px-6 py-4 text-gray-800 font-medium">{sr}</td>
                <td className="px-6 py-4 text-gray-900">{name}</td>
                <td className="px-6 py-4 text-gray-800 font-medium">{year}</td>
                <td className="px-6 py-4">
                  <a
                    href={link.startsWith("http") ? link : `https://${link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 underline transition"
                  >
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
