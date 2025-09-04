import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); 
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

  // Desktop menu items
  const desktopMenu = [
    {
      label: "Departments",
      key: "dept",
      items: [
        "Basic Science and Humanities(FE)",
        "Computer Engineering",
        "Chemical Engineering",
        "Electronics & Computer Engineering",
        "Information Technology Engineering",
        "M.B.A.",
        "Electrical Engineering (In Progressive Closure)",
        "Mechanical Engineering (In Progressive Closure)",
      ],
    },
    {
      label: "Alumni",
      key: "alumni",
      items: [
        "Alumni Information",
        "Alumni Registration",
        "Alumni Search",
        "View All Alumni",
        "Alumni Chapters and Alumni Meet Info.",
      ],
    },
    {
      label: "TPC Section",
      key: "tpc",
      items: ["TPC Information", "Registration Form", "Placement Process", "List Of Companies"],
    },
    {
      label: "NAAC",
      key: "naac",
      items: [
        "NAAC UNDERTAKING",
        "NAAC SELF DECLARATION",
        "IIQA",
        "NAAC SSR",
        "Extended Profile",
        "Criteria 1",
        "Criteria 2",
        "Criteria 3",
        "Criteria 4",
        "Criteria 5",
        "Criteria 6",
        "Criteria 7",
      ],
    },
    {
      label: "Important Links",
      key: "links",
      items: ["AICTE", "DTE", "MBA", "UGC", "Shikshan Shulk Samiti", "Unipune"],
    },
  ];

  return (
    <nav className="bg-white px-4 py-3 shadow-md relative z-50">
      {/* Desktop Menu */}
      <ul className="hidden md:flex md:justify-center md:gap-6 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "text-red-500" : "text-blue-500"}`}
        >
          Home
        </NavLink>

        {desktopMenu.map((menu) => (
          <li
            key={menu.key}
            className="relative cursor-pointer transition-border duration-300  hover:border-b-2  "
            onMouseEnter={() => setOpenMenu(menu.key)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center hover:text-blue-400">
              {menu.label} <ChevronDown size={16} className="ml-1" />
            </button>

            <ul
              className={`absolute left-0 mt-2 bg-white shadow-md rounded-md w-60 transition-all duration-200 z-50 ${
                openMenu === menu.key ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {menu.items.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                   {item}
                </li>
              ))}
            </ul>
          </li>
        ))}

        {/* Static links */}
        {["RTI", "ERP", "Library", "Gallery", "Contact us", "About us", "Site map"].map(
          (item, idx) => (
            <li className="relative cursor-pointer transition-border duration-300  hover:border-b-3 border-red " key={idx}>{item}</li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button onClick={toggleMenu} className="p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-screen bg-white text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col gap-6`}
      >
        <NavLink to="/" className="text-10px font-semibold">
          Home
        </NavLink>

        {desktopMenu.map((menu) => (
          <div key={menu.key} className="flex flex-col gap-1">
            <button
              onClick={() =>
                setMobileOpenMenu(mobileOpenMenu === menu.key ? null : menu.key)
              }
              className="flex items-center justify-between w-full text-10px font-semibold"
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
              <ul className="pl-4 mt-2 space-y-2 text-base">
                {menu.items.map((item, idx) => (
                  <li key={idx} className="cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {["RTI", "ERP", "Library", "Gallery", "Examination", "Contact us", "About us", "Site map"].map(
          (item, idx) => (
            <span key={idx} className="text-10px font-semibold cursor-pointer">
              {item}
            </span>
          )
        )}
      </div>
    </nav>
  );
}