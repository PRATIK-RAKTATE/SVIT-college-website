import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";




export default function Footer()
{
    return(
        <div className="w-screen p-10 flex flex-col md:flex-row md:justify-between gap-10 
                bg-gradient-to-r from-red-900 via-red-1000 to-black">

            <div className="flex flex-col  gap-4">
                <span className="text-white ">Quick Link</span>
                <ul> 
                <li><Link to='' className="text-white">Home</Link></li>
                <li><Link to='' className="text-white">Glimpses</Link></li>
                <li><Link to='' className="text-white">Contact us</Link></li>
                <li><Link to='' className="text-white">About us</Link></li>
                <li><Link to='' className="text-white">Site Map</Link></li>
            </ul>
            </div>

            <div className="flex flex-col gap-4">
                <span className="text-white">Quick Link</span>
            <ul className=""> 
                <li><Link to='' className="text-white">About the Society</Link></li>
                <li><Link to='' className="text-white">Mission & Vision </Link></li>
                <li><Link to='' className="text-white">Principal's Desk</Link></li>
                <li><Link to='' className="text-white">Admission</Link></li>
                <li><Link to='' className="text-white">Inception</Link></li>
                <li><Link to='' className="text-white">Curriculum & Syllabus</Link></li>
                <li><Link to='' className="text-white">Infrastructure</Link></li>
            </ul>
            </div>


            <div className="flex flex-col gap-4">
                <span className="text-white">Quick Link</span>
            <ul className=""> 
                <li><Link to='' className="text-white">Success Stories</Link></li>
                <li><Link to='' className="text-white">News & Events</Link></li>
                <li><Link to='' className="text-white">Academic Calender</Link></li>
                <li><Link to='' className="text-white">Placement Brochure</Link></li>
                <li><Link to='' className="text-white">E-Brochure</Link></li>
                <li><Link to='' className="text-white">Group Linkages</Link></li>
            </ul>
            </div>

            <div className="flex flex-col gap-4">
                <span className="text-white">Quick Link</span>
            <ul className=""> 
                <li><Link to='' className="text-white">Computer Engineering</Link></li>
                <li><Link to='' className="text-white">Chemical Engineering</Link></li>
                <li><Link to='' className="text-white">E&TC Engineering</Link></li>
                <li><Link to='' className="text-white">IT Engineering</Link></li>
                <li><Link to='' className="text-white">M.B.A.</Link></li>
            </ul>
            </div>

        <div className="flex flex-col  items-center gap-4">

        <span className="text-white">Follow Us On</span>

        <div className="flex gap-6">
            <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-red-500 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        </div>
        
      </div>
        </div>
    )
}