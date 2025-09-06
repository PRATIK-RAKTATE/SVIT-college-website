import React from "react";
import { Link } from "react-router-dom";

export default function Useful() {
  return (
    <div className="mt-5 ml-4 gap-3">
      <div className="bg-black p-1 mt-2">
        <h1 className="font-sans text-white border-white border-l-2 shadow p-2 ">
          Useful Links
        </h1>
      </div>
      <div className="w-full md:w-80 h-90 rounded-md shadow-sm justify-center p-1 mt-2 mb-2 overflow-auto relative">
        <ul className="flex flex-col gap-2">
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Click Here to Pay Fees Online</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Apply for Transcript</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Apply for Verification</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Apply for T360 (Co-curricular Transcript)</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">
              Apply for Educational loan through Vidya Laxmi Portal
            </Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">
              Apply for Educational loan through Vidya Laxmi Portal
            </Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">
              स्वामी विवेकानंद युवा सुरक्षा योजना (Student Insurance Scheme)
            </Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Anti Ragging Committee</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Divyang cell Committee</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Equal Opportunity Cell</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Grievance Redressal Committee</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Internal Quality Assurance Cell (IQAC)</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Startup & Innovation Cell</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Student Council Cell Committee</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Womens Anti-Sexual Harassment Cell Committee</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">College Development committee</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Governing Body</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
