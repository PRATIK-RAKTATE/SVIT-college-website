import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      setMobileOpenMenu(null);
    }
  }, [isOpen]);

  const menuItems = [
    {
      key: "dept",
      label: "Departments",
      items: [
        { text: "Basic Science and Humanities(FE)", url: "/Department/firstYear" },
        { text: "Computer Engineering", url: "/Department/computerEngineering" },
        { text: "Chemical Engineering", url: "/Department/chemicalEngineering" },
        { text: "Electronics & Computer Engineering", url: "/Department/electronicsAndComputerEngineering" },
        { text: "Information Technology Engineering", url: "/Department/informationTechnology" },
        { text: "M.B.A.", url: "/Department/mba" },
      ],
    },
    {
      key: "alumni",
      label: "Alumni",
      items: [
        { text: "Alumni Information", url: "/alumni/info" },
        { text: "Alumni Registration", url: "/alumni/register" },
        { text: "Alumni Search", url: "/alumni/search" },
        { text: "View All Alumni", url: "/alumni/all" },
        { text: "Alumni Chapters and Alumni Meet Info.", url: "/alumni/meet" },
      ],
    },
    {
      key: "tpc",
      label: "TPC Section",
      items: [
        { text: "TPC Information", url: "/tpc/info" },
        { text: "Registration Form", url: "/tpc/register" },
        { text: "Placement Process", url: "/tpc/process" },
        { text: "List Of Companies", url: "/tpc/companies" },
      ],
    },
    {
      key: "naac",
      label: "NAAC",
      items: [
        { text: "NAAC UNDERTAKING", url: "/naac/undertaking" },
        { text: "NAAC SELF DECLARATION", url: "/naac/self-declaration" },
        { text: "IIQA", url: "/naac/iiqa" },
        { text: "NAAC SSR", url: "/naac/ssr" },
        { text: "Extended Profile", url: "/naac/profile" },
        { text: "Criteria 1", url: "/naac/criteria-1" },
        { text: "Criteria 2", url: "/naac/criteria-2" },
        { text: "Criteria 3", url: "/naac/criteria-3" },
        { text: "Criteria 4", url: "/naac/criteria-4" },
        { text: "Criteria 5", url: "/naac/criteria-5" },
        { text: "Criteria 6", url: "/naac/criteria-6" },
        { text: "Criteria 7", url: "/naac/criteria-7" },
      ],
    },
    {
      key: "links",
      label: "Important Links",
      items: [
        { text: "AICTE", url: "https://www.aicte.gov.in/" },
        { text: "DTE", url: "https://dte.maharashtra.gov.in/" },
        { text: "NBA", url: "https://www.nbaind.org/" },
        { text: "UGC", url: "https://www.ugc.gov.in/" },
        { text: "Shikshan Shulk Samiti", url: "https://sssamiti.org/" },
        { text: "Pravesh Niyantran Samiti", url: "https://maha-ara.org/ara-authorities/" },
        { text: "Unipune", url: "https://www.unipune.ac.in/" },
      ],
    },
    {
      key: "add",
      label: "Admission",
      items: [
        { text: "Admission Details", url: "/admission/Admissiondetails" },
        { 
          text: "Admission 2025-26 (Institute Level Non CAP Admission)", 
          url: "https://svitnashik.in/MainNav/Admission%202025-26%20(Institute%20Level%20Non%20CAP%20Admission).pdf" 
        },
        { 
          text: "Admission Enquiry Form", 
          url: "https://docs.google.com/forms/d/e/1FAIpQLScy0O757Bw1lNMDHdvIUB0k-YfC0MwKDVo-mIyYMq8bYIozcg/viewform" 
        },
      ],
    },
    {
      key: "IQAC",
      label: "IQAC",
      items: [
        { text: "IQAC Cell", url: "/admission/Admissiondetails" },
        { 
          text: "IQAC Cell 2017", 
          url: "https://svitnashik.in/IQAC/IQAC_Cell.pdf" 
        },
        { 
          text: "Revised IQAC Cell 2018", 
          url: "https://svitnashik.in/IQAC/IQAC_Cell_2018.pdf" 
        },
        { 
          text: "Quality Policy ", 
          url: "https://svitnashik.in/IQAC/Quality_Policy.pdf" 
        },
        { 
          text: "IQAC Annual Report ", 
          url: "https://svitnashik.in/IQAC/IQAC_AR.pdf" 
        },
        { 
          text: "College Annual Report", 
          url: "https://svitnashik.in/IQAC/IQAC_CAR.pdf" 
        },
        { 
          text: "Annual Report 2022-23", 
          url: "https://svitnashik.in/IQAC/Annual%20Report-2022-23.pdf" 
        },
        { 
          text: "Annual Report 2023-24", 
          url: "https://svitnashik.in/IQAC/Annual%20Report-2023-24.pdf" 
        },
        { 
          text: "IQAC Minutes of Meetings", 
          url: "" 
        },
        { 
          text: "IQAC Cell:2017-18 Minutes of Meetings", 
          url: "https://svitnashik.in/IQAC/IQAC_MOM_2018.pdf" 
        },
        { 
          text: "Revised IQAC Cell:2018-19 Minutes of Meetings", 
          url: "vitnashik.in/IQAC/IQAC_MOM_2018.pdf" 
        },
        { 
          text: "IQAC Cell:2019-20 Minutes of Meetings", 
          url: "https://svitnashik.in/IQAC/IQAC_MOM_2019_20.pdf" 
        },
        { 
          text: "AQAR Report: 2018-2019", 
          url: "https://svitnashik.in/IQAC/SVIT_AQAR_Report_2018_2019.pdf" 
        },
        { 
          text: "AQAR Report: 2019-2020", 
          url: "https://svitnashik.in/IQAC/SVIT_AQAR_Report_2019_2020.pdf" 
        },
        { 
          text: "IQAC Cell:2020-21 Minutes of Meetings", 
          url: "https://svitnashik.in/IQAC/IQAC_MOM_2020_21.pdf" 
        },
        { 
          text: "AQAR Report: 2020-2021", 
          url: "https://svitnashik.in/IQAC/SVIT_AQAR_Report_2020_2021.pdf" 
        },
        { 
          text: "AQAR Report: 2021-2022", 
          url: "https://svitnashik.in/IQAC/SVIT_AQAR_Report_2021_2022.pdf" 
        },
        { 
          text: "IQAC Cell:2021-22 Minutes of Meetings", 
          url: "https://svitnashik.in/IQAC/IQAC_MOM_2021-22.pdf" 
        },
        { 
          text: "Academic_Calender_2022-23", 
          url: "https://svitnashik.in/IQAC/Academic_Calender_2022-23.pdf" 
        },
        { 
          text: "Academic_Calender_2023-24", 
          url: "https://svitnashik.in/IQAC/Academic_Calender_2023-24.pdf" 
        },
        { 
          text: "NAAC Steering Committee 2022-23", 
          url: "https://svitnashik.in/IQAC/NAAC%20Steering%20Committee%202022-23.pdf" 
        },
        { 
          text: "NAAC IQAC Cell -Revised 2022-23", 
          url: "https://svitnashik.in/IQAC/NAAC%20IQAC%20Cell%20-Revised%202022-23.pdf" 
        },
        { 
          text: "IQAC Minutes of Meeting 25 Aug 2022", 
          url: "https://svitnashik.in/IQAC/IQAC%20Minutes%20of%20Meeting%2025%20Aug%202022.pdf" 
        },
        { 
          text: "IQAC Minutes of Meeting 16 Feb 2023", 
          url: "https://svitnashik.in/IQAC/IQAC%20Minutes%20of%20Meeting%2016%20Feb%202023.pdf" 
        },
        { 
          text: "AQAR Report: 2022-23", 
          url: "https://svitnashik.in/IQAC/SVIT_AQAR_Report_2022_23.pdf" 
        },
        { 
          text: "IQAC Minutes of Meeting 23 Jan 2024", 
          url: "https://svitnashik.in/IQAC/IQAC%20Minutes%20of%20Meeting%2023%20Jan%202024.pdf" 
        },
        { 
          text: "AQAR Report: 2023-24", 
          url: "https://svitnashik.in/IQAC/SVIT_AQAR_Report_2023-24.pdf" 
        },
      ],
    },
  ];

  // helper function: check if external
  const isExternal = (url) => url.startsWith("http");

  return (
    <nav className="bg-white px-4 py-3 shadow-md relative z-50">
      {/* Desktop menu */}
      <div className="hidden md:flex md:justify-center md:gap-6 font-medium">
        <NavLink to="/" className={({ isActive }) =>
          `${isActive ? "text-red-500" : "text-black"}`}>
          Home
        </NavLink>

        {menuItems.map((menu) => (
          <ul key={menu.key} className="relative group cursor-pointer">
            <div className="flex items-center hover:text-blue-400">
              {menu.label} <ChevronDown size={16} className="ml-1" />
            </div>

            <ul className="absolute left-0 pt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50 max-h-96 overflow-y-auto">

              {menu.items.map((item, id) =>
                isExternal(item.url) ? (
                  <a 
                    key={id}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <li className="px-4 py-2 hover:bg-gray-100 w-70">{item.text}</li>
                  </a>
                ) : (
                  <NavLink 
                    key={id} 
                    to={item.url} 
                    className={({ isActive }) =>
                      `${isActive ? "text-red-500" : "text-black"}`
                    }
                  >
                    <li className="px-4 py-2 hover:bg-gray-100 w-70">{item.text}</li>
                  </NavLink>
                )
              )}
            </ul>
          </ul>
        ))}

        {/* Static menu links */}
        <NavLink to="https://svitnashik.in/Documents/RTI.pdf" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>RTI</NavLink>
        <NavLink to="/erp" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>ERP</NavLink>
        <NavLink to="/library" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Library</NavLink>
        <NavLink to="/gallery" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Gallery</NavLink>
        <NavLink to="Examination" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Examination</NavLink>
        <NavLink to="/contactus" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Contact us</NavLink>
        <NavLink to="/about" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>About us</NavLink>
        <NavLink to="/sm" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Site map</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <div className="flex justify-center">
          <h1 className="pt-2 mr-65">Menu</h1>
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-screen bg-white text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col gap-6`}
      >
        <NavLink to="/" className="text-xs font-semibold">Home</NavLink>

        {menuItems.map((menu) => (
          <div key={menu.key} className="flex flex-col gap-1">
            <button
              onClick={() =>
                setMobileOpenMenu(mobileOpenMenu === menu.key ? null : menu.key)
              }
              className="flex items-center justify-between w-full text-xs font-semibold "
            >
              {menu.label}
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  mobileOpenMenu === menu.key ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileOpenMenu === menu.key && (
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                {menu.items.map((item, idx) =>
                  isExternal(item.url) ? (
                    <li key={idx}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.text}
                      </a>
                    </li>
                  ) : (
                    <li key={idx}>
                      <Link to={item.url}>{item.text}</Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        ))}

        <NavLink to="/rti" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>RTI</NavLink>
        <NavLink to="/erp" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>ERP</NavLink>
        <NavLink to="/li" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Library</NavLink>
        <NavLink to="/ga" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Gallery</NavLink>
        <NavLink to="/contactus" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Contact us</NavLink>
        <NavLink to="/au" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>About us</NavLink>
        <NavLink to="/sm" className={({isActive}) => `${isActive ? "text-red-500" : "text-black"}`}>Site map</NavLink>
      </div>
    </nav>
  );
}
