import React from 'react'
import Sidebar from './Sidebar'
import Hod from './Hod'

function SidebarHod() {
  return (
  <main className="flex flex-col md:flex-row w-screen h-screen overflow-hidden bg-white">
    <Sidebar />
    <Hod/>
  </main>
);  
}

export default SidebarHod