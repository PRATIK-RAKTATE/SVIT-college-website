import React, { useState, useMemo } from 'react';
import { criteria_4 } from '../../Constants/NAAC/criteria-4';

/* ------------- helpers ------------- */
const Badge = ({ val }) => {
  const map = {
    QnM: 'bg-emerald-100 text-emerald-700',
    QlM: 'bg-amber-100 text-amber-700',
  };
  const style = map[val] ?? 'bg-slate-100 text-slate-700';
  return <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${style}`}>{val}</span>;
};

/* ------------- desktop table ------------- */
const DesktopTable = ({ rows }) => {
  const [sort, setSort] = useState({ key: 'criterion', dir: 'asc' });
  const sorted = useMemo(() => {
    return [...rows].sort((a, b) => {
      const A = a[sort.key];
      const B = b[sort.key];
      if (A === B) return 0;
      return (A > B ? 1 : -1) * (sort.dir === 'asc' ? 1 : -1);
    });
  }, [rows, sort]);

  const handleSort = (key) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === 'asc' ? 'desc' : 'asc' }));

  return (
    <div className="hidden md:block overflow-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th
              onClick={() => handleSort('criterion')}
              className="px-4 py-2 text-left font-semibold cursor-select"
            >
              <div className="inline-flex items-center gap-1">
                Criterion
                {sort.key === 'criterion' && <span className="text-xs">{sort.dir === 'asc' ? '▲' : '▼'}</span>}
              </div>
            </th>
            <th
              onClick={() => handleSort('description')}
              className="px-4 py-2 text-left font-semibold cursor-select"
            >
              <div className="inline-flex items-center gap-1">
                Description
                {sort.key === 'description' && <span className="text-xs">{sort.dir === 'asc' ? '▲' : '▼'}</span>}
              </div>
            </th>
            <th className="px-4 py-2 text-left font-semibold">Download</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {sorted.map((row, i) => (
            <tr key={i} className="hover:bg-indigo-50">
              <td className="px-4 py-2 font-medium text-indigo-700">{row.criterion}</td>
              <td className="px-4 py-2">{row.description}</td>
              <td className="px-4 py-2">
                <ul className="list-disc list-inside space-y-1">
                  {row.downloads.map((d, j) => (
                    <li key={j}>
                      <a href={d.link} className="text-indigo-600 hover:underline">
                        {d.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ------------- mobile card view (unchanged) ------------- */
const MobileCards = ({ rows }) => (
  <div className="md:hidden grid gap-4">
    {rows.map((row, i) => (
      <div key={i} className="bg-white rounded-lg shadow p-4 border border-gray-200">
        <div className="flex items-start justify-between mb-2">
          <span className="text-sm font-bold text-indigo-700">{row.criterion}</span>
          {row.type && <Badge val={row.type} />}
        </div>
        <div className="text-sm text-gray-800 mb-3">{row.description}</div>
        <div className="text-sm">
          <div className="text-gray-500 mb-1">Downloads</div>
          <ul className="list-disc list-inside space-y-1">
            {row.downloads.map((d, j) => (
              <li key={j}>
                <a href={d.link} className="text-indigo-600 hover:underline">
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

/* ------------- main component ------------- */
const Criteria_4_Table = () => {
  return (
    <div className="p-4 md:p-6 space-y-8 bg-gray-50 min-h-screen">
      {criteria_4.map((section) => {
        const rows = section.rows;
        return (
          <div key={section.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg md:text-xl font-bold text-indigo-700 mb-4">
              {section.id} {section.title}
            </h2>

            <DesktopTable rows={rows} />
            <MobileCards rows={rows} />
          </div>
        );
      })}
    </div>
  );
};

export default Criteria_4_Table;