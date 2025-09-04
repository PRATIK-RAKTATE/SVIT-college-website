import {Link,NavLink} from "react-router-dom"

export default function HomeSideBar()
{
    return(
        <div className="md:w-auto">
        <ul className="h-auto w-70 flex flex-col gap-2">
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>College Affiliation Letters</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>About the Society</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Mission & Vision</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Principal's Desk</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Admission</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Inception</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Curriculum & Syllabus</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Infrastructure</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Success Stories</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Academic Calender</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Placement Brochure</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>E-Brochure</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Linkages</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>Code Of Conduct</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>IIQA</Link></li>
            <li className="border-l-4 border-black hover:bg-black hover:text-white p-1 m-0 pl-2 shadow text-sm hover:border-red-400"><Link>AICTE Online Skill Test for FE to BE Students</Link></li>
        </ul>
    </div>
    )
    
}