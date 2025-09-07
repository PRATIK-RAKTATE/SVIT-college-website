import React, { useEffect, useState } from "react";
import { DollarSign, Building, Clock, Users, BookOpen, Newspaper } from "lucide-react";

const LibraryFinancialReport = () => {
  const [costs, setCosts] = useState({
    books: 0,
    eBooks: 0,
    eResources: 0,
    journals: 0
  });

  const finalCosts = {
    books: 10808672,
    eBooks: 195790,
    eResources: 524021,
    journals: 240697
  };

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setCosts({
        books: Math.floor(eased * finalCosts.books),
        eBooks: Math.floor(eased * finalCosts.eBooks),
        eResources: Math.floor(eased * finalCosts.eResources),
        journals: Math.floor(eased * finalCosts.journals)
      });

      if (current === steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const costData = [
    { label: "Books", value: costs.books, icon: <BookOpen className="w-8 h-8" />, color: "from-blue-500 to-indigo-600" },
    { label: "E-Books", value: costs.eBooks, icon: <DollarSign className="w-8 h-8" />, color: "from-green-500 to-emerald-600" },
    { label: "E-Resources", value: costs.eResources, icon: <Building className="w-8 h-8" />, color: "from-purple-500 to-pink-600" },
    { label: "Journals", value: costs.journals, icon: <Newspaper className="w-8 h-8" />, color: "from-orange-500 to-red-600" }
  ];

  const infrastructure = [
    { label: "Total Area", value: "982 sq.mtr.", icon: <Building className="w-6 h-6" /> },
    { label: "Seating Capacity", value: "250", icon: <Users className="w-6 h-6" /> },
    { label: "Library Timing", value: "9.00am to 5.00pm", icon: <Clock className="w-6 h-6" /> },
    { label: "Newspapers", value: "08", icon: <Newspaper className="w-6 h-6" /> }
  ];

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
            Library Financial & Infrastructure Report
          </h2>
          <p className="text-lg text-gray-600">As of June 2025</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* Financial Costs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Financial Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {costData.map((cost, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${cost.color} text-white`}>
                    {cost.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">INR</p>
                    <p className="text-lg font-bold text-gray-900">
                      ₹{(cost.value / 100000).toFixed(2)}L
                    </p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cost.label}</h4>
                <p className="text-2xl font-bold font-mono text-gray-900">
                  ₹{cost.value.toLocaleString()}/
                </p>
              </div>
            ))}
          </div>

          {/* Total Investment */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 shadow-xl text-center">
            <h4 className="text-xl font-bold mb-2">Total Investment</h4>
            <p className="text-4xl font-bold font-mono">
              ₹{(costs.books + costs.eBooks + costs.eResources + costs.journals).toLocaleString()}/
            </p>
          </div>
        </div>

        {/* Infrastructure Details */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Infrastructure Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {item.label}
                  </h4>
                </div>
                <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Librarian Info */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full text-white">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Librarian</h4>
              <p className="text-gray-600">Prof. Avhad P. E.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryFinancialReport;