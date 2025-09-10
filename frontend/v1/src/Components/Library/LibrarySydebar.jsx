import { Link } from "react-router-dom";

export default function LibrarySideBar() {
  return (
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-5 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-4 pl-5">
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/library"}>Department Profile </Link>
        </li>
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/library/advisory-committee"}>
            Library Advisory Committee
          </Link>
        </li>

        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/library/faculty"}>Faculty</Link>
        </li>
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/library/objectives"}>Objectives & Rules</Link>
        </li>
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/library/facilities"}>Facilities</Link>
        </li>
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <a
            href="https://vmecopac.ltsinformatics.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Library OPAC
          </a>
        </li>

        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/library/section"}>Section</Link>
        </li>
      </ul>
    </div>
  );
}
