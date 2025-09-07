import React, { useEffect, useState } from "react";
import { Book, BookOpen, FileText, BarChart3 } from "lucide-react";

const BranchLibraryReport = () => {
  const [animatedData, setAnimatedData] = useState([]);
  const [totals, setTotals] = useState({ titles: 0, volumes: 0, journals: 0 });

  const branchData = [
    // UNDER GRADUATE
    { type: "UG", branch: "Mechanical Engineering", titles: 1108, volumes: 4320, journals: 12 },
    { type: "UG", branch: "Chemical Engineering", titles: 1121, volumes: 4350, journals: 6 },
    { type: "UG", branch: "E&TC Engineering", titles: 1125, volumes: 4285, journals: 6 },
    { type: "UG", branch: "Computer Engineering", titles: 1125, volumes: 4240, journals: 6 },
    { type: "UG", branch: "Electrical Engineering", titles: 1135, volumes: 4250, journals: 6 },
    { type: "UG", branch: "Information Technology", titles: 1035, volumes: 4300, journals: 2 },
    { type: "UG", branch: "Applied Science", titles: 1055, volumes: 3294, journals: 3 },
    // POST GRADUATE
    { type: "PG", branch: "MBA", titles: 460, volumes: 2068, journals: 12 },
    { type: "PG", branch: "ME Mechanical", titles: 337, volumes: 654, journals: 5 },
    { type: "PG", branch: "ME Computer", titles: 350, volumes: 615, journals: 6 },
    { type: "PG", branch: "ME E&TC", titles: 250, volumes: 489, journals: 5 },
    { type: "PG", branch: "Literature", titles: 35, volumes: 35, journals: 0 },
  ];

  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      const animated = branchData.map((row) => ({
        ...row,
        titles: Math.floor(eased * row.titles),
        volumes: Math.floor(eased * row.volumes),
        journals: Math.floor(eased * row.journals),
      }));

      setAnimatedData(animated);

      const newTotals = {
        titles: animated.reduce((sum, row) => sum + row.titles, 0),
        volumes: animated.reduce((sum, row) => sum + row.volumes, 0),
        journals: animated.reduce((sum, row) => sum + row.journals, 0),
      };
      setTotals(newTotals);

      if (current === steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const totalRow = {
    sr: "TOTAL",
    branch: "",
    titles: totals.titles,
    volumes: totals.volumes,
    journals: totals.journals,
  };

  const Icon = ({ type }) => {
    if (type === "UG") return <Book className="w-4 h-4 text-blue-500" />;
    return <FileText className="w-4 h-4 text-purple-500" />;
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-gray-50 to-white py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Department-wise Library Holdings
          </h2>
          <p className="text-lg text-gray-600">Under-Graduate & Post-Graduate Programmes</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8 hover:shadow-2xl transition-all duration-500">
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">Sr. No</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">Branch</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  <Book className="w-4 h-4 inline mr-2" />
                  No. of Titles
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  No. of Volumes
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  <BarChart3 className="w-4 h-4 inline mr-2" />
                  No. of Journals
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {animatedData.map((row, idx) => (
                <tr
                  key={idx}
                  className="group hover:bg-blue-50/50 transition-all duration-200 hover:shadow-md"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Icon type={row.type} />
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                        {row.branch}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        row.type === "UG" 
                          ? "bg-blue-100 text-blue-700" 
                          : "bg-purple-100 text-purple-700"
                      }`}>
                        {row.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-mono font-semibold text-gray-900">
                    {row.titles.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-mono font-semibold text-gray-900">
                    {row.volumes.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-mono font-semibold text-gray-900">
                    {row.journals.toLocaleString()}
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                <td className="px-6 py-4 text-sm">{totalRow.sr}</td>
                <td className="px-6 py-4 text-sm font-semibold">TOTAL</td>
                <td className="px-6 py-4 text-center text-sm font-mono">
                  {totalRow.titles.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center text-sm font-mono">
                  {totalRow.volumes.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center text-sm font-mono">
                  {totalRow.journals.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {animatedData.map((row, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-500">#{idx + 1}</span>
                  <Icon type={row.type} />
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    row.type === "UG" 
                      ? "bg-blue-100 text-blue-700" 
                      : "bg-purple-100 text-purple-700"
                  }`}>
                    {row.type}
                  </span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-4">{row.branch}</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Titles</p>
                  <p className="text-lg font-bold font-mono text-gray-900">{row.titles.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Volumes</p>
                  <p className="text-lg font-bold font-mono text-gray-900">{row.volumes.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Journals</p>
                  <p className="text-lg font-bold font-mono text-gray-900">{row.journals.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Total */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-lg mb-4 text-center">TOTAL COLLECTION</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm opacity-90 mb-1">Titles</p>
                <p className="text-2xl font-bold font-mono">{totalRow.titles.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-1">Volumes</p>
                <p className="text-2xl font-bold font-mono">{totalRow.volumes.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-1">Journals</p>
                <p className="text-2xl font-bold font-mono">{totalRow.journals.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchLibraryReport;