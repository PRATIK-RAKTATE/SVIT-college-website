import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); 
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

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
      items: ["AICTE", "DTE", "NBA", "UGC", "Shikshan Shulk Samiti", "Unipune"],
    },
  ];

  return (
    <nav className="bg-white px-4 py-3 shadow-md relative z-50">
      {/* Desktop Menu */}
      <ul className="hidden md:flex md:justify-center md:gap-6 font-medium">
        <NavLink to="/" className={({isActive})=>`${isActive ? "text-red-500" :"text-blue-500"}`}>Home</NavLink>

        {/* Departments */}
        <li className="relative cursor-pointer">
          <button
            onClick={() => toggleDropdown("dept")}
            className="flex items-center hover:text-blue-400"
          >
            Departments <ChevronDown size={16} className="ml-1" />
          </button>
          {openMenu === "dept" && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-100 transition-opacity duration-200 z-50">
              <Link to={"/Department/firstYear"}>
                <li className="px-4 py-2 hover:bg-gray-100 w-60">
                  Basic Science and Humanities(FE) 
                </li>
              </Link>
              <li>
                <Link className="px-4 py-2 hover:bg-gray-100 w-60" to={"/Department/computerEngineering"}>
                  Computer Engineering
                </Link>
              </li>
              <Link to={"/Department/chemicalEngineering"}>
                <li className="px-4 py-2 hover:bg-gray-100 w-60">Chemical Engineering</li>
              </Link>
              <Link to={"/Department/electronicsAndComputerEngineering"}>
                <li className="px-4 py-2 hover:bg-gray-100 w-60">
                  Electronics & Computer Engineering
                </li>
              </Link>
              <Link to={"/Department/informationTechnology"}>
                <li className="px-4 py-2 hover:bg-gray-100 w-60">
                  Information Technology Engineering
                </li>
              </Link>
              <Link to={"/Department/mba"}>
                <li className="px-4 py-2 hover:bg-gray-100 w-60">M.B.A.</li>
              </Link>
            </ul>
          )}
        </li>

        {/* Alumni */}
        <li className="relative cursor-pointer">
          <button
            onClick={() => toggleDropdown("alumni")}
            className="flex items-center hover:text-blue-400"
          >
            Alumni <ChevronDown size={16} className="ml-1" />
          </button>
          {openMenu === "alumni" && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Alumni Information</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Alumni Registration</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Alumni Search</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">View All Alumni</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">
                Alumni Chapters and Alumni Meet Info.
              </li>
            </ul>
          )}
        </li>

        {/* TPC Section */}
        <li className="relative cursor-pointer">
          <button
            onClick={() => toggleDropdown("tpc")}
            className="flex items-center hover:text-blue-400"
          >
            TPC Section <ChevronDown size={16} className="ml-1" />
          </button>
          {openMenu === "tpc" && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-100 transition-opacity duration-200 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 w-60">TPC Information</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Registration Form</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Placement Process</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">List Of Companies</li>
            </ul>
          )}
        </li>

        {/* NAAC */}
        <li className="relative cursor-pointer">
          <button
            onClick={() => toggleDropdown("naac")}
            className="flex items-center hover:text-blue-400"
          >
            NAAC <ChevronDown size={16} className="ml-1" />
          </button>
          {openMenu === "naac" && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-100 transition-opacity duration-200 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 w-60">NAAC UNDERTAKING</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">NAAC SELF DECLARATION</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">IIQA</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">NAAC SSR</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Extended Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Criteria 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Criteria 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Criteria 3</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Criteria 4</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Criteria 5</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Criteria 6</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Criteria 7</li>
            </ul>
          )}
        </li>

        {/* Important Links */}
        <li className="relative cursor-pointer">
          <button
            onClick={() => toggleDropdown("links")}
            className="flex items-center hover:text-blue-400"
          >
            Important Links <ChevronDown size={16} className="ml-1" />
          </button>
          {openMenu === "links" && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-100 transition-opacity duration-200 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 w-60">AICTE</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">DTE</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">NBA</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">UGC</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Shikshan Shulk Samiti</li>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Unipune</li>
            </ul>
          )}
        </li>

        {/* Static links */}
        {["RTI", "ERP", "Library", "Gallery", "Contact us", "About us", "Site map"].map(
          (item, idx) => (
            <li className="relative cursor-pointer transition-border duration-300 hover:border-b-2 border-red-500" key={idx}>{item}</li>
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
        <NavLink to="/" className="text-xs font-semibold">
          Home
        </NavLink>

        {desktopMenu.map((menu) => (
          <div key={menu.key} className="flex flex-col gap-1">
            <button
              onClick={() =>
                setMobileOpenMenu(mobileOpenMenu === menu.key ? null : menu.key)
              }
              className="flex items-center justify-between w-full text-xs font-semibold"
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
            <span key={idx} className="text-xs font-semibold cursor-pointer">
              {item}
            </span>
          )
        )}
      </div>
    </nav>
  );
}
