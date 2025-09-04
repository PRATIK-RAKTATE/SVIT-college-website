import React from "react";
import {Link} from "react-router-dom"


export default function News() {
  const newsItems = [
    { text: "Click Here to Pay Fees Online", url: "https://docs.google.com/forms/d/e/1FAIpQLScy0O757Bw1lNMDHdvIUB0k-YfC0MwKDVo-mIyYMq8bYIozcg/viewform" },
    { text: "Admission 2025-26 Inquiry Form", url: "https://docs.google.com/forms/d/e/1FAIpQLScy0O757Bw1lNMDHdvIUB0k-YfC0MwKDVo-mIyYMq8bYIozcg/viewform" },
    { text: "LOKNETE DR.BALASAHEB VIKHE PATIL, PRAVARA RURAL EDUCATION SOCIETY's INFORMATION BROCHURE", url: "https://docs.google.com/forms/d/e/1FAIpQLScy0O757Bw1lNMDHdvIUB0k-YfC0MwKDVo-mIyYMq8bYIozcg/viewform" },
    { text: "Online Skill Test for FE to BE Students", url: "https://www.youth4work.com/onlinetalenttest" },
    { text: "Anti-Ragging Committee", url: "https://svitnashik.in/Documents/Anti%20Ragging%20Committee-2024-25.pdf" },
    { text: "Staff Grievances Redressal Committee", url: "https://svitnashik.in/Documents/3Grievance_Redressal_Committee.pdf" },
    { text: "Internal Complaint Committee", url: "https://svitnashik.in/Documents/4Internal_Complaint_Committee.pdf" },
    { text: "SC-ST Committee", url: "https://svitnashik.in/Documents/5SCST_Committee.pdf" },
    { text: "Internal Quality Assurance Cell", url: "https://svitnashik.in/Documents/6Internal_Quality_Assurance_Cell.pdf" },
    { text: "NAAC Steering Committee", url: "https://svitnashik.in/Documents/NAAC_Steering_Committee.pdf" },
    { text: "Academic Calendar-2024-25", url: "#" },
    { text: "Skill Development Program Details", url: "" },
    { text: "Major Research Projects", url: "#" },
    { text: "Minor Research Projects", url: "#" },
    { text: "Placement Brochure 2023", url: "#" },
  ];

  return (
    <div className="mt-5 ml-4 gap-3">
      <div className="bg-black p-1"><h1 className="font-sans  text-white border-l-2 border-white shadow p-2">News & Announcements</h1></div>
      <div className="w-full md:w-80 text- rounded-md shadow-sm justify-center p-4 mt-2  overflow-hidden h-40 relative">
      <div className="marquee space-y-3 hover:[animation-play-state:paused]">
        {newsItems.map((item, i) => (
          <p key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-[16px] font-medium transition-colors duration-300"
            >
              <em>{item.text}</em>
            </a>
          </p>
        ))}
      </div>
    </div>
    </div>
  );
}
