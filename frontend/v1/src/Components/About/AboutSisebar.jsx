import { Link } from "react-router-dom";

export default function HomeSideBar() {
  return (
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-25 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-2 pl-5">
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/AbouttheSociety"}>About the Society </Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Mission & Vision</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Principal's Desk</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Admission</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Inception</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Curriculum & Syllabus</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Infrastructure
</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Success Stories</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>News & Events
</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>MBA</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Academic Calender
</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Placement Brochure</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>E-Brochure</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Linkages</Link>
        </li>
      </ul>
    </div>
  );
}
