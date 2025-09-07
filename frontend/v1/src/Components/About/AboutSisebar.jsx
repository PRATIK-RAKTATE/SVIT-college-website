import { Link } from "react-router-dom";

export default function HomeSideBar() {
  return (
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-25 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-2 pl-5">
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/AbouttheSociety"}>About the Society </Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/VissionMission"}>Mission & Vision</Link>
        </li>

        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/principleDesk"}>Principal's Desk</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/Admission"}>Admission</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/Inception"}>Inception</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/Curriculum&Syllabus"}>Curriculum & Syllabus</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/Infrastructure"}>Infrastructure</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Success Stories</Link>
        </li>

        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>Placement Brochure</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link>E-Brochure</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/Linkages"}>Linkages</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <a
            href="https://svitnashik.in/Documents/CodeOfConduct.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Of Conduct
          </a>
        </li>

        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link to={"/about/IIQA"}>IIQA</Link>
        </li>
        <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm">
          <Link
            to="https://www.youth4work.com/onlinetalenttest"
            target="_blank"
            rel="noopener noreferrer"
          >
            AICTE Online Skill Test for FE to BE Students
          </Link>
        </li>
      </ul>
    </div>
  );
}
