import { Link } from "react-router-dom";

export default function HomeSideBar() {
  const listItems = [
    { text: "College Affiliation Letters", url: "/college-affiliation" },
    { text: "About the Society", url: "/about" },
    { text: "Mission & Vision", url: "/about/VissionMission" },
    { text: "Principal's Desk", url: "/about/principleDesk" },
    { text: "Admission", url: "/admission/Admissiondetails" },
    { text: "Inception", url: "/about/Inception" },
    { text: "Curriculum & Syllabus", url: "/about/Curriculum&Syllabus" },
    { text: "Infrastructure", url: "/about/Infrastructure" },
    { text: "Success Stories", url: "/success-stories" },
    { text: "Academic Calender", url: "/academic-calendar" },
    { text: "Placement Brochure", url: "/placement-brochure" },
    { text: "E-Brochure", url: "/e-brochure" },
    { text: "Linkages", url: "/about/Linkages" },
    { text: "Code Of Conduct", url: "/code-of-conduct" },
    { text: "IIQA", url: "/iiqa" },
    {
      text: "AICTE Online Skill Test for FE to BE Students",
      url: "https://www.youth4work.com/onlinetalenttest",
    },
  ];

  return (
    <div className="md:w-auto md:mt-4">
      <ul className="h-auto w-70 flex flex-col gap-2">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm "
          >
            <Link to={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
