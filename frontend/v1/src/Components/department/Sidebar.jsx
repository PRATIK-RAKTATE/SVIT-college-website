import { Link } from "react-router-dom";

export default function HomeSideBar() {
  return (
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-25 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-2 pl-5">
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"https://www.kimi.com/chat/d2s5sk2f7calm5dv4l70"}>Department Profile </Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Course Details</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>PEOs,POs & PSOs</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Faculty</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Labs</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Syllabus</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Events</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Results</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Placement</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Extra-curricular & Co-curricular Activities</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Placement Brochure</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Academic Book</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>E-resources</Link>
        </li>
      </ul>
    </div>
  );
}
