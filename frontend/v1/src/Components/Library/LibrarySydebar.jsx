import { Link } from "react-router-dom";

export default function LibrarySideBar() {
  return (
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-25 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-4 pl-5">
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/library"}>Department Profile </Link>
        </li>
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/Library/AdvisoryCommittee"}>
            Library Advisory Committee
          </Link>
        </li>

        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/Library/Faculty"}>Faculty</Link>
        </li>
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/Library/Objectives"}>Objectives & Rules</Link>
        </li>
        <li className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-2 shadow text-sm">
          <Link to={"/Library/Facilities"}>Facilities</Link>
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
          <Link to={"/Library/Section"}>Section</Link>
        </li>
      </ul>
    </div>
  );
}
