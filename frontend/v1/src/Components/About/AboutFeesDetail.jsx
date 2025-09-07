import React from "react";

const feeData = {
  BE: {
    headers: ["BE", "Amount (₹)"],
    rows: [
      ["Tuition fees", "79,017"],
      ["Development fees", "9,483"],
      ["University fees", "616"],
      ["Student Insurance", "655"],
      ["Caution Money Deposit (Refundable)", "2,000"],
      ["ELIGIBILITY FEE", "600"],
      ["ELIGIBILITY FORM FEE", "50"],
    ],
    totals: [
      { label: "Total Fees (OPEN Category)", value: "92,421" },
      { label: "Total Fees (OBC\\EBC Category) BOYS", value: "52,912.5" },
      {
        label: "Total Fees (VJNT/SBC/TFWS) OBC/EWS GIRLS INCOME < ₹1 Lakh",
        value: "13,404",
      },
      { label: "Total Fees (SC/ST Category)", value: "3,921" },
    ],
  },
  DSE: {
    headers: ["DSE", "Amount (₹)"],
    rows: [
      ["Tuition fees", "79,017"],
      ["Development fees", "9,483"],
      ["University fees", "616"],
      ["Student Insurance", "424"],
      ["Caution Money Deposit (Refundable)", "2,000"],
      ["ELIGIBILITY FEE", "600"],
      ["ELIGIBILITY FORM FEE", "50"],
    ],
    totals: [
      { label: "Total Fees (OPEN Category)", value: "92,190" },
      { label: "Total Fees (OBC\\EBC Category)", value: "52,681.5" },
      {
        label: "Total Fees (VJNT/SBC/TFWS) OBC/EWS GIRLS INCOME < ₹1 Lakh",
        value: "13,173",
      },
      { label: "Total Fees (SC/ST Category)", value: "3,690" },
    ],
  },
  MBA: {
    headers: ["MBA", "Amount (₹)"],
    rows: [
      ["Tuition fees", "85,649"],
      ["Development fees", "10,706"],
      ["University fees", "616"],
      ["Student Insurance", "218"],
      ["Caution Money Deposit (Refundable)", "2,000"],
      ["ELIGIBILITY FEE", "600"],
      ["ELIGIBILITY FORM FEE", "50"],
    ],
    totals: [
      { label: "Total Fees (OPEN Category)", value: "99,839" },
      { label: "Total Fees (OBC\\EBC Category)", value: "57,014.5" },
      {
        label: "Total Fees (VJNT/SBC/TFWS) OBC/EWS GIRLS INCOME < ₹1 Lakh",
        value: "14,190",
      },
      { label: "Total Fees (SC/ST Category)", value: "3,484" },
    ],
  },
  Hostel: {
    headers: ["Hostel", "Amount (₹)"],
    rows: [
      ["Hostel Fees (per year)", "20,000"],
      ["Deposit (Refundable)", "2,000"],
      ["Mess Fees (per year)", "29,000"],
    ],
    totals: [],
  },
};

const TableBlock = ({ title, headers, rows, totals }) => (
  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-7xl mx-auto mt-8">
    <h3 className="text-2xl font-extrabold text-center py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white tracking-wide">
      {title}
    </h3>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          {headers.map((h) => (
            <th
              key={h}
              className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, val], i) => (
          <tr
            key={label}
            className={`transition-colors duration-200 ${
              i % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-indigo-50`}
          >
            <td className="px-4 py-2 text-gray-900">{label}</td>
            <td className="px-4 py-2 text-gray-800 font-medium">{val}</td>
          </tr>
        ))}
        {totals.map(({ label, value }) => (
          <tr key={label} className="bg-yellow-50 font-semibold">
            <td className="px-4 py-2 text-gray-900">{label}</td>
            <td className="px-4 py-2 text-gray-800">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function FeesDetails() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center gap-6 p-6">
      <TableBlock {...feeData.BE} />
      <TableBlock {...feeData.DSE} />
      <TableBlock {...feeData.MBA} />
      <TableBlock {...feeData.Hostel} />
    </div>
  );
}
