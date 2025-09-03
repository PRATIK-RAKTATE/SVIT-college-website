import { useState } from "react"
import {motion,AnimatePresence} from "framer-motion"




export default function HomeSideBar(){
    
    const[open,setOpen] =useState(null)
    
    const MenuItem=[
        "College Affiliation Letters",
        "About the Society",
        "Mission & Vision",
        "Principal's Desk",
        "Admission",
        "Inception",
        "Curriculum & Syllabus",
    ]


    return(
        <div className="flex flex-col">
            <button className="bg-red-200 w-20 h-10"
            onClick={()=>setOpen(!open)}
            >Menu</button>

        <AnimatePresence>
            {open&& <motion.ul 
            className="mt-4"
            initial={{opacity:0,height:0}}
            animate={{opacity:1,height:'auto'}}
            exit={{opacity:0,height:0}}
            >

                {MenuItem.map((item,id)=>(
                    <motion.li
                    key={id}
                    className="w-64 bg-red-700 text-white px-4 py-2 rounded-md shadow-md cursor-pointer">
                        {item}
                    </motion.li>
                ))}
                
                </motion.ul>}
        </AnimatePresence>

        </div>
    )
}