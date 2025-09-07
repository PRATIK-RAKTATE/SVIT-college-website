import React from "react";

export default function CompanyLogoTable() {
  const rows = [
    [1, "VIOSA, Mumbai", "https://www.viosa.in"],
    [2, "Dhumal Metals Pvt. Ltd., Sinnar", "https://dhumalmetals.com"],
    [3, "V Analytics, Nashik", "https://vanalytics.in"],
    [4, "Healthy Foods, Dapur, Sinnar, Nashik", "https://healthyfoods.co.in"],
    [5, "REVE Pharma, Musalgaon MIDC, Sinnar", "https://revepharma.com"],
    [6, "EagleByte Solutions, Pandit Colony, Nashik", "https://www.eaglebyte.in"],
    [7, "Epitome Components, Ahmednagar", "https://epitomecomponents.com"],
    [8, "ExcelR – Raising Excellence, Pune", "https://www.excelr.com"],
    [9, "McKinley Rice / Red Rob, Mumbai", "https://www.mckinleyrice.com"],
    [10, "Nector Studio, Nashik", "https://nectorstudio.com"],
    [11, "MapWeb Technologies, Nashik", "https://mapwebtech.com"],
    [12, "Ezacus Technologies, Nashik", "https://www.ezacus.com"],
    [13, "Global IT Solutions, Nashik", "https://globalitsolutions.co.in"],
    [14, "r3 System, Nashik", "https://r3system.in"],
    [15, "Sumago Infotech, Nashik", "https://sumagoinfotech.com"],
    [16, "NetLeap IT Training & Solutions, Nashik", "https://netleap.in"],
    [17, "Miracle Developers, Nashik", "https://miracledevelopers.org"],
    [18, "AR Robosys, Nashik", "https://arroboSys.com"],
    [19, "SysAnnex Softwares & Services, Sinnar", "https://sysannex.com"],
    [20, "DashTeK Engineering, Ambad, Nashik", "https://dashtek.in"],
    [21, "SivaNanda Electronics, Nashik", "https://sivanandaelectronics.com"],
    [22, "Raspi Invent, Nashik", "https://raspiinvent.com"],
    [23, "Technokraft Training Solution", "https://technokraftindia.com"],
    [24, "Prolific Training Center", "https://prolifictraining.in"],
    [25, "Shatabdi Institute of Engg & Research Centre", "https://shatabdi.org.in"],
    [26, "Sim Power Technology, Nashik", "https://simpower.tech"],
    [27, "G. N. Sapkal COE, Anjaneri, Nashik", "https://gnsapkal.org"],
    [28, "Heuristic Techno Park, Nashik", "https://heuristictechnopark.com"],
    [29, "Adi Chem Technology Pvt, Nashik", "https://adichemtech.com"],
    [30, "SAISHRADDHA Graphite Equipments, MIDC Malegaon", "https://saishraddhaequipments.com"],
    [31, "Graphite India Ltd., Nashik", "https://www.graphiteindia.com"],
    [32, "Delta Finochem Pvt. Ltd., Nashik", "https://deltafinochem.com"],
    [33, "Ramdeo Refinery Pvt. Ltd.", "https://ramdeorefining.com"],
    [34, "Konark Global, Satpur MIDC, Nashik", "https://konarkglobal.com"],
    [35, "NY Enterprises, Sinnar", "https://nyenterprises.in"],
    [36, "Shiwa Manufacturer", "https://shiwamanufacturer.com"],
    [37, "Globe Chemical, Musalgaon MIDC, Sinnar", "https://globechemicals.com"],
    [38, "Chandreshwar Aqua, Chandegaon, Rahuri", "https://facebook.com/ChandreshwarAqua"],
    [39, "Amruta Industries, Sinnar", "https://amrutaindustries.com"],
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <h2 className="text-3xl font-extrabold text-center py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white tracking-wide">
          Linkages
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Sr. No</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Company / Organization</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Source</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([sr, name, link], i) => (
              <tr
                key={sr}
                className={`transition-colors duration-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-indigo-50`}
              >
                <td className="px-6 py-4 text-gray-800 font-medium">{sr}</td>
                <td className="px-6 py-4 text-gray-900">{name}</td>
                <td className="px-6 py-4">
                  <a
                    href={link}
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
