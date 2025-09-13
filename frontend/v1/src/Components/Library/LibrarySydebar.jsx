import { Link, useLocation } from "react-router-dom";

export default function LibrarySideBar() {
  const location = useLocation();

  const linkClasses = (isActive = false) =>
    `block border-l-4 border-[#4F39F6] p-2 pl-3 shadow rounded transition-all duration-200 text-sm ${
      isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
    }`;

  const links = [
    { label: "Department Profile", to: "/library" },
    { label: "Library Advisory Committee", to: "/library/advisory-committee" },
    { label: "Faculty", to: "/library/faculty" },
    { label: "Objectives & Rules", to: "/library/objectives" },
    { label: "Facilities", to: "/library/facilities" },
    { label: "Library OPAC", href: "https://vmecopac.ltsinformatics.com/" },
    { label: "Section", to: "/library/section" },
  ];

  return (
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-5 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-3 pl-5">
        {links.map((l, i) =>
          l.href ? (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses()}
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={i}
              to={l.to}
              className={linkClasses(location.pathname === l.to)}
            >
              {l.label}
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
