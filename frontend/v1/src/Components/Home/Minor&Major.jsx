import React from "react";
import { Link } from "react-router-dom";

export default function MinorMajor() {
  return (
    <div className="md:mt-10 mt-5">
      <div className="bg-[#14244F] p-2">
        <h1 className="font-sans text-white border-white border-l-2  p-1 ">
          Important Links
        </h1>
      </div>
      <div className="w-full md:w-80 text- rounded-md shadow-sm justify-center p-1 mt-2 mb-2 overflow-hidden h-auto relative">
        <ul className="flex flex-col  gap-4">
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Major_Research_Projects</Link>
          </li>
          <li className="hover:border-l-1 pl-2 border-blue-500">
            <Link to="">Minor_Research_Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
