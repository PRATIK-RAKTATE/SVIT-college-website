import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {Link,NavLink} from 'react-router-dom'

export default function HomeNav() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <nav className="bg-white px-4 py-3 shadow-md relative z-50">
      {/* Desktop Menu */}
      <ul className="hidden md:flex md:justify-center md:gap-6 font-medium">
        <NavLink to="/" className={({isActive})=>`${isActive ? "text-red-500" :"text-blue-500"}`}>Home</NavLink>

        {/* Departments */}
        <li
          className="relative cursor-pointer"
        >
          <button
            onClick={() => toggleDropdown("dept")}
            className="flex items-center hover:text-blue-400"
          >
            Departments <ChevronDown size={16} className="ml-1" />
          </button>
          {openMenu === "dept" && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-100 transition-opacity duration-200 z-50">
              <Link to={"/Department/first-year"}>
              <li className="px-4 py-2 hover:bg-gray-100 w-60" >
                Basic Science and Humanities(FE) 
               </li>
              </Link>
              <li>
                <Link className="px-4 py-2 hover:bg-gray-100 w-60" to={"/Department/computerDept"}>
                Computer Engineering
              </Link>
              </li>
              <Link to={"/Department/ChemicalDept"}>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">Chemical Engineering</li>
              </Link>
              <Link to={"/Department/ece"}>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">
                Electronics & Computer Engineering
              </li>
              </Link>
              <Link to={"/Department/InformationTechDept"}>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">
                Information Technology Engineering
              </li>
              </Link>
              <Link to={"/Department/MBA"}>
              <li className="px-4 py-2 hover:bg-gray-100 w-60">M.B.A.</li>
              </Link>
            </ul>
          )}
        </li>

        {/* Alumni */}
        <li
          className="relative cursor-pointer"
        >
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
        <li
          className="relative cursor-pointer"
        >
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
        <li
          className="relative cursor-pointer"
        >
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
        <li
          className="relative cursor-pointer"
        >
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

        <li>RTI</li>
        <li>ERP</li>
        <li>Library</li>
        <li>Gallery</li>


        <li>Contact us</li>
        <li>About us</li>
        <li>Site map</li>
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
        <a href="" className="text-10px font-semibold">Home</a>

        {/* Department Dropdown Mobile */}
        <div className=" gap-1">
          <button
            onClick={() => setOpenMenu(openMenu === "dept" ? null : "dept")}
            className="flex items-center justify-between w-full text-10px font-semibold"
          >
            Department
            <ChevronDown
              size={20}
              className={`transition-transform ${
                openMenu === "dept" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openMenu === "dept" && (
            <ul className="pl-4 mt-2  space-y-2 text-base">
              <li><a href="">Basic Science and Humanities(FE)</a></li>
              <li><a href="">Computer Engineering</a></li>
              <li><a href="">Electronics & Computer Engineering</a></li>
              <li> <a href="">Information Technology Engineering</a></li>
              <li><a href="">Electrical Engineering (In Progressive Closure)</a></li>
              <li><a href="">Mechanical Engineering (In Progressive Closure)</a></li>
            </ul>
          )}
        </div>
        <div>
          <button
            onClick={() => setOpenMenu(openMenu === "alumin" ? null : "alumin")}
            className="flex items-center justify-between w-full text-10px font-semibold"
          >
            Alumin
            <ChevronDown
              size={20}
              className={`transition-transform ${
                openMenu === "alumin" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openMenu === "alumin" && (
            <ul className="pl-4 mt-2 space-y-2 text-base">
              <li><a href="">Alumni Information</a></li>
              <li><a href="">Alumni Registration</a></li>
              <li><a href="">Alumni Search</a></li>
              <li><a href="">View All Alumni</a></li>
              <li><a href="">Alumni Chapters and Alumni Meet Info.</a></li>
            </ul>
          )}
        </div>
        <div>
          <button
            onClick={() => setOpenMenu(openMenu === "TPC" ? null : "TPC")}
            className="flex items-center justify-between w-full text-10px font-semibold"
          >
            TPC Section
            <ChevronDown
              size={20}
              className={`transition-transform ${
                openMenu === "TPC" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openMenu === "TPC" && (
            <ul className="pl-4 mt-2 space-y-2 text-base">
              <li><a href="">TPC Information</a></li>
              <li><a href="">Registration Form</a></li>
              <li><a href="">Placement Process</a></li>
              <li><a href="">List Of Companies</a></li>
            </ul>
          )}
        </div>
        <div>
          <button
            onClick={() => setOpenMenu(openMenu === "NAAC" ? null : "NAAC")}
            className="flex items-center justify-between w-full text-10px font-semibold"
          >
            NAAC
            <ChevronDown
              size={20}
              className={`transition-transform ${
                openMenu === "NAAC" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openMenu === "NAAC" && (
            <ul className="pl-4 mt-2 space-y-2 text-base">
             <li><a href="">NAAC UNDERTAKING</a></li>
              <li><a href="">NAAC SELF DECLARATION</a></li>
              <li><a href="">Extended Profile</a></li>
              <li><a href="">Criteria 1</a></li>
              <li><a href="">Criteria 2</a></li>
              <li><a href="">Criteria 3</a></li>
              <li><a href="">Criteria 4</a></li>
              <li><a href="">Criteria 5</a></li>
              <li><a href="">Criteria 6</a></li>
              <li><a href="">Criteria 7</a></li>
            </ul>
          )}
        </div>
        <div>
          <button
            onClick={() => setOpenMenu(openMenu === "Imp" ? null : "Imp")}
            className="flex items-center justify-between w-full text-10px font-semibold"
          >
            Important Links
            <ChevronDown
              size={20}
              className={`transition-transform ${
                openMenu === "Imp" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openMenu === "Imp" && (
            <ul className="pl-4 mt-2 space-y-2 text-base">
             <li><a href="">AICTE</a></li>
              <li><a href="">DTE</a></li>
              <li><a href="">NBA</a></li>
              <li><a href="">UGC</a></li>
              <li><a href="">Shikshan Shulk Samiti</a></li>
              <li><a href="">Unipune</a></li>
            </ul>
          )}
        </div>

        <a href="" className="text-10px font-semibold">RTI</a>
        <a href="" className="text-10px font-semibold">ERP</a>
        <a href="" className="text-10px font-semibold">Library</a>
        <a href="" className="text-10px font-semibold">Gallery</a>
        <a href="" className="text-10px font-semibold">Examination</a>
        <a href="" className="text-10px font-semibold">Contact us</a>
        <a href="" className="text-10px font-semibold">About us</a>
        <a href="" className="text-10px font-semibold">Site map</a>
      </div>
    </nav>
  );
}
