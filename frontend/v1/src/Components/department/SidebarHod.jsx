import React from 'react'
import Sidebar from './Sidebar'
import Hod from './Hod'

function SidebarHod({Hodimg,Hodname,hodQ,Department}) {
  return (
  <>
  <h1
  className="text-3xl sm:text-1xl md:text-2xl lg:text-5xl 
             font-serif font-bold tracking-wide 
             text-dark drop-shadow-lg 
             text-center md:mt-8 mb-6 relative"
>
  Department of {Department}
</h1>


  <main className="flex flex-col md:flex-row w-screen overflow-hidden bg-white">
    <Sidebar  />
    <Hod Hodimg={Hodimg} Hodname={Hodname} hodQ={hodQ}/>
  </main>
  </>
);  
}

export default SidebarHod