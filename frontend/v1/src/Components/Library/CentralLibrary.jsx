import React, { useEffect, useState } from "react";
import { Book, BookOpen, Laptop, Newspaper, Wifi, Users } from "lucide-react";

const LibraryReport = () => {
  const [stats, setStats] = useState({
    titles: 0,
    volumes: 0,
    eBooks: 0,
    journals: 0,
  });

  const finalStats = {
    titles: 8080,
    volumes: 29606,
    eBooks: 9703,
    journals: 73,
  };

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setStats({
        titles: Math.floor(eased * finalStats.titles),
        volumes: Math.floor(eased * finalStats.volumes),
        eBooks: Math.floor(eased * finalStats.eBooks),
        journals: Math.floor(eased * finalStats.journals),
      });

      if (current === steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const cardData = [
    { label: "Titles", value: stats.titles, icon: <Book className="w-10 h-10" />, color: "from-blue-500 to-indigo-600" },
    { label: "Volumes", value: stats.volumes, icon: <BookOpen className="w-10 h-10" />, color: "from-green-500 to-emerald-600" },
    { label: "E-Books", value: stats.eBooks, icon: <Laptop className="w-10 h-10" />, color: "from-purple-500 to-pink-600" },
    { label: "Journals", value: stats.journals, icon: <Newspaper className="w-10 h-10" />, color: "from-orange-500 to-red-600" },
  ];

  const eResources = [
    "Springer – Computer, E&TC, Elect, IT",
    "Springer – Mechanical Engineering",
    "J–GATE for Social & Management",
    "NDL - National Digital Library",
  ];

  const memberships = [
    "IIT Bombay",
    "British Library, Pune",
    "Jaykar Library, Pune University",
    "DELNET",
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-blue-50 to-white py-20">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-purple-100/40 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-20">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
            Central Library Report
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-medium">As of June 2025</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="relative group p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-white bg-gradient-to-br ${card.color}`}
              >
                {card.icon}
              </div>
              <h3 className="text-4xl font-extrabold font-mono text-gray-900">
                {card.value.toLocaleString()}
              </h3>
              <p className="mt-2 text-gray-600 font-semibold">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* E-Resources */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Wifi className="w-6 h-6 mr-3 text-blue-600" />
              E-Resources
            </h3>
            <ul className="space-y-4">
              {eResources.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-purple-600" />
              Memberships
            </h3>
            <ul className="space-y-4">
              {memberships.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <p className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-md border border-gray-200 text-gray-700 font-medium">
            📧 For access credentials:
            <a
              href="mailto:library@svit.pravara.in"
              className="ml-2 text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors"
            >
              library@svit.pravara.in
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default LibraryReport;
