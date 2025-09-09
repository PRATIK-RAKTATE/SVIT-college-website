import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom"; // useLocation added

export default function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const [isClosing, setIsClosing] = useState(false); // new state for animation
  const location = useLocation(); // hook to track route changes

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      setMobileOpenMenu(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setMobileOpenMenu(null);
        setIsClosing(false);
      }, 300); // duration matching CSS transition
    }
  }, [location]);

  const menuItems = [
    {
      key: "dept",
      label: "Departments",
      items: [
        {
          text: "Basic Science and Humanities(FE)",
          url: "/Department/firstYear",
        },
        {
          text: "Computer Engineering",
          url: "/Department/computerEngineering",
        },
        {
          text: "Chemical Engineering",
          url: "/Department/chemicalEngineering",
        },
        {
          text: "Electronics & Computer Engineering",
          url: "/Department/electronicsAndComputerEngineering",
        },
        {
          text: "Information Technology Engineering",
          url: "/Department/informationTechnology",
        },
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
        {
          text: "Pravesh Niyantran Samiti",
          url: "https://maha-ara.org/ara-authorities/",
        },
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
          url: "https://svitnashik.in/MainNav/Admission%202025-26%20(Institute%20Level%20Non%20CAP%20Admission).pdf",
        },
        {
          text: "Admission Enquiry Form",
          url: "https://docs.google.com/forms/d/e/1FAIpQLScy0O757Bw1lNMDHdvIUB0k-YfC0MwKDVo-mIyYMq8bYIozcg/viewform",
        },
      ],
    },
  ];

  // helper function to check if URL is external
  const isExternal = (url) => url.startsWith("http");

  return (
    <nav className="bg-white px-4 py-3 shadow-md relative z-50">
      {/* Desktop Menu */}
      <div className="hidden md:flex md:justify-center md:gap-6 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Home
        </NavLink>

        {menuItems.map((menu) => (
          <ul key={menu.key} className="relative group cursor-pointer">
            <div className="flex items-center hover:text-blue-400">
              {menu.label} <ChevronDown size={16} className="ml-1" />
            </div>

            <ul className="absolute left-0 pt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
              {menu.items.map((item, id) =>
                isExternal(item.url) ? (
                  <a
                    key={id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="px-4 py-2 hover:bg-gray-100 w-70">
                      {item.text}
                    </li>
                  </a>
                ) : (
                  <NavLink
                    key={id}
                    to={item.url}
                    className={({ isActive }) =>
                      `${isActive ? "text-[#4F39F6]" : "text-black"}`
                    }
                  >
                    <li className="px-4 py-2 hover:bg-gray-100 w-70">
                      {item.text}
                    </li>
                  </NavLink>
                ),
              )}
            </ul>
          </ul>
        ))}

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Library
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/Examination"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Examination
        </NavLink>
        <NavLink
          to="/rti"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          RTI
        </NavLink>
        <NavLink
          to="/erp"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          ERP
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Contact us
        </NavLink>
        <NavLink
          to="/sm"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Site map
        </NavLink>
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
        className={`fixed top-0 left-0 w-3/4 h-screen bg-white text-black transform transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col gap-6 ${
          isOpen && !isClosing ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Home
        </NavLink>

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
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    </li>
                  ) : (
                    <li key={idx}>
                      <NavLink
                        className={({ isActive }) =>
                          `${isActive ? "text-[#4F39F6]" : "text-black"}`
                        }
                        to={item.url}
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
        ))}

        <NavLink
          to="/li"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Library
        </NavLink>
        <NavLink
          to="/ga"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/rti"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          RTI
        </NavLink>
        <NavLink
          to="/erp"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          ERP
        </NavLink>
        <NavLink
          to="/au"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Contact us
        </NavLink>
        <NavLink
          to="/sm"
          className={({ isActive }) =>
            `${isActive ? "text-[#4F39F6]" : "text-black"}`
          }
        >
          Site map
        </NavLink>
      </div>
    </nav>
  );
}
