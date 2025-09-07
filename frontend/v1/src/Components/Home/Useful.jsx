import React from "react";
import {Link} from "react-router-dom"

import { ChevronDown,ChevronUp } from "lucide-react";

export default function Useful() {

    const LinkList=[
      { text:"Click Here to Pay Fees Online", url:""},
      { text:"Apply for Transcript", url:""},
      { text:"Apply for Verification", url:""},
      { text:"Apply for T360 (Co-curricular Transcript)", url:""},
      { text:"Apply for Educational loan through Vidya Laxmi Portal", url:""},
      { text:"स्वामी विवेकानंद युवा सुरक्षा योजना", url:""},
      { text:"Anti Ragging Committee", url:""},
      { text:"Divyang cell Committee", url:""},
      { text:"Equal Opportunity Cell", url:""},
      { text:"Grievance Redressal Committee", url:""},
      { text:"Internal Quality Assurance Cell", url:""},
      { text:"Startup & Innovation Cell", url:""},
      { text:"Student Council Cell Committee", url:""},
      { text:"Womens Anti-Sexual Harassment Cell Committee", url:""},
      { text:"College Development committee", url:""},
      { text:"Governing Body", url:""}
    ]

  return (
    <div className="mt-5 ml-4 gap-3">
    
      <div className="bg-black p-1 mt-2"><h1 className="font-sans text-white border-white border-l-2 shadow p-2 ">Useful Links</h1></div>
      <div className="pl-35"><ChevronUp size={20} className="ml-1" /></div>
      <div className=" md:w-full h-90 rounded-md shadow-sm justify-center p-1 mt-2 mb-2 overflow-auto relative">
     {LinkList.map((item,i)=>(
    <ul>
      <li className="p-2">
        <Link 
      to={item.url}
      className="hover:text-blue-500"
      >
        {item.text}
      </Link>
    </li>
    </ul>
     ))}
    </div>
    <div className="pl-35"><ChevronDown size={20} className="ml-1" /></div>
    </div>
  );
}
