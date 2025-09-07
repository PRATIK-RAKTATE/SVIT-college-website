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
        { text: "AICTE", url: "/links/aicte" },
        { text: "DTE", url: "/links/dte" },
        { text: "NBA", url: "/links/nba" },
        { text: "UGC", url: "/links/ugc" },
        { text: "Shikshan Shulk Samiti", url: "/links/shikshan-shulk" },
        { text: "Unipune", url: "/links/unipune" },
      ],
    },
    {
      key: "add",
      label: "Admission",
      items: [
        
        { text: "Admission Details", url: "/links/aicte" },
        { text: "Admission 2025-26 (Institute Level Non CAP Admission)", url: "/links/dte" },
        { text: "Admission Enquiry Form", url: "/links/nba" },
      ],
    },
  ];



  return (
    <nav className="bg-white px-4 py-3 shadow-md relative z-50">
   
      <div className="hidden md:flex md:justify-center md:gap-6 font-medium">
        
        <NavLink to="/" className={({ isActive }) =>
            `${isActive ? "text-red-500" : "text-black"}`
          }>Home
          </NavLink>
      
    
      {menuItems.map((menu)=>(
        <ul className="relative group cursor-pointer">
            <div className="  flex items-center hover:text-blue-400">
              {menu.label} <ChevronDown size={16} className="ml-1" />
            </div>

            <ul className="absolute left-0 pt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50 ">
              {menu.items.map((item,id)=>(
                <NavLink to={item.url} className={({ isActive }) =>
            `${isActive ? "text-red-500" : "text-black"} `
          }>
                  <li className="px-4 py-2 hover:bg-gray-100 w-70">
                    {item.text}
                  </li>
                  </NavLink>
              ))}
            </ul>
        </ul>
      ))}
     
     <NavLink to="/rti" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>RTI</NavLink>
     <NavLink to="/erp" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>ERP</NavLink>
     <NavLink to="/library" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Library</NavLink>
     <NavLink to="/gallery" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Gallery</NavLink>
     <NavLink to="/contactus" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Contact us</NavLink>

     <NavLink to="/about" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>About us</NavLink>
     <NavLink to="/about/Examination" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Examination</NavLink>

     <NavLink to="/sm" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Site map</NavLink>
     

      </div>
  
      <div className="md:hidden flex justify-end">
        <div className="flex justify-center ">
          <h1 className="pt-2 mr-65">Menu</h1>
          <button onClick={toggleMenu} className="p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
      </div>

  
      <div
        className={`fixed top-0 left-0 w-3/4 h-screen bg-white text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col gap-6`}
      >
        {/* Home */}
        <NavLink to="/" className="text-xs font-semibold">
          Home
        </NavLink>

        {/* Mobile dropdowns (expand on click) */}
        {menuItems.map((menu) => (
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
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                {menu.items.map((item, idx) => (
                  <li key={idx} className="cursor-pointer">
                    <Link to={item.url}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

     <NavLink to="/rti" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}"`}>RTI</NavLink>
     <NavLink to="/erp" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>ERP</NavLink>
     <NavLink to="/li" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Library</NavLink>
     <NavLink to="/ga" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Gallery</NavLink>
     <NavLink to="/contactus" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Contact us</NavLink>
     <NavLink to="/au" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>About us</NavLink>
     <NavLink to="/sm" className={({isActive})=>`${isActive ? "text-red-500 ": "text-black"}`}>Site map</NavLink>
      </div>
    </nav>
  );
}