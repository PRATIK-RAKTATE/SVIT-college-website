import { Link } from "react-router-dom";

export default function HomeSideBar() {
  const listItems = [
    { text: "College Affiliation Letters", url: "/college-affiliation" },
    { text: "About the Society", url: "/about-society" },
    { text: "Mission & Vision", url: "/mission-vision" },
    { text: "Principal's Desk", url: "/principals-desk" },
    { text: "Admission", url: "/admission" },
    { text: "Inception", url: "/inception" },
    { text: "Curriculum & Syllabus", url: "/curriculum-syllabus" },
    { text: "Infrastructure", url: "/infrastructure" },
    { text: "Success Stories", url: "/success-stories" },
    { text: "Academic Calender", url: "/academic-calendar" },
    { text: "Placement Brochure", url: "/placement-brochure" },
    { text: "E-Brochure", url: "/e-brochure" },
    { text: "Linkages", url: "/linkages" },
    { text: "Code Of Conduct", url: "/code-of-conduct" },
    { text: "IIQA", url: "/iiqa" },
    {
      text: "AICTE Online Skill Test for FE to BE Students",
      url: "/aicte-skill-test",
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
